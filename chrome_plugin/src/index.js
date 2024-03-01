import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Chat from './components/Chat';
import Input from './components/Input';
import { useStore } from './hooks/store';
import '../tailwind.css';

// dotenv.config();

const App = () => {
const {error} = useStore();

  return (
  <div>
    <Header />
    <Chat />
    <Input />
  </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
