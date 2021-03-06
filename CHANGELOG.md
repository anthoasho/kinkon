## 0.2.9
- Added dropdown menu for individual messages
- Set a colour scheme with CSS variables
- Began implementation of custom made SVG files as functional components
- Allow API to view a single user's profile without need to log in
  - Preview Mode shows a login/logout button in Navigation bar and shows basic information of that user. 

## 0.2.8
- Added Sidebar for easier navigation of profile editing
  - Separated the edit profile options to multiple segments
## 0.2.7
- Redesign of the landing page
  - improved fluidity of Sign in and Sign up pages
## 0.2.6

- UX improvements
  - Loading indicator upon login
  - Improved navigation

## 0.2.5

- Initial deployment

## 0.2.0

First changelog creation

###Features

##### User details
  - Registration
  - Login
  - Edit profile
  - Logout
  - Store user details in Local Storage
  - Display current User and other user's profile page
  - Display data relating to follow counts, on click leads to showing those lists

##### Messages
  - Post a new message (160 character limit)
  - Display up to 10 messages, with a load more continuing from ID of last message
  - Like and unlike a single message
  - Display number of people who have liked a message
    - On click - view people who have liked a message  
  - Soft delete own message
  - Display time of message posting
  - Display profile picture and other user details

##### Follow Features
  - Adaptive follow button that updates instantly
    - Also displays "Edit profile" link if the user is the current user
    - Updates individual items in a list of follow users
    - If viewing profile of the user to follow, their follow list will auto-update

##### Discover
  - Currently returns a random list of users which show your followers' followers
  - For small scale, it also adds other random users to the list


#### Mobile
  - Responsive layout which slightly resembles a mobile application when viewed on a Mobile device (500px)
  - Shows a bottom navigation bar used to use different elements of the application
  - Also restructures in 700px viewing format
