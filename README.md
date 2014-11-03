Embedded application URL tracking
A proof of concept of an application embedding a another application in an iframe.

# The Problem

The container application wishes to track the URLs of the embedded application so that it can remember the location of
each embedded url when the user returns.

The embedded app is on different origins.

Once the user navigates away from the original page in the iframe, the container application no longer knows the URL of
the embedded app.

# The Solution

The embedded app will notify the container of it location when the URL changes.

postMessage will be used to communicate between the container and the embedded app.

# Tested

On Sauce Labs:

* Win 8.1 + IE 11 - works
* Win 8 + IE 10 - works
* Win 7 + IE 9 - doesn't work, appears that postMessage can only send strings
* Win 7 + IE 8 - doesn't work due to use of window.addEventListener
* Win 8.1 + FF 33 - works
* Win 8.1 + Chrome 38 - works
