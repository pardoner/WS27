import {useState} from "react"

export default function SignUpForm({setToken}) { // deconstructing the setToken function from props, adding brackets to look at it as an object 
    const [username, setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(null)

    async function handleSubmit(e){
        e.preventDefault() //Prevent page refresh
            try {  
                console.log(username)
                const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({username: username, password: password})
                })
                const result = await response.json();
                setToken(result.token); //setting the result object key of token's value to setToken
            } catch (error) {
                setError(error.message); // we can store a server error in the application state and display it.
            }
        } 

    return (
        <>
        <h2>Sign Up</h2>
            {error && <p>{Error}</p>} 
        <form onSubmit={handleSubmit}>
            <label>
            Username: 
                <input value={username} onChange={(e) => setUsername(e.target.value)} required minlength="5"/> 
            </label>
            <br></br>
            <label>
            Password: 
                <input value={password} onChange={(e) => setPassword(e.target.value)} required minlength="8"/>
            </label>
            <br></br>
            <br>
            </br>
            <button className="button">Submit</button>
        </form>
        </>
    )
}

// nesting out input properties inside of the labels helps eliminate the need to write name and for properties on our labels and inputs. 