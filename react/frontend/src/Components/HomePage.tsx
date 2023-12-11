import TextField from '@mui/material/TextField';
import {Image,HomePageText,ButtonStyle,Buttonss,ButtonPressedStyle,HomePageStyle} from "../Pages/Styles";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from "react";
import { RouterProvider,useNavigate } from 'react-router-dom';
import { Login } from './Login';
import axios from "axios";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const HomePage = () : JSX.Element => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/Login');
    }

    const navigateToRegister = () => {
        navigate('/Register');
    }

    const handleButtonPress = () => {
        navigateToLogin();
      };

     const handleButtonPress2 = () => {
        navigateToRegister();
      };

    return (
        <div style={Image}>
                <div  style={HomePageText}>
                    <p> SocialClub </p>
                </div>
                <div style={Buttonss}>
                    <button onClick={handleButtonPress} style={ButtonStyle}>Login</button>
                    <button onClick={handleButtonPress2} style={ButtonStyle}>Register</button>
                </div>
        </div>
        )
}
