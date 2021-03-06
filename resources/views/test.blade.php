@extends('layouts.app')

@section('content')

<div class="container">
    <div class="card-columns">
        <div class="card">
            <img class="card-img-top img-fluid" src="//placehold.it/800x560" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">Card title that wraps to a new line</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        <div class="card card-block">
            <blockquote class="card-blockquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>
                    <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
                </footer>
            </blockquote>
        </div>
        <div class="card">
            <img class="card-img-top img-fluid" src="//placehold.it/800x400" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card card-block card-inverse card-primary text-xs-center">
            <blockquote class="card-blockquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                <footer>
                    <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
                </footer>
            </blockquote>
        </div>
        <div class="card card-block text-xs-center">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <div class="card">
            <img class="card-img img-fluid" src="//placehold.it/800x600" alt="Card image">
        </div>
        <div class="card card-block text-xs-right">
            <blockquote class="card-blockquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>
                    <small class="text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
            </blockquote>
        </div>
        <div class="card card-block">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</div>

@endsection