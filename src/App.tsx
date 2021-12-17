import { FC } from 'react';
import { Slider } from 'antd';
import Hello from './components/Hello';

const App: FC = () => {
  return (
    <>
      <Slider className="bg-black" defaultValue={30} />
      <h3 className="text-slate-50"> Welcome to React Boilerplate</h3>
      <Hello />
    </>
  );
};
export default App;
