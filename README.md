# I don't like modern recipe apps
Ever gone to the internet in search of a recipe only to slog through someone's life story when all you want is the ingredients and instructions? It seems like most modern recipe sites and apps have lost their way. My Gran didn't write blog posts on each one of her recipes. I wanted a simple and user-friendly online recipe tool, so I made Gran. 

**Link to project:** (https://gran.onrender.com/)

**Want to demo the app?**

U: demo@demo.com | P: password (Please do not abuse the demo account)

![app preview](https://user-images.githubusercontent.com/101226771/213005232-57f89f8c-78ac-4a47-b76a-5a1ba3b5f58a.png)


## 💻How It's Made:

**Tech used:** EJS, CSS, JavaScript, Node, Express, PassportJS, Mongoose, MongoDB, Render

The server is built with Node and express. Mongoose was used for the MongoDB connections while Passport was used for handling authentication. I used EJS and CSS (mostly Bootstrap) to responsively render the content. Finally, since Heroku decided they wanted to sunset the free tier options, I used Render as a replacement (and was very happy with how easy they make deploying new apps). 

## 💡Optimizations

Optimizations to implement:
- A feature I wanted from the begining was a unit calculator. Personally, I prefer to use a food scale when baking but many recipes use imperial measurements. While I have a unit calculator feature that's usable in each recipe, as a user, I ultimately want to simply have all the units converted instead of converting them manually as I go. This will involve changing how the information is collected during the creation of a recipe. 
- As a user, I think it would be cool to 'like' different recipes and see how many 'likes' each recipe has. Being able to filter my most-liked recipe would also help promote quality content for public recipes. 

## 📚Lessons Learned:
The first issue I ran into involved how recipe ingredients/instructions/notes were collected and then displayed. Basic HTML textareas are not great when you want to have any kind of styling for text. I used CKEditor to provide users with a WYSIWYG editor that offers various styling capabilities. When I wanted to edit a recipe, re-rending the content in a form was intially a challenge. It's here that I learned a key difference between input elements and textarea elements. Textarea values come from the content inside the open/closing tags while input values come from the attritubes tag. This was important because in order to render the same styling of the text, it had to be a text area and not an input tag. 
Another lesson I learned is the value of using partials. Not only did this reduce the amount of code needed on each page, it also made implementing changes to the header or footer fast and uniform.
Lastly, this was great exercise in working with MVC. This framework, when combined with ample notes to myself, made it much easier to pick up where I left off and navigate the different pieces of my application. 


