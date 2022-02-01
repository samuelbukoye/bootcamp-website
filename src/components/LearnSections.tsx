import FundamentalsImg from '../img/fundamentals.png';
import ReactImg from '../img/react.png';

const LearnSections = () => {
  return (
    <>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-contents-between">
            <div className="col-md">
              <img src={FundamentalsImg} alt="" className="img-fluid" />
            </div>
            <div className="col-md p-5">
              <h2> Learn The Fundamentals</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique ea accusamus dolores cupiditate, atque quis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur accusamus nulla numquam facilis vitae error tenetur
                consectetur nisi adipisci alias, totam minima quae deserunt
                aliquam. Quidem veritatis quasi autem iste!
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-contents-between">
            <div className="col-md p-5">
              <h2> Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique ea accusamus dolores cupiditate, atque quis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur accusamus nulla numquam facilis vitae error tenetur
                consectetur nisi adipisci alias, totam minima quae deserunt
                aliquam. Quidem veritatis quasi autem iste!
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img src={ReactImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnSections;
