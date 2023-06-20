import avavr from '/@/assets/images/OIP-C.jpg'
/**
 * 虚拟数据
 * 个人数据
 */
export const MockUser: any = {
    avavr
}

// role虚拟数据
/**
 * 角色管理
 */
export const rolelist: Array<RoleList> = [{
    id: 1001,
    roleName: '超级管理员',
    roleIdentification: 'admin',
    sort: 1,
    roleState: '启用',
    roleDescription: '测试角色1',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1002,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 2,
    roleState: '启用',
    roleDescription: '测试角色2',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1003,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 3,
    roleState: '启用',
    roleDescription: '测试角色3',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1004,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 3,
    roleState: '启用',
    roleDescription: '测试角色4',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1005,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 3,
    roleState: '启用',
    roleDescription: '测试角色5',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1006,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 3,
    roleState: '启用',
    roleDescription: '测试角色6',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1007,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 3,
    roleState: '启用',
    roleDescription: '测试角色7',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1008,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 3,
    roleState: '启用',
    roleDescription: '测试角色8',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1009,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 3,
    roleState: '启用',
    roleDescription: '测试角色9',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}, {
    id: 1010,
    roleName: '普通用户',
    roleIdentification: 'common',
    sort: 3,
    roleState: '启用',
    roleDescription: '测试角色10',
    roles: [],
    createTime: '2023/5/20 11:12:13',
}]
// userControl虚拟数据
export const userConList: Array<UserControlList> = [{
    id: 1001,
    accountName: 'admin',
    userNickname: '我是管理员',
    associatedRole: 'admin',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '不可删除',
    createTime: '2023/5/20 12:12:12',
}, {
    id: 1003,
    accountName: 'common',
    userNickname: '我是普通用户',
    associatedRole: 'common',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '测试用户',
    createTime: '2023/5/20 12:12:12',
}, {
    id: 1004,
    accountName: 'common',
    userNickname: '我是普通用户',
    associatedRole: 'common',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '测试用户',
    createTime: '2023/5/20 12:12:12',
}, {
    id: 1005,
    accountName: 'common',
    userNickname: '我是普通用户',
    associatedRole: 'common',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '测试用户',
    createTime: '2023/5/20 12:12:12',
}, {
    id: 1006,
    accountName: 'common',
    userNickname: '我是普通用户',
    associatedRole: 'common',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '测试用户',
    createTime: '2023/5/20 12:12:12',
}, {
    id: 1007,
    accountName: 'common',
    userNickname: '我是普通用户',
    associatedRole: 'common',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '测试用户',
    createTime: '2023/5/20 12:12:12',
}, {
    id: 1008,
    accountName: 'common',
    userNickname: '我是普通用户',
    associatedRole: 'common',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '测试用户',
    createTime: '2023/5/20 12:12:12',
}, {
    id: 1009,
    accountName: 'common',
    userNickname: '我是普通用户',
    associatedRole: 'common',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '测试用户',
    createTime: '2023/5/20 12:12:12',
}, {
    id: 1010,
    accountName: 'common',
    userNickname: '我是普通用户',
    associatedRole: 'common',
    department: 'vueName',
    phone: '1232',
    email: 'vue@vue.com',
    sex: '男',
    password: '123',
    userStatus: '启用',
    userDescription: '测试用户',
    createTime: '2023/5/20 12:12:12',
}]
// 部门管理虚拟数据
export const depManagementsList: Array<DepManagementList> = [{
    departmentName: 'vueNextAdmin',
    sort: 0,
    departmentStatus: '启用',
    departmentDescription: '顶级部门',
    createTime: new Date().toLocaleString(),
    children: [{
        departmentName: 'IT外包服务',
        sort: 1,
        departmentStatus: '启用',
        departmentDescription: '总部',
        createTime: new Date().toLocaleString(),
    }, {
        departmentName: '资本控股',
        sort: 2,
        departmentStatus: '启用',
        departmentDescription: '分部',
        createTime: new Date().toLocaleString(),
    }]
}, {
    departmentName: 'test部门',
    sort: 0,
    departmentStatus: '启用',
    departmentDescription: '部门',
    createTime: new Date().toLocaleString(),
    children: [{
        departmentName: '部门1',
        sort: 1,
        departmentStatus: '启用',
        departmentDescription: '总部',
        createTime: new Date().toLocaleString(),
    }, {
        departmentName: '资本控股',
        sort: 2,
        departmentStatus: '部门2',
        departmentDescription: '分部',
        createTime: new Date().toLocaleString(),
    }]
}]
// 字典管理章台数据
export const dicManaList: Array<DicManagementList> = [{
    DicName: '角色管理',
    column: 'SYS_ROLE',
    DicStatus: '启用',
    DicDescription: '这是角色字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}, {
    DicName: '用户性别',
    column: 'SYS_USERINFO',
    DicStatus: '启用',
    DicDescription: '这是用户性别字典',
    createTime: new Date().toLocaleString(),
    list: []
}]


