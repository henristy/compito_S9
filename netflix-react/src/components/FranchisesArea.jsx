import React from 'react'
import Franchise from './Franchise'
export default function FranchisesArea({movies}) {
  return (
    movies.map((movie, i) => <Franchise key={i} movie={movie}/> )
  )
}

