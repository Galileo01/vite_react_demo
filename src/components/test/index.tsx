import React from 'react';
import styles from './index.module.less';

const Test = () => {
  console.log(styles);
  const [age, setAge] = React.useState(18);
  const coust = React.useMemo(() => age * 10, []);

  return (
    <div className={styles.container}>
      <span className={styles.text}>Test</span>
      <span>age:{coust}</span>
      <p>Setup ESLINT & Prettier</p>
    </div>
  );
};

export default Test;
