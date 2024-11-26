# Demo Article App for Atlas Screening

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Firebase was used for deploying the app and setting up a basic database to pull info.

[Demo App link](https://article-feed-a9bf5.web.app/)

## Features

- Display Articles
- Search Bar that lets you filter articles based on headline or preview text
- Clickable cards for each article that takes you to the detailed page
- Thumbnails

## Improvements

These are some improvements that I didn't get time to get to but I feel would be nice to have.

- Add strong data validation on clientside. Currently clientside assumes everything send from server is perfect and there is little to no error handling
- Add debouncing to search filtering
- Add additional ways to filter the articles (tags etc)
- Find a way to sort the articles (recent, popular etc)
- Definitely some styling improvements. Not an expert there so just added super basic stuff to make it slightly more appealing

## Complications

Some issues that I ran into and workarounds

- This was my first time using firebase so there was some getting used to. It is super easy to use so that was helpful
- Couldn't figure out a way to store thumbnails. Free tier only allowed database and object storage setup required some upgrade. Decided to reference origincal img sources in the database directly
