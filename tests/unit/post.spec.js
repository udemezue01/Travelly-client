import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'


 // The landing page Home, Password-Reset, Register and Login Views

import Landing from '@/views/Landing/Landing.vue'
import Login from '@/views/Landing/Login.vue'
import Register from '@/views/Landing/Register.vue'
import PasswordReset from '@/views/Landing/Password-Reset.vue'

// The Hotel page Hotel list, Create, Update and Details

import Hotels from '@/views/Hotels/Hotels.vue'

// The Chat page Chat list, Create, Update and Details

import Chat from '@/views/Chat/Chat.vue'

// The Feeds page Feeds list, Create, Update and Details
import Feeds from '@/views/Feeds/Feeds.vue'

// The Flight page Flight list, Create, Update and Details

import Flight from '@/views/Flight/Flight.vue'

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


