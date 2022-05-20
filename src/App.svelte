<script>
    import createLookup from './create-lookup'
    import getSeeds from './get-seeds'
    import setId from './set-id'
    import getId from './get-id'

    let id     = null
    let seeds  = []
    let index  = 0
    let seed   = null
    let lookup = {}

    async function main() {
        id     = getId()
        seeds  = await getSeeds()
        seeds  = setId(seeds)
        lookup = createLookup(seeds)
        seed   = lookup[id]
    }
    
    function next() {
        if (index < seeds.length) {
            seed = seeds[index++]
            window.scrollTo(0,0)
        }
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
