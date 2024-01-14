import "./navbardb.scss"

const Navbardb  = () => {
    return (
        <div className="navbar">
            <div className="logodb">
                <img src="/Dashboard/logo.svg" alt=""/>
                <span>Admin</span>
            </div>
            <div className="iconsdb">
                <img src="/Dashboard/search.svg" className="icondb"/>
                <img src="/Dashboard/app.svg" className="icondb"/>
                <img src="/Dashboard/expand.svg" className="icondb"/>
                <div className="notification">
                    <img src="/Dashboard/notifications.svg" className=""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className=""/>
                <span>Violeta</span>
                </div>
                <img src="/Dashboard/settings.svg" className=""/>
            </div>
        </div>
    )
}

export default Navbardb;