import styled from "styled-components"

export const InfoWrapped = styled.section`
  padding: 4rem;
`

export const Title = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`

export const Description = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
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
