import { supabase } from "../client";
import { useState, useEffect } from "react";
import Card from '../components/Card.jsx'
import '../styles/allbots.css'

const AllBots = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select();
            setPosts(data)
        }
        setPosts(props.data);
        fetchPosts();
    }, [props]);

    return (
        <div className="AllBotsContainer">
            <h2>Bots Rise!</h2>     
            <div className="cardItem">
                {
                    posts && posts.length > 0 ?
                    posts.map((post) => 
                        <Card key={post.BotId} BotId={post.BotId} BotName={post.BotName} BotColor={post.BotColor} BotPurpose={post.BotPurpose}/>
                    ) : <h2>{'No bots generated.'}</h2>
                }
            </div>
        </div>
    )
}

export default AllBots;

