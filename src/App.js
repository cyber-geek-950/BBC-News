import React from 'react';
import './App.css';
import image1 from './ministers.jpg';
import image2 from './golfer.jpg';
import image3 from './student.jpg';
import image4 from './ro.jpeg';
import image5 from './golf.jpg';
import image6 from './boxing.jpg';
import NewsItems from './components/NewsItems';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="news-wrapper">
            <div className="headings">
              <ul>
                <li><h2>News Headlines</h2></li>
                <li><h2>Sport Headlines</h2></li>
              </ul>
              <ul className="main-content">
                  
                <NewsItems myImage={image1} title={"Tory Leader hopefuls clash over Brexit"} subject={"UK"}/>
                <NewsItems myImage={image2} title={"Freed student activist calls on HK leader to resign"} subject={"China"}/>
                <NewsItems myImage={image3} title={"Woodland wins first major at US Open"} subject={"Golf"}/>
                <NewsItems myImage={image4} title={"Five questions for Chelsea after Sarri exit"} subject={"Chelsea"}/>
                <NewsItems myImage={image5} title={"Murray on rehab, mental health and escape rooms"} subject={"UK"}/>
                <NewsItems myImage={image6} title={"We might get golden heavyweight period"} subject={"Boxing"}/> 
                
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
