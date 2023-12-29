<template>
    <div class="dynamic_form">
        <FuCard title="动态表单">
            <template #extra>
                <a-affix :offset-top="10">
                    <a-tooltip placement="bottom">
                        <template #title>表单配置</template>
                        <i @click="changeOpenWrawer" class="iconfont icon-shezhi"></i>
                    </a-tooltip>
                </a-affix>

            </template>
            <a-alert :message="messageText" type="success" style="margin-bottom: 10px;" />
            <br>
            <FuForm :formData="formData" :formConfig="formConfig"></FuForm>
            <a-drawer
                :headerStyle="{ color: 'var(--wang-text-color)' }" :maskStyle="{ width: '100vw', height: '100vh' }"
                v-model:open="openDrawer"
                style="color: var(--wang-text-color);background-color: var(--wangwang-drwer-bgcolor)"
            >
                <template v-slot:title>
                    <span style="color: var(--wang-text-color);">表单配置</span>
                </template>
                <template #extra>
                    <a-button size="small" @click="resetConfig" type="primary">重置</a-button>
                </template>
                <div class="config">
                    <a-divider>全局配置</a-divider>
                <div>
                    <div class="drawerItem">
                    <span>
                        Layout布局
                    </span>
                    <a-select  v-model:value="formConfig.layout" :options="layoutOptions"></a-select>
                 </div>
                <div class="drawerItem">
                    <span>
                        label对齐方式
                    </span>
                    <a-select  v-model:value="formConfig.labelAlign" :options="labelAlignOptions"></a-select>
                 </div>
                <div class="drawerItem">
                    <span>
                        表单大小
                    </span>
                    <a-select  v-model:value="formConfig.size" :options="sizeOptions"></a-select>
                 </div>
                <div class="drawerItem">
                    <span>
                        校验状态
                    </span>
                    <a-select  v-model:value="formConfig.status" :options="statusOptions"></a-select>
                 </div>
                 
                <div class="drawerItem">
                    <span>
                        弹出位置
                    </span>
                    <a-select v-model:value="formConfig.placement" :options="placementOptions"></a-select>
                 </div>
                <div class="drawerItem">
                    <span>
                        表单禁用
                    </span>
                    <a-switch v-model:checked="formConfig.disabled"></a-switch>
                 </div>
                <div class="drawerItem">
                    <span>
                        清除功能
                    </span>
                    <a-switch v-model:checked="formConfig.clearable"></a-switch>
                 </div>
                 
                 <div class="drawerItem">
                        <span>
                            边框
                        </span>
                        <a-switch v-model:checked="formConfig.bordered"></a-switch>
                    </div>
                 
                 <div class="drawerItem">
                        <span>
                            显示字数
                        </span>
                        <a-switch v-model:checked="formConfig.showCount"></a-switch>
                    </div>
                </div>
                <a-divider>树选择 (TreeSelect)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                            treeLine
                        </span>
                        <a-switch v-model:checked="treeTreeLine"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            showLeafIcon
                        </span>
                        <a-switch v-model:checked="treeShowLeafIcon"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            可勾选
                        </span>
                        <a-switch v-model:checked="treeCheckable"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            多选
                        </span>
                        <a-switch v-model:checked="treeMultiple"></a-switch>
                    </div>
                </div>
                <a-divider>数字输入框 (inputNumber)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                            最小值
                        </span>
                        <a-input-number keyboard :min="1" :max="100" v-model:value="inputNumberMin"></a-input-number>
                    </div>
                    <div class="drawerItem">
                        <span>
                            最大值
                        </span>
                        <a-input-number keyboard :min="1" :max="100" v-model:value="inputNumberMax"></a-input-number>
                    </div>
                    <div class="drawerItem">
                        <span>
                            增减按钮
                        </span>
                        <a-switch v-model:checked="inputNumberControls"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            键盘快捷行为
                        </span>
                        <a-switch v-model:checked="inputNumberKeyboard"></a-switch>
                    </div>
                </div>
                <a-divider>选择器 (select)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                           模式
                        </span>
                        <a-select  v-model:value="selectorMode" :options="selectorModeOptions"></a-select>
                    </div>
                    <div class="drawerItem">
                        <span>
                            显示value
                        </span>
                        <a-switch v-model:checked="selectorLabelInValue"></a-switch>
                    </div>
                </div>
                <a-divider>级联选择器 (cascader)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                            展开方式
                        </span>
                        <a-select  v-model:value="cascaderTrigger" :options="[{label: '点击',value: 'click'},{label:'移入',value: 'hover'}]"></a-select>
                    </div>
                    <div class="drawerItem">
                        <span>
                            多选
                        </span>
                        <a-switch  v-model:checked="cascaderMultiple"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            选择即改变
                        </span>
                        <a-switch  v-model:checked="cascaderChangeOnSelect"></a-switch>
                    </div>
                </div>
                <a-divider>日期选择器 (datePicker)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                            选择器类型
                        </span>
                        <a-select  v-model:value="datePickerPicker" :options="datePickerPickerOptions"></a-select>
                    </div>
                    <div class="drawerItem">
                        <span>
                            日期面板的状态
                        </span>
                        <a-select  v-model:value="datePickerMode" :options="datePickerModeOptions"></a-select>
                    </div>
                    <div class="drawerItem">
                        <span>
                            显示时间
                        </span>
                        <a-switch  v-model:checked="datePickerShowTime"></a-switch>
                    </div>

                </div>
                <a-divider>评分 (rate)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                            自定义字符
                        </span>
                        <a-input :allow-clear="true"  v-model:value="rateCharacter" ></a-input>
                    </div>
                    <div class="drawerItem">
                        <span>
                            star 总数
                        </span>
                        <a-input-number :min="1" :max="10"  v-model:value="rateCount" ></a-input-number>
                    </div>
                    <div class="drawerItem">
                        <span>
                            允许半选
                        </span>
                        <a-switch  v-model:checked="rateAllowHalf"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            允许清除
                        </span>
                        <a-switch  v-model:checked="rateClearable"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            只读
                        </span>
                        <a-switch  v-model:checked="rateDisabled"></a-switch>
                    </div>
                </div>
                <a-divider>滑块 (slider)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                            步长
                        </span>
                        <a-input allow-clear v-model:value="sliderStep"></a-input>
                    </div>
                    <div class="drawerItem">
                        <span>
                            最小值
                        </span>
                        <a-input-number :min="0" :max="100" keyboard v-model:value="sliderMin"></a-input-number>
                    </div>
                    <div class="drawerItem">
                        <span>
                            最大值
                        </span>
                        <a-input-number :min="0" :max="1000" keyboard v-model:value="sliderMax"></a-input-number>
                    </div>
                    <div class="drawerItem">
                        <span>
                            垂直模式
                        </span>
                        <a-switch  v-model:checked="sliderVertical"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            双滑块
                        </span>
                        <a-switch  v-model:checked="sliderRange"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            ToolTip
                        </span>
                        <a-switch  v-model:checked="sliderTooltipOpen"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            反向
                        </span>
                        <a-switch  v-model:checked="sliderReverse"></a-switch>
                    </div>

                </div>
                <a-divider>文本域 (textarea)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                            rows
                        </span>
                        <a-input-number :min="2" :max="10" v-model:value="textareaRows"></a-input-number>
                    </div>
                    <div class="drawerItem">
                        <span>
                            最大长度
                        </span>
                        <a-input-number :min="100" :max="500" v-model:value="textareaMaxLength"></a-input-number>
                    </div>
                    <div class="drawerItem">
                        <span>
                            显示字数
                        </span>
                        <a-switch  v-model:checked="textareaShowCount"></a-switch>
                    </div>
                </div>
                <a-divider>穿梭框 (transfer)</a-divider>
                <div class="transfer">
                    <div class="drawerItem">
                        <span>
                            左穿梭框标题
                        </span>
                        <a-input  :allow-clear="true"  v-model:value="transferTitles[0]" ></a-input>
                    </div>
                    <div class="drawerItem">
                        <span>
                            右穿梭框标题
                        </span>
                        <a-input :allow-clear="true"  v-model:value="transferTitles[1]" ></a-input>
                    </div>
                    <div class="drawerItem">
                        <span>
                            单向模式
                        </span>
                        <a-switch  v-model:checked="transferOneWay"></a-switch>
                    </div>
                    
                    <div class="drawerItem">
                        <span>
                            显示搜索
                        </span>
                        <a-switch  v-model:checked="transferShowSearch"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            开启选择全部
                        </span>
                        <a-switch  v-model:checked="transferShowSelectAll"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            开启分页
                        </span>
                        <a-switch  v-model:checked="transferPagination"></a-switch>
                    </div>
                </div>
                <a-divider>图片上传 (upload)</a-divider>
                <div>
                    <div class="drawerItem">
                        <span>
                            上传模式
                        </span>
                        <a-select  v-model:value="uploadMode" :options="uploadModeOptions"></a-select>
                    </div>
                    <div class="drawerItem">
                        <span>
                            图片列表样式
                        </span>
                        <a-select  v-model:value="uploadListType" :options="uploadListTypeOptions"></a-select>
                    </div>
                    <div class="drawerItem">
                        <span>
                            请求方式
                        </span>
                        <a-select v-model:value="uploadMethod" :options="[{label: 'GET',value: 'get'},{label:'POST',value:'post'}]"></a-select>
                    </div>
                    <div class="drawerItem">
                        <span>
                            文件类型
                        </span>
                        <a-select v-model:value="uploadAccept" :options="uploadAcceptOptions"></a-select>
                    </div>
                    <!-- <div class="drawerItem">
                        <span>
                            手动上传
                        </span>
                        <a-switch  v-model:checked="uploadManualUpload"></a-switch>
                    </div> -->
                    <div class="drawerItem">
                        <span>
                            多文件上传
                        </span>
                        <a-switch  v-model:checked="uploadMultiple"></a-switch>
                    </div>
                    <div class="drawerItem">
                        <span>
                            显示上传列表
                        </span>
                        <a-switch  v-model:checked="uploadShowUploadList"></a-switch>
                    </div>
                </div>
                </div>
            </a-drawer>
        </FuCard>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive , watch} from "vue"

