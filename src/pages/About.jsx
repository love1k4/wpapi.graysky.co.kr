import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='container'>
      <div style={{display:'flex', marginTop:'50px', marginBottom: '50px', alignItems:'center', justifyContent:'center'}} alt='thumnail'>
        <img src="/images/technote_thum_wp-react.png" />
      </div>
      <article>
        WordPress를 Headless CMS로 사용하기 위한 샘플 예제로 제작된 App입니다.<p />
        Blog메뉴에서 불러오는 데이터는 Technote@Graysky에서 최근글을 json으로 passing 받은 데이터를 바인딩하고 있습니다.<p />
        관련 예제는 <Link to='https://technote.graysky.co.kr/dev/wp-json-blog/' target='_blank'>Technote@Graysky</Link> 에 첨부해 두었고, <Link to='https://github.com/love1k4/wpapi.graysky.co.kr' target='_blank'>Github</Link>에서 소스코드를 받으실 수 있습니다. <p />
        더 많은 기능을 구현하고 싶으신 분은 아래 참고 URL을 학습하기를 추천합니다. <p />
        - 참고 URL -<p />
        <li>
        Youtube :<Link to='https://youtu.be/fFNXWinbgro' target='_blank'> Traversy Media</Link>
        </li>
      </article>
    </div>
  )
}
