export default async function getSeeds() {
    let response = await fetch('/seeds-json/seeds.json')
    let object   = await response.json()
    return object.seeds
}
