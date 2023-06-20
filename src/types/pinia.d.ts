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