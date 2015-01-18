$(function(){
  $('#world-map-markers').vectorMap({
    map: 'in_mill_en',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: '#F8E23B',
        stroke: '#383f47'
      }
    },
    backgroundColor: '#383f47',
    markers: [
      {latLng: [19.1, 72.83], name: 'Vile Parle'},
      {latLng: [18.92, 72.83], name: 'Churchgate'},
      {latLng: [28.61, 77.23], name: 'Delhi'},
      {latLng: [22.56,  88.36], name: 'Calcutta'},
      {latLng: [13.08, 80.27], name: 'Madras'},
      {latLng: [12.96, 77.56], name: 'Bangalore'},
      {latLng: [23.25, 77.41], name: 'Bhopal'},
      {latLng: [23.22,72.68], name: 'Gandhinagar'},
      {latLng: [26.92, 75.82], name: 'Jaipur'},
      {latLng: [25.35, 74.63], name: 'Bhilwara'},
      {latLng: [18.96, 72.81], name: 'Grant Road'},
      {latLng: [19.11, 72.84], name: 'Andheri'},
      {latLng: [19.01, 72.84], name: 'Dadar'},
      {latLng: [19.17, 72.95], name: 'Thane'},
      {latLng: [20.63, 72.93], name: 'Valsad'},
      // {latLng: [7.35, 134.46], name: 'Palau'},
      // {latLng: [42.5, 1.51], name: 'Andorra'},
      // {latLng: [14.01, -60.98], name: 'Saint Lucia'},
      // {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
      // {latLng: [1.3, 103.8], name: 'Singapore'},
      // {latLng: [1.46, 173.03], name: 'Kiribati'},
      // {latLng: [-21.13, -175.2], name: 'Tonga'},
      // {latLng: [15.3, -61.38], name: 'Dominica'},
      // {latLng: [-20.2, 57.5], name: 'Mauritius'},
      // {latLng: [26.02, 50.55], name: 'Bahrain'},
      // {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
    ]
  });
});