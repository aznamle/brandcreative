import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import React from 'react'
import NextApp from 'next/app'
import { Client } from '../prismic-configuration'

import Layout from '../components/Layout'


export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client();
    const menu = (await client.getSingle("menu")) || {};
    return {
      props: {
        menu: menu
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <Layout menu={props.menu}>
        <Component {...pageProps}/>
      </Layout>
    )
  }
}