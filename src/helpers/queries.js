import axios from 'axios';

export const callSearch = function(query, callback) {

    if(query === "") {
        callback([]);
        return;
    }

    axios.get("https://api.github.com/search/users?q=" + query, {
        headers: {
            "Accept": "application/vnd.github.v3+json"
        }
    })
    .then(response => callback(response.data.items))
    .catch(response => console.error(response))
}

export const debounce = function(fn, delay){
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}