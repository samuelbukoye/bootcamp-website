function QuestionAccordion() {
  return (
    <section id="questions" className="p5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="questions">
          {/* Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Where exactly are you located?
              </button>
            </h2>
            <div
              id="question-one"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                qui, accusamus accusantium dicta alias nemo nam suscipit
                assumenda voluptatibus enim ad voluptatem voluptatum praesentium
                vitae! Illo libero reiciendis dicta perspiciatis, quod ut
                recusandae voluptas qui, inventore ducimus dignissimos nam
                alias, deserunt at blanditiis. Fuga iste mollitia quod, rem
                nulla quisquam.
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                How much does it cost to attend?
              </button>
            </h2>
            <div
              id="question-two"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                qui, accusamus accusantium dicta alias nemo nam suscipit
                assumenda voluptatibus enim ad voluptatem voluptatum praesentium
                vitae! Illo libero reiciendis dicta perspiciatis, quod ut
                recusandae voluptas qui, inventore ducimus dignissimos nam
                alias, deserunt at blanditiis. Fuga iste mollitia quod, rem
                nulla quisquam.
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                What do i need to know?
              </button>
            </h2>
            <div
              id="question-three"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                qui, accusamus accusantium dicta alias nemo nam suscipit
                assumenda voluptatibus enim ad voluptatem voluptatum praesentium
                vitae! Illo libero reiciendis dicta perspiciatis, quod ut
                recusandae voluptas qui, inventore ducimus dignissimos nam
                alias, deserunt at blanditiis. Fuga iste mollitia quod, rem
                nulla quisquam.
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
                How do I sign up?
              </button>
            </h2>
            <div
              id="question-four"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                qui, accusamus accusantium dicta alias nemo nam suscipit
                assumenda voluptatibus enim ad voluptatem voluptatum praesentium
                vitae! Illo libero reiciendis dicta perspiciatis, quod ut
                recusandae voluptas qui, inventore ducimus dignissimos nam
                alias, deserunt at blanditiis. Fuga iste mollitia quod, rem
                nulla quisquam.
              </div>
            </div>
          </div>
          {/* Item 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-five"
              >
                Do you help me find a job?
              </button>
            </h2>
            <div
              id="question-five"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                qui, accusamus accusantium dicta alias nemo nam suscipit
                assumenda voluptatibus enim ad voluptatem voluptatum praesentium
                vitae! Illo libero reiciendis dicta perspiciatis, quod ut
                recusandae voluptas qui, inventore ducimus dignissimos nam
                alias, deserunt at blanditiis. Fuga iste mollitia quod, rem
                nulla quisquam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionAccordion;
