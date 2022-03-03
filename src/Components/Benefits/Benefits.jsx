import "./Benefits.scss";

function Benefits() {
  return (
    <>
      <section className="benefits">
        <div className="container">
          <h2 className="benefits__heading">Разделите любое помещение на “до и после”</h2>

          <p className="benefits__text">
            Современные и практичные раздвижные перегородки компании ФОЛДИН не требуют
            перепланировки помещения, получения разрешительных документов и выполнения сложных
            строительных работ.
          </p>

          <ul className="benefits__list">
            <li className="benefit">
              <h3 className="benefit__heading">
                <strong className="benefit__heading__top">18</strong>
                <span className="benefit__heading__bottom">работы на рынке</span>
              </h3>
            </li>

            <li className="benefit">
              <h3 className="benefit__heading">
                <strong className="benefit__heading__top">8</strong>
                <span className="benefit__heading__bottom">собственному производству</span>
              </h3>
            </li>

            <li className="benefit">
              <h3 className="benefit__heading">
                <strong className="benefit__heading__top">62</strong>
                <span className="benefit__heading__bottom">высококлассных сотрудника</span>
              </h3>
            </li>

            <li className="benefit">
              <h3 className="benefit__heading">
                <strong className="benefit__heading__top">12</strong>
                <span className="benefit__heading__bottom">запатентованных разработок</span>
              </h3>
            </li>

            <li className="benefit">
              <h3 className="benefit__heading">
                <strong className="benefit__heading__top">400</strong>
                <span className="benefit__heading__bottom">производимых панелей в месяц</span>
              </h3>
            </li>

            <li className="benefit">
              <h3 className="benefit__heading">
                <strong className="benefit__heading__top">3 000</strong>
                <span className="benefit__heading__bottom">конструкций по всей России</span>
              </h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Benefits;
