const getPath = require('./get-path')

function getId() {
    let path = getPath()
    if (path.length > 0)
        return path[0].toLowerCase()
    return null
}

module.exports = getId
