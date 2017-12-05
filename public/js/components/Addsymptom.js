import React from 'react';
import Tile from "../components/includes/Tile";
import { Link } from "react-router";

import Fetch from 'react-fetch';
let profile = require('../../profile-test.json');

export default class Addsymptom extends React.Component{
render(){
    console.log(profile);

    
return(
            <div class="container">
    <div class="row">
    
            
            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Arms & Legs</btitle>
                   
                    <hr/>
                    <div class="text-center">
                    
                    <select name="armleg" size="10">
                    <option>Ankle pain</option>
                    <option>Ankle red & hot</option>
                    <option>Ankle stiffness</option>
                    <option>Ankle swelling</option>
                    <option>Elbow pain</option>
                    <option>Elbow red & hot</option>
                    <option>Elbow stiffness</option>
                    <option>Elbow swelling</option>
                    <option>Finger discolouration</option>
                    <option>Finger pain</option>
                    <option>Finger red & hot</option>
                    <option>Finger stiffness</option>
                    <option>Finger swelling</option>
                    <option>Finger tingling</option>
                    <option>Finger numb</option>
                    <option>Foot cramps</option>
                    <option>Foot numb</option>
                    <option>Foot odor</option>
                    <option>Foot pain</option>
                    <option>Foot red & hot</option>
                    <option>Foot stiffnes</option>
                    <option>Foot swelling</option>
                    <option>Foot tingling</option>
                    <option>Hand cramps</option>
                    <option>Hand red & hot </option>
                    <option>Hand stiffness</option>
                    <option>Hand swelling</option>
                    <option>Hand tingling</option>
                    <option>Hand numb</option>
                    <option>Heel pain</option>
                    <option>Hip pain</option>
                    <option>Hip stiffness</option>
                    <option>Knee pain</option>
                    <option>Knee red & hot</option>
                    <option>Knee stiffness</option>
                    <option>Knee swelling</option>
                    <option>Leg cramps</option>
                    <option>Leg pain</option>
                    <option>Leg swelling</option>
                    <option>Leg restless</option>
                    <option>Pins & needles</option>
                    <option>Wrist pain</option>
                    <option>Wrist red & hot</option>
                    <option>Wrist stiffness</option>
                    <option>Wrist swelling</option>
                    </select>
                    
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Back & Shoulders</btitle>
                   
                    <hr/>
                    <div class="text-center">
                    <select name="backshoulders" size="10">
                    <option>Back stiffness</option>
                    <option>Low back pain</option>
                    <option>Middle back pain</option>
                    <option>Neck pain</option>
                    <option>Neck stiffness</option>
                    <option>Shoulder pain</option>
                    <option>Shoulder stiffness</option>
                    <option>Shoulder swelling</option>
                    </select>
                    


                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Digestive System</btitle>
                   
                    <hr/>
                    <div class="text-center">
                    <select name="digestive" size="10">
                    <option>Abdominal pain</option>
                    <option>Acid reflux</option>
                    <option>Bloated</option>
                    <option>Blood in stool</option>
                    <option>Bowel movement pain</option>
                    <option>Bowel movement urgency</option>
                    <option>Burping</option>
                    <option>Constipation</option>
                    <option>Diarrhea</option>
                    <option>Difficulty swallowing</option>
                    <option>Dry heaves</option>
                    <option>Flatulence</option>
                    <option>Gas pains</option>
                    <option>Gassy</option>
                    <option>Heartburn</option>
                    <option>Hungry</option>
                    <option>Indegestion</option>
                    <option>Loose stool</option>
                    <option>Low appetite</option>
                    <option>Mucus in stool</option>
                    <option>Nausea</option>
                    <option>Stomach ache</option>
                    <option>Thirsty</option>
                    <option>Upset stomach</option>
                    <option>Vomiting</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Emotional Health</btitle>
                    
                    <hr/>
                    <div class="text-center">
                    <select name="emotional" size="10">
                    <option>Agitation</option>
                    <option>Anger</option>
                    <option>Anxiety</option>
                    <option>Apathy</option>
                    <option>Depressed</option>
                    <option>Fidgety</option>
                    <option>Grouchy</option>
                    <option>Impulsive</option>
                    <option>Irritable</option>
                    <option>Low self esteem</option>
                    <option>Mood swings</option>
                    <option>Nervous</option>
                    <option>Racing thoughts</option>
                    <option>Restless</option>
                    <option>Sad</option>
                    <option>Self loathing</option>
                    <option>Stressed</option>
                    <option>Tense</option>
                    <option>Unhappy</option>
                    <option>Worried</option>
                    </select>
                    
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                   
                </div>
            </div>

             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <center>
                    <btitle>Eyes & E.N.T </btitle>
                   
                    <hr/>
                    <div class="text-center">
                    <select name="eyesent" size="10">
                    <option>Difficulty hearing</option>
                    <option>Difficulty swallowing</option>
                    <option>Double vision</option>
                    <option>Ear pain</option>
                    <option>Earache</option>
                    <option>Ear ringing</option>
                    <option>Eye blurry</option>
                    <option>Eye Burning</option>
                    <option>Eye dry</option>
                    <option>Eye pain</option>
                    <option>Eye twitch</option>
                    <option>Eye itchy</option>
                    <option>Hoarseness</option>
                    <option>Light sensitivity</option>
                    <option>Nasal congestion</option>
                    <option>Nosebleed</option>
                    <option>Nose runny</option>
                    <option>Nose stuffy</option>
                    <option>Outer ear pain</option>
                    <option>Smell desensitivity</option>
                    <option>Smell sensitivity</option>
                    <option>Throat itchy</option>
                    <option>Throat sore</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

               <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Face & Head</btitle>
                   
                    <hr/>
                    <div class="text-center">
                    <select name="facehead" size="10">
                    <option>Face pain</option>
                    <option>Face rash</option>
                    <option>Facial paralysis</option>
                    <option>Facial swelling</option>
                    <option>Headache</option>
                    <option>Jaw pain</option>
                    <option>Jaw stiffness</option>
                    <option>Migraine</option>
                    <option>Migraine w aura</option>
                    <option>Puffy face</option>
                    <option>Sinus congestion</option>
                    <option>Sinus pain</option>
                    <option>Swollen glands in neck</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Heart</btitle>
                   
                    <hr/>
                    <div class="text-center">
                    <select name="heart" size="10">
                    <option>Chest pain</option>
                    <option>Chest tightness</option>
                    <option>Heart palpitations</option>
                    <option>Irregular heartbeat</option>
                    <option>Rapid heartbeat</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Oral & Speech</btitle>
                    
                    <hr/>
                    <div class="text-center">
                    <select name="oralspeech" size="10">
                    <option>Bad breath</option>
                    <option>Canker sores</option>
                    <option>Changes in taste</option>
                    <option>Difficulty speaking</option>
                    <option>Gums bleeding</option>
                    <option>Gums painful</option>
                    <option>Mouth dry</option>
                    <option>Mouth sores</option>
                    <option>Slurred speech</option>
                    <option>Taste desensitivity</option>
                    <option>Taste sensitivity</option>
                    <option>Tongue pain</option>
                    <option>Tooth pain</option>
                    </select>
                    
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Respiratory</btitle>
                   
                    <hr/>
                    <div class="text-center">
                    <select name="respiratory" size="10">
                    <option>Cough dry</option>
                    <option>Cough productive</option>
                    <option>Difficulty breathing</option>
                    <option>Hiccups</option>
                    <option>Rapid breathing</option>
                    <option>Shortness of breath</option>
                    <option>Uncomfortable breathing</option>
                    <option>Wheezing</option>
                    <option>Yawning excessively</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

              <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Skin, Hair & Nails</btitle>
                    
                    <hr/>
                    <div class="text-center">
                    <select name="skinhairnails" size="10">
                    <option>Acne</option>
                    <option>Hair loss</option>
                    <option>Hives</option>
                    <option>Itchy</option>
                    <option>Rash</option>
                    <option>Skin sensitive to touch</option>
                    <option>Sun sensitivity</option>
                    <option>Sweaty palms</option>
                    <option>Thinning hair</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Sleep & Energy</btitle>
                    
                    <hr/>
                    <div class="text-center">
                    <select name="sleepenergy" size="10">
                    <option>Bad dreams</option>
                    <option>Daytime drowsiness</option>
                    <option>Daytime sleepiness</option>
                    <option>Difficulty falling asleep</option>
                    <option>Difficulty staying asleep</option>
                    <option>Exhaustion</option>
                    <option>Fatigue</option>
                    <option>Insomnia</option>
                    <option>Low energy</option>
                    <option>Night sweats</option>
                    <option>Nightmares</option>
                    <option>Unrefreshing sleep</option>
                    <option>Unsettled sleep</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Thinking & Balance</btitle>
                    
                    <hr/>
                    <div class="text-center">
                    <select name="thinkingbalance" size="10">
                    <option>Absent minded</option>
                    <option>Amnesia</option>
                    <option>Brain fog</option>
                    <option>Clumsiness</option>
                    <option>Confusion</option>
                    <option>Difficulty concentrating</option>
                    <option>Distractible</option>
                    <option>Dizziness</option>
                    <option>Forgetful</option>
                    <option>Poor hand/eye coordination</option>
                    <option>Uncoordinated</option>
                    <option>Unsteady on feet</option>
                    <option>Vertigo</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

              <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Urinary/Reproductive</btitle>
                  
                    <hr/>
                    <div class="text-center">
                    <select name="urinaryreproductive" size="10">
                    <option>Bladder pain</option>
                    <option>Blood in urine</option>
                    <option>Breast tenderness</option>
                    <option>Dark urine</option>
                    <option>Erectile dysfunction</option>
                    <option>Frequent urination</option>
                    <option>Heavy period</option>
                    <option>Hot flashes</option>
                    <option>Incomplete urination</option>
                    <option>Low sex drive</option>
                    <option>Menstrual cramps</option>
                    <option>Morning sickness</option>
                    <option>Painful urination</option>
                    <option>Urgent urination</option>
                    <option>Urinary incontinence</option>
                    <option>Vaginal discharge</option>
                    </select>
                    
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <btitle>Whole Body</btitle>
                   
                    <hr/>
                    <div class="text-center">
                    <select name="wholebody" size="10">
                    <option>Chills</option>
                    <option>Fainting</option>
                    <option>Feeling too cold</option>
                    <option>Feeling too hot</option>
                    <option>Fever</option>
                    <option>Flushing</option>
                    <option>Involuntary movements</option>
                    <option>Joints red & hot (multiple)</option>
                    <option>Joints swelling (multiple)</option>
                    <option>Joints stiffness (multiple)</option>
                    <option>Muscle cramps</option>
                    <option>Muscle pain</option>
                    <option>Muscle spasm</option>
                    <option>Muscle tremors</option>
                    <option>Muscle twitch</option>
                    <option>Muscle weakness</option>
                    <option>Muscle stiffness</option>
                    <option>Seizure</option>
                    <option>Tremors</option>
                    <option>Whole body pain</option>
                    </select>
                    </div>
                    <button type="button" value ="emotional">Add Symptom</button>
                    </center>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                <center>
                    <Link to={'/Patient/dashboard'}>  <btitle>Back to Dashboard</btitle></Link>
                    </center>
                    <hr/>
                    <div class="text-center">
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>


                </div>
            </div>


 
        );
}


ComponentDidMount() {
// fetch('https://epione.oobazee.com/profile-test.json')
// .then(results =>{ 
//     return results.json();
// }).then(data =>{
//     let profile = data.results.map((item)=>{
//         return(
//             <div key={item.user.displayName}>
//             </div>
//             )
//     })
// })

}

}