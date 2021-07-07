<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>SFOX - Advanced Bitcoin Trading</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="icon" href="assets/images/favicon.ico?v=5">
    <style>
        #still-loading {
            width: 100%;
            height: 100%;
            text-align: center;
        }
        #still-loading>img {
            max-width: 100%;
            max-height: 100%;
            padding-top: 50px;
            z-index: 9999;
        }
        #still-loading>.progress {
            margin: auto;
        }
    </style>

    <base href="/" />
<meta name="sfox-web/config/environment" content="%7B%22modulePrefix%22%3A%22sfox-web%22%2C%22environment%22%3A%22production%22%2C%22baseURL%22%3A%22/%22%2C%22locationType%22%3A%22auto%22%2C%22quoteHost%22%3A%22https%3A//quotes.sfox.com/v1/partner/sfox/quote%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22_ENABLE_LEGACY_VIEW_SUPPORT%22%3Atrue%7D%2C%22APP%22%3A%7B%22name%22%3A%22sfox-web%22%2C%22version%22%3A%220.10.34+62222fff%22%7D%2C%22version%22%3A%22v1%22%2C%22siftscience%22%3A%22a19cc360a1%22%2C%22intercomAppId%22%3A%22em91ccn5%22%2C%22ember-plaid%22%3A%7B%22clientName%22%3A%22SFOX%22%2C%22product%22%3A%22auth%22%2C%22key%22%3A%220b041cd9e9fbf1e7d93a0d5a39f5b9%22%2C%22env%22%3A%22production%22%7D%2C%22ember-push%22%3A%7B%22key%22%3A%2256d6ac616fc99def7e32%22%2C%22authEndpoint%22%3A%22https%3A//api.sfox.com/v1/pusher/auth%22%7D%2C%22ember-facebook-pixel%22%3A%7B%22id%22%3A%22112400295786518%22%7D%2C%22ember-twitter-conversion-tracking%22%3A%7B%22id%22%3A%22ntntd%22%7D%2C%22socketio-domain%22%3A%22https%3A//api.sfox.com%22%2C%22host%22%3A%22https%3A//api.sfox.com%22%2C%22materializeDefaults%22%3A%7B%22modalIsFooterFixed%22%3Afalse%2C%22modalContainerId%22%3A%22materialize-modal-root-element%22%2C%22buttonIconPosition%22%3A%22left%22%2C%22loaderSize%22%3A%22big%22%2C%22loaderMode%22%3A%22indeterminate%22%2C%22dropdownInDuration%22%3A300%2C%22dropdownOutDuration%22%3A300%7D%2C%22exportApplicationGlobal%22%3Afalse%7D" />
<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');</script>
<script src='//platform.twitter.com/oct.js' type='text/javascript'></script>
    <link rel="stylesheet" href="assets/animate.min-178b651958ceff556cbc5f355e08bbf1.css" integrity="sha256-j+P6EZJVrbXgwSR5Mx+eCS6FvP9Wq27MBRC/ogVriY0= sha512-TyUaMbYrKFZfQfp+9nQGOEt+vGu4nKzLk0KaV3nFifL3K8n7lzb8DayTzLOK0pNyzxGJzGRSw78e8xqJhURJ3Q==" >
    <link rel="stylesheet" href="assets/sfox-web-84e7b2ab5ca285b764cbb97052819048.css" integrity="sha256-/9RgSMQK9xQvii1qcgki/7JElVs0vJjxH9FecSUiaNQ= sha512-aNtt2TwJXNPioUYS7+6mJpnysOtbbddl9wbE8iYTG3fWzob1+A105NHuF6t5mJeBz0bAYShd4U5noJYjs1Uaiw==" >

    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-52340393-1', 'auto');
    ga('send', 'pageview');

    </script>
    <script type="text/javascript">
        var _sift = window._sift = window._sift || [];
        (function() {
          function ls() {
            var e = document.createElement('script');
            e.type = 'text/javascript';
            e.async = true;
            e.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.siftscience.com/s.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(e, s);
          }
          if (window.attachEvent) {
            window.attachEvent('onload', ls);
          } else {
            window.addEventListener('load', ls, false);
          }
        })();
    </script>
    <script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;
    s.src='https://widget.intercom.io/widget/<INSERT APP_ID HERE>';
    var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
    </script>

    <script type="text/javascript">
      window.twttr = (function (d, s, id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src= "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
        return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
      }(document, "script", "twitter-wjs"));
    </script>

    
  </head>
  <body>
    <div id="still-loading">
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
        <img class="animated rubberBand" id="loading">
    </div>
    <script src="https://cdn.plaid.com/link/stable/link-initialize.js"></script>
<script src="//js.pusher.com/2.2/pusher.min.js"></script>

    <script src="assets/vendor-636321a0a85df2c9c82a17174a105180.js" integrity="sha256-u0FBUc4TwQfu5Hbf/tW69nKSyD8Okj9Yl2o8G1sEfH0= sha512-ldR6D8GUz4n8opG5J2PLRZrGfEXI8dL9Ja/bKnV26ppwkFu5wiigFiHf0lqVrFrjJ5NtcG4TK/jTfkxRv/v9vQ==" ></script>
    <script src="http://builds.emberjs.com/tags/v2.3.1/ember.prod.js"></script>
    <script src="https://cdn.ravenjs.com/3.16.1/ember/raven.min.js" crossorigin="anonymous"></script>
    <script>Raven.config("https://a430b0b044d245ec8c4d013c5f6f7030@sentry.io/190730").install();</script>
    <script src="assets/sfox-web-33b554efdd7bff402937207dee6574ab.js" integrity="sha256-m4trVuRnttZd82e5jg3Pzr/wToNPIMbZ6pSldGJL5l4= sha512-sU0m5MnMj7zNhLytdjMK4jMckoR3SOSsSbiGwvyau7NruEFP4A4zB8dIf7kzgst75eQEixskU1rh+8nGUxEqGw==" ></script>

    
  </body>
</html>
