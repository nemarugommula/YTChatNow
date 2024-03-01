import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Chat from './components/Chat';
import Input from './components/Input';
import { useStore } from './hooks/store';
import '../tailwind.css';

// dotenv.config();

const App = () => {
  const { error } = useStore();
  return (
    <div class="w-64 h-96">
      <Header />
      <div class="flex flex-col h-full w-full">
      <Chat/>
      <Input />
      </div>
      {error && <Error/>}
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
