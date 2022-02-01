const Modal = () => {
  return (
    <div
      className="modal fade"
      id="enroll"
      // tabindex="-1"
      aria-labelledby="enrollLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="enrollLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="lead">
              Fill out this form and we will get back to you
            </p>
            <form>
              <div className="mb3">
                <label htmlFor="first-name" className="col-form-label">
                  First Name:
                </label>
                <input type="text" id="first-name" className="form-control" />
              </div>
              <div className="mb3">
                <label htmlFor="last-name" className="col-form-label">
                  Last Name:
                </label>
                <input type="text" id="last-name" className="form-control" />
              </div>
              <div className="mb3">
                <label htmlFor="email" className="col-form-label">
                  Email:
                </label>
                <input type="text" id="email" className="form-control" />
              </div>
              <div className="mb3">
                <label htmlFor="phone" className="col-form-label">
                  Phone:
                </label>
                <input type="text" id="phone" className="form-control" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
