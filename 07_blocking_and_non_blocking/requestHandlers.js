// request_handlers.js

function start() {
    console.log("Request handler 'start' was called.");

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        var i = 1000;
        var currentTime = startTime;
        while (currentTime < startTime + milliSeconds) {
            if (currentTime > startTime + i) {
                console.log(i/1000);
                i += 1000;
            }

            currentTime = new Date().getTime();
        }
    }

    sleep(10000);
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;