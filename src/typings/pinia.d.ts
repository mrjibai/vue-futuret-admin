// 外部文件
declare module 'nprogress'

// 内部声明,多次声明防止ts验证出错
declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}


// 路由列表
declare interface RoutesListState<T = any> {
    routesList: T[];
    isColumnsMenuHover: Boolean;
    isColumnsNavHover: Boolean;
}

/**
 * 路由缓存
 */
declare type RouterSession<T = any> = {
    RouterSessionlist: T[]
}

// 路由的to
declare interface fuudarta {
    fullPath: String;
    hash?: string | null;
    href?: String | undefined;
    Matched?: Array<any> | undefined;
    meta: null | Object;
    name?: String;
    params: Object | undefined;
    path: string;
    query: Object;
}

/**
 * 主题配置
 */
declare interface Theme {
    // 顶栏字体颜色
    TopfontColor: string;
    // 顶栏背景颜色
    TopbgColor: string;
    // 菜单背景颜色
    menubgColor: string;
    // 菜单字体颜色
    menufontColor: string;
    // 菜单选中颜色
    menuSelectedColor: string;
    // 菜单选中字体颜色
    menuselectfontcolor: string;
    // tagView设置
    tagViewValue: string;
    //  分栏设置
    collapsed: boolean | any;
    // 国际化
    internationalization: string | any;
}