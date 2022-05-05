import { html } from '../../node_modules/lit-html/lit-html.js';


export let supplementTakenTemplate = (model) => html`

    ${Object.keys(model.locStorage).length>0
        ?  Object.keys(model.locStorage).map((key,index)=>
        entryTemplate((JSON.parse(model.locStorage[key])), model ))

        : html`<p >No supplements taken.</p>`
    }
    
`;

let entryTemplate = (obj,model) => html`
    <li id="${obj.key}">
        ${obj.name} 
            <span>
                ${obj.value}
            </span>

            ${obj.unit}

        <button class="delete-btn" @click=${(e)=> model.deleteIntake(e)}>
            DEL
        </button>

    </li>

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
