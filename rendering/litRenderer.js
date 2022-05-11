import { render } from '../../node_modules/lit-html/lit-html.js'

export class LitRenderer {

    //constructor(){}

    createRenderHandler(domElement){
        //domElement.textContent = '';
        return function (templateResult){
            render(templateResult, domElement);
        }
    }
}