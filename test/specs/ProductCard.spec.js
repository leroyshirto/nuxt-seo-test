import { mount } from '@vue/test-utils'
import test from 'ava'
import ProductCard from '@/components/ProductCard.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(ProductCard)
  t.is(wrapper.isVueInstance(), true)
})
