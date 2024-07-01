import React, { useState } from 'react';

const FileSelectButton = ({ title,onFileSelect,buttonClassType }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className={buttonClassType}>
      <input
        type="file"
        accept=".json"
        id="file-upload"
        style={{ display: 'none' }}
        onChange={onFileSelect}
      />
      <label htmlFor="file-upload" className="custom-file-upload">
        {fileName || title}
      </label>
    </div>
  );
};

export default FileSelectButton;