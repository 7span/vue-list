<template>
  <div>
    <h1>Hello!</h1>
    <VueListProvider :request-handler="requestHandler">
      <VueListNuxtList
        endpoint="skills"
        :per-page="5"
        pagination-mode="pagination"
      >
        <template #default="{items}">
          <pre>{{ items }}</pre>
          <VueListPagination />
        </template>
      </VueListNuxtList>
    </VueListProvider>
  </div>
</template>

<script setup>
function requestHandler(context) {
  const {
    endpoint,
    search,
    filters,
    perPage,
    page,
    sortBy,
    sortOrder,
  } = context;

  let sort;
  if (sortBy && sortOrder) {
    sort = (sortOrder == "asc" ? "-" : "") + sortBy;
  }

  const requests = [
    //DIRECTUS COUNT
    $fetch(
      `https://everest.7span.in/items/${endpoint}?aggregate[countDistinct]=id`
    ).then(({ data }) => {
      return data[0].countDistinct.id;
    }),

    //DIRECTUS DATA
    $fetch(`https://everest.7span.in/items/${endpoint}`, {
      params: {
        page,
        limit: perPage,
        search: search,
        sort,
        // filters: filters,
      },
    }).then(({ data }) => {
      return data;
    }),
  ];

  return Promise.all(requests).then(([count, items]) => {
    return {
      items,
      count,
    };
  });
}
</script>
