window.onload = function() {
    document.getElementById("url").innerText = window.location;

    console.log(parent);

    if (parent) {
        parent.postMessage({ url: window.location.toString() }, "*");
    }
};
