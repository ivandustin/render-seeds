const getId = require('./get-id')

function setId(seeds) {
    return seeds.map(function(seed) {
        seed['id'] = getId(seed.reference)
        return seed
    })
}

module.exports = setId
