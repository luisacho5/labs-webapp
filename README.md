# lab01-webapp
Lab 1: HTML, CSS and Bootstrap
HTML
Layout Tags
There are tags in HTML that aid in the organization of content. Before we discuss that, we need to understand the difference between block elements and inline elements, which are the two main display styles of HTML elements.

Block elements include <h1>, <p>, <ul>, and <table>. They usually start and end with a new line when displayed in a browser. Inline elements include <td>, <a> and <img>. They are normally displayed without starting a new line.

THE <DIV> ELEMENT
Now, your most powerful tool in adding structure to your HTML document is the <div> tag. The <div> tag is a block element that you can use as a box to organize the content of your page. You can put any content within a <div> tag, and nest them as you see fit. When used with CSS this is your primary method of configuring the layout of a page. That said, it is important to remember to NOT use <table> tags to configure web layout. You will run into many difficulties and dead ends with this approach. The <table> element is only intended to display tabular data.

THE <SPAN> ELEMENT
Another handy tool for configuring inline layout is the <span> tag. That <span> tag is an inline element that can be put around a group of text, and be used to modify only the text that it contains, without interrupting the flow of the text before and after it.

Final Comments
One tool you'll find more and more useful is the inspector. The inspector is an extremely useful tool in examining the components of and activities on your web page or web application. This will become essential in your developing/debugging process. Most major browsers have their built in inspectors. Below you can find instructions on how to open the inspector in Chrome and Firefox:

How to open the inspector in Chrome
How to open the inspector in Firefox

CSS (Cascading Style Sheets)
CSS Review
Another major component of a web pages is CSS (cascading style sheets). CSS allows you to style your HTML and make it look however you please. CSS is made up of a series of style declarations. They’re applied to HTML either through a .css file linked in the head of the HTML document, or in HTML in a <style> element. You can have multiple of both kinds in an HTML document. A style declaration has two parts: a selector (which elements to apply the properties to) and a set of properties (how they should look). For example:

