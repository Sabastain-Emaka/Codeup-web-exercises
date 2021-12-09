'use strict';
function  getLastEventDateByUsername(username) {
    let GITHUB_API_URL = 'https://api.github.com/users/${username}/events/public'
    return fetch(GITHUB_API_URL, {headers: {'Authorization': 'token ${GIT_TOKEN}' }})
        .then(response => response.json()
            .then(listOfEvents => {
                return listOfEvents[0].created_at;
            })
        )
}

getLastEventDateByUsername('sabastainwakoyi').then(eventDate => console.log(eventDate) )
