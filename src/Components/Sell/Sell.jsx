import "./Sell.scss";

function Sell() {
  return (
    <>
      <section className="sell">
        <div className="container">
          <div className="sell__inner">
            <div className="sell__info">
              <h2 className="sell__heading">
                А может хотите
                <span className="sell__heading__inner">персональную скидку</span>
                специально для вас?
              </h2>

              <p className="sell__text">
                Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время для обсуждения
                всех деталей спецпредложения специально для вас.
              </p>

              <strong className="sell__text--strong">
                Для начала, давайте определимся, к какому типу клиентов вы себя относите :)
              </strong>

              <button className="sell__button"></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sell;
