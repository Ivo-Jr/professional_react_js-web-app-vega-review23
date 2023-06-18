import { HelmetComponent } from '../../components/Helmet';
import { BenefitsSection } from "./components/Benefits"
import { Partners } from "./components/Partners"
import { TabPanel } from "./components/TabPanel"
import { VegaNumbers } from "./components/VegaNumbers"
import { Movie } from "./components/Movie"
import { Welcome } from "./components/Welcome"

export const Home = () => {
  return (
    <HelmetComponent element="Home">
      <Welcome />
      <Movie />
      <TabPanel />
      <BenefitsSection />
      <VegaNumbers />
      <Partners />
    </HelmetComponent>
  )
}