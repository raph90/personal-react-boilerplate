import { FC } from 'react';
import { Button } from 'antd';
import Hello from './components/Hello';

const App: FC = () => {
  return (
    <>
      <Button type="primary">hello there</Button>
      <h3> Welcome to React Boilerplate</h3>
      <Hello />
    </>
  );
};
export default App;
