import styled from "styled-components"
import media from "styled-media-query"

export const FormWrapped = styled.section`
  min-height: 360px;
  background: #19af7b;
  border-radius: 0 5px 5px 0;
  padding: 4rem;

  ${media.greaterThan("medium")`
    min-width: 380px;
    display: flex;
    justify-content: center;
  `}

  ${media.lessThan("medium")`
    padding: 1rem 2rem;
    border-radius: 0 0 5px 5px;
  `}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: space-between;
`
