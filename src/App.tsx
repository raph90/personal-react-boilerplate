import React, { FC } from 'react';
import styles from './app.less';
import DatePicker from 'antd/es/date-picker';
const App: FC = () => {
  return (
    <>
      <DatePicker />
      <h3 className={styles.header}> Welcome to React Boilerplate </h3>
    </>
  );
};
export default App;
