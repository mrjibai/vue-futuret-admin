import * as echarts from 'echarts'
// 柱状图1模块
export const DrawALinets = (): any => {
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    // textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                    // }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    // textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                    // }
                },
                axisLine: {
                    // lineStyle: {
                    color: "rgba(255,255,255,.1)"
                    // width: 1,
                    // type: "solid"
                    // }
                },
                splitLine: {
                    // lineStyle: {
                    color: "rgba(255,255,255,.1)"
                    // }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "35%",
                data: [200, 300, 300, 900, 1500, 1200, 600],
                // itemStyle: {
                // barBorderRadius: 5
                // }
            }
        ]
    };
    // 数据变化
    var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];
    return option;
}
// 折线图定制
export const zhexiants = (): any => {
    // (1)准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    };

    // 2. 指定配置和数据
    let option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            // textStyle: {
            color: "#4c9bfd"
            // }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                // lineStyle: {
                color: "#012f4a"
                // }
            }
        },
        series: [
            {
                name: "新增粉丝",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "新增游客",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    return option;
}
// 饼形图定制
// 折线图定制
export const binxiants = (): any => {
    let option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            // textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
            // }
        },
        series: [
            {
                name: "年龄分布",
                type: "pie",
                center: ["50%", "42%"],
                radius: ["40%", "60%"],
                color: [
                    "#065aab",
                    "#066eab",
                    "#0682ab",
                    "#0696ab",
                    "#06a0ab",
                    "#06b4ab",
                    "#06c8ab",
                    "#06dcab",
                    "#06f0ab"
                ],
                label: { show: false },
                labelLine: { show: false },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };
    return option;
}
// 学习进度柱状图模块
export const jinduts = (): any => {
    var data = [70, 34, 60, 78, 69];
    var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
    var valdata = [702, 350, 610, 793, 664];
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    let option = {
        //图标位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",

                    rich: {
                        lg: {
                            backgroundColor: "#339911",
                            color: "#fff",
                            borderRadius: 15,
                            // padding: 5,
                            align: "center",
                            width: 15,
                            height: 15
                        }
                    }
                }
            },
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    // textStyle: {
                    fontSize: 12,
                    color: "#fff"
                    // }
                }
            }
        ],
        series: [
            {
                name: "条",
                type: "bar",
                yAxisIndex: 0,
                data: data,
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    // normal: {
                    // barBorderRadius: 20,
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num];
                    }
                    // }
                },
                label: {
                    // normal: {
                    show: true,
                    position: "inside",
                    formatter: "{c}%"
                    // }
                }
            },
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 50,
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    // normal: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    // barBorderRadius: 15
                    // }
                }
            }
        ]
    };
    return option;
}
// 折线图 优秀作品
export const zhexian2ts = (): any => {
    let option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // lineStyle: {
                color: "#dddc6b"
                // }
            }
        },
        legend: {
            top: "0%",
            // textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
            // }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    // textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                    // }
                },
                axisLine: {
                    // lineStyle: {
                    color: "rgba(255,255,255,.2)"
                    // }
                },

                data: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30"
                ]
            },
            {
                axisPointer: { show: false },
                axisLine: { show: false },
                position: "bottom",
                offset: 20
            }
        ],

        yAxis: [
            {
                type: "value",
                axisTick: { show: false },
                axisLine: {
                    // lineStyle: {
                    color: "rgba(255,255,255,.1)"
                    // }
                },
                axisLabel: {
                    // textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                    // }
                },

                splitLine: {
                    // lineStyle: {
                    color: "rgba(255,255,255,.1)"
                    // }
                }
            }
        ],
        series: [
            {
                name: "播放量",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    // normal: {
                    color: "#0184d5",
                    width: 2
                    // }
                },
                areaStyle: {
                    // normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                    // }
                },
                itemStyle: {
                    // normal: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                    // }
                },
                data: [
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40
                ]
            },
            {
                name: "转发量",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    // normal: {
                    color: "#00d887",
                    width: 2
                    // }
                },
                areaStyle: {
                    // normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(0, 216, 135, 0.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(0, 216, 135, 0.1)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                    // }
                },
                itemStyle: {
                    // normal: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                    // }
                },
                data: [
                    50,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    50,
                    60,
                    40,
                    60,
                    40,
                    80,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40
                ]
            }
        ]
    };
    return option;
}
// 点位分布统计模块
export const dainweits = (): any => {
    // 2. 指定配置项和数据
    var option = {
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            // textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
            // }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: "点位统计",
                type: "pie",
                // 如果radius是百分比则必须加引号
                radius: ["10%", "70%"],
                center: ["50%", "42%"],
                roseType: "radius",
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "深圳" },
                    { value: 42, name: "广东" }
                ],
                // 修饰饼形图文字相关的样式 label对象
                label: {
                    fontSize: 10
                },
                // 修饰引导线样式
                labelLine: {
                    // 连接到图形的线长度
                    length: 10,
                    // 连接到文字的线长度
                    length2: 10
                }
            }
        ]
    };
    return option;
}
// 中国地图
export const chinamapts = (): any => {
    let chinaGeoCoordMap = {
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891]
    };
    let chinaDatas = [
        [{
            name: "北京市",
            value: 0
        }, {
            name: '黑龙江',
            value: 0
        },
        { name: '上海市' }],
        [{
            name: '内蒙古',
            value: 0
        }], [{
            name: '吉林',
            value: 0
        }], [{
            name: '辽宁',
            value: 0
        }], [{
            name: '河北',
            value: 0
        }], [{
            name: '天津',
            value: 0
        }], [{
            name: '山西',
            value: 0
        }], [{
            name: '陕西',
            value: 0
        }], [{
            name: '甘肃',
            value: 0
        }], [{
            name: '宁夏',
            value: 0
        }], [{
            name: '青海',
            value: 0
        }], [{
            name: '四川',
            value: 0
        }], [{
            name: '重庆',
            value: 0
        }], [{
            name: '山东',
            value: 0
        }], [{
            name: '河南',
            value: 0
        }], [{
            name: '江苏',
            value: 0
        }], [{
            name: '安徽',
            value: 0
        }], [{
            name: '湖北',
            value: 0
        }], [{
            name: '浙江',
            value: 0
        }], [{
            name: '福建',
            value: 0
        }], [{
            name: '江西',
            value: 0
        }], [{
            name: '湖南',
            value: 0
        }], [{
            name: '贵州',
            value: 0
        }], [{
            name: '广西',
            value: 0
        }], [{
            name: '海南',
            value: 0
        }], [{
            name: '上海',
            value: 0
        }]
    ];

    const convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            var toCoord = [[121.4648, 31.2891], [110.3467, 41.4899], [110.3467, 41.4899], [110.3467, 41.4899], [110.3467, 41.4899], [110.3467, 41.4899], [110.3467, 41.4899], [110.3467, 41.4899]];//被攻击点
            if (fromCoord && toCoord[i]) {
                res.push([{
                    coord: toCoord[i],
                }, {
                    coord: fromCoord,
                    value: dataItem[0].value,
                    // visualMap: false
                }]);
            }
        }
        return res;
    };

    var series = [];
    [['上海', chinaDatas]].forEach(function (item, i) {
        // console.log(item)
        series.push({
            type: 'lines',
            zlevel: 2,

            effect: {
                show: true,
                period: 3, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 3, //图标大小
            },
            lineStyle: {

                // normal: {
                color: 'red',
                width: 1, //尾迹线条宽度
                opacity: .7, //尾迹线条透明度
                curveness: .3, //尾迹线条曲直度
                // },
            },
            data: convertData(item[1])
        },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 5 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    // normal: {
                    show: true,
                    position: 'left', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) {//圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 13,
                    // },
                    // emphasis: {
                    //     show: true
                    // }
                },
                symbol: 'circle',
                symbolSize: function (val) {
                    return 5 + val[2] * 5; //圆环大小
                },
                itemStyle: {
                    // normal: {
                    show: true,
                    color: '#f00'
                    // }
                },
                data: (<Array<Object>>item[1]).map(function (dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                        // visualMap: false
                    };
                }),
            },
            //被攻击点
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    // normal: {
                    show: false,    //定位点名字
                    position: 'right',
                    // offset:[5, 0],
                    color: '#0f0',
                    formatter: '{b}',
                    // textStyle: {
                    // }
                    // },
                    // emphasis: {
                    //     // show: false,   //定位标记
                    //     color: "#f60"
                    // }
                },
                symbol: 'pin',  //定位图标样式
                symbolSize: 50,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[(<Number | any>item[0])].concat([20]),
                }],
            }
        );
    });

    var option = {

        tooltip: {
            trigger: 'item',
            // backgroundColor: '#04284e',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        // backgroundColor: '#0d0e1a',
        visualMap: { //图例值控制
            min: 0,
            max: 1,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            // textStyle: {
            // color: '#fff'
            // }
        },
        geo: [{
            map: 'china',
            show: true,
            label: {
                // emphasis: {
                //     show: false,
                // },
            },
            roam: true, //是否允许缩放
            layoutCenter: ['49%', '65%'], //地图位置
            layoutSize: '120%',
            itemStyle: {

                // normal: {
                show: 'true',
                color: '#04284e', //地图背景色
                borderColor: '#5bc1c9', //省市边界线
                // },
                // emphasis: {
                // show: 'true',
                // color: 'rgba(37, 43, 61, .5)', //悬浮背景
                // },
            },
            // itemStyle: {
            //     // 区域样式
            //     areaColor: {
            //       type: "radial",
            //       x: 0.5,
            //       y: 0.5,
            //       r: 0.8,
            //       colorStops: [
            //         {
            //           offset: 0,
            //           color: "rgba(37, 43, 61, .5)", // 0% 处的颜色
            //         },
            //         {
            //           offset: 1,
            //           color: "rgba(2, 99, 206, 1)", // 100% 处的颜色
            //         },
            //       ],
            //       globalCoord: false, // 缺省为 false
            //     },
            //     shadowColor: "#5bc1c9", //地图区域的阴影颜色。
            //     shadowOffsetX: 0,
            //     shadowOffsetY: 10,
            //   },
        },],
        series: series
    };
    return option;
}