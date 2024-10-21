function getUTMQueryParams() {
    let key = 'utmQueryParams';
    let queryString = window.location.search;
    if (queryString.includes('utm') && sessionStorage.getItem(key) === null) {
        sessionStorage.setItem(key, queryString);
    }
    if (sessionStorage.getItem(key) !== null) {
        let els = document.querySelectorAll("a[href*='app.noform.ai']");
        queryString = sessionStorage.getItem(key);
        for (var i = 0, l = els.length; i < l; i++) {
            let el = els[i];
            el.href = el.href + queryString;
        }
    }
}

getUTMQueryParams();

let oldURL = window.location.href;
let addedQueryParams = false;

setInterval(function () {
    let newURL = window.location.href;

    if (oldURL !== newURL || !addedQueryParams) {
        getUTMQueryParams();
        oldURL = newURL;
        addedQueryParams = true;
    }
}, 1000);
