import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/* 프로젝트에 리액트 라우터를 적용할 때는
   react-router-dom에 내장되어 있는 BrowserRouter 컴포넌트로 App을 감싸면 됨

   BrowserRouter 컴포넌트는 웹 앱에 HTML5의 History API를 사용해 새로고침을 눌러
   페이지를 새로 불러오지 않고도 주소를 변경하고 현재 주소의 경로에 관련된 데이터를
   리액트 컴포넌트에서 사용할 수 있도록 해줌 */