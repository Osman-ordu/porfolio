import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CSlider = ({children}) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          },
        ]
      };
  return (
    <Slider {...settings}>
        {children}
    </Slider>
  )
}

export default CSlider