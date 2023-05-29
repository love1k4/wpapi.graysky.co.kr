import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
const [posts, setPosts] = useState([]);
useEffect(()=> {
    async function loadPosts(){
        const response = await fetch('https://technote.graysky.co.kr/wp-json/wp/v2/posts');
        if(!response.ok) {
           return;
        }
        const posts = await response.json();
        setPosts(posts);
        console.log(posts);
    }        
    loadPosts();
},[])
return (
<div className='container'>
    <div style={{textAlign:'right'}}>
      <sub><b>경성대학교 Linc사업단</b> <i>흐린하늘 Develog</i></sub>
        <div style={{display: 'flex', width: '100%', height:'auto', marginTop:'40px', marginBottom: '40px'}} alt='Blog_Home'>
          <img src="/images/blog_home.jpg" alt='Home_img' width={'1280px'} height={'400px'}/>
        </div>
      </div>
    <div>
     {posts.map((post, index) => (
        <div key={index}>
            <article>
            <sub>Posted {post.date}</sub><strong><h4><div dangerouslySetInnerHTML={{__html: post.title.rendered}} /></h4></strong>
            <Link to={`/content/${post.id}`}> Read Article ...</Link>
            </article>
        </div>
    ))}
    </div>

</div>
)
}