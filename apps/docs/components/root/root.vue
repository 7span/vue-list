<template>
  <VList
    :per-page="4"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
    class="divide-y divide-gray-200 border dark:divide-gray-600 dark:border-gray-600"
  >
    <!-- ERROR -->
    <template #error="{ error }"> {{ error }} </template>

    <!-- EMPTY -->
    <template #empty> No Data Found </template>

    <!-- LOADING PAGE -->
    <template #loading-page>...Loading page</template>

    <!-- LOADING -->
    <template #loading> ...Loading </template>

    <!-- DEFAULT  -->
    <template #default="{  items }">
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-white p-4 hover:bg-gray-50 dark:bg-gray-900"
      >
        <div class="flex items-start gap-x-3">
          <div
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
          >
            {{ item.name }}
          </div>
          <div
            :class="['text-[' + item.color + ']']"
            class="rounded-md  mt-0.5 p-1 text-xs font-medium ring-1 ring-inset bg-white ring-gray-600/20 dark:bg-gray-600"
          >
            {{ item.color }}
          </div>
        </div>
        <div
          class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400"
        >
          <div class="mr-2">
            Due on <time datetime="2023-03-17T00:00Z">March 17, 2023</time>
          </div>
          <svg viewBox="0 0 2 2" class="h-2 w-2 fill-current">
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
          <div class="truncate">Created by Leslie Alexander</div>
        </div>
      </div>
    </template>
  </VList>
</template>

<style scoped>
/* Tabel Styling */
table {
  width: 100%;
}

.vp-doc table {
  display: table;
}
</style>
