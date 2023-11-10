# Blogs
This blog website was created using React to practice building applications with modern React conventions including hooks and React Router.
The single page application allows users to add, view, and delete blog posts through RESTful JSON API requests using Fetch methods.
Custom component fetches data from a mock API and maps over it to dynamically display post details using useeffect hook.
State is managed locally by usestate hooks.

IMPORTANT NOTE: 
In order to make the website work, you have to run npx json-server --watch data/db.json --port 7000 to get the data from the mock api.
