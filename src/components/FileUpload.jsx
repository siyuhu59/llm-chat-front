import React, { useState } from 'react';

import * as S from "../styles/fileUpload.style"

const FileUpload = ({ maxFiles, maxSize }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    processFiles(selectedFiles);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const processFiles = (fileList) => {
    let validFiles = [];

    fileList.forEach((file) => {
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

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <S.UploadContainer>
      <S.InputContainer
        onDrop={handleDrop}
        onDragOver={handleDragOver}  
      >
        <label htmlFor="fileInput">Click here to upload files or drag and drop files here</label>
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