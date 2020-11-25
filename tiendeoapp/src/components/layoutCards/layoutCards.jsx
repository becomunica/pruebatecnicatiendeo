import React from 'react'
import '../layoutCards/layoutCards.scss'
import BoardCardTask from '../boardCardTask/boardCardTask'

const LayoutCards = props => {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
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
    )
}
export default LayoutCards