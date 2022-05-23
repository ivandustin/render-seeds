function set(key, object) {
    object = (typeof object === 'function') ? object() : object
    localStorage.setItem(key, JSON.stringify(object))
    return object
}

function get(key, initial) {
    let value = localStorage.getItem(key)
    if (value !== null) {
        value = JSON.parse(value)
    } else {
        if (initial !== undefined) {
            value = set(key, initial)
        }
    }
    return value
}

export default { set, get }
