// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from 'react';
import { Tooltip } from './components/Tooltip';
import { Channels } from './components/Channels';
import { Chat } from './components/Chat';

export function App() {
  return (
    <div className="flex fixed left-0 top-0 w-[100%]">
      <Tooltip />
      <Channels />
      <Chat />
    </div>
  );
}

export default App;
