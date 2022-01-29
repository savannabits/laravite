<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;

/**
 * @param string|null $devServer | The development server, including the protocol, domain and port e.g http://localhost:3000 (default)
 * @param string|null $mainScript | The path to the main script relative to the project root, including the extension
 * @param string|null $publicBasePath | Public path relative to public_path()
 * @return HtmlString
 */
if (!function_exists('vite_assets')) {
    function vite_assets(?string $devServer = "http://localhost:3000",
                         ?string $mainScript = "resources/scripts/main.ts",
                         ?string $publicBasePath = 'build'): HtmlString
    {
        $devServerIsRunning = false;

        if (app()->environment('local')) {
            try {
                Http::get($devServer);
                $devServerIsRunning = true;
            } catch (Exception) {
            }
        }

        if ($devServerIsRunning) {
            return new HtmlString(<<<HTML
            <script type="module" src="$devServer/@vite/client"></script>
            <script type="module" src="$devServer/$mainScript"></script>
        HTML);
        }

        $manifest = json_decode(file_get_contents(
            public_path("$publicBasePath/manifest.json")
        ), true);

        return new HtmlString(<<<HTML
        <script type="module" src="/$publicBasePath/{$manifest[$mainScript]['file']}"></script>
        <link rel="stylesheet" href="/$publicBasePath/{$manifest[$mainScript]['css'][0]}">
    HTML);
    }
}
