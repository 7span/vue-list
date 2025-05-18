# @7span/nuxt-list

A Nuxt 3 module that globally registers list-related components from `@7span/vue-list`, with configurable naming and easy integration.

## 🚀 Features

- Auto-registers components globally
- Customizable component name prefix
- Headless components — no enforced styles or markup
- Zero-config defaults, but fully customizable

---

## 📦 Installation

```bash
# npm
npm install @7span/nuxt-list

# yarn
yarn add @7span/nuxt-list
```

---

## 🧩 Usage

Add `@7span/nuxt-list` to your `nuxt.config.ts` modules section:

```ts
export default defineNuxtConfig({
  modules: ["@7span/nuxt-list"],

  nuxtList: {
    prefix: "My" // Optional
  }
});
```

---

## ⚙️ Options

| Option   | Type     | Default     | Description                                                             |
| -------- | -------- | ----------- | ----------------------------------------------------------------------- |
| `prefix` | `string` | `'VueList'` | Prefix for registered component names. Set to `''` to disable prefixing |

---

## 📚 More Information

For detailed usage, available components, and examples, visit the official documentation:

👉 [https://7span.com/open-source/vue-list](https://7span.com/open-source/vue-list)
