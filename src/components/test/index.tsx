import React from 'react';
import styles from './index.module.less';

function Test() {
  console.log(styles);
  const [age, setAge] = React.useState(18);
  const coust = React.useMemo(() => age * 10, [age]);
  const height = React.useMemo(() => age + 100, []);

  return (
    <div className={styles.container}>
      <span className={styles.text}>Test</span>
      <span>age:{coust}</span>
      <p>Setup ESLINT & Prettier</p>
      <button onClick={() => setAge((pre) => pre + 1)} type="button">
        add age
      </button>
    </div>
  );
}

export default Test;
