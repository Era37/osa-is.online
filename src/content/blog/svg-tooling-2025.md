---
title: Why SVG tooling still sucks in 2025
id: svg-tooling-2025
description: SVGs are powerful, but modern tooling is still fragmented. Styling, animation, and design live in different places, making simple tasks harder than they should be.
date: 2025-01-15
readTime: 1 min read
tags:
  - svg
  - mirrow
---

# Why SVG tooling still sucks in 2025

SVGs are one of the most powerful tools integrated into the web. So much of what we convey through our websites does not need a raster image, logos, icons, widgets are all crucial to the web and we use SVGs to display these different things to our users.

What we have is not a lack of adoption but a misunderstanding of the technology, when we are typically introduced to the concept of vector graphics they are compared to images as we know them and what this often does is set in motion a misuse of vectors.

There is a gap between how we consider what you export in Illustrator or Figma as static assets and us using it in our project. These are two completely different world, building the SVG in our program, then using it in our app. This school of thought discards SVGs as treating them as static elements that musn't be mutated once imported, I have found very few developers realize the potential and use cases of vector graphics in applications.

[Josh W Comeau](https://www.joshwcomeau.com/) has an excellent article about this; he speaks with respect to how SVGs are infact first class citizens which we can mutate in our app freely using the CSS and JavaScript we already know and ~~love~~ use.

To those whom are familiar with what I am talking about you may understand the pain of writing an SVG, it is not necessarily horrid but requires you to be attentive and there are few guardrails keeping you on the correct path. Whilst this without a doubt creates possibility it at the same time builds an equal amount of instibility. Coupled with the fact you will be writing raw XML for the majority of your time it makes for a sub ideal experience of writing your first SVG.

The sub ideal experience I had whilst writing this site and some of the various pretty animations you may see around is what inspired me to write the DSL I did for crafting vectors by hand. I wrote [mirrow](https://mirrow.app/) to solve the very problem I was having when I was writing SVGs, the power of the technology was unmatched but the developer experience was atrocious.

Alas I began hacking away, noting what would (and crucially what wouldn't) make a good DSL for writing SVGs. I came up with a very lean syntax that looks something like this

```js
circle {
  r: 50
  id: "balloon"
  at: (100, 100)
  fill: "hotpink"
}
```

It was built with SVGs in mind with moderate type checking to ensure _some_ form of runtime safety. The core of mirrow is still a work and progress, a lot of the syntax being iterated upon but I believe it is a optimistic solution to an ongoing problem in the realm of writing vectors.

I hope you enjoyed this short article, thank you for reading and if you would like to support mirrow or keep up to date you can check out mirrow @ [mirrow.app](https://mirrow.app/)
