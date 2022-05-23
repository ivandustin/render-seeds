import parseReference from './parse-reference'

export default function referenceToId(reference) {
    let { book, chapter, verse } = parseReference(reference)
    return `${book}-${chapter}-${verse}`.toLowerCase()
}
