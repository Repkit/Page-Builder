<template>
    <div class="user-details">
        <div v-if="user">
            userName: {{user.userName}}<br>
            firstName: {{user.firstName}}<br>
            lastName: {{user.lastName}}<br>
            site:<a :href="user.site">go to site</a> --->>> adress: {{user.site}}<br>

        </div>

    </div>
</template>

<script>
export default {
    name: 'user-details',
    props: ['user'],
};
</script>
