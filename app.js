import page from '/node_modules/page/page.mjs'

import { LitRenderer } from './rendering/litRenderer.js';
import loginPage from '/views/login/loginPage.js'
import supplementPage from './views/supplements/supplementPage.js';
import supplementTaken from './views/supplements/supplementTaken.js';

let navigationElement = document.getElementById('navigation');
let mainContentElement = document.getElementById('supplements');
let supplementsTakenContentElement = document.getElementById('supplements-added-list');

let renderer = new LitRenderer();
let appRenderer = renderer.createRenderHandler(mainContentElement);
let supplementsTakenRenderer = renderer.createRenderHandler(supplementsTakenContentElement);

page('/index.html', '/supplements');
page('/', '/supplements');

supplementPage.initialize(page, appRenderer);
supplementTaken.initialize(page, supplementsTakenRenderer);

//page('/supplements', supplementPage.getView,supplementTaken.getView);
page(supplementPage.getView);
page(supplementTaken.getView);


//page('/login', loginPage);

page.start();

