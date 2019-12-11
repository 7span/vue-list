import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VList from "@/plugin";
import draggable from "vuedraggable";

Vue.config.productionTip = false;

//Axios Demo
const $axios = axios.create({
  baseURL: "https://api.page-maker.site/api/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1YTY5NTBhMDYzZWE2ZGM4ZmRiYmZiOTQwMDk2MDliZmU2YjM4YTM3MTA0NjI4MjZhM2M4OWE1ZjNlZGJjNjdlMjIwOTZmMThiMGY1M2EwIn0.eyJhdWQiOiIxIiwianRpIjoiMzVhNjk1MGEwNjNlYTZkYzhmZGJiZmI5NDAwOTYwOWJmZTZiMzhhMzcxMDQ2MjgyNmEzYzg5YTVmM2VkYmM2N2UyMjA5NmYxOGIwZjUzYTAiLCJpYXQiOjE1NjgzMDA0MDksIm5iZiI6MTU2ODMwMDQwOSwiZXhwIjoxNTczNDg0NDA5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.qylGJUHuXNOdpqNSCq0vntncMQdGdWjd8xO2ulqgtIrO8eZeilRl175U2kv-zH2FHSbq_0rUAFM2aQUB4wFxq0Mpgg48_w48NcCnKqM4yY_i8W_w-lXIjsJWKGLVGp30Y0CgQ6KUS4_BQsKcINY8NPuI7NWtod3OXxTt-P5VzS9Yrl8hfW5_jecpJ3xSQOqIojEKq02iNkbjuLtPxEYu_XFn3rckO7LIZArV9lnZDQS8cXrEDAkxQ4da2l0f7RMNMY9fV2_bQM9uLO6R_aNw1VyAKxBCZ_Yo5GX0NUL1i0tQvkQ8QxF9_jHg5QNPned-xXfJssyHu_YAP8DhyrkOnC1cnAMSII0y-STovuAP4FKFrt7WXAD4ZVO2qhbN0Tufiaoajgpq5Dq6kT-Jnsg8Uja0bQS_zu49E_gMKoxDT3Kbny_pmPBBC_UosAPW6Cwx4gL8K-yTcTB6rlDdHLWFK0VljPkhKppVl_BpINWizKTg7_rog34fK6hqyO5vi6IirNeJ35y8r2r0UOLRGOb0TYtFUsaBKhUfWE7aWZV6D1BXolMTcTEJpTXxsKOt7WkYU0Sd6GZw6N_HqKZXsxbcPsCt9JRbpNniJ0Kj4VnA1Iaz9pR-glqV5VfxytO-Gz_UrV19Vb-vy3MKOXmLSmonrNq2CKAAeRS8EzH1fYeHmTc"
  }
});

Vue.use(VList, {
  axios: $axios,
  vueDraggable: draggable,
  sort(data) {
    console.log("global sort", data);
  },
  pagination: {
    perPage: 15
  },
  gridTable: {
    slots: {
      edit: require("@/components/DemoButton").default
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
