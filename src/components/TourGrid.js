// src/components/TourGrid.js
import React from 'react';
import './TourGrid.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Импорт основных стилей Swiper
import image1 from '../components/image1.jpg';
import image2 from '../components/image2.jpg';
import image3 from '../components/image3.jpg';
import image4 from '../components/image4.jpg';

const tours = [
  { title: 'Фимоз', location: 'Даун', image: image1 },
  { title: 'Деменция', location: 'ДВФУ', image: image2 },
  { title: 'Ахуено', location: 'Яндекс', image: image3 },
  { title: 'Да ебать этих детей', location: 'ДА БЛЯЯЯЯЯ', image: image4 }
];

const TourGrid = () => {
  return (
    <section className="tour-grid">
      <Swiper
        spaceBetween={10}   // Расстояние между слайдами
        slidesPerView={2}   // Количество слайдов, которые отображаются одновременно
        pagination={{ clickable: true }}  // Пагинация для прокрутки
        navigation={true}    // Навигация для кнопок вперед/назад
        autoplay={{
          delay: 3000,   // Время (в миллисекундах) до следующего слайда
          disableOnInteraction: false, // Автопрокрутка не останавливается при взаимодействии с слайдами
        }}
        loop={true} // Включить цикл, если нужно, чтобы карусель крутился бесконечно
        className="swiper-container"  // Добавляем класс для контейнера
      >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="tour-card">
              <div className="tour-card__image">
                <img src={tour.image} alt={tour.title} />
              </div>
              <div className="tour-card__info">
                <h3>{tour.title}</h3>
                <p>{tour.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TourGrid;
