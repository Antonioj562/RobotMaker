import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'


const ViewBot = (props) =>  {
    let { BotId } = useParams();

    return (
        <div className="Card">
            <h2 className="name">{"Name : " + props.BotName}</h2>
            <h3 className="color">{"Color : " + props.BotColor}</h3>
            <h3 className="purpose">{props.BotsPurpose}</h3>

            <ul className="">
                <Link to="/ViewBot/" element={<ViewBot p={props}/>}>View Bot</Link>
            </ul>
            <button>Future Delete Button</button>
        </div>
    );
};

export default ViewBot;