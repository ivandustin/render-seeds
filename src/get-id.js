import getPath from './get-path'

export default function getId() {
    let path = getPath()
    if (path.length > 0)
        return path[0].toLowerCase()
    return null
}
