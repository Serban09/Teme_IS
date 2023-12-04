import { Button, TextField } from "@mui/material"
import { loginButtonStyle, parentDivStyle } from "./Login.styles"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { text } from "stream/consumers";

export const Register = (): JSX.Element => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [username,setUsername] = useState("")
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    useEffect ( () => {
        if (password !== confirmPassword) {
            setPasswordError(true)
          } else setPasswordError(false)
    }, [password, confirmPassword])

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleConfirmPassword = (e: any) => {
        setConfirmPassword(e.target.value)
    }

    const register = async (event: any): Promise<void> => {
        try{
            const newPerson = {firstName: firstName, lastName: lastName, username: username, email: email, password: password}

             axios.post("http://localhost:8080/User/Register", newPerson).then((response:any)=>{

             })
            // setText(JSON.stringify(data, null, 4));
            // console.log(text)
            // console.log(status)
        }
        catch(error){
            setText("EROARE")
        }
    }

    const onLastNameChanged = (event:any):void => {
        setFirstName(event.target.value)
    }
    
    return <div style={parentDivStyle}>
        <div style={{ marginTop: 20 }}>
            <TextField 
            id="standard-basic" 
            label="First-Name" 
            variant="standard" 

            />
        </div>
        <div style={{ marginTop: 20 }}>
            <TextField id="standard-basic" onChange = {onLastNameChanged}  label="Last-Name" variant="standard"  />
        </div>
        <div style={{ marginTop: 20 }}>
            <TextField id="standard-basic" label="Username" variant="standard" />
        </div>
        <div style={{ marginTop: 20 }}>
            <TextField id="standard-basic" label="Email" variant="standard"  />
        </div>
        <div style={{ marginTop: 20 }}>
            <TextField 
            error={passwordError}
            id="standard-basic" 
            label="Password" 
            variant="standard" 
            helperText={passwordError ? "Incorrect entry." : ""}
            onChange={handlePassword}
            />
        </div>
        <div style={{ marginTop: 20 }}>
            <TextField 
            error={passwordError}
            id="standard-basic" 
            label="Confirm password" 
            variant="standard" 
            helperText={passwordError ? "Incorrect entry." : ""}
            onChange={handleConfirmPassword}
            />
        </div>
            <Button style={loginButtonStyle} onClick={register} variant="contained">Register</Button>
        <h1>{}</h1>
    </div>
}

function setText(arg0: string) {
    throw new Error("Function not implemented.");
}
