const FileSelectButton = ({ title, onFileSelect, buttonClassType,id }) => {
  return (
    <div className={buttonClassType}>
      <input
        type="file"
        accept=".json"
        id={`${id}`}
        style={{ display: "none" }}
        onChange={onFileSelect}
      />
      <label htmlFor={`${id}`} className="custom-file-upload">
        {title}
      </label>
    </div>
  );
};

export default FileSelectButton;
