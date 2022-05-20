const referenceToId = require('./reference-to-id')

function setId(seeds) {
    return seeds.map(function(seed) {
        seed['id'] = referenceToId(seed.reference)
        return seed
    })
}

module.exports = setId
