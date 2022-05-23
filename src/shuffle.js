export default function shuffle(array) {
    return array
    .map(function(value) {
        let index = Math.random()
        return { index, value }
    })
    .sort((a, b) => a.index - b.index)
    .map(entry   => entry.value)
}
