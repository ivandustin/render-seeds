<script>
    import createLookup from './create-lookup'
    import random from './random-algorithm'
    import fetchSeeds from './fetch-seeds'
    import shuffle from './shuffle'
    import setId from './set-id'
    import getId from './get-id'

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
            seed = lookup[id]
            save()
        } else {
            next()
        }
    }

    function next() {
        id   = random.get()
        seed = lookup[id]
        window.scrollTo(0,0)
        save()
    }

    function save() {
        clearTimeout(timer)
        timer = setTimeout(function() {
            random.set(id)
        }, 15 * 1000)
    }

    main()
</script>

<svelte:body on:dblclick={next}/>

<main>
    {#if seed}
        {#each seed.paragraphs as entry}
            <p class="radley">{entry.paragraph}</p>
        {/each}
        <p class="reference open-sans">{seed.reference}</p>
    {/if}
</main>

<style></style>
