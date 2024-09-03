'use client'

import React from 'react';
import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

const SignInPage: React.FC = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SmartSpecs
          </Typography>
          <Button color="inherit">
            <Link href="/signup" passHref>
              <Typography component="span" sx={{ color: 'inherit', textDecoration: 'none' }}>
                Sign Up
              </Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: 'center', my: 4 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>
        <SignIn />
      </Box>
    </>
  );
}

export default SignInPage;
