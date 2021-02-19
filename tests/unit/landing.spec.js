import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'


 // The landing page Home, Password-Reset, Register and Login Views

import Landing from '@/views/Landing/Landing.vue'
import Login from '@/views/Landing/Login.vue'
import Register from '@/views/Landing/Register.vue'
import PasswordReset from '@/views/Landing/Password-Reset.vue'





describe('Landing.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})


