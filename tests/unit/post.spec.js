import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'




// The Guides  page Guides list, Create, Update and Details

import Guides from '@/views/Guides/Guides.vue'

describe('Landing.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})


