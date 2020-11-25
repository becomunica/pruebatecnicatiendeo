import React from 'react'
import '../layoutCards/layoutCards.scss'
import BoardCardTask from '../boardCardTask/boardCardTask'
import HeaderTask from '../headerTask/headerTask'

const LayoutCards = props => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                <div className="col-12 col-sm-12 col-md-11 col-lg-11 mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                            <button className="btn btn-primary">+ Add Element</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Buscar</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Buscar una tarea" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-1">
                            <HeaderTask titleHeaderTask="Name Board" countCards="7" />
                            <BoardCardTask
                                className=""
                                countMessage="3"
                                countAttachament="2"
                                AddTask="Add Task"
                                titleCard="Name Board"
                                labelCard="Priority"
                                textTask="Name of task: Company website redesign, all resources are into redesign_companies folder" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-1">
                            <HeaderTask titleHeaderTask="Name Board" countCards="7" />
                            <BoardCardTask
                                className=""
                                countMessage="3"
                                countAttachament="2"
                                AddTask="Add Task"
                                titleCard="Name Board"
                                labelCard="Priority"
                                textTask="Name of task: Company website redesign, all resources are into redesign_companies folder" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-1">
                            <HeaderTask titleHeaderTask="Name Board" countCards="7" />
                            <BoardCardTask
                                className=""
                                countMessage="3"
                                countAttachament="2"
                                AddTask="Add Task"
                                titleCard="Name Board"
                                labelCard="Priority"
                                textTask="Name of task: Company website redesign, all resources are into redesign_companies folder" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-1">
                            <HeaderTask titleHeaderTask="Name Board" countCards="7" />
                            <BoardCardTask
                                className=""
                                countMessage="3"
                                countAttachament="2"
                                AddTask="Add Task"
                                titleCard="Name Board"
                                labelCard="Priority"
                                textTask="Name of task: Company website redesign, all resources are into redesign_companies folder" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LayoutCards