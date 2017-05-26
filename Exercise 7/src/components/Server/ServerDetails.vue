<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please choose a server</p>
        <p v-else>Server #{{server.id}} is {{server.status}}</p>
        <hr>
        <button @click="resetStatus">Reset</button>
    </div>

</template>

<script>
    import { eventBus } from '../../main'

    export default {
        data() {
            return {
                server: null
            }
        },
        methods: {
            resetStatus() {
                this.server.status = 'Normal';
            }
        },
        created() {
            eventBus.$on('showStatus', (server) => {
                this.server = server
            })
        }
    }
</script>

<style>

</style>
