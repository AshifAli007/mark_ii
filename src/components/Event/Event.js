import React from 'react';
import './Event.css';

function Event(props){
    return(
        <div>
            <div class="container">
                <div className="card">
                    <h2>{props.event}</h2>
                    <i className="fa fa-arrow-right"></i>
                    <p>{props.content}</p>
                    <div className="pic"></div>
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
                    <div className="social">
                    <i className="fa fa-facebook-f"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-github"></i>
                    </div>
                    <button>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Event;