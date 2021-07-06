import React from 'react'

const SliceZone = ({ sliceZone }) => (
    <div>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('text'):
          return <TextSection slice={slice} key={`slice-${index}`} />
        }
    })}
    </div>
)

export default SliceZone