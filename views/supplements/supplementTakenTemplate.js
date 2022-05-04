import { html } from '../../node_modules/lit-html/lit-html.js';


export let supplementTakenTemplate = (model) => html`

    ${Object.keys(model.locStorage).length>0
        ?  Object.keys(model.locStorage).map((key,index)=>
        entryTemplate(JSON.parse(model.locStorage[key])))

        : html`<p >No supplements taken.</p>`
    }
    
`;

let entryTemplate = (obj) => html`
    <li>${obj.name}<span id="Omega">${obj.value}</span>${obj.unit}<button class="delete-btn">DEL</button></li>

`;

function mapAllEntries(model){
    // Object.keys(model.locStorage).map(function(key,index){
    //    console.log(model.locStorage[key]);
    //     entryTemplate(model.locStorage[key])
    // })
    // for (const key in model.locStorage) {
    //     return model.locStorage[key];
    // }

};
