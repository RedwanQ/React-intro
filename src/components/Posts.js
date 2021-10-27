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
                { <ul>  {posts.map(post => (<li key={post.id}> {post.user.first_name}
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Title: {post.title}</li>
                        <li className="list-group-item">Body:  {post.body}</li>
                        <li className="list-group-item">Date:  {post.date_created}</li>
                    </ul>
                </div>
                </li>))} </ul> }
            </div>
        )
    }

