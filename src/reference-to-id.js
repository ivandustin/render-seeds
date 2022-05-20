const parseReference = require('./parse-reference')

function referenceToId(reference) {
    let { book, chapter, verse } = parseReference(reference)
    return `${book}-${chapter}-${verse}`.toLowerCase()
}

module.exports = referenceToId
