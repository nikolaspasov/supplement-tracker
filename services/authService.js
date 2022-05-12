let baseUrl = 'http://localhost:3030/'


async function login(user){
    console.log(user);
    let result = await request(); 
    

    async function request(){
        if(user!== undefined){

            let method = 'POST';
            let headers={['Content-Type'] : 'application/json'};
            let body = JSON.stringify(user);
            
            let options = {
                headers,
                method,
                body
            }

            let response = await fetch(`${baseUrl}users/login`, options);
            if(!response.ok){
                let message = await response.text();
                throw new Error(`Username or password don't match!`)
                
            }
            let fetchedResponse = await response.json();
            sessionStorage.clear();
            sessionStorage.setItem(fetchedResponse.username, fetchedResponse.accessToken);
            console.log(sessionStorage);
            return fetchedResponse;

        }
        
    }
    console.log(result);
    

}
async function register(user){
    console.log(user);
    let result = await request(); 
    
    async function request(){
        if(user!== undefined){

            let method = 'POST';
            let headers={['Content-Type'] : 'application/json'};
            let body = JSON.stringify(user);
            
            let options = {
                headers,
                method,
                body
            }

            let response = await fetch(`${baseUrl}users/register`, options);
            if(!response.ok){
                let message = await response.text();
                throw new Error(`${message} ohhh noooooo`)
                
            }
            let fetchedResponse = await response.json();
            sessionStorage.clear();
            sessionStorage.setItem(fetchedResponse.username, fetchedResponse.accessToken);
            console.log(sessionStorage);
            return fetchedResponse;

        }
        
    }
    console.log(result);
    

}


export default{
    login,
    register
}