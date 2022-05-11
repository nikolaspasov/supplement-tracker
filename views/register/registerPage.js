import { registerTemplate } from "./registerTemplate.js";


let _router = undefined;
let _renderer = undefined;
let _authService = undefined;

function initialize(routerer, renderer, authService) {

    _router = routerer;
    _renderer = renderer
    _authService = authService;
}

async function submitHandler(e){

    e.preventDefault();

    let registerData = new FormData(e.target);
    let username = registerData.get('username');
    let password = registerData.get('password');

    let user = {username,password};

    await _authService.register(user);
    _router.redirect('/supplements')
}



async function getView(){

    let model = {
        submitHandler
    }

    let result = registerTemplate(model)
    _renderer(result);
}

export default{
    getView,
    initialize
}

