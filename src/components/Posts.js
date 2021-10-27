import React, { useEffect, useState } from 'react'


export default function Posts() {
    const [posts, setPosts] = useState([])
    
   
    
        useEffect(() => {
            
            fetch(`https://kekambas-bs.herokuapp.com/posts`)
                .then(res => res.json())
                .then(data => setPosts(data)) 
                    // console.log(setPosts)
                
            })
    



        return (
            <div>
                Welcome Class!
                { <ul>  {posts.map(post => (<li key={post.id}>Title: {post.title} Body: {post.body}  </li>))} </ul> }   
               
            </div>
        )
    }

