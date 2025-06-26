import React from 'react';
import Button from '../components/common/Button';
import MainVisual from '../components/common/MainVisual';
import styles from './Home.module.css';
import bnr from '../assets/images/home/bnr.png';

const Home: React.FC = () => (
  <main className="l-main">
    <MainVisual page="ホームページ" lead="ここがトップページです。" />
    <div className="u-inner">
      <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ</p>
      <Button className={styles.buttonMargin}>テストボタン</Button>
      <div className={styles.bnr}>
        <a href='#'>
          <img src={bnr} alt="" />
        </a>
      </div>
    </div>
  </main>
);

export default Home;