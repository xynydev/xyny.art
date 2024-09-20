import {
    defineConfig,
    presetIcons,
    presetUno,
    presetTypography,
    presetWebFonts,
} from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
            provider: "fontshare",
            fonts: {
                // TODO
                sans: "Outfit",
                mono: "Azeret Mono",
            },
        }),
        presetTypography(),
    ],
});
