var https = require('https');

//username to send to API
//const username = 'joeljordan';
//function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} in Javascript`;
    console.log(message)
};

function getProfile(username) {

    //Connect to the API URL (https://teamtreehouse/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        let body = '';
        //Read the data
        response.on('data', data => {
            body += data.toString();
        })

        response.on('end', () => {
            //parse the data
            const profile = JSON.parse(body);
            //console.dir(profile);
            printMessage(username, profile.badges.length, profile.points.JavaScript)

        })

    })

}
const users = process.argv.slice(2);
//if your function only takes one argument you can call the function without args or () and it 
//will pass the iterable items to the function
users.forEach(getProfile);