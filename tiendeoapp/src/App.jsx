import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navBar/navBar';
import SideNavMenu from './components/sideNavMenu/sideNavMenu'
import LayoutCards from './components/layoutCards/layoutCards'
import './App.scss'


class App extends React.Component {
  render() {
    return <div>
            <SideNavMenu
              item1="Manage"
              item2="Task"
              item3="Shedule"
              item4="Reports" />
              <NavBar brand="TaskSky" userLogin="Jhon Doe" />
              <LayoutCards />
          </div>   
  }
}

export default App;
