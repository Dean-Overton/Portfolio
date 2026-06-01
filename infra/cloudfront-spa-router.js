function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Asset request (has a file extension) — pass through unchanged.
    var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);
    if (lastSegment.indexOf('.') !== -1) {
        return request;
    }

    // Directory request — serve the prerendered index.html for that route.
    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
    } else {
        request.uri = uri + '/index.html';
    }

    return request;
}
