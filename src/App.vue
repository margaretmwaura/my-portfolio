<template>
    <div id="app">
        <div class="grid-frame page-container">
            <div class="grid-y page-container_content-wrap">
                <div class="cell large-4 medium-4 small-12 page-container_content-wrap_top">
                    <div class="grid-x">
                        <div class="cell large-2 medium-2 small-0"></div>
                        <div class="cell large-8 medium-8 small-12">
                            <navbar/>
                        </div>
                        <div class="cell large-2 medium-2 small-0"></div>
                    </div>
                </div>
                <div class="cell large-8 medium-8 small-12">
                    <div class="grid-x">
                        <div class="cell large-2 medium-2 small-0"></div>
                        <div class="cell large-8 medium-8 small-12">
                            <home/>
                        </div>
                    </div>
                    <div class="cell large-2 medium-2 small-0">
                    </div>
                </div>
            </div>
            <div class="page-container_bottom_navbar">
                <p>Made with <i class="far fa-heart"></i> by Maggie Mwaura</p>
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
            Navbar,
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
