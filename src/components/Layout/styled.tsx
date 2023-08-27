import styled from "styled-components"

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

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
