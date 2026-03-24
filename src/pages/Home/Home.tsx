import React from 'react';

import Logo from '../../assets/Logo.svg'
import Download from '../../assets/Download.png'
import Banner from '../../assets/main-banner/banner1.png'
import ExampleMail from '../../assets/example/example_mail.png'
import { EXAMPLE_LIST } from '../../assets/example';


import './Home.css'

function Home() {
  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('서비스 준비 중입니다.');
  };

  return (
    <>
      <header className="home-header-container">
        <img src={Logo} alt="TokTory Logo" className="home-header-logo-img" />
        <span className="home-header-title">TokTory</span>
        <a href="/" onClick={handleDownloadClick}>
          <img src={Download} className="home-header-download" alt='톡토리 앱 다운로드'/>
        </a>
      </header>
      
      <article className="home-content">
        {/* 배너 영역 */}
        <div className='home-banner-container'>
          <img src={Banner} alt="넛지형 가계부 톡토리 메인 배너" className='home-banner-img'/>
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
              
            </div>
          ))}
              <div className="home-introduce-item">
              <br />
                <img src={ExampleMail} alt="비즈니스 문의 예시 이미지" className="home-introduce-email" />
              </div>
              <footer className='home-footer'>

              </footer>
        </div>
      </article>
    </>
  );
}

export default Home;
