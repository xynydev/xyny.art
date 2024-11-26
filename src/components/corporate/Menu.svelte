<script>
    let open = $state(false);
</script>

<button class="w-12 h-12 p-4 mr-32" onclick={open = !open}>
    Menu
    {#if !open}
    <i class="i-mdi-menu text-black w-12 h-12 block"></i>
    {:else}
    <i class="i-mdi-close-circle text-black w-12 h-12 block"></i>
    {/if}
</button>

<dialog {open}>
    <nav class="w-full bg-red fixed top-24 left-0 z-1000">
        <div class="w-full h-full bg-white/40">
            <div class="absolute left-40% flex flex-col text-2xl py-8 w-128 h-full bg-blue-900 text-white border border-white border-x-4 border-y-0">
                <a class="capitalize px-8 w-full hover:bg-rose-600 transition focus:bg-rose-600 relative" href="#about">
                    about
                    <i class="ml-auto left-48 top-2 absolute i-mdi-arrow-right-thin inline-block h-4 w-4"></i>
                </a>
                <a class="capitalize px-8 w-full hover:bg-rose-600 transition focus:bg-rose-600 relative" href="#portfolio">
                    portfolio
                    <i class="ml-auto left-48 top-2 absolute i-mdi-arrow-right-thin inline-block h-4 w-4"></i>
                </a>
                <a class="capitalize px-8 w-full hover:bg-rose-600 transition focus:bg-rose-600 relative" href="/themes">
                    themes
                    <i class="ml-auto left-48 top-2 absolute i-mdi-arrow-right-thin inline-block h-4 w-4"></i>
                </a>
            </div>
        </div>
    </nav>
    <button aria-label="close menu" class="bg-black/10 fixed inset-0 z-150" onclick={open = false}>

    </button>
</dialog>

<style>
    dialog[open] nav {
        animation: expand 0.5s ease-in forwards;
        /* https://doodad.dev/pattern-generator/ */
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='119' height='119' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'%3E%3Crect width='100%25' height='100%25' fill='rgba(47, 133, 90,1)'/%3E%3Cpath d='M0 0L20 0L20 20L0 20L0 0zM6 6L6 14L14 14L14 6zM20 20L40 20L40 40L20 40L20 20zM26 26L26 34L34 34L34 26z' fill='rgba(44, 82, 130,1)'/%3E%3Cpath d='M26 6L34 6L34 14L26 14zM6 26L14 26L14 34L6 34z' fill='rgba(197, 48, 48,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
    }
    @keyframes expand {
        0%{
            height: 0;
        }
        100%{
            height: 16rem;
        }
    }

</style>