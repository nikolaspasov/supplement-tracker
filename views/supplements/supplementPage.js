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

function submitHandler(event, supplementKey, supplementName) {
    event.preventDefault();
    

    try {
        let formData = new FormData(event.target);
        let unit = formData.get('unit');
        let value = formData.get('value');
        console.log(unit);
       
       let errorMessages = [];

       if(!supplementName){
           errorMessages.push('Supplement is required')
       }
       if(value.trim()===''){
           errorMessages.push('Amount is required')
       }

       if(errorMessages.length>0){
           alert(errorMessages.join('\n'));
           return;
       }
       
        if(!window.localStorage.getItem(supplementKey)){
            let doseObj =  {'name':supplementName, 'key':supplementKey, 'value': value, 'unit': unit};
            window.localStorage.setItem(supplementKey,JSON.stringify(doseObj));
        }
        else if(JSON.parse(window.localStorage.getItem(supplementKey)).unit === unit){
            // let previousValue = window.localStorage.getItem(supplementType);
            // let newValue = Number(previousValue) + Number(value);
            // window.localStorage.setItem(supplementType, newValue);
            let supplementEntry = JSON.parse(window.localStorage.getItem(supplementKey));
            supplementEntry.value = Number(value) + Number(supplementEntry.value);
            window.localStorage.setItem(supplementKey,JSON.stringify(supplementEntry));
        }
        supplementTaken.getView();
        

    } catch (error) {
        alert(error);
    }
    
    
}

function getView(context, next) {
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