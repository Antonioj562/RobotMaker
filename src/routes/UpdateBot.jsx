import { useState } from "react";
import { supabase } from "../client";
import factory from '../../assets/factory.png'

const UpdateBot = (p) => {
    const [post, setPost] = useState({BotName: "Bob", BotColor: "Gray", BotPurpose: "New Bot" })

    const updateBot = async (event) => {
        event.preventDefault();
        try {
            await supabase
                .from('Posts')
                .update({BotName: post.BotName, BotColor: post.BotColor, BotPurpose: post.BotPurpose})
                .eq('BotId', post.BotId);
            console.log('Bot updated successfully');
        } catch (error) {
            console.error('Error updating bot:', error.message);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <>
            <div className="createContainer">
                <h1>Updating....</h1>
                <img className="botFactory" src={factory}/>
                <h3>Current Name: {p.BotName}</h3>
                <h3>Current Color: {p.BotColor}</h3>
                <h3>Current Prupose: {p.BotPurpos}</h3>
                <form>
                    <label>Bot - Name</label> <br />
                    <input type="text" id="botName" name="BotName" onChange={handleChange} /><br />
                    <br/>

                    <label>Bot - Color</label><br />
                    <input type="text" id="BotColor" name="BotColor" onChange={handleChange} /><br />
                    <br/>

                    <label>Bot -- Purpose</label><br />
                    <input type="text"  id="Purpose" name="BotPurpose" onChange={handleChange}>
                    </input>
                    <br/>
                    <input type="submit" value="Submit" onClick={updateBot} />
                </form>
            </div>
        </>
    )
}

export default UpdateBot