import React, { Component } from 'react';
import stockimage from '../assets/stockimage.png';
import './Video.css';
import JSON from '../videos.json';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: JSON
    };
  }

  render() {
    return (
      <div className="video">
        <div className="videoTop">
          {this.state.videos.map((item, index) => (
            <div className="videoGroup">
              <div className="videoLeft">
                <div className="videoHeading">{item.title}</div>
                <div className="videoText">{item.description}</div>
              </div>
              <div className="videoRight">
                <div className="videoStack">
                  <a target="_new" href={item.url}>
                    <img
                      className="stockimage"
                      src={stockimage}
                      alt={'stockimage'}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="videoHeading">
          Ready to have your cake and eat it too?
        </div>
        <div className="videoText">
          Start by designing the experience in mind. We'll guide you through
          each step. If your experience meets the quality standards, you'll hear
          more about what's next
        </div>
      </div>
    );
  }
}

export default Video;
