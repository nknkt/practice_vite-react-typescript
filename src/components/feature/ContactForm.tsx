import React from 'react';
import Button from '../common/Button';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => (
  <form className={styles.form}>
    <div>
      <label htmlFor="name">お名前</label>
      <input id="name" name="name" type="text" />
    </div>
    <div>
      <label htmlFor="email">メールアドレス</label>
      <input id="email" name="email" type="email" />
    </div>
    <div>
      <label htmlFor="message">お問い合わせ内容</label>
      <textarea id="message" name="message" rows={4} />
    </div>
    <Button type="submit" className={styles.buttonMargin}>送信</Button>
  </form>
);

export default ContactForm;