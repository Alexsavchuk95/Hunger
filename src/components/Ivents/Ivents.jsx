import React from 'react';
import styles from './ivents.module.css';
import img1 from '../../assets/img/2.png';
import img2 from '../../assets/img/3.png';

const Ivents = () => (
    <section className={styles.ivents} id="events">
        <div className={styles.ivents_arr}></div>
        <div className={`${styles.ivents_arr} ${styles.arrTwo}`}></div>
        <div className={`${styles.ivents_arr} ${styles.arrThree}`}></div>
        <h3 className={styles.ivents__title}>Private Events</h3>
        <div className={styles.ivents__cnt}>
            <div className={styles.ivents__weddings}>
                <div className={styles.weed__cnt}>
                    <img src={img1} alt="" />
                    <div className={styles.weed__title}>
                        <p className={styles.weed__text}>Weddings</p>
                    </div>
                </div>
            </div>
            <div className={styles.ivents__corporate}>
                <div className={styles.corp__cnt}>
                    <img src={img2} alt="" />
                    <div className={styles.corp__title}>
                        <p className={styles.corp__text}>Corporate Pzrties</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.inf__cnt}>
            <p className={styles.ivents__in}>For private events please call: <span className={styles.inBold}>+40 729 131 637/+40 726 458 782</span> or use the contact form.</p>
        </div>
    </section>
);

export default Ivents;