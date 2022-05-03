import { html } from '../../node_modules/lit-html/lit-html.js';


export let supplementTakenTemplate = (storage) => html`
<ul id="supplements-added-list">
    <li><span id="Omega 3">898989</span>mg<button class="delete-btn">DEL</button></li>
    <li>Magnesium<span id="Magnesium">89898989</span>mcg<button class="delete-btn">DEL</button></li>
</ul>

`;
