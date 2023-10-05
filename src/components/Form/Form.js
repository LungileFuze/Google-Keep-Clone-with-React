import React, { useState } from "react"
import "./Form.css"

const Form = () => {
        // const formClickHandler = (event) => {
        //     console.log("Form clicked!!!", event)
        // }
        const [userInput, setUserInput] = useState({
            title: "",
            text: ""
        })
        
        // const [title, setTitle] = useState("")
        // const [text, setText] = useState("")

        const titleChangeHandler = (event) => setUserInput({
            ...userInput,
            title: event.target.value
        })

        const textChangeHandler = (event) => setUserInput({
            ...userInput,
            text: event.target.value
        })
        

        const submitFormHandler = (event) => {
            event.preventDefault()
            //add array logic here
            setUserInput({
                title: "",
                text: ""
            })
        }
    
    return (
        <div>
            {/* <h1>Title: { title }</h1>
            <h1>Text: { text }</h1> */}
            {/* <div className="form-container" onClick={formClickHandler}>
            <form action="">
                <input className="note-text" type="text" placeholder="Take a note..." />
                <div className="form-actions">
                    <div className="tooltip">
                        <i className="material-icons-outlined hover">
                            check_box
                        </i>
                        <span className="tooltip-text">New list</span>
                    </div>
                    <div className="tooltip">
                        <i className="material-icons-outlined hover">
                            brush
                        </i>
                        <span className="tooltip-text">New note with drawing</span>
                    </div>
                    <div className="tooltip">
                        <i className="material-icons-outlined hover">
                            image
                        </i>
                        <span className="tooltip-text">New note with image</span>
                    </div>
                </div>
            </form>
        </div> */}

        <div className="form-container active-form">
            <form onSubmit={submitFormHandler} className="form" id="form">
                <h1>TITLE: {userInput.title}</h1>
                <h1>TEXT: {userInput.text}</h1>
                <input onChange={titleChangeHandler} value={userInput.title} className="note-title" type="text" placeholder="Title" />
                <input onChange={textChangeHandler} value={userInput.text} className="note-text" type="text" placeholder="Take a note..." />
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
    )
}

export default Form;