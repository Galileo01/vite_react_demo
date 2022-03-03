import React from "react";
import styles from "./index.module.less";

type TestProps = {
  tag: string;
};

const Test: React.FC<TestProps> = (props) => {
  const { tag } = props;
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.text}>Test</div>
      <div>tag:{tag}</div>
      <div>count {count}</div>
      <button
        type="button"
        onClick={() => {
          setCount((preCount) => preCount + 1);
        }}
      >
        click to add
      </button>
    </div>
  );
};

export default Test;
