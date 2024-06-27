import styled from "styled-components";

export const SettingContainer = styled.div`
  position: fixed;
  right: 0%;
  top: 0;
  display: flex;
  flex-direction: column;
  max-width: 25%;
  height: 100vh;

  padding: 2rem;

  background-color: #f9f9f9;

  transition: right 0.5s;

  &.hide {
    right: -25%;
  }
`;


export const SettingsButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  

  & > button{
    border: 1px solid #e0e0e0;
    border-radius: 5px ;
    padding: .5rem .75rem;
    cursor: pointer;

    &:hover {
      background-color: #eaeaea;
    }
  }
`;

export const SettingsDetailContainer = styled.div`
  padding: 1rem 2rem;
  border: 2px dashed #e0e0e0;
  border-radius: 8px;

  background-color: #fff;

  margin-bottom: 2.5rem;

  & h3 {
    margin-bottom: 1rem;
  }
`;

export const QuestionSelectList = styled.ol`
  padding-left: 1rem;
  list-style: none; 
  margin-bottom: .75rem;
  & > li {
    padding: .5rem .5rem;
    margin: .5rem 0rem;
    cursor: pointer;

    &:hover{
      background-color: #e0e0e0;
      border-radius: 6px;
    }

    &.selected{
      background-color: #e0e0e0;
      border-radius: 6px;

      &:hover{
        background-color: #f4f4f4;
      }
    }
  }
`;

export const LongTextWrapper = styled.div`
  width: 100%;
  max-height: 75%;
  margin-bottom: .5rem;
  overflow: scroll;
  /* text-overflow: ellipsis;
  white-space: nowrap; */

  & p {
    margin-bottom: .5rem;
  }
`;