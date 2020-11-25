import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import NavBar from './components/navBar/navBar';
import BoardCardTask from './components/boardCardTask/boardCardTask'
import { ReactComponent as Task } from './assets/icons/task.svg';
import { ReactComponent as Shedule } from './assets/icons/shedule.svg';
import { ReactComponent as Reports } from './assets/icons/reports.svg';
import { ReactComponent as Manage } from './assets/icons/manage.svg';
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
              <Manage className="icon-custom"/>
            </NavIcon>
            <NavText>
              Manage
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <Task className="icon-custom"/>
            </NavIcon>
            <NavText>
              Task
            </NavText>
          </NavItem>
            <NavItem eventKey="charts/linechart">
            <NavIcon>
              <Shedule className="icon-custom"/>
            </NavIcon>
              <NavText>
                Shedule
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavIcon>
                <Reports className="icon-custom"/>
              </NavIcon>
              <NavText>
                Reports
              </NavText>
            </NavItem>
        </SideNav.Nav>
      </SideNav>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <NavBar brand="TaskSky" userLogin="Jhon Doe" />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-11 col-lg-11">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-5">
                    <BoardCardTask
                      className=""
                      countMessage="3"
                      countAttachament="2"
                      AddTask="Add Task"
                      titleCard="Name Board" 
                      labelCard="Priority" 
                      textTask="Name of task: Company website redesign, all resources are into redesign_companies folder"/>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-5">
                  <BoardCardTask
                        className=""
                        countMessage="3"
                        countAttachament="2"
                        AddTask="Add Task"
                        titleCard="Name Board" 
                        labelCard="Priority" 
                        textTask="Name of task: Company website redesign, all resources are into redesign_companies folder"/>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-5">
                  <BoardCardTask
                          className=""
                          countMessage="3"
                          countAttachament="2"
                          AddTask="Add Task"
                          titleCard="Name Board" 
                          labelCard="Priority" 
                          textTask="Name of task: Company website redesign, all resources are into redesign_companies folder"/>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-5">
                  <BoardCardTask
                          className=""
                          countMessage="3"
                          countAttachament="2"
                          AddTask="Add Task"
                          titleCard="Name Board" 
                          labelCard="Priority" 
                          textTask="Name of task: Company website redesign, all resources are into redesign_companies folder"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  }
}

export default App;
