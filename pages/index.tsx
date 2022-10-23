import Body from '../components/Body'
import Footer from '../components/Footer'
import MainHeader from '../components/MainHeader'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <>
      <Seo title={"JCastle's AI Lab"} />
      <MainHeader />
      <Body />
      <Footer />
    </>
  )
}
