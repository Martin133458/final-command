import React, { useEffect } from 'react'
import "./Ming.css"
import AOS from "aos";
import "aos/dist/aos.css"; // Импорт стилей AOS


const Ming = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      once: false,     // Анимация срабатывает только один раз при скролле
    });
  }, []);

  return (
    <>
    <section className="station">
        <div className="container">
          {/* Фоновое видео */}
          <div className="videoWrapper">
            <video
              className="videoBackground"
              autoPlay
              loop
              muted
              playsInline
              src="./ming-urik-fon.mp4"
              type="video/mp4"
            />
          </div>

          <div  className="oybek">
            <div data-aos="zoom-in-up"  className="info">

            <div className="text">
              <h3>История станции метро "Минг Урик"</h3>
              <p>
              Минг Урик - это конечная станция Юнусабадской линии Ташкентского метрополитена. Она была открыта в 2001 году.
               Станция колонного типа
               c двумя подземными вестибюлями. c нее можно перейти на станцию "Айбек" Узбекистанской линии.
              </p>
              
              <hr />
            </div>
            <div  className="text1">
              <p> Проектное название – «Лахути». На станции одна островная прямая платформа. Станция колонного типа, мелкого заложения, с двумя подземными вестибюлями. Открыта в октябре 2001 года в составе первого участка Юнусабадской линии. Расположена на стыке улиц Шахрисабз, Айбека и Афросиаб, вблизи гостиницы «Россия».</p>
              
            </div>
            </div>
            <div className="image">
              <img data-aos="fade-left"  src="./ming-orik.jpg" alt="Метро Ойбек" />
              <img data-aos="fade-right" src="./0_10d65b_a26dc8dc_orig.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ming