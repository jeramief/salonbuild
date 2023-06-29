import Style1 from "../assets/images/style-1.jpg";
import Style2 from "../assets/images/style-2.jpg";
import Style3 from "../assets/images/style-3.jpg";
import Style4 from "../assets/images/style-4.jpg";

export const Styles = () => {
  return (
    <section className="styles" id="styles">
      <h1 className="heading">choose your styles</h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={Style1} alt="" />
          </div>
          <div className="content">
            <h3 className="title">wedding hairstyle</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              at.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={Style2} alt="" />
          </div>
          <div className="content">
            <h3 className="title">evening hairstyle</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              at.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={Style3} alt="" />
          </div>
          <div className="content">
            <h3 className="title">party hairstyle</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              at.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={Style4} alt="" />
          </div>
          <div className="content">
            <h3 className="title">business hairstyle</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              at.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
