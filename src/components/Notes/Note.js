import React, { useState } from "react"

const Note = (props) => {
    useState(props.title)
    
    const [title, setTitle] = useState(props.title)

    const noteClickHandler = () => {
        setTitle("changed Title")
        `Title: ${title}`
    }
    return (
         <div className="note" 
            id="note.id"
            onClick={noteClickHandler}
            >
            <span className="material-icons check-circle">check_circle</span>
            <div className="title">{props.title}</div>
            <div className="text">{props.text}</div>

            <div className="note-footer">
                <div className="tooltip">
                    <i className="material-icons-outlined hover small-icon">
                        add_alert
                    </i>
                    <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                    <i className="material-icons-outlined hover small-icon">
                        person_add_alt
                    </i>
                    <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                    <i className="material-icons-outlined hover small-icon">
                        palette
                    </i>
                    <span className="tooltip-text">Background options</span>
                </div>
                <div className="tooltip">
                    <i className="material-icons-outlined hover small-icon">
                        image
                    </i>
                    <span className="tooltip-text">Background image</span>
                </div>
                <div className="tooltip">
                    <i className="material-icons-outlined hover small-icon">
                        archive
                    </i>
                    <span className="tooltip-text">Archives</span>
                </div>                   
                <div className="tooltip">
                <i className="material-icons-outlined hover small-icon">
                    more_vert
                </i>
                <span className="tooltip-text">More</span>
                </div>
            </div>
        </div>
      
    )
}

export default Note