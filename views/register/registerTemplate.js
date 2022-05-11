import { html } from '../../node_modules/lit-html/lit-html.js';

export let registerTemplate = (model) => html `

<section id="register">

    <form @submit=${(e)=> model.submitHandler(e)} id="register-form" action="#" method="post">
        <h1>Register</h1>
        

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text">

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password">
        <p>RepeatPassword</p>
        <input type="password" placeholder="Enter Password" name="repeat-password">

        <input type="submit" class="registerbtn" value="Register">
    </form>
    <div class="login">
        <p>Already have an account?
            <a href="/login">Login now!</a>.
        </p>
    </div>

</section>

`;