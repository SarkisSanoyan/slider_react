import { useState } from "react";
import { Animated } from "react-animated-css";


export function Slider({ slides }) {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [visible, setVisible] = useState(true);

    const nextSlide = () => {
        if (currentSlide !== slides.length) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(1);
        }
        titleAnimations();
    }

    const prevSlide = () => {
        if (currentSlide !== 1) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(slides.length);
        }
        titleAnimations();
    }

    const dotsHandler = (index) => {
        setCurrentSlide(index);
        titleAnimations();
    }

    const titleAnimations = () => {
        setVisible(false);
        setTimeout(() =>
            setVisible(true), 1000);
    }


    return (
        <div className="Slider">
            {
                slides.map(el => {
                    return (
                        <div
                            key={el.id}
                            style={{ backgroundImage: `url(${el.url})` }}
                            className={currentSlide === el.id ? "slide active-anim" : "slide"}
                        >
                            <Animated animationIn="bounceInDown" animationOut="" isVisible={visible}>
                                <h3>{el.title}</h3>
                            </Animated>
                        </div>
                    )
                })
            }

            <button onClick={nextSlide} className="btn-slide next">
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <button onClick={prevSlide} className="btn-slide prev">
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="dots-container">
                {
                    slides.map(el =>
                    (
                        <div
                            key={el.id}
                            onClick={() => dotsHandler(el.id)}
                            className={currentSlide === el.id ? "dot active" : "dot"}
                        />
                    ))
                }
            </div>

        </div>
    )
}
