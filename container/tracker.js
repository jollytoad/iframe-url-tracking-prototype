var App = {};

App.switchOrigin = function() {
    var origin = "https://jollytoad.github.io/iframe-url-tracking-prototype/embedded/index.html";

    App.iframe1.src = origin;
    App.iframe2.src = origin;
};

App.setUrl = function(url, location) {
    url.innerHTML = "";
    url.innerHTML = location;
};

window.onload = function() {

    App.iframe1 = document.getElementById("iframe1");
    App.url1 = document.getElementById("url1");

    App.iframe2 = document.getElementById("iframe2");
    App.url2 = document.getElementById("url2");

    // Fetch iframe1 url from a message event
    window.addEventListener("message", function(event) {
        console.log("message from ", event.origin, event.source, " -> ", event.data);

        // TODO: Should check event.origin is as expected

        if (event.source === App.iframe1.contentWindow && event.data.url) {
            console.log("set url from message");
            App.setUrl(App.url1, event.data.url);
        }
    });

    // Fetch iframe2 url using onload event
    App.setUrl(App.url2, App.iframe2.contentWindow.location);
    App.iframe2.onload = function() {
        console.log("set url from iframe location");
        App.setUrl(App.url2, App.iframe2.contentWindow.location);
    };
};
