import { ReactElement } from 'react';
import styles from './hello.less';
function Hello(): ReactElement {
  return <div className={styles.test}>Hi</div>;
}

export default Hello;
