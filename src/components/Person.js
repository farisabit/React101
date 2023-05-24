import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
            I'm {person.name} ({person.age}). I'm good at {person.skill}.
        </h2>
    </div>
  )
}

export default Person