import type { CountUpOptions } from 'countup.js'
// 菜单页面的搜索
declare type inputMenus = {
    filterName: String | null
}
// 角色页面的搜索
declare type inputRoles = {
    filterName: String | null
}
// 用户页面的搜索
declare type inputUser = {
    filterName: String | null
}
// 部门管理页面的搜索
declare type inputDepManagement = {
    filterName: String | null
}
// 字典管理页面的搜索
declare type inputDicManagement = {
    filterName: String | null
}
// 角色状态数据
declare type RoleList = {
    id: number,
    roleName: string | undefined | null,
    roleIdentification: string | undefined | null,
    sort: number,
    roleState: string,
    roleDescription: string | undefined | null,
    roles: Array,
    createTime: string | undefined | null,
}
// 用户管理状态数据
declare type UserControlList = {
    id: number,
    accountName: string | undefined | null,
    userNickname: string | undefined | null,
    associatedRole: string | undefined | null,
    department: string | undefined | null,
    phone: string | undefined | null,
    email: string | undefined | null,
    sex: string | undefined | null,
    password: string | undefined | null,
    userStatus: string | undefined | null,
    userDescription: string | undefined | null,
    createTime: string | undefined | null,

}
// 部门管理状态数据
type DepManagementList = {
    departmentName: string | undefined | null,
    sort: number,
    departmentStatus: string | undefined | null,
    departmentDescription: string | undefined | null,
    createTime: string | undefined | null | Date,
    children?: Array<DepManagementList>
}

// 字典管理章台数据
type DicManagementList = {
    DicName: string | undefined | null,
    column: string | undefined | null,
    DicStatus: string | undefined | null,
    DicDescription: string | undefined | null,
    createTime: string | undefined | null | Date,
    list: ListType[];
}
// 字典编辑子集
type ListType = {
    id: number;
    label: string;
    value: string;
};
type GeoJSONSourceInput = any
type MapInput = any
// 地图形式的
type MapJSon = MapInput | GeoJSONSourceInput



// 主题布局切换
declare interface layoutOption<T> {
    label: string;
    value: T;
}
// 数字滚动类型接口
declare type CountUpOptions = CountUpOptions

