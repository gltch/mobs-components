<style lang='sass'>
  @import './breadcrumbs.scss';
</style>

<template>
    <div v-bind:class="['breadcrumbs', 'container']">

      <a v-for="crumb in filteredBreadcrumbs" :key="crumb.href" :href="crumb.href" @click.prevent='breadcrumbClicked(crumb)'>
        {{crumb.name}}
      </a>

    </div>
    
</template>

<script>
  import Breadcrumbs from './breadcrumbs.js';
  export default Breadcrumbs;
</script>