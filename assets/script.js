function Navbar(){
    return(
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                            <a className="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

function MainContent(){
    return(
        <div className="row">
            <div className-="col">
            <h1>Main Content Headiing</h1>
            <p className="blockquote">This is the main content of my page that I am having fun building with React!</p>
            </div>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent/>
    </div>, 
    document.getElementById("root"))