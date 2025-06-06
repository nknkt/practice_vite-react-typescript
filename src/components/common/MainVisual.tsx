import React from 'react';
import styles from './MainVisual.module.css';

type Props = {
  page: string;
  lead: string;
  children?: React.ReactNode;
};

const MainVisual: React.FC<Props> = ({ page, lead, children }) => (
  <div className={styles['mainVisual']}>
    <div className={styles['mainVisual__inner']}>
      <h2 className={styles['mainVisual__page']}>{page}</h2>
      <h3 className={styles['mainVisual__lead']}>{lead}</h3>
      {children}
    </div>
  </div>
);

export default MainVisual;