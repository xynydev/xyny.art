<script>
    export let gallery;
    let currentSection = 0;
    let currentImage = 0;
</script>

<div class="max-w-4xl w-full bg-[#333] border-2 border-[#999] text-white">
    <div class="w-full bg-[#333] relative">
        <select class="w-full bg-[#333] p-4 appearance-none" bind:value={currentSection} on:change={() => currentImage = 0}>
            {#each gallery as section, idx}
            <option value={idx}>
                {section.sectiontitle}
            </option>
            {/each}
        </select>
        <i class="absolute i-material-symbols-arrow-drop-down-rounded w-8 h-8 right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
    </div>
    <div class="border-b-2 border-[#999] pb-4 px-6">
        {gallery[currentSection].sectiondesc}
    </div>
    <div class="w-full bg-[#333] border-b-2 border-[#999] flex">
        <button
            on:click={() => currentImage = currentImage-1}
            class="p-4 px-5 border-r-2 border-[#999] flex items-center gap-2"
        >
            <i class="i-material-symbols-arrow-back-rounded inline-block w-6 h-6"></i> previous image
        </button>
        <div class="mx-auto p-4">
            ~~^^~~
        </div>
        <button
            on:click={() => currentImage = currentImage+1}
            class="p-4 px-5 border-l-2 border-[#999] flex items-center gap-2"
        >
            next image <i class="i-material-symbols-arrow-forward-rounded inline-block w-6 h-6"></i>
        </button>
    </div>
    <figure class="w-fit p-4 pb-0">
        <figcaption>{gallery[currentSection].images.at(currentImage%gallery[currentSection].images.length).caption}</figcaption>
        <img
            class="w-4xl max-w-full h-4xl max-h-full object-contain"
            src={gallery[currentSection].images.at(currentImage%gallery[currentSection].images.length).img.src}
            {...gallery[currentSection].images.at(currentImage%gallery[currentSection].images.length).img.attributes}
            alt={gallery[currentSection].images.at(currentImage%gallery[currentSection].images.length).alt}
        >
    </figure>
</div>