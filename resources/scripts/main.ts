import "@/bootstrap";
import "~/css/app.css"
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import route from "ziggy-js";
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async name => {
        const pages = import.meta.glob('./Pages/**/*.vue');
        return (await pages[`./Pages/${name}.vue`]()).default;
    },
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .mount(el);
    },
} as any);

InertiaProgress.init({ color: '#4B5563' });
