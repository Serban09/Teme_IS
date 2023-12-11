import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import {field, fieldpassword, loginButtonStyle, parentDivStyle,Rememberme,ForgotPassword,SignUp } from "../Pages/Styles"
import Link from '@mui/material/Link';
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Login = (): JSX.Element => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [text, setText] = React.useState<string>("");
    const navigate = useNavigate();
    
    const onChangeEmail = (event: any): void => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: any): void => {
        setPassword(event.target.value)
    }

    const login = async (event: any): Promise<void> => {
        try{
            const {data, status} = await axios.get("http://localhost:8080/User/Login", {params:{Username:email, Password:password}})
            setText(JSON.stringify(data, null, 4));
            console.log(text)
            console.log(status)
        }
        catch(error){
            setText("EROARE")
        }
    }

    return <div style={parentDivStyle}>
        <div style={field}>
            <TextField id="standard-basic" label="Username" variant="standard" onChange={onChangeEmail} />
        </div>
        <div style={fieldpassword}>
            <TextField id="standard-basic" label="Password" variant="standard" onChange={onChangePassword} />
        </div>
        <Button style={loginButtonStyle} onClick={login} variant="contained">Login</Button>
        <FormControlLabel style = {Rememberme} required control={<Checkbox />} label="Remember me" />
        <Link style = {ForgotPassword} href="/Register">Forgot Password</Link>
        <Link style = {SignUp} href="/Register">Dont't have an account? Sign Up</Link>
        <h1>{text}</h1>
    </div>
}