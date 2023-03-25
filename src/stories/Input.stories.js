import Input from '../components/Input.vue'

export default {
  title: 'Stories/Input',
  component: Input,
  argTypes: {}
}

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args }
  },
  template: '<Input v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {}
