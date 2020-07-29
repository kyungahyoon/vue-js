<template>
    <div>
        <user-profile :info="fetchedItem"></user-profile>
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        <section>
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile'
import { mapGetters } from 'vuex';

export default {
    computed: {
      ...mapGetters(['fetchedItem'])  
    },
    created () {       
        const ItemId = this.$route.params.id;
        console.log(this.$store)
        //actions를 호출하기 위해 dispatch() 사용
        this.$store.dispatch('FETCH_ITEM',  ItemId);
    },
    components: {
        UserProfile
    }
}
</script>

<style scoped>
    .user-container {
        display: flex;
        align-items: center;
        padding: 0.5rem
    }
    .fa-user {
        font-size: 2.5rem;
    }
    .user-description {
        padding-left: 10px;
    }
    .time {
        font-size:  13px;
    }
</style>