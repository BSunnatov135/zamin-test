import SEO from 'components/SEO'
import EventList from 'components/UI/Event/EventList'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function Home({ data }) {
  // console.log(data)
  return (
    <>
      <SEO />
      <EventList />
    </>
  )
}

// export async function getServerSideProps(context) {
//   const urls = ['https://www.zaminfoundation.ngo/ru/articles?page=3&limit=10']
//   const data = await fetchMultipleUrls(urls)

//   return {
//     props: {
//       data
//     }
//   }
// }
