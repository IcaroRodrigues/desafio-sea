import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  /* max-height: 100vh; */

  background-color: #4FA1C1;

  border-radius: 0px 20px 20px 0px;

  padding-top: 50px;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 134px;

  .divisor {
    width: 100%;
    height: 41px;

    background-color: #fff;
  }

  nav {    
    ul {
      display: flex;
      flex-direction: column;

      gap: 24px;
    }

    li {
      position: relative;

      &:hover {
        cursor: pointer;
      }
      
      .iconContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: #fff;
        /* padding: 7px; */
        width: 32px;
        height: 32px;
        border-radius: 10px;
        
        margin-left: 12px;
        margin-right: 12px;
      }


      .listIconContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        
      }

      .activeBar {
        border-left: 5px solid #fff;
        height: 100%;

        position: absolute;
        left: 0;
      }
    }

    .notification {
      position: relative;

      .file {
        position: absolute;
        right: -9px;
        bottom: -10px;
      }
    }
  }

  .no-svg {
    width: 32px;
    height: 32px;
  }
`