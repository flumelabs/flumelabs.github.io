export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-svgo'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})