//#region
const messageText = ref('基于 Ant Design 封装的动态表单组件')
const openDrawer = ref(false)
const changeOpenWrawer = () => {
    openDrawer.value = true
}

const resetConfig = () => {
    // global config
    formConfig.layout = 'horizontal'
    formConfig.labelAlign = 'right'
    formConfig.size = 'middle'
    formConfig.status = ''
    formConfig.placement = 'bottomLeft'
    formConfig.bordered = true
    formConfig.clearable = false
    formConfig.showCount = false
    formConfig.disabled = false
    // tree config
    treeTreeLine.value = false
    treeShowLeafIcon.value = false
    treeCheckable.value = false
    treeMultiple.value = false
    // inputNumber config
    inputNumberMin.value = 1
    inputNumberMax.value = 100
    inputNumberControls.value = false
    inputNumberKeyboard.value = false
    // selector config
    selectorMode.value = 'combobox'
    selectorLabelInValue.value = false
    // cascader config
    cascaderTrigger.value = 'click'
    cascaderMultiple.value = false
    cascaderChangeOnSelect.value = false
    // datePicker config
    datePickerPicker.value = 'date'
    datePickerMode.value = 'date'
    datePickerShowTime.value = false
    // rate config
    rateCharacter.value = ''
    rateCount.value = 5
    rateAllowHalf.value = false
    rateClearable.value = false
    rateDisabled.value = false
    // slider config
    sliderStep.value = 1
    sliderMin.value = 1
    sliderMax.value = 100
    sliderRange.value = false
    sliderVertical.value = false
    sliderTooltipOpen.value = false
    sliderReverse.value = false
    // textarea config
    textareaRows.value = 4
    textareaMaxLength.value = 100
    textareaShowCount.value = false
    // transfer config
    transferTitles[0] = '左侧穿梭框' 
    transferTitles[1] = '右侧穿梭框'
    transferOneWay.value = false
    transferShowSearch.value = false
    transferShowSelectAll.value = false
    transferPagination.value = false
    // upload config
    uploadMode.value = 'button'
    uploadListType.value = 'text'
    uploadMethod.value = 'post'
    uploadAccept.value = '*/*'
    uploadMultiple.value = false
    uploadShowUploadList.value = true
}


