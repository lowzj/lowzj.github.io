function imp(count, des) {
  return {
    y: count,
    name: des,
    marker:{
      enabled: true,
      symbol: "url(./important.svg)"
    }
  }
}


HD = [
  ["2018-05-17", imp(5, '18.05.17 相识')],
  ["2018-05-18", 3],
  ["2018-05-19", 24],
  ["2018-05-20", 4],
  ["2018-05-21", 7],
  ["2018-05-22", 8],
  ["2018-05-23", 0],
  ["2018-05-24", 0],
  ["2018-05-25", 0],
  ["2018-05-26", 0],
  ["2018-05-27", 0],
  ["2018-05-28", 0],
  ["2018-05-29", 0],
  ["2018-05-30", 0],
  ["2018-05-31", 0],
  ["2018-06-01", 0],
  ["2018-06-02", 0],
  ["2018-06-03", 0],
  ["2018-06-04", 0],
  ["2018-06-05", 0],
  ["2018-06-06", 0],
  ["2018-06-07", 0],
  ["2018-06-08", 0],
  ["2018-06-09", 0],
  ["2018-06-10", 0],
  ["2018-06-11", 0],
  ["2018-06-12", 0],
  ["2018-06-13", 0],
  ["2018-06-14", 0],
  ["2018-06-15", 0],
  ["2018-06-16", 0],
  ["2018-06-17", 0],
  ["2018-06-18", 0],
  ["2018-06-19", 0],
  ["2018-06-20", 0],
  ["2018-06-21", 0],
  ["2018-06-22", 0],
  ["2018-06-23", 0],
  ["2018-06-24", imp(8, '18.06.24 第一次主动say hi')],
  ["2018-06-25", 6],
  ["2018-06-26", imp(7, '18.06.26 此页诞生')],
  ["2018-06-27", 8],
  ["2018-06-28", 6],
  ["2018-06-29", 11],
  ["2018-06-30", 8],
  ["2018-07-01", 3],
  ["2018-07-02", imp(14, '18.07.02 晋升成功')],
  ["2018-07-03", 3],
  ["2018-07-04", 4],
  ["2018-07-05", 2],
  ["2018-07-06", 8],
  ["2018-07-07", 1],
  ["2018-07-08", 0],
  ["2018-07-09", imp(5, '18.07.09 三年醇')],
]

var datas = new Array(0);
HD.forEach(function(d){
  datas.push(d[1]);
})

Highcharts.chart('container', {
  chart: {
    type: 'spline',
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1
    }
  },
  title: {
    text: '哈哈哈^_^张全蛋'
  },
  subtitle: {
    text: '富士康1号车间打标流水线熟练工每日心情指数'
  },
  xAxis: {
    type: 'datetime',
    labels: {
      overflow: 'justify'
    }
  },
  yAxis: {
    title: {
      text: '哈哈数量(次/天)'
    },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [{
      from: 0,
      to: 2,
      // color: 'rgba(68, 170, 213, 0.1)',
      color: '#85929E',
      label: {
        text: '了无生趣',
        style: {
          color: '#606060'
        }
      }
    }, {
      from: 2,
      to: 5,
      color: 'rgba(0, 0, 0, 0)',
      label: {
        text: '稀松平常',
        style: {
          color: '#606060'
        }
      }
    }, {
      from: 5,
      to: 11,
      color: 'rgba(68, 170, 213, 0.1)',
      label: {
        text: '笑逐颜开',
        style: {
          color: '#606060'
        }
      }
    }, {
      from: 11,
      to: 16,
      // color: 'rgba(0, 0, 0, 0)',
      color: '#27AE60',
      label: {
        text: '眉飞色舞',
        style: {
          color: '#606060'
        }
      }
    }, {
      from: 16,
      to: 22,
      // color: 'rgba(68, 170, 213, 0.1)',
      color: '#F9E79F',
      label: {
        text: '欣喜若狂',
        style: {
          color: '#606060'
        }
      }
    }, {
      from: 22,
      to: 27,
      // color: 'rgba(0, 0, 0, 0)',
      color: '#AF7AC5',
      label: {
        text: '心醉神迷',
        style: {
          color: '#606060'
        }
      }
    }, {
      from: 27,
      to: 30,
      // color: 'rgba(68, 170, 213, 0.1)',
      color: '#EC7063',
      label: {
        text: '乐极生悲',
        style: {
          color: '606060'
        }
      }
    }]
  },
  legend: {
    enabled: false
  },
  tooltip: {
    valueSuffix: ' 次'
  },
  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5
        }
      },
      marker: {
        enabled: false
      },
      pointInterval: 3600000*24, // one day
      pointStart: Date.UTC(2018, 04, 17)
    },
    series: {
      events: {
        legendItemClick: function(e) { return false; }
      }
    }
  },
  series: [{
    name: '哈哈',
    data: datas
  }],
  navigation: {
    menuItemStyle: {
      fontSize: '10px'
    }
  },
  credits: {
    text: 'lowzj',
    href: 'https://github.com/lowzj'
  }
});
