## 一 路由的用法

> 添加动态路由在router文件夹下面的route.ts，下面dynamic_routing

```js
 {
                path: '/sysmen', // 路由
                name: 'sysmen',
                component: () => import('/@/views/sysmen/index.vue'),
                redirect: '/sysmen/menus',
                meta: {
                    title: '系统设置', //每个菜单的名称
                    icon: 'iconfont icon-xitong', //菜单的图标 在
                    roles: ['admin'],
                    type: '菜单',
                    sort: 1
                },
                children: [
                    {
                        path: '/sysmen/menus', //子路由必须带上父路由
                        name: 'menus',
                        component: () => import('/@/views/sysmen/menus/index.vue'),
                        meta: {
                            title: '菜单管理',
                            roles: ['admin'],
                            icon: 'iconfont icon-caidan',
                            type: '菜单', //类型
                            sort: 1 //排序
                        },
                    },
                    ]
 }
//meta 的还有一些
/**
 * 建议：路由 path 路径与文件夹名称相同，找文件可浏览器地址找，方便定位文件位置
   如果不全就按照上面的对应 
 *
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink: 链接地址不为空 2、isIframe:false`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，开启条件，`1、isIframe:true 2、isLink：链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */
```

- 路由添加完，需要退出登录重新登录

## 二 格式的写法

1. 能复用的组件或者方法尽量复用，每个组件的行数建议不要超过五百行，特殊的除外
2. 控制台中不能出现警告和报错，不能以项目可以跑就不管
3. 代码采用简写方式，命名采用驼峰命名方法
4. 提交代码，应该先更新在开发，然后提交代码或者同步
5. 如果有更新包的，得及时提醒其他开发者，更新了包

## 三 类型定义

> 因为采用的是ts写法，所有写代码的时候，在types文件夹下面进行委托和类型定义
>
> - 错误写法
>
> ```typescript
> const text: any = 'Hello world'    
> ```
>
> - 正确写法
>
> ```typescript
> const text: string = 'Hello world'    
> ```
>
> 

> 对象类型定义，在前端js种用的最多便是对象，所以我们对于对象定义应当进行类型定义，列：
>
> ```typescript
> interface WangOBject {
>     names: string,
>     age: number,
>     eat: Function
> }
> 
> const OBj: WangOBject = {
>     names: '',
>     age: 18,
>     eat: function () {
> 
>     }
> }  
> ```



## 四 数据拿取

- 因为是纯前端项目，需要在mock文件下面进行定义静态数据，方便模拟异步获取数据
- 定义变量的时候，有需要定义类型接口在types文件夹下面定义
- mock 定义类型在types中的Views.d.ts

## 五 目录展示

![image-20230703103546714](C:\Users\莫辰\AppData\Roaming\Typora\typora-user-images\image-20230703103546714.png)

```json

```