const treeMultiple = ref(false)
const treeTreeLine = ref(false)
const treeShowLeafIcon = ref(false)
const treeCheckable = ref(false)

const inputNumberMin = ref(1)
const inputNumberMax = ref(100)
const inputNumberControls = ref(false)
const inputNumberKeyboard = ref(false)

const selectorMode = ref('combobox')
const selectorLabelInValue = ref(false)

const cascaderTrigger = ref('click')
const cascaderMultiple = ref(false)
const cascaderChangeOnSelect = ref(false)

const datePickerValue = ref<string | Array<any>>('')
const datePickerPicker = ref('date')
const datePickerMode = ref('date')
const datePickerShowTime = ref(false)

const rateCharacter = ref('')
const rateCount = ref(5)
const rateAllowHalf = ref(false)
const rateDisabled = ref(false)
const rateClearable = ref(false)

const sliderValue = ref<number | number[]>(10)
const sliderMin = ref(1)
const sliderMax = ref(100)
const sliderStep = ref<number>(1)
const sliderVertical = ref(false)
const sliderRange =ref(false)
const sliderReverse = ref(false)
const sliderTooltipOpen  = ref(false)
watch(sliderRange,(newValue) => {
    if(newValue) {
        sliderValue.value = [sliderMin.value,sliderMax.value]
    }else {
        sliderValue.value = sliderMin.value
    }
})
watch(sliderStep,(newValue) => {
    if(!newValue) {
        sliderStep.value = 1
    }
    if(newValue >= sliderMax.value) {
        sliderStep.value = sliderMax.value
    }
})

