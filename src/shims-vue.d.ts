/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.pdf' {
  const content: string;
  export default content;
}

declare module '*.ttf' {
  const content: ArrayBuffer;
  export default content;
}
