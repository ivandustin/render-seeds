import getRandomItem from './get-random-item'
import storage from './storage'
import assert from 'assert'

const localStoragePrefix = 'random-algorithm'
let state = null

function init(items) {
    assert(items.length > 0)
    state = createState(items)
}

function get() {
    let { seen, unseen } = getPartition()
    return getRandomItem(select(seen, unseen))
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
    if (seen.length == 0)
        return unseen
    if (unseen.length == 0)
        return seen
    return Math.random() < 0.618 ? unseen : seen
}

export default { init, get, set }
