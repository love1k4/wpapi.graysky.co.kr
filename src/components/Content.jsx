import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


export default function Contents() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://technote.graysky.co.kr/wp-json/wp/v2/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  },[0]);

  if (loading) return <div style={{display: 'flex', justifyContent:'center', fontSize:'20px', marginTop: '50px', marginBottom: '100px'}}>Loading...</div>;
  return (
    <article>
              Post No. : {postId} <p />
              <h1><div dangerouslySetInnerHTML={{__html: data.title.rendered}} /></h1><p />
              <div dangerouslySetInnerHTML={{__html: data.content.rendered}} /><p />
              Posted Date : {data.date}
            </article>
  );
}
