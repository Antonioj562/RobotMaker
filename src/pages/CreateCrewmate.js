import { supabase } from '../client'





/* IS THIS BEING USED ANYWHERE? */

const createCrew = async (event) => {
    event.preventDefault();

    await supabase 
        .from('Posts')
        .insert({ name: post.name, purpose: post.purpose, color: color.purpose})
        .select();
    
    window.location="/";

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default createCrew