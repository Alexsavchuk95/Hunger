import React from 'react';
import Timer from './Timer/Timer';
import styles from './header.module.css';
import logo from '../../assets/img/logo.png';
import arrow from '../../assets/img/arrow.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import inst from '../../assets/icons/inst.png';

function Header() {
    const startDate = new Date().getTime() + 50400000;
    return (
        <header>
            <nav>
                <ul className={styles.header__list}>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="/">Home</a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="/">About</a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="/">Team</a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#book">Booking</a>
                    </li>
                </ul>
                <div className={styles.header__logo}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <ul className={styles.header__list}>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#menu">Menu</a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#spec">Galerie</a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#events">Events</a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="/">Contact</a>
                    </li>
                </ul>
            </nav>
            {/*   =====TIMER===== */}
            <Timer startDate={startDate} />
            {/*   =====TIMER===== */}
            <div className={styles.title__cnt}>
                <div className={styles.time__sp}>
                    <p className={styles.sp__text}>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
                </div>
                <div className={styles.cnt}>
                    <p className={styles.title_sp}>Restaurant</p>
                    <p className={styles.header__title}>Hungry People</p>
                    <div className={styles.title__links}>
                        <a className={styles.title__link} href="#book">Book Table</a>
                        <a className={styles.title__link} href="/">Explore</a>
                    </div>
                    <div className={styles.arrow_cnt}>
                        <div className={styles.header__arrow}>
                            <img className={styles.arrow__img} src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.header__social}>
                    <ul className={styles.social__list}>
                        <li className={styles.social__item}>
                            <a href="/">
                                <img className={styles.social__facebook} src={facebook} alt="" />
                            </a>
                        </li>
                        <li className={styles.social__item}>
                            <a href="/">
                                <img className={styles.social__twiiter} src={twitter} alt="" />
                            </a>
                        </li>
                        <li className={styles.social__item}>
                            <a href="/">
                                <img className={styles.social__inst} src={inst} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
);
}


export default Header;