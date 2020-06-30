import Breadcrumbs from '../breadcrumbs/breadcrumbs.vue'

export default {
    components: {
      Breadcrumbs
    },
    data: function() {
        return {
            scrolled: window.pageYOffset > 0
            ,breadcrumbs: [
              { name: 'Home', href: '/' },
              { name: 'Investments and Savings', href: '/investments' },
            ]
        }
    },
    computed : {
      isLoggedIn : function() { return this.$store.getters.isLoggedIn },
      hasBreadcrumbs: function() {
        return this.breadcrumbs && this.breadcrumbs.length > 0;
      }
    },
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
          this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
        }
      }
}