$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".counter").countUp({
  delay: 10,
  time: 2000,
});
