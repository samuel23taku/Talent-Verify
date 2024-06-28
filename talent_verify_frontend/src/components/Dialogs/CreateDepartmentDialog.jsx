import Modal from "react-modal";
import "../../styles/DepartmentDialog.css";

const CreateDepartmentModalDialog = ({
  isOpen,
  onRequestClose,
  title,
  handleSubmit,
  departmentData,
  setDepartmentData,
  handleFileUpload,
}) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>{title}</h2>
      <button onClick={onRequestClose} className="close-button">
        X
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form-label">
          <label>
            Name:
            <input
              type="text"
              value={departmentData.departmentName}
              onChange={(e) =>
                setDepartmentData({ ...departmentData, departmentName: e.target.value })
              }
              required
            />
          </label>
          <button type="submit">Submit</button>
        </div>
        <div className="form-label">
          <label>
            <input type="file" accept=".json" onChange={handleFileUpload} />
            Choose JSON File
          </label>
        </div>
      </form>
    </Modal>
  );
};

export default CreateDepartmentModalDialog;
