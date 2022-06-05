import getRandomItem from './get-random-item'
import storage from './storage'
import assert from 'assert'

const localStoragePrefix = 'random-algorithm'
let state = null

function init(items) {
    assert(items.length > 1)
    state = createState(items)
}

function get(currentItem) {
    let { seen, unseen } = getPartition()
    let array = select(seen, unseen)
    let item  = getRandomItem(array)
    if (array.length > 1)
        while (item == currentItem)
            item = getRandomItem(array)
    return item
}

function set(item) {
    let seen = getSeen()
    if (!isSeen(item, seen)) {
        seen.push(item)
        saveSeen(seen)
    }
}

function createState(items) {
    return { items }
}

function getLocalStorageKey(name) {
    return `${localStoragePrefix}.${name}`
}

function getSeen() {
    return storage.get(getLocalStorageKey('seen'), [])
}

function saveSeen(seen) {
    return storage.set(getLocalStorageKey('seen'), seen)
}

function isSeen(item, seen) {
    return ~seen.indexOf(item)
}

function getPartition() {
    let { items } = state
    let seen   = getSeen()
    let unseen = items.filter(item => !isSeen(item, seen))
    return { seen, unseen }
}

function select(seen, unseen) {
    let total = seen.length + unseen.length
    if (seen.length == 0)
        return unseen
    if (unseen.length == 0)
        return seen
    if (seen.length / total < 0.2)
        return unseen
    return Math.random() < 0.618 ? unseen : seen
}

export default { init, get, set }
