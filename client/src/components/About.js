import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const Home = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-inner-container'>
          <div className='about-card'>
            
            <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQE5cV5-04RKeQ/profile-displayphoto-shrink_200_200/0/1612114384620?e=1622678400&v=beta&t=ti8DRvLTw4_9BQr3n8LO2UpMp0cNsZcQsKbuMQVbvjY'/>
            
            <Card.Content>
              <Card.Header as='h3'>Anna Monkman</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a href='https://www.linkedin.com/in/anna-monkman-526734125/' target='blank'>
                <Icon name='linkedin'/>
            LinkedIn
              </a>
            </Card.Content>
            <Card.Content extra>
              <a href='https://github.com/annamonkman' target='blank'>
                <Icon name='github'/>
            GitHub
              </a>
            </Card.Content>
          </div>
          <div className='about-card'>
            <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQFKaDnlBCNHgg/profile-displayphoto-shrink_200_200/0/1612125430137?e=1622678400&v=beta&t=5pOBOy9fpIKd3TduFtpLOJx7qsbSdsc_uUmO3Q_jcOY'/>
            <Card.Content>
              <Card.Header as='h3'>George Shaw</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a href='https://www.linkedin.com/in/georgeshaw1998/' target='blank'>
                <Icon name='linkedin'/>
            LinkedIn
              </a>
            </Card.Content>
            <Card.Content extra>
              <a href='https://github.com/Gs742' target='blank'>
                <Icon name='github'/>
            GitHub
              </a>
            </Card.Content>
          </div>
        </div>
        <div className='about-inner-container'>
          <div className='about-card'>
            <Image src='https://media-exp1.licdn.com/dms/image/C5103AQF_gzGZCkMefw/profile-displayphoto-shrink_200_200/0/1517547323802?e=1622678400&v=beta&t=799x8DE4FzkyZeZzYP-lveDsg-Hv784NT1tkf75_ros'/>
            <Card.Content>
              <Card.Header as='h3'>Sotirios Alpanis</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a href='https://www.linkedin.com/in/sotirios-alpanis-5903b960/' target='blank'>
                <Icon name='linkedin'/>
            LinkedIn
              </a>
            </Card.Content>
            <Card.Content extra>
              <a href='https://github.com/sotiriosalpanis' target='blank'>
                <Icon name='github'/>
            GitHub
              </a>
            </Card.Content>
          </div>
          <div className='about-card'>
            <Image src='https://res.cloudinary.com/project-3/image/upload/v1617270749/mainFestivalImage/Screenshot_2021-04-01_at_10.52.17_am_jduxlx.png'/>
            <Card.Content>
              <Card.Header as='h3'>Michael Henderson</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a href='https://www.linkedin.com/in/mhenderson24/' target='blank'>
                <Icon name='linkedin'/>
            LinkedIn
              </a>
            </Card.Content>
            <Card.Content extra>
              <a href='https://github.com/Awyssa' target='blank'>
                <Icon name='github'/>
            GitHub
              </a>
            </Card.Content>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

