<template>
  <div id="app">
    <v-list
      :config="config"
      endpoint="v1/campaigns"
      :layout="{
        name: 'gridTable',
        sortable: true,
        cols: ['_index', 'id', 'name', 'asin', 'created_at', 'edit', '_drag']
      }"
      :pagination="{ mode: 'internal' }"
    >
      <template>
        <h1>HELLO</h1>
      </template>
      <template slot="edit"
        >Hello</template
      >
    </v-list>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},

  data() {
    return {
      config: {},
      data: [
        {
          id: 1,
          created_at: "1568364180",
          updated_at: "1568364180",
          type: "promo_page",
          product_url: "https://www.amazon.in/dp/B07MV4691X",
          name:
            "Lakshika USB Power Mobile Adapter Hi-Speed Universal 2A 2 Ampere Charger for Xiaomi Redmi Note4 (Black)",
          product_name:
            "Lakshika USB Power Mobile Adapter Hi-Speed Universal 2A 2 Ampere Charger for Xiaomi Redmi Note4 (Black)",
          category: null,
          desc:
            "Charger is suitable and appropriate for use with different cables ranging from Micro USB, lightning cable, type-C cables to reliably charge any of your devices. The wall charger is compatible with all mobile phones including Samsung, Apple iPhones, iPads, One Plus, Motorola, Sony, HTC, Nexus, LG, Microsoft, Nokia, OPPO, GIONEE, Blackberry, Lenovo, Honor, Asus, Huawei, VIVO,Xiaomi,Google,Letv,LeEco,Panasonic,Micromax,Coolpad,XOLO,Lava,Celkon, Karbonn, ZTE, Intex, Iball, Swipe,Toshiba, Alcatel, Meizu, Yu.",
          features:
            "BEST QUALITY : The quality is long lasting and Super Fast Charging and build is smooth which makes it look premium.\\nEFFICIENCY : Short circuit & overload protection . High efficiency & low energy consumption.\\nTOP PROTECTION : Special protection for Touch Phones, Best for Android Phones\\nPowerfull : Charge any USB powered devices at top speed continously\\nAuto Cut : On Over Heat.This Is Not A original Charger It is a compatible Charger But Performance like original .",
          asin: "B07MV4691X",
          marketplace: "IN",
          language: null,
          image: null,
          price_display_type: "list_and_sale_price",
          list_price: 799,
          sale_price: 380,
          discount_percentage: null,
          currency: "₹",
          url_slug:
            "lakshika-usb-power-mobile-adapter-hi-speed-universal-2a-2-ampere-charger-for-xiaomi-redmi-note4-black-nd",
          hash: "nd",
          campaign_start_date: null,
          campaign_end_date: null,
          fb_tracking: null,
          ga_tracking: null,
          custom_tracking_code: null,
          conversion_code: null,
          redirect_url_type: "default",
          is_email_opt_in_require: false,
          is_email_first_name_require: false,
          is_email_last_name_require: false,
          email_provider: null,
          email_provider_config: [],
          is_email_verification_required: false,
          verification_email_content: [],
          unique_visitor: 0,
          promo_claimed: 0,
          created_by: 2,
          updated_by: null
        },
        {
          id: 2,
          created_at: "1568364196",
          updated_at: "1568364196",
          type: "promo_page",
          product_url: "https://www.amazon.in/dp/B07MV4691X",
          name:
            "Lakshika USB Power Mobile Adapter Hi-Speed Universal 2A 2 Ampere Charger for Xiaomi Redmi Note4 (Black)",
          product_name:
            "Lakshika USB Power Mobile Adapter Hi-Speed Universal 2A 2 Ampere Charger for Xiaomi Redmi Note4 (Black)",
          category: null,
          desc:
            "Charger is suitable and appropriate for use with different cables ranging from Micro USB, lightning cable, type-C cables to reliably charge any of your devices. The wall charger is compatible with all mobile phones including Samsung, Apple iPhones, iPads, One Plus, Motorola, Sony, HTC, Nexus, LG, Microsoft, Nokia, OPPO, GIONEE, Blackberry, Lenovo, Honor, Asus, Huawei, VIVO,Xiaomi,Google,Letv,LeEco,Panasonic,Micromax,Coolpad,XOLO,Lava,Celkon, Karbonn, ZTE, Intex, Iball, Swipe,Toshiba, Alcatel, Meizu, Yu.",
          features:
            "BEST QUALITY : The quality is long lasting and Super Fast Charging and build is smooth which makes it look premium.\\nEFFICIENCY : Short circuit & overload protection . High efficiency & low energy consumption.\\nTOP PROTECTION : Special protection for Touch Phones, Best for Android Phones\\nPowerfull : Charge any USB powered devices at top speed continously\\nAuto Cut : On Over Heat.This Is Not A original Charger It is a compatible Charger But Performance like original .",
          asin: "B07MV4691X",
          marketplace: "IN",
          language: null,
          image: null,
          price_display_type: "list_and_sale_price",
          list_price: 799,
          sale_price: 380,
          discount_percentage: null,
          currency: "₹",
          url_slug:
            "lakshika-usb-power-mobile-adapter-hi-speed-universal-2a-2-ampere-charger-for-xiaomi-redmi-note4-black-Wq",
          hash: "Wq",
          campaign_start_date: null,
          campaign_end_date: null,
          fb_tracking: null,
          ga_tracking: null,
          custom_tracking_code: null,
          conversion_code: null,
          redirect_url_type: "default",
          is_email_opt_in_require: false,
          is_email_first_name_require: false,
          is_email_last_name_require: false,
          email_provider: null,
          email_provider_config: [],
          is_email_verification_required: false,
          verification_email_content: [],
          unique_visitor: 0,
          promo_claimed: 0,
          created_by: 2,
          updated_by: null
        }
      ]
    };
  },

  methods: {
    sort(data) {
      console.log("LOCAL", data);
    }
  }
};
</script>

<style lang="scss"></style>
