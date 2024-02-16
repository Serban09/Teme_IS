import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ProfileMenu , LogOutButtonMenu,avatarstyle,ImageForProfileAvatar, TableCellStyle, avatarstylefriends, buttonaddfriend, ContainerPostsProfile, imagePostStyle2, deletebuttonpost, ImageForProfileAvatar2, styleupdate, updatebuttonpost} from "../Pages/Styles"
import { useNavigate } from 'react-router-dom';
import { Avatar, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import { Agent } from 'https';
import { DataArrayRounded, HandymanOutlined, Label } from '@mui/icons-material';

export const SeeProfileFriend = ({ idFriend }: { idFriend: any }): JSX.Element => {
    const id2String = localStorage.getItem('idFriend') || '0';
    const id2 = parseInt(id2String, 10); 
    const adminString = localStorage.getItem('admin') || '0';
    const admin = parseInt(adminString, 10);
    const [file,setFile] = useState<any>("");
    const [fullName, setFullName] = useState("");   
    const [age, setAge] = useState("");
    const [friendsNumber, setFriendsNumber] = useState("");
    const [postsNumber, setPostsNumber] = useState("");
    const [arrayFriends, setArrayFriends] = useState<any[]>([]);
    const [friendarray,setfriendarray] = useState<any[]>([]);
    const [usersposts,setusersposts] = useState<any[]>([]);
    const [deletepostbutton, setdeletepostbutton] = useState(false);
    const [deletefriendbutton, setdeletefriendbutton] = useState(false);
    const [openDialog, setopenDialog] = useState(false)
    const [file3,setFile3] = useState<any>("");
    const [id, setIdPost] = useState()
    const [textpost2,setTextPost2] = useState<String>("");

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
    useEffect ( () => {
        if (admin !== 1) {
            setdeletepostbutton(false)
            setdeletefriendbutton(false)
          } else {
            setdeletepostbutton(true)
            setdeletefriendbutton(true)
        }
    }, [admin])
    const navigate = useNavigate();
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

    const navigatetoHomePage = () => {
        navigate('/HomePage');
    }
    const navigatetoProfile = () => {
        navigate('/ProfilePage');
    }

    const handleButtonPress = () => {
        navigatetoHomePage();
    };

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
                const {data, status} = await axios.get("http://localhost:8080/User/GetUserFriends", {params:{id:id2}})
                if(status == 200){
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
            await FullName();
        })();
    },[])
    useEffect ( () => 
    { 
        (async () => {
            await returnUsersFriends();
        })();
    },[])
    let x = 1 ;
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
            await returnUsersPosts();
        })();
    },[])
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
            const onPostTextChange2 = (event:any):void => {
                setTextPost2(event.target.value)
            }
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
                        <Button style = {ProfileMenu} onClick={navigatetoProfile}> My Profile </Button>
                        <Button style = {ProfileMenu}> Messages </Button>
                        <Button style = {ProfileMenu}> Posts </Button>
                        <Button style = {LogOutButtonMenu} onClick={handleButtonPress}>LogOut</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        <div>        
            {
            <Stack >
                    <Avatar style={avatarstyle} src = {file ? "data:image/jpeg;base64," + file : ""} />
            </Stack> }
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
                        {deletefriendbutton && (<button onClick={() => deletefriend(friend['id'],id2)} style = {buttonaddfriend} >Delete friend!</button>)}
 
                        </div> 
                })
            }
            {
            usersposts.map((userpost) =>{
                return      <Container style = {ContainerPostsProfile}>
                                <div style={{display:'flex', flexDirection:'row'}}>
                                <Avatar style={avatarstylefriends} src = {file ? "data:image/jpeg;base64," + file : ""} />
                                <p style = {{marginLeft:'10px'}}>{userpost['date']} </p>
                                <p style = {{marginLeft:'10px'}}>{userpost['hour']} </p>
                                {deletepostbutton && (<button style = {deletebuttonpost} onClick={() => deletepost(userpost['id']) }>Delete Post</button>)}
                                {deletepostbutton && (<button style = {updatebuttonpost} onClick={() => updatepost(userpost) }>Update Post</button>)}

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
                })
            }
        </div>
        
                      
}

