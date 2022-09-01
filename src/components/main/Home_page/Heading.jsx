import React from "react";
import "./Heading.css";
import emoji_smile from "../../../icons/Smile_emoji.svg";
import emoji_happy from "../../../icons/Happy_emoji.svg";
import emogi_party from "../../../icons/Party_emoji.svg";
import img_dot from "../../../icons/Dot.svg";

const Heading = () => {
  return (
    <div className="section_1">
      <div className="heading">
        <div className="heading__text-own">Own your audience.</div>
        <div className="heading__text-gradient">So you don't lose them.</div>
      </div>
      <div className="button-heading-counter">
        <div className="button-heading-counter__heading-text">
          Turn your audience into email and text message subscribers.
        </div>
        <div className="button-heading-counter__buttons">
          <button className="buttons__get_started_now">Get Started Now</button>
          <button className="buttons__view_a_demo">View A Demo</button>
        </div>
        <div className="button-heading-counter__counter">
          <img src={img_dot} alt="dot"></img>
          <div className="counter__numer-counter">1000+</div>
          <div className="counter__text">creators have already started</div>
        </div>
      </div>
      <div className="heading-why_creators_love_marico">
        <div className="why_creators_love_marico">Why Creators Love Marico</div>
        
        
        <div className="reduced-lower-more">
          <div className="reduced-lower-more__reduced-anxiety">
            <div className="reduced-anxiety__emoji-heading">
              <img
                className="reduced-anxiety__smile-emoji"
                src={emoji_smile}
                alt="улыбка"
              ></img>
              <div className="reduced-anxiety__heading">Reduced Anxiety</div>
            </div>
            <div className="reduced-anxiety__text">
              Never worry about losing your audience.
            </div>
          </div>

          <div className="reduced-lower-more__lower-workload">
            <div className="lower-workload__emoji-heading">
              <img
                className="lower-workload__emoji_happy"
                src={emoji_happy}
                alt="emoji_happy"
              ></img>
              <div className="lower-workload__heading">Lower Workload</div>
            </div>
            <div className="lower-workload__text">
              Just share one link. We'll handle the rest.
            </div>
          </div>
          <div className="reduced-lower-more__more-time">
            <div className="more-time__emoji-heading">
              <img
                className="more-time__emoji-party"
                src={emogi_party}
                alt="emogi_party"
              ></img>
              <div className="more-time__heading">More Time</div>
            </div>
            <div className="more-time__text">
              Spend less time on marketing tools
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Heading;
