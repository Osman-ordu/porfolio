import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CSlider = ({children}) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:true
      };
  return (
    <Slider {...settings}>
        {children}
    </Slider>
  )
}

export default CSlider