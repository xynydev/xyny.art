<script lang="ts">
    type WindowType = "about" | "themes" | "links";

    let windows: Array<{type: WindowType, x: number, y: number, open: boolean, order: number}> = $state([
        { type: "about", x: 320, y: 120, open: true, order: 0 },
        { type: "themes", x: 200, y: 64, open: false, order: 1 },
        { type: "links", x: 250, y: 32, open: false, order: 2 },
        // TODO add portfolio
    ])

    let {
        about, links,
        aboutIcon, themeIcon, linksIcon
    } = $props();

    import { draggable } from '@neodrag/svelte';

    function openWindow(type: WindowType) {
        windows.filter((w) => w.type == type).forEach(w => {
            w.open = true
            toTop(type)
        })
    }
    function toTop(type: WindowType) {
        windows.filter((w) => w.type != type).forEach(w => {
            w.order += 1
        });
        windows.filter((w) => w.type == type).forEach(w => {
            w.order = 0
        })
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
            use:draggable={{ handle: '.handle', bounds: 'body', defaultPosition: {x: window.x, y: window.y}, legacyTranslate: false, onDragStart: () => {toTop("about")} }}
            class="window w-lg h-fit z-{10-window.order}"
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
            use:draggable={{ handle: '.handle', bounds: 'body', defaultPosition: {x: window.x, y: window.y}, legacyTranslate: false, onDragStart: () => {toTop("themes")} }}
            class="window w-lg h-fit z-{10-window.order}"
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
                use:draggable={{ handle: '.handle', bounds: 'body', defaultPosition: {x: window.x, y: window.y}, legacyTranslate: false, onDragStart: () => {toTop("links")} }}
                class="window w-lg h-fit z-{10-window.order}"
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