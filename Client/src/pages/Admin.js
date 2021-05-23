import React, { useState } from 'react';
import './Dash.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import FileBase from 'react-file-base64';
import {UserOutlined} from '@ant-design/icons';
import {WarningOutlined} from '@ant-design/icons';

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

function Admin() {

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
                 
                

                 <form>
                      <div className="top-margin">
                          <label>Nom Entreprise <span className="text-danger">*</span></label>
                             <input type="text" name="name"  className="form-control"/>
                       </div>

                       <div className="top-margin">
                            <label>Nom Utilisateur <span className="text-danger">*</span></label>
                                <input type="text" name="username"  className="form-control"/>
                       </div>

                        <div className="top-margin">
                            <label>Adresse Email<span className="text-danger">*</span></label>
                               <input type="text" name="email"  className="form-control"/>
                      </div>

                      <div className="row top-margin">
                          <div className="col-sm-6">
                               <label>Mot de passe <span className="text-danger">*</span></label>
                                <input type="text"  name="password" className="form-control"/>
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
                           <label>Ajouter votre logo<span className="text-danger">*</span></label>                  
                          <FileBase type="file" multiple={false} />

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
                 <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                    <h4 style ={{fontWeight :'bold'}}>Gestion des clients</h4>
                 </div> 
                 <br/><br/>
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#2a9438', padding: 10}}>Ajouter un client</h5>
                     </tr>
                 </table>
                 <br/>
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#2a9438', padding: 10}}>Liste des clients</h5>
                     </tr>
                 </table>
                 <br/>
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#b36887', padding: 10}}>Supprimer un client</h5>
                     </tr>
                 </table>
                 <br/>
                 <label class="bmd-label-floating">Nom Client</label>
                  <input type="text" class="form-control"></input>
                  
                 <br/><br/>
                 <br/>
                 <table style={{marginLeft:'auto',marginRight:'auto'}}>
                     <tr>
                     <button type="submit" class="btn btn-primary pull-rigt" style={{background: '#b36887', color: '#000000' , marginTop : -50}}>Supprimer</button>  
                     </tr>
                 </table>
                     
                 <div style={{ background: '#87bfd4', padding: 20, minHeight: 50 }}>
                    <h4 style ={{fontWeight :'bold'}}>Gestion des commentaires</h4>
                 </div> 
                 <br/><br/>
                 <table>
                     <tr>
                     <h5 style ={{fontWeight :'bold', background :'#b36887', padding: 10}}>Supprimer un commentaire</h5>
                     </tr>
                 </table>
                 <br/>
                 <label class="bmd-label-floating">Nom Client</label>
                  <input type="text" class="form-control"></input>
                  <br/>
                 <label class="bmd-label-floating">Date Commentaire</label>
                  <input type="text" class="form-control"></input>
                  
                 <br/><br/>
                 <br/>
                 <table style={{marginLeft:'auto',marginRight:'auto'}}>
                     <tr>
                     <button type="submit" class="btn btn-primary pull-rigt" style={{background: '#b36887', color: '#000000' , marginTop : -50}}>Supprimer</button>  
                     </tr>
                 </table>
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