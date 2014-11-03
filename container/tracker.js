window.onload = function() {

    var iframe1 = document.getElementById("iframe1");
    var url1 = document.getElementById("url1");

    var iframe2 = document.getElementById("iframe2");
    var url2 = document.getElementById("url2");

    function setUrlFromIframe(iframe, url) {
        url.innerText = iframe.contentWindow.location;
    }

    setInterval(function() {
        setUrlFromIframe(iframe1, url1);
//        setUrlFromIframe(iframe2, url2);
    }, 1000);

    setUrlFromIframe(iframe2, url2);
    iframe2.onload = function() {
        setUrlFromIframe(iframe2, url2);
    };
};
