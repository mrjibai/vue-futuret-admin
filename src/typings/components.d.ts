declare type options = {
    column: Array<{
        prop: String,
        title: String,
        style?: string,
        width?: string
    }>
}
declare type rowCofigs = {
    highlight?: boolean = false,
    isChecked?: boolean = false
}
declare interface Tables {
    data: Array<any>,
    options: options,
    rowCofig?: rowCofigs,
    ids?: String,
    height?: String,
    maxHeight?: String,
}

declare type Layout = 'horizontal' | 'vertical' | 'inline'
declare type LabelAlign = 'left' | 'right'
declare type ColType = { span?: number, offset?: number }
declare type IconPosition = 'prefix' | 'suffix'
declare type Size = 'large' | 'middle' | 'small' | 'default'
declare type Status = 'error' | 'warning' | ''
declare type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
declare type SelectorMode = 'multiple' | 'tags' | 'combobox' 
declare type DatePickerMode = 'time' | 'date' | 'month' | 'year' | 'decade'
declare type DatePicker = 'date' | 'week' | 'month' | 'quarter' | 'year'
declare type uploadMode = 'button' | 'avatar' | 'drag'
declare type SelectMode = SelectorMode | DatePickerMode | uploadMode | any
declare type ButtonType = 'primary' | 'danger' | 'default'
declare type ValueType = string | number | boolean | any[] | any

declare type OptionItem = {
    value:ValueType,
    label?: string,
    disabled?: boolean | any
    key?:string | number,
    title?: string,
    children?:any[]
}

declare interface DataSource extends OptionItem  {
    key: string,
    title: string,
    description?: string,
    disabled?: boolean | any
}



declare type FormConfig = {
    name?: string,
    layout?: Layout,
    labelCol?: ColType,
    wrapperCol?: ColType,
    labelAlign?: LabelAlign = 'right',
    disabled?: boolean | any,
    reset?:boolean,
    submitText?:string,
    clearable?: boolean,
    status?:Status,
    size?:Size,
    resetText?:string,
    placement?:Placement = 'bottomLeft',
    submitType?:ButtonType,
    resetType?:ButtonType,
    finish?: Function,
    finishFailed?: Function,
    validate?: Function,
    bordered?:boolean,
    showCount?:boolean | any,
    loading?:boolean
}


declare type FormItem = {
    // common
    label?: string,
    key?: string,
    type?: string,
    value?:ValueType,
    targetKeys?:any[],
    selectedKeys?:any[],
    // styles
    style?: any,
    dropdownStyle?:any,
    labelAlign?: LabelAlign = 'right',
    labelCol?: ColType,
    prefixIcon?:string,
    suffixIcon?:string,
    size?: Size,
    // input:search 
    search?: Function,
    enterButton?:string,
    // config
    placeholder?: string = `请${this.options.length > 0 ? '选择' : '输入'}${this.name}`,
    mode?:SelectMode ,
    required?: boolean,
    clearable?: boolean | any,
    maxLength?:number | any,
    status?:Status | any,
    rows?:number | any,
    loading?:boolean | any,
    autoSize?:boolean,
    showCount?:boolean | any,
    disabled?:boolean | any,
    autoFocus?:boolean,
    allowHalf?:boolean | any,
    manualUpload?:boolean | any,
    range?:boolean | any,
    min?:number | any,
    max?:number | any,
    step?:number | any,
    trigger?:string | any,
    picker?:string | any,
    character?:string | any,
    count?:number | any,
    showTime?:boolean | any,
    keyboard?:boolean | any,
    multiple?:boolean | any,
    showSearch?:boolean | any,
    expandAll?:boolean | any,
    checkable?:boolean | any,
    showSelectAll?:boolean | any,
    treeLine?:boolean | any,
    controls?:boolean | any,
    bordered?:boolean | any,
    labeInValue?:boolean | any,
    vertical?:boolean | any,
    tooltipOpen?:boolean | any,
    changeOnSelect?:boolean | any,
    reverse?:boolean | any,
    showLeafIcon?:boolean | any,
    labelInValue?:boolean | any,
    placement?:Placement = 'bottomLeft' | any,
    oneWay?:boolean | any,
    pagination?:boolean | any,
    titles?:string[] | any,
    // upload:file
    headers?:any,
    showUploadList?:boolean | any,
    action?:string,
    uploadName?:string,
    accept?:string | any,
    method?:string | any,
    listType?:string | any,
    // options:select:checkboxgroup
    options?: Array<OptionItem> | DataSource[],
    optionType?:'default' | 'button' = 'button',
    // rules
    rules?: Array<any>,
}