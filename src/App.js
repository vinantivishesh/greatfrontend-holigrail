import React, { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <header>Header</header>
      <div className={'middle'}>
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
}
