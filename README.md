### Your group members and scrum leader (if applicable) 
# Siby - Crime Spotter
### Know before you go!

This website will provide info about crime incidents in various locations around 
the United States. The site collects data from an API called CrimeOMeter/CrimeData. This API 
collects data from police departments, news reports, and user submissions, and 
displays it on an interactive map. Users can search for crime incidents in a specific 
area and view details about the incidents. This app is intended to serve as a resource for 
individuals to stay informed about crime in their communities and to help prevent crime.

![Screenshot 2022-12-23 at 10 57 43 AM](https://media.git.generalassemb.ly/user/45837/files/54f5670c-d1e6-4bf1-acf4-9506baee0eb2)
![Screenshot 2022-12-23 at 12 21 27 AM](https://media.git.generalassemb.ly/user/45837/files/c1205f93-82be-4050-b5b6-1fd923f0cc6a)
![Screenshot 2022-12-23 at 12 21 39 AM](https://media.git.generalassemb.ly/user/45837/files/73049337-de91-481e-b7a7-404520befc26)
![Screenshot 2022-12-23 at 3 37 13 AM](https://media.git.generalassemb.ly/user/45837/files/f86aa382-eefb-4fa4-b8a7-5aa2debc7f53)

### Your tech stack (frontend, backend, database)
## Tech Stack

- Client: React
- Backend: Express & Mongo DB-> |Strictly for user auth| |db for Firebase and Auth middleware|
- Hosting on: Firebase

-UserAuth: Firebase (method GmailAuth)

- Geocoding Google Api
    -cloud account created

- CrimeData Api 

## Hierarchy
 --App.js
 --Nav.js
 --Header.js
 --Footer.js
 --.env
 --Crime.js
 --Map.js
 --Info.js
 --Model.js
 --FireAuth.js


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`FIREBASE_KEY`
### List of backend models and their properties

### React component hierarchy (if applicable)

### User stories
## As A User Stories

- AAU, I want to be able to see a map of recent crime incidents in the area I'm in or the area I'm going.
- AAU, I want the App to be User Friendly.
- AAU, I want to be able to click on the crime pointer and a model pop up with that incident data appearing.
- AAU, I want to know before I go. 


## Mvp
- Functionality:
    - User Auth (google)
    - Search bar for city
    - Search locates user to destination 
    - Map renders api crime activity
    - Click on target in map and render data in a model

- Design: 
    - Design that is functional and visually appealing
    - Color schema/ Layout

- Content: 
    - Content has value to user
    - About / How to : Website is easily understandable

- Performance:
    - Requests load without downtime or error 
 

## POST - Mvp
- Host on Firebase 
- Implement optional user share location for map services
- Implement Kubernetes Api through cloud

## FAQ-- Info.js

### Why Siby --Crime Spotter--

While working with a large telecom company, I was held a gun point and robbed. When the barrel of a gun is touching your forehead, thinking is hard. I did what they asked and ran when given the chance. The next 
acts will be a complete blur for a lot of people. For some its four words on repeat, Run, Hide, Safe, Call. The customer and I locked all doors and hide in the bathroom. The police arrived around five minutes after calling 911. There, the customer and I were informed there had been three shootings in the past week with one being fatal. No one was ever caught. 

- Why isn't this easy info to access.
- Why are new residence being made aware of this info? 
- Why are employers not implementing safety measures on 'informed locations stats', they're sending their employees to?


#### This App is for You, Your Family, Your loved Ones! 
#### This App is for Employers to do everything they can to insure their Employees are informed and safe.  

### That is Why Siby!