import React from 'react';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/ironhack-logo-xs.png';
import icon6 from '../images/menu-top-xs.png';


function LandingPage(){
    return (
        <section>

            <div>
                <img className='image' alt="icon1" src={icon1}>
                </img>
            </div>
            <div>
                <img className='image' alt='icon2' src={icon2}></img>
            </div>

            <p>Say Hello to</p>
            <p>ReactJS</p>
            <br></br>
            <p>You will learn how to use</p>
            <p>the most popular frontend library</p>
            <p>and become a super Ninja developer.</p>

            <button>Awesome!</button>

            <div>
                <img className='image' alt='icon3' src={icon3}></img>
            <h4>Declarative</h4>
            <h6>React makes it painless to create interactive UI's.</h6>
           </div>

           <div>
            <img className='image' alt='icon4' src={icon4}>
            </img>
            <h4>Components</h4>
            <h6>Build encapsulated components that manage their state.</h6>
           </div> 

           <div> 
           <img className='image' alt='icon5' src={icon5}></img> 
           <h4>Single-Way</h4>
           <h6>A set of immutable values are passed to the components.</h6>
           </div>

           <div>
            <img className='image' alt='icon6' src={icon6}></img>

           <h4>JSX</h4>
           <h6>Statistically-typed, designed to run on modern browsers.</h6>
           </div>
        </section>
    )
}

export default LandingPage;