import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutMain>
      <GlobalStyles />
      <S.LayoutWrapped>{children}</S.LayoutWrapped>
    </S.LayoutMain>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
