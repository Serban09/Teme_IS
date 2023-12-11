import { Button, TextField } from "@mui/material"
import { loginButtonStyle, parentDivStyle,defaultStyle,VerificateEmailTextField} from "../Pages/Styles"
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { text } from "stream/consumers";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { error } from "console";

export const Register = (): JSX.Element => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isRegister, setIsDisabled2] = useState(true);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [username,setUsername] = useState("")
    const [passwordError, setPasswordError] = useState(false);
    const [age, setAge] = useState<String>("");
    const [userAge, setUserAge] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [verification, setVerification] = useState(0);

    const [templateParams, setTemplateParams] = useState({
        verification_code : Math.floor(Math.random() * 100000),
        to_email : email,
    })

    useEffect(()=>{
        console.log(templateParams.verification_code)
        console.log(verification)
        if(templateParams.verification_code == verification){setIsDisabled2(false)}
        else setIsDisabled2(true)
    },[verification,templateParams.verification_code])
    useEffect ( () => {
        if (password !== confirmPassword) {
            setPasswordError(true)
          } else setPasswordError(false)
    }, [password, confirmPassword])
    useEffect(() => {
        if (validator.isEmpty(email))
           {
             setIsDisabled(true);
             setMessage("");
           }
        else {if(validator.isEmail(email))
            {   setIsDisabled(false);
                setMessage("Valid Email");
                setTemplateParams({verification_code: templateParams.verification_code, to_email:email})
            }
        else {
            setIsDisabled(true);
            setMessage("Invalid Email");
        }
    }
    },[email])

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleConfirmPassword = (e: any) => {
        setConfirmPassword(e.target.value)
    }

    

    const register = async (event: any): Promise<void> => {
        try{
            const newPerson = {firstName: firstName, lastName: lastName, username: username, email: email, age: age,  password: password}
            axios.post("http://localhost:8080/User/Register", newPerson).then((response:any)=>{
            }
        )
        }
        catch(error){
            setText("EROARE")
        } 
    }
    
    const sendEmail =async (e:any):Promise<void> =>  {
        e.preventDefault();
        emailjs.send('service_k7z6edh','template_vm0x4fr',templateParams,'FtJaYkrG8fs_m5ndX')
        .then((response:any) => {
            console.log('Email sent successfully',response);
        })
        .catch((error) =>
            {console.error('Error sending email',error)}
        )
    }
    

    const onFirstNameChanged = (event:any):void => {
        setFirstName(event.target.value)
    }

    const onVerificationChanged = (event : any):void => {
        setVerification(event.target.value)
    }

    const onLastNameChanged = (event:any):void => {
        setLastName(event.target.value)
    }
    
    const onUsernameChanged = (event:any):void => {
        setUsername(event.target.value)
    }

    const onEmailChanged = (event:any):void => {
        setEmail(event.target.value);
    }


    
    const onAgeChanged = (event:any):void => {
        setAge(event.target.value)
    }

    return<>
        <div style={parentDivStyle}>
            <div style={{ marginTop: 20 }}>
                <TextField id = "firstname"
                label="First-Name"
                variant="standard"
                onChange ={onFirstNameChanged} 
                />
            </div>
            <div style={defaultStyle}>
                <TextField id = "name" onChange = {onLastNameChanged}  label="Last-Name" variant="standard"  />
            </div>
            <div style={defaultStyle}>
                <TextField  id = "username" onChange = {onUsernameChanged} label="Username" variant="standard" />
            </div>
            <div style={defaultStyle}>
                <TextField  id = "email" onChange = {onEmailChanged} label="Email" variant="standard"  />
            </div>
            <div style={defaultStyle}>
                <TextField id = "age" onChange = {onAgeChanged} label="Age" variant="standard"  />
            </div>
            
            <div style={defaultStyle}>
                <TextField id = "password"
                error={passwordError}
                label="Password" 
                variant="standard" 
                helperText={passwordError ? "Incorrect entry." : ""}
                onChange={handlePassword}
                />
            </div>
            <div style={defaultStyle}>
                <TextField id = "confirmpassword"
                error={passwordError}
                label="Confirm password" 
                variant="standard" 
                helperText={passwordError ? "Incorrect entry." : ""}
                onChange={handleConfirmPassword}
                />
            </div>
            <div style={VerificateEmailTextField}>
                <TextField disabled = {isDisabled} id = "VerificationCode"  label="VerificationCode" variant="standard" onChange = {onVerificationChanged} />
            </div>
            <div>
                <Button  disabled = {isDisabled} style={loginButtonStyle} onClick={sendEmail} variant="contained">Verificate-Email</Button>
                <Button  disabled = {isRegister} style={loginButtonStyle} onClick={register} variant="contained">Register</Button>
            </div>
            <h1>
                {}
            </h1>
            <div>
                {message}
            </div>
        </div>
    </>
}

function setText(arg0: string) {
    throw new Error("Function not implemented.");
}
