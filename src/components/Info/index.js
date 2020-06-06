import React from "react"
import PropTypes from "prop-types"

import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"

import * as S from "./styled"

const Info = ({ title, description, email, mobilePhone, comPhone, city }) => (
  <S.InfoWrapped>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.IconTextWrapper>
      <PhoneOutlinedIcon />
      <S.Text>
        <S.Link href={`tel: ${comPhone}`}>{comPhone}</S.Link>
      </S.Text>
    </S.IconTextWrapper>
    <S.IconTextWrapper>
      <WhatsAppIcon />
      <S.Text>
        <S.Link href={`https://wa.me/5511952025501`}>{mobilePhone}</S.Link>
      </S.Text>
    </S.IconTextWrapper>
    <S.IconTextWrapper>
      <MailOutlineIcon />
      <S.Text>
        <S.Link href={`mailto: ${email}`}>{email}</S.Link>
      </S.Text>
    </S.IconTextWrapper>
    <S.IconTextWrapper>
      <LocationOnOutlinedIcon />
      <S.Text>{city}</S.Text>
    </S.IconTextWrapper>
  </S.InfoWrapped>
)

Info.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comPhone: PropTypes.string.isRequired,
  mobilePhone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
}

export default Info
