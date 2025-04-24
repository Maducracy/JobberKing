import React from 'react'
import { useApistore } from '../Zustand'

function Jobs() {
    const data = useApistore();
    const{create}=data
  return (
    <div>
       
       <h1>{name}</h1>

    </div>
  )
}

export default Jobs