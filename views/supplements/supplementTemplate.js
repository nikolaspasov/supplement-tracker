import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { supplementTakenTemplate } from './supplementTakenTemplate.js';

let supplementType;
let supplementKey;
// let showSupps =  function() {
//     for (var i = 0, len = localStorage.length; i < len; ++i) {
//     element.textContent = localStorage.getItem(localStorage.key(i));
//     }};


export let supplementTemplate = (model) => html`
<div class="supplement-btns">
    <form id="supplement-input" @submit=${function(e){
        model.submitHandler(e, supplementKey, supplementType);
        document.getElementById('supplement-input').reset();
        }}>

        <div @click=${(e)=> {
        if (e.target.nodeName !== 'BUTTON') {
        return;
        }
        document.querySelector('.clicked')
            ? document.querySelector('.clicked').classList.remove('clicked')
            : nothing;
        
        e.target.classList = 'clicked'
        supplementType = e.target.textContent;
        supplementKey = e.target.name;
        
        }}>
            <button class="supplement-button" type="button" name='zinc'>Zinc</button>
            <button class="supplement-button" type="button" name='vitamin-d'>Vitamin D3</button>
            <button class="supplement-button" type="button" name='vitamin-c'>Vitamin C</button>
            <button class="supplement-button" type="button" name='magnesium'>Magnesium</button>
            <button class="supplement-button" type="button" name='omega-3'>Omega-3</button>
            <button class="supplement-button" type="button" name='tribulus'>Tribulus Terrestris</button>
            <button class="supplement-button" type="button" name='melatonin'>Melatonin</button>
            <button class="supplement-button" type="button" name='ginkgo'>Ginkgo Biloba</button>
            <button class="supplement-button" type="button" name='copper'>Copper</button>
            <button class="supplement-button" type="button" name='creatine'>Creatine</button>
            <button class="supplement-button" type="button" name='boron'>Boron</button>
            <button class="supplement-button" type="button" name='vitamin-b12'>Vitamin B12</button>
        </div>

        <input type="number" name="value" class="supplement-value-input-box">

        <select name="unit" id="unit">
            <option value="mg">mg</option>
            <option value="g">g</option>
            <option value="mcg">mcg</option>
            <option value="IU">IU</option>
            <option value="ml">ml</option>
        </select>
        <button class="add-button" type="submit" >
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