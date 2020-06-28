export default {
    data: function() {
        return {
            scrolled: window.pageYOffset > 0
        }
    },
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
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