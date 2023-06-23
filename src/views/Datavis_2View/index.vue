<template>
    <div id="container">
    </div>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';

/*在Vue3中使用时,需要引入Vue3中的shallowRef方法(使用shallowRef进行非深度监听,
因为在Vue3中所使用的Proxy拦截操作会改变JSAPI原生对象,所以此处需要区别Vue2使用方式对地图对象进行非深度监听,
否则会出现问题,建议JSAPI相关对象采用非响应式的普通对象来存储)*/
import { shallowRef } from '@vue/reactivity';
import { onMounted, ref } from "vue";


const map = shallowRef<any>(null);
const path = ref([]);
const current_position = ref([])
function initMap(): void {
    (<any>window)._AMapSecurityConfig = {
        securityJsCode: '11519246f8f33ccdb6c0e31db79e50d7',
    }

    AMapLoader.load({
        key: "b2f0aaec3960e7ca0dc59198c0abb037", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
        map.value = new AMap.Map("container", {  //设置地图容器id
            viewMode: "3D",    //是否为3D地图模式
            zoom: 10,           //初始化地图级别
            center: [112.936729, 28.217872], //初始化地图中心点位置
        });
        AMap.plugin(["AMap.ToolBar", "AMap.Scale", "AMap.HawkEye", "AMap.Geolocation", "AMap.MapType", "AMap.MouseTool"], function () {
            //异步同时加载多个插件
            // 添加地图插件
            map.value.addControl(new AMap.ToolBar()); // 工具条控件;范围选择控件
            map.value.addControl(new AMap.Scale()); // 显示当前地图中心的比例尺
            map.value.addControl(new AMap.HawkEye()); // 显示缩略图
            map.value.addControl(new AMap.Geolocation()); // 定位当前位置
            map.value.addControl(new AMap.MapType()); // 实现默认图层与卫星图,实时交通图层之间切换

            // 以下是鼠标工具插件
            const mouseTool = new AMap.MouseTool(map.value);
            // mouseTool.rule();// 用户手动绘制折线图,测量距离
            mouseTool.measureArea(); // 测量面积
        })
        // 创建一个 Marker 实例：
        const marker = new AMap.Marker({
            position: new AMap.LngLat(112.936729, 28.217872),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '长沙'
        });

        // 将创建的点标记添加到已有的地图实例：
        map!.value!.add(marker);
        AMap.plugin('AMap.DistrictSearch', function () {
            let districtSearch = new AMap.DistrictSearch({
                level: 'country', // 关键字对应的行政区级别，country表示国家
                subdistrict: 1 // 显示下级行政区级数，1表示返回下一级行政区
            });
            let district = new AMap.DistrictSearch({ // 创建行政区查询对象
                extensions: 'all', // 返回行政区边界坐标等具体信息
                level: 'district' // 设置查询行政区级别为 区 
            });
            // 搜索所有省/直辖市信息
            districtSearch.search('中国', function (status, result) {
                // 查询成功时，result即为对应的行政区信息
            })
            district.search('芙蓉区', function (status, result) {
                let bounds = result.districtList[0].boundaries; // 获取朝阳区的边界信息
                let polygons: any[] = [];
                if (bounds) {
                    for (var i = 0, l = bounds.length; i < l; i++) {
                        let polygon: any = new AMap.Polygon({ //生成行政区划polygon
                            map: map.value,
                            strokeWeight: 1,
                            path: bounds[i],
                            fillOpacity: 0.7,
                            fillColor: '#CCF3FF',
                            strokeColor: '#CC66CC'
                        })
                        polygons.push(polygon);
                    }
                    map.value.setFitView();// 地图自适应
                }
            })
            // 创建纯文本标记
            let text = new AMap.Text({
                text: '芙蓉区',
                anchor: 'center', // 设置文本标记锚点
                draggable: true,
                cursor: 'pointer',
                angle: 10,
                style: {
                    // 'padding': '.75rem 1.25rem',
                    // 'margin-bottom': '1rem',
                    // 'border-radius': '.25rem',
                    // 'background-color': 'white',
                    // 'width': '15rem',
                    // 'border-width': 0,
                    // 'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
                    // 'text-align': 'center',
                    'font-size': '40px',
                    'color': 'blue'
                },
                position: [113.03, 28.195]
            });

            text.setMap(map.value);


        })
    }).catch(e => {
        console.log(e);
    })

}



onMounted(() => {
    initMap()
})
</script>

<style scoped lang="scss">
#container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 800px;
    position: relative;


}
</style>