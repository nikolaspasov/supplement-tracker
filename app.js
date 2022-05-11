import page from '/node_modules/page/page.mjs'

import { LitRenderer } from './rendering/litRenderer.js';
import loginPage from '/views/login/loginPage.js'
import supplementPage from './views/supplements/supplementPage.js';
import supplementTaken from './views/supplements/supplementTaken.js';
import authService from './services/authService.js';
import registerPage from './views/register/registerPage.js';


let navigationElement = document.getElementById('navigation');
let mainContentElement = document.getElementById('supplements');
let supplementsTakenContentElement = document.getElementById('supplements-added-list');

let renderer = new LitRenderer();
let appRenderer = renderer.createRenderHandler(mainContentElement);
let supplementsTakenRenderer = renderer.createRenderHandler(supplementsTakenContentElement);

page('/index.html', '/login');
page('/', '/login');

loginPage.initialize(page, appRenderer, authService)
registerPage.initialize(page, appRenderer, authService)
supplementPage.initialize(page, appRenderer);
supplementTaken.initialize(page, supplementsTakenRenderer);

//page('/supplements', supplementPage.getView,supplementTaken.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/supplements', supplementPage.getView, supplementTaken.getView)



//page('/login', loginPage);

page.start();

