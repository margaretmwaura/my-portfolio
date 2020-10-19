<template>
    <div id="app">
        <div class="grid-frame page-container">
            <div class="grid-y page-container_content-wrap">
                <div class="cell large-4 medium-4 small-12 page-container_content-wrap_top">
                    <div class="grid-x">
                        <div class="cell large-2 medium-2 small-0"></div>
                        <div class="cell large-8 medium-8 small-12">
                            <div class="grid-x header">
                                <div class="cell large-6 medium-6 small-12">
                                    <i class="fas fa-arrow-right header_title">
                                        <span class="one"> my-portfolio :</span>
                                        <span class="two"> git </span>
                                        <span class="three">(</span>
                                        <span class="four">{{current_path}}</span>
                                        <span class="three"> )</span>
                                    </i>
                                </div>
                                <div class="cell large-6 medium-6 small-12 header_right">
                                    <div class="header_right_icon">
                                        <p>
                                            <input type="checkbox" id="switch" class="checkbox" v-model="darkMode"/>
                                            <label for="switch" class="toggle"></label>
                                        </p>
                                    </div>
                                    <div id="responsive-menu" class="header_right_links">
                                        <div class="title-bar-right" data-responsive-toggle="example-menu" data-hide-for="medium">
                                            <button class="hamburger-icon" type="button" data-toggle="example-menu">
                                            </button>
                                        </div>
                                        <div class="top-bar" id="example-menu">
                                            <div class="top-bar-right">
                                                <ul class="vertical medium-horizontal menu">
                                                    <router-link to="/about" class="header_right_links_routes">About</router-link>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cell large-2 medium-2 small-0"></div>
                    </div>
                </div>
                <div class="cell large-8 medium-8 small-12">
                    <div class="grid-x">
                        <div class="cell large-2 medium-2 small-0"></div>
                        <div class="cell large-8 medium-8 small-12">
                            <router-view></router-view>
                        </div>
                        <div class="cell large-2 medium-2 small-0">
                        </div>
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

    export default {
        name: 'App',
        data: function () {
            return {
                darkMode: false,
                current_path : 'home'
            }
        },
        methods: {},
        components: {
        },
        watch: {
            darkMode: {
                handler: function () {
                    let htmlElement = document.documentElement;
                    if (this.darkMode) {
                        this.$store.commit('SET_APPLICATION_THEME', 'dark');
                        htmlElement.setAttribute('theme', 'dark');
                    } else {
                        this.$store.commit('SET_APPLICATION_THEME', 'light');
                        htmlElement.setAttribute('theme', 'light');
                    }
                }

            },
            $route(to) {
                this.current_path = to.name.toLowerCase().trim();
            }
        },
        mounted() {
            this.current_path = this.$route.name.toLowerCase().trim();
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
