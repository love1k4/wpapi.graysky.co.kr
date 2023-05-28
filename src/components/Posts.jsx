import React from 'react';
import { useEffect, useState } from 'react';

export default function Posts() {
    const [posts, setPosts] =useState([]);
    useEffect(()=> {
        async function loadPosts(){
            const response = await fetch('https://technote.graysky.co.kr/wp-json/wp/v2/posts');
            if(!response.ok) {
                return;
            }
            const posts = await response.json();
            setPosts(posts);
        }        
        loadPosts();
    },[])
  return (
    <div className='container'>
        <h1>WP Post API Test</h1>
        <div>
         {posts.map((post, index) => (
            <div key={index}>
                <div>
                <sub>Posted {post.date}</sub><strong><h4><div dangerouslySetInnerHTML={{__html: post.title.rendered}} /></h4></strong>
                        { /*<div dangerouslySetInnerHTML={{__html: post.content.rendered}} /> */ }
                </div>
            </div>
        ))}
        </div>

    </div>
  )
}
