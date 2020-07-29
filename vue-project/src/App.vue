<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>  
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
export default {
  components: {
    ToolBar
  }

}
</script>

<style>
  a {
    color: #34495e;
    text-decoration: none;
  }
  a:hover {
    color: #42b883;
    text-decoration: underline;
  }
  a.router-link-exact-active {
    text-decoration: underline;
  }
  body {
    padding: 0;
    margin: 0;
  }
  .page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
