import React from 'react'
import './navBar.scss'
import { ReactComponent as Notification } from '../../assets/icons/notification.svg'
import { ReactComponent as LoginCircle } from '../../assets/icons/login-circle.svg'

const NavBar = props => {
    return (
        <div className="navBar d-flex">
            <div className="align-self-center flex-grow-1 ml-5">
                <h4 className="ml-5 body-normal-2">{props.brand}</h4>
            </div>
            <div className="d-flex">
                <div className="notification-box paddNav"><Notification className="ml-3 mr-3 icon-custom" /></div>
                <div className="mr-5 align-self-center"><span className="ml-3 mr-2">{props.userLogin}</span><LoginCircle /></div>
            </div>
        </div>
    )
}
export default NavBar


