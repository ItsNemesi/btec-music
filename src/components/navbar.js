import {Link} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <a id="navbar-title" href="#test">Music Stats</a>
                <ol>
                    <li><Link exact to="/spotify">Spotify</Link></li>
                    <li><Link exact to="/about">About</Link></li>
                    <li><Link exact to="/">Home</Link></li>
                </ol>
            </nav>
        </div>
    )
}
export default Navbar;