const textareaRows = ref(4)
const textareaMaxLength = ref(100)
const textareaShowCount = ref(false)

const transferTitles = reactive(['左侧穿梭框', '右侧穿梭框'])
const transferOneWay = ref(false)
const transferPagination = ref(false)
const transferShowSearch = ref(false)
const transferShowSelectAll = ref(false)

const uploadMode = ref('button')
const uploadListType = ref('text')
const uploadMethod = ref('post')
const uploadAccept = ref('*')
const uploadShowUploadList = ref(true)
const uploadMultiple = ref(false)
// const uploadManualUpload = ref(false)


// options
const uploadListTypeOptions = reactive([{ label: '默认', value: 'text', }, { label: '图片', value: 'picture' }, { label: '图片墙', value: 'picture-card' }])
const uploadModeOptions = reactive([{ label: '按钮', value: 'button', }, { label: '头像', value: 'avatar' }, { label: '拖拽', value: 'drag' }])
const uploadAcceptOptions = reactive([{ label: '*', value: '*/*', }, { label: '图片', value: 'image/*' }, { label: '音频', value: 'audio/*' },{label: '视频',value: 'video/*' },{label: 'html/htm', value: 'text/html'},{label: 'css', value: 'text/css'},{label: 'js', value: 'text/javascript,application/javascript'},{label: 'json', value: 'application/json'}])
const sizeOptions = reactive([{ label: '默认', value: 'middle', }, { label: '大', value: 'large' }, { label: '小', value: 'small' }])
const statusOptions = reactive([{ label: '默认', value: '', }, { label: '错误', value: 'error' }, { label: '警告', value: 'warning' }])
const layoutOptions = reactive([{ label: 'horizontal', value: 'horizontal', }, { label: 'vertical', value: 'vertical' }, { label: 'inline', value: 'inline' }])
const labelAlignOptions = reactive([{ label: 'left', value: 'left', }, { label: 'right', value: 'right' }])
const selectorModeOptions = reactive([{ label: '默认', value: 'combobox', }, { label: '多选', value: 'multiple' },{ label: '标签', value: 'tags' }])
const placementOptions = reactive([{ label: '默认', value: 'bottomLeft', }, { label: '右下', value: 'bottomRight' },{ label: '左上', value: 'topLeft' },{label: '右上',value: 'topRight'}])
const datePickerPickerOptions = reactive([{ label: '默认', value: 'date', }, { label: 'week', value: 'week' },{ label: 'month', value: 'month' },{label: 'quarter',value: 'quarter'},{label: 'year',value: 'year'}])
const datePickerModeOptions = reactive([{ label: '默认', value: 'date', }, { label: 'time', value: 'time' },{ label: 'month', value: 'month' },{label: 'decade',value: 'decade'},{label: 'year',value: 'year'}])

