import sleep from './sleep'

export default async function transition(ms = 400) {
    return await sleep(ms)
}
