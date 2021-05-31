import React, { useState, useEffect } from 'react';
import './Dash.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

import {Link, Route,Redirect} from 'react-router-dom';
import {GiftOutlined,WarningOutlined,ContactsOutlined,UserAddOutlined,AppstoreAddOutlined,SettingOutlined,BarChartOutlined,UserOutlined,CustomerServiceOutlined,TableOutlined,ShopOutlined,ShoppingOutlined,GlobalOutlined} from '@ant-design/icons';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import * as api from '../api/index.js';

import Affcaissier from '../components/Affcaissier';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const { Header, Footer, Sider, Content } = Layout;

const GestionCaissier = (props) => {

  //

  const [get2,setGet2] = useState([]);

  useEffect (async () => {

  const token = localStorage.getItem("token");
  try {
  const {data} = await api.getptvente(token);
  console.log(data);
  setGet2(data);
  } catch (e) {
  console.log(e.error);
  }
  },[])


  //
  const id = {headers : { Authorization : `Bearer ${props.token}`}};

  const [get,setGet] = useState("");
    useEffect (async () => {

    const token = localStorage.getItem("token");
    try {
    const {data} = await api.getnom(props.token);
    console.log(data);
    setGet(data);
    console.log(get.name);
    } catch (e) {
    console.log(e.error);
    }
    },[])

  const logout = () => {
    props.setAuthorized(false);
    localStorage.setItem("authorized",false);
    setGet("");
    localStorage.removeItem("token");
  }

  const [name,setName] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [id_ptvente,setId_ptvente] = useState ('');

  const handleChange = (e) => {
    if (e.target.name==="name") {
      setName(e.target.value)
    }
    if (e.target.name==="username") {
      setUsername(e.target.value)
    }
    if (e.target.name==="password") {
      setPassword(e.target.value)
    }
    if (e.target.name==="nomptvente") {
     setId_ptvente(e.target.value)
   }
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const rep = await api.addcaissier(name, username, password, id_ptvente, props.token);
      console.log("caissier ajouté");
      alert('caissier ajouté');
    } catch (e) {
      alert('Il faut entrer tous les champs');
      console.log(e.error);
    }finally {

    }
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
    return (<Route exact path="/gestioncaissier"><Redirect to="/signin" /></Route>);
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
                      <MenuItem><h5> {get.name} </h5></MenuItem>
                      <MenuItem onClick={handleClose}><h5><Link to ='/profil'>Profil</Link></h5></MenuItem>

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
          <Sider>
            <Menu
              defaultSelectedKeys={['GestionCaissier']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                <Link to ='/dashboard'><BarChartOutlined />Statistiques</Link>
            </Menu.Item>
            <Menu.Item key='paramcarte'>
                <Link to ='/paramcarte'><SettingOutlined />Paramètres de la carte de fidelité</Link>
            </Menu.Item>
            <Menu.Item key='bons'>
                <Link to ='/bons'><GiftOutlined />Liste des bons d'achats</Link>
            </Menu.Item>
            <Menu.Item key='reduction'>
                <Link to ='/reduction'><GiftOutlined />Liste des réductions</Link>
            </Menu.Item>
            <Menu.Item key='gestioncaissier'>
                <Link to ='/gestioncaissier'><UserAddOutlined />Gestion des caissiers</Link>
            </Menu.Item>
            
            <Menu.Item key='Clients'>
                <Link to ='/clients'><TableOutlined />Table des clients</Link>
            </Menu.Item>
            <Menu.Item key='Profil'>
              <span><Link to='/profil'><UserOutlined />Profil</Link></span>
            </Menu.Item>
  
              <SubMenu
                title={
                  <span>
                    {/*<Icon type="mail" />*/}
                    <span><CustomerServiceOutlined />Nos services</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS'>
                  <Menu.Item key='location1'> <Link to='/pointsvente'><ShopOutlined />Points de vente</Link></Menu.Item>
                  
                  <Menu.Item key='location3'> <Link to='/event'> <AppstoreAddOutlined />Evenements</Link></Menu.Item>

                </Menu.ItemGroup>
              </SubMenu>
              
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><h1 style ={{fontWeight :'bold'}}>Gestion des caissiers</h1></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 1500}}>
              <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                    <h4 style ={{fontWeight :'bold'}}>Ajouter un caissier</h4>
                 </div> 
                 <br/><br/>
                
                 <form onSubmit = {handleSubmit}>
                 
                 <label class="bmd-label-floating">Nom point de vente <span className="text-danger">*</span></label>
                {/*<div>
                  <Affptcaiss name="nomptvente" onChange={handleChange}/>
                </div>*/}
                <div>
               <select name="nomptvente" onChange={handleChange} size="1">
             
                       {get2.map((item, index)=>{
                         return(
                            <option value={item._id}>{item.nom}</option>
                         )
                       })}
                       </select>
                    </div>
                  <br/>
                  <label class="bmd-label-floating">Nom caissier <span className="text-danger">*</span></label>
                <input type="text" name="name" onChange={handleChange} class="form-control"></input>  
                <br/>
                <p style={{color : 'red',fontSize: 25, fontFamily:'bold'}}>Compte caissier </p>
                <br/>
                <label class="bmd-label-floating">Nom d'utilisateur du caissier <span className="text-danger">*</span></label>
                <input type="text" name="username" onChange={handleChange} class="form-control"></input> 
                <br/>
                <label class="bmd-label-floating">Mot de passe caissier <span className="text-danger">*</span></label>
                <input type="text" name="password" onChange={handleChange} class="form-control"></input>  
                <p  style={{color : 'red',fontSize: 12}}><WarningOutlined style={{fontSize : 12}} /> 
                                Il faut entrer au moins 6 caractères.
                                 </p>
                 <br/><br/>
                 <br/>
                 <table style={{marginLeft:'auto',marginRight:'auto'}}>
                     <tr>
                     <button type="submit" class="btn btn-primary pull-rigt" style={{background: '#87bfd4', color: '#000000' , marginTop : -50}}>Ajouter</button>  
                     </tr>
                 </table>
                 </form>
                     
                 {/*<div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                    <h4 style ={{fontWeight :'bold'}}>Supprimer un caissier</h4>
                 </div> */}
                 <br/><br/>

                 {/*<form>
                 <label class="bmd-label-floating">Nom Entreprise</label>
                  <input type="text" class="form-control"></input>
                  <br/>
                 <label class="bmd-label-floating">Nom point de vente</label>
                  <input type="text" class="form-control"></input>
                  <br/>
                  <label class="bmd-label-floating">Nom caissier</label>
                <input type="text" class="form-control"></input>  
                
                 <br/><br/>
                 <br/>
                 <table style={{marginLeft:'auto',marginRight:'auto'}}>
                     <tr>
                     <button type="submit" class="btn btn-primary pull-rigt" style={{background: '#87bfd4', color: '#000000' , marginTop : -50}}>Supprimer</button>  
                     </tr>
                 </table>
                
                 </form>*/}
                  <div style={{marginTop: 40}}>
                      
                      <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                          <h4 style ={{fontWeight :'bold'}}>Liste des caissiers</h4>
                      </div>
                      <br/>
                        <Affcaissier />
                  </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}><h5 style={{fontWeight :'bold'}}>UNIFID:</h5> <h6 style={{ color: '#5b8db6'}}>meilleur programme de fidélisation</h6></Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default GestionCaissier;