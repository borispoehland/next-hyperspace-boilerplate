import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div className="flex-col">
    <h1>Home page</h1>
    <div className="flex-row">
      <Link href="/loading">
        <button type="button">Trigger loading animation (hyperspace)</button>
      </Link>
      <Link href="/transition">
        <button type="button">Trigger normal transition (fade in/out)</button>
      </Link>
    </div>
  </div>
);

export default Home;