//#endregion

const formConfig = reactive<FormConfig>({
    name: 'form',
    labelCol: { span: 2 },
    wrapperCol: { offset: 2},
    status: '',
    size: 'middle',
    disabled: false,
    clearable: false,
    labelAlign: 'right',
    layout: 'horizontal',
    placement: 'bottomLeft',
    bordered: true,
    showCount: false
})

const formData = reactive<Array<FormItem>>(
    [
    {
        label: '搜索框',
        key: 'search',
        value: '',
        type: 'search',
        style: {
            width: '80%'
        },
        rules: [{ required: true, message: '请输入搜索内容', trigger: 'blur' }],
        search: (value: string) => {
            console.log(value, '~~~~~~~~~~~~~~~~');
        },
    },
    {
        label: '输入框',
        key: 'input',
        type: 'input',
        value: '',
        prefixIcon: 'iconfont icon-user',
        rules: [
            {
                required: true,
                trigger: 'blur'
            }
        ],
    },
    {
        label: '密码框',
        key: 'password',
        type: 'password',
        value: '',
        prefixIcon: 'iconfont icon-lock',
        rules: [
            {
                trigger: 'blur',
                required: true,
            }
        ],
    },
    {
        label: '树选择',
        type: 'treeSelect',
        key: 'treeSelect',
        value: '',
        options: [
            {
                label: 'parent 1',
                value: 'parent 1',
                children: [
                    {
                        label: 'parent 11',
                        value: 'parent 11',
                        children: [
                            {
                                label: 'parent 1-0',
                                value: 'parent 1-0',
                                children: [
                                    {
                                        label: 'my leaf',
                                        value: 'leaf1',
                                    },
                                    {
                                        label: 'your leaf',
                                        value: 'leaf2',
                                    },
                                ],
                            },
                            {
                                label: 'parent 1-1',
                                value: 'parent 1-1',
                            },
                        ],
                    },
                    {
                        label: 'parent 1-1-1',
                        value: 'parent 1-1-1',
                    },
                ],
            }],
        multiple: treeMultiple,
        showLeafIcon: treeShowLeafIcon,
        treeLine: treeTreeLine,
        checkable: treeCheckable,
    },
    {
        label: '数字输入框',
        type: 'inputNumber',
        key: 'inputNumber',
        value: 2,
        style: {
            width: '100%'
        },
        controls: inputNumberControls,
        keyboard: inputNumberKeyboard,
        min: inputNumberMin,
        max: inputNumberMax,
    },
    {
        type: 'select',
        key: 'select',
        label: '选择器',
        value: '',
        options: [
            {
                label: '北京',
                value: '北京'
            },
            {
                label: '上海',
                value: '上海'
            },
            {
                label: '广州',
                value: '广州'
            },
            {
                label: '深圳',
                value: '深圳'
            },
        ],
        rules: [{ required: true }],
        mode: selectorMode,
        labelInValue: selectorLabelInValue

    },
    {
        type: 'cascader',
        key: 'cascader',
        label: '级联选择器',
        value: [],
        trigger: cascaderTrigger,
        multiple: cascaderMultiple,
        changeOnSelect: cascaderChangeOnSelect,
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [
                {
                    value: 'hangzhou',
                    label: '杭州',
                    children: [
                        {
                            value: 'xihu',
                            label: '西湖',
                        },
                        {
                            value: 'xihu2',
                            label: '西湖2',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: '江苏',
            disabled: true,
            children: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: '中华门',
                        },
                    ],
                },
            ],
        }],
    },
    {
        label: '日期选择器',
        key: 'datePicker',
        type: 'datePicker',
        value: datePickerValue,
        mode: datePickerMode,
        picker: datePickerPicker,
        showTime: datePickerShowTime,
        style: {
            width: '100%'
        }
    },
    {
        label: '单选按钮',
        key: 'radio',
        type: 'radio',
        value: '1',
        options: [
            {
                label: '单选1',
                value: '1'
            },
            {
                label: '单选2',
                value: '2'
            }
        ],
    },
    {
        label: '复选框',
        key: 'checkbox',
        value: ['1', '2'],
        type: 'checkbox',
        options: [
            {
                label: '复选框1',
                value: '1'
            },
            {
                label: '复选框2',
                value: '2'
            },
            {
                label: '复选框3',
                value: '3'
            }
        ]
    },
    {
        label: '开关',
        type: 'switch',
        value: true,
        key: 'switch',
    },
    {
        label: '评分',
        type: 'rate',
        value: 2,
        key: 'rate',
        allowHalf: rateAllowHalf,
        disabled: rateDisabled,
        count: rateCount,
        character:rateCharacter,
        clearable: rateClearable,
    },
    {
        type: 'slider',
        label: '滑块',
        key: 'slider',
        value: sliderValue,
        min: sliderMin,
        max: sliderMax,
        range: sliderRange,
        reverse: sliderReverse,
        tooltipOpen:sliderTooltipOpen,
        vertical: sliderVertical,
        step: sliderStep
    },
    {
        key: 'textarea',
        label: '文本域',
        type: 'textarea',
        value: '',
        rows: textareaRows,
        rules: [
            {
                type: 'string' as const,
                required: true,
                message: '文本域不能为空'
            }
        ],
        showCount: textareaShowCount,
        maxLength: textareaMaxLength
    },
    {
        label: '穿梭框',
        key: 'transfer',
        type: 'transfer',
        targetKeys: [],
        selectedKeys: [],
        titles: transferTitles,
        oneWay: transferOneWay,
        showSearch: transferShowSearch,
        pagination: transferPagination,
        showSelectAll: transferShowSelectAll,

        options: [
            {
                key: '1',
                title: '穿梭框1'
            },
            {
                key: '2',
                title: '穿梭框2'
            },
            {
                key: '3',
                title: '穿梭框3'
            },
            {
                key: '4',
                title: '穿梭框4'
            },
            {
                key: '5',
                title: '穿梭框5'
            },
        ]
    },
    {
        label: '上传',
        uploadName: 'file',
        type: 'upload',
        key: 'upload',
        listType: uploadListType,
        mode:uploadMode,
        multiple: uploadMultiple,
        method: uploadMethod,
        showUploadList: uploadShowUploadList,
        // manualUpload: uploadManualUpload,
        accept: uploadAccept,
        value: [
            {
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'yyy.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
        ],
        action: '',
        headers: {}
    }
])



</script>

<style lang="scss" scoped>
.drawerItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}
.icon-shezhi {
    cursor: pointer;
    font-size: 20px;
    transition: all .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: var(--wang-bgcolor);
    border-radius: 50%;
    &:hover {
        transform: rotate(90deg) scale(1.1);
        color: var(--wang-menu-activetext);
        background-color: var(--wang-menu-active);
    }
}
.css-dev-only-do-not-override-i3mqvl.ant-drawer .ant-drawer-title {
    color: var(--wang-text-color);
}


.css-dev-only-do-not-override-i3mqvl.ant-divider-horizontal.ant-divider-with-text {
    color: var(--wang-text-color);
    border-block-start: 0 var(--wangwang-border)
}

.ant-drawer {
.ant-select,
[class^=ant-input],
.ant-input-number {
  width: 100px!important;
}
.transfer [class^=ant-input] {
    width: 150px!important;
}
}

</style>
