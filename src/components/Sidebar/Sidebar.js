import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="side-item">
                <span className="material-icons-outlined hover active">lightbulb</span>
                <span className="sidebar-text">Notes</span>
            </div>
            <div className="side-item">
                <span className="material-icons-outlined hover">notifications</span>
                <span className="sidebar-text">Reminders</span>
            </div>
            <div className="side-item">
                <span className="material-icons-outlined hover">edit</span>
                <span className="sidebar-text">Edit labels</span>
            </div>
            <div className="side-item">
                <span className="material-icons-outlined hover">archive</span>
                <span className="sidebar-text">Archive</span>
            </div>
            <div className="side-item">
                <span className="material-icons-outlined hover">delete</span>
                <span className="sidebar-text">Trash</span>
            </div>
        </div>
    )
}

export default Sidebar;