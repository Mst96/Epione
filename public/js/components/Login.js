import React from 'react';
export default class Login extends React.Component{
render(){
return(
       <div class="container">
    			<div class="row">
        		<div class="row">
            	<div class="col-md-8 col-md-offset-1">            
                <div>
                    <a href="api/login/google" class="btn btn-block btn-lg btn-social btn-google social-button">
                        <span class="fa fa-google"></span> login with Google
                    </a>
                </div>  

                <div>
                    <a href="api/login/-/fitbit" class="btn btn-block btn-lg btn-social btn-google social-button">
                        <span class="fa fa-google"></span> login with Fitbit
                    </a>
                </div>             
            	</div>
        	</div>
    		</div>
			</div>
      );
}
}