p {
    background-color: black;
    color: white;
}
The p selector selects all <p> elements (paragraphs). (There are many other types of selectors. [https://www.w3.org/TR/selectors-3/])
background-color sets the background color of the element. The color is specified here by name (there are many other ways of specifying colors [http://dev.w3.org/csswg/css3-color/], but many work by name).
color sets the text color.
To include this style in a page we could use:

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" /> 
    <title>Page title. Shown in tabs.</title> 
    <style>
    p {
        background-color: black;
        color: white;
    }
    </style>
</head> 
<body> 
    <h1>Simple Page!</h1> 
    <p>This is a totally bare-bones page.</p> 
</body> 
</html>
Or, if the style were in another file called styles.css:

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" /> 
    <title>Page title. Shown in tabs.</title> 
    <link rel="stylesheet" href="styles.css" />
</head> 
<body> 
    <h1>Simple Page!</h1> 
    <p>This is a totally bare-bones page.</p> 
</body> 
</html>
Last, you can include CSS properties directly in a style attribute of an HTML element, like this:

<span style=”display: none;”>This text won’t show up!</span>
This is not recommended, because this style will only apply to this specific element. It is much more efficient to declare styles that can be applied to your entire document, and that will make expanding and modifying your code a lot easier.

Selecting Elements in CSS
There are several ways to select elements. The simplest is what you’ve seen above, which selects all elements of a particular name. It works for any kind of element: the entire body with the body tag, img tags, h1 tags and so on.

To make it a little more specific you can add classes to an element to indicate that it’s a particular type. For example:

<h1 class=”headline”>Web Moves Forward!</h1>
<!-- this h2 also has the class subtitle -->
<h2 class=”headline subtitle”>Everyone is excited</h2>
You can then select for all elements with that class with this syntax:

.headline {
    font-size: 72pt;
    font-weight: bold;
}
or for only h1 elements with that class with this:

h1.headline {
    /* this is a comment in CSS so it is ignored */
}
or for only h1 and h2 elements (comma specifies multiple selectors):

h1.headline, h2.headline {

}
To get even more specific you can give elements IDs, which must be unique within an HTML document.

<h1 id=”page-header”>Web Moves Forward!</h1>
You can select that element with this syntax:

#page-header {
    font-size: 72pt;
    font-weight: bold;
}
Cascading
The cascading part of CSS is important. All browsers come with a built in stylesheet that you are effectively overriding when you define styles for your document. There is a point system for selectors to determine which property value to use when multiple selectors apply to an element and they define the same properties (the gory details). The gist is that more specific selectors take precedence.

#page-header {
    color: black;
}
.headline {
    color: blue;
}

<!-- this h1 will be black, since #page-header is more specific than .headline -->
<h1 id=”page-header” class=”headline”>Web Moves Forward!</h1>
With the cascading properties of CSS, you can be efficient with your styling by declaring general styles that can be applied to many HTML elements, then declaring more specific styles where needed.

The Box Model
You can do a lot more than change colors using CSS. The philosophy is that HTML should convey meaning and content structure, and CSS should control how it looks. That means CSS is also largely responsible for the positioning and layout of HTML elements. To understand layout you need to understand the box model [http://www.w3.org/TR/CSS2/box.html], which is the fundamental model underlying how CSS treats elements. By manipulating properties like display, position, float, margin, padding, and border, you can change the way an element is displayed.

Checkpoint 1
Udemy: Master the Basics of HTML5 & CSS3: Beginner Web Development

There are dozens of CSS properties, although not all of them are supported by every browser.

A pretty complete list is available from the Mozilla Developer Network: https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference.

Bootstrap Library
Create a simple web site whoch is using Bootstrap library

Checkpoint 2
Udemy: Bootstrap 4 Quick Start: Code Modern Responsive Websites

Media Queries
Finally, one of the most elegant things CSS allows you to do (and one of the major reasons for style / content separation) is changing styles depending on what the content is being displayed on. CSS calls these media: things like screens, TVs, printers, and so on. You can also change depending on properties of each sort of media: screens of different sizes (think smart phones vs. laptops), color vs. black and white, and so on. The appearance will change automatically according to whatever is looking at it (e.g. the layout of the page can change in a smaller window or links can include the full-text URL when printed).

This happens through evaluating media queries, which are either true or false. Some examples:

Always true: all

Screens or printed documents: screen, print

Screens larger than 640px: screen and (min-width: 640px)

You can use media queries in CSS documents like this:

@media screen and (min-width: 640px){
    /* rules in this block will only apply to screens at least 640px in width */
    #headline{
        font-size: 120pt;
    }
}
Checkpoint 3
Now try writing your own CSS media query in this JSFiddle.

In the upper-left HTML box, create an h1 element with some text. In the upper-right box labelled CSS, Write your own CSS media query that will set the font size to 12pt when the screen size is less than 300px and 48pt when the screen size is greater than 600px. To test this out, click the "Run" button in the top bar, and then adjust the size of the result window to see your work in action. Feel free to have some fun with this, and try some other media queries. JSFiddle may also come in handy in the future whenever you want to test out CSS or JavaScript snippets!

When you are done, call the instructor over and show your progress charts on Codecademy and your JSFiddle.

Practical notes about CSS
Reset Stylesheets
Different browsers may have slight inconsistencies in their default element appearances, such as default line heights, margins and font sizes of headings. Reset stylesheets can be an useful tool to help reduce such cross-browser inconsistencies, and make your code more browser-compatible. Just include the reset stylesheet BEFORE you include any others, and it should act as a default on which you make more specific modifications. Here is a popular version of a reset stylesheet created by Eric Meyer that covers the basic inconsistencies and is very small: http://meyerweb.com/eric/tools/css/reset/reset.css

Meta-CSS
Because of CSS's simple syntax, some developers use languages like LESS or SASS which let you write more sophisticated expressions in your CSS incorporating variables, logic and so on. We HIGHLY recommend trying one of these languages out once you've gotten the hang of CSS. They're simple, compatible with CSS, and take about 10 minutes to learn. SASS and LESS are equivalent, although the former requires ruby to be installed on your computer while the latter requires python.
