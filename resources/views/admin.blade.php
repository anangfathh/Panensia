<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Panensia</title>
    <link rel="icon" href="{{ asset('assets/img/Panensia.png') }}">

    <!-- Prevent the demo from appearing in search engines -->
    <meta name="robots" content="noindex" />

    <!-- Simplebar -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/simplebar.min.css') }}">

    <!-- App CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/app.rtl.css') }}">

    <!-- Material Design Icons -->
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-material-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-material-icons.rtl.css') }}">

    <!-- Font Awesome FREE Icons -->
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-fontawesome-free.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-fontawesome-free.rtl.css') }}">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133433427-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "UA-133433427-1");
    </script>

    <!-- Facebook Pixel Code -->
    <script>
        !(function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) :
                    n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
        );
        fbq("init", "327167911228268");
        fbq("track", "PageView");
    </script>
    <noscript><img height="1" width="1" style="display: none"
            src="https://www.facebook.com/tr?id=327167911228268&ev=PageView&noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->

    <!-- Flatpickr -->
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-flatpickr.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-flatpickr.rtl.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-flatpickr-airbnb.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-flatpickr-airbnb.rtl.css') }}">

    <!-- Quill Theme -->
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-quill.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-quill.rtl.css') }}">

    <!-- Dropzone -->
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-dropzone.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-dropzone.rtl.css') }}">

    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-select2.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendor-select2.rtl.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendor/select2/select2.min.css') }}">
</head>

<div id="app">app.blade.php</div>
@vite('resources/js/app.js')


<!-- jQuery -->
<script src=" {{ asset('assets/vendor/jquery.min.js') }} "></script>

<!-- Bootstrap -->
<script src=" {{ asset('assets/vendor/popper.min.js') }} "></script>
<script src=" {{ asset('assets/vendor/bootstrap.min.js') }} "></script>

<!-- Simplebar -->
<script src=" {{ asset('assets/vendor/simplebar.min.js') }} "></script>

<!-- DOM Factory -->
<script src=" {{ asset('assets/vendor/dom-factory.js') }} "></script>

<!-- MDK -->
<script src=" {{ asset('assets/vendor/material-design-kit.js') }} "></script>

<!-- App -->
<script src=" {{ asset('assets/js/toggle-check-all.js') }} "></script>
<script src=" {{ asset('assets/js/check-selected-row.js') }} "></script>
<script src=" {{ asset('assets/js/dropdown.js') }} "></script>
<script src=" {{ asset('assets/js/sidebar-mini.js') }} "></script>
<script src=" {{ asset('assets/js/app.js') }} "></script>

<!-- App Settings (safe to remove) -->
<script src=" {{ asset('assets/js/app-settings.js') }} "></script>

<!-- Flatpickr -->
<script src=" {{ asset('assets/vendor/flatpickr/flatpickr.min.js') }} "></script>
<script src=" {{ asset('assets/js/flatpickr.js') }} "></script>

<!-- jQuery Mask Plugin -->
<script src=" {{ asset('assets/vendor/jquery.mask.min.js') }} "></script>

<!-- Quill -->
<script src=" {{ asset('assets/vendor/quill.min.js') }} "></script>
<script src=" {{ asset('assets/js/quill.js') }} "></script>

<!-- Dropzone -->
<script src=" {{ asset('assets/vendor/dropzone.min.js') }} "></script>
<script src=" {{ asset('assets/js/dropzone.js') }} "></script>

<!-- Select2 -->
<script src=" {{ asset('assets/vendor/select2/select2.min.js') }} "></script>
<script src=" {{ asset('assets/js/select2.js') }} "></script>

<script src=" {{ asset('assets/vendor/Chart.min.js') }} "></script>

<!-- UI Charts Page JS -->
<script src=" {{ asset('assets/js/chartjs-rounded-bar.js') }} "></script>
<script src=" {{ asset('assets/js/charts.js') }} "></script>

<script src=" {{ asset('assets/js/page.staff.js') }} "></script>
<script src=" {{ asset('assets/js/list.js') }} "></script>
<script src=" {{ asset('assets/vendor/list.min.js') }} "></script>

</html>
