<script>
    import createSequence from './create-sequence'
    import createLookup from './create-lookup'
    import fetchSeeds from './fetch-seeds'
    import storage from './storage'
    import setId from './set-id'
    import getId from './get-id'

    let id       = null
    let seeds    = []
    let index    = null
    let seed     = null
    let lookup   = {}
    let sequence = []

    async function main() {
        id       = getId()
        seeds    = await fetchSeeds()
        seeds    = setId(seeds)
        lookup   = createLookup(seeds)
        index    = storage.get('index', 0)
        sequence = storage.get('sequence', function() { return createSequence(lookup) })
        show()
    }
    
    function next() {
        if (index < seeds.length - 1) {
            index = storage.set('index', ++index)
            show()
        }
    }

    function show() {
        seed = lookup[sequence[index]]
        window.scrollTo(0,0)
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
