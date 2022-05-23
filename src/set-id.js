import referenceToId from './reference-to-id'

export default function setId(seeds) {
    return seeds.map(function(seed) {
        seed['id'] = referenceToId(seed.reference)
        return seed
    })
}
