import React from 'react';
import styles from './Event.module.css';
import {Link} from 'react-router-dom';
function Event(props){
    console.log(styles);
    return(
        
            <div className={styles.container}>

         
          <h1 className={styles.card}>dfdfdf <i class="fa fa-facebook" ></i></h1>
                <div className={styles.card}>
                    <h2>{props.event}<i className="fa fa-github" ></i></h2>
                    
                    

                    <p>{props.content}</p>
                
                        <Link to="/events/techwars" >
                        <div className={styles.right}>
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
                    <Link to="/Events/techWars">
                        <button>
                        </button>
                    </Link>
                    
                </div>
            </div>
    )
}

export default Event;