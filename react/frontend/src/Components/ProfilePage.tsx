import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ProfileMenu , LogOutButtonMenu,avatarstyle,ImageForProfileAvatar, TableCellStyle, avatarstylefriends, buttonaddfriend, ContainerProfileStyle, ContainerPostsProfile, ContainerProfileStyle2, buttonaddfriend2, textfieldpost, ImageForProfileAvatar2, imagePostStyle, imagePostStyle2, datestyle, deletebuttonpost, updatebuttonpost, dialogstyleupdate, styleupdate} from "../Pages/Styles"
import { useNavigate } from 'react-router-dom';
import { Avatar, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import { Agent } from 'https';
import { DataArrayRounded, HandymanOutlined, Label } from '@mui/icons-material';

export const ProfilePage = (): JSX.Element => {
    const id2String = localStorage.getItem('token') || '0';
    const id2 = parseInt(id2String, 10); 
    const adminString = localStorage.getItem('admin') || '0';
    const admin = parseInt(adminString, 10);
    const [file,setFile] = useState<any>("");
    const [file2,setFile2] = useState<any>("");
    const [file3,setFile3] = useState<any>("");
    const [showButton, setShowButton] = useState(true);
    const [fullName, setFullName] = useState("");   
    const [age, setAge] = useState("");
    const [friendsNumber, setFriendsNumber] = useState("");
    const [postsNumber, setPostsNumber] = useState("");
    const [arrayFriends, setArrayFriends] = useState<any[]>([]);
    const [friendarray,setfriendarray] = useState<any[]>([])
    const [usersposts,setusersposts] = useState<any[]>([])
    const [textpost, setTextPost] = useState<String>("");
    const [textpost2,setTextPost2] = useState<String>("");
    const [openDialog, setopenDialog] = useState(false)
    const [id, setIdPost] = useState()

    useEffect ( () => {
        if (admin !== 1) {
            setShowButton(false)
          } else setShowButton(true)
    }, [admin])

    function createData(
        name: string,
        value: string,
      ) {
        return { name,value };
      }
    const rows = [
        createData('Name:', fullName),
        createData('Age:', age),
        createData('Friends:', friendsNumber),
        createData('Posts:', postsNumber),

      ];

    const handleChange = (e: any): void => {
        const fileInput = e.target;
    
        if (fileInput.files && fileInput.files.length > 0) {
          const selectedFile = fileInput.files[0];    
          const fileReader = new FileReader();
    
          fileReader.onload = (event: ProgressEvent<FileReader>) => {
            const result = event.target?.result as ArrayBuffer | string;
            const blob = new Blob([result], { type: selectedFile.type });
            console.log("BLOB IS:")
            console.log(blob);
            const loadimage = async (): Promise<void> => {
                try {
                  const formData = new FormData();
                  formData.append('id', String(id2)); 
                  formData.append('photo', blob);
                  const response = await axios.post("http://localhost:8080/User/LoadPhotoProfile", formData);
                  console.log("Response:", response.data);
                } catch (error) {
                  console.error("Error sending photo:", error);
                }
              };
              loadimage();
          };
          fileReader.readAsArrayBuffer(selectedFile);
        }
      };

      const handleChange2 = (e: any): void => {
        const fileInput = e.target;
        if (fileInput.files && fileInput.files.length > 0) {
          const selectedFile = fileInput.files[0];    
          const fileReader = new FileReader();
          fileReader.onload = (event: ProgressEvent<FileReader>) => {
            const result = event.target?.result as ArrayBuffer | string;
            const blob = new Blob([result], { type: selectedFile.type });
            console.log("BLOB IS:")
            console.log(blob);
            setFile2(blob)
          };
          fileReader.readAsArrayBuffer(selectedFile);
        }
      };

      const handleChange3 = (e: any): void => {
        const fileInput = e.target;
        if (fileInput.files && fileInput.files.length > 0) {
          const selectedFile = fileInput.files[0];    
          const fileReader = new FileReader();
          fileReader.onload = (event: ProgressEvent<FileReader>) => {
            const result = event.target?.result as ArrayBuffer | string;
            const blob = new Blob([result], { type: selectedFile.type });
            console.log("BLOB IS:")
            console.log(blob);
            setFile3(blob);
          };
          fileReader.readAsArrayBuffer(selectedFile);
        }
      };

    const updatepost  = (post:any) => {
        console.log("POST WHEN UPDATE POST:")
        console.log(post)
        setopenDialog(true);
        setFile3(post['photo'])
        setIdPost(post['id']);
        setTextPost2(post['text']);
    }

    const handleCloseDialog = () => {
         setopenDialog(false)
    }

    const handleUpdatePost = () => {
        const formData = new FormData();
                  formData.append('idpost', String(id));
                  formData.append('photo', file3);
                  formData.append('text', String(textpost2));
        try{
            axios.post("http://localhost:8080/Post/UploadPost", formData).then((response:any)=>{}
        )
        }
        catch(error){
            console.log("Eroare load photo");
        } 
    }

    const navigate = useNavigate();

    const navigatetoHomePage = () => {
        navigate('/HomePage');
    }
    const handleButtonPress = () => {
        navigatetoHomePage();
    };
    const navigateAdminPage = () => {
        navigate('/ADMIN');
    }
    const handleButtonSeeFriendProfile = (id3:any) => {
        localStorage.setItem('idFriend',id3);
        navigateToProfileFriend(id2);
    }
    const navigateToProfileFriend = (id2:any) => {
        navigate('/SeeProfileFriend') 
       } 
    const navigatetoFriendsPage = () => {
        navigate('/Friends');
    }
    const handleFriendsPress = () => {
        navigatetoFriendsPage();
    };
    const handlePostsPress = () => {
        navigate('/Posts');
    };
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date}/${month}/${year}`;
    }

    function getTime() {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
    
        return `${hours}:${minutes}:${seconds}`;
    }

    const loadpost = async (event: any): Promise<void> => {
        try{
            const formData = new FormData();
                  formData.append('hour', String(getTime()));
                  formData.append('comments', String(0)); 
                  formData.append('date', String(getDate()));
                  formData.append('likes', String(0));
                  formData.append('user_id', String(id2));
                  formData.append('photo', file2);
                  formData.append('text', String(textpost));
            axios.post("http://localhost:8080/Post/LoadPost", formData).then((response:any)=>{}
        )
        }
        catch(error){
            console.log("Eroare load photo");
        } 
    }
    const ProfileImage = async (event: any): Promise<void> => {
        try{ 
            const{data,status}=  await axios.get("http://localhost:8080/User/ProfileImage", {params:{id:id2}})
            if (status == 200) {
                setFile(data)
            } else {
                console.log("Error fetching profile image. Status:", status);
            }
        }
        catch(error){
            console.log(error);
            console.log("EROAORE PROFILE IMAGE");
        }
    }
    useEffect( () => {   
        ProfileImage(null);
    }, []);

    const FullName = async () => {
        try{
            const{data,status}=  await axios.get("http://localhost:8080/User/GetUser", {params:{id:id2}})
            if (status == 200) {
                setArrayFriends(data['friendList']);
                setFullName(data['lastName'] + " " +  data['firstName']);
                setAge(data['age'])
                if(data['friends'] == null)
                    setFriendsNumber('0')
                else setFriendsNumber(data['friends'])
                if(data['posts'] == null)
                    setPostsNumber('0')
                else setPostsNumber(data['posts'])
            } else {
                console.log("Status:", status);
            }
        }
        catch(error){
            console.log(error);
            console.log("EROAORE GET FULLNAME");
        }
        } ;

    const returnUsersFriends = async () => {
                try{
                const {data, status} = await axios.get("http://localhost:8080/User/GetUserFriends",{params:{id:id2}})
                if(status == 200){
                    console.log(data)
                    setfriendarray(data)
                    }                 
                }
                catch(error){
                        console.log("CE FACI")
             }
    }

const returnUsersPosts = async () => {
        try{
        const {data, status} = await axios.get("http://localhost:8080/User/GetPostsProfileUser",  {params:{UserId:id2}})
        if(status == 200){
            console.log(data)
            setusersposts(data)
            }                 
        }
        catch(error){
                console.log("Eroare get posts")
     }
}
    
    useEffect ( () => 
    { 
        (async () => {
            await FullName();
        })();
    },[])
    useEffect ( () => 
    { 
        (async () => {
            await returnUsersFriends();
        })();
    },[])
    useEffect ( () => 
    { 
        (async () => {
            await returnUsersPosts();
        })();
    },[])
    console.log(usersposts)


    const deletefriend = async (iduserFriend:any, iduser:any):Promise<void> => {
        try{
            const formData = new FormData();
            formData.append('user_friend', iduserFriend); 
            formData.append('user_id', String(id2));
            const response = await axios.post("http://localhost:8080/Friend/deleteFriend", formData)
            console.log(response)
        }
        catch(error){
            console.log("EROARE INSERT FRIEND")
            console.log(error)
        }
        } ;
    const deletepost = async (id_post:any):Promise<void> => {
            try{
               const formData = new FormData();
               formData.append('id_post', String(id_post)); 
               formData.append('id_user', String(id2)); 
                const response = await axios.post("http://localhost:8080/Post/DeletePost", formData)
                console.log(response)
            }
            catch(error){
                console.log("EROARE INSERT FRIEND")
                console.log(error)
            }
            } ;
    const onPostTextChange = (event:any):void => {
            setTextPost(event.target.value)
        }
     const onPostTextChange2 = (event:any):void => {
            setTextPost2(event.target.value)
        }
    let x = 1 ;
       return <div>
        <Dialog  open={openDialog} onClose={handleCloseDialog} fullWidth>
           <DialogTitle>Update Post</DialogTitle>
           <DialogContent>
               <DialogContentText>
               <div style = {styleupdate}>
                       <div>
                           <TextField id = "textPost" onChange = {onPostTextChange2} label="Text" variant="standard" value = {textpost2} />
                       </div>
                       <img
                            src={file3 ? "data:image/jpeg;base64," + file3 : ""}                          
                            style={imagePostStyle2}
                       />
                        <div style = {ImageForProfileAvatar2}>
                            <input type = 'file' onChange = {handleChange3}/>
                        </div>
               </div>
               </DialogContentText>
           </DialogContent>
           <DialogActions>
               <Button onClick={handleCloseDialog} variant="contained" color="primary">
                    Close
               </Button>
               <Button onClick = { handleUpdatePost } variant="contained" color="primary">
                   Update
               </Button>
           </DialogActions>
        </Dialog>
        <div>
            <Box>
                <AppBar>
                    <Toolbar>
                        <Button style = {ProfileMenu} onClick={handleFriendsPress}> Friends </Button>
                        <Button style = {ProfileMenu}> Messages </Button>
                        <Button style = {ProfileMenu} onClick = {handlePostsPress}> Posts </Button>
                        {/* {showButton && <button onClick={toggleButton}>Hide Button</button>} */}
                        {showButton && <Button style = {ProfileMenu} onClick = {navigateAdminPage}> Admin </Button>}
                        <Button style = {LogOutButtonMenu} onClick={handleButtonPress}>LogOut</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        <div>        
            {
            <Stack>
                    <Avatar style={avatarstyle} src = {file ? "data:image/jpeg;base64," + file : ""} />
            </Stack> 
            }
            <div style = {ImageForProfileAvatar}>
                <input type = 'file' onChange = {handleChange}/>
            </div>
                <div>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                 {rows.map((row) => (
                                     <TableRow>
                                         <TableCell style={TableCellStyle} >{row.name} </TableCell>
                                         <TableCell> {row.value}</TableCell>
                                     </TableRow>
                                 ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            
           {
            friendarray.map((friend)=>{
                return <div style={{display:'flex', flexDirection:'row'}}>
                        <p>{x++}{"."}</p>
                        <Avatar style={avatarstylefriends} src = {friend['photo'] ? "data:image/jpeg;base64," + friend['photo'] : ""} />
                        <p>{friend['lastName']}{" "}{friend['firstName']}</p> 
                        <button onClick={() => handleButtonSeeFriendProfile(friend['id'])} style = {buttonaddfriend}>Check profile!</button>
                        <button onClick={() => deletefriend(friend['id'],id2)} style = {buttonaddfriend} >Delete friend!</button>
                        </div> 
                })
            }
            <Container style = {ContainerProfileStyle2}>
                <div>
                    <button onClick = {loadpost} style = {buttonaddfriend2}>Upload a Post!</button>
                </div>
                <div>
                    <TextField style = {textfieldpost} id = "textPost" onChange = {onPostTextChange} label="Text" variant="standard"  />
                </div>
                <img
                    src={file2 ? URL.createObjectURL(file2) : ''}
                    style={imagePostStyle}
                />
                <div style = {ImageForProfileAvatar2}>
                    <input type = 'file' onChange = {handleChange2}/>
                </div>
            </Container>
            {/* <Container style = {ContainerProfileStyle}> */}
            {
            usersposts.map((userpost) =>{
                return(
                <div>
                    <Container style = {ContainerPostsProfile}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                    <Avatar style={avatarstylefriends} src = {file ? "data:image/jpeg;base64," + file : ""} />
                    <p style = {{marginLeft:'10px'}}>{userpost['date']} </p>
                    <p style = {{marginLeft:'10px'}}>{userpost['hour']} </p>
                    <button style = {deletebuttonpost} onClick={() => deletepost(userpost['id']) }>Delete Post</button>
                    <button style = {updatebuttonpost} onClick={() => updatepost(userpost) }>Update Post</button>
                    </div>
                    {
                    userpost['text'] != null ?
                     <p style = {{marginTop: '-5px'}}> {userpost['text']} </p>
                    : null
                    }
                    {
                    userpost['photo'] != null ?
                    <div>                                
                        <img
                            src={userpost['photo'] ? "data:image/jpeg;base64," + userpost['photo'] : ""}
                            style={imagePostStyle2}
                        />
                    </div>
                    : null
                    }
                    </Container>
                </div> )
            })
            }
        </div>
        
                      
}

