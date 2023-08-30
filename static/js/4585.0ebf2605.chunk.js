"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4585],{24585:function(t,o,n){n.r(o),o.default={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# TokyoNightDay Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-tokyo-night-day.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night-day)\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night-day\">\n  <img width=\"436\" alt=\"codemirror-theme-tokyo-night-day\" src=\"https://user-images.githubusercontent.com/1680273/206104544-ca4db2e0-caac-4804-9321-c269fe660245.png\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-tokyo-night-day --save\n```\n\n```jsx\nimport { tags as t } from '@lezer/highlight';\nimport { tokyoNightDay, tokyoNightDayInit } from '@uiw/codemirror-theme-tokyo-night-day';\n\n<CodeMirror theme={tokyoNightDay} />\n<CodeMirror\n  theme={tokyoNightDayInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    },\n    styles: [\n      { tag: t.comment, color: '#6272a4' },\n    ]\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsTokyoNightDay: CreateThemeOptions['settings'];\nexport declare const tokyoNightDayInit: (\n  options?: Partial<CreateThemeOptions>,\n) => import('@codemirror/state').Extension;\nexport declare const tokyoNightDay: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={tokyoNightDay}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night-day';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [tokyoNightDay, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[]}}}]);