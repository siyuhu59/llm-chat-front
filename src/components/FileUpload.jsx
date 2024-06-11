import React, { useState } from 'react';

import * as S from "../styles/fileUpload.style"

const FileUpload = ({ maxFiles, maxSize }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    let validFiles = [];

    selectedFiles.forEach((file) => {
      if (file.size <= maxSize) {
        validFiles.push(file);
      } else {
        alert(`${file.name} is too large. Max size is ${maxSize / 1024 / 1024} MB`);
      }
    });

    if (files.length + validFiles.length > maxFiles) {
      alert(`Cannot upload more than ${maxFiles} files.`);
      validFiles = validFiles.slice(0, maxFiles - files.length);
    }

    setFiles([...files, ...validFiles]);
  };

  return (
    <S.UploadContainer>
      <S.InputContainer>
        <label htmlFor="fileInput">Click here to upload files</label>
        <S.UploadInput
          id="fileInput"
          type="file"
          multiple
          onChange={handleFileChange}
        />
      </S.InputContainer>
      <S.FileList>
        {files.map((file, index) => (
          <S.FileItem key={index}>
            <S.FileName>{file.name}</S.FileName>
          </S.FileItem>
        ))}
      </S.FileList>
    </S.UploadContainer>
  );
};

export default FileUpload;