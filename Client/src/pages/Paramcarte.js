import React, { useState } from 'react';
import './Dash.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Link,Route,Redirect} from 'react-router-dom';
import {GiftOutlined,ContactsOutlined,UserAddOutlined,SwapOutlined,AppstoreAddOutlined,SettingOutlined,BarChartOutlined,UserOutlined,CustomerServiceOutlined,TableOutlined,ShopOutlined,ShoppingOutlined,GlobalOutlined} from '@ant-design/icons';

import { Card} from 'antd';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import * as api from '../api/index.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const { Header, Footer, Sider, Content } = Layout;

const Paramcarte = (props) => {

  const ls= [];
  for ( let i=5;i<100;i=i+5){
    ls.push(i);
  }
  const lss= [];
  for ( let j=1;j<25;j++){
    lss.push(j);
  }

  const [pts,setPts] = useState('');
  const [delai,setDelai] = useState('');
  const [valeurbon,setValeurbon] = useState('');

  const [ptsred,setPtsred] = useState('');
  const [delaired,setDelaired] = useState('');
  const [percent,setPercent] = useState('');
//
// const [newmontant,setNewmontant] = useState ('');
 // const [newequiv_mont_pts,setNewequiv_mont_pts] = useState ('');
//
  const handleChange = (e) => {
    if (e.target.name==="pts") {
      setPts(e.target.value)
    }
    if (e.target.name==="delai") {
      setDelai(e.target.value)
    }
    if (e.target.name==="valbon") {
      setValeurbon(e.target.value)
    }
    if (e.target.name==="ptsred") {
      setPtsred(e.target.value)
    }
    if (e.target.name==="delaired") {
      setDelaired(e.target.value)
    }
    if (e.target.name==="percent") {
      setPercent(e.target.value)
    }
    /*if (e.target.name==="montant") {
      setNewmontant(e.target.value)
    }
    if (e.target.name==="points") {
      setNewequiv_mont_pts(e.target.value)
    }*/

  }
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const rep = await api.addbonparam(pts,delai,valeurbon, props.token);
      console.log("parametres de bon ajoutés");
    } catch (e) {
      alert("entrer tous les champs");
      console.log(e.error);
    }finally {

    }
  }
  const handleSubmit1 = async (e) => {

    e.preventDefault();
    try {
      const rep = await api.addredparam(ptsred,delaired,percent, props.token);
      console.log("parametres de reduction ajoutés");
    } catch (e) {
      alert("entrer tous les champs");
      console.log(e.error);
    }finally {

    }
  }
  /*
  const handleSubmit2 = async (e) => {

    e.preventDefault();
    try {
      const rep = await api.addparam(newmontant, newequiv_mont_pts , props.token);
      console.log("parametres carte ajoutés");
    } catch (e) {
      console.log(e.error);
    }finally {

    }
  }
*/

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
    return (<Route exact path="/paramcarte"><Redirect to="/signin" /></Route>);
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
              defaultSelectedKeys={['Paramcarte']}
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
                <Breadcrumb.Item><h1 style ={{fontWeight :'bold'}}>Paramètres de la carte de fidelité</h1></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 1050}}>
         
                 <hr></hr>
                <label class="bmd-label-floating">Paramètres de fidelisation</label>
                <hr></hr>
                <br/>
                <form>
                <div style={{padding: 24, minHeight: 100 , width : 200}}>
                 <label class="bmd-label-floating">Montant d'argent <span className="text-danger">*</span></label>
                  <input type="text" name="montant" class="form-control"></input>
                  </div>
                  <div style={{padding: 24, minHeight: 100 , width : 5, marginLeft : 168, marginTop : -108}}><br/><SwapOutlined /></div>
                  <div style={{padding: 24, minHeight: 100 , width : 200, marginLeft : 200, marginTop : -100}}>
                  <label>Nombre de points <span className="text-danger">*</span></label>
                <input type="text" name="points"  class="form-control" ></input>
                <br/>
                <button type="submit" class="btn btn-primary pull-right" style={{background: '#87bfd4', color: '#000000', marginTop : 10, marginRight: 243}}>Enregistrer</button>   
                </div>
                </form>
                <br/><br/><br/>
                <hr></hr>
                <label class="bmd-label-floating">Offres et cadeaux </label>
                <hr></hr>
                <div>
                <Card bordered style={{ width: 350,height:370, float: 'left', margin: 10 }}>
          
            <h4 style={{color:'red',fontWeight :'bold',textAlign:'center'}}>Bon d'achat</h4>
            <hr></hr>
            
            <div style={{padding: 15, minHeight: 100 , width : 300}}>
            <form onSubmit = {handleSubmit}>
            Nombre de points nécessaires <span className="text-danger">*</span> <input type="text" name="pts" onChange={handleChange} class="form-control" ></input>
            Valeur <span className="text-danger">*</span> <input type="text" name="valbon" onChange={handleChange} class="form-control" ></input>
            <table>
              <tr>
              <td style={{width : 240 , height : 50}}>
            Validité (en mois): <span className="text-danger">*</span>
            </td>
            <td style={{width : 90 , height : 50}}> 
            <select name="delai" onChange={handleChange} size="1">
              {lss.map((j) => (
                <option value={j}>{j}</option>
              ))}
            </select> 
            
              </td>
            </tr>
            </table>
            <Card.Grid style={{ width: '100%' }}>
                <button type="submit" class="btn btn-primary pull-right" style={{background: '#87bfd4', color: '#000000', marginRight: 10}}>Ajouter bon d'achat</button>
            </Card.Grid>
              </form>
              
            </div>
            </Card>
        </div>
        
        <div>
        <Card bordered style={{ width: 350,height:370, float: 'left', margin: 10 }}>
        <h4 style={{color:'red',fontWeight :'bold',textAlign:'center'}}> Réduction</h4>
        <hr></hr>
            <div style={{padding: 15, minHeight: 100 , width : 300}}>
              <form onSubmit = {handleSubmit1}>
            Nombre de points nécessaires <span className="text-danger">*</span><input type="text" name="ptsred" onChange={handleChange} class="form-control" ></input>
            <table>
              <tr>
              <td style={{width : 240 , height : 50}}>
            Pourcentage : <span className="text-danger">*</span>
            </td>
            <td style={{width : 90 , height : 50}}> 
            <select name="percent" onChange={handleChange} size="1">
              {ls.map((i) => (
                <option value={i}>{i} %</option>
              ))}
            </select> 
            
              </td>
            </tr>
              
              </table>
              <table>
              <tr>
              <td style={{width : 240 , height : 50}}>
            Validité (en mois): <span className="text-danger">*</span>
            </td>
            <td style={{width : 90 , height : 50}}> 
            <select name="delaired" onChange={handleChange} size="1">
              {lss.map((j) => (
                <option value={j}>{j}</option>
              ))}
            </select> 
            
              </td>
            </tr>
            </table>
            <Card.Grid style={{ width: '100%' ,textAlign:'center'}}>
              <button type="submit" class="btn btn-primary pull-right" style={{background: '#87bfd4', color: '#000000', marginRight: -9}}>Ajouter offre de réduction</button>
            </Card.Grid>
              </form>
            </div>
            </Card>
            
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

export default Paramcarte;