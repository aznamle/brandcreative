import React from 'react'

import { Client } from '../../prismic-configuration'
import { SliceZone } from '../../components'

const index = ({ doc }) => {
    return (
        <div>
            <SliceZone sliceZone={doc.data.body} />            
        </div>
    )
}

export default index


export async function getStaticProps({ params, preview = null, previewData = {} }) {
  
    const { ref } = previewData
    const client = Client();
    const doc = await client.getSingle('clients', ref ? { ref } : null) || {}
  
    return {
      props: {
        preview,
        doc,
      },
      revalidate: 1,
    }
  }