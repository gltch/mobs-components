export default { 
  props: ['breadcrumbs'],

  computed: {

    filteredBreadcrumbs: function() {

      if (this.breadcrumbs.length > 3) {

        var filteredCrumbs = [];

        filteredCrumbs.push(this.breadcrumbs[0]);
        filteredCrumbs.push({

          name: "...",
          href: this.breadcrumbs[this.breadcrumbs.length - 3].href

        });
        filteredCrumbs.push(this.breadcrumbs[this.breadcrumbs.length - 2]);
        filteredCrumbs.push(this.breadcrumbs[this.breadcrumbs.length - 1]);

        return filteredCrumbs;

      }
      else {
        return this.breadcrumbs;
      }

    }

  },

  methods: {

    breadcrumbClicked: function(crumb) {

      if (this.$store) {

        this.$store.dispatch('breadcrumbClicked', crumb);

      } 
      else {
        console.log('This only works with Vuex');
      }

    }

  }

}