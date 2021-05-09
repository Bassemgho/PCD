import React, { useState } from 'react';
import './Dash.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from './Cricketer';
import CareerDetails from './CareerDetails';
import Icon from '@ant-design/icons';
import {Link, Route, Redirect} from 'react-router-dom';
import {AppstoreAddOutlined,SettingOutlined,BarChartOutlined,UserOutlined,CustomerServiceOutlined,TableOutlined,ShopOutlined,ShoppingOutlined,GlobalOutlined} from '@ant-design/icons';


import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const { Header, Footer, Sider, Content } = Layout;

function Event(props) {
  
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
                    <MenuItem onClick={handleClose}><h5>Déconnexion</h5></MenuItem>
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
                <Breadcrumb.Item><h1>Evenements</h1></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 650 }}>
              <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                    <h4>Ajouter un événement</h4>
                 </div>   
                 <br/><br/>
                 <label class="bmd-label-floating">Nom <span className="text-danger">*</span></label>
                  <input type="text" class="form-control"></input>
                  <br/>
                  <label class="bmd-label-floating">Lieu <span className="text-danger">*</span></label>
                <input type="text" class="form-control"></input>  
                <br/>
                <label class="bmd-label-floating">Date <span className="text-danger">*</span></label>
                <table>
              <tr>
              <td style={{width : 85 , height : 50}}>
              A partir de  :
            </td>
            <td style={{width : 40 , height : 50}}>  
            <select name="day" size="1">
             
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
              </select>
              </td>
              <td style={{width : 85 , height : 50}}>
            <select name="month" size="1">
              <option>Janvier</option>
              <option>Février</option>
              <option>Mars</option>
              <option>Avril</option>
              <option>Mai</option>
              <option>Juin</option>
              <option>Juillet</option>
              <option>Août</option>
              <option>Septembre</option>
              <option>Octobre</option>
              <option>Novembre</option>
              <option>Décembre</option>
              </select>
              </td>
              <td style={{width : 85 , height : 50}}>
              <select name="year" size="1">
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
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
            <select name="day" size="1">
             
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
              </select>
              </td>
              <td style={{width : 85 , height : 50}}>
            <select name="month" size="1">
              <option>Janvier</option>
              <option>Février</option>
              <option>Mars</option>
              <option>Avril</option>
              <option>Mai</option>
              <option>Juin</option>
              <option>Juillet</option>
              <option>Août</option>
              <option>Septembre</option>
              <option>Octobre</option>
              <option>Novembre</option>
              <option>Décembre</option>
              </select>
              </td>
              <td style={{width : 85 , height : 50}}>
              <select name="year" size="1">
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
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
            <select name="heure" size="1">
              <option>00</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              </select>
              </td>
              <td>h</td>
              <td>
              <select name="minute" size="1">
              <option>00</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
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
            <select name="heure" size="1">
              <option>00</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              </select>
              </td>
              <td>h</td>
              <td>
              <select name="minute" size="1">
              <option>00</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
              </select>
              </td>
              <td>min</td>
              </tr>
              </table>  
                     <button type="submit" class="btn btn-primary pull-right" style={{background: '#87bfd4', color: '#000000', marginTop : 30, marginRight : 50}}>Ajouter</button>  
                      
              </div>
            </Content>
            <CareerDetails player={selectedPlayer} visible={visible} onClose={onClose} />
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Event;