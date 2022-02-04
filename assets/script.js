// import React from "react"
// import ReactDOM from "react-dom"

// Creatiing a function to render.
// function Navbar(){
//     return(
//         <div className="row">
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Navbar</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div className="navbar-nav">
//                             <a className="nav-link active" aria-current="page" href="#">Home</a>
//                             <a className="nav-link" href="#">Features</a>
//                             <a className="nav-link" href="#">Pricing</a>
//                             <a className="nav-link disabled">Disabled</a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// function MainContent(){
//     return(
//         <div className="row">
//             <div className-="col">
//             <h1>Main Content Headiing</h1>
//             <p className="blockquote">This is the main content of my page that I am having fun building with React!</p>
//             </div>
//         </div>
//     )
// }


// Vanillia JS appending a element and rendering it to HTML
// const h1 = document.createElement("h1")
// h1.textContent = "This is the old way"
// h1.className = "header"
// document.getElementById("root").append(h1)


//Challenge 1 
// const pageContent = (
//     <div>
//         <img src="media/reactLogo.png" width="100px"></img>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li> Was first released in 2013</li>
//             <li> Was originally created by Jordan Walke</li>
//             <li> Has well over 100k starts on Github</li>
//             <li> Is maintained by Facebook</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(pageContent, document.getElementById("root"))

// Challenge 2
function Header(){
    return(
        <header>
            <nav>
                <img src="media/reactLogo.png" width="100px"></img>
            </nav>
        </header>
    )
}

function MainContent(){
    return(
        <>
        <h1>Things I am excited to learn about React</h1>
        <ol>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
            <li>Thing 4</li>
        </ol>
        </>
    )
}

function Footer(){
    return(
        <footer>
            Van Nairn development. All rights reserved
        </footer>
    )
}

function Page(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))