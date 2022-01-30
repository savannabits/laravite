<template>
    <Head>
        <title>Customers</title>
    </Head>
    <Backend>
        <template #header>
            <h4 class="p-2 border-b font-black text-2xl">Customers</h4>
        </template>
        <div class="p-2 mt-2">

        </div>
    </Backend>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Backend from "@/Layouts/Backend.vue";
import {Head} from "@inertiajs/inertia-vue3";

export default defineComponent({
    name: "Index",
    components: {Backend, Head}
})
</script>

<style scoped>

</style>
