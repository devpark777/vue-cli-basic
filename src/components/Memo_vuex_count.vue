<template>
    <div>
        메모개수 : {{numberOfMemos}}
    </div>
</template>
<script>
export default {
    computed : {
        // memos() {
        //     return this.$store.state.memos;
        // },
        numberOfMemos() {
            //return this.memos.length;
            return this.$store.getters.numberofMemos;
        }
    }
}
</script>