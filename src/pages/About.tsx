import React from 'react';
import Button from '../components/common/Button';
import MainVisual from '../components/common/MainVisual';
import styles from './About.module.css';

const About: React.FC = () => (
  <main className="l-main">
    <MainVisual page="Aboutページ" lead="下層ページ" />
    <div className="u-inner">
      <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ</p>
      <Button className={styles.buttonMargin}>テストボタン</Button>
    </div>
  </main>
);

export default About;