var views = {}
$(document).on("ready", function(){

  views.header = new HeaderView({
    // Explicitly passing in an existing HTML element
    // to basically be owned by the view
    el: $("#header-container")[0],
    tabs: [
      { title: "Blog", color: "#e18728" },
      { title: "Videos", color: "#BE4C39" },
      { title: "Almanac", color: "#9351A6" },
      { title: "Snippets", color: "#4472B9" },
      { title: "Forums", color: "#4CA454" },
      { title: "Jobs", color: "#d49b00" },
      { title: "Lodge", color: "#444444" }
    ]
  })

  views.posts = []
  
  var post = new PostView({
    title: "Using Pinterest Data Attributes and Meta Tags",
    date: moment("06/29/2015"),
    blurb: "Pinterest is kind of a big deal. In the blog and e-commerce world, it's quickly edging out Google as the most important search engine. That's the world I come from, so I've had lots of opportunity to work with Pinterest's data attributes and meta tags. These bits of markup give site owners control over how their images and site are presented on Pinterest, and what can and can't be “pinned”.",
    link: "https://css-tricks.com/using-pinterest-data-attributes-and-meta-tags/",
    //$container: $("#main-container")
  })

  $("#main-container").append( post.$el )

  views.posts.push(post)

  post = new PostView({
    title: "The Debate Around 'Do We Even Need CSS Anymore?'",
    date: moment("06/26/2015"),
    blurb: "This has become quite the hot topic lately. It's been talked about at a number of conferences and meetups I've been at personally lately. I've seen slide decks on it. I know people literally not shipping any CSS in production. Pretty wild, eh? I thought we could have a little campfire here and talk about it as rationally as we can, covering all the relevant points.",
    link: "https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/",
    //$container: $("#main-container")
  })

  $("#main-container").append( post.$el )

  views.posts.push(post)

})