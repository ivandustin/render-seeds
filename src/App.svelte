<script>
    let seeds = []
    let index = 0
    let seed  = undefined

    async function main() {
        seeds = await getSeeds()
        next()
    }
    
    async function getSeeds() {
        let response = await fetch('/seeds-json/seeds.json')
        let object   = await response.json()
        return object.seeds
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

<style>
    p {
        font-size: 1.618rem;
        margin: 3rem 0;
    }

    .reference {
        text-transform: uppercase;
        font-size: .77rem;
        margin-top: 5rem;
        color: #9F9F9F;
    }
</style>
