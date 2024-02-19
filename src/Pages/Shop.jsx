import React from 'react'
import NewCollections from '../Components/NewCollections/NewCollection'
import Hero from "../Components/Hero/Hero"
import Offers from '../Components/Offers/Offers'

export default function Shop() {
  return (
    <div>
      <Hero/>
     <NewCollections/>
     <Offers/>
     <NewCollections/>
    </div>
  )
}
