<template>
  <div class="role">
    <vxe-toolbar>
      <template #buttons>
        <div class="sercarINput">
          <a-input v-model="SerInput.filterName" type="search" placeholder="请输入角色名称，搜索" @keyup="searchEvent2"></a-input>
          <a-button type="primary" @click="searchEvent2">查询</a-button>
          <a-button @click="AddDialogVisible">新增角色</a-button>
        </div>
      </template>
    </vxe-toolbar>
    <a-spin :spinning="loadings">
      <div>
        <vxe-table border='none' :row-config="{ isHover: true }" :data="state.RoleRouterList">
          <vxe-column type="seq" title="序号" width="60">
          </vxe-column>
          <vxe-column field="roleName" title="角色名称"></vxe-column>
          <vxe-column field="roleIdentification" title="角色标识"></vxe-column>
          <vxe-column field="sort" title="排序"></vxe-column>
          <vxe-column field="roleState" title="角色状态">
            <template #default="{ row }">
              <a-tag :title="row.roleState" color="green">{{ row.roleState }}</a-tag>
            </template>
          </vxe-column>
          <vxe-column field="roleDescription" title="角色描述"></vxe-column>
          <vxe-column field="createTime" title="创建时间">
            <template #default="{ row }">
              {{ row.createTime }}
            </template>
          </vxe-column>
          <vxe-column field="" title="操作" width="220">
            <template #default="{ row }">
              <a-button type="link" @click="RolesEdit(row)">新增</a-button>
              <a-button type="link" @click="RolesEdit(row)">修改</a-button>
              <a-popconfirm title="你确认要删除这条数据吗 ?" @confirm="delRouteRoles(row)" ok-text="确认" cancel-text="取消">
                <a-button type="link">删除</a-button>
              </a-popconfirm>
            </template>
          </vxe-column>
        </vxe-table>
      </div>
    </a-spin>
    <a-pagination :show-total="(total: string) => `总数 ${total} 条`" @showSizeChange="handleSizeChange"
      @change="handleCurrentChange" v-model:current="page.currentPage" :page-sizes="[10, 20, 30, 40]"
      v-model:pageSize="page.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="page.total"
      show-size-changer>
    </a-pagination>
  </div>
  <!-- 弹框 -->
  <a-modal v-model:open="dialogVisible" :title="state.Tips" :afterClose="handleClose">
    <a-form>
      <a-row :gutter="20">
        <a-col :span="12" :offset="0">
          <a-form-item label="角色名称">
            <a-input v-model:value="RolesObj.roleName"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12" :offset="0">
          <a-form-item label="角色标识">
            <a-input v-model:value="RolesObj.roleIdentification"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12" :offset="0">
          <a-form-item label="排序">
            <a-input-number v-model:value="RolesObj.sort" :min="1" :max="10" />
          </a-form-item>
        </a-col>
        <a-col :span="12" :offset="0">
          <a-form-item label="角色状态">
            <a-tooltip :title="'Switch value: ' + RolesObj.roleState" placement="top">
              <a-switch v-model:checked="RolesObj.roleState" active-color="#13ce66" inactive-color="#ff4949"
                checked-children="启用" un-checked-children="关闭"> </a-switch>
            </a-tooltip>
          </a-form-item>
        </a-col>
        <a-col :span="24" :offset="0">
          <a-form-item label="角色描述">
            <a-input type="textarea" :rows="2" placeholder="请输入内容" v-model="RolesObj.roleDescription">
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24" :offset="0">
          <a-form-item label="角色描述">
            <a-checkbox-group v-model="RolesObj.roles" :options="options">
              <a-checkbox label="系统管理" value="admin"></a-checkbox>
              <a-checkbox label="权限管理" value="common"></a-checkbox>
            </a-checkbox-group>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <template #footer>
      <span class="dialog-footer">
        <a-button @click="dialogVisible = false">取消</a-button>
        <a-button type="primary" @click="onSubmit">
          保存
        </a-button>
      </span>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { rolelist } from '/@/mock/index'
import { RouterStore } from '/@/stores/RouterSrore'
const useRoultSess = RouterStore()
// 定义搜索
const SerInput = reactive<inputMenus>({
  filterName: ''
})

// 搜索
const searchEvent2 = () => {
  loadings.value = true
  setTimeout(() => {
    getRolesRouterList()
  }, 1000)
}

const options = [
  {
    label: '系统管理',
    value: 'admin'
  }, {
    label: '权限管理',
    value: 'common'
  }]

const dialogVisible = ref(false)
// 菜单新增和编辑的数据
const RolesObj = reactive<RoleList>({
  id: 0, //id
  roleName: '', //角色名称
  roleIdentification: '', //角色标识
  sort: 1, //排序
  roleState: '', //角色状态
  roleDescription: '', //角色描述
  roles: [], //权限
  createTime: (new Date()).toDateString() //创建时间
})

// 编辑赋值
const RolesEdit = (row: RoleList): void => {
  RolesObj.id = row.id
  RolesObj.roleName = (<string>row.roleName).toString()
  RolesObj.roleIdentification = row.roleIdentification
  RolesObj.sort = parseInt(row.sort.toString())
  RolesObj.roleState = row.roleState
  RolesObj.roleDescription = row.roleDescription
  RolesObj.roles = Array(row.roles)
  RolesObj.createTime = (<string>row.createTime)
  dialogVisible.value = true
  state.Tips = '修改角色'
}
// 状态数据
const state = reactive<any>({
  RoleRouterList: [], //数据
  Tips: '添加角色'
})
// 加载动画
const loadings = ref(false)
const getRolesRouterList = () => {
  loadings.value = false

  state.RoleRouterList = rolelist
}
getRolesRouterList()
// 关闭弹框的方法
const handleClose = (): void => {
  dialogVisible.value = false
  for (const key in (<any>RolesObj)) {
    (<any>RolesObj)[key] = ''
  }
  RolesObj.roles = []
  RolesObj.sort = 1
}
// 添加/修改的方法
const onSubmit = (): void => {
  loadings.value = true
  dialogVisible.value = false
  // 重新调用
  setTimeout(() => {
    getRolesRouterList()
  }, 1000)
}
//删除
const delRouteRoles = (row: RoleList): void => {
  loadings.value = true
  // 重新调用
  setTimeout(() => {
    getRolesRouterList()
  }, 1000)
}
// 分页
const page = reactive({
  currentPage: 1,
  total: rolelist.length,
  pageSize: 10
})
// 切换条数
const handleSizeChange = (val: number) => {
  page.pageSize = val
  rolelist.slice((page.currentPage - 1) * page.pageSize, page.pageSize)
  getRolesRouterList()
}
// 切换当前页
const handleCurrentChange = (val: number) => {
  page.currentPage = val
  rolelist.slice((page.currentPage - 1) * page.pageSize, page.pageSize)
  getRolesRouterList()
}
const AddDialogVisible = () => {
  dialogVisible.value = true
  state.Tips = '新增部门'
}
</script>

<style scoped lang="scss">
.role {
  border: 0.7px solid var(--wangwang-border);
  width: 100%;
  padding: 5px;

  &:hover {
    box-shadow: 0 0 5px var(--wang-color-primary-lighter);
  }

  .sercarINput {
    display: flex;
  }

}
</style>