@extends('layouts.app')

@section('content')

<div class="container">

    <!-- First Row -->
    <div class="row">
    
        <!-- User Profile Block -->
        <div class="col-sm-3 col-lg-3">
            <div class="block">
                <btitle>Profile</btitle>
                <hr>
                <div class="thumbnail">
                    <img src="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" alt="name" class="img-thumbnail">
                </div>
                <p>name</p>
                <p>email@emial.com</p>
            </div>
            
        </div>

        <!-- Heart Monitor Block -->
        <div class="col-sm-5 col-lg-5">
            <div class="block">
                <btitle>Heart Rate</btitle>
                <hr>
                <div class="heart-num-block text-right">
                    <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
                    <p><bold>90</bold></p>
                </div>

                <div class="heart-rate">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73" enable-background="new 0 0 150 73" xml:space="preserve">
                        <polyline fill="none" stroke="#009B9E" stroke-width="3" stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486" />
                    </svg>
                    <div class="fade-in"></div>
                    <div class="fade-out"></div>
                </div>

            </div>
        </div>

        <!-- Last Sync and Settings Block -->
        <div class="col-sm-4 col-lg-4">
            <div class="col-sm-12 col-lg-12">
                <div class="block">
                    <btitle>Last Sync</btitle>
                    <hr>
                    <div class="text-center">
                        <i class="fa fa-refresh fa-1x" aria-hidden="true"></i>
                        <p>29/10/2017 - 7:48 pm</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-2 col-sm-12 col-lg-12">
                <div class="block">
                    <btitle>Settings</btitle>
                    <hr>
                    <div class="text-center">
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    <!-- End First Row -->
</div>

@endsection