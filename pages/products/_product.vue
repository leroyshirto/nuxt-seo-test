<template>
  <section class="section">
    <section class="section">
      <product-card :product="product" v-if="product"></product-card>
    </section>
  </section>
</template>

<script>
import ProductCard from '~/components/ProductCard'
import { getProductById } from '~/services/productService'

export default {
  components: {
    ProductCard
  },
  async asyncData ({ params, error }) {
    let product = null
    try {
      const productId = params.product
      if (!productId) {
        throw new Error('ProductId: is required')
      }

      product = await getProductById(productId)
      if (!product) {
        throw new Error(`ProductId: ${productId} not found`)
      }
    } catch (error) {
      console.log(error)
    }

    return {
      product
    }
  },
  head () {
    return {
      title: this.product.name + ' | Nuxt SEO Test',
      description: this.product.description,
      meta: [
        // Essential META Tags
        {
          'property':  'og:title',
          'content':  this.product.name + ' | Nuxt SEO Test',
        },
        {
          'property':  'og:description',
          'content':  this.product.description,
        },
        {
          'property':  'og:image',
          'content':  this.product.image,
        },
        {
          'property':  'og:url',
          'content':  process.env.baseURL,
        },
        {
          'name':  'twitter:card',
          'content':  'summary_large_image',
        },
        // Non-Essential, But Recommended
        {
          'property':  'og:site_name',
          'content':  'Nuxt SEO Test',
        },
        {
          'property':  'twitter:image:alt',
          'content':  'Nuxt SEO Test',
        },
      ]
    }
  }
}
</script>
