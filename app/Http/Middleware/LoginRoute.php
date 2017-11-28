<?php

namespace App\Http\Middleware;

use Closure;

class LoginRoute
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $users_type = array("Client", "Carer", "Doctor");

        // foreach ($users as $user){
        //     if ($request->user_type == $user)
        //         return $next($request);
        // }
       
        if (in_array($request->user, $users_type)) {
            return $next($request);
        } 

        $error_message = 'Please select a user type';

        return redirect('/')->with('error', $error_message);    
    }
}
