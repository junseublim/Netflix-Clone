import React from 'react';
import Nav from '../components/Home/Nav';
import "./home.css";


const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home-content">
                <span className="home-explain main">영화, TV 프로그램을 무제한으로.</span>
                <span className="home-explain sub">다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</span>
                <span className="home-explain sub">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</span>
                <div className="email">
                    <input type="text" className="email-text" />
                    <button className="email-button">시작하기</button>
                </div>

            </div>
        </div>
    );
}

export default Home;