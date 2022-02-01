import { NewsInputDiv } from './styled';

const Newsletter = () => {
  return (
    <section className="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
          <NewsInputDiv className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
            <button className="input-group-text btn btn-lg bg-dark text-light">
              Enter Email
            </button>
          </NewsInputDiv>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
