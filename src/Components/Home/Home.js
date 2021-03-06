/* eslint-disable no-unused-vars */
import React from "react";
import clsx from "clsx";
//import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import NumberOfCases from "../NumberOfCases"
import NumberOfDeath from "../NumberOfDeath";
import NumberOfRecovered from "../NumberOfRecovered";
import { useStyles } from "./HomeStyle";
import { Copyright } from "../Copyright/Copyright";
import Graphic from "../Dashboard/Grafico/Chart"
import Table1 from "../Dashboard/Tabela/Table"
import Logo from "../../Img/index"
import Plus from "../Drawer/index"

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const newDate = new Date();
  const date = newDate.getDate();
  const month = (newDate.getMonth() + 1);
  const year = newDate.getFullYear();
  return (
    <div className={classes.root}>
     {/*  <CssBaseline /> */}
      <AppBar
        style={{ background: '#8B0000', border:'1px solid #ccc'}}
        position="absolute"
      >
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
      >
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
        <div className={classes.appBarSpacer} />
        <h1 style={{ fontSize: '35px' }}>
          <b>COVID-19</b>
        </h1>
        <p style={{ fontSize: '18px' }}>
          Números relacionados à quantidade de casos identificados até o dia: <b> {date}/{month}/{year}</b>.</p><br/>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Informações gerais</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={10} lg={2}>
              <Paper>
                <NumberOfCases />
              </Paper>
            </Grid>
            <Grid item xs={12} md={10} lg={2}>
              <Paper>
                <NumberOfDeath />
              </Paper>
            </Grid>
            <Grid item xs={12} md={10} lg={2}>
              <Paper>
                <NumberOfRecovered />
              </Paper>
            </Grid>
              <Grid item xs={12} md={10} lg={6}>
                <Paper><Plus /></Paper>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} md={4} lg={3}>
            </Grid> */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={10} lg={6}>
                <Table1 />
            </Grid>
            <Grid item xs={12} md={10} lg={6}>
            <h2>Informações específicas por Continente:</h2>
              <Paper><Graphic /></Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
