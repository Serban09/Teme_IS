import React from "react";
import { ActionFunction } from "react-router-dom";
import Background from '../stars2.jpg';
export const defaultStyle :React.CSSProperties = {
    marginTop: '2vh',
}
export const VerificateEmailTextField :React.CSSProperties = {
    marginTop: '2vh',
}
export const VerificationPageStyle :React.CSSProperties = {
    backgroundColor : '#808000',
    height: '100vh', 
}
export const HomePageStyle:React.CSSProperties={
    backgroundColor: '#FFF8DC'
}
export const SendButton:React.CSSProperties ={
    marginTop:'1vh',
    marginLeft: '5vh',
    backgroundColor : '#000000'
}
export const VerificationCode: React.CSSProperties = {
    marginLeft: '76vh',
    backgroundColor: '#A9A9A9'
}

export const VerificationPageText : React.CSSProperties = {
    textAlign: 'center',
    fontFamily: 'Papyrus',
    fontSize: '20vh',
    color: '#000080'
}
export const Image :React.CSSProperties = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
  
}

export const HomePageText: React.CSSProperties ={
        textAlign: 'center',
        fontFamily: 'Papyrus',
        fontSize: '20vh',
        color: '#00FFFF'
        
}

export const Buttonss: React.CSSProperties = {
    textAlign : 'center',
    marginTop: '-20vh'
}


export const ButtonStyle: React.CSSProperties = {
    textAlign : 'center',
    marginRight: '25vh',
    marginLeft: '25vh',
    width: '100px',
    height: '30px',
    color: '#D2691E',
    scale: '2',
    transition : 'transform 0.3s'
}

export const ButtonPressedStyle: React.CSSProperties = {
    transform: 'scale(1.2)',
  }

export const field :React.CSSProperties = {
    marginTop: '20px'
}
export const fieldpassword :React.CSSProperties = {
    marginTop: '20px',
    zIndex: '2'
    
}
export const parentDivStyle: React.CSSProperties ={
    position:'relative',
    justifyContent: "center",
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '200px',
    left:'40vw'
}
export const Rememberme: React.CSSProperties = {
    marginTop: '20%'
}
export const ForgotPassword:React.CSSProperties = {
    position:'relative',
    justifyContent: "center",
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '200px',
    left:'0vw'
}
export const SignUp:React.CSSProperties = {
    position:'relative',
    justifyContent: "center",
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '200px',
    left:'0vw'

}

export const loginButtonStyle: React.CSSProperties ={
    position: "relative",
    top:30

}