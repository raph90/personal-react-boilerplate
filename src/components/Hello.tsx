import { ReactElement } from 'react';
import styles from './hello.module.less';
function Hello(): ReactElement {
  return (
    <div id="hi" className={styles.test}>
      Hi
    </div>
  );
}

export default Hello;
