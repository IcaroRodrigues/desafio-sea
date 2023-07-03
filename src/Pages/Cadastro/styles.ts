import { styled } from 'styled-components'

export const Container = styled.div`
  /* width: 100vw; */
  min-height: 100vh;

  display: flex;

  position: relative;

  & .form {
    position: relative;

    padding: 34px 34px 0px 34px;

    max-height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: end;

    gap: 14px;

    .nextStep {
      font-size: 14px;
      color: #fff;
      font-weight: 700;

      border: 0px;

      width: 194px;
      height: 32px;
      flex-shrink: 0;

      background: #4FA1C1;
      border-radius: 10px;

      &:hover {
        cursor: pointer;
      }
    }

    & .employeeImage {
      position: absolute;
      left: 55px;
      bottom: 0;
    }

    @media screen and (max-height: 720px) {
      .employeeImage {
        display: none;
      }
    }
  }
`

export const FormContainer = styled.div`
  display: grid;
  
  width: 100%;

  gap: 33px;

  grid-template-areas: 
    'steps steps'
    'description form'
  ;

  grid-template-rows: 159px;
  grid-template-columns: 1fr 1fr;
`

export const FormDescription = styled.div`
  position: relative;
  
  max-height: 500px;

  padding: 26px 15px;

  border-radius: 20px;

  background-color: #FFF;

  grid-area: description;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  p {
    color: #707070;
    /* width: 447px; */
    font-size: 16px;
  }
`