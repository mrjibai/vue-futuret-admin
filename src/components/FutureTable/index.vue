

<script lang="ts" setup>
/**
 * 此组件模仿ANTtable，不能直接改这个组件从而达到想要的样式，这个是通用组件，不可改
 * 搭配FutureTableTroor组件使用
 * 如果需要改样式，请采用样式渗透的写法
 */
import { ref, watch, useSlots, nextTick, computed } from "vue";
import fuxuankong from '/@/components/FutureTable/imgs/duoxuanweixuan.png'
import yixuan from '/@/components/FutureTable/imgs/duoxuanxuanzhong.png'
/**
 * @param {props.data} props.data 是渲染的数据
 * @param {options} 列配置
 * @param {rowCofig} 表格配置
 */
const props = defineProps<{
    data: Array<any>;
    options: options;
    rowCofig?: rowCofigs;
    ids?: String;
    height?: String;
    maxHeight?: String;
}>();

const RowsID = ref<number | null>(null);
const highlight = computed(() => {
    return props.rowCofig!.highlight ? props.rowCofig!.highlight : false;
});
const Emit = defineEmits(["handchangeAll",]);
const handRowStyle = (rows: any, index: number) => {
    if (highlight.value) {
        Emit("handchangeAll", rows, index);
        (RowsID.value = index);
        return
    }
};
const StyleSheetsH = computed<any>(() => {
    return { height: props.height, maxHeight: props.maxHeight }
})


const clelmentHight = ref();
const lefts = ref("");

const jingSTyle = () => {
    if (clelmentHight.value) {
        const idtswidth = clelmentHight.value.offsetWidth - clelmentHight.value.clientWidth;
        lefts.value =
            clelmentHight.value.scrollHeight > clelmentHight.value.clientHeight
                ? idtswidth + "px"
                : "0px";
    }
};

const checkstr = ref<any>([]);
const optionsList = ref(props.options.column);
const Toores = ref(props.options.column.map((e) => e.title));
const grid = ref(``);
for (let i = 0; i < props.options.column.length; i++) {
    if (props.options.column[i].width) {
        grid.value += `${props.options.column[i].width} `;
    } else {
        grid.value += `1fr `;
    }
}

if ((<any>props).rowCofig.isChecked) {
    grid.value = `3% ` + grid.value;
}
watch(
    () => props.data,
    (newvalue) => {
        nextTick(() => {
            jingSTyle();
        });
    }
);
nextTick(() => {
    jingSTyle();
});

const slot = useSlots();
// 选全部
const handAll = () => {
    if (checkstr.value.length === props.data.length) {
        checkstr.value = [];
        return;
    }
    checkstr.value = props.data.map((e: any) => e?.[props.ids as any]);
};

// 选中的元素
const hangSelects = (rows: any) => {
    if (checkstr.value.some((e: any) => e === rows?.[props.ids as any])) {
        checkstr.value = checkstr.value.filter((e: any) => e != rows?.[props.ids as any]);
        return;
    }
    checkstr.value.push(rows?.[props.ids as any]);
};
const setToor = (rows: any) => {
    Toores.value = rows;
    optionsList.value = optionsList.value.filter((e) =>
        rows.includes(e.title)
    );
}

const connect = (Rors: any) => {
    Rors.connecCore(props.options.column, setToor);
};

defineExpose({
    connect,
    checkstr,
});
</script>
<template>
    <div class="xtabls">
        <!-- 头部 -->
        <ul class="hederS" :style="{ marginRight: lefts }">
            <li class="heders">
                <ul class="xhherseTitle">
                    <li v-if="props.rowCofig?.isChecked">
                        <img @click="handAll" :src="checkstr.length === props.data.length ? yixuan : fuxuankong" alt="" />
                    </li>
                    <li v-show="Toores.includes(o.title)" v-for="(o, ks) in props.options.column" :key="ks"
                        :style="o.style">
                        <slot :name="o.prop + '_' + 'title'" :rows="(): any => o" v-if="slot?.[`${o.prop}_title`]"></slot>
                        <span v-else>{{ o?.title }}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="xinTabel" v-show="props.data.length > 0" :style="StyleSheetsH" ref="clelmentHight">
            <li :class="RowsID === index ? 'xing_body xing_bg' : 'xing_body'" v-for="(i, index) in props.data"
                :key="i?.[props.ids as any]" @click="handRowStyle(i, index)">
                <ul class="xhherseprops">
                    <li v-if="props.rowCofig?.isChecked" class="checkeds">
                        <img @click="hangSelects(i)" :src="checkstr.some((e: any) => e === i?.[props.ids as any]) ? yixuan : fuxuankong
                            " alt="" />
                    </li>
                    <li :style="o.style" v-show="Toores.includes(o.title)" v-for="(o, ks) in props.options.column" :key="ks"
                        :title="i?.[o.prop as any]">
                        <slot :name="o.prop" :rows="i" :indexs="(): any => index" v-if="slot?.[o.prop as any]"></slot>
                        <span class="longtext" v-else>{{ i?.[o.prop as any] }}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div v-show="props.data.length === 0" style="text-align: center">暂无数据</div>
    </div>
</template>
<style lang="scss" scoped>
.xtabls {
    margin: 5px;
    position: relative;

    .hederS {
        overflow-y: auto;

        .heders {
            display: flex;
            width: 100%;
            align-items: center;
            height: 40px;
            line-height: 40px;
            color: white;
            background: linear-gradient(135deg, #2b76bb 0%, #1a4f80 100%);
            border-radius: 4px;
            opacity: 1;
            border: 1px solid #f2f2f2;
            box-sizing: border-box;

            .xhherseTitle {
                width: 100%;
                display: grid;
                grid-template-columns: v-bind(grid);
                position: relative;

                li:first-child {
                    padding-left: 10px;
                }

                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 100%;
                }
            }
        }
    }

    .xinTabel {
        width: 100%;
        overflow-y: auto;

        .xing_bg {
            background: linear-gradient(135deg, #73b0e9 0%, #9ebedb 100%) !important;
            color: white !important;
        }

        .xing_body {
            transition: 0.3s;
            cursor: pointer;
            display: flex;
            align-items: center;
            background: linear-gradient(180deg, #ffffff 0%, #f3f3f3 100%);
            box-shadow: 4px 3px 8px 0px rgba(60, 78, 106, 0.23);
            border-radius: 8px 8px 8px 8px;
            opacity: 1;
            border: 1px solid;
            border-image: linear-gradient(180deg,
                    rgba(255, 255, 255, 1),
                    rgba(216, 216, 216, 1)) 1 1;
            height: 45px;
            line-height: 45px;
            margin: 5px 0;
            box-sizing: border-box;


            .xhherseprops {
                width: 100%;
                display: grid;
                grid-template-columns: v-bind(grid);
                position: relative;

                .checkeds {
                    cursor: pointer;
                }

                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #000;
                    width: 100%;

                    .longtext {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: #000;
                    }

                }

                li:first-child {
                    padding-left: 10px;
                }
            }
        }
    }
}
</style>
