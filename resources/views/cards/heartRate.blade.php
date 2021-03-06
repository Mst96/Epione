@push('scripts')
<script type="text/javascript" src="{{ asset('js/smoothie.js') }}"></script>

<script type="text/javascript">
    var min = 75, max = 80; 

    // Randomly add a data point every 500ms
    var random = new TimeSeries();
    setInterval(function() {
        random.append(new Date().getTime(), Math.floor(Math.random() * (max - min + 1) + min));    
        var data = random.data;
        document.getElementById("heart-num").innerHTML = data[data.length - 1][1];    
    }, 500);

    function createHData() {
        var chart = new SmoothieChart({interpolation:'linear', responsive: true});
        chart.addTimeSeries(random, { lineWidth:4, strokeStyle:'#00ff00' });        
        chart.streamTo(document.getElementById("ecg-heart"), 500);
    }
</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
@endpush

<div class="card">
    <div class="card-block">
        <h4 class="card-title">Heart Rate</h4>
        <hr>
        <div class="heart-num-block text-right">
            <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
            <p id="heart-num">90</p>
        </div>
        <canvas id="ecg-heart" style="width:100%"></canvas>
    </div>
</div>