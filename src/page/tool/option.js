import {data, links} from '@/page/tool/data'
export default {
    tooltip: {
        formatter: function (x) {
            return x.data.des;
        }
    },
    color: ["#9D96F5","#37A2DA", "#9D96F5", "#FB7293","#2079B6", "#AAAAAA"],
    textStyle: {
        fontSize: 10
    },
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 50,
            roam: true,
            // focusNodeAdjacency: true,
            edgeSymbol: ['circle', 'arrow'], 
            edgeSymbolSize: [4, 8],
            force: {
                repulsion: 2500,
                edgeLength: [10, 50]
            },
            draggable: true,
            itemStyle: {
                normal: {
                    shadowColor: "#737171",
                    shadowBlur: 10,
                    shadowOffsetX: 4,
                    shadowOffsetY: 4
                }
            },
            lineStyle: {
                normal: {
                    color: '#99999c'
                }
            },
            edgeLabel: { //线条文字
                normal: {
                    show: true,
                    formatter: function (x) {
                        return x.data.name;
                    },
                    verticalAlign: "top",
                    backgroundColor: "#f7e0d9"
                }
            },
            label: {  //文字
                normal: {
                    show: true,  
                }
            },
            data,
            links,
        }
    ]
}