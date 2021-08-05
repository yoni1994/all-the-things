import React from 'react';
import SportsCard from '../../components/SportsCard/SportsCard'
import { Link } from 'react-router-dom'

const StyledSports = (props) => {
  return (
    <>
      <Link to="/">Home</Link>

      {props.sportss.map((sports, idx) => 
        <SportsCard key={idx} sports={sports}/>
      )}
    </>
  )
}

export default StyledSports