"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6038],{36038:function(t,e,r){r.r(e),e.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Basic Theme (dark/light)\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-basic.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-basic)\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/basic/dark\">\n  <img width=\"436\" alt=\"codemirror-theme-basic dark\" src=\"https://github.com/uiwjs/react-codemirror/assets/1680273/977c1271-eca1-4f61-ad90-3a89f4ea4871\">\n</a>\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/basic/light\">\n  <img width=\"436\" alt=\"codemirror-theme-basic light\" src=\"https://github.com/uiwjs/react-codemirror/assets/1680273/e5b43612-5190-4d5b-ab7a-0f5d369ad7e4\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-basic --save\n```\n\n```jsx\nimport { basicLight, basicLightInit, basicDark, basicDarkInit } from '@uiw/codemirror-theme-basic';\n// Or\nimport { basicDark, basicDarkInit } from '@uiw/codemirror-theme-basic/dark';\nimport { basicLight, basicLightInit } from '@uiw/codemirror-theme-basic/light';\n\n<CodeMirror theme={basicLight} />\n<CodeMirror\n  theme={basicLightInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    }\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsBasicLight: CreateThemeOptions['settings'];\nexport declare const basicLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const basicLight: import('@codemirror/state').Extension;\nexport declare const defaultSettingsBasicDark: CreateThemeOptions['settings'];\nexport declare const basicDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const basicDark: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { basicLight, basicDark } from '@uiw/codemirror-theme-basic';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={basicLight}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { basicLight, basicDark } from '@uiw/codemirror-theme-basic';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [basicDark, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n\nby Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n",headings:[]}}}]);