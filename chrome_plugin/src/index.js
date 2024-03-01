import React,{useEffect} from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Chat from './components/Chat';
import Footer from './components/Footer';
import { useStore } from './hooks/store';
import Error from './components/Error';
import '../tailwind.css';
import {useListerners} from './extensionScript';

// dotenv.config();

const App = () => {
  useListerners();
  const { error } = useStore();
  if (error) {
    return <Error />;
  }
  return (
    <div className="w-96 h-96 bg-stone-50">
      <Header />
      <div className="flex flex-col h-full w-full">
      <Chat/>
      <Footer />
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
