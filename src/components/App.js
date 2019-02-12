import React, { useState } from 'react';

import '../styles/normalize.css';
import styles from './App.module.css';

function App() {
  const [test, setTest] = useState('starter text');

  return (
    <div className={styles.test}>
      <p onClick={() => setTest('hi')}>{test}</p>
    </div>
  );
}

export default App;
