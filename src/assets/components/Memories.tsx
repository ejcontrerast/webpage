import React from "react";
import Slider from "react-slick";

const Memories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="memories" className="p-10">
      <h2 className="text-3xl font-bold mb-4">Memories</h2>
      <Slider {...settings}>
        <div>
          <img src="/path/to/photo1.jpg" alt="Memory 1" />
        </div>
        <div>
          <img src="/path/to/photo2.jpg" alt="Memory 2" />
        </div>
      </Slider>
    </section>
  );
};

export default Memories;
