import styled from 'styled-components'

export const Container = styled.div`
  grid-area: steps;

  display: flex;
  align-items: center;

  overflow-x: hidden;
  /* gap: 70px; */

  padding: 0px 30px;

  /* width: 1242px; */
  /* height: 159px; */

  /* max-width: 1242px; */
  max-height: 159px;

  background-color: #FFF;
  border-radius: 20px;


  .steps {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 60px;
    height: 120px;


    p {
      color: #4FA1C1;
      font-weight: 500;
      font-size: 14px;
      margin-top: 12px;
    }

    

    .stepLabel {
      display: flex;
      flex-direction: column;

      align-items: center;

      position: relative;
    }

    .stepDone {
      position: absolute;
      color: #4FA1C1;
      font-weight: 500;
      font-size: 14px;

      bottom: -16px;
    }
  }

  
  .line {
    border: 4px dashed #4FA1C1;
    border-width: 3px;
    width: 100%;

    margin-right: 10px;

    margin-bottom: 30px;
  }


  .icon {
    background-color: #4FA1C1;
    width: 70px;
    height: 70px;

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
  }

  .icon.iconStepDone {
    border: 2px solid #0E34FF;
  }
` 