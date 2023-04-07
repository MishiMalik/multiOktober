

$(".close-pop").on("click",function(){
$(".fixed-partiper").css("bottom","-700px");
})
// ===================================carsd
$('.owl-carousel-tent').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
});
$('.owl-carousel-news').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        },
        
    }
});
$('.owl-carousel-trips').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        },
        
    }
});
$('.owl-carousel-bus-trip').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        },
        
    }
});

// ========================chart
  
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', '', '', '','','','','', '','','','',''],
    ['2014', 1000, 400, 200, 300, 500, 300, 200, 1000, 400, 200, 400, 200],
  
  ]);

  var options = {
    
    chart: {
      title: 'Oktobers Turnout Forecast',
      subtitle: '',
    },
    vAxis: {
        minValue: 0,
        gridlines: {
          color:'transparent',
          title:'none'
        },
     } 
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}