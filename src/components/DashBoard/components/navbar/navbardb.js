import "./navbardb.scss"

const Navbardb  = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/Dashboard/logo.svg" alt=""/>
                <span>Admin</span>
            </div>
            <div className="icons">
                <img src="/Dashboard/search.svg" className="icon"/>
                <img src="/Dashboard/app.svg" className="icon"/>
                <img src="/Dashboard/expand.svg" className="icon"/>
                <div className="notification">
                    <img src="/Dashboard/notifications.svg" className="icon"/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="icon"/>
                <span>Violeta</span>
                </div>
                <img src="/Dashboard/settings.svg" className="icon"/>
            </div>
        </div>
    )
}

export default Navbardb;