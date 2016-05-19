
var DATA = [
  {
    title: 'Omega Seamaster Aqua Terra',
    price: '1320',
    image: '/images/watch-1.jpg',
    id: '2df3'
  },
  {
    title: 'Victorinox',
    price: '2410',
    image: '/images/watch-2.jpg',
    id: '51sf'
  },
  {
    title: 'Lady Royalty',
    price: '780',
    image: '/images/watch-3.jpg',
    id: 'dj38'
  },
  {
    title: 'Oris Pilot Big Crown',
    price: '2600',
    image: '/images/watch-4.jpg',
    id: '8dh2'
  }
];

// Exports data
// Simulate a real API like call
module.exports = {
  getData: function getData (cb) {
    if (typeof cb === 'function') cb(DATA);
  }
}
