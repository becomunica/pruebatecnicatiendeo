import React, { Component } from 'react'
import data from '../cardTask/dataCardTaks.json'
import '../cardTask/cardTask.scss'
import { ReactComponent as Message } from '../../assets/icons/message.svg'
import { ReactComponent as Attachament } from '../../assets/icons/attachment.svg'
import { ReactComponent as AddTask } from '../../assets/icons/addtask.svg'
import HeaderTask from '../headerTask/headerTask'

const newdata = data.map((data) => {
    return (
            <div key={data.id} className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <HeaderTask titleHeaderTask="Name Board" countCards="2"/>
                <div className="boardCardTask p-4">
                <div className="heading-1 mb-3">{data.name}</div>
                    <div className="bodyBoardCardTask p-4">
                        <div className="helper-1"><span className="labelTask p-2">{data.state}</span></div>
                        <div className="helper-1 mt-4">{data.desc}</div>
                        <div className="d-flex mt-2">
                            <div className="label-2 mr-4"><span className="mr-1"><Message /></span>{data.message}</div>
                            <div className="label-2"><span className="mr-1"><Attachament /></span>{data.Attachment}</div>
                        </div>
                    </div>
                    <div className="mt-3"><span className="mr-1"><AddTask /></span><a href={data.url}>Add task</a></div>
                </div>

            </div>
    )
}
)
    export default class CardTask extends Component {
        render() {
            return (
                <div className="row">{newdata}</div>

            )
        }
}