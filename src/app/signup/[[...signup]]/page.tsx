'use client'

import React, { useEffect } from 'react';
import { SignUp } from '@clerk/nextjs';
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import Link from 'next/link';

export default function SignUpPage() {

	return (
		<>
			<AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
				<Toolbar>
					<Typography variant="h6" sx={{ flexGrow: 1 }}>
						SmartSpecs
					</Typography>
					<Button color="inherit">
						<Link href="/signin" passHref>
							<Typography component="span" sx={{ color: 'inherit', textDecoration: 'none' }}>
								Sign In
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
					Sign Up
				</Typography>
				<SignUp />
			</Box>
		</>
	);
}