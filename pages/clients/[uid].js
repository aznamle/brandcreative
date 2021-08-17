import React from 'react'
import { Client } from '../../prismic-configuration'
import { SliceZone } from '../../components'
import { queryRepeatableDocuments } from '../../util/queries'
import Loader from '../../components/Loader'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'


const Clients = ({ doc }) => {
    if(!doc) return <Loader />
    if (doc && doc.data) {
        return (
            <div className=''>
              <Head>
                <title> {RichText.asText(doc.data.meta_title)} </title>
                <meta 
                  name='description'
                  content = {RichText.asText(doc.data.meta_description)}
                />
              </Head>

              <SliceZone sliceZone={doc.data.body} />
            </div>
        )
    }
    return null;
}

export default Clients

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  
    const { ref } = previewData
    const client = Client();
    const doc = await client.getByUID('clients', params.uid, ref ? { ref } : null) || {}
  
    return {
      props: {
        preview,
        doc,
      },
      revalidate: 1,
    }
  }

  export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'blog')
    return {
      paths: documents.map(doc => `/clients/${doc.uid}`),
      fallback: true,
    }
  }