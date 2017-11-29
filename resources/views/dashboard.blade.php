@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card-columns">

        <!-- User Profile Card  -->
        @include('cards.profile')

        <!-- Heart Monitor Card -->        
        @include('cards.heartRate')
        
        <!-- Sleep Monitor Card -->
        @include('cards.sleep')

        <!-- Weight Card -->
        @include('cards.weight')

        <!-- Last Sync Card -->
        @include('cards.lastSync')

        <!-- Settings Card -->
        @include('cards.settings')

    </div>
</div>
@endsection