import React from 'react'
import '../styles/card.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from "../client";
import '../styles/viewbot.css'
import Card from '../components/Card.jsx'

const ViewBot = () =>  {
    let {BotId} = useParams()
    const [posts, setPosts] = useState([]);

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

    return (
        <div className="ViewContainer">

            <Card key={posts && posts.BotId} 
                BotId={posts && posts.BotId} 
                BotName={posts && posts.BotName} 
                BotColor={posts && posts.BotColor} 
                BotPurpose={posts && posts.BotPurpose}/>
        </div>
    );
};

export default ViewBot;