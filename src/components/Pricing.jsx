export const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h1 className="heading">offer and pricing</h1>

      <div className="box-container">
        <div className="box">
          <h3 className="title">basic</h3>

          <div className="price">
            <span className="currency">$</span>
            <span className="amount">30</span>
          </div>
          <ul>
            <li>
              <i className="fas fa-check"></i>simple haircut
            </li>
            <li>
              <i className="fas fa-check"></i>hair plugs
            </li>
            <li>
              <i className="fas fa-check"></i>styling
            </li>
            <li>
              <i className="fas fa-check"></i>braiding
            </li>
          </ul>
          <a href="#">
            <button>book a visit</button>
          </a>
        </div>

        <div className="box">
          <h3 className="title">standard</h3>

          <div className="price">
            <span className="currency">$</span>
            <span className="amount">60</span>
          </div>
          <ul>
            <li>
              <i className="fas fa-check"></i>simple haircut
            </li>
            <li>
              <i className="fas fa-check"></i>hair plugs
            </li>
            <li>
              <i className="fas fa-check"></i>styling
            </li>
            <li>
              <i className="fas fa-check"></i>braiding
            </li>
          </ul>
          <a href="#">
            <button>book a visit</button>
          </a>
        </div>

        <div className="box">
          <h3 className="title">premium</h3>

          <div className="price">
            <span className="currency">$</span>
            <span className="amount">100</span>
          </div>
          <ul>
            <li>
              <i className="fas fa-check"></i>simple haircut
            </li>
            <li>
              <i className="fas fa-check"></i>hair plugs
            </li>
            <li>
              <i className="fas fa-check"></i>styling
            </li>
            <li>
              <i className="fas fa-check"></i>braiding
            </li>
          </ul>
          <a href="#">
            <button>book a visit</button>
          </a>
        </div>
      </div>
    </section>
  );
};
