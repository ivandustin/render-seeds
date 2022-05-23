export default function createLookup(seeds) {
    let lookup = {}
    seeds.forEach(function(seed) {
        lookup[seed.id] = seed
    })
    return lookup
}
