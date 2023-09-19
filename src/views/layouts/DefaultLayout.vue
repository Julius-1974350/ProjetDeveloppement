<template>
    <NavBar />
    <Footer />
    <slot></slot>

</template>

<script setup lang="ts">
import Footer from '../../components/Footer.vue';
import NavBar from '../../components/NavBar.vue'
</script>

<style scoped>
</style>