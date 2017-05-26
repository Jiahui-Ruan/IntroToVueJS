<template>
    <li class="list-group-item" 
        @click="showStatus"
        style="cursor: pointer">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from '../../main'

    export default {
        props: ['server'],
        methods: {
            showStatus() {
                eventBus.sendStatus(this.server)
            }
        }
    }
</script>

<style>
</style>