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
    margin-bottom: 5px;
    margin-right: 5px;
    padding: .5rem 1rem;

    border : .12rem solid #ddd;
    border-radius: .25rem;

    &:hover {
        background-color: #f0f0f0;
    }    
`;

export const FileName = styled.span`
    font-size: .75rem;
    font-weight: bold;
`;