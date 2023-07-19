# Chuch Says Step 4

Ok, now, let's finish up.  Notice that we broke the `refreshQuote` button back in `step-2`?  Well, we did.  And also that nothing really works unless you click a button?  

So, lets make our app load a quote as soon as the page loads (and fix our button in the process).

### JavaScript

We refactored our `getQuote` function to need a category, which is what broke our `refreshQuote` button.  SO, we need to fix this.

1. At the top of our JS code, we need to add a `defaultCategory` variable.  Set it equal to `dev`.
2. Now, simply pass `defaultCategory` as the argument when we call `getQuote` in our `refreshQuote` event listener.  Voila!!

Try it. This should have fixed your button.

### Page Load Quote

Ok, now to the auto on page load!

There are two ways to do this:
- An [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression)
- Use `DOM` on content Load.

We will do it with `DOM`.

1. At the bottom our your JS code, add an event listener on your "document".  😱
2. The event we want to listen for is `DOMContentLoaded`.
3. In the scope of this listener's callback, call our `getQuote` function (don't forget to pass the `defaultCategory`).
4. Lastly, find where you called your `getCategories` function.  While this works, good practice it to have this call in the `DOM` load listener also.  So move it before the `getQuote` call in our content load listener.

Check your browser.  Refresh it.

![](https://media.giphy.com/media/l1KsPx1XnnnWQiH6M/giphy.gif)

Commit, push, and merge your code with a PR.  You're done!!

If you want to level up, make a `step-5` branch.