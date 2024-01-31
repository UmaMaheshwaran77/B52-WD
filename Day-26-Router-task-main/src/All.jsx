

import React from 'react'
import Career from './Career'
import CyberSecurity from './CyberSecurity'
import FullStackDevelopment from './FullStackDevelopment'
import DataScience from './DataScience'

function All() {
  return (
   <div className='container'>
    <Career></Career>
    <CyberSecurity></CyberSecurity>
    <FullStackDevelopment></FullStackDevelopment>
    <DataScience></DataScience>
   </div>
  )
}

export default All;