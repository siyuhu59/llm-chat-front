import React, { useEffect, useState } from 'react';

import * as S from "../styles/fileUpload.style"

import download from "../assets/images/download.png"

const FileUpload = ({ maxFiles, maxSize, setFileNames }) => {
  const [files, setFiles] = useState([{ name: 'kit01.pdf' }]);
  const [selectedFiles, setSelectedFiles] = useState([1]);

  useEffect(() => {
    if (files.length === 0) {
      return;
    }
    const uploadFile = async (file) => {
      const formData = new FormData();
      formData.append('file', file); // 'file' 대신 서버에서 요구하는 필드명 사용
  
      try {
        const response = await fetch('http://cvpr.kumoh.ac.kr/rag/chatbot/api/uploadfile', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/pdf',
          },
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error('File upload failed');
        }
  
        const result = await response.json();
        console.log('Upload successful', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
  
    files.forEach((file, index) => {
      if (selectedFiles[index] === 1) {
        uploadFile(file);
      }
    });
  }, [files, selectedFiles])

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
    let selectFiles = [];

    fileList.forEach((file) => {
      if (file.size <= maxSize) {
        validFiles.push(file);
        selectFiles.push(1);
      } else {
        alert(`${file.name} is too large. Max size is ${maxSize / 1024 / 1024} MB`);
      }
    });

    if (files.length + validFiles.length > maxFiles) {
      alert(`Cannot upload more than ${maxFiles} files.`);
      validFiles = validFiles.slice(0, maxFiles - files.length);
    }

    setFiles([...files, ...validFiles]);
    setSelectedFiles([...selectedFiles, ...selectFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const selectFile = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = newSelectedFiles[index] === 1 ? 0 : 1;
    setSelectedFiles(newSelectedFiles);
    setFileNames(files.filter((file, i) => newSelectedFiles[i] === 1).map((file) => file.name));
  }


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
          <S.FileItem className={selectedFiles[index] === 1 ? 'selected' : ''} key={index} onClick={()=>selectFile(index)}>
            <S.FileName>{file.name}</S.FileName>
            <div>
              <img onClick={()=>downloadFile(file.name)} src={download} alt="download" />
            </div>
          </S.FileItem>
        ))}
      </S.FileList>
    </S.UploadContainer>
  );
};

export default FileUpload;
