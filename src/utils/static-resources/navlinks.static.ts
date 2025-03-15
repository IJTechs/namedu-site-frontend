export const NAVLINKS_STATIC = [
  { title: 'Yangiliklar', path: '', to: 'news' },

  {
    title: 'Boshqarma Haqida',
    path: 'boshqarma-haqida',
    sublinks: [
      { title: 'Rahbariyat', to: 'executives' },
      { title: 'Vazifalar va funksiyalar', to: 'tasks_and_functions' },
      { title: "Bo'limlar", to: 'sections' },
      { title: 'Me’yoriy hujjatlar', to: 'documents' },
    ],
  },
  {
    title: 'Ta’lim Muassasalari',
    path: 'talim-muassasalari',
    to: 'eduInstitutes',
  },
];
