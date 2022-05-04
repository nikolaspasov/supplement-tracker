import { supplementTemplate } from "./supplementTemplate.js";
import {supplementTakenTemplate} from "./supplementTakenTemplate.js";
import supplementTaken from "./supplementTaken.js";

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
        let doseObj =  {name:supplementType, value: value, unit: unit};
        window.localStorage.setItem(supplementType,JSON.stringify(doseObj));
        console.log(window.localStorage.getItem(supplementType))
    }
    // else{
    //     let previousValue = window.localStorage.getItem(supplementType);
    //     let newValue = Number(previousValue) + Number(value);
    //     window.localStorage.setItem(supplementType, newValue);
    // }
    supplementTaken.getView();

}

async function getView(context, next) {
    let model = { 
        submitHandler,
        locStorage,
        
    };
    let resultTemplate = supplementTemplate(model);
    _renderer(resultTemplate);
   next();
}

export default {
    getView,
    initialize,
    submitHandler
}