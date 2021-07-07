import React from 'react'
import { 
  PageHeader,
  FeatureBlock
 } from './'

const SliceZone = ({ sliceZone }) => (
    <div>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('page_header'):
          return <PageHeader slice={slice} key={`slice-${index}`} />
        case ('feature_block'):
          return <FeatureBlock slice={slice} key={`slice-${index}`} />
        }
    })}
    </div>
)

export default SliceZone