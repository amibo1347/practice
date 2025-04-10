import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './components/Library';
import Clock from './components/Clock';
import Comment from './components/Comment'
import CommentList from './components/CommentList';
import Room from './components/Room';
import RoomList from './components/RoomList';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Counter/>
    </React.StrictMode>
  )
  /*root.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>
  )
*/
  /*root.render(
  <React.StrictMode>
    <Comment name="홍길동" comment="안녕하세요. 댓글 남깁니다~"/>
  </React.StrictMode>
);*/
}
);

/*  root.render(
    <React.StrictMode>
      <Clock timeZone="Asia/Seoul" />
      <Clock timeZone="Europe/Paris" />
      <Clock timeZone="America/New_York" />
      <Library />
    </React.StrictMode>
  );
}, 1000);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
