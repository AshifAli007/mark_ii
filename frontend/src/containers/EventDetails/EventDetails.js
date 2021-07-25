import React from 'react';
import styles from './EventDetails.module.css';
import {Link} from 'react-router-dom';
import decamelize from 'decamelize'
function EventDetails(props){
    console.log(props);
    const eventName = decamelize(props.match.params.eventName);
    const words = eventName.split('_');
    console.log(words[0],words[1]);
    return(
        <div className={styles.EventDetails}>

            <div className={styles.fond}> <span className={styles.s1}>{words[0]}</span><span className={styles.s2}>{words[1]}</span></div>
            <div className={styles.card}>
            <div className={styles.thumbnail}><img className={styles.left} src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"/></div>
            <div className={styles.right}>
                <h1>Why you Need More Magnesium in Your Daily Diet</h1>
                <div className={styles.author}><img src="https://randomuser.me/api/portraits/men/95.jpg"/>
                <h2>Igor MARTY</h2>
                </div>
                <div className={styles.seperator}></div>
                <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
            </div>
                <h5>12</h5>
                <h6>JANUARY</h6>
            <ul>
                <li><i className="fa fa-eye fa-2x"></i></li>
                <li><i className="fa fa-heart-o fa-2x"></i></li>
                <li><i className="fa fa-envelope-o fa-2x"></i></li>
                <li><i className="fa fa-share-alt fa-2x"></i></li>
            </ul>
            <div className={styles.fab}><i className="fa fa-arrow-down fa-3x"> </i></div>
            </div>
            <div>
            </div>
            
        </div>
    );
}

export default EventDetails;