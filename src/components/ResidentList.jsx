import React from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({pagination}) => {
  return (
    <section>
      {
        pagination()?.map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl}/>)
      }
    </section>
  )
}

export default ResidentList