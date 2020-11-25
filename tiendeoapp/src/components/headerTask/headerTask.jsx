import React from 'react'
import '../headerTask/headerTask.scss'

const Headertask = props => {
    return (
        <div className="mb-3">
            <hr className="lineHeaderTask"/>
            <div className="body-normal-1">{props.titleHeaderTask}<span className="ml-1">({props.countCards})</span></div>
        </div>
    )
}
export default Headertask