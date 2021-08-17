import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'
import HeroBanner from '../components/HeroBanner'
import { SliceZone } from '../components'
import Loader from '../components/Loader'

export default function Home({ doc }) {
  if(!doc && posts) return <Loader />
  if(doc && doc.data) {
  return (
      <div>
        <Head>
          <title> {RichText.asText(doc.data.meta_title)} </title>
          <meta 
            name='description'
            content = {RichText.asText(doc.data.meta_description)}
          />
        </Head>
        <HeroBanner banner={doc.data}/>
        <SliceZone sliceZone={doc.data.body} />
      </div>
    )
  }
  return null
}
  

export async function getStaticProps({ preview = null, previewData = {} }) {
  
  const { ref } = previewData
  const client = Client();
  const doc = await client.getSingle('homepage', ref ? { ref } : null) || {}


  return {
    props: {
      doc,
      preview
    },
    revalidate: 1,
  }
}