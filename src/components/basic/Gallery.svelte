<script lang="ts">
    let { gallery } = $props();
    let currentSection = $state(0);
    let currentImage = $state(0);

    let imgObject = $derived.by(() => gallery.at(currentSection).images.at(currentImage));

    function stabilize() {
        if (currentImage >= gallery[currentSection].images.length) {
            currentSection = (currentSection + 1) % gallery.length
            currentImage = 0
        } else if (currentImage < 0) {
            currentSection = (currentSection - 1) % gallery.length
            currentImage = gallery[currentSection].images.length - 1
        }
    }

    function increment() {
        currentImage++
        stabilize()
    }

    function decrement() {
        currentImage--
        stabilize()
    }
</script>

<div class="max-w-4xl w-full border-2 border-black dark:border-white">
    <div class="w-full relative">
        <select class="w-full bg-gray-200 dark:bg-black p-4 appearance-none hover:underline focus:underline cursor-pointer" bind:value={currentSection} onchange={() => currentImage = 0}>
            {#each gallery as section, idx}
            <option value={idx}>
                {section.sectiontitle}
            </option>
            {/each}
        </select>
        <i class="absolute i-material-symbols-arrow-drop-down-rounded w-8 h-8 right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
    </div>
    <div class="border-b-2 border-black dark:border-white pb-4 px-6 text-[#191919] dark:text-[#DDD] bg-gray-200 dark:bg-black">
        {gallery[currentSection].sectiondesc}
    </div>
    <div class="w-full border-b-2 border-black dark:border-white flex bg-gray-100 dark:bg-black">
        <button
            onclick={decrement}
            class="p-4 px-5 border-r-2 border-black dark:border-white flex items-center gap-2 hover:underline focus:underline min-w-max"
        >
            <i class="i-material-symbols-arrow-back-rounded inline-block w-6 h-6"></i> previous image
        </button>
        <div class="p-4 bg-gray-50 w-full text-center dark:bg-black">
            ~~^^~~
        </div>
        <button
            onclick={increment}
            class="p-4 px-5 border-l-2 border-black dark:border-white flex items-center gap-2 hover:underline focus:underline min-w-max"
        >
            next image <i class="i-material-symbols-arrow-forward-rounded inline-block w-6 h-6"></i>
        </button>
    </div>
    <figure class="w-fit p-4 pb-0 max-w-full">
        <figcaption class="text-[#191919] dark:text-[#DDD] mb-4">{imgObject.caption}</figcaption>
        <div class="w-4xl max-w-full sm:h-2xl lg:h-4xl max-h-full mb-4 relative  aspect-1">
            {#each gallery.flatMap((section) => section.images) as image}
                <img
                    class={`h-full w-full object-contain image-rendering transition absolute inset-0 ${image == imgObject ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    src={image.img.src}
                    {...image.attributes}
                    alt={image.alt}
                    title={image.alt}
                    loading="lazy"
                >
            {/each}
        </div>
    </figure>
</div>

<style>
    .image-rendering {
        image-rendering: pixelated;
    }
</style>