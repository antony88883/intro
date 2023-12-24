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
  beforeCreate: function(){
    $(".loader, .loader-frame, .overlay").show();
  },
  created: function(){
    setTimeout(function(){
      $(".loader-frame, .overlay").hide();
    },2000)
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
