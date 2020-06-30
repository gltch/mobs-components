<style lang='sass'>
  @import './breadcrumbs.scss';
</style>

<template>
    <div v-bind:class="['breadcrumbs', 'container', scrolled ? 'scrolled': '']">

      <a v-for="crumb in breadcrumbs" :key="crumb.name" :href="crumb.href">{{crumb.name}}</a>

    </div>
    
</template>

<script>
  import Breadcrumbs from './breadcrumbs.js';
  export default Breadcrumbs;
</script>