import React from 'react'
import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components'
import { queryRepeatableDocuments } from '../util/queries'

import Head from 'next/head'
import { RichText } from 'prismic-reactjs'


const Page = ({ doc, clients }) => {
  console.log(doc)
  if(!doc) return <div>Loading</div>
      if (doc && doc.data) {
      return (
          <div>
            <Head>
              <title> {RichText.asText(doc.data.meta_title)} </title>
              <meta 
                name='description' 
                content = {RichText.asText(doc.data.meta_description)}
              />
            </Head>
            <SliceZone sliceZone={doc.data.body} clients={clients}/>
          </div>
          
      )
    }
    return null;
}

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  
    const { ref } = previewData
    const client = Client();
    const doc = await client.getByUID('page', params.uid, ref ? { ref } : null) || {}

    const clients = await client.query(
      Prismic.Predicates.at("document.type", "clients"), {
        orderings: "[my.clients.publish_date desc]",
        ...(ref ? { ref } : null)
      },
    )
  
    return {
      props: {
        preview,
        doc,
        clients: clients ? clients.results: [],
      },
      revalidate: 1,
    }
  }

  export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'page')
    return {
      paths: documents.map(doc => `/${doc.uid}`),
      fallback: true,
    }
  }
  
export default Page
