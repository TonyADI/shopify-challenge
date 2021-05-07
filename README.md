# Shopify Frontend Intern Challenge
The challenge involves setting up a webpage that allows users to search for and nominate 5 movies. The movies are retrieved using OMDB.

## How it Works
- The user enters a term into the search box and the search results are subsequently updated.
- Each search result or movie includes the movie's poster, title and year of release as well as a nominate button.
- After a movie is nominated the nominate button is disabled and the movie is added to the nomination list.
- When the user has nominated five movies a banner is displayed to let them know they have reached the limit and no more movies can be nominated.
- If the user nominates a movie, updates the search term, then returns to the initial search term with the nomiated movie and tries to nominate the same movie again, the nominate button will be disabled but the movie will not be added a second time.
- The users nominations are saved to local storage allowing them to leave the page and come back to it at any time.
<br/>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
