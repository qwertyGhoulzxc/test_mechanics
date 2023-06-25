import React, { useEffect, useMemo, useState} from 'react';
import axios from "axios";
import ListItem from "./listItem";

const List = () => {
    const [posts,setPosts] = useState([])
    const getPosts = async (page=1,limit=5)=>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:limit,
                _page:page,
            }
        })

        setPosts(data)
    }

    useEffect(()=>{
        getPosts()

    },[])

    const postsInCash = useMemo(()=>posts,[posts])

    const [draw,redraw] = useState(false)
    const handleReverse = ()=>{
        setPosts(posts.reverse())
        redraw(prev=>!prev)
    }

    return (
        <div>
            {postsInCash?.map((value,i)=>{
                return <ListItem key={value.id} value={value}/>
            })}
            <button onClick={handleReverse}>reverse array</button>

        </div>
    );
};

export default List;