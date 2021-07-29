import React from 'react'
import { 
  PageHeader,
  FeatureBlock,
  BreakBlock,
  CenterBlockText,
  ContentBlock,
  ClientsListBlock,
  CompanyBlock,
  TeamBlock
 } from './'

const SliceZone = ({ sliceZone }) => (
    <div>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('page_header'):
          return <PageHeader slice={slice} key={`slice-${index}`} />
        case ('feature_block'):
          return <FeatureBlock slice={slice} key={`slice-${index}`} />
        case ('break_block'):
          return <BreakBlock slice={slice} key={`slice-${index}`} />
        case ('center_text_block'):
          return <CenterBlockText slice={slice} key={`slice-${index}`} />
        case ('content_block'):
          return <ContentBlock slice={slice} key={`slice-${index}`} />
        case ('clients_block'):
          return <ClientsListBlock slice={slice} key={`slice-${index}`} />
        case ('company_block'):
          return <CompanyBlock slice={slice} key={`slice-${index}`} />
        case ('team_block'):
          return <TeamBlock slice={slice} key={`slice-${index}`} />
        }
    })}
    </div>
)

export default SliceZone