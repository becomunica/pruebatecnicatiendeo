import React from 'react'
import './boardCardTask.scss'
import { ReactComponent as Message } from '../../assets/icons/message.svg'
import { ReactComponent as Attachament } from '../../assets/icons/attachment.svg'
import { ReactComponent as AddTask } from '../../assets/icons/addtask.svg'

const BoardCardTask = props => {
    return (
        <div className="boardCardTask p-4">
            <div className="heading-1 mb-3">{props.titleCard}</div>
            <div className="bodyBoardCardTask p-4">
                <div className="helper-1"><span className="labelTask p-2">{props.labelCard}</span></div>
                <div className="helper-1 mt-4">{props.textTask}</div>
                <div className="d-flex mt-2">
                    <div className="label-2 mr-4"><span className="mr-1"><Message /></span>{props.countMessage}</div>
                    <div className="label-2"><span className="mr-1"><Attachament /></span>{props.countAttachament}</div>
                </div>
            </div>
            <div className="mt-3"><span className="mr-1"><AddTask /></span>{props.AddTask}</div>
        </div>

    )
}
export default BoardCardTask