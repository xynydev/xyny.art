<script lang="ts">
    let { subtexts } = $props();
    let idx = $state(0);
    let charIdx = 0;
    let text = $state("");
    function reset() {
        text = "";
        idx = (idx + 1) % subtexts.length;
        charIdx = 0;
        type();
    }
    function type() {
        if (text === subtexts[idx]) {
            setTimeout(reset, 5000);
        } else {
            text += subtexts[idx][charIdx];
            charIdx++;
            setTimeout(type, 50);
        }
    }
    type();

    // classes for some different kinda positioning,
    // but discarded
    // sm:top-64 sm:left-16 sm:w-xl sm:text-12
    // lg:top-116 lg:left-32 lg:w-3xl lg:text-16
    // xl:top-128 xl:left-64 xl:text-24 xl:w-5xl
    // 2xl:top-148 2xl:left-148 2xl:text-24 2xl:w-5xl
</script>

<!-- todo finish what you started!! -->
<div
    aria-label={subtexts[idx]}
    role="banner"
    class="absolute text-left text-white mix-blend-difference textanim
    text-5xl lg:text-6xl xl:text-8xl sm:max-w-[calc(100vw-16rem)]"
>
    <span aria-hidden="true">{text}</span>
</div>
