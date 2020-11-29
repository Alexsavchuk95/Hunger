import React, { Component } from 'react';
import styles from './timer.module.css';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.countDownId = null;
        this.state = {
            hours: 14,
            minutes: 0 +'0',
            expired: false
        };
    }

    componentDidMount() {
        this.countDownId = setInterval(this.timerInit, 1000);
    }

    componentWillUnmount() {
        if (this.countDownId) {
            clearInterval(this.countDownId);
        }
    }

    timerInit = () => {
        const { startDate } = this.props;
        console.log(startDate);
        const now = new Date().getTime();
        if (!startDate) {
            this.setState({ expired: true });
            return;
        }
        const countDownStartDate = new Date(startDate).getTime();
        const distance = countDownStartDate - now;
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // For countdown is finished
        if (distance < 0) {
            clearInterval(this.countDownId);
            this.setState({
                hours: 0,
                minutes: 0,
                expired: true
            });
            return;
        }
        this.setState({ hours, minutes, expired: false });
    };

    render() {
        const { hours, minutes, expired } = this.state;
        if (expired) {
            return <div className={styles.header__time}>Ended</div>;
        }
        return (
            <div className={styles.header__time}>
                <p className={styles.time__text}>Left: </p>
                <div>
                    {hours}
                    <span>:</span>
                </div>
                <div>
                    {minutes}
                </div>
            </div>
        );
    }
}

export default Timer;