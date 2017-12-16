const getID = require("./getID");

module.exports = function getUUID() {
    return new Promise(function(resolve, reject) {
        console.log(getID(resolve, reject));
    });
}
