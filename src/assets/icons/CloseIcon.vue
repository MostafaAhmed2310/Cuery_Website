<template>
    <div class="close-icon" @click="closeAction">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24.932 24.933">
            <path id="close" d="M17.474,19.967,7.5,9.993,9.993,7.5l9.974,9.974L29.939,7.5l2.493,2.493-9.974,9.974,9.974,9.974-2.493,2.493-9.974-9.974L9.992,32.433,7.5,29.939Z" transform="translate(-7.5 -7.5)" fill="#30a362" fill-rule="evenodd"/>
        </svg>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
})
export default class CloseIcon extends Vue {
    closeAction(){
        this.$emit('closeAction');
    }
}
</script>
<style scoped>

</style>