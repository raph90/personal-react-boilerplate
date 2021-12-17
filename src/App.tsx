import { FC } from 'react';
import styles from './app.less';
import { Button } from 'antd';
import Hello from './components/Hello';

const App: FC = () => {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <h3 className={styles.header}> Welcome to React Boilerplate </h3>
      <Hello />
    </>
  );
};
export default App;
