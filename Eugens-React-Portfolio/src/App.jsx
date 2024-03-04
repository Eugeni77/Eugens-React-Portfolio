import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.App} style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />
    </div>
  );
}

export default App;
