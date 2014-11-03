var App = {};

App.switchOrigin = function() {
    var origin = "http://jollytoad.github.io/iframe-url-tracking-prototype/embedded/index.html";

    App.iframe1.src = origin;
    App.iframe2.src = origin;
};

App.setUrlFromIframe = function(iframe, url) {
    url.innerText = iframe.contentWindow.location;
};

window.onload = function() {

    App.iframe1 = document.getElementById("iframe1");
    App.url1 = document.getElementById("url1");

    App.iframe2 = document.getElementById("iframe2");
    App.url2 = document.getElementById("url2");

    // Fetch iframe1 url using interval
    setInterval(function() {
        App.setUrlFromIframe(App.iframe1, App.url1);
    }, 1000);

    // Fetch iframe2 url using onload event
    App.setUrlFromIframe(App.iframe2, App.url2);
    App.iframe2.onload = function() {
        App.setUrlFromIframe(App.iframe2, App.url2);
    };
};
