import React from 'react';
import styles from './form.module.css';
import about from '../../assets/img/about.png';

const Form = () => (
    <section className={styles.form__sec} id="book">
        <div className={styles.form__wrapper}>
            <div className={styles.form__cnt}>
                <h3 className={styles.form__title}>Book a Table</h3>
                <form action="">
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="phone" placeholder="Phone" />
                    <input type="text" placeholder="People" className={styles.inp__arr} />
                    <input type="text" placeholder="Date(mm/dd)" />
                    <input type="text" placeholder="Time" className={styles.inp__arr} />
                    <button className={styles.form__btn}>Book Now</button>
                </form>
            </div>
            <div className={styles.form__imgCnt}>
                <img src={about} alt="" />
            </div>
        </div>
        <div className={styles.text__cnt}>
            <p className={styles.form__text}>Mon - Fri: <span className={styles.text__bold}>8PM - 10PM</span>, Sat - Sun: <span className={styles.text__bold}>8PM - 3AM</span>, Phone: <span className={styles.text__bold}>+40 729 131 637/+40 726 458 782</span></p>
        </div>
    </section>
);

export default Form;