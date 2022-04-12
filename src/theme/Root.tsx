import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'

// Default implementation, that you can customize
function Root ({ children }) {
  return (
    <>
    <BrowserOnly>
      {() => {
        const createScript = function (src) {
          const script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = src
          document.getElementsByTagName('head')[0].appendChild(script)
        }

        let hasLoaded = false
        const load = function () {
          if (hasLoaded) return
          hasLoaded = true
          setTimeout(() => {
            createScript('https://client.crisp.chat/l.js')
          }, 1000)
        }

        setTimeout(load, 6000)
        window.addEventListener('scroll', load, { once: true })
        window.addEventListener('click', load, { once: true })

        // eslint-disable-next-line
        window.$crisp = []
        window.CRISP_WEBSITE_ID = '3009d82b-fb6b-4e08-80e2-13c6e6d28974'

        return <></>
      }}
      </BrowserOnly>
     {children}
    </>
  )
}

export default Root
