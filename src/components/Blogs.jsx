import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

export const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">our blogs</h1>

      <div className="box-container">
        <div className="box">
          <a href="#">
            <div className="image">
              <img src={blog1} alt="" />
            </div>

            <div className="content">
              <h4 className="title">styling hair services</h4>
              <span>by admin / 31st july, 2023</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                fuga a corporis vel aliquam ipsa consequuntur velit accusamus!
                Qui doloremque aperiam nihil! Expedita ut quis ad doloribus
                praesentium magnam ullam!
              </p>
            </div>
          </a>
        </div>

        <div className="box">
          <a href="#">
            <div className="image">
              <img src={blog2} alt="" />
            </div>

            <div className="content">
              <span className="title">styling hair services</span>
              <span>by admin / 31st july, 2023</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                fuga a corporis vel aliquam ipsa consequuntur velit accusamus!
                Qui doloremque aperiam nihil! Expedita ut quis ad doloribus
                praesentium magnam ullam!
              </p>
            </div>
          </a>
        </div>

        <div className="box">
          <a href="#">
            <div className="image">
              <img src={blog3} alt="" />
            </div>

            <div className="content">
              <a href="#" className="title">
                styling hair services
              </a>
              <span>by admin / 31st july, 2023</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                fuga a corporis vel aliquam ipsa consequuntur velit accusamus!
                Qui doloremque aperiam nihil! Expedita ut quis ad doloribus
                praesentium magnam ullam!
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
