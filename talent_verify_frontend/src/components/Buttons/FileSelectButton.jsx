import React, { useState } from 'react';

const FileSelectButton = ({ title,onFileSelect }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        id="file-upload"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload" className="custom-file-upload">
        {fileName || title}
      </label>
      <style jsx>{`
        .custom-file-upload {
          display: inline-block;
          padding: 10px 20px;
          background: #3498db;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .custom-file-upload:hover {
          background: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default FileSelectButton;