import React from 'react';
import { useEffect, useState } from 'react';

export default function Posts() {
    const [posts, setPosts] =useState([]);
    useEffect(()=> {
        async function loadPosts(){
            const response = await fetch('https://ks00.graysky.co.kr/wp-json/wp/v2/posts');
            if(!response.ok) {
                return;
            }
            const posts = await response.json();
            setPosts(posts);
        }        
        loadPosts();
    },[])
  return (
    <div>
        <h1>WP Post API Test</h1>
        <div>
         {posts.map((post, index) => (
            <div key={index}>
                <div>
                        <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                        <h5 dangerouslySetInnerHTML={{__html: post.content.rendered}} /> 
                </div>
            </div>
        ))}
        </div>

    </div>
  )
}
