---
title: Standardize your development nomenclature
date: 2025-04-11T04:00:00.000Z
tags:
  - webdev
  - programming
published: true
featured: false
archived: false
---

One of the biggest challenges I face with every web project has nothing to do with web development. It's a language problem.

Deciding on what to call your classes, properties, and other aspects of the ecosystem that make up your project is almost as critical (and difficult) as coding the thing itself. Whereas your site will start as a small kernel of an idea, it will quickly blossom and spiral outward as it grows. And chaos will soon ensue.

Unless you come up with a standard concept for how to treat all those details across every project, you'll likely find yourself doing more reclassing and refactoring code than actual coding at some point down the line.

Refactoring is inevitable with any project as you make improvements and as your mind gets a better handle on how this project should actually work, but save yourself a lot of energy by coming up with a standardized spec for all the bits before you really get your feet wet with building.

At some point I will flesh this idea out with a digital garden entry, but for example, a component that represents one entry in a list of items should ALWAYS be known as an "item". Resist naming references and classes as "post" when it's a blog entry and "photo" when it's a photo gallery. Stop changing contexts as the content changes. Just refer to each an every one as an "item".

Of course you'll get more specific than that within the project. The blog component will be BlogItem, the photo entry will be PhotoItem, but if you orient yourself around this notion of "this kind of functionality I'm programming boils down to the genesis of a single thing", and that single thing is always "item", you'll be subliminally organizing your components and classes in a way that will ease complexity and flatten context in a helpful way.

Ask me how I know\...
