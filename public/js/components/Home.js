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
	                    
	                    <div class="col" align="center">
	                        <i class="fa fa-user fa-4x" aria-hidden="true"></i>
	                    </div>
	                    <div class="col" align="center">
	                        <i class="animated infinite jackInTheBox fa fa-heart fa-4x" aria-hidden="true"></i>
	                    </div>
	                    <div class="w-100"></div>
	                    <div class="col" align="center">
			                    <div class="col" align="center">
			                        <i class="fa fa-user-md fa-4x" aria-hidden="true"></i>
			                    </div>
	                        <button type="button" class="btn btn-secondary btn-lg">Doctor</button>
	                    </div>
	                    <div class="col" align="center">
			                    <div class="col" align="center">
			                        <i class="fa fa-user-md fa-4x" aria-hidden="true"></i>
			                    </div>
	                        <button type="button" class="btn btn-secondary btn-lg">Patient</button>
	                    </div>
	                    <div class="col" align="center">
			                    <div class="col" align="center">
			                        <i class="fa fa-user-md fa-4x" aria-hidden="true"></i>
			                    </div>
	                        <button type="button" class="btn btn-secondary btn-lg">Carer</button>
	                    </div>
	                </div>
	            </center>
            </div>
        );
}
}