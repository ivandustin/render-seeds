import shuffle from './shuffle'

export default function createSequence(lookup) {
    return shuffle(Object.keys(lookup))
}
