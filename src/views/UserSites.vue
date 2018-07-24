<template>
    <div class="user-sites">


        <h1>This is the user sites list</h1>

        <site-list></site-list>

    </div>
</template>

<script>
import SiteList from '@/components/SiteList.vue';

export default {
    name: 'user-sites',
    components: { SiteList }
};
</script>
