import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

export default function newsSlider() {
    const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".js-news-slider")
    );

    elements.forEach((element) => {
        const options: SwiperOptions = {
            slidesPerView: "auto",
            speed: 600,
            spaceBetween: 20,
            modules: [Navigation, Pagination],
            navigation: {
                prevEl: element.querySelector<HTMLElement>(
                    ".news-detail__slider-arrow--prev"
                ),
                nextEl: element.querySelector<HTMLElement>(
                    ".news-detail__slider-arrow--next"
                ),
            },
            pagination: {
                el: element.querySelector<HTMLElement>(".news-detail__slider-pagination"),
                type: "fraction",
            },
        };

        new Swiper(element, options);
    });
}
