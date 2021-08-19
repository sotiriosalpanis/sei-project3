# Project Three: Festivalist

## Contents
[Overview](#overview)<br/>
[Team Members](#team)<br/>
[Deployed Project](#project)<br/>
[Technologies Used](#tech)<br/>
[Brief](#brief)<br/>
[Process](#process)<br/>
[Backend](#backend)<br/>
[Front-end](#frontend)<br/>
[App Walkthrough](#walkthrough)<br/>
[Challenges](#challenges)<br/>
[Wins](#wins)<br/>
[Future Improvements](#future)<br/>
[Key Learning](#learning)<br/>

## <a name="overview"></a>Overview
For our third project on the General Assembly Software Engineering Immersive Course, we had to build a full-stack application in a team of 4 people in 7 days. </br>
Our team decided to build a festival finding app. 

### <a name="team"></a>Team Members:
Anna Monkman (me)<br/>
Michael Henderson<br/>
[Sotirios Alpanis](https://github.com/sotiriosalpanis)<br/>
George Shaw<br/>

## <a name="project"></a>Link to Deployed Project
**Link coming soon** </br>
</br>

**Initialisation**
* Clone or download sei-project-three repo
* run MongoDB in background `mongod --dbpath ~/data/db`
* split VSCode terminal in two and `cd backend` in one half
* `yarn` `yarn seed` `yarn serve` in backend to seed database and run server
* Move into frontend in other half of split terminal `cd client`
* Install front-end dependencies `yarn`
* start front-end server `yarn start`
* go to localhost:3000 in browser

## <a name="tech"></a>Technologies Used
**Backend:**
* MongoDB
* Mongoose
* Express
* Express
* BCrypt
* Body-parser
* jsonwebtoken
* Node.js

**Front-end:**
* React.js (Hooks)
* JavaScript
* Axios
* HTTP-proxy-middleware
* Nodemon
* SCSS
* Semantic UI 
* Mapbox
* React Router DOM

**APIs:**
* Mapbox

**Development Tools:**
* Insomnia
* Yarn
* VSCode
* Adobe Photoshop
* Cloudinary
* Trello / Zoom / Slack / Google Sheets & Docs


## <a name="brief"></a>Brief

* Build a full-stack application by making our own backend and own front-end.
* Use an Express API to serve our data from a Mongo database.
* Consume our API with a separate front-end built with React.
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.


## <a name="process"></a>Process

### Planning
Once in our group we discussed ideas for the app concept. Eventually we settled on a festival finding app, partially as a longing to get back to pre-pandemic times. We looked at similar apps online for ideas and to clone parts of if needed. We used Trello, Google Docs and Slack to share ideas and plan each part of the process. </br>
</br>

We decided on the parts of the app we wanted to include. They were:
* Home Page
* Festival Index where the user can filter the festivals by location/price/artist
* Festival Page - to get more information about each festival
* User Profile Page
* Artists index and artist page
* Map of the festival locations

The functionality would include the ability for the user to:
* Register and Login
* Save festivals as interested / going
* Possibly add a comment to the festival

</br>

We planned the structure of our Models Schema on a Google Sheet as the following:

 ![schemadata](https://res.cloudinary.com/project-3/image/upload/v1622590965/sei-readmes/schemadata_gbpxrr.png)

We also tried to find a suitable CSS framework and settled on Semantic UI due to its options for page structure and modern appearance. We also all agreed to have a gradient background as our main styling feature. </br>

### Working in a team
We stayed on Zoom together every day of the project even though we were working on seperate sections of code. This was so we could be there for each other to ask and answer questions if needed. We checked in with each other every morning so we all knew what sections of code we would be working on. This was to avoid merge conflicts. We set up sprint goals to make sure we covered every aspect of the app and ensure for no overlap.
![sprintgoals](https://res.cloudinary.com/project-3/image/upload/v1622590965/sei-readmes/sprintgoals_qepkyn.png)

This was most of our first time using Git and branches as a team so we practised taking it in turns commiting and pushing code before we started. 

### <a name="backend"></a>Backend
We aimed to get the backend set up in 2 - 3 days so that we could get on with the front-end, which would take a lot of time to make function well and look professional.
</br> 
</br> 
We did the initial set up on Liveshare with one person running the set-up commands.

`yarn init` `yarn add express` `yarn add mongoose`

Key parts of the backend included:
* Router.js
* secureRoute.js for authentication
* artists controller
* auth.js controller
* fesivals.js controller
* users.js controller
* seeded artists, seeded festivals, seeded users
* artist, festival, user models
* index.js

Here is an example of a festival controller:
```javascript
export const getOneFestival = async (req, res) => {
  try {
    const { id } = req.params
    const singleFestival = await Festival.findById(id)
    if (!singleFestival) {
      throw new Error('No Festival with this id found>>', id)
    }
    return res.status(200).json(singleFestival)
  } catch (err) {
    console.log('Error in getOneFestival>>', err)
    return res.status(404).json({ message: 'Not found' })
  }
}
```

At this point I started seeding the database with a few festivals to check it was all working and so we had some information to manipulate. </br>
</br>

Here is an example of a seeded festival:
```javascript
{
    festivalName: 'All Points East',
    startDate: '2021-08-27',
    endDate: '2021-08-30',
    website: 'https://www.allpointseastfestival.com/',
    price: 69.95,
    lineup: ['Jamie xx', 'Kano', 'Tom Misch', 'Slowthai', 'Little Simz', 'Arlo Parks', 'Nubya Garcia', 'Pa Salieu', 'Romy'],
    venue: 'Victoria Park, London',
    country: 'United Kingdom',
    latitude: 51.53629,
    longitude: -0.03991,
    mainFestivalImage: 'https://res.cloudinary.com/project-3/image/upload/v1616759750/mainFestivalImage/all-points-east-main_t3jgtk.jpg'
  },
```

</br>
We managed to get the backend set up in a day and a half, so we were able to move onto the front end quite quickly. 

### <a name="frontend"></a>Front-end

We used VSCode liveshare again for initial set up of the front-end. One person ran the command to create the react app. 
`$ yarn create react-app client --template cra-template-ga-ldn`
</br>
We then quickly filled out the basic front-end components and allocated the sections. Michael continued to work on some finer authentication details on the backend. 

### My Focus

My main responsibility was the festival index, including the data, filter functionality, layout and styling. </br>
</br>
On my first day of working on the index page, I created components for the festival index and festival card. I mapped the festival card onto the index page. I used the Semantic UI drop-down elements for filter by country, price and artist. </br> 
</br> 
On the next day I focused on the functionality of the filters. I approached them each individually, starting with the location of the festivals by country. I filtered over the countries array in a useEffect and stored the filtered festivals in State. </br> 
</br> 
By the third day I had three working filters however I realised that getting them to work alongside each other was more complicated than I had thought. I tried for a while then, when stuck, I pair-coded with Sotirios for a few hours, with a small amount of progression. I think we got two to work alongside each other but it wasn't quite as seamless as we wanted. In the evening Sotirios worked on it independently and managed to get it to work.</br> 
</br> 
This was the functionality to get the filters to work alongside one another:

```javascript
useEffect(() => {
    const countryFilterValue = filterValues.country
    const artistFilterValue = filterValues.artist
    const priceFilterValue = filterValues.price

    let filteredArray = []
    filteredArray = festivals.filter(festival => {
      return festival.country === countryFilterValue
      
    })
    setFilteredFestivals(filteredArray)
    if (!artistFilterValue && !priceFilterValue) {
      setFilteredFestivals(filteredArray)
    } else if (filteredArray.length === 0) {
      filteredArray = festivals.filter(festival => {
        return festival.lineup.includes(artistFilterValue) === true
      })
      setFilteredFestivals(filteredArray)   
    } else {
      filteredArray = filteredArray.filter(festival => {
        return festival.lineup.includes(artistFilterValue) === true
      })
      setFilteredFestivals(filteredArray)
    }
    if (priceFilterValue && filteredArray.length === 0 ) {
          if (priceFilterValue === 'cheap') {
            filteredArray = festivals.filter(festival => {
        return (festival.price <= 50)
      })
    }
    if (priceFilterValue === 'midOne') {
      filteredArray = festivals.filter(festival => {
        return (festival.price >= 50 && festival.price <= 100)
      })
    }
    if (priceFilterValue === 'midTwo') {
      filteredArray = festivals.filter(festival => {
        return (festival.price >= 100 && festival.price <= 200)
      })
    }
    if (priceFilterValue === 'expensive') {
      filteredArray = festivals.filter(festival => {
        return (festival.price >= 200)
      })
    }
      setFilteredFestivals(filteredArray)
    } else {
      if (priceFilterValue === 'cheap') {
        filteredArray = filteredArray.filter(festival => {
          return (festival.price <= 50)
        })
      }
      if (priceFilterValue === 'midOne') {
        filteredArray = filteredArray.filter(festival => {
          return (festival.price >= 50 && festival.price <= 100)
        })
      }
      if (priceFilterValue === 'midTwo') {
        filteredArray = filteredArray.filter(festival => {
          return (festival.price >= 100 && festival.price <= 200)
        })
      }
      if (priceFilterValue === 'expensive') {
        filteredArray = filteredArray.filter(festival => {
          return (festival.price >= 200)
        })
      }
        setFilteredFestivals(filteredArray)
    }
  },[filterValues])
```

### Other Key Functionality

This is the function for handling attendence on the Festival Page (by Sotirios):
```javascript
const handleAttendance = async event => {
    let strToBool = false
    if (event.target.value === 'true' ){
      strToBool = true
    } 
    const newUserStatus = { ...userAttendingStatus, [event.target.name]: !strToBool }
    try {
      await axios.post(`/api/festivals/${id}/attendance`,newUserStatus, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`
        }
      })
      setUserAttendingStatus(newUserStatus)
    } catch (err) {
      console.log(err)
    }
  }
```

### Styling: 
We each were largely responsible for styling the areas that we had been working on. 
Sotirios did some of the overall app styling and added in the statement gradient background. George focussed on the slideshow of festival images on the home page.</br>
</br>
I worked on the festival cards and designed the Logo in Adobe Photoshop. I wanted the logo to be quite slick and contemporary but also fun with the twist in the center. I kept it simple and monochrome to form a nice silhouette against the colourful background. </br>

![logo1](https://res.cloudinary.com/project-3/image/upload/v1622590969/sei-readmes/logo1_uuiwjc.png)

</br>
In the final few hours before presentations we decided only one person should code (Sotiros) and the rest of us instruct over screen share. This was to refine the small details to make our app look more tidy and visually appealing. </br>

## <a name="walkthrough"></a>App Walkthrough

#### Home Page
![home](https://res.cloudinary.com/project-3/image/upload/v1622590967/sei-readmes/f2_kkwep8.png)

#### Festival Index Page
![festivalindex](https://res.cloudinary.com/project-3/image/upload/v1622590965/sei-readmes/f6_wqow04.png)

#### Festival Show Page
![festivalshow](https://res.cloudinary.com/project-3/image/upload/v1622590967/sei-readmes/f3_lfqfhd.png)

#### Map of Festivals
![map](https://res.cloudinary.com/project-3/image/upload/v1622590964/sei-readmes/f4_xtqeux.png)

#### Map Detail
![mapdetail](https://res.cloudinary.com/project-3/image/upload/v1622590964/sei-readmes/f5_ccfkut.png)

#### Register / Login Page
![reglogin](https://res.cloudinary.com/project-3/image/upload/v1622590963/sei-readmes/f8_isytoj.png)

#### User Profile Page
![profile](https://res.cloudinary.com/project-3/image/upload/v1622590964/sei-readmes/f7_gkb9cl.png)

#### Artist Index Page
![artistindex](https://res.cloudinary.com/project-3/image/upload/v1622590963/sei-readmes/f9_ybhwoo.png)

#### Artist Show Page
![artistshow](https://res.cloudinary.com/project-3/image/upload/v1622590964/sei-readmes/f10_fzuv82.png)



## <a name="challenges"></a>Challenges
* Getting the filters to work alongside each other. I pair-coded with Sotiros for a few hours, made a small amount of progress but still didn’t get them to work. Sotirios then managed to solve it later that evening. 
* Customising the Semantic UI. It took a decent amount of time to figure out how to use an unfamiliar framework to meet your needs.

## <a name="wins"></a>Wins
* Working in a team. We didn’t have many merge conflicts due to communicating well between ourselves. We all allocated ourselves separate things and organised together when we were going to push code. 
* The user flow of the app was successful. Each element links through to another relevent element. For example the pins on the map link to the relevent festival information page.
* Being able to ask my team questions when I was stuck and bounce ideas off of them. Also being able to help my team members when they had an issue. 
* I was very happy with how my logo fitted on the app. 

## <a name="future"></a>Future Improvements
* Add in more festivals and artists to fill out the pages with information.
* Adjust some of the styling to look more slick - in particular the blocks on the festival and artist show pages. The downside of using a CSS framework is that it can be tricky to customise. 

## <a name="learning"></a>Key Learning
* Working successfully in a larger team using Git. Working in branches. 
* I learned a lot about filtering data in React (Hooks) however in the future I shoudl pseudocode in more depth, because on this occasion I had to change my method completely in order to get the filters to work alongside one another.  
* Using a CSS framework and the positives and negatives of doing so. 
