import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'
import UpdateBot from '../routes/UpdateBot'
import ViewBot from '../routes/ViewBot.jsx'


const Card = (props) =>  {

    return (
        <div className="Card">
            <h2 className="name">{"Name : " + props.BotName}</h2>
            <h3 className="color">{"Color : " + props.BotColor}</h3>
            <h3 className="purpose">{props.BotsPurpose}</h3>

            <ul className="" key="UpdateButton">
                <Link to="/UpdateBot/" element={<UpdateBot p={props}/>}>Update Bot</Link>
            </ul>
            <ul className="" key="ViewBotButton">
                <Link to="/ViewBot/" element={<ViewBot p={props}/>}>View Bot</Link>
            </ul>
            <button>Future Delete Button</button>
        </div>
    );
};

export default Card;