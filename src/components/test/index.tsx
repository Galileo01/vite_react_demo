import React from 'react';
import styles from './index.module.less';

const Test = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <span className={styles.text}>Test</span>
    </div>
  );
};

export default Test;
