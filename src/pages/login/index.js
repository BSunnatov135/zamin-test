import SEO from 'components/SEO'
import Login from 'components/UI/Auth/Login'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function Home({ data }) {
  // console.log(data)
  return (
    <>
      <Login />
    </>
  )
}