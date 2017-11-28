@extends('layouts.app')

@section('head_tags')
<script type="text/javascript" src="js/smoothie.js"></script>

<script type="text/javascript">

    var min = 75, max = 90; 

      // Randomly add a data point every 500ms
      var random = new TimeSeries();
      setInterval(function() {
        random.append(new Date().getTime(), Math.floor(Math.random() * (max - min + 1) + min));
      }, 500);

      function createHData() {
        var chart = new SmoothieChart({interpolation:'linear', responsive: true});
        chart.addTimeSeries(random, { lineWidth:4, strokeStyle:'#00ff00' });
        chart.streamTo(document.getElementById("ecg-heart"), 500);
      }
</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
    function refreshData(){
        document.getElementById("spinner-refresh").className = "loader";
        document.getElementById("refresh_but").className = "";

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type:'GET',
            url:'/-/dashboard',
            dataType : 'json',
            data: {},
            success:function(data){
                $("#fullname").html(data.data_p.user.fullName);
                $("#last-sync").html(data.lastSyncDate);

                document.getElementById("spinner-refresh").className = "";
                document.getElementById("refresh_but").className = "fa fa-refresh fa-1x";
            }
        });
    }
</script>
@endsection

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
                    <img src="{{ $data_p->user->avatar }}" alt="Profile_Image" class="img-thumbnail">
                </div>
                <p id="fullname">{{ $data_p->user->fullName }}</p>
                <p>email@emial.com</p>
                <!--https://static0.fitbit.com/images/profile/defaultProfile_100_male.png-->
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

                <!--<div class="heart-rate">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73" enable-background="new 0 0 150 73" xml:space="preserve">
                        <polyline fill="none" stroke="#009B9E" stroke-width="3" stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486" />
                    </svg>
                    <div class="fade-in"></div>
                    <div class="fade-out"></div>
                </div>-->

                <canvas id="ecg-heart" style="width:100%"></canvas>
                <!--<div>
                        <canvas id="ecg-heart" style="width:100%"></canvas>
                </div>-->

            </div>
        </div>

        <!-- Last Sync and Settings Block -->
        <div class="col-sm-4 col-lg-4">
            <div class="col-sm-12 col-lg-12">
                <div class="block">
                    <btitle>Last Sync</btitle>
                    <hr>
                    <div class="text-center">
                        <button type="button" class="btn btn-secondary" onclick="refreshData()">
                            <div id="spinner-refresh"></div>
                            <i id="refresh_but" class="fa fa-refresh fa-1x" aria-hidden="true"></i>
                        </button>                        
                        <p id="last-sync">{{ $lastSyncDate }}</p>
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
    
        <!-- Weight Block -->
        <div class="col-sm-3 col-lg-3">
            <div class="block">
                <btitle>Heart Rate</btitle>
                <hr>
                <div class="heart-num-block text-right">
                    <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
                    <p><bold>90</bold></p>
                </div>

                <h1 class="display-3">56kg</h1>
            </div>            
        </div>



        <div class="col-sm-3 col-lg-3">
            <div class="block">
                <btitle>Heart Rate</btitle>
                <hr>
                <div class="heart-num-block text-right">
                    <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
                    <p><bold>90</bold></p>
                </div>

                <h1 class="display-3">56kg</h1>
            </div>            
        </div>


        <div class="col-sm-3 col-lg-3">
            <div class="block">
                <btitle>Heart Rate</btitle>
                <hr>
                <div class="heart-num-block text-right">
                    <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
                    <p><bold>90</bold></p>
                </div>

                <h1 class="display-3">56kg</h1>
            </div>            
        </div>



        <div class="col-sm-3 col-lg-3">
            <div class="block">
                <btitle>Heart Rate</btitle>
                <hr>
                <div class="heart-num-block text-right">
                    <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
                    <p><bold>90</bold></p>
                </div>

                <h1 class="display-3">56kg</h1>
            </div>            
        </div>

    
    </div>
    <!-- End First Row -->


    <!-- Second Row -->
    <!--<div class="row">

         Weight Block 
        <div class="col-sm-3 col-lg-3">
            <div class="block">
                <btitle>Heart Rate</btitle>
                <hr>
                <div class="heart-num-block text-right">
                    <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
                    <p><bold>90</bold></p>
                </div>

                <h1 class="display-3">56kg</h1>
            </div>            
        </div>


    </div>-->

</div>

@endsection