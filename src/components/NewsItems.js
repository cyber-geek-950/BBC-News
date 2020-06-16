import React from 'react'
import image1 from '../ministers.jpg';
import image2 from '../golfer.jpg';
import image3 from '../student.jpg';
import image4 from '../ro.jpeg';
import image5 from '../golf.jpg';
import image6 from '../boxing.jpg';

function NewsItems(props) {
    return (
            <li className="list-item">
                <img src={props.myImage} alt="image" />
                <div className="list-item-c">
                    <h3>{props.title}</h3>
                    <p>{props.subject}</p>
                </div> 
            </li>  
    )
}

export default NewsItems
