import React, { useState } from 'react';
import './Dash.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

import {Link, Route, Redirect} from 'react-router-dom';
import {GiftOutlined,ContactsOutlined,UserAddOutlined,AppstoreAddOutlined,SettingOutlined,BarChartOutlined,UserOutlined,CustomerServiceOutlined,TableOutlined,ShopOutlined,ShoppingOutlined,GlobalOutlined} from '@ant-design/icons';


import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import * as api from '../api/index.js';

import Eventg from '../components/Eventg';
import Affevent from '../components/Affevent';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const { Header, Footer, Sider, Content } = Layout;

const Event = (props) => {

  const ls= [];
  for ( let i=1;i<32;i++){
    ls.push(i);
  }
  const lss= [];
  for ( let j=2021;j<2032;j++){
    lss.push(j);
  }
  const lsss= [];
  for ( let k=0;k<24;k++){
    lsss.push(k);
  }
  const lssss= [];
  for ( let u=0;u<60;u++){
    lssss.push(u);
  }

  const [nom,setNom] = useState('');
  const [lieu,setLieu] = useState('');
  const [jourdebut,setJourdebut] = useState('Lundi');
  const [moisdebut,setMoisdebut] = useState('Janvier');
  const [andebut,setAndebut] = useState('2021');
  const [jourfin,setJourfin] = useState('Lundi');
  const [moisfin,setMoisfin] = useState('Janvier');
  const [anfin,setAnfin] = useState('2021');
  const [heuredebut,setHeuredebut] = useState('0');
  const [mindebut,setMindebut] = useState('0');
  const [heurefin,setHeurefin] = useState('0');
  const [minfin,setMinfin] = useState('0');
  
  

  const handleChange = (e) => {
    if (e.target.name==="nom") {
      setNom(e.target.value)
    }
    if (e.target.name==="lieu") {
      setLieu(e.target.value)
    }
    if (e.target.name==="jourdebut") {
      setJourdebut(e.target.value)
    }
    if (e.target.name==="moisdebut") {
      setMoisdebut(e.target.value)
    }
    if (e.target.name==="andebut") {
      setAndebut(e.target.value)
    }
    if (e.target.name==="jourfin") {
      setJourfin(e.target.value)
    }
    if (e.target.name==="moisfin") {
      setMoisfin(e.target.value)
    }
    if (e.target.name==="anfin") {
      setAnfin(e.target.value)
    }
    if (e.target.name==="heuredebut") {
      setHeuredebut(e.target.value)
    }
    if (e.target.name==="mindebut") {
      setMindebut(e.target.value)
    }
    if (e.target.name==="heurefin") {
      setHeurefin(e.target.value)
    }
    if (e.target.name==="minfin") {
      setMinfin(e.target.value)
    }


  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const rep = await api.addevent(nom , lieu , jourdebut, moisdebut,andebut,jourfin, moisfin,anfin, heuredebut,mindebut,heurefin,minfin, props.token);
      console.log("evenement ajoutée");
      alert('événement ajouté');
    } catch (e) {
      alert('Il faut entrer tous les champs');
      console.log(e.error);
    }finally {

    }
  }

  const logout = () => {
    props.setAuthorized(false);
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
    return (<Route exact path="/event"><Redirect to="/signin" /></Route>);
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
                    <MenuItem onClick={handleClose}><h5><Link to ='/profil'>Profil</Link></h5></MenuItem>
                    <MenuItem onClick={handleClose}><h5>Carte</h5></MenuItem>
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
              defaultSelectedKeys={['Event']}
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
                <Breadcrumb.Item><h1 style ={{fontWeight :'bold'}}>Evénements</h1></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 1500 }}>
              <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                    <h4 style ={{fontWeight :'bold'}}>Ajouter un événement</h4>
                 </div>   
                 <br/><br/>
                 <form onSubmit = {handleSubmit}>
                 <label class="bmd-label-floating">Nom <span className="text-danger">*</span></label>
                  <input type="text" name="nom" onChange={handleChange} class="form-control"></input>
                  <br/>
                  <label class="bmd-label-floating">Lieu <span className="text-danger">*</span></label>
                <input type="text" name="lieu" onChange={handleChange} class="form-control"></input>  
                <br/>
                <label class="bmd-label-floating">Date <span className="text-danger">*</span></label>
                <table>
              <tr>
              <td style={{width : 85 , height : 50}}>
              A partir de  :
            </td>
            <td style={{width : 40 , height : 50}}> 
            <select name="jourdebut" onChange={handleChange} size="1">
              {ls.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select> 
            
              </td>
              <td style={{width : 85 , height : 50}}>
            <select name="moisdebut" onChange={handleChange} size="1">
              <option value="Janvier">Janvier</option>
              <option value="Février">Février</option>
              <option value ="Mars">Mars</option>
              <option value="Avril">Avril</option>
              <option value ="Mai">Mai</option>
              <option value="Juin">Juin</option>
              <option value ="Juillet">Juillet</option>
              <option value ="Août">Août</option>
              <option value="Septembre">Septembre</option>
              <option value="Octobre">Octobre</option>
              <option value="Novembre">Novembre</option>
              <option value="Décembre">Décembre</option>
              </select>
              </td>
              <td style={{width : 85 , height : 50}}>
              <select name="andebut" onChange={handleChange} size="1">
              {lss.map((j) => (
                <option value={j}>{j}</option>
              ))}
            </select>
              </td>
              </tr>
              </table>
              <table>
              <tr>
              <td style={{width : 85 , height : 50}}>
              Jusqu'à :
            </td>
            <td style={{width : 40 , height : 50}}>  
            <select name="jourfin" onChange={handleChange} size="1">
              {ls.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
              </td>
              <td style={{width : 85 , height : 50}}>
            <select name="moisfin" onChange={handleChange} size="1">
              <option value="Janvier">Janvier</option>
              <option value="Février">Février</option>
              <option value ="Mars">Mars</option>
              <option value="Avril">Avril</option>
              <option value ="Mai">Mai</option>
              <option value="Juin">Juin</option>
              <option value ="Juillet">Juillet</option>
              <option value ="Août">Août</option>
              <option value="Septembre">Septembre</option>
              <option value="Octobre">Octobre</option>
              <option value="Novembre">Novembre</option>
              <option value="Décembre">Décembre</option>
            </select>
              </td>
              <td style={{width : 85 , height : 50}}>
              <select name="anfin" onChange={handleChange} size="1">
              {lss.map((j) => (
                <option value={j}>{j}</option>
              ))}
            </select>
              </td>
              </tr>
              </table>     
                 <label class="bmd-label-floating">Heure <span className="text-danger">*</span></label>
                 <table>
              <tr>
              <td style={{width : 110 , height : 50}}>
              Heure de début:
            </td>
            <td style={{width : 40 , height : 50}}>  
              <select name="heuredebut" onChange={handleChange} size="1">
                {lsss.map((k) => (
                  <option value={k}>{k}</option>
                ))}
              </select>
              </td>
              <td>h</td>
              <td>
              <select name="mindebut" onChange={handleChange} size="1">
                {lssss.map((u) => (
                  <option value={u}>{u}</option>
                ))}
              </select>
              </td>
              <td>min</td>
              </tr>
              </table>
              <table>
              <tr>
              <td style={{width : 110 , height : 50}}>
              Heure de fin :
            </td>
            <td style={{width : 40 , height : 50}}>  
            <select name="heurefin" onChange={handleChange} size="1">
                {lsss.map((k) => (
                  <option value={k}>{k}</option>
                ))}
              </select>
              </td>
              <td>h</td>
              <td>
              <select name="minfin" onChange={handleChange} size="1">
                {lssss.map((u) => (
                  <option value={u}>{u}</option>
                ))}
              </select>
              </td>
              <td>min</td>
              </tr>
              </table>  
                     <button type="submit" class="btn btn-primary pull-right" style={{background: '#87bfd4', color: '#000000', marginTop : 30, marginRight : 50}}>Ajouter</button>  
                     </form>  
                     <br/>
                     <div style={{marginTop: 120}}>
                      
                          <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                              <h4 style ={{fontWeight :'bold'}}>Liste des événements</h4>
                          </div>
                          <br/>
                            <Affevent />
                      </div>
              </div>
              <br/><br/>
              
              
            </Content>
            <Footer style={{ textAlign: 'center' }}><h5 style={{fontWeight :'bold'}}>UNIFID:</h5> <h6 style={{ color: '#5b8db6'}}>meilleur programme de fidélisation</h6></Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Event;