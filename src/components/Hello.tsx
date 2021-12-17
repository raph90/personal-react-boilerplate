import { ReactElement } from 'react';
import styles from './hello.module.less';
function Hello(): ReactElement {
  return <div className={styles.test}>Hi</div>;
}

export default Hello;
