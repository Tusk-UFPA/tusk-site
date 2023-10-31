var _paq = window._paq = window._paq || [];
_paq.push(["setDoNotTrack", true]);
_paq.push(["disableCookies"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
_paq.push(['enableJSErrorTracking']);
(function() {
    var analyticsUrl = window.ENVIRONMENT.analyticsUrl;
    if (analyticsUrl != null)
    {
        var siteId = window.ENVIRONMENT.analyticsSiteId;
        _paq.push(['setTrackerUrl', analyticsUrl+'/matomo.php']);
        _paq.push(['setSiteId', siteId]);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.src=analyticsUrl+'/matomo.js'; s.parentNode.insertBefore(g,s);
    }
})();
