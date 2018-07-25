<template>
    <div class="user-details">

        <div v-if="user">
            <p><strong>User Name:</strong> {{user.userName}}</p>
            <p><strong>First Name:</strong> {{user.firstName}}</p>
            <p><strong>Last Name:</strong> {{user.lastName}}</p>
            <p><strong>Site URL:</strong> <a :href="user.site">{{user.site}}</a></p>
            <button v-if="user">edit my profile</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'user-details',
    props: ['user'],
};
</script>
