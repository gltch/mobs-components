import { mapState } from 'vuex'
import Breadcrumbs from '../breadcrumbs/breadcrumbs.vue'

export default {

  components: {
    Breadcrumbs
  },

  data: function() {
      return {
          scrolled: window.pageYOffset > 0
      }
  },
  computed: mapState({

    breadcrumbs: state => state.breadcrumbs,
    
    isLoggedIn: function() {
      if (this.$store) {
        return this.$store.getters.isLoggedIn 
        
      } else {
        return false;
      }
    },

    hasBreadcrumbs: function() {
      return this.breadcrumbs && this.breadcrumbs.length > 0;
    }

  }),

  created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
          this.scrolled = window.pageYOffset > 0;
      },
      logout: function () {
        if (this.$store) {
          this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
        }
      }
    }
}