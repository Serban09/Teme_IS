import { AppBar, Avatar, Box, Button, Stack, TextField, Toolbar } from "@mui/material"
import { ProfileMenu, LogOutButtonMenu, FriendLabel, avatarstyle, avatarstylefriends, buttonaddfriend } from "../Pages/Styles"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProfilePage } from "./ProfilePage";

export const Friends = (): JSX.Element => {
    const id2String = localStorage.getItem('token') || '0';
    const id2 = parseInt(id2String, 10); 
    console.log(id2)
    const navigate = useNavigate();
    const [lenghtUsers, setlenghtUsers] = useState(0);
    const [users, setUsers] = useState<any[]>([])
    const navigatetoHomePage = () => {
        navigate('/HomePage');
    }
    const handleButtonSeeFriendProfile = (id3:any) =>{
        localStorage.setItem('idFriend',id3);
        navigate('/SeeProfileFriend')
    } 
    const handleButtonPress = () => {
        navigatetoHomePage();
    };
    const navigateToProfilePage = () => {
        navigate('/ProfilePage');
    }
    const handleProfilePress = () => {
        navigateToProfilePage();
    };
    
    const GetListUsers = async (): Promise<void> => {
        try{
            const{data,status} =  await axios.get("http://localhost:8080/User/ListUsers",{params:{userId:id2}})
            if (status == 200) {
                console.log("Users:")
                setUsers(data)
            } else {
                console.log("Status:", status);
            }
        }
        catch(error){
            console.log(error);
            console.log("EROAORE GET FULLNAME");
        }
        } ;
    useEffect ( () => 
    { 
        GetListUsers();
    },[])
    const addfriendtouser = async (iduserFriend:any, iduser:any):Promise<void> => {
        try{
            const formData = new FormData();
            formData.append('user_friend', iduserFriend); 
            formData.append('user_id', iduser);
            const response = await axios.post("http://localhost:8080/Friend/addFriend", formData)
            console.log(response)
        }
        catch(error){
            console.log("EROARE INSERT FRIEND")
            console.log(error)
        }
        } ;
    let x = 1;
       return <div>
        <div>
            <Box>
                <AppBar>
                    <Toolbar>
                        <Button style = {ProfileMenu} onClick = {handleProfilePress}>My Profile </Button>
                        <Button style = {ProfileMenu}> Messages </Button>
                        <Button style = {ProfileMenu}> Posts </Button>
                        <Button style = {LogOutButtonMenu} onClick={handleButtonPress}>LogOut</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        <div>
            <div style = {FriendLabel}>
            {
                users.map((user)=>{
                    return <div style={{display:'flex', flexDirection:'row'}}>
                        <p>{x++}{"."}</p>
                        <Avatar style={avatarstylefriends} src = {user['photo'] ? "data:image/jpeg;base64," + user['photo'] : ""} />
                        <p style={{marginRight:'10px'}}>{user['lastName']}{" "}{user['firstName']}</p> 
                        {
                             user['id'] != id2 ?
                            <button onClick={() => addfriendtouser(user['id'],id2)} style = {buttonaddfriend} >Add friend!</button>
                            :
                            <p>This is you!</p>
                        }
                        {
                             user['id'] != id2 ?
                             <button onClick={() => handleButtonSeeFriendProfile(user['id'])} style = {buttonaddfriend}>Check profile!</button>
                             : null
                        }
                    </div> 
                })
            }
            </div>
        </div>
     </div>
}