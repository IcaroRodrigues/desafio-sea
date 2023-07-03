import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 35px;

  /* min-height: 484px; */

  /* height: 924px; */

  max-height: 500px;

  background-color: #FFF;

  grid-area: form;

  border-radius: 20px;

  padding-bottom: 30px;

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
    }
  }

  button {
    border-radius: 10px;
    border: 1px solid #4FA1C1;

    background-color: #FFF;

    color: #4FA1C1;

    &:hover {
      cursor: pointer;
    }
  }
`

export const EmployeeListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  padding: 0px 19px;


  .adicionarFuncionarioButton {
    width: 100%;
    height: 60px;

    font-size: 16px;
  }


`

export const EmployeeListFilterContainer = styled.div`

  display: flex;
  flex-direction: column;
  white-space: nowrap;

  gap: 20px;

  .employeeListFilterButtons {
    display: flex;
    justify-content: space-between;
    align-items: end;

    p {
      color: #4F4F4F;
      font-size: 14px;
      white-space: nowrap;
    }
  }

  .buttons {
    display: flex;
    gap: 30px;

    button {
      padding: 8px 53px;
    }
  }

  .filterButton {
    background-color: #4FA1C1;
    color: #fff
  }

  .empoyeeList {

    height: 200px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: column;

      gap: 14px;
    }

    li {
      /* padding: 6px 0px 22px 15px; */

      border-radius: 10px;

      background-color: #EDF1F5;

      display: flex;
      justify-content: space-between;
    }

    .employeeListcontainer {
      padding: 6px 0px 22px 15px;
    }

    h2 {
      color: #707070;
      font-weight: 400;
      font-size: 24px;

      margin-bottom: 8px;
    }

    span {
      background-color: #4FA1C1;
      border-radius: 36px;

      padding: 4px 17px;

      color: #fff;
      font-size: 14px;

      margin-right: 12px;
    }

    .moreInfo {
      border-radius: 0px 10px 10px 0px;
      background: #4FA1C1;
      width: 49px;
    }
  }

  .stepDone {
    display: flex;
    align-items: center;
    justify-content: end;
    
    gap: 12px;

    .ant-switch {
      border: 0px;
      background: #DBDBDB;
      width: 52px;
      /* height: 25px; */
      
      span {
        font-size: 12px;
        color: #3A3A3A;
        font-family: 'Ubuntu', sans-serif;
      }
    }

    .ant-switch-handle::before {
      background-color: #4FA1C1;
    }
  }
`