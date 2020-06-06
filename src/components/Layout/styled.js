import styled from "styled-components"
import media from "styled-media-query"

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`
export const LayoutWrapped = styled.section`
  background: #fff;
  display: flex;
  border-radius: 5px;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`
