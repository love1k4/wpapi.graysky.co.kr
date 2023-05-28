import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {
    const [posts, setPosts] = useState([]);
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
        console.log('posts')
    },[])
  return (
    <div className='container'>
        <div>
         {posts.map((post, index) => (
            <div key={index}>
                <article>
                <sub>Posted {post.date}</sub>
                <strong><h4><div dangerouslySetInnerHTML={{__html: post.title.rendered}} /></h4></strong>
                <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                <Link to={`/content/${post.id}`}> Read Article ...</Link>
                </article>
            </div>
        ))}
        </div>

    </div>
  )
}
