import dotenv from 'dotenv'
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Chat from './components/Chat';
import Input from './components/Input';

dotenv.config();

const App = () => (
  <div>
    <Header />
    <Chat />
    <Input />
  </div>
);

ReactDom.render(<App />, document.getElementById('root'));
