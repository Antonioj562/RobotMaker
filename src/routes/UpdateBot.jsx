import React from 'react'
import '../styles/card.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from "../client";
import factory from '../../assets/factory.png'
import '../styles/updatebot.css'

const UpdateBot = () =>  {
    let {BotId} = useParams()
    const [posts, setPosts] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select("*")
            .eq('BotId', BotId)
            setPosts(data[0])
            console.log(data)
        }
        fetchPosts();
    }, []);

    const updateBot = async () => {
        try {
            let updatedBotName = document.getElementById('botName').value;
            let updatedBotColor = document.getElementById('BotColor').value;
            let updatedBotPurpose = document.getElementById('Purpose').value;

            if (!updatedBotName) updatedBotName = posts.BotName;
            if (!updatedBotColor) updatedBotColor = posts.BotColor;
            if (!updatedBotPurpose) updatedBotPurpose = posts.BotPurpose;

            console.log('Updating...')
            await supabase
                .from('Posts')
                .update({
                    BotName: updatedBotName,
                    BotColor: updatedBotColor,
                    BotPurpose: updatedBotPurpose
                    })
                .eq('BotId', BotId);
            console.log(posts)
            console.log('Bot updated successfully');
        } catch (error) {
            console.error('Error updating bot:', error.message);
        }
    };

    return (
        <div className="updateContainer">
                <h1>Updating....</h1>
                <img className="factoryImg" src={factory} alt="Factory" />
                <h3>Current Name: {posts && posts.BotName}</h3>
                <h3>Current Color: {posts &&posts.BotColor}</h3>
                <h3>Current Purpose: {posts && posts.BotPurpose}</h3>
                <form>
                    <label>Bot - Name</label> <br />
                    <input type="text" id="botName" name="BotName" /><br />
                    <br/>

                    <label>Bot - Color</label><br />
                    <input type="text" id="BotColor" name="BotColor" /><br />
                    <br/>

                    <label>Bot -- Purpose</label><br />
                <select id="Purpose" name="BotPurpose" defaultValue={posts && posts.BotPurpose}>
                    <option value="Programmer">Programmer</option>
                    <option value="Judgment Day">Judgment Day</option>
                    <option value="Pass Butter">Pass Butter</option>
                    <option value="NewBot">New</option>
                </select>
                <br/>
                    <input type="button" value="Submit" onClick={updateBot}  />
                </form>
            </div>
    );
};

export default UpdateBot;
