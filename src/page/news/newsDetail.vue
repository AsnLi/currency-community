<template>
    <p>uid: {{userId}}</p>
</template>

<script>
export default {
    name: "newsDetail",
    data(){
        return {
            userId: ""
        }
    },
    mounted() {
        this.userId = this.$route.query.userId
    },
}
</script>

<style lang="stylus" scoped>

</style>

