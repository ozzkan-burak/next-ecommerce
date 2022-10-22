import React from 'react';
import Head from 'next/head';
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core';
import useStyles from '../../utils/styles';

const Layout = ({children}) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Next Zomazona</title>
      </Head>
      <AppBar position="static">
          <Toolbar>
            <Typography>zomazona</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          {children}
        </Container>
        <footer>
          <Typography>
            All rights reserved. Next Zomazona
          </Typography>
        </footer>
      </>
  )
}

export default Layout
