export const Visit = () => {
  return (
    <section className="visit" id="visit">
      <div className="content">
        <h1 className="heading">book a visit</h1>

        <div className="row">
          <form action="">
            <h3>book your first visit today</h3>

            <div className="inputBox">
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="inputBox">
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="inputBox">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="inputBox">
              <input type="text" placeholder="Message" />
            </div>

            <input type="submit" value="Send a Message" className="btn" />
          </form>

          <div className="image">
            <img src="images/contact.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
