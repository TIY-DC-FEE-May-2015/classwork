## Tuesday, May 19th

#### Today we learned about:

* Sublime Text
    * Command line (`subl some-file-name` or `subl .`)
    * Folder view
    * Syntax highlighting (controlled by file extension and/or language dropdown in bottom right)
* CSS resets
    * `margin: 0; padding: 0;` - removes idiosyncratic browser default styling
    * `box-sizing: border-box`
        * constrains padding and border dimensions to any specified height and width
        * (basically, makes height and width work like you think they should)
* Grid systems
    * First popularized by [Bootstrap](http://getbootstrap.com)
    * Rows, then columns
    * `display: inline-block` on cells
    * Cells can have multiple column width, needs to be defined in CSS
* Centering
    * Horizontal centering
        * Specify a width for the item
        * `margin-left: auto; margin-right: auto;`
    * Vertical centering
        * ... just use the CSS file
    * Background images
        * `background-position: center;`
        * `background-size: cover`
    
#### GitHub Open Source Workflow

(aka: homework submission instructions)

1. **Fork** an existing repository on GitHub - this creates a new copy owned by your user on GH
2. **Clone** the repository onto your local machine through the command line - it creates a new directory with the contents and does all the `git init` and `git remote add` stuff for you
3. Make whatever changes you want
4. **Push** your changes to GitHub with `git push origin master` from the command line
5. Create a **pull request** with your changes on GitHub, from your copy of the repository to the organization's copy. Make any comments necessary in available space

#### Additional Links

* Mozilla - [CSS Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
* [W3Schools Auto-Hider Chrome Extension](https://chrome.google.com/webstore/detail/igiahejkpbnbnekdaefddmdceocmjpll)