import React, { useState } from 'react';

import * as S from "../styles/fileUpload.style"

const FileUpload = ({ maxFiles, maxSize }) => {
  const [files, setFiles] = useState([{name: 'kit_rule.pdf'}]);

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


  const downloadFile = async (name) => {
    const response = await fetch('http://cvpr.kumoh.ac.kr/rag/chatbot/api/hitrule');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name; // 다운로드될 파일 이름 설정
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }

  return (
    <S.UploadContainer>
      <S.InputContainer
        onDrop={handleDrop}
        onDragOver={handleDragOver}  
      >
        <label htmlFor="fileInput">클릭하여 파일을 업로드하거나, 파일을 끌어 넣어주세요.</label>
        <S.UploadInput
          id="fileInput"
          type="file"
          multiple
          onChange={handleFileChange}
        />
      </S.InputContainer>
      <S.FileList>
        {files.map((file, index) => (
          <S.FileItem onClick={()=>downloadFile(file.name)} key={index}>
            <S.FileName>{file.name}</S.FileName>
          </S.FileItem>
        ))}
      </S.FileList>
    </S.UploadContainer>
  );
};

export default FileUpload;
