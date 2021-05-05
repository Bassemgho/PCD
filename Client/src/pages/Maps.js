import React, { useState } from 'react';
import './Dash.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from './Cricketer';
import CareerDetails from './CareerDetails';
import Icon from '@ant-design/icons';
import {Link} from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function Maps() {
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
          <Avatar style={{ float: 'right' }} Icon="user" />
          <Title style={{ color: 'white' }} level={3}><Link to='/'>UNIFID</Link></Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Maps']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                <Link to ='/dashboard'>Statistiques</Link>
            </Menu.Item>
            <Menu.Item key='paramcarte'>
                <Link to ='/paramcarte'>Paramètres de la carte de fidelité</Link>
            </Menu.Item>
            <Menu.Item key='Clients'>
                <Link to ='/clients'>Table des clients</Link>
            </Menu.Item>
            <Menu.Item key='Profil'>
              <span><Link to='/profil'>Profil</Link></span>
            </Menu.Item>
  
              <SubMenu
                title={
                  <span>
                    {/*<Icon type="mail" />*/}
                    <span>Nos services</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' >
                  <Menu.Item key='location1'><Link to='/pointsvente'> Points de vente</Link></Menu.Item>
                  <Menu.Item key='location2'><Link to='/categories'>Catégories</Link></Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key='Maps'>
              <span><Link to='/maps'>Maps</Link></span>
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><h1>Maps</h1></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
              
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

export default Maps;
