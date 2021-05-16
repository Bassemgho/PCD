import React, { useState , useEffect} from 'react';
import './Dash.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

import {Link,Route,Redirect} from 'react-router-dom';
import {WarningOutlined,ContactsOutlined,UserAddOutlined,AppstoreAddOutlined,SettingOutlined,BarChartOutlined,UserOutlined,CustomerServiceOutlined,TableOutlined,ShopOutlined,ShoppingOutlined,GlobalOutlined} from '@ant-design/icons';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import Map from './Map';

import * as api from '../api/index.js';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const { Header, Footer, Sider, Content } = Layout;

//function Pointsvente(props) {
//sawsen

const Pointsvente = (props) => {

  const id = {headers : { Authorization : `Bearer ${props.token}`}};
  const urlaff = "http://localhost:5000/user"

  const stateinit = {
		nom: '',
		address: '',
    lat: '',
    lang: '',
    heuredebut: '',
    mindebut: '',
    heurefin: '',
    minfin: '',
    jourdebut: '',
    jourfin: '',
		get: []
	  };
    const [state,setState] = useState(stateinit);
    const useEffect=(async()=> {
      try {
        const rep = await api.getptvente(props.token);
        setState({...state,get:rep})
        console.log(rep.data);
      } catch (e) {
        console.log(e.message);
      }

    },[])
    // const componentDidMount = () => {
    //   this.getBlogPost();
    //   };


          const displayBlogPost = (posts) => {

            if (!posts.length) return null;


            return posts.map((post, index) => (
              <div key={index} >
                <p>{post.nom}</p>
                <p>{post.address}</p>
                <p>{post.lat}</p>
                <p>{post.lang}</p>
                <p>{post.heuredebut}</p>
                <p>{post.mindebut}</p>
                <p>{post.heurefin}</p>
                <p>{post.minfin}</p>
                <p>{post.jourdebut}</p>
                <p>{post.jourfin}</p>
              </div>
            ));
            };

/*
  const useEffect=(async()=> {
    const rep = await api.getptvente(props.token);
    console.log(rep);
  },[])
*/
  const ls= [];
  for ( let i=0;i<24;i++){
    ls.push(i);
  }
  const lss= [];
  for ( let j=0;j<60;j++){
    lss.push(j);
  }


  const [nom,setNom] = useState('');
  //const [horaire,setHoraire] = useState('');
  const [address,setAddress] = useState('');
  const [lat,setLat] = useState('');
  const [lang,setLang] = useState('');
  const [heuredebut,setHeuredebut] = useState('0');
  const [mindebut,setMindebut] = useState('0');
  const [heurefin,setHeurefin] = useState('0');
  const [minfin,setMinfin] = useState('0');
  const [jourdebut,setJourdebut] = useState('Lundi');
  const [jourfin,setJourfin] = useState('Lundi');

  const handleChange = (e) => {
    if (e.target.name==="nom") {
      setNom(e.target.value)
    }
    /*if (e.target.name==="horaire") {
      setHoraire(e.target.value)
    }*/
    if (e.target.name==="address") {
      setAddress(e.target.value)
    }
    if (e.target.name==="lat") {
      setLat(e.target.value)
    }
    if (e.target.name==="lang") {
      setLang(e.target.value)
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
    if (e.target.name==="jourdebut") {
      setJourdebut(e.target.value)
    }
    if (e.target.name==="jourfin") {
      setJourfin(e.target.value)
    }

  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const rep = await api.addptvente(nom, address, lat, lang, heuredebut, mindebut, heurefin, minfin, jourdebut, jourfin, props.token);
      console.log("pt vente ajoutée");
    } catch (e) {
      console.log(e.error);
    }finally {

    }
  }
  //sawsen

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
    return (<Route exact path="/pointsvente"><Redirect to="/signin" /></Route>);
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
              defaultSelectedKeys={['Pointsvente']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                <Link to ='/dashboard'><BarChartOutlined />Statistiques</Link>
            </Menu.Item>
            <Menu.Item key='paramcarte'>
                <Link to ='/paramcarte'><SettingOutlined />Paramètres de la carte de fidelité</Link>
            </Menu.Item>
            <Menu.Item key='gestioncaissier'>
                <Link to ='/gestioncaissier'><UserAddOutlined />Gestion des caissiers</Link>
            </Menu.Item>
            <Menu.Item key='Caissier'>
                <Link to ='/caissier'><ContactsOutlined />Liste des caissiers</Link>
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
                  <Menu.Item key='location2'> <Link to='/categories'> <ShoppingOutlined />Catégories</Link></Menu.Item>
                  <Menu.Item key='location3'> <Link to='/event'> <AppstoreAddOutlined />Evenements</Link></Menu.Item>

                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key='Maps'>
              <span><Link to='/maps'><GlobalOutlined />Maps</Link></span>
            </Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><h1 style ={{fontWeight :'bold'}}>Points de vente</h1></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, height : 2500}}>
              <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                    <h4 style ={{fontWeight :'bold'}}>Ajouter un nouveau point de vente</h4>
                 </div>
                 <br/><br/>
                 <form onSubmit = {handleSubmit}>
                 <label class="bmd-label-floating">Nom de la boutique <span className="text-danger">*</span></label>
                  <input type="text" name="nom" onChange={handleChange} class="form-control"></input>
                  <br/>
                  <label class="bmd-label-floating">addresse <span className="text-danger">*</span></label>
                  <input type="text" name="address" onChange={handleChange} class="form-control" placeholder="EX : Rue, Ville, Pays"></input>
                  <br/>
                  {/*<label class="bmd-label-floating">horaire <span className="text-danger">*</span></label>
                  <input type="text" name="horaire" onChange={handleChange} class="form-control" ></input>
              <br/>*/}

                <label class="bmd-label-floating">Horaire <span className="text-danger">*</span></label>
                <table>
              <tr>
              <td style={{width : 85 , height : 50}}>
              A partir de  :
            </td>
            <td style={{width : 40 , height : 50}}>
            <select name="heuredebut" onChange={handleChange} size="1">
              {ls.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>

              </td>
              <td>h</td>
              <td>
              <select name="mindebut" onChange={handleChange} size="1">
              {lss.map((j) => (
                <option value={j}>{j}</option>
              ))}
            </select>

              </td>
              <td>min</td>
              </tr>
              </table>
              <table>
              <tr>
              <td style={{width : 85 , height : 50}}>
              Jusqu'à :
            </td>
            <td style={{width : 40 , height : 50}}>
            <select name="heurefin" onChange={handleChange} size="1">
              {ls.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
              </td>
              <td>h</td>
              <td>
              <select name="minfin" onChange={handleChange} size="1">
              {lss.map((j) => (
                <option value={j}>{j}</option>
              ))}
            </select>
              </td>
              <td>min</td>
              </tr>
              </table>
              <table>
              <tr>
              <td style={{width : 40 , height : 50}}>
              De :
            </td>
            <td style={{width : 100 , height : 50}}>
            <select name="jourdebut" onChange={handleChange} size="1">
              <option value="lundi">Lundi</option>
              <option value="mardi">Mardi</option>
              <option value="mercredi">Mercredi</option>
              <option value="jeudi">Jeudi</option>
              <option value="vendredi">Vendredi</option>
              <option value="samedi">Samedi</option>
              <option value="dimanche">Dimanche</option>
              </select>
              </td>
              <td style={{width : 40, height : 50}}>à:</td>
              <td>
              <select name="jourfin" onChange={handleChange} size="1">
              <option value="lundi">Lundi</option>
              <option value="mardi">Mardi</option>
              <option value="mercredi">Mercredi</option>
              <option value="jeudi">Jeudi</option>
              <option value="vendredi">Vendredi</option>
              <option value="samedi">Samedi</option>
              <option value="dimanche">Dimanche</option>
              </select>
              </td>
              </tr>
              </table>
              <br/>
              <p  style={{color : 'red'}}><WarningOutlined style={{fontSize : 20}}/> Veuillez saisir les coordonnées exactes de votre point de vente.
                    Vous pouvez trouver les valeurs de la latitude et de la longitude
                    à l'aide de la carte ci-dessous.
                  </p>
                <label class="bmd-label-floating">Latitude <span className="text-danger">*</span></label>
                <input type="text" class="form-control" name="lat" onChange={handleChange}></input>
                <br/>
                <label class="bmd-label-floating">Longitude <span className="text-danger">*</span></label>
                <input type="text" class="form-control" name="lang" onChange={handleChange}></input>
                <br/>
                 {/*      maaap      */}
                <br/>
       <Map />

                 {/*      maaap      */}
                     <button type="submit" class="btn btn-primary pull-right" style={{background: '#87bfd4', color: '#000000', marginTop : 30, marginRight : 'auto', marginLeft : 'auto'}}>Ajouter</button>
                     </form>

                     <div style={{textAlign : 'center'}}>
          {displayBlogPost(state.get)}
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

export default Pointsvente;
