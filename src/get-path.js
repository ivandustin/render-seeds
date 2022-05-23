import path from 'path'

export default function getPath() {
    let { pathname } = window.location
    return path.normalize(pathname).split('/').filter(x => x)
}
