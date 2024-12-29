import React from 'react';
import "./Station.css"

const Station = () => {
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
              src="./oybek.mp4"
              type="video/mp4"
            />
          </div>

          <div className="oybek">
            <div  className="info">

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text2">
              <h3>История станции метро "Ойбек"</h3>
              <p>
                Станция метро "Ойбек" - одна из самых известных станций Ташкентского
                метрополитена. Она была открыта 8 декабря 1984 года в составе первого
                участка Узбекистанской линии, соединившей станции "Алишера Навои" и "Ташкент".
              </p>
              <h4>Особенности:</h4>
              <ul>
                <li>Колонный тип: Станция построена по колонному типу, что характерно для многих станций Ташкентского метро.</li>
                  <li>Подробное описание: Вы можете найти более подробную информацию о станции "Ойбек" на сайте Ташкентского метрополитена.</li>
                <li>История Ташкентского метрополитена</li>
              </ul>
              
            </div>

            <hr />
            <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text3">
            <p>«Айбек» - станция Узбекистанской линии Ташкентского метрополитена, расположена между станциями «Космонавтлар» и «Ташкент». Открыта в декабре 1984 года в составе участка «Алишера Навои»  - «Ташкент» (первая очередь строительства линии). Станция колонного типа, мелкого заложения, с двумя подземными вестибюлями. Потолок платформенного зала лежит на колоннах и стенах. На станции одна островная платформа, длиной 102 метра. Впервые в Ташкентском метрополитене на этой станции применены платформы колонного типа с использованием сейсмостойких монолитных конструкций.</p>
            </div>
            </div>
            <div className="image">
              <img data-aos="zoom-in-up" src="./metro-oybek.jpg" alt="Метро Ойбек" />
              <img data-aos="zoom-in-down" src="./Oybek_metro_stansiyasidagi_barelyef.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Station;
