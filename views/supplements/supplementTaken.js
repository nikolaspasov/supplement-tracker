import {supplementTakenTemplate} from "./supplementTakenTemplate.js";

let _router = undefined;
let _renderer = undefined;


function initialize(routerer, renderer) {

    _router = routerer;
    _renderer = renderer;
}

async function getView() {
    
    //let itemsArray =
    //Object.entries(window.localStorage).map((e)=> ({[e[0]]: e[1]}));
    //console.log(itemsArray);
    
    //console.log(itemsArray['zinc']);

    
    let locStorage = window.localStorage;
    let model ={
        locStorage
    }
    
    
    let resultTemplate = supplementTakenTemplate(model);
    _renderer(resultTemplate);
}

export default {
    getView,
    initialize
}