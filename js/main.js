// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh_tw', // set locale
  messages, // set locale messages
});

let app = new Vue({
  i18n,
  el: "#app",
  methods: {
    switchlang(lang) {
      var swiThis = this;
      setTimeout(function(){
        if (lang=='en'){
          swiThis.locale = swiThis.$i18n.locale = 'en';
        } else if (lang=='zh_tw') {
          swiThis.locale = swiThis.$i18n.locale = 'zh_tw';
        }
      },300);
    }
  },
  data: function () {
    return {
      experiences: [
        {
          link: "https://umt.tw",
          company: "message.umt",
          field: "message.iot",
          location: "message.newtaipei",
          title: "message.cloudEngineer",
          period: "February 2021 - Present"
        },
        {
          link: "https://www.luffanet.com.tw",
          company: "message.luffanet",
          field: "message.iot",
          location: "message.taoyuan",
          title: "message.softwareEngineer",
          period: "August 2018 - February 2021"
        },
        {
          link: "https://www.rawstone.com.tw",
          company: "message.fuco",
          field: "message.finance",
          location: "message.taipei",
          title: "message.frontendEngineer",
          period: "August 2016 - August 2018"
        },
      ]
    }
  },
  beforeCreate: function(){
    $(".loader, .loader-frame, .overlay").show();
  },
  created: function(){
    setTimeout(function(){
      $(".loader-frame, .overlay").hide();
    }, 400)
  }
})

$('.owl-carousel').owlCarousel({
  loop: true,
  lazyload: true,
  margin: 10,
  center: true,
  stagePadding: 35,
  // nav: true,
  // navText : ['<i class="fas fa-chevron-left fa-lg text-secondary"></i>','<i class="fas fa-chevron-right fa-lg text-secondary"></i>'],
  responsive:{
      0:{
          items:1
      },
      700:{
        items:2
      }
  }
})
