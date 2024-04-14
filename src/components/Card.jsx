import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'
import { supabase } from "../client";
import BrainyBotImage from "../../assets/BrainyBot.png";
import DoomBotImage from "../../assets/DoomBot.png";
import PassButterBotImage from "../../assets/PassButterBot.png";
import NewBotImage from "../../assets/NewBot.png";

const Card = (props) =>  {
    let imagePath;

    switch (props.BotPurpose) {
        case "Programmer":
            imagePath = BrainyBotImage;
            break;
        case "Judgment Day":
            imagePath = DoomBotImage;
            break;
        case "Pass Butter":
            imagePath = PassButterBotImage;
            break;
        default:
            imagePath = NewBotImage;
    }


    const deleteBot = async () =>{
        try {
            console.log('Deleting bot...');
            const { error } = await supabase
                .from('Posts')
                .delete()
                .eq('BotId', props.BotId)
            if (error) {
                throw error;
            }
            console.log('Bot deleted successfully');
        } catch (error){
            console.error('Error deleting bot:', error.message);
        }
    }

    return (
        <div className="Card">
            <img className='botImg' src={imagePath} alt="Bot" width={150}/>
            <h2 className="name">{"Name : " + props.BotName}</h2>
            <h3 className="color">{"Color : " + props.BotColor}</h3>
            <h3 className="purpose">{"Purpose : " + props.BotPurpose}</h3>

            <div className="links" key="UpdateButton">
                <Link to={`/UpdateBot/${props.BotId}`}>Update Bot</Link>
                <Link to={`/ViewBot/${props.BotId}`} >View Bot</Link>
            </div>
            <button onClick={deleteBot}>Terminate Bot</button>
        </div>
    );
};

export default Card;