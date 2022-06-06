<script>
    import createLookup from './create-lookup'
    import { fade } from 'svelte/transition'
    import random from './random-algorithm'
    import fetchSeeds from './fetch-seeds'
    import transition from './transition'
    import shuffle from './shuffle'
    import setId from './set-id'
    import getId from './get-id'

    let title  = 'Who is Jesus?'
    let id     = null
    let ids    = []
    let seed   = null
    let seeds  = []
    let lookup = {}
    let timer  = null

    async function main() {
        id     = getId()
        seeds  = await fetchSeeds()
        seeds  = setId(seeds)
        lookup = createLookup(seeds)
        ids    = Object.keys(lookup)
        random.init(ids)
        if (id) {
            go(id)
            replaceState()
        } else {
            await next()
        }
    }

    function go(id) {
        seed  = lookup[id]
        title = getTitle(seed)
        setAsSeen(id)
        scrollTop()
    }

    async function next() {
        id   = random.get(id)
        seed = null
        await transition(0)
        go(id)
        pushState()
    }

    function setAsSeen(id) {
        clearTimeout(timer)
        timer = setTimeout(function() {
            random.set(id)
        }, 60 * 1000)
    }

    function onPopState(event) {
        setState(event.state)
    }

    function getState() {
        return { id }
    }

    async function setState(state) {
        id = state.id
        go(id)
    }

    function getUrl(id) {
        return `/${id}`
    }

    function pushState() {
        let state  = getState()
        let unused = ''
        let url    = getUrl(id)
        window.history.pushState(state, unused, url)
    }

    function replaceState() {
        let state  = getState()
        let unused = ''
        let url    = getUrl(id)
        window.history.replaceState(state, unused, url)
    }

    function scrollTop() {
        window.scrollTo(0,0)
    }

    function getTitle(seed) {
        return seed.paragraphs[0].paragraph
    }

    main()
</script>

<svelte:window on:popstate={onPopState}></svelte:window>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<svelte:body on:dblclick={next}/>

{#if seed}
    <main in:fade>
        {#each seed.paragraphs as entry}
            <p class="radley">{entry.paragraph}</p>
        {/each}
        <p class="reference open-sans">{seed.reference}</p>
    </main>
{/if}

<style></style>
