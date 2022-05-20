const path = require('path')

function getPath() {
    let { pathname } = window.location
    return path.normalize(pathname).split('/').filter(x => x)
}

module.exports = getPath
