<template>
  <div class="py">
    <UContainer>
      <VueList endpoint="skills" :per-page="5" pagination-mode="pagination">
        <template #default>
          <div class="grid grid-cols-3 h-screen gap-5 p-5">
            <div class="col-span-2 overflow-y-auto p-1">
              <VueListInitialLoader />
              <VueListLoader />
              <VueListError />
              <VueListItems>
                <template #item="{ item }">
                  <UCard> {{ item.name }} </UCard>
                </template>
              </VueListItems>
            </div>
            <div class="col-span-1 overflow-y-auto p-1">
              <UAccordion :items="components">
                <template #pagination>
                  <VueListPagination />
                  <VueListPagination v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VueListPagination>
                </template>
                <template #loadmore>
                  <VueListLoadMore />
                  <VueListLoadMore v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VueListLoadMore>
                </template>
                <template #search>
                  <VueListSearch />
                  <VueListSearch v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VueListSearch>
                </template>
                <template #counter>
                  <VueListCounter />
                  <VueListCounter v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VueListCounter>
                </template>
                <template #goto>
                  <VueListGoTo />
                  <VueListGoTo v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VueListGoTo>
                </template>
                <template #perpage>
                  <VueListPerPage />
                  <VueListPerPage v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VueListPerPage>
                </template>
                <template #attributes>
                  <VueListAttributes />
                  <VueListAttributes v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VueListAttributes>
                </template>
                <template #refresh>
                  <VueListRefresh />
                </template>
              </UAccordion>
            </div>
          </div>
        </template>
      </VueList>
    </UContainer>
  </div>
</template>

<script setup>
const components = [
  {
    label: 'Pagination',
    slot: 'pagination',
  },
  {
    label: 'Load More',
    slot: 'loadmore',
  },
  {
    label: 'Search',
    slot: 'search',
  },
  {
    label: 'Counter',
    slot: 'counter',
  },
  {
    label: 'Go To',
    slot: 'goto',
  },
  {
    label: 'Per Page',
    slot: 'perpage',
  },
  {
    label: 'Attributes',
    slot: 'attributes',
  },
  {
    label: 'Refresh',
    slot: 'refresh',
  },
]
</script>
