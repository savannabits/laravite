<template>
    <Authenticated>
        <template #header>My Profile</template>
        Here is your profile
    </Authenticated>
</template>

<script lang="ts">
import Authenticated from "@/Layouts/Authenticated.vue";
export default {
    name: "Profile",
    components: {Authenticated}
}
</script>

<style scoped>

</style>
