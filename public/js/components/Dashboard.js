import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
let profile = require('../../profile-test.json');

export default class Dashboard extends React.Component{
render(){
    console.log(profile);
return(
            <div class="container">
    <div class="row">
    
        <Tile image="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" name='Profile' line1={profile.user.displayName} line2={profile.user.age}/>
        <Tile image="http://lh5.ggpht.com/0rLLruZKLq5CJpF6J4Rrvet5JpGW6mrGQqeullt5ul3bVRB73r4sDTNiynMx3vHrLQc=w100" name='Pressure' line1={"Blood Pressure:"} line2={profile.user.age}/>
        <Tile image="https://png.icons8.com/?id=815&size=2x" name='Steps' line1={"Steps:"} line2={profile.user.age}/>
        <Tile image="http://is3.mzstatic.com/image/thumb/Purple71/v4/82/be/25/82be2555-1152-7172-472b-ddb83420683f/source/100x100bb.jpg" name='Calories' line1={"Calories Burnt:"} line2={profile.user.age}/>
        <HeartRate/>
        <Tile image="https://png.icons8.com/?id=20884&size=2x" name='Goals' line1={"Goals Met:"} line2={profile.user.age}/>
        <Tile image="https://png.icons8.com/?id=10787&size=2x" name='Sleep' line1={"Total Sleep:"} line2={profile.user.age}/>
        <Tile image="https://www.southwestphotobooths.co.uk/sites/default/files/styles/extras_square/public/Distance-Travel-Icon_1.png?itok=d4rzJQaP" name='Distance' line1={"Distance Travelled:"} line2={profile.user.age}/>
        <Tile image="http://meadowbrookglitter.com/wp-content/uploads/Water-Safe-Icon.png" name='Water' line1={"Water Consumption:"} line2={profile.user.age}/>
        <Tile image="http://blog.cadimage.com/wp-content/uploads/2014/11/Tool_Stairs-2.png" name='Floors' line1={"Total Floors:"} line2={profile.user.age}/>
        

        <div class="col-sm-3 col-lg-3">
            <div class="col-sm-12 col-lg-15">
                <div class="block">
                    <btitle>Last Sync</btitle>
                    <hr/>

                    <div class="text-center">
                        <i class="fa fa-refresh fa-1x" aria-hidden="true"></i>
                        <p>29/10/2017 - 7:48 pm</p>
                    </div>
                </div>
            </div>

            
            <div class="mt-2 col-sm-12 col-lg-15">
                <div class="block">
                    <btitle>Settings</btitle>
                    <hr/>
                    <div class="text-center">
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
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
