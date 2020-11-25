import React from 'react'
import '../layoutCards/layoutCards.scss'
import CardTask from '../cardTask/cardTask'

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
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <CardTask />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LayoutCards