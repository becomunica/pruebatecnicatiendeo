import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import NavBar from './components/navBar/navBar';
import 'boxicons'
import { ReactComponent as UserAvatar } from './assets/icons/user--avatar.svg';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.scss'


class App extends React.Component {
  render() {
    return <div>
      <SideNav className="SideNav" onSelect={(selected) => { }}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <UserAvatar className="icon-color"/>
              <box-icon style={{ fontSize: '1.75em' }} type="solid" color="blue" name="BiUser"></box-icon>
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <box-icon style={{ fontSize: '1.75em' }} type="solid" color="blue" name="BiUser"></box-icon>
            </NavIcon>
            <NavText>
              Charts
            </NavText>
          </NavItem>
            <NavItem eventKey="charts/linechart">
            <NavIcon>
              <box-icon style={{ fontSize: '1.75em' }} type="solid" color="blue" name="BiUser"></box-icon>
            </NavIcon>
              <NavText>
                Line Chart
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavIcon>
                <box-icon style={{ fontSize: '1.75em' }} type="solid" color="blue" name="BiUser"></box-icon>
              </NavIcon>
              <NavText>
                Bar Chart
              </NavText>
            </NavItem>
          
        </SideNav.Nav>
      </SideNav>
      <div>
      <NavBar />
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-1 col-lg-1">

        </div>
        <div className="col-12 col-sm-12 col-md-11 col-lg-11">
          
        </div>
      </div>

    </div>
  }
}

export default App;
