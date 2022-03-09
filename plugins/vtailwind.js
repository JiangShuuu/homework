import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import { TInput, TTextarea, TCard, TButton } from 'vue-tailwind/dist/components'

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  't-button': {
    component: TButton,
    props: {
      fixedClasses: 'block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      classes: 'text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600',
      variants: {
        secondary: 'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600',
        error: 'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600',
        success: 'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600',
        link: 'text-blue-500 underline hover:text-blue-600'
      }
    }
  },
  't-card': {
    component: TCard,
    props: {
      fixedClasses: {
        wrapper: 'border rounded shadow-sm ',
        body: 'p-3',
        header: 'border-b p-3 rounded-t',
        footer: 'border-t p-3 rounded-b'
      },
      classes: {
        wrapper: 'bg-white border-gray-100',
        body: '',
        header: 'border-gray-100',
        footer: 'border-gray-100'
      },
      variants: {
        danger: {
          wrapper: 'bg-red-50 text-red-700 border-red-200',
          header: 'border-red-200 text-red-700',
          footer: 'border-red-200 text-red-700'
        }
      }
    }
  },
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
