import styled from 'styled-components';

export const UploadContainer = styled.div`
    padding: 0 2rem;
    width: 100%;
`;

export const InputContainer = styled.div`
  border: 2px dashed #ddd;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff;
  /* max-width: 80%; */
`;

export const UploadInput = styled.input`
  display: none;
`;

export const FileList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
`;

export const FileItem = styled.div`
    margin-bottom: .75rem;
    margin-right: 5px;
    padding: .5rem 1rem;

    width: 100%;

    cursor: pointer;

    border : .12rem solid #ddd;
    border-radius: .25rem;

    &:hover {
        background-color: #e0e0e0;
    }    
    &:active {
        background-color: #ddd;
    }
    &.selected{
        background-color: #e0e0e0;

        &:hover {
            background-color: #fafafa;
        }
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & div {
        width: 1rem;
        height: 1rem;

        &:hover{
            transform: scale(1.1);
        }

        &:active {
            transform: scale(1.1);
        }
    }

    & div img {
        width: 1rem;
        height: 1rem;
    }
`;

export const FileName = styled.span`
    font-size: .75rem;
    font-weight: bold;
`;