import React, { useState,useEffect } from 'react';
import './Dash.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import FileBase from 'react-file-base64';
import {UserOutlined} from '@ant-design/icons';
import {WarningOutlined} from '@ant-design/icons';
import {Link, Route, Redirect} from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import * as api from '../api/index.js'
import Affentrep from '../components/Affentrep';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const { Header, Footer, Sider, Content } = Layout;

function Admin(props) {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [logo,setLogo] = useState('');
  const [name,setName] = useState('');

  const handleChange = (e) => {
    if (e.target.name==="password") {
      setPassword(e.target.value)
    }
    if (e.target.name==="username") {
      setUsername(e.target.value)
    }
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    if (e.target.name==="name") {
      setName(e.target.value)
    }
  }
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const res = await api.signup(username,password,email,name,logo);
      console.log("done");
      alert('Entreprise ajoutée');
    } catch (e) {
      console.log(e.error);
      alert('Il faut bien entrer tous les champs');
    } finally {

    }


  }

  useEffect(() => {
    const auth = localStorage.getItem("authorized")
    props.setAuthorized(auth)
    console.log(auth);
  },[])
  const logout = () => {
    props.setAuthorized(false);
    localStorage.setItem("authorized",false)
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const ViewProfileButton = ({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile  </Button>
  }

  const onClose = () => setVisible(false);
  if (!(props.authorized)) {
    return (<Route exact path="/admin"><Redirect to="/cnxadmin" /></Route>);
  }
  else
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
        <div className={classes.root} style={{float:'right' , marginRight : 40 , marginTop : -10}}>
        
        <div>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{height : 35}}
          >
            <UserOutlined/>
          </Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={logout}><h5>Déconnexion</h5></MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        </div>

          <Title style={{ color: 'white' }} level={2}>UNIFID</Title>

        </Header>
        <Layout>
          
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><h1 style ={{fontWeight :'bold'}}>Session admin</h1></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
              

        <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                    <h4 style ={{fontWeight :'bold'}}>Gestion des entreprises</h4>
                 </div> 
                 <br/><br/>
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#2a9438', padding: 10}}>Ajouter une entreprise</h5>
                     </tr>
                 </table>
                 
                

                 <form onSubmit = {handleSubmit1}>
                      <div className="top-margin">
                          <label>Nom Entreprise <span className="text-danger">*</span></label>
                             <input type="text" name="name" onChange={handleChange} className="form-control"/>
                       </div>

                       <div className="top-margin">
                            <label>Nom Utilisateur <span className="text-danger">*</span></label>
                                <input type="text" name="username" onChange={handleChange} className="form-control"/>
                       </div>

                        <div className="top-margin">
                            <label>Adresse Email<span className="text-danger">*</span></label>
                               <input type="text" name="email" onChange={handleChange} className="form-control"/>
                      </div>

                      <div className="row top-margin">
                          <div className="col-sm-6">
                               <label>Mot de passe <span className="text-danger">*</span></label>
                                <input type="text"  name="password" onChange={handleChange} className="form-control"/>
                                 <p  style={{color : 'red',fontSize: 12}}><WarningOutlined style={{fontSize : 12}} /> 
                                Il faut entrer au moins 6 caractères.
                                 </p>
                         </div>
                          <div className="col-sm-6">
                           <label>Confirmer mot de passe <span className="text-danger">*</span></label>
                            <input type="text" className="form-control"/>
                          </div>
                     </div>
                     <div className="top-margin">
                           <label>Ajouter logo <span className="text-danger">*</span></label>                  
                          <FileBase type="file" multiple={false} onDone={({ base64 }) => setLogo(base64)}/>

                   </div>
                   <br/>
                   <table>
                     <tr>
                     <button type="submit" class="btn btn-primary pull-rigt" style={{background: '#87bfd4', color: '#000000'}}>Ajouter</button>  
                     </tr>
                 </table>
                   
            </form>

                 {/*
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#b36887', padding: 10}}>Supprimer une entreprise</h5>
                     </tr>
                 </table>
                 <br/>
                 <label class="bmd-label-floating">Nom Entreprise</label>
                  <input type="text" class="form-control"></input>
                  
                 <br/><br/>
                 <br/>
                 <table style={{marginLeft:'auto',marginRight:'auto'}}>
                     <tr>
                     <button type="submit" class="btn btn-primary pull-rigt" style={{background: '#b36887', color: '#000000' , marginTop : -50}}>Supprimer</button>  
                     </tr>
                 </table>
                 */}
                 <br/>
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#2a9438', padding: 10}}>Liste des entreprises</h5>
                     </tr>
                 </table>
                 <div>
                 <Affentrep />
                 </div>
                 <div style={{ background: '#87bfd4',marginTop: 2800 ,padding: 20, minHeight: 50 }}>
                    <h4 style ={{fontWeight :'bold'}}>Gestion des clients</h4>
                 </div> 
                 <br/><br/>
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#2a9438', padding: 10}}>Ajouter un client</h5>
                     </tr>
                 </table>
                 <form>

                       <div className="top-margin">
                            <label>Nom client <span className="text-danger">*</span></label>
                                <input type="text" name="usernameclient"  className="form-control"/>
                       </div>

                       <div className="top-margin">
                            <label>Numéro de téléphone <span className="text-danger">*</span></label>
                               <input type="text" name="télclient"  className="form-control"/>
                      </div>

                        <div className="top-margin">
                            <label>Adresse Email <span className="text-danger">*</span></label>
                               <input type="text" name="emailclient"  className="form-control"/>
                      </div>

                      <div className="row top-margin">
                          <div className="col-sm-6">
                               <label>Mot de passe <span className="text-danger">*</span></label>
                                <input type="text"  name="password" className="form-control"/>
                                 <p  style={{color : 'red',fontSize: 12}}><WarningOutlined style={{fontSize : 12}} /> 
                                Il faut entrer au moins 6 caractères.
                                 </p>
                         </div>
                          
                     </div>
                     
                   <br/>
                   <table>
                     <tr>
                     <button type="submit" class="btn btn-primary pull-rigt" style={{background: '#87bfd4', color: '#000000'}}>Ajouter</button>  
                     </tr>
                 </table>
                   
            </form>
            <br/>
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#2a9438', padding: 10}}>Liste des clients</h5>
                     </tr>
                 </table>
                 <br/>
                 
        
                 {/*
                 <label class="bmd-label-floating">Nom Client</label>
                  <input type="text" class="form-control"></input>
                 */}
              
                 <br/>
                 
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}><h5 style={{fontWeight :'bold'}}>UNIFID:</h5> <h6 style={{ color: '#5b8db6'}}>meilleur programme de fidélisation</h6></Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Admin;