import { html } from '../../node_modules/lit-html/lit-html.js';
import { supplementTakenTemplate } from './supplementTakenTemplate.js';

let supplementType;
// let showSupps =  function() {
//     for (var i = 0, len = localStorage.length; i < len; ++i) {
//     element.textContent = localStorage.getItem(localStorage.key(i));
//     }};


export let supplementTemplate = (model) => html`
<div class="supplement-btns">
    <form id="supplement-input" @submit=${(e)=> model.submitHandler(e, supplementType)}>

        <div @click=${(e)=> {
        if (e.target.nodeName !== 'BUTTON') {
        return;
        }
        supplementType = e.target.name;
        }}>
            <button class="supplement-button" type="button" name='zinc'>Zinc</button>
            <button class="supplement-button" type="button" name='vitamin-d'>Vitamin D3</button>
            <button class="supplement-button" type="button" name='vitamin-c'>Vitamin C</button>
            <button class="supplement-button" type="button" name='magnesium'>Magnesium</button>
            <button class="supplementssupplement-button" type="button" name='omega-3'>Omega 3</button>
            <button class="supplement-button" type="button" name='tribulus'>Tribulus Terrestris</button>
            <button class="supplement-button" type="button" name='melatonin'>Melatonin</button>
        </div>

        <input type="number" name="value" class="supplement-value-input-box">

        <select name="unit" id="unit">
            <option value="mg">mg</option>
            <option value="g">g</option>
            <option value="mcg">mcg</option>
            <option value="IU">IU</option>
        </select>
        <button class="add-button" type="submit">
            ADD
        </button>

    </form>


    <span>
       

    </span >
</div >
    `;
// ${model.locStorage.length > 0
//     ? showSupps()
//     : html`<p class="no-supps">No supplements added.</p>`
//     }