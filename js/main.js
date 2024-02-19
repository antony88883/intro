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
      setTimeout(function () {
        if (lang == 'en') {
          swiThis.locale = swiThis.$i18n.locale = 'en';
        } else if (lang == 'zh_tw') {
          swiThis.locale = swiThis.$i18n.locale = 'zh_tw';
        }
      }, 300);
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
          period: "February 2021 - Present",
          content: [
            "message.assistEuropeanClientsAWSPlanning",
            "message.implementVoiceAssistantServices",
            "message.upgradeClientSideUI"
          ]
        },
        {
          link: "https://www.luffanet.com.tw",
          company: "message.luffanet",
          field: "message.iot",
          location: "message.taoyuan",
          title: "message.softwareEngineer",
          period: "August 2018 - February 2021",
          content: [
            "message.planLocalUIIoTDevices",
            "message.buildSmartHomeCloudServices",
            "message.useFirebaseDataManagement"
          ]
        },
        {
          link: "https://www.rawstone.com.tw",
          company: "message.fuco",
          field: "message.finance",
          location: "message.taipei",
          title: "message.frontendEngineer",
          period: "August 2016 - August 2018",
          content: [
            "message.assistDesignOBankBackendTool",
            "message.constructOnlineAppPages",
            "message.creditCardBillingApp"
          ]
        },
      ],
      skills: [
        { name: 'HTML', value: '100' },
        { name: 'CSS', value: '100' },
        { name: 'Javascript', value: '100' },
        { name: 'NodeJS', value: '100' },
        { name: 'AWS', value: '95' },
        { name: 'VUE', value: '100' },
        { name: 'Bootstrap 5', value: '95' },
        { name: 'TailwindCSS', value: '90' },
        { name: 'JQUERY', value: '90' },
        { name: 'Ionic 7', value: '90' },
        { name: 'Python', value: '90' },
        { name: 'GCP', value: '80' }
      ],
      educations: [
        { year: '2013', school: 'message.ncku', subject: 'message.math' },
        { year: '2009', school: 'message.kshs', subject: 'message.general' }
      ],
      works: [
        {
          name: 'esun',
          company: 'message.esun',
          project: 'message.creditCardStatement',
          files: ['esun1', 'esun2', 'esun3', 'esun4', 'esun5']
        },
        {
          name: 'cota',
          company: 'message.cota',
          project: 'message.creditCardStatement',
          files: ['cota1', 'cota2', 'cota3', 'cota4', 'cota5']
        },
        {
          name: 'honsec',
          company: 'message.honsec',
          project: 'message.onlineOpen',
          files: ['honsec01', 'honsec02', 'honsec03', 'honsec04', 'honsec05']
        }
      ]
    }
  },
  beforeCreate: function () {
    $(".loader, .loader-frame, .overlay").show();
  },
  created: function () {
    setTimeout(function () {
      $(".loader-frame, .overlay").hide();
    }, 400)
  }
})
