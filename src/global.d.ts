
type CSSItem = CSSObject | SerializedStyles
type CSSList = CSSItem[] | CSSItem

declare module 'react' {
  // @Igor we need to fix this - remove any
  interface Attributes {
    css?: any
  }
  interface HTMLAttributes<T> {
    css?: any
  }
  interface IntrinsicAttributes {
    css?: any
  }
}

declare global {
  namespace JSX {
    interface HTMLAttributes<T> {
      css?: any
    }
  }
}

export {}

declare global {
  interface Window {
    analytics: any
    $crisp: any
    CRISP_WEBSITE_ID: string
    jsonlint: any
    // eslint-disable-next-line camelcase
    __fs_org: string
  }
  interface HTMLIFrameElement {
    webkitallowfullscreen?: any
    mozallowfullscreen?: any
  }
}
