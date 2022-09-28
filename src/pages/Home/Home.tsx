import Breadcrumbs from '@components/Breadcrumbs'
import PageUnderConstruction from '@components/PageUnderConstruction'

const Home = (): JSX.Element => {
  return (
    <>
      <Breadcrumbs route="Hogar" />
      <PageUnderConstruction />
    </>
  )
}

export default Home
