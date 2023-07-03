import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 35px;
  
  margin-bottom: 64px;

  /* min-height: 484px; */

  background-color: #FFF;

  grid-area: form;

  border-radius: 20px;

  * {
    font-family: 'Roboto', sans-serif;
  }

  header {
    padding: 12px 0px 12px 20px;
    
    background-color: #4FA1C1;


    border-radius: 20px 20px 0px 0px;

    h1 {
      color: #fff;

      font-size: 28px;
      font-weight: 400;
      font-style: normal;
      
      line-height: normal;

      font-family: 'Ubuntu', sans-serif;

    }

    & > img:hover {
      cursor: pointer;
    }

    display: flex;
    align-items:  center;
    gap: 14px;
  }

  button {
    border-radius: 10px;
    border: 1px solid #4FA1C1;
    font-family: 'Roboto', sans-serif;
    background-color: #FFF;

    color: #3A3A3A;

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    font-family: 'Roboto', monospace;
    color: #3A3A3A;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .ant-radio-inner {
    
    border: 1px solid #4FA1C1;
  }

  .ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    border-color: #4FA1C1;
    background-color: #4FA1C1;
  }


  .ant-radio-checked::after {
    border: 1px solid red;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 27px;

  padding: 0px 18px 25px 18px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    
    padding: 12px;

    border-radius: 10px;
    border: 1px solid #4FA1C1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    min-height: 43px;
  }

  .formStep {
    width: 100%;
    
    padding: 12px;

    border-radius: 10px;
    border: 1px solid #4FA1C1;
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */

    min-height: 43px;

    margin-bottom: 20px;

    & button {
      display: block;
      height: 36px;
    }
  }

  .employeeData {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 25px;
  }

  .ant-upload-select {
    display: block;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 8px;
  }

  .inputContainer:not(:first-child) {
    margin-top: 14px;
  }

  .employeeActivity {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    width: 100%;

    button {
      width: 100%;
      height: 36px;

      margin-top: 12px;
    }
  }

  .epiCheckbox {
    display: flex;
    align-items: center;
    gap: 7px;

    margin: 13px 0px;

    & > label:hover {
      cursor: pointer;
    }
  }

  .caContainer {
    display: flex;
    align-items: end;
    gap: 8px;
    margin-top: 12px;
    padding-right: 32px;

    span {
      white-space: nowrap;
    }
  }

  .caInputContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    label {
      white-space: nowrap;
    }
  }

  .saveButton {
    height: 36px;
    color: #4F4F4F;
  }

  .ant-switch {
    border: 0px;
    background: #fff;
    border: 1px solid #4FA1C1;
    width: 52px;
    height: 25px;
    
    span {
      font-size: 12px;
      font-weight: 400;
      color: #3A3A3A !important;
      font-family: 'Ubuntu', sans-serif;
    }
  }

  .ant-switch-handle::before {
    background-color: #4FA1C1;
  }

  .ant-upload-list-item-container {
    /* border: 1px solid #4FA1C1; */
    /* border-radius: 10px; */
    /* margin-top: 10px; */
  }
`