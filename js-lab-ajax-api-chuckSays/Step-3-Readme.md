# Chuck Says Step 3

Ok, now we have it searching our Chuck Norris API by a category. But, what happens if our user types in a category in our text box that the API does not have??

Well, lets fix this.  If you look at our [API](https://api.chucknorris.io/) docs, you will see there is an endpoint that will give us ALL the categories in a list (an Array to be exact).  SWEET!

### HTML

Let's fix our HTML to have a `select` box that our user can choose a category from.  This will make sure they ONLY choose a category the API knows.

1. Change our `input` to a `select`.  You no longer need to tell it a `type`, but leave the `id` and `name` the same.

2. That is all!!

### JavaScript

Now, lets use JS to `fetch` the category list from the API, an populate our `select` box, using `DOM`!

1. Create a new function called `getCategories`.
2. Use `DOM` to get our `categoryInput` select box.
3. Using the `fetch` API, request the list of categories from our Chuck Norris data API endpoint.
4. Console log the list to make sure it all worked and call our `getCategories` RIGHT AFTER and OUTSIDE this new function.

You should see a log in your browser console.  Notice what type of data structure it is???

![](./images/step-3-categories.png)

Alright, we have an Array of data.  So, we can use magical Array methods on it to add the data to our select box.  So, lets `map` it!

5. In the second `.then`, use the `.map()` array method to loop our data items. On each loop, we need to use `DOM` to create an `option` element, add our data item as the `value` and `text` for the option, and append the option to the `select`. (hint: [option object](https://www.w3schools.com/jsref/dom_obj_option.asp))
>This is just doing `DOM` manipulation, just inside a loop.  You know how to do this.  Add this as the first line of the map if it helps to see it all happen. `console.log('loop index ', index, ' & item ', item);`

You should see this.  Your `select` box should now have options!!

![](./images/step-3-option.png)

Try it by selecting a category from the list and clicking the "Get a Category Quote" button!

Commit your code, push it, merge it to main with a PR, and make a `step-4` branch.