const assert = require('assert')

function parseReference(reference) {
    let pattern = /^([a-zA-Z]+)\s(\d{1,2}):(\d{1,2})(-(\d{1,2})){0,1}$/
    let matches = reference.match(pattern)
    assert(matches !== null, reference)
    let book    = matches[1]
    let chapter = matches[2]
    let verse   = matches[3]
    return { book, chapter, verse }
}

module.exports = parseReference
