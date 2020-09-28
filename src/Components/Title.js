import React from 'react'


const style= {
  fontSize: '400%',
  fontColor: 'white',
  fontWeight: 'bold'

}
function Title(prop) {

  return (

    <div>
      <h1 style= {style}>{prop.info}</h1>
    </div>
  )

}

export default Title;
