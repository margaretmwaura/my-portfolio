<template>
    <div id="app">
        <div class="grid-frame">
            <div class="grid-y">
                <div class="cell large-4 medium-4 small-12 main_top">
                    <div class="grid-x">
                        <div class="cell large-2 medium-2 small-0"></div>
                        <div class="cell large-8 medium-8 small-12"><navbar/></div>
                        <div class="cell large-2 medium-2 small-0"></div>
                    </div>
                </div>
                <div class="cell large-8 medium-8 small-12">
                    <div class="grid-x">
                        <div class="cell large-2 medium-2 small-0"></div>
                        <div class="cell large-8 medium-8 small-12"><home/></div>
                        <div class="cell large-2 medium-2 small-0"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Navbar from "./components/navbar";
    import Home from "./components/home";

    export default {
        name: 'App',
        data: function () {
            return {}
        },
        methods: {},
        components: {
            Home,
            Navbar
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
