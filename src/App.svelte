<script>
    import getSeeds from './get-seeds'
    import setId from './set-id'

    let seeds = []
    let index = 0
    let seed  = undefined

    async function main() {
        seeds = await getSeeds()
        seeds = setId(seeds)
        next()
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
