<template>
    <div>
        <Layout/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from "@/views/Layout.vue";

@Component({
    components: {
        Layout,
    },
})
export default class ChoosedView extends Vue {

}
</script>

<style scoped>

</style>
