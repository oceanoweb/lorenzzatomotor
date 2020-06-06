import React from "react"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import MailOutlineIcon from "@material-ui/icons/MailOutline"
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined"
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined"
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"

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
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MailOutlineIcon />
          </Grid>
          <Grid item>
            <TextField type="email" id="email" name="email" label="E-mail" />
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
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end" justify="center">
          <Button
            type="submit"
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardOutlinedIcon />}
          >
            Enviar
          </Button>
        </Grid>
      </S.Form>
    </S.FormWrapped>
  )
}

export default Form
