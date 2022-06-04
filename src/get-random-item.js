import getRandomIndex from './get-random-index'

export default function getRandomItem(array) {
    return array[getRandomIndex(array.length)]
}
