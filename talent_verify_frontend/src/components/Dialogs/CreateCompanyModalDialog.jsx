import Modal from "react-modal";
import "../../styles/ModalDialog.css";

const CreateCompanyModalDialog = ({
  isOpen,
  onRequestClose,
  title,
  handleSubmit,
  companyData,
  setCompanyData,
  handleFileUpload,
}) => {
  console.warn("Is open is ", isOpen);

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
          <label className="label-text">Company Name:</label>
          <input
            type="text"
            value={companyData.companyName}
            onChange={(e) =>
              setCompanyData({ ...companyData, companyName: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Registration Number:</label>
          <input
            type="text"
            value={companyData.registrationNumber}
            onChange={(e) =>
              setCompanyData({
                ...companyData,
                registrationNumber: e.target.value,
              })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Date Registered:</label>
          <input
            type="date"
            value={companyData.dateRegistered}
            onChange={(e) =>
              setCompanyData({ ...companyData, dateRegistered: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Address:</label>
          <input
            type="text"
            value={companyData.address}
            onChange={(e) =>
              setCompanyData({ ...companyData, address: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Contact Person:</label>
          <input
            type="text"
            value={companyData.contactPerson}
            onChange={(e) =>
              setCompanyData({ ...companyData, contactPerson: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Contact Person Phone:</label>
          <input
            type="text"
            value={companyData.contactPersonPhone}
            onChange={(e) =>
              setCompanyData({
                ...companyData,
                contactPersonPhone: e.target.value,
              })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Email Address:</label>
          <input
            type="email"
            value={companyData.emailAddress}
            onChange={(e) =>
              setCompanyData({ ...companyData, emailAddress: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-input">Submit</button>
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="form-input"
        />
      </form>
    </Modal>
  );
};

export default CreateCompanyModalDialog;
