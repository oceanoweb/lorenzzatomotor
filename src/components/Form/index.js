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
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <PersonOutlineOutlinedIcon />
        </Grid>
        <Grid item>
          <TextField id="full-name" label="Nome completo" />
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <MailOutlineIcon />
        </Grid>
        <Grid item>
          <TextField id="email" label="E-mail" />
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <CreateOutlinedIcon />
        </Grid>
        <Grid item>
          <TextField id="message" label="Mensagem" />
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems="flex-end" justify="center">
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardOutlinedIcon />}
        >
          Enviar
        </Button>
      </Grid>
    </S.FormWrapped>
  )
}

export default Form
