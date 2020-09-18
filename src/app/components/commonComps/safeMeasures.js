import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdCardTravel } from "react-icons/md";


export default function SafeMeasures() {
    return (
        <div className="constainer-fluid d-flex justify-content-center align-items-center safety-lines">
            <div className="row">
                <div className="col-5 d-flex justify-content-center align-items-center">
                    <h1>Let’s travel safely together</h1>
                </div>
                <div className="col">
                    <AiFillSafetyCertificate size={80} />
                    <h4>Stay healthy</h4>
                    <p>We’ve established enhanced cleaning protocols, developed by experts,
                        for both Stays and Experiences to help keep you safe on every trip.</p>
                </div>
                <div className="col">
                    <MdCardTravel size={80} />
                    <h4>Travel responsibly</h4> 
                    <p>We’ve established enhanced cleaning protocols, developed by experts,
                        for both Stays and Experiences to help keep you safe on every trip.</p>
                </div>
                <div className="col">
                    <AiFillSafetyCertificate size={80} />
                    <h4>Stay healthy</h4>
                    <p>We’ve established enhanced cleaning protocols, developed by experts,
                        for both Stays and Experiences to help keep you safe on every trip.</p>
                </div>
            </div>

        </div>
    )
}
