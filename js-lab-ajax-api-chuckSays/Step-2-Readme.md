# Chuck Says Step 2

First, MAKE A NEW BRANCH `step-2`!!

If you look at the API documentation ... 

[https://api.chucknorris.io/](https://api.chucknorris.io/)

you will see that there are different endpoints.  In particular, you can get a list of `categories` and search by a `category`.  So that is next.  We are going to **REFACTOR** our code to add the ability to search by a category.

### HTML

1. Add a form between our `refreshQuote` button and our `quoteDIV`.
2. Our form should have one (1) text input, with the `id` of *categoryInput* and the `name` of *categoryInput*.
>Use proper Form technique and `label` your inputs!!  Want to level up?  Make your input box have this in it.
![](./images/step-2-level-up.png)
3. Add a button **in** the form with `type` *submit* and `id` *submitForm*.  Your text on the button can be anything, like "Get a Category Quote".

You should have something like this.

![](./images/step-2-html.png)

### JavaScript

Ok, now we have our UI ready, time to get to work!

![](https://media.giphy.com/media/3o7TKGMZHi73yzCumQ/giphy.gif)

1. Use `DOM` to make our `submitForm` button available in JS.
2. Add an event listener on our `submitForm` button that takes in the event _(hint: parameter)_ and uses `DOM` to make our `categoryInput` available in JS.
3. In the event listener, make a variable called `category` and set it equal to the `value` from our `categoryInput` _(hint: remember you can console log DOM objects to see keys and values!)_
4. `console.log` our `category` variable.  Try it.  Did it work??

![](https://media.giphy.com/media/fV1yHo8YyoKjzvMCKr/giphy.gif)

Ok, so why???  Well, look at your browswers URL.

![](./images/step-2-error.png)

Notice the `?categoryInput=` at the end??  Well, this is what happens by **DEFAULT** when you try to `submit` information from a form/button.  It is called a `request query`, but more on that when we get to Backend Dev.

For now, we just need to prevent this from happening.

5. To prevent the **Default** behavior of our form/button, we need to add the `event.preventDefault()` method to our event listener _(hint: in the scope, very first at the top)_.  Now try your form again and you should have something like this.

![](./images/step-2-input-work.png)

![](https://media.giphy.com/media/vvbGMpbhZMcHSsD50w/giphy.gif)

6. OK!!  Now, after our `console.log`, call our `getQuote` function from step-1, and pass our category as an argument.

### Refactor our getQuote Function!!

Now we just need to fix our `getQuote` function to take a `category` and fetch the right endpoint!

1. Add `category` as a parameter to your `getQuote` function.
2. Now, in our API's endpoint URL, we need to pass this `category` as a **literal**.  Per our documentaion from the [API](https://api.chucknorris.io/), we need to add this to the URL. `?category={category}`
>NOTE: When you see `{ }` in documentation, that DOES NOT MEAN you need to literally have {with_something_here}.  It is assumed you, as a developer, know that this is a variable input of specific information (like a category) that is needed for the API to work.

3. Make sure your URL in the fetch is surrounded by `backticks` (next to the 1 key), NOT single or double quotes.  And use the `${ }` literal to add category to your URL.  Should look something like this.

![](./images/step-2-literal.png)

Try it!  IF all is well, you should now see a quote on your web page!!  As well as console logs in the browser console.

![](https://media.giphy.com/media/3ornjXIIShZ2MgyyHu/giphy.gif)

OK, commit your code, merge to main with a PR, and make a `step-3` branch!!