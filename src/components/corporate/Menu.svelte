<script>
    import MdiArrowRightThin from "~icons/mdi/arrow-right-thin";

    let open = $state(false);
</script>

<button class="w-12 h-12 p-4 sm:mr-32 mr-8" onclick={(open = !open)}>
    Menu
    {#if !open}
        <i class="i-mdi-menu text-black w-12 h-12 block"></i>
    {:else}
        <i class="i-mdi-close-circle text-black w-12 h-12 block"></i>
    {/if}
</button>

<dialog {open}>
    <nav class="w-full bg-gray-400 fixed top-24 left-0 z-1000">
        <div class="w-full h-full bg-white/40">
            <div
                class="absolute left-[40%] flex flex-col text-2xl py-8 w-128 h-full bg-blue-900 text-white border border-white border-x-4 border-y-0"
            >
                <a
                    class="capitalize px-8 w-full hover:bg-rose-600 transition focus:bg-rose-600 relative"
                    href="#about"
                >
                    about
                    <MdiArrowRightThin
                        class="ml-auto left-48 top-2 absolute i-mdi-arrow-right-thin inline-block h-4 w-4"
                    />
                </a>
                <a
                    class="capitalize px-8 w-full hover:bg-rose-600 transition focus:bg-rose-600 relative"
                    href="#portfolio"
                >
                    portfolio
                    <MdiArrowRightThin
                        class="ml-auto left-48 top-2 absolute i-mdi-arrow-right-thin inline-block h-4 w-4"
                    />
                </a>
                <a
                    class="capitalize px-8 w-full hover:bg-rose-600 transition focus:bg-rose-600 relative"
                    href="/themes"
                >
                    themes
                    <MdiArrowRightThin
                        class="ml-auto left-48 top-2 absolute i-mdi-arrow-right-thin inline-block h-4 w-4"
                    />
                </a>
            </div>
        </div>
    </nav>
    <button
        aria-label="close menu"
        class="bg-black/10 fixed inset-0 z-150"
        onclick={(open = false)}
    >
    </button>
</dialog>

<style>
    dialog[open] nav {
        animation: expand 0.5s ease-in forwards;
    }
    @keyframes expand {
        0% {
            height: 0;
        }
        100% {
            height: 16rem;
        }
    }
</style>
