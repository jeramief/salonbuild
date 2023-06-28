import AboutLeft from "../assets/images/about.png";
import About1 from "../assets/images/about-icon-1.png";
import About2 from "../assets/images/about-icon-2.png";
import About3 from "../assets/images/about-icon-3.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">about us</h1>

      <div className="row">
        <div className="image">
          <img src={AboutLeft} alt="" />
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
              <img src={About2} alt="" />
              <h3>professional tools</h3>
            </div>

            <div className="icons">
              <img src={About1} alt="" />
              <h3>quality tools</h3>
            </div>

            <div className="icons">
              <img src={About3} alt="" />
              <h3>hair washing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
