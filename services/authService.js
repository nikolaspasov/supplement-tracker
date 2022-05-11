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
                throw new Error(`${message} ohhh noooooo`)
                
            }
            let fetchedResponse = await response.json();
            return fetchedResponse;

        }
        
    }
    console.log(result);
    

}


export default{
    login
}