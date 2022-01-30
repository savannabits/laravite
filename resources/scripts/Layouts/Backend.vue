<template>
    <div class="flex h-screen overflow-hidden">

        <!-- Sidebar -->
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="closeSidebar">
            <SidebarLink :href="route('backend.index')" :active="route().current('backend.index')">
                <template #icon>
                    <i class="pi pi-cog" :class="route().current('backend.index') && 'text-indigo-300'"></i>
                </template>
                Backend
            </SidebarLink>
            <SidebarLink :href="route('dashboard')" icon="pi pi-chart-bar" :active="route().current('dashboard')">
                Frontend
            </SidebarLink>
        </Sidebar>

        <!-- Content area -->
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

            <!-- Site header -->
            <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen"/>
            <main class="py-1">
                <template v-if="$slots.header">
                    <slot name="header"/>
                </template>
                <slot/>
            </main>

        </div>

    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import Sidebar from '@/partials/Sidebar.vue'
import Header from '@/partials/Header.vue'
import WelcomeBanner from '@/partials/dashboard/WelcomeBanner.vue'
import DashboardAvatars from '@/partials/dashboard/DashboardAvatars.vue'
import FilterButton from '@/components/DropdownFilter.vue'
import Datepicker from '@/components/Datepicker.vue'
import SidebarLink from "@/partials/SidebarLink.vue";
import {usePage} from "@inertiajs/inertia-vue3";

export default defineComponent({
    name: 'Backend',
    components: {
        SidebarLink,
        Sidebar,
        Header,
        WelcomeBanner,
        DashboardAvatars,
        FilterButton,
        Datepicker,
    },
    setup() {

        const sidebarOpen = ref(false)
        const closeSidebar = (e) =>  {
            console.log("closing sidebar");
            sidebarOpen.value = false
        }
        return {
            sidebarOpen,
            closeSidebar,
        }
    }
})
</script>
