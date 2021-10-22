import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Layout({ Children }) {
  return (
    <div>
      <Head>
        <title>Sharon</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{Children}</Container>
    </div>
  );
}
