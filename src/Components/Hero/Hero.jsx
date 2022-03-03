import "./Hero.scss";
import GalleryFirst from "../../Assets/Images/Gallery-image-1.jpg";
import GallerySecond from "../../Assets/Images/Gallery-image-2.jpg";
import GalleryThird from "../../Assets/Images/Gallery-image-3.jpg";
import GalleryFourth from "../../Assets/Images/Gallery-image-4.jpg";
import GalleryFifth from "../../Assets/Images/Gallery-image-5.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <h1 className="hero__heading">
            <span className="hero__heading__top">Раздвижные конструкции </span>
            <span className="hero__heading__bottom">с высоким уровнем звукоизоляции</span>
          </h1>

          <ul className="hero__list">
            <li className="hero__item">Собственное производство в России</li>
            <li className="hero__item">Уровень вукоизоляции до 52 дБ</li>
            <li className="hero__item">Расчит проекта по вашим требованиям за 1 час</li>
            <li className="hero__item">Расчит проекта по вашим требованиям за 1 час</li>
            <li className="hero__item">Работа “под ключ”</li>
          </ul>

          <a className="hero__link" href="#link">
            Получить рассчет проекта
          </a>
        </div>

        <div className="hero__gallery">
          <ul className="hero__gallery__list">
            <li className="hero__gallery__item">
              <img
                className="hero__gallery__image"
                src={GalleryFirst}
                alt=""
                width={360}
                height={700}
              />
            </li>
            <li className="hero__gallery__item">
              <img
                className="hero__gallery__image"
                src={GallerySecond}
                alt=""
                width={160}
                height={330}
              />
            </li>
            <li className="hero__gallery__item">
              <img
                className="hero__gallery__image"
                src={GalleryThird}
                alt=""
                width={160}
                height={145}
              />
            </li>
            <li className="hero__gallery__item">
              <img
                className="hero__gallery__image"
                src={GalleryFourth}
                alt=""
                width={160}
                height={145}
              />
            </li>
            <li className="hero__gallery__item">
              <img
                className="hero__gallery__image"
                src={GalleryFifth}
                alt=""
                width={360}
                height={330}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
