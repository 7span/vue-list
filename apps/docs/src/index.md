---
layout: home

hero:
  name: VueList
  text: Simplified API-based list rendering
  tagline: Build listing layouts faster by abstracting away the boilerplate of API calls, pagination, and state management.
  image:
    src: /hero.svg
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/why-vue-list
    - theme: alt
      text: View on GitHub
      link: https://github.com/7span/vue-list
features:
  - icon: 🧠
    title: Headless
    details: Completely UI-agnostic. It gives you full control over the markup via scoped slots.
  - icon: 🔁
    title: Centralized Request Handling
    details: Configure your API logic once using the global requestHandler option.
  - icon: ⚡
    title: Reactive
    details: Automatically reacts to changes in props like page, filters, or params, and fetches updated data.
  - icon: 💾
    title: State Manager
    details: Persist user preferences like page, perPage, and filters in localStorage, or push them to an API.
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/7span.png',
    name: '7Span',
    title: 'Sponsor',
    links: [
      { icon: 'github', link: 'https://github.com/7span' },
      { icon: 'x', link: 'https://x.com/7SpanHQ' }
    ]
  },
  {
    avatar: 'https://github.com/theharshin.png',
    name: 'Harsh Kansagara',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/theharshin' },
      { icon: 'x', link: 'https://x.com/theharshin' }
    ]
  },
   {
    avatar: 'https://www.github.com/nency-7span.png',
    name: 'Nency Bhadeshiya',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/nency-7span' },
    ]
  },
   {
    avatar: 'https://www.github.com/tapan-7span.png',
    name: 'Tapan Padaliya',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/tapan-7span' },
    ]
  },
  {
    avatar: 'https://www.github.com/abhishek-7span.png',
    name: 'Abhishek Vasvelia',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/abhishek-7span' },
    ]
  },
  {
    avatar: 'https://www.github.com/meet-s-7span.png',
    name: 'Meet Shah',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/meet-s-7span' },
    ]
  },
  {
    avatar: 'https://www.github.com/parth-m-7span.png',
    name: 'Parth Mali',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/parth-m-7span' },
    ]
  },

]
</script>

---

### 🙌 Credits

> A huge shoutout to the brilliant folks behind `<VueList>`\
> Thank you for turning "ugh, another listing page" into "oh hey, that was easy." 🚀

<VPTeamMembers size="small" :members />
