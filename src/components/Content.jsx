import React from 'react'
import { useState, useEffect } from 'react';

export default function Content(props) {
  const [content, setContent] =useState([]);
  useEffect(()=> {
      async function loadContent(){
          const response = await fetch('https://technote.graysky.co.kr/wp-json/wp/v2/posts/1328');
          if(!response.ok) {
              return;
          }
          const content = await response.json();
          setContent(content);
      }        
      loadContent();
      
  },[])
  return (
    <div className='container'>  
            <article>
              <div>

              </div>
                
            </article>
    </div>
  )}