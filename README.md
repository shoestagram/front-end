# Shoestagram Front-End

The front-end of the Shoestagram app is created with React, flexbox, and NPM packages.

Every functional element of the app is divided up into components so that we can make the User Experience fully customizable. The components are reusable and we are able to adjust the final layout of the app throughout development.

# Main Components

## Home

The Home.jsx page is located at URL + '/'. This page is where the images from the database are displayed to the user.
###### Files used: ######
* Home.jsx
* home.css
* Navbar.jsx
* navbar.css
* Footer.jsx
* footer.css

## Media

The Media.jsx is located at URL + '/media'. This page is really the sole(haha) of the app. It displays the image that the user clicked in jumbo format, as well as some product information that is relevant to the customer. It also houses the links for the customer to buy the product online or in-store. The in-store feature reveals a Google Map which displays the user's location and a route to the nearest sneaker store of their choice.
###### Files used: ######
* Media.jsx
* media.css
* NavNoSearch.jsx
* navnosearch.css
* Footer.jsx
* Footer.css
* GMap.jsx


## Profile

The Profile.jsx page is located at URL + '/profile'. This page displays the Username and avatar of the user linked to their Facebook account. This page is where the user can see all of the images they’ve liked in the app, so that they can revisit them and maybe make purchases later.
###### Files used: ######
* Profile.jsx
* profile.css
* NavNoSearch.jsx
* navnosearch.css
* Footer.jsx
* Footer.css
* GMap.jsx

# Other Components

## Login/Splash page

The login page is located at URL + ‘/login’. It displays a short Javascript animation followed by the ability for the user to log into the webpage. They will not be able to proceed with any other site URL until they log in.