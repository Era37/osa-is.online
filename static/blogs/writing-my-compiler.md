# Why I Decided to Design My Own Language

Most programmers at some point toy with the idea of writing a programming language. For me, it stopped being a daydream and turned into _n_. A language I started sketching late at night (or alas early in the morning) when I realized the tools I was using weren’t giving me the control I wanted. More specifically I felt as if there were a gap between what I desired out of writing my backend systems and what is being offered. This was, of course, alongside a thirst for knowledge

This isn’t a story about reinventing the wheel for the sake of it. It’s about curiosity, frustration, and wanting to shape the tools I spend most of my life using.

---

## Where It Started

Most of my programming time has been spent on backend systems. It’s one of the few domains where choosing the right language isn’t obvious. Sure, almost any language can be used to build a REST API, but very few make it pleasant or efficient.

When you’re writing backend services, raw speed isn’t the main bottleneck. What really decides whether your code feels solid is how well it handles concurrency and async behavior. A backend is usually just a relay: take in a request, hit a database or another API, and return a response. The difference between a service that feels snappy and one that feels sluggish usually comes down to how cleanly it handles those async interactions.

And that’s where most mainstream web languages fall short. They work, but they come bundled with anti-patterns, awkward abstractions, and “good enough” solutions that pile up complexity over time. You don’t notice it when you’re just wiring up endpoints — but you feel it when you’ve iterated for months and are suddenly stuck untangling a mess.

_n_ is my attempt to build a language that avoids that trap: a compact, functional way to write REST APIs that feels natural in a web developer’s hands. It borrows heavily from the clarity of functional and declarative programming, but it doesn’t force you into a mathematician’s mindset. Instead, I think of it the way Canadians once thought of Wilfrid Laurier, the prime minister who became famous not for rigid ideology, but for compromise. Laurier pulled ideas from different sides and shaped them into something workable for the everyday citizen.

That’s what I want _n_ to be: not a strict functional language that demands purity at all costs, but a practical middle ground. A language that quietly encourages functional patterns and composability, while still feeling productive and approachable for the average developer

_n_ started as a sketch on paper: a couple of operators, a rough idea of a runtime, and the ambition to eventually bootstrap it into compiling itself.

---

## Why Not Just Use X?

This is the first question anyone asks when you build a language. Why not just use JavaScript, or TypeScript, or Python?

The truth is: I _do_ use them. They’re everywhere on the web, and they’ve proven themselves more than capable. But they also come with baggage: patterns that nudge you toward object-oriented or imperative code, frameworks built on layers of abstractions, and ecosystems where it’s easy to write something that works but hard to keep it simple.

_n_ isn’t about replacing those existing foundations, it’s about offering a gentler push in a different direction. I wanted a language that fits naturally into the web, but softly encourages functional programming patterns without making developers fight the syntax. Not a wall of theory, not a purity contest, just a design that makes the functional path feel like the easy one.

A language is a design space. And you don’t get to explore that space by reading docs, you have to build.

---

## What I Wanted From _n_

- **Control flow as functions, not syntax**  
  Instead of piling up keywords, I wanted iteration and branching to feel composable.

- **Minimal runtime overhead**  
  A language that gives you the parts, not the guardrails.

- **A chance to learn**  
  Writing a compiler is one of the best ways to understand computers inside out. Every time I add a feature, I see deeper into the stack.

---

## What’s Next

Right now, _n_ is a work-in-progress, but that’s the point. Languages are never born fully-formed, they grow with use, mistakes, and rewrites. My goal isn’t to convince anyone to switch, but to show that _yes_, you can design your own language, and you’ll come away a better programmer for it.

---
