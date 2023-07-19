# Chuck says Lab

Today, we are going to build a little app that pulls data from a remote API.

## Objectives 

- Build a dynamic user app
- Use DOM manipulation
- Request data from a remote API
- Use Git Branching!!!

## Repo Instructions

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your GitHub account.*

- Find the repository on *YOUR* account (ie yourUserName/[repoName]) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialogue box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

# Task Instructions

- Navigate into the folder named after the repo clone
- Use Git Branching!!!  **Make a new branch for each Step!!**
    - Merge each **completed** step into the `main` branch using pull requests

## Step one

First, lets add some HTML.

1. Make a `step-1` branch. 
2. Create a `h1` with an `id` of "chuckSays".  The text should also say "Chuck Says...."
3. Make a button that has the `type` of "submit" and `id` of "refreshQuote".  The text on the button can say anything, like "Refresh Quote".
4. Make a `div` that has an `id` of "quoteDIV".

Now to some **JavaScript**.

1. Take a look at the API. Read the docs on what endpoints are available and what the data response looks like. [https://api.chucknorris.io/](https://api.chucknorris.io/)

2. Using the `Random` chuck joke endpoint from the API, lets make some JS to `fetch` the info.  We will be using the `fetch` api.

3. Use your `DOM` skills to get the our `refreshQuote` button and the `quoteDIV`.
4. Create a function called `getQuote`.
5. In the scope of our function, create a `fetch` call to the random Chuck API endpoint.
    - To start, add `console.log` at the beginning of each `.then`.  The first should show the promise response and the second should show the data response.
>Remember there is a three step process to the fetch.  `fetch().then().then()`

6. In the second `.then`, add our data to the `quoteDIV` as text content.  *hint: look at the data to see which key you need to display*

7. Make an event listener on your `refreshQuote` button, which will call our `getQuote` function.

You should have something like this (the quote will be different).

![](./images/step-1-final.png)

8. Commit your code, push your branch, merge to main with a PR, and make a `step-2` branch.

