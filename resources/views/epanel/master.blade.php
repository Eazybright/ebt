<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@section('title'){{ config('app.name', 'Laravel') }}@show</title>

    <!-- Scripts -->
    <script src="{{mix('js/manifest.js')}}" defer></script>
    <script src="{{mix('js/vendor.js')}}" defer></script>
    <script src="{{mix('js/app.js')}}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com"> {{--
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css"> --}}

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet"> @yield('styles')
</head>

<body>
    <header class="uk-section uk-section-secondary uk-preserve-color uk-padding-remove uk-margin-remove">
        <nav class="uk-navbar-container uk-margin" uk-navbar>
            <div class="uk-navbar-center uk-flex uk-flex-column">
                <a class="uk-navbar-item uk-logo uk-hover-none" href="{{route('epanel')}}">
                    <h1 class="uk-heading-primary">{{ config('app.name', 'Laravel') }}</h1>
                </a>
                <div class="uk-flex uk-flex-row uk-flex-1">
                    {{-- @if (Route::currentRouteName() !== "epanel")
                    <div class="navbar-left">
                            <a href="{{url()->previous()}}" class="uk-button uk-button-danger uk-margin-right">Back</a>
                        </div>
                    @endif --}}
                    @auth('admin')
                    <div class="navbar-right">
                        <a href="{{route('epanel.logout')}}" class="uk-button uk-button-danger">Logout</a>
                    </div>
                    @endauth
                </div>

            </div>

        </nav>
    </header>
    <main class="" id="app">
        @yield('content')
    </main>
    <footer class="uk-tile uk-tile-secondary uk-padding-small">
        <p>An Electronic Testing App &copy; {{Carbon\Carbon::now()->year}} East. Victory</p>
    </footer>
</body>

</html>
