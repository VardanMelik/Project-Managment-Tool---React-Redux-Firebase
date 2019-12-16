import React from 'react'

const ProjectDetail = (props) => {
    const id = props.match.params.id
return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p> Lorem ispum dolor sit amet consectetur adisicing elit.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetail