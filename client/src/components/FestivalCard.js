import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const FestivalCard = ({ festivalName, mainFestivalImage }) => {
  
  console.log('IMAGE', mainFestivalImage)
  return (
    <Card>
      <h2>  {festivalName} </h2>
      <Image src={`${mainFestivalImage}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content> */}
    </Card>


  )

}

export default FestivalCard
