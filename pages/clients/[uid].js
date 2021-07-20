import React from 'react'
import { Client } from '../../prismic-configuration'
import { SliceZone } from '../../components'
import { queryRepeatableDocuments } from '../../util/queries'

const Clients = ({ doc }) => {
    console.log(doc)
    return (
        <div>
            <SliceZone sliceZone={doc.data.body} />
        </div>
    )
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