import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostView(props) {
    const { postId } = useParams();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState("");

    useEffect(()=> {
        setLoader(true)
        async function loadData(){
            const response = await fetch(`https://ks00.graysky.co.kr/wp-json/wp/v2/posts/${postId}`);
            if(!response.ok) {
                return;
            }
            const post = await response.json();
            console.log(data);
            setData(post);
        }        
        loadData(data);
        setLoader(false);

        
    },[])
  return (
    <div className='container'>
        {loader ? (
                <p>Loading...</p>
            ) : (
        <article>
              Post No. : {postId} <p />
              <h1><div dangerouslySetInnerHTML={{__html: data.title.rendered}} /></h1><p />
              <div dangerouslySetInnerHTML={{__html: data.content.rendered}} /><p />
              Posted Date : {data.date}
            </article>
            )}
    </div>
  )
}
