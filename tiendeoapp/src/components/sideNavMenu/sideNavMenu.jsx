import React from 'react'
import { ReactComponent as Task } from '../../assets/icons/task.svg'
import { ReactComponent as Shedule } from '../../assets/icons/shedule.svg'
import { ReactComponent as Reports } from '../../assets/icons/reports.svg'
import { ReactComponent as Manage } from '../../assets/icons/manage.svg'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '../sideNavMenu/sideNavMenu.scss'

const SideNavMenu = props => {
    return (
        <div>
        <SideNav className="SideNav" onSelect={(selected) => { }}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <Manage className="icon-custom"/>
            </NavIcon>
            <NavText>
                {props.item1}
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <Task className="icon-custom"/>
            </NavIcon>
            <NavText>
              {props.item2}
            </NavText>
          </NavItem>
            <NavItem eventKey="charts/linechart">
            <NavIcon>
              <Shedule className="icon-custom"/>
            </NavIcon>
              <NavText>
              {props.item3}
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavIcon>
                <Reports className="icon-custom"/>
              </NavIcon>
              <NavText>
              {props.item4}
              </NavText>
            </NavItem>
        </SideNav.Nav>
      </SideNav>
        </div>
    )
}
export default SideNavMenu