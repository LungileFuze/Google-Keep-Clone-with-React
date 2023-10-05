import "./Modal.css"

const Modal = () => {
    return (
        <div className="modal">
        <div className="modal-content">
            <div className="form-container active-form">
                <form action="">
                    <input className="note-title" type="text" placeholder="Title" />
                    <input className="note-text" type="text" placeholder="Take a note..." />
                    <div className="form-actions">
                        <div className="icons">
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
                            <div className="tooltip">
                                <i className="material-icons-outlined hover small-icon">
                                    undo
                                </i>
                                <span className="tooltip-text">Undo</span>
                            </div>
                            <div className="tooltip">
                                <i className="material-icons-outlined hover small-icon">
                                    redo
                                </i>
                                <span className="tooltip-text">Redo</span>
                            </div>
                        </div>
                        <button className="close-btn">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Modal