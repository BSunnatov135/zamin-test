import SEO from 'components/SEO'
import Achievements from 'components/UI/Achievements'
import Advert from 'components/UI/Advert'
import Banner from 'components/UI/Banner'
import Event from 'components/UI/Event'
import Footer from 'components/UI/Footer/Footer'
import Header from 'components/UI/Header/Header'
import HelpPeople from 'components/UI/HelpPeople'
import Partners from 'components/UI/Partners'
import Projects from 'components/UI/Projects'

export default function Home() {
  return (
    <>
      <SEO />
      {/* <Header /> */}
      <Banner />
      <Projects />
      <Partners />
      <HelpPeople />
      <Event />
      <Advert />
      <Achievements />
      {/* <Footer /> */}
    </>
  )
}
