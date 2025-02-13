# Crunchy Blog

## Description

Read the latest blog posts

## Project Approach and Implementation:

- The project was built using Next.js, a React framework. Using Next.js allowed to create server-side rendered pages, which is beneficial for SEO and performance.
- Tailwind CSS was used for styling. Tailwind CSS is a utility-first CSS framework that allows to build custom designs without leaving the HTML.
- The blog posts are fetched from JSON Placeholder, a free fake online REST API for testing and prototyping.
- The blog posts are displayed on the home page. Each blog post is a link card with a title.
- Client side pagination is implemented. The user can navigate through the blog posts using the next and previous buttons.
- When a blog post is clicked, the user is taken to the blog post page, where the full blog post and the author information is displayed.
- The blog post page also has a back button that takes the user back to the home page.
- The project is responsive and works on mobile, tablet, and desktop devices.

## Tech Stack:

- Next.js (v15)
- Tailwind CSS
- JSON Placeholder

## Challenges and Solutions:

- One of the challenges was to implement client side pagination such a way that it doesn't lose the state when the user navigates to a different page. The solution was to use the React Context API to store the current page number and the blog posts. This way, the state is preserved when the user navigates back and forth between the pages.
- Another challenge was to display the author information on the blog post page. The solution was to fetch the author information from JSON Placeholder using the author ID provided in the blog post data.

## Use of AI Tools

- AI tools were used to rewrite the Readme file only for more clarity and conciseness.
