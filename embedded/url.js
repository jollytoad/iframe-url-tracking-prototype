window.onload = function() {
    document.getElementById("url").innerText = window.location;

    console.log(parent);

    if (parent) {
        // TODO: Should pass a known targetOrigin rather than a wildcard

        parent.postMessage({ url: window.location.toString() }, "*");
    }
};
