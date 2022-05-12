import { html } from '../../node_modules/lit-html/lit-html.js';

export let clearTemplate = () => html``;

export let supplementTakenTemplate = (model) => html`
   
   <table id="supplements-added-list">
    
        <thead>
            <th>Supplement</th>
            <th id="amount">Amount</th>
            <th>Unit</th>
        </thead>
        <tbody>
            ${Object.keys(model.locStorage).length > 0
                ? Object.keys(model.locStorage).map((key, index) =>
                entryTemplate((JSON.parse(model.locStorage[key])), model))

                : html`<tr>No supplements taken.</tr>`
            }
        </tbody>
    
    </table>

    <footer>

        <button id="logout-btn" @click = ${model.logout}>logout</button>
       
    </footer>
`;

let entryTemplate = (obj, model) => html`
    <tr id="${obj.key}">
        <td>${obj.name} </th>
        <td id="amount">
            ${obj.value}
        </td>
        <td>
            ${obj.unit}
            <button id="delete-btn" class="delete-btn" @click=${(e)=> model.deleteIntake(e)}>
                X
            </button>
        </td>
    
    
    </tr>

`;

function mapAllEntries(model) {
    // Object.keys(model.locStorage).map(function(key,index){
    //    console.log(model.locStorage[key]);
    //     entryTemplate(model.locStorage[key])
    // })
    // for (const key in model.locStorage) {
    //     return model.locStorage[key];
    // }

};
