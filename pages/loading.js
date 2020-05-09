import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

let timeOutId;

const Loading = ({ pageTransitionReadyToEnter }) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadExpensiveContent = () => {
    // simulate expensive task
    timeOutId = setTimeout(() => {
      pageTransitionReadyToEnter(); // you need this!
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeOutId);
  };

  useEffect(loadExpensiveContent, []);

  return isLoading ? null : ( // you need this!
    <div className="flex-col">
      <h1>Page is now &quot;loaded&quot;</h1>
      <Link href="/">
        <button type="button">Back to home</button>
      </Link>
    </div>
  );
};

Loading.pageTransitionDelayEnter = true; // you need this!

Loading.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
};

Loading.defaultProps = {
  pageTransitionReadyToEnter: () => {},
};

export default Loading;
