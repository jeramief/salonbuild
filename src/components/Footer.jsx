export const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container">
        <div className="box">
          <h3>find us here</h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
            placeat eveniet!
          </p>

          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <h3>contact us</h3>
          <a href="tel:3175551234">
            <p>(317) 555 1234</p>
          </a>
          <a href="mailto:default@email.com" className="link">
            default@email.com
          </a>
        </div>

        <div className="box">
          <h3>location</h3>
          <p>
            230 Points of Pines Dr <br />
            Indianapolis, IN <br />
            United States
          </p>
        </div>
      </div>

      <div className="credit">
        <small>
          created by <span>JF</span> | all rights reserved!
        </small>
      </div>
    </footer>
  );
};
