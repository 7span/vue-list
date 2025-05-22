<template>
  <div>
    <h1>Hello! Nuxt3 SSR</h1>

    <VueListProvider>
      <VueNuxtList
        endpoint="skills"
        :per-page="5"
        pagination-mode="pagination"
        :request-handler="requestHandler"
        @onResponse="
          (response) => {
            console.log('on Response:', response);
          }
        "
      >
        <template #default="{ items,refresh }">
          <button @click="refresh">Refresh</button>
          <VueListLoader />
          <pre>{{ items }}</pre>
          <VueListPagination />
        </template>
      </VueNuxtList>
    </VueListProvider>
  </div>
</template>

<script setup>
async function requestHandler(context) {
  let sort;
  if (context.sortBy && context.sortOrder) {
    sort = (context.sortOrder == "asc" ? "-" : "") + context.sortBy;
  }

  const [count, items] = await Promise.all([
    $fetch(
      `https://everest.7span.in/items/${context.endpoint}?aggregate[countDistinct]=id`
    ).then(({ data }) => data[0]?.countDistinct?.id ?? 0),

    $fetch(`https://everest.7span.in/items/${context.endpoint}`, {
      params: {
        page: context.page,
        limit: context.perPage,
        search: context.search,
        sort,
      },
    }).then(({ data }) => data ?? []),
  ]);

  return { items, count };
}
</script>
