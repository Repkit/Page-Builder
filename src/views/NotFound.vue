<template>
    <div class="not-found">

        <main-nav></main-nav>

        <h1>Page not found</h1>
        <p>The page you where looking for was not found.</p>

    </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
    name: 'not-found',
    components: { MainNav }
};
</script>
