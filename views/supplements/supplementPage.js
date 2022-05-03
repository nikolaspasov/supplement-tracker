import { supplementTemplate } from "./supplementTemplate.js";
import {supplementTakenTemplate} from "./supplementTakenTemplate.js";

let _router = undefined;
let _renderer = undefined;
let locStorage = window.localStorage;

function initialize(routerer, renderer) {

    _router = routerer;
    _renderer = renderer
}

function submitHandler(event, supplementType) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let unit = formData.get('unit');
    let value = formData.get('value');
    console.log(unit);
    
    if(!window.localStorage.getItem(supplementType)){
        let doseObj =  {"value": value, "unit": unit};
        window.localStorage.setItem(supplementType, JSON.stringify(doseObj));
        console.log(window.localStorage.getItem(supplementType))
    }
    // else{
    //     let previousValue = window.localStorage.getItem(supplementType);
    //     let newValue = Number(previousValue) + Number(value);
    //     window.localStorage.setItem(supplementType, newValue);
    // }
    

}

function getView() {
    let model = { 
        submitHandler,
        locStorage,
        
    };
    let resultTemplate = supplementTemplate(model);
    _renderer(resultTemplate);
}

export default {
    getView,
    initialize,
    submitHandler
}