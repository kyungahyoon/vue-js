<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem'
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            ask: state => state.ask
        })
    },
    components: {
        ListItem
    }
}
</script>