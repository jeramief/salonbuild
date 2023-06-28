export const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">about us</h1>

      <div className="row">
        <div className="image">
          <img src="images/about.png" alt="" />
        </div>

        <div className="content">
          <h3 className="title">we are a grouop of stylists</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            dolorem nesciunt quis, itaque a cum magni ab, dicta dignissimos
            autem aliquam similique soluta debitis voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            dolorem nesciunt quis, itaque a cum magni ab, dicta dignissimos
            autem aliquam similique soluta debitis voluptatum.
          </p>

          <div className="icons-container">
            <div className="icons">
              <img src="images/about-icon-2.png" alt="" />
              <h3>professional tools</h3>
            </div>

            <div className="icons">
              <img src="images/about-icon-1.png" alt="" />
              <h3>quality tools</h3>
            </div>

            <div className="icons">
              <img src="images/about-icon-3.png" alt="" />
              <h3>hair washing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
