import React from 'react';
import Head from 'next/head';
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Next Zomazona</title>
      </Head><AppBar position="static">
          <Toolbar>
            <Typography>zomazona</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          {children}
        </Container>
      </>
  )
}

export default Layout
