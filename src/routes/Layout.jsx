import { Outlet, Link } from "react-router-dom"
import '../styles/navbar.css'
import CreateBot from "./CreateBot"
import AllBots from "./AllBots"

const layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <ul className="navLink" key="home-button">
                        <Link  to="/">
                            Home
                        </Link>
                    </ul>
                    <br></br>
                    <ul className="navLink" key="CreateCrewButton">
                        <Link to="/CreateBot/" element={<CreateBot/>}>Create Robot</Link>
                    </ul>
                    <br></br>
                    <ul className="navLink" key="allBotsButton">
                        <Link to="/AllBots/" element={<AllBots/>}>All Bots</Link>
                    </ul>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default layout;