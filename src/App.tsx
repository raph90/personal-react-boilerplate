import { FC } from 'react';
import { Button } from 'antd';
import Hello from './components/Hello';

const App: FC = () => {
  return (
    <>
      <Button className='color-white'>hello there</Button>
      <h3 className='text-slate-50'> Welcome to React Boilerplate</h3>
      <Hello />
    </>
  );
};
export default App;
