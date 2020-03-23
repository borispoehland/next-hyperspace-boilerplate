import React from 'react';
import Link from 'next/link';

const Transition = () => (
  <div className="flex-col">
    <h1>Did you notice the fading transition?</h1>
    <Link href="/">
      <button type="button">Back to home</button>
    </Link>
  </div>
);

export default Transition;
