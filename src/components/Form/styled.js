import styled from "styled-components"
import media from "styled-media-query"

export const FormWrapped = styled.section`
  max-width: 350px;
  min-height: 350px;
  background: #19af7b;
  border-radius: 0 5px 5px 0;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.lessThan("medium")`
    padding: 1rem 2rem;
    border-radius: 0 0 5px 5px;
  `}
`
