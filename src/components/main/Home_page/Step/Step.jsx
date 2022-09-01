import React from "react";
import "./Step.css"
import Bullet_1 from '../../../../icons/Bullet_1.svg'
import Bullet_2 from "../../../../icons/Bullet_2.svg"
import Charlie_puth from "../../../../img/Charlie_Puth.jpg"
 

const Step = () => {
    return (
        <div className="step">
          <div className="step_1">
             <div className="step_1__number_1">STEP 1</div>
             <div className="step_1__header">Connect Your Content</div>
             <div className="step_1__header_text">Bring all of your content together and get a Homepage that
                 automatically updates whenever you create anywhere online.</div>
             <button className="step_1__button_1">View Avaliable Sources</button>
        </div>
        <div className="your_homepage">
            <div className="your_homepage__content">

              <div className="your_homepage__content__your">
                 <div className="your_homepage__content__your-homepage">Your Homepage</div>
              </div>
                
                <div className="your_homepage__content__your-content">Your Content.</div>

                <div className="your_homepage__content__all-in_one-spot">
                   <div className="your_homepage__content__all-in">All in</div>
                   <div className="your_homepage__content__one-spot">One Spot</div>
                </div>

                <div className="your_homepage__content__option_1">
                  <img className="option_1__bullet_1" src={Bullet_1} alt='1'></img>
                  <div className="option_1__text">Bring all of your content together into one homepage.</div>
                </div>

                <div className="your_homepage__content__option_2">
                    <img className="option_2__bullet_2" src={Bullet_2} alt="2"></img>
                    <div className="option_2__text">Your page automatically updates whenever you create.</div>
                </div>

                <div className="your_homepage__content_buttons">
                   <button className="your_homepage__content_buttons__start-btn">Get Started Now</button>
                   <button className="your_homepage__content_demo-btn">View A Demo</button>
                </div>
                
                
            </div>
            <img className="your_homepage__screen_charli-puth" src={Charlie_puth} alt="Charlie Puth"></img>

        </div>
        

        </div>
    )
}

export default Step;