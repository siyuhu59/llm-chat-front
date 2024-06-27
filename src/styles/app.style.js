import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
`;

export const SidebarToggleButton = styled.button`
  position: fixed;
  top: 50%;
  right: 26%;

  /* width: 2rem; */
  height: 2rem;

  transform: translateY(-50%);
  border: none;
  /* background-color: #f9f9f9; */
  background-color: #fff;

  transform: translateY(-50%);
  /* padding: 40px 20px; */
  cursor: pointer;
  transition: all 0.5s; 
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 6px 0px 0px 6px;
  

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    transform: rotate(270deg);
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  &.hide{
    right: 1%;
    transform: translateY(-50%) rotate(180deg);
  }
`;