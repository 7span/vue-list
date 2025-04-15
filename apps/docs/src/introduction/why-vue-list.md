# Why VueList?

In frontend projects, listing pages are everywhere - users, products, orders, you name it. And almost every time, you end up writing the same boilerplate:

- `page`, `perPage`, `filters`, `isLoading`, `data`, `error`...
- Watchers or methods to fetch data
- Manual API calls
- State resets when filters change
- LocalStorage hacks to persist state

---

✨ **VueList eliminates this repetition** ✨

---

Instead of duplicating the same logic in every component, VueList provides an opinionated way to manage listing state, while staying completely UI-agnostic. That means:

- No HTML, no rendering - you handle the UI, we handle the messy state and lifecycle.
- Just define a `requestHandler` and let VueList manage when and how to call it.
- Reacts to changes in `page`, `filters`, or `params` and automatically refetches data.
- Built-in support for saving/restoring state via localStorage or APIs.

It's like a tiny state machine for listing pages - reusable, reactive, and fully headless.
