import React from "react"
import PropTypes from "prop-types"

import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"

import * as S from "./styled"

const Info = ({
  title,
  description,
  email,
  mobilePhone,
  comPhone,
  city,
  facebook,
  instagram,
}: {
  title: string
  description?: string
  email: string
  mobilePhone: string
  comPhone: string
  city: string
  facebook: string
  instagram: string
}) => (
  <S.InfoWrapped>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.IconTextWrapper>
      <PhoneOutlinedIcon />
      <S.Text>
        <S.Link href={`tel: ${comPhone}`} target="_blank">
          {comPhone}
        </S.Link>
      </S.Text>
    </S.IconTextWrapper>
    <S.IconTextWrapper>
      <WhatsAppIcon />
      <S.Text>
        <S.Link href={`https://wa.me/5511952025501`} target="_blank">
          {mobilePhone}
        </S.Link>
      </S.Text>
    </S.IconTextWrapper>
    <S.IconTextWrapper>
      <MailOutlineIcon />
      <S.Text>
        <S.Link href={`mailto: ${email}`} target="_blank">
          {email}
        </S.Link>
      </S.Text>
    </S.IconTextWrapper>
    <S.IconTextWrapper>
      <LocationOnOutlinedIcon />
      <S.Text>{city}</S.Text>
    </S.IconTextWrapper>
    <S.IconTextWrapper>
      <FacebookIcon />
      <S.Text>
        <S.Link href={`${facebook}`} target="_blank">
          facebook.com/lorenzzatomotor/
        </S.Link>
      </S.Text>
    </S.IconTextWrapper>
    <S.IconTextWrapper>
      <InstagramIcon />
      <S.Text>
        <S.Link href={`${instagram}`} target="_blank">
          instagram.com/lorenzzatomotor/
        </S.Link>
      </S.Text>
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
  facebook: PropTypes.string.isRequired,
}

export default Info
