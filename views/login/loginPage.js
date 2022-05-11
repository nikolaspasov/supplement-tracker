import { loginTemplate } from "./loginTemplate.js";

let _router = undefined;
let _renderer = undefined;
let _authService = undefined;

function initialize(routerer, renderer, authService) {

    _router = routerer;
    _renderer = renderer
    _authService = authService;
}

async function submitHandler(e) {
    e.preventDefault();

    let loginData = new FormData(e.target);
    let username = loginData.get('username');
    let password = loginData.get('password');
    let user = {
        username,
        password
    }
    
     await _authService.login(user)
    _router.redirect('/supplements')
}


async function getView() {
    let model ={
        submitHandler
    }

    let templateResult = loginTemplate(model);
    _renderer(templateResult);
}

export default {
    initialize,
    getView,
}