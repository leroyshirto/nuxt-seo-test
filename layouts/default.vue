<template>
  <div>
    <b-navbar>
      <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
              Vue SEO Test
          </b-navbar-item>
      </template>
      <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                Contact
            </b-navbar-item>
            <b-navbar-item href="https://github.com/leroyshirto/vuejs-seo-test">
                Documentation
            </b-navbar-item>
        </template>
    </b-navbar>

    <nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
