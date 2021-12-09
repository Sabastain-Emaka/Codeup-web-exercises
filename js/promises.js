'use strict';
function  getLastEventDateByUsername(username) {
    let GITHUB_API_URL = 'https://api.github.com/users/${username}/events/public'
    return fetch(GITHUB_API_URL, {headers: {'Authorization': 'token ${GITHUB_KEY}' }})
        .then(response => response.json()
            .then(listOfEvents => {
                return listOfEvents[0].created_at;
            })
        )
}

getLastEventDateByUsername('sabastainwakoyi').then(eventDate => console.log(eventDate) )

const wait = milliseconds => {
    return new Promise((resolve, reject ) => {
        setTimeout(function () {
            resolve(milliseconds);
        }, milliseconds)
    });
}
 wait(3000).then(ms => console.log('it will show after ${ms/1000} seconds'))