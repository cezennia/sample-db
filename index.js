var fs = require('fs');
var uuid = require('uuid/v1');

/* 1 */
// var x = {
//     "_id" : ObjectId("5a64a5fdeabeb40014b003a0"),
//     "phone" : "08039307993",
//     "advertid" : "Sandos",
//     "adverturl" : "https://res.cloudinary.com/dw0fs7sj7/image/upload//w_660,h_640/l_text:Cabin_18:more%20%40%20jist.me%252Fsandos,g_south,y_-20/v1516545359/vgafvowcp5ohkh1nmpwi.jpg",
//     "issample" : false,
//     "isprofilepic" : true,
//     "channel" : "whatsapp",
//     "expires" : ISODate("2018-01-24T11:00:00.000Z"),
//     "runsuntil" : ISODate("2018-01-24T07:40:24.559Z"),
//     "credits" : [ 
//         {
//             "_id" : ObjectId("5a64a68feabeb40014b003a1"),
//             "addedon" : ISODate("2018-01-21T14:41:19.810Z"),
//             "dou" : 400,
//             "points" : 0
//         }, 
//     ]
// };

var no_of_credits = 240;
var no_of_adbasadors = 800;

var json_file = [];

var no_user_ad_per_user = 10

/**
 * Return random number of a particular length of digits
 */
function getRandomDigits (length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}


function createAdForUser () {
    var temp_phone = getRandomDigits(11);


    for (var i = 0; i < no_user_ad_per_user; i++) {

        var temp = {
            "_id" : uuid(),
            "phone" : temp_phone,
            "advertid" : "Sandos",
            "adverturl" : "https://res.cloudinary.com/dw0fs7sj7/image/upload//w_660,h_640/l_text:Cabin_18:more%20%40%20jist.me%252Fsandos,g_south,y_-20/v1516545359/vgafvowcp5ohkh1nmpwi.jpg",
            "issample" : false,
            "isprofilepic" : true,
            "channel" : "whatsapp",
            "expires" : new Date(),
            "runsuntil" : new Date(),
            credits: []
        }

        for (var j = 0; j < no_of_credits; j++) {
            temp.credits.push({
                    "_id" : uuid(),
                    "addedon" : new Date(),
                    "dou" : getRandomDigits(2)*10,
                    "points" : 0
                });
        }

        json_file.push(temp);
    }


}

function createMultipleAds () {
    for (var h = 0; h < no_of_adbasadors; h++) {
        createAdForUser();
        console.log("Done: " + h);
    }

    fs.writeFileSync('./json-file.json', JSON.stringify(json_file), 'utf-8');
    console.log("Generated file can be found in json-file.json");
}

createMultipleAds();