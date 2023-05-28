import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
      <div style={{display:'flex', marginTop:'50px', marginBottom: '50px', alignItems:'center', justifyContent:'center'}} alt='thumnail'>
        <img src="/images/technote_thum_wp-react.png" />
      </div>
      <article>
        WordPress를 Headless CMS로 사용하기 위한 샘플 예제로 제작된 App입니다.<p />
        Blog메뉴에서 불러오는 데이터는 Technote@Graysky에서 최근글을 json으로 passing 받은 데이터를 바인딩하고 있습니다.<p />
        관련 예제는 <Link to='https://technote.graysky.co.kr/dev/wp-json-%ec%98%88%ec%a0%9c/' target='_blank'>Technote@Graysky</Link> 에 첨부해 두었습니다.
      </article>
    </div>
  )
}
