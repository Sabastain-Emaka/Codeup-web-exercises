
"use strict";
(() => {

function getLastEventDateByUsername(username) {
    let GITHUB_API_URL = 'https://api.github.com/user/${username}/events/public'
    return fetch(GITHUB_API_URL, {headers: {'Authorization': 'token ${GITHUB_KEY}' }})
        .then(response => response.json()
            .then(listOfEvents => {
                return listOfEvents[0].created_at;
            })
        )
}

getLastEventDateByUsername('sabastainemaka').then(eventDate => (eventDate) )



const wait = milliseconds => {
    return new Promise((resolve, reject ) => {
        setTimeout(function () {
            resolve(milliseconds);
        }, milliseconds)
    });
}
 wait(3000).then(ms => console.log('it will show after ${ms/1000} seconds'))



// alternative solution


// const wait = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, num);
//     })
// }
// wait(3000).then(() => console.log('Jevi'));
// wait(1000).then(() => console.log('Ambusi'));
// console.log("Hello");
//


// const lastCommit = (username) => {
//     return fetch(`https://api.github.com/users/${username}/events/public`,
//         {headers: {"Authorization": `token ${GITHUB_KEY}`}})
//         .then(resp => resp.json())
//         .then(data => data.find(event => event.type === "PushEvent"))
//         .then(event => event.created_at)
//         .then(date => console.log(date));
// };
// lastCommit("sabastainemaka");








})();
