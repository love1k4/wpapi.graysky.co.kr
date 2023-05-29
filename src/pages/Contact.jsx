import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <article>
      <card>
        <div style={{padding: '10%'}}>
          문의 사항이 있으신 분은 <Link to='https://technote.graysky.co.kr'>Technote@Graysky</Link> 로 문의바랍니다.<p />
          감사합니다.
        </div>
      </card>
    </article>
  )
}
