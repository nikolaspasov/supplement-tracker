import { html } from '../../node_modules/lit-html/lit-html.js';


export let loginTemplate = (model) => html`

<section id="login">

    <form @submit=${(e)=> model.submitHandler(e)} id="login-form" action="#" method="post">
        <h1>Login</h1>
        

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text">

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password">
        <button class="registerbtn" >Login</button>
    </form>
    <div class="signin">
        <p>Dont have an account?
            <a href="/register">Sign up</a>.
        </p>
    </div>

</section>
`;