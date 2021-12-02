import * as React from "react";
import bug from '../models/bug.jpg';

export default function About() {

return(
    <div className="mx-auto flex justify-content-center" style={{ width: '85%'}}>
    <h2>Relevant Info...</h2>
    <img alt="ladybug flying" src={bug} style={{ width: '85%' }}></img>
    <h6>Airlines would be so much better if there was an animal friendly one, that had 
        just as many flight options and cheap prices but you got to bring your pup, cat 
        or other furry love along. This may never happen, and flying with animals is 
        difficult, promting one to avoid travel in planes if possible.</h6>
    </div>
)

}