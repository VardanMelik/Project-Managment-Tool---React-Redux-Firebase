import React, { Component } from 'react'
import Notifications from './Notification'
import ProjectsList from '../projects/ProjectList'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectsList />
                        <div className="col s12 m5 offset-m1">
                            <Notifications />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
