// Ready translated locale messages
const messages = {
  en: {
    message: {
      fne: 'FRONT-END ENGINEER',
      hello: 'In the past, those days surrounded by routines...until entering into the front-end world, everything has changed!',
      world: 'focus on building rich interactive web apps with solid foundations of science and mathematics',
      about: 'ABOUT',
      abp1: 'Offering creative design solutions to solve business problems is what I do best.',
      abp2: 'I write in JavaScript, CSS, HTML, and Python.'+
            ' I also use js framework such as Angularjs and vuejs.'+
            ' I like working on scalability, performance, reusability, and great user experiences.',
      abp3: 'As a consultant and a developer, I write code that conforms to industry standards and semantic best practices.'+
            ' I am able to transform static artwork into pixel prefect, interactive and fully functional interfaces.',
      exp: 'EXPERIENCE',
      fuco: 'Fuco & Solution',
      sks: 'SKILLSET',
      edu: 'EDUCATION',
      math: 'Department of Mathematics',
      ncku: 'National Cheng Kung University',
      general: 'General Subjects',
      kshs: 'Kaohsiung Senior High School',
      myworks: 'MY WORKS',
      contact: 'CONTACT ME',
      message: 'Feel free to leave me a message'
    }
  },
  zh_tw: {
    message: {
      fne: '前端工程師',
      hello: '回想從前，那些重複瑣事...直到踏入前端的世界後，一切都不一樣了！',
      world: '專注於打造具豐富體驗的應用程式，憑藉科學基礎的養成與數學能力',
      about: '關於我',
      abp1: '我擅長於針對商業邏輯問題提出創新的解決方案。',
      abp2: '撰寫程式包括JavaScript, CSS, HTML與Python。也會靈活運用像是 AngularJs 與 VueJs 這類ＪＳ框架。'+
            '對程式擴展性、執行效率、可重複使用性以及使用者體驗都有相關工作經驗。',
      abp3: '身為一位專業的技術顧問與開發者，我能撰寫符合工業標準的程式並實踐最佳語意化，'+
            '以及將平面設計轉化成生動活潑的使用介面。',
      exp: '工作經驗',
      fuco: '景丞科技',
      sks: '技能組合',
      edu: '學習經驗',
      math: '數學系',
      ncku: '國立成功大學',
      general: '普通科',
      kshs: '高雄中學',
      myworks: '作品集',
      contact: '與我聯絡',
      message: '歡迎留下寶貴的訊息'
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
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
  }
})

$('.owl-carousel').owlCarousel({
  loop: true,
  lazyload: true,
  margin: 10,
  center: true,
  stagePadding: 35,
  //navText : ['<i class="fas fa-chevron-left fa-lg"></i>','<i class="fas fa-chevron-right fa-lg"></i>'],
  responsive:{
      0:{
          items:1
      },
      700:{
        items:2
      }
  }
})
