import React from 'react'

const Clients = ({ doc }) => {
    return (
        <div>
            
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
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'clients')
    return {
      paths: documents.map(doc => `/clients/${doc.uid}`),
      fallback: true,
    }
  }