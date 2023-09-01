import React from "react"

import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

import MailOutlineIcon from "@mui/icons-material/MailOutline"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"

import * as S from "./styled"

const Form = () => {
  return (
    <S.FormWrapped>
      <S.Form action={process.env.GATSBY_FORM_URL} method="POST">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PersonOutlineOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              id="full-name"
              name="full-name"
              label="Nome completo"
              color="success"
              variant="standard"
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MailOutlineIcon />
          </Grid>
          <Grid item>
            <TextField
              type="email"
              id="email"
              name="email"
              label="E-mail"
              color="success"
              variant="standard"
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <CreateOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              id="message"
              name="message"
              label="Mensagem"
              color="success"
              variant="standard"
            />
          </Grid>
        </Grid>
        <input
          type="hidden"
          id="captchaResponse"
          name="g-recaptcha-response"
        ></input>

        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Button
            type="submit"
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardOutlinedIcon />}
            color="inherit"
          >
            Enviar
          </Button>
        </Grid>
      </S.Form>
    </S.FormWrapped>
  )
}

export default Form
