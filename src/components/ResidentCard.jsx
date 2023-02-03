import axios from 'axios'
import React, { useEffect } from 'react'

const ResidentCard = ({residentUrl}) => {


  useEffect(() => {
    axios.get(residentUrl)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>ResidentCard</div>
  )
}

export default ResidentCard