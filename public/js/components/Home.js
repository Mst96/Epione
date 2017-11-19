import React from 'react';
export default class Home extends React.Component{
render(){
return(
            <div>
	            <center>
	                <div id="icon-name-">
	                    <img src="icon/epione-full-logo.png" alt="Epione"/>
	                </div>
	                <div class="row mt-5">
	                    <div class="w-100"></div>
	                    <div class="col" align="center">
			                    <div class="col" align="center">
			                        <i class="fa fa-user-md fa-4x" aria-hidden="true"></i>
			                    </div>
	                        <a href='/patients'><button type="button" class="btn btn-secondary btn-lg">Doctor</button></a>
	                    </div>
	                    <div class="col" align="center">
			                    <div class="col" align="center">
			                        <i class="fa fa-user fa-4x" aria-hidden="true"></i>
			                    </div>
	                        <a href='/login'><button type="button" class="btn btn-secondary btn-lg">Patient</button></a>
	                    </div>
	                    <div class="col" align="center">
			                    <div class="col" align="center">
			                        <i class="fa fa-heart fa-4x" aria-hidden="true"></i>
			                    </div>
	                        <a href='/patients'><button type="button" class="btn btn-secondary btn-lg">Carer</button></a>
	                    </div>
	                </div>
	            </center>
            </div>
        );
}
}