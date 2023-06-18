import { useCallback } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

import contentDataJson from './contenData.json';

export const HelmetComponent = ({ element, children }) => {
  const handleHelmet = useCallback(() => {
    const matchingObject = contentDataJson.find(item => Object.keys(item)[0] === element)

    if (matchingObject) {
      const { title, contentDescription, keyContent } = Object.values(matchingObject)[0];

      return (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={contentDescription} />
          <meta name="keywords" content={keyContent} />
          <meta name="author" content="Vega Robotics" />
          <link rel="canonical" href="https://vegarobotics.com.br" />
        </Helmet>
      )
    }
  }, [element]);


  return (
    <HelmetProvider>
      {handleHelmet()}
      {children}
    </HelmetProvider>
  )
}