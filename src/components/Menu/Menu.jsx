import React from 'react';
import styles from './menu.module.css';

const Menu = ({ items }) => (
    <section className={styles.menu}>
        <div className={styles.menu__cnt}>
            <h3 className={styles.menu__title}>Delicious Menu</h3>
            <p className={styles.title__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
        </div>
        <div className={styles.menu__listCnt}>
            <ul className={styles.menu__bar}>
                <li className={styles.menuBar__item}>
                    <p className={styles.menuBar__text}>Soupe</p>
                </li>
                <li className={styles.menuBar__item}>
                    <p className={styles.menuBar__text}>Pizza</p>
                </li>
                <li className={styles.menuBar__item}>
                    <p className={styles.menuBar__text}>Pasta</p>
                </li>
                <li className={styles.menuBar__item}>
                    <p className={styles.menuBar__text}>Desert</p>
                </li>
                <li className={styles.menuBar__item}>
                    <p className={styles.menuBar__text}>Wine</p>
                </li>
                <li className={styles.menuBar__item}>
                    <p className={styles.menuBar__text}>Beer</p>
                </li>
                <li className={styles.menuBar__item}>
                    <p className={styles.menuBar__text}>Drinks</p>
                </li>
            </ul>
            <ul className={styles.menu__list}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={styles.list__item}>
                            <div className={styles.namePrice__cnt}>
                                <p className={styles.item__name}>{item.name}</p>
                                <p className={styles.item__price}>{item.price}</p>
                            </div>
                            <p className={styles.namePrice__info}>{item.info}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    </section>
);

export default Menu;