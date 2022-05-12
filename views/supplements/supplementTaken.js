import { supplementTakenTemplate, clearTemplate } from "./supplementTakenTemplate.js";

let _router = undefined;
let _renderer = undefined;


function initialize(routerer, renderer) {

    _router = routerer;
    _renderer = renderer;
}

function deleteIntake(e) {
   
    localStorage.removeItem(e.currentTarget.parentNode.parentNode.id);
    getView();
}
function logout(){
    sessionStorage.clear();
    _renderer(clearTemplate());
    _router.redirect('/login')
}

function getView() {

    //let itemsArray =
    //Object.entries(window.localStorage).map((e)=> ({[e[0]]: e[1]}));
    //console.log(itemsArray);

    //console.log(itemsArray['zinc']);


    let locStorage = (window.localStorage);
    let model = {
        locStorage,
        deleteIntake,
        logout
    }


    let resultTemplate = supplementTakenTemplate(model);
    _renderer(resultTemplate);

}

export default {
    getView,
    initialize,
    deleteIntake
}