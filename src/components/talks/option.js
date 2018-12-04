export default {
    tooltip: {
        show: true,
        formatter: (params) => {
            return params.data.name /* + '<br/>' + '热度：' + params.data.hot*/;
        }
    },
    series: [{
        type: 'wordCloud', //类型为字符云
        size: ['100%', '100%'],
        sizeRange: [8, 30],
        rotationRange: [0, 0], //旋转范围
        textStyle: {
        normal: {
            fontFamily: 'sans-serif',
            color: function () {
            return 'rgb(' + [Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
                ]
                .join(',') + ')';
            }
        },
        emphasis: {
            shadowBlur: 5, //阴影距离
            shadowColor: '#333' //阴影颜色
        }
        },
        data: [{
            name: 'Sam S Club',
            value: 10000,
            textStyle: {
                normal: {
                    color: 'black'
                },
                emphasis: {
                    color: 'red'
                }
            }
        }, {
            name: 'Macys',
            value: 6181
        }, {
            name: 'Amy Schumer',
            value: 4386
        }, {
            name: 'Jurassic World',
            value: 4055
        }, {
            name: 'Charter Communications',
            value: 2467
        }, {
            name: 'Chick Fil A',
            value: 2244
        }, {
            name: 'Planet Fitness',
            value: 1898
        }, {
            name: 'Pitch Perfect',
            value: 1484
        }, {
            name: 'Express',
            value: 1112
        }, {
            name: 'Home',
            value: 965
        }, {
            name: 'Johnny Depp',
            value: 847
        }, {
            name: 'Lena Dunham',
            value: 582
        }, {
            name: 'Lewis Hamilton',
            value: 555
        }, {
            name: 'KXAN',
            value: 550
        }, {
            name: 'Mary Ellen Mark',
            value: 462
        }, {
            name: 'Farrah Abraham',
            value: 366
        }, {
            name: 'Rita Ora',
            value: 360
        }, {
            name: 'Serena Williams',
            value: 282
        }, {
            name: 'NCAA baseball tournament',
            value: 273
        }, {
            name: 'Point Break',
            value: 265
        }],
    }]
}