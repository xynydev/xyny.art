<script lang="ts">
    type WindowType = "about" | "themes" | "links";

    let windows: Array<{type: WindowType, x: number, y: number}> = $state([
        { type: "about", x: 320, y: 120, open: true },
        { type: "themes", x: 200, y: 64, open: false },
        { type: "links", x: 250, y: 32, open: false },
        // TODO add portfolio
    ])

    let {
        about, links,
        aboutIcon, themeIcon, linksIcon
    } = $props();

    import { draggable } from '@neodrag/svelte';

    function openWindow(type: WindowType) {
        const index = windows.findIndex(w => w.type == type)
        const window = { ...windows[index] }
        window.open = true
        windows.splice(index, 1)
        windows.push(window)
    }
    function dragStart(windowType: WindowType) {
        // TODO put window to top
    }
</script>

<!-- Desktop -->
<button
    class="text-sm flex flex-col justify-center items-center !bg-none !border-none aspect-square"
    onclick={() => openWindow("about")}
>
    <img src={aboutIcon.src} alt="" />
    <span>About</span>
</button>
<button
    class="text-sm flex flex-col justify-center items-center !bg-none !border-none aspect-square"
    onclick={() => openWindow("themes")}
>
    <img src={themeIcon.src} alt="" />
    <span>Themes</span>
</button>
<button
    class="text-sm flex flex-col justify-center items-center !bg-none !border-none aspect-square"
    onclick={() => openWindow("links")}
>
    <img src={linksIcon.src} alt="" />
    <span>Links</span>
</button>

<!-- Floating -->
{#each windows as window}
    {#if window.type == "about"}
        <div
            data-open={window.open}
            use:draggable={{ handle: '.handle', bounds: 'body', defaultPosition: {x: window.x, y: window.y}, legacyTranslate: false, onDragStart: () => {dragStart("about")} }}
            class="window w-lg h-fit"
        >
            <div class="title-bar handle" role="toolbar" tabindex="0">
                <div class="title-bar-text">About XYNY</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close" onclick={() => window.open = false}></button>
                </div>
            </div>
            <div class="window-body prose about text-sm">
                {@render about()}
            </div>
        </div>                
    {:else if window.type == "themes"}
        <div
            data-open={window.open}
            use:draggable={{ handle: '.handle', bounds: 'body', defaultPosition: {x: window.x, y: window.y}, legacyTranslate: false }}
            class="window w-lg h-fit"
        >
            <div class="title-bar handle" role="toolbar" tabindex="0">
                <div class="title-bar-text">Confirmation</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close" onclick={() => window.open = false}></button>
                </div>
            </div>
            <div class="window-body">
                Are you sure you want to reboot into the theme selector?
                <section class="field-row" style="justify-content: flex-end">
                    <a href="/themes" class="text-black">
                        <button>OK</button>
                    </a>
                    <button onclick={() => window.open = false}>Cancel</button>
                  </section>
            </div>
            
        </div>
    {:else if window.type == "links"}
        <div
                data-open={window.open}
                use:draggable={{ handle: '.handle', bounds: 'body', defaultPosition: {x: window.x, y: window.y}, legacyTranslate: false }}
                class="window w-lg h-fit"
            >
                <div class="title-bar handle" role="toolbar" tabindex="0">
                    <div class="title-bar-text">links</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onclick={() => window.open = false}></button>
                    </div>
                </div>
                <div class="window-body font-ms p-4 gap-8 flex flex-row flex-wrap pb-8">
                    {#each links as link}
                    <a href={link.url} class="text-black" target="_blank">
                        <button
                            class="text-xs flex flex-col gap-1 justify-center items-center !bg-none !border-none aspect-square w-[5rem] h-[5rem]"
                        >
                            <img src="https://icon.horse/icon/{new URL(link.url).hostname}" alt="" class="w-[3rem] h-[3rem]" />
                            <span>{link.name}</span>
                        </button>
                    </a>
                    {/each}
                </div>
            </div>
    {/if}
{/each}

<style>
    @keyframes open {
        0% {
            transform: scale(0);  
        }
        100% {
            transform: scale(1);
        }
    }
    .window[data-open="true"] {
        animation: open 0.2s ease-in forwards;
    }
    .window[data-open="false"] {
        transform: scale(0);
    }
</style>