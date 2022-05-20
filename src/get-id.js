const getPath = require('./get-path')

function getId() {
    return getPath()[0].toLowerCase()
}

module.exports = getId
