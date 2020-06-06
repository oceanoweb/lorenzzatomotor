import styled from "styled-components"
import media from "styled-media-query"

export const InfoWrapped = styled.section`
  max-width: 350px;
  min-height: 350px;
  padding: 4rem;
  border-radius: 5px 0 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.lessThan("medium")`
    padding: 1rem 2rem;
    border-radius: 5px 5px 0 0;
  `}
`

export const Title = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem 0 1.5rem;
`

export const Description = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin-left: 1rem;
`

export const Link = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #283f37;
  }
`
