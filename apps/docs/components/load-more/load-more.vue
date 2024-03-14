<template>
  <v-list
    :attrs="state.attrs"
    endpoint="skills"
    sort-by="name"
    sort-order="asc"
    :per-page="4"
  >
    <template #default>
      <v-list-table :rowClass="() => []"> </v-list-table>
      <v-list-load-more>
        <template #default="{ loadMore, loading }">
          <button
            type="button"
            class="btn btn-primary btn-load-more"
            @click.native="loadMore"
            :class="{ 'btn-load-more--loading': loading }"
          >
            <span class="btn-load-more__text">Load More</span>
          </button>
        </template>
        <template #end>
          <span class="load-more-end"> -- That's all -- </span>
        </template>
      </v-list-load-more>
    </template>
  </v-list>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  attrs: [
    { name: "_index", label: "#" },
    { name: "color" },
    { name: "status" },
    { name: "name" },
  ],
});
</script>

<style lang="scss">
/* Tabel Styling */
table {
  width: 100%;
  border: 1px solid #e5e7eb;
}

thead tr th {
  font-size: 0.875rem;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280 !important;
  padding-bottom: 0.5rem;
  font-weight: 600;
  padding: 0.5rem;
  text-align: start;
}

tbody tr td {
  padding: 0.5rem;
  text-align: start;
}

tbody tr:hover {
  background: #f8f9fa;
}

/* Button Styling */
.vp-doc table {
  display: table;
}

input[type="checkbox"] {
  height: 16px;
  width: 16px;
  accent-color: #1690d8;
}

/* Load More Button Styling */
.v-list-load-more {
  text-align: center;
}

.btn {
  padding: 4px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn.btn-primary {
  background-color: #1690d8;
  color: #ffffff;
  text-align: start;
}

.btn-load-more {
  position: relative;
}

.btn-load-more__text {
  transition: all 0.2s;
}

.btn-load-more--loading .btn-load-more__text {
  visibility: hidden;
  opacity: 0;
}

.btn-load-more--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}

.load-more-end {
  color: #6d6c6c;
}
</style>
