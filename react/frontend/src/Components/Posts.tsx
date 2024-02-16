import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ProfileMenu , LogOutButtonMenu,avatarstyle,ImageForProfileAvatar, TableCellStyle, avatarstylefriends, buttonaddfriend, ContainerProfileStyle, ContainerPostsProfile, ContainerProfileStyle2, buttonaddfriend2, textfieldpost, ImageForProfileAvatar2, imagePostStyle, imagePostStyle2, datestyle, deletebuttonpost, ContainerStyleUpdateAdmin, dialogstyleupdate, styleupdate, ContainerPostsFriendStyle} from "../Pages/Styles"
import { useNavigate } from 'react-router-dom';
import { Avatar, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, dividerClasses } from '@mui/material';
import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import { Agent } from 'https';
import { DataArrayRounded, HandymanOutlined, Label } from '@mui/icons-material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const Posts = (): JSX.Element => {
    const id2String = localStorage.getItem('token') || '0';
    const id2 = parseInt(id2String, 10);
    const [friendarray,setfriendarray] = useState<any[]>([])

    const returnUsersFriends = async () => {
        try{
        const {data, status} = await axios.get("http://localhost:8080/User/GetUserFriends",{params:{id:id2}})
        if(status == 200){
            console.log("PRIETENII SUNT :")
            console.log(data)
            setfriendarray(data)
            }                 
        }
        catch(error){
                console.log("CE FACI")
     }
    }
    useEffect ( () => 
    { 
        (async () => {
            await returnUsersFriends();
        })();
    },[]) 
    const navigate = useNavigate();

    const navigatetoFriendsPage = () => {
        navigate('/Friends');
    };
    const handleFriendsPress = () => {
        navigatetoFriendsPage();
    }; 
    const navigatetoHomePage = () => {
        navigate('/HomePage');
    };
    const handleButtonPress = () => {
        navigatetoHomePage();
    };
    const navigateToProfilePage = () => {
        navigate('/ProfilePage');
    }
    const handleProfilePress = () => {
        navigateToProfilePage();
    };
   return (
    <div>
        <Box>
            <AppBar>
                <Toolbar>
                    <Button style = {ProfileMenu} onClick = {handleProfilePress}>My Profile </Button>
                    <Button style = {ProfileMenu} onClick={handleFriendsPress}> Friends </Button>
                    <Button style = {ProfileMenu}> Messages </Button>
                    <Button style = {LogOutButtonMenu} onClick={handleButtonPress}>LogOut</Button>
                </Toolbar>
            </AppBar>
         </Box>
         {
            friendarray.map((friend) => {
            return(
                <div>
                    {
                        friend['postList'].map((friendpost:any) => {
                            return(
                                //  <p style = {{marginTop: '500px', marginLeft: '500px'}}>{friendpost['id']}</p>
                                <div>
                                    <Container style = {ContainerPostsFriendStyle}>
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                            <Avatar style={avatarstylefriends} src = {friend['photo'] ? "data:image/jpeg;base64," + friend['photo'] : ""} />
                                                <p style = {{marginLeft:'10px'}}>{friend['lastName'] + " " + friend['firstName']}</p>
                                                <p style = {{marginLeft:'10px'}}>{friendpost['date']} </p>
                                                <p style = {{marginLeft:'10px'}}>{friendpost['hour']} </p>
                                        {/* <button style = {deletebuttonpost} onClick={() => deletepost(userpost['id']) }>Delete Post</button>
                                        <button style = {updatebuttonpost} onClick={() => updatepost(userpost) }>Update Post</button> */}
                                        </div>
                                        {
                                        friendpost['text'] != null ?
                                         <p style = {{marginTop: '-5px'}}> {friendpost['text']} </p>
                                        : null
                                        }
                                        {
                                        friendpost['photo'] != null ?
                                        <div>                                
                                            <img
                                                src={friendpost['photo'] ? "data:image/jpeg;base64," + friendpost['photo'] : ""}
                                                style={imagePostStyle2}
                                            />
                                        </div>
                                        : null
                                        }
                                    </Container>
                </div>
                            )
                        })
                    }
                </div>
            )
        })
         }
    </div>
    // <div>
    //                 <Container style = {ContainerPostsProfile}>
    //                 <div style={{display:'flex', flexDirection:'row'}}>
    //                 {/* <Avatar style={avatarstylefriends} src = {file ? "data:image/jpeg;base64," + file : ""} />
    //                 <p style = {{marginLeft:'10px'}}>{userpost['date']} </p>
    //                 <p style = {{marginLeft:'10px'}}>{userpost['hour']} </p> */}
    //                 {/* <button style = {deletebuttonpost} onClick={() => deletepost(userpost['id']) }>Delete Post</button>
    //                 <button style = {updatebuttonpost} onClick={() => updatepost(userpost) }>Update Post</button> */}
    //                 </div>
    //                 {/* {
    //                 userpost['text'] != null ?
    //                  <p style = {{marginTop: '-5px'}}> {userpost['text']} </p>
    //                 : null
    //                 }
    //                 {
    //                 userpost['photo'] != null ?
    //                 <div>                                
    //                     <img
    //                         src={userpost['photo'] ? "data:image/jpeg;base64," + userpost['photo'] : ""}
    //                         style={imagePostStyle2}
    //                     />
    //                 </div>
    //                 : null
    //                 } */}
    //                 </Container>
    //             </div> )
    
   )
}

