import styled from "styled-components"

export const FormWrapped = styled.section`
  min-height: 360px;
  background: #19af7b;
  border-radius: 0 5px 5px 0;
  padding: 4rem;

  @media only screen and (min-width: 768px) {
    min-width: 380px;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
    border-radius: 0 0 5px 5px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: space-between;
`
