import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { PageTransition } from 'next-page-transitions';
import HyperSpace from '../src/components/Hyperspace';

import '../src/style.sass';

class CustomApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <title>next-hyperspace-boilerplate</title>
        </Head>
        <PageTransition
          timeout={300}
          classNames="page-transition"
          loadingComponent={<HyperSpace />}
          loadingTimeout={0}
        >
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </>
    );
  }
}
export default CustomApp;
