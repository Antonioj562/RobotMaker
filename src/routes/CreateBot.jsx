import { useState } from "react";
import { supabase } from "../client";
import factory from '../../assets/factory.png'


const CreateBot = () => {
    const [post, setPost] = useState({BotName: "Bob", BotColor: "Gray", BotPurpose: "New Bot" })

    const createBot = async (event) => {
        console.log('Testing');
        event.preventDefault();
        try {
            await supabase
                .from('Posts')
                .insert({BotName: post.BotName, BotColor: post.BotColor, BotPurpose: post.BotPurpose})
            console.log('Bot created successfully');
        } catch (error) {
            console.error('Error creating bot:', error.message);
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
        <div className="createContainer">
            <h1>Creating....</h1>
            <img className="botFactory" src={factory}/>
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
                <input type="submit" value="Submit" onClick={createBot} />
            </form>
        </div>
    )
}

export default CreateBot;