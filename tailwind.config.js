import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import { TInput, TTextarea, TCard } from 'vue-tailwind/dist/components'

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  't-input': {
    component: TInput,
    props: {
      classes: 'border-2 block w-full rounded text-gray-800'
      // ...More settings
    }
  },
  't-textarea': {
    component: TTextarea,
    props: {
      classes: 'border-2 block w-full rounded text-gray-800'
      // ...More settings
    }
  }
  // ...Rest of the components
}

Vue.use(VueTailwind, settings)
