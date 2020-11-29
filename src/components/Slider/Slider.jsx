import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from './slider.module.css';
import img from '../../assets/img/1.png';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (
    <section className={styles.slider__cnt} id="spec">
        <div className={`${styles.arr} ${styles.arr}`}></div>
        <div className={`${styles.arr} ${styles.arrTwo}`}></div>
        <div className={`${styles.arr} ${styles.arrThree}`}></div>
        <div className={styles.title__cnt}>
            <h3 className={styles.slider__title}>Specialties</h3>
        </div>
        <AutoplaySlider
            organicArrows={false}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000} >
            <div className={styles.slider__wrapper}>
                <div className={styles.img__cnt}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.slider__info}>
                    <h3 className={styles.info__title}>Chocolate Pancakes</h3>
                    <p className={styles.info__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
                    <p className={styles.info__textS}>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
                </div>
            </div>
            <div className={styles.slider__wrapper}>
                <div className={styles.img__cnt}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.slider__info}>
                    <h3 className={styles.info__title}>Chocolate Pancakes</h3>
                    <p className={styles.info__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
                    <p className={styles.info__textS}>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
                </div>
            </div>
            <div className={styles.slider__wrapper}>
                <div className={styles.img__cnt}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.slider__info}>
                    <h3 className={styles.info__title}>Chocolate Pancakes</h3>
                    <p className={styles.info__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
                    <p className={styles.info__textS}>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
                </div>
            </div>
        </AutoplaySlider>
    </section>
);

export default Slider;