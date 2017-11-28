<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> {{ config('app.name', 'Epione') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/font-awesome.min.css') }}" rel="stylesheet">
    <!--<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">-->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        
    <!-- Theme CSS -->
    <link href="{{ asset('css/style-1.css') }}" rel="stylesheet">

    <!-- Flaticons addons -->
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/flaticon/flaticon.css') }}"> 

    <!-- Additional Scripts -->
    @stack('scripts')
</head>
<body onload="createHData()">
    <!--<nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header" style="border: 1px solid red">
                <a class="navbar-brand" href="{{ url('/') }}" style="border: 1px solid yellow">
                    <img src="{{ asset('icon/epione-brand-logo.png') }}" width="44" height="32" alt="Epione" />
                </a>
                <div class="text-right">
                    <a href="{{ url ('/logout')}}"><span class="fa fa-sign-out fa-1x" aria-hidden="true"></span> Logout</a>
                </div> 
            </div>                
        </div>
    </nav>-->

    <!--<nav class="navbar navbar-toggleable-md bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="{{ url('/') }}">
            <img src="{{ asset('icon/epione-brand-logo.png') }}" width="44" height="32" alt="Epione" />
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li>
                    <a href="{{ url ('/logout')}}"><span class="fa fa-sign-out fa-1x" aria-hidden="true"></span> Logout</a>
                </li>
            </ul>  
        </div>
    </nav>-->

  


    <div id="app">   
        <div class="container">
            <nav class="navbar navbar-toggleable-md">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="{{ url('/') }}">
        <img src="{{ asset('icon/epione-brand-logo.png') }}" width="44" height="32" alt="Epione" />
    </a>
    <!--<ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricingg</a>
      </li>
    </ul>-->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a href="{{ url ('/logout')}}"><span class="fa fa-sign-out fa-1x" aria-hidden="true"></span> Logout</a>
        </li>
    </ul>
  </nav>
        </div>

        @yield('content')
    </div>

    @stack('modals')

    @stack('end_scripts')

    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
</body>
</html>
