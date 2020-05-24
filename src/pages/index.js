import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import "./layout.css"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined"
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.description}</h2>
      <PhoneOutlinedIcon />
      <p>(11) 4109-9899</p>
      <WhatsAppIcon />
      <p>(11) 95202-5501</p>
      <MailOutlineIcon />
      <p>lorenzzatomotor@hotmail.com</p>
      <LocationOnOutlinedIcon />
      <p>S.B.Campo - SP</p>

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PersonOutlineOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField id="full-name" label="Nome completo" />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MailOutlineIcon />
          </Grid>
          <Grid item>
            <TextField id="email" label="E-mail" />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <CreateOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField
              id="message"
              label="Mensagem"
            />
          </Grid>
        </Grid>
      </div>

      <Button
        variant="outlined"
        size="large"
        endIcon={<ArrowForwardOutlinedIcon />}
      >
        Enviar
      </Button>

    </Layout>
  )
}

export default IndexPage
