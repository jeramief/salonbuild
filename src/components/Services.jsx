import Services1 from "../assets/images/services-1.jpg";
import Services2 from "../assets/images/services-2.jpg";
import Services3 from "../assets/images/services-3.jpg";
import Services4 from "../assets/images/services-4.jpg";

export const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">premium services</h1>

      <div className="box-container">
        <div className="box">
          <img src={Services1} alt="" />
          <div className="content">
            <h3>hair styling</h3>
          </div>
        </div>

        <div className="box">
          <img src={Services2} alt="" />
          <div className="content">
            <h3>wedding services</h3>
          </div>
        </div>

        <div className="box">
          <img src={Services3} alt="" />
          <div className="content">
            <h3>man haircut</h3>
          </div>
        </div>

        <div className="box">
          <img src={Services4} alt="" />
          <div className="content">
            <h3>beard trimming</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
