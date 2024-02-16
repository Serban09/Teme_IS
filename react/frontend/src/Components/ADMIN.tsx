import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ProfileMenu , LogOutButtonMenu,avatarstyle,ImageForProfileAvatar, TableCellStyle, avatarstylefriends, buttonaddfriend, ContainerProfileStyle, ContainerPostsProfile, ContainerProfileStyle2, buttonaddfriend2, textfieldpost, ImageForProfileAvatar2, imagePostStyle, imagePostStyle2, datestyle, deletebuttonpost, ContainerStyleUpdateAdmin, dialogstyleupdate, styleupdate, ContainerPostsFriendStyle, ContainerCheckPostsStyle, deletebuttonpostadmin, updatebuttonpost, showcheckfriends} from "../Pages/Styles"
import { useNavigate } from 'react-router-dom';
import { Avatar, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';
import { Agent } from 'https';
import { DataArrayRounded, HandymanOutlined, Label } from '@mui/icons-material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const ADMIN = (): JSX.Element => {
    const id2String = localStorage.getItem('token') || '0';
    const id2 = parseInt(id2String, 10);
    const [showButton, setShowButton] = useState(true);
    const adminString = localStorage.getItem('admin') || '0';
    const admin = parseInt(adminString, 10);
    const [rows,setRows] = useState<any[]>([])
    const [listposts, setlistposts] = useState<any[]>([])
    const [listFriends, setlistFriends] = useState<any[]>([])
    const [showUpdate, setShowUpdate] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [userupdate,setuserupdate] = useState<any>();
    const [firstName,setFirstName ] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [id,setid] = useState(null);
    const [age,setage] = useState(null);
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const [showCheckUsers, setshowCheckUsers] = useState(false);
    const [showCheckPosts, setshowCheckPosts] = useState(false);
    const [showCreateUsers, setshowCreateUsers] = useState(false);
    const [showCheckFriends, setshowCheckFriends] = useState(false);
    const [firstName2,setFirstName2 ] = useState(null);
    const [lastName2, setLastName2] = useState(null);
    const [age2,setage2] = useState(null);
    const [email2, setEmail2] = useState("");
    const [password2,setPassword2] = useState("");
    const [username2,setUsername2] = useState("");
    const [openDialog2, setopenDialog2] = useState(false)//opendialog
    const [file3,setFile3] = useState<any>("");
    const [id3, setIdPost] = useState()//id
    const [textpost2,setTextPost2] = useState<String>("");
    useEffect ( () => {
        if (admin !== 1) {
            setShowButton(false)
          } else setShowButton(true)
    }, [admin])
    const navigate = useNavigate();
    
    const handleCloseDialogForCreateUsersFunction = () => {
        setshowCreateUsers(false);
    }
    const showCkechUsersFunction = () => {
        setshowCheckUsers(true);
        setshowCheckPosts(false);
        setshowCheckFriends(false);
    }
    const showCreateUsersFunction = () => {
        setshowCreateUsers(true);
        setshowCheckUsers(false);
        setshowCheckPosts(false);

    }

    const showcheckFriends = () => {
        setshowCreateUsers(false);
        setshowCheckUsers(false);
        setshowCheckPosts(false);
        setshowCheckFriends(true);
    }

    const showcheckPosts = () => {
        setshowCreateUsers(false);
        setshowCheckUsers(false);
        setshowCheckPosts(true);
        setshowCheckFriends(false);

    }

    const navigatetoHomePage = () => {
        navigate('/HomePage');
    }
    const handleButtonPress = () => {
        navigatetoHomePage();
    };
    const handleMYPROFILE = () => {
        navigate('/ProfilePage');
    }
    const updateUser = (row: any) => {
        console.log(row);
        setOpenDialog(true);
        setuserupdate(row);
        setFirstName(row['firstName']);
        setLastName(row['lastName']);
        setEmail(row['email']);
        setPassword(row['password']);
        setUsername(row['username']);
        setid(row['id']);
        setage(row['age']);
    }
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleCloseDialog2 = () => {
        setopenDialog2(false);
    };

    const onAgeChanged = (event:any):void => {
        setage(event.target.value)
    }

    const onFirstNameChanged = (event:any):void => {
        setFirstName(event.target.value)
    }

    const onLastNameChanged = (event:any):void => {
        setLastName(event.target.value)
    }
    const onPasswordChanged = (event:any):void => {
        setPassword(event.target.value)
    }
    
    const onUsernameChanged = (event:any):void => {
        setUsername(event.target.value)
    }

    const onEmailChanged = (event:any):void => {
        setEmail(event.target.value);
    }

    const onAgeChanged2 = (event:any):void => {
        setage2(event.target.value)
    }

    const onFirstNameChanged2 = (event:any):void => {
        setFirstName2(event.target.value)
    }

    const onLastNameChanged2 = (event:any):void => {
        setLastName2(event.target.value)
    }
    const onPasswordChanged2 = (event:any):void => {
        setPassword2(event.target.value)
    }
    
    const onUsernameChanged2 = (event:any):void => {
        setUsername2(event.target.value)
    }

    const onEmailChanged2 = (event:any):void => {
        setEmail2(event.target.value);
    }

    const viewprofileuser = (iduser:any):void => {
        localStorage.setItem('idFriend', iduser);
        navigate('/SeeProfileFriend');
    }

    const GetListUsers = async (): Promise<void> => {
        try{
            // const{data,status} =  await axios.get("http://localhost:8080/User/GetALLListUsers")
            axios.get("http://localhost:8080/User/GetALLListUsers").then(
                function(response){
                    console.log("USERRSSS:")
                    console.log(response.data)
                    setRows(response.data)
                }
            )

            // if (status == 200) {
            //     setRows(data)
            //     console.log("USERRS:")
            //     console.log(data)
            // } else {
            //     console.log("Status:", status);
            // }
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

    const GetListPosts = async (): Promise<void> => {
        try{
            const{data,status} =  await axios.get("http://localhost:8080/Post/ReturnAllPosts")
            if (status == 200) {
                setlistposts(data);
                console.log("List posts:");
                console.log(data);
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
        GetListPosts();
    },[])
    const GetListFriends = async (): Promise<void> => {
        try{
            const{data,status} =  await axios.get("http://localhost:8080/Friend/allFriends")
            if (status == 200) {
                setlistFriends(data);
                // console.log("List Friends:");
                // console.log(data);
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
        GetListFriends();
    },[])

    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'username', headerName: 'Username', width: 150,},
        { field: 'password', headerName: 'Password', width: 150,},
        { field: 'email', headerName: 'Email', width: 300,},
        { field: 'age', headerName: 'Age',type: 'number', width: 90,},
        { field: 'friends', headerName: 'Friends',type: 'number', width: 90,},
        { field: 'posts', headerName: 'Posts',type: 'number', width: 90,},
        {
            field: 'update',
            headerName: 'Update',
            width: 90,
            renderCell: (params) => (
              <Button size="small" variant="contained" onClick={() => updateUser(params.row)}>
                Update
              </Button>
            ),
        },
        {
            field: 'action',
            headerName: 'Delete',
            width: 90,
            renderCell: (params) => (
              <Button size="small" variant="contained" onClick={() => deleteuser(params.row['id'])}>
                Delete
              </Button>
            ),
          },
          {
            field: 'view',
            headerName: 'Profile',
            width: 90,
            renderCell: (params) => (
              <Button size="small" variant="contained" onClick={() => viewprofileuser(params.row['id'])}>
                Profile
              </Button>
            ),
          },
      ];
     
      const columns2: GridColDef[] = [
        // { field: 'id', headerName: 'ID',type: 'number', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'hour', headerName: 'Hour', width: 150,},
        { field: 'comments', headerName: 'Comments',type: 'number', width: 100,},
        { field: 'likes', headerName: 'Likes',type: 'number', width: 100,},
        // { field: 'photo', headerName: 'Photo', width: 90,},
        {
            field: 'photo',
            headerName: 'Photo',
            width: 200,
            renderCell: (params) => (
              <img
                src={params.row.photo ? `data:image/jpeg;base64,${params.row.photo}` : ''}
                alt="Post"
                style={{ width: '200px', height: '80px' }}
              />
            ),
        },
        { field: 'text', headerName: 'Text', width: 300,},
      ];

      const columns3: GridColDef[] = [
        { field: 'idFriend', headerName: 'idFriend',type: 'number', width: 100,},
      ];

      const deleteuser = async (idusertodelete:any):Promise<void> => {
        try{
            const formData = new FormData();
            formData.append('id', idusertodelete); 
            const response = await axios.post("http://localhost:8080/User/DeleteUser", formData)
            console.log(response)
        }
        catch(error){
            console.log("EROARE INSERT FRIEND")
            console.log(error)
        }
        } ;

    const updateUser2 = async (event: any): Promise<void> => {
            try{
                userupdate['firstName'] = firstName;
                userupdate['lastName'] = lastName;
                userupdate['username'] = username;
                userupdate['email'] = email;
                userupdate['age'] = age;
                userupdate['passwzord'] = password;
                axios.post("http://localhost:8080/User/Register", userupdate).then((response:any)=>{
                }
            )
            }
            catch(error){
                console.log("Eroare");
            } 
        }

        const createUsers = async (event: any): Promise<void> => {
            try{
                const newPerson = {firstName: firstName2, lastName: lastName2, username: username2, email: email2, age: age2,  password: password2}
                axios.post("http://localhost:8080/User/Register", newPerson).then((response:any)=>{
                }
            )
            }
            catch(error){
                console.log("Eroare");
            } 
        }
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
            const updatepost  = (post:any) => {
                console.log("POST WHEN UPDATE POST:")
                console.log(post)
                setopenDialog2(true);
                setFile3(post['photo'])
                setIdPost(post['id']);
                setTextPost2(post['text']);
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

            const onPostTextChange2 = (event:any):void => {
                setTextPost2(event.target.value)
            }
            const handleUpdatePost = () => {
                const formData = new FormData();
                          formData.append('idpost', String(id3));
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
   return (
        <div>
           <Dialog  open={openDialog2} onClose={handleCloseDialog2} fullWidth>
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
               <Button onClick={handleCloseDialog2} variant="contained" color="primary">
                    Close
               </Button>
               <Button onClick = { handleUpdatePost } variant="contained" color="primary">
                   Update
               </Button>
           </DialogActions>
        </Dialog>
             <Box>
                <AppBar>
                    <Toolbar>
                        <Button style = {ProfileMenu} onClick={handleMYPROFILE}> My Profile </Button>
                        <Button style = {LogOutButtonMenu} onClick={handleButtonPress}>LogOut</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Dialog style = { dialogstyleupdate } open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Update User</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <div style = {styleupdate}>
                    <TextField id = "firstname" onChange ={onFirstNameChanged} label="First-Name" variant="standard" value={firstName} />                 
                    <TextField id = "lastname" onChange ={onLastNameChanged} label="Last-Name" variant="standard" value={lastName} />                 
                    <TextField id = "email" onChange ={onEmailChanged} label="Email" variant="standard" value={email} />
                    <TextField id = "age" onChange ={onAgeChanged} label="Age" variant="standard" value={age} />
                    <TextField id = "username" onChange ={onUsernameChanged} label="Username" variant="standard" value={username} />                 
                    <TextField id = "password" onChange ={onPasswordChanged} label="Password" variant="standard" value={password} />    
                    </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} variant="contained" color="primary">
                        Close
                    </Button>
                    <Button onClick={updateUser2} variant="contained" color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog style = { dialogstyleupdate } open={showCreateUsers} onClose={handleCloseDialogForCreateUsersFunction}>
                <DialogTitle>Create User</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <div style = {styleupdate}>
                    <TextField id = "firstname2" onChange ={onFirstNameChanged2} label="First-Name" variant="standard"/>                 
                    <TextField id = "lastname2" onChange ={onLastNameChanged2} label="Last-Name" variant="standard" />                 
                    <TextField id = "email2" onChange ={onEmailChanged2} label="Email" variant="standard"/>
                    <TextField id = "age2" onChange ={onAgeChanged2} label="Age" variant="standard" />
                    <TextField id = "username2" onChange ={onUsernameChanged2} label="Username" variant="standard" />                 
                    <TextField id = "password2" onChange ={onPasswordChanged2} label="Password" variant="standard" />    
                    </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogForCreateUsersFunction} variant="contained" color="primary">
                        Close
                    </Button>
                    <Button onClick = {createUsers} variant="contained" color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
            <button style = {{backgroundColor : '#7FFF00', marginTop: '64px'}}  onClick = {showCkechUsersFunction}> Check Users </button>
            <button style = {{backgroundColor : '#7FFF00', marginTop: '64px'}}  onClick = {showCreateUsersFunction}> Create Users </button>
            <button style = {{backgroundColor : '#7FFF00', marginTop: '64px'}}  onClick = {showcheckPosts}> Check Posts </button>
            <button style = {{backgroundColor : '#7FFF00', marginTop: '64px'}}  onClick = {showcheckFriends}> Check Friends </button>
            
            <div style={{ height: 400, width: '100%', marginTop: '0px' }}>
                {showCheckUsers && (<DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{pagination: {paginationModel: { page: 0, pageSize: 5 },},}}
                        pageSizeOptions={[5 , 10]}
                />)}
            </div>
            {/* {rows.map((user:any) =>(
                    showCheckFriends && (
                    <div> */}
                        {/* {
                           listFriends.map((frienddd:any) => ( */}
                           {rows.map((user:any) => (
                            showCheckFriends && (
                             <div>
                                <div>{user['firstName'] + " " +  user['lastName']}</div>
                                <div style={showcheckfriends}>
                                     <DataGrid 
                                    rows={user['friendList']}
                                    columns={columns3}
                                    initialState={{pagination: {paginationModel: { page: 0, pageSize: 5 },},}}
                                    pageSizeOptions={[5 , 10]}
                            />
                            </div>
                            </div>
                            )
                           ))}
                            {/* {showCheckFriends && ()} */}
                            {/* ))
                        } */}
                    {/* </div>)
            ))
            } */}
            {/* {rows.map((user: any) => (
                        showCheckFriends && (<div style = {{marginTop:'0px'}}>
                             {user['friendList'].map((userfrienddd: any) => (
                                    <div style={{ height: 400, width: '100%', marginTop: '0px' }}>
                                    <DataGrid
                                          rows={userfrienddd}
                                          columns={columns3}
                                          pageSizeOptions={[5, 10]}
                                        />
                                     </div>
                                 ))}
                        </div>)
            ))} */}
            
            <div style={{ height: 400, width: '100%', marginTop: '-400px' }}>
                {showCheckPosts && (<DataGrid
                        rows={listposts}
                        columns={columns2}
                        initialState={{pagination: {paginationModel: { page: 0, pageSize: 5 },},}}
                        pageSizeOptions={[5 , 10]}
                />)}
            </div>
           
            <div>
            {
                            rows.map((user:any) => {
                            return(showCheckPosts &&
                                <div>
                                    {
                                        user['postList'].map((userpost:any) => {
                                            return(
                                                <div>
                                                    <Container style = {ContainerCheckPostsStyle}>
                                                        <div style={{display:'flex', flexDirection:'row'}}>
                                                            <Avatar style={avatarstylefriends} src = {user['photo'] ? "data:image/jpeg;base64," + user['photo'] : ""} />
                                                                <p style = {{marginLeft:'10px'}}>{user['lastName'] + " " + user['firstName']}</p>
                                                                <p style = {{marginLeft:'10px'}}>{userpost['date']} </p>
                                                                <p style = {{marginLeft:'10px'}}>{userpost['hour']} </p>
                                                        <button style = {deletebuttonpostadmin} onClick={() => deletepost(userpost['id']) }>Delete Post</button>
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
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )   
                        })
                    }  
            </div>
       </div>

   )
}

