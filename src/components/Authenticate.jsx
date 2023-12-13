import { useState } from "react";

export default function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [newUsername, setNewUsername] = useState(null);

    async function handleEvent() { // why do we not input an event here 
        try {  
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
                {method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })    
          const result = await response.json();   
          setSuccessMessage(result.message); 
          setNewUsername(result.data.username)
        } catch (error) {
            setError(error.message); // we can store a server error in the application state and display it.
        }
        console.log("Clicked!")
    }

    return (
        <>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>} 
        {error && <p>{error}</p>}
        {newUsername && <p>{newUsername}</p>}
        <button className="button" onClick={handleEvent}>Authenicate Token</button> 
        </>
    )
}

// Created a button, which onClick sends a request to the API and passes the token in an Authentication header

// conditionally render the error in a p tag if the error is a truthy value. same with success message

// . The Authorization header. The Authorization header, as we saw in the introduction of our workshop, needs to contain our token in the following format: Authorization: `Bearer ${token}`

// headers needed over bodies for token