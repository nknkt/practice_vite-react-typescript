import React from 'react';
import MainVisual from '../components/common/MainVisual';
import ContactForm from '../components/feature/ContactForm';

const Contact: React.FC = () => (
  <main className="l-main">
    <MainVisual page="Contactページ" lead="フォームページ" />
    <div className="u-inner">
      <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      <ContactForm />
    </div>
  </main>
);

export default Contact;