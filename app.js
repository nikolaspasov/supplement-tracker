import page from '/node_modules/page/page.mjs'

import { LitRenderer } from './rendering/litRenderer.js';
import loginPage from '/views/login/loginPage.js'
import supplementPage from './views/supplements/supplementPage.js';
import supplementTaken from './views/supplements/supplementTaken.js';
import authService from './services/authService.js';
import registerPage from './views/register/registerPage.js';


let navigationElement = document.getElementById('navigation');
let mainContentElement = document.getElementById('main-content');
let supplementsElement = document.getElementById('supplements');
let supplementsTakenContentElement = document.getElementById('supplements-added');

let renderer = new LitRenderer();
let appRenderer = renderer.createRenderHandler(supplementsElement);
//let authRenderer = renderer.createRenderHandler(mainContentElement);
let supplementsTakenRenderer = renderer.createRenderHandler(supplementsTakenContentElement);

function removeElement(element){
   
    //document.getElementById(element).innerHTML="";
}

if(sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')){
    sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer')
}

if (sessionStorage.length <1) {
    page('/index.html', '/login');
    page('/', '/login');
}else{
    page('/index.html', '/supplements');
    page('/', '/supplements');
}


loginPage.initialize(page, appRenderer, authService)
registerPage.initialize(page, appRenderer, authService)
supplementPage.initialize(page, appRenderer);
supplementTaken.initialize(page, supplementsTakenRenderer);

//page('/supplements', supplementPage.getView,supplementTaken.getView);
page('/login', loginPage.getView, removeElement("supplements-added"));
page('/register', registerPage.getView);
page('/supplements', supplementPage.getView, supplementTaken.getView)



//page('/login', loginPage);

page.start();

