import React from 'react';
import styles from './Event.module.css';
import {Link} from 'react-router-dom';
import camelCase from 'camelcase';
import cx from 'classnames';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
function Event(props){
    let event = camelCase(props.event);
    let hoursMinSecs = {
        hours: props.hour,
        min: props.min,
        sec: props.sec
    }
    return(
            
            <div className={"col " + cx(styles.container, styles.event)}>
                <div className={styles.card}>
                    <h2>{props.event}</h2>
                    <CountDownTimer hoursMinSecs={hoursMinSecs}/>
                    {/* <p>{props.content}</p> */}
                
                        <Link to={"/events/"+event} >
                        <div className={cx(styles.right)}>
                            <i className="fa fa-arrow-right" ></i>
                            </div>
                        </Link>
                   
                    
                    <div className={styles.pic}></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className={styles.social}>
                    <i className="fa fa-facebook-f"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-github"></i>
                    </div>
                    <Link to="/events/techWars">
                        <button>
                        </button>
                    </Link>
                    
                </div>
            </div>
    )
}

export default Event;