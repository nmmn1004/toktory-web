import React from 'react';

import Logo from '../../assets/Logo.svg'
import Download from '../../assets/Download.png'
import Banner from '../../assets/main-banner/banner1.png'
import { EXAMPLE_LIST } from '../../assets/example';

import './Home.css'

function Home() {
  return (
    <>
      <header className="home-header-container">
        <img src={Logo} alt="TokTory Logo" className="home-header-logo-img" />
        <span className="home-header-title">TokTory</span>
        <a href="../../../public/app/toktory.apk" download="toktory.apk">
          <img src={Download} className="home-header-download" alt=''/>
        </a>
      </header>
      
      <article className="home-content">
        {/* 배너 영역 */}
        <div className='home-banner-container'>
          <img src={Banner} alt="introduce" className='home-banner-img'/>
        </div>

        {/* 서비스 소개 리스트 영역 */}
        <div className="home-introduce-wrapper">
          {EXAMPLE_LIST.map((item, index) => (
            <div key={item.id} className="home-introduce-item">
              <div className="home-introduce-text-group">
                <span className='home-introduce-title'>
                  {index === 0 ? (
                    <>편하고 알아보기 쉬운<br/>가계부 경험</>
                  ) : (
                    <>AI를 통한<br/>소비 흐름과 미래 예측 제공</>
                  )}
                </span>
                <br/>
                <span className='home-introduce-description'>
                  {index === 0 ? (
                    <>가계부처럼 지출을 기록하고 조회할 수 있어요.<br/>달력과 소비 기록을 한눈에 알아보기 쉬워요.</>
                  ) : (
                    <>친구나 가족에게 내 소비습관과 지출 내역을 알리지 않아도<br/>AI에게 편하게 조언받을 수 있어요. <br/>오래 쓸 수록 정확한 분석을 제공해요.</>
                  )}
                </span>
                <br/><img src={item.src} alt={item.alt} className="home-introduce-img" />
              </div>
              <footer className='home-footer'>

              </footer>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default Home;
