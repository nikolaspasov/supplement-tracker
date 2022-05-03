import page from '/node_modules/page/page.mjs'

import { LitRenderer } from './rendering/litRenderer.js';
import loginPage from '/views/login/loginPage.js'
import supplementPage from './views/supplements/supplementPage.js';

let navigationElement = document.getElementById('navigation');
let mainContentElement = document.getElementById('main-content');

let renderer = new LitRenderer();
let appRenderer = renderer.createRenderHandler(mainContentElement);

page('/index.html', '/supplements');
page('/', '/supplements');

supplementPage.initialize(page, appRenderer)

page('/supplements', supplementPage.getView);
//page('/login', loginPage);

page.start();

