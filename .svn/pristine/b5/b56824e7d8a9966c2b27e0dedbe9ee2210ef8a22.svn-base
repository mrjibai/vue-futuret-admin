<template>
  <a-form 
    v-if="formData.length"
    ref="formRef"
    :name="formConfig.name"
    :model="formModel" 
    :label-col="formConfig.labelCol" 
    :layout="formConfig.layout"
    :disabled="formConfig.disabled"
    :labelAlign="formConfig.labelAlign"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
        v-for="(item,index) in formData"
        :labelAlign="item.labelAlign"
        :key="index"
        :label="item.label"
        :rules="item.rules"
        :name="item.key"
    >
      <!-- form:input:default -->
      <a-input v-if="item.type === 'input'" :showCount="item.showCount ?? formConfig.showCount" :bordered="item.bordered ?? formConfig.bordered" :status="item.status ?? formConfig.status" v-model:value="item.value" :style="item.style" :size="item.size ?? formConfig.size" :placeholder="item.placeholder" :allow-clear="item.clearable ?? formConfig.clearable" :disabled="item.disabled ?? formConfig.disabled">
        <template #prefix v-if="item.prefixIcon">
          <SvgIcon  :name="item.prefixIcon" />
        </template>
        <template #suffix v-if="item.suffixIcon">
          <SvgIcon :name="item.suffixIcon" />
        </template>
      </a-input>
      <!-- form:input:search -->
      <a-input-search v-if="item.type === 'search'" :showCount="item.showCount ?? formConfig.showCount" :bordered="item.bordered ?? formConfig.bordered" :status="item.status ?? formConfig.status" @search="item.search" :size="item.size ?? formConfig.size" v-model:value="item.value" :enter-button="item.enterButton" :style="item.style" :loading="item.loading" :allow-clear="item.clearable ?? formConfig.clearable" :disabled="item.disabled ?? formConfig.disabled">
        <template #enterButton v-if="!!slots?.enterButton">
          <slot name="enterButton"></slot>
        </template>
      </a-input-search>
      <!-- form:input:password -->
      <a-input-password v-if="item.type === 'password'" autocomplete :showCount="item.showCount ?? formConfig.showCount" :bordered="item.bordered ?? formConfig.bordered" :status="item.status ?? formConfig.status" :size="item.size ?? formConfig.size" v-model:value="item.value" :style="item.style"  :placeholder="item.placeholder" :allow-clear="item.clearable ?? formConfig.clearable" :disabled="item.disabled ?? formConfig.disabled">
        <template #prefix v-if="item.prefixIcon">
          <SvgIcon :name="item.prefixIcon" />
        </template>
        <template #suffix v-if="item.suffixIcon">
          <SvgIcon :name="item.suffixIcon" />
        </template>
      </a-input-password>
      
      <!-- form:input:textarea -->
      <a-textarea v-if="item.type === 'textarea'" :maxlength="item.maxLength" :showCount="item.showCount ?? formConfig.showCount" :bordered="item.bordered ?? formConfig.bordered" :status="item.status ?? formConfig.status" :size="item.size ?? formConfig.size" v-model:value="item.value" :style="item.style" :placeholder="item.placeholder" :allow-clear="item.clearable ?? formConfig.clearable" :rows="item.rows" :disabled="item.disabled ?? formConfig.disabled"></a-textarea>
      <!-- form:inputNumber -->
      <a-input-number v-if="item.type === 'inputNumber'" :bordered="item.bordered ?? formConfig.bordered" :controls="item.controls" :status="item.status ?? formConfig.status" :size="item.size ==='middle' ? 'default' : item.size ?? formConfig.size === 'middle' ? 'default' : formConfig.size" :style="item.style" :disabled="item.disabled ?? formConfig.disabled" :prefix="item.prefixIcon"  :autofocus="item.autoFocus" :keyboard="item.keyboard ?? true" :step="item.step" v-model:value="item.value" :min="item.min ?? 1" :max="item.max ?? 100" />

      <!-- form:checkbox -->
      <a-checkbox v-if="item.type === 'checkbox' && !item.options?.length" v-model:checked="item.value" :autofocus="item.autoFocus" :disabled="item.disabled ?? formConfig.disabled">{{ item.label }}</a-checkbox>
      <!-- form:checkbox:group -->
      <a-checkbox-group v-if="item.type === 'checkbox' && item.options?.length" v-model:value="item.value" :name="item.key" :options="item.options"  :autofocus="item.autoFocus" :disabled="item.disabled ?? formConfig.disabled"></a-checkbox-group>

      <!-- form:radio -->
      <a-radio v-if="item.type === 'radio' && !item.options?.length" v-model:value="item.value" :disabled="item.disabled ?? formConfig.disabled" >{{ item.label }}</a-radio>
      <!-- form:radio:group -->
      <a-radio-group  :size="item.size ==='middle' ? 'default' : item.size ?? formConfig.size === 'middle' ? 'default' : formConfig.size" v-if="item.type === 'radio' && item.options?.length" :options="item.options" :option-type="item.optionType"  v-model:value="item.value"  :disabled="item.disabled ?? formConfig.disabled">
      </a-radio-group>

      <!-- form:select -->
      <a-select v-if="item.type === 'select'" :placement="item.placement ?? formConfig.placement" :bordered="item.bordered ?? formConfig.bordered" :label-in-value="item.labeInValue" :status="item.status ?? formConfig.status" :size="item.size ?? formConfig.size" :mode="item.mode" v-model:value="item.value" :style="item.style" :placeholder="item.placeholder" :allow-clear="item.clearable ?? formConfig.clearable">
        <a-select-option v-for="(optionItem,index) in item.options" :key="optionItem.key ? optionItem.key : index" :disabled="optionItem.disabled" :value="optionItem.value">{{ optionItem?.label ? optionItem.label : optionItem.value }}</a-select-option>
      </a-select>

      <!-- form:input:treeSelect -->
      <a-tree-select v-if="item.type === 'treeSelect'" :bordered="item.bordered ?? formConfig.bordered" :tree-line="item.treeLine && { showLeafIcon: item.showLeafIcon }" :size="item.size ==='middle' ? 'default' : item.size ?? formConfig.size === 'middle' ? 'default' : formConfig.size" :placement="item.placement ?? formConfig.placement" :status="item.status ?? formConfig.status" :tree-checkable="item.checkable" :disabled="item.disabled ?? formConfig.disabled" :placeholder="item.placeholder" :tree-default-expand-all="item.expandAll ?? true" :allow-clear="item.clearable ?? formConfig.clearable" :tree-data="item.options" v-model:value="item.value" :show-search="item.showSearch" :multiple="item.multiple" :style="item.style" :dropdown-style="item.dropdownStyle ?? { maxHeight: '400px', overflow: 'auto' }"></a-tree-select>

      <!-- form:cascader -->
      <a-cascader v-if="item.type === 'cascader'" :multiple="item.multiple" :change-on-select="item.changeOnSelect" :bordered="item.bordered ?? formConfig.bordered" :style="item.style" :allow-clear="item.clearable ?? formConfig.clearable" :disabled="item.disabled ?? formConfig.disabled" :autofocus="item.autoFocus" :placement="item.placement ?? formConfig.placement" :expand-trigger="item.trigger ?? 'hover'" :size="item.size ==='middle' ? 'default' : item.size ?? formConfig.size === 'middle' ? 'default' : formConfig.size" :status="item.status ?? formConfig.status" :mode="item.mode" v-model:value="item.value" :options="item.options" :placeholder="item.placeholder" />

      <!-- form:datePicker -->
      <a-date-picker v-if="item.type === 'datePicker'" :bordered="item.bordered ?? formConfig.bordered" :allow-clear="item.clearable ?? formConfig.clearable"  :disabled="item.disabled ?? formConfig.disabled" :show-time="item.showTime" :placement="item.placement ?? formConfig.placement" :size="item.size ==='middle' ? 'default' : item.size ?? formConfig.size === 'middle' ? 'default' : formConfig.size" :status="item.status ?? formConfig.status"  :placeholder="item.placeholder" :style="item.style"  v-model:value="item.value" :picker="item.picker"/>

      <!-- form:switch -->
      <a-switch v-if="item.type === 'switch'" v-model:checked="item.value" :disabled="item.disabled ?? formConfig.disabled" :size="(item.size === 'middle' || item.size==='large') ? 'default' : item.size ?? (formConfig.size === 'middle' || formConfig.size === 'large') ? 'default' : formConfig.size" :loading="item.loading"></a-switch>

      <!-- form:rate -->
      <a-rate v-if="item.type === 'rate'" :count="item.count" :character="item.character"  v-model:value="item.value" :allow-clear="item.clearable ?? formConfig.clearable" :allow-half="item.allowHalf" :disabled="item.disabled ?? formConfig.disabled"/>

      <!-- form:slider -->
      <div v-if="item.type === 'slider'" :style="{height: item.vertical ? '300px' : ''}"> 
        <a-slider :vertical="item.vertical" :reverse="item.reverse" :tooltip-open="item.tooltipOpen" :min="item.min ?? 0" :max="item.max ?? 100" :step="item.step" v-model:value="item.value" :range="item.range" :disabled="item.disabled ?? formConfig.disabled" />
      </div>

      <!-- form:transfer -->
      <a-transfer v-if="item.type === 'transfer'"  :render="(item2:DataSource) => item2.title" :showSelectAll="item.showSelectAll" :titles="item.titles" :status="item.status ?? formConfig.status" :pagination="item.pagination" :show-search="item.showSearch" :oneWay="item.oneWay" :disabled="item.disabled ?? formConfig.disabled" :data-source="item.options" v-model:target-keys="item.targetKeys" v-model:selected-keys="item.selectedKeys"></a-transfer>

      <!-- form:upload -->
      <a-upload @preview="handlePreview" :before-upload="beforeUpload" :class="[item.mode==='avatar' && item.listType !== 'picture-card' ? 'ant-upload-picture-card-wrapper' : '']" v-if="item.type ==='upload' && item.mode !== 'drag'" :accept="item.accept" :name="item.uploadName" :maxCount="item.max" :method="item.method" :disabled="item.disabled ?? formConfig.disabled"  :list-type="item.listType" v-model:file-list="item.value" :show-upload-list="item.showUploadList" :multiple="item.multiple" :action="item.action" :headers="item.headers">
        <template v-if="item.mode === 'button'">
          <a-button>
            <upload-outlined></upload-outlined>
            点击上传 <span v-if="item.maxLength">(限制上传：{{ item.maxLength }})</span>
          </a-button>
        </template>
        <template v-if="item.mode === 'avatar'">
          <div>
            <loading-outlined v-if="item.loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div class="ant-upload-text">Upload</div>
          </div>
        </template>
        <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </a-upload>

      <a-upload-dragger :before-upload="beforeUpload" @preview="handlePreview" v-if="item.type ==='upload' && item.mode === 'drag'" :accept="item.accept" :name="item.uploadName" :maxCount="item.max" :method="item.method" :disabled="item.disabled ?? formConfig.disabled"  :list-type="item.listType" v-model:file-list="item.value" :show-upload-list="item.showUploadList" :multiple="item.multiple" :action="item.action" :headers="item.headers">
        <template v-if="item.mode === 'drag'">
          <div>
            <p class="ant-upload-drag-icon">
              <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">单击或拖动文件到此区域进行上传</p>
            <p class="ant-upload-hint">支持单个或批量上传。严禁上传公司数据或其他带文件</p>
          </div>
        </template>
        <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </a-upload-dragger>

    </a-form-item>
    <a-form-item :wrapper-col="formConfig.wrapperCol">
      <!-- form:button:submit -->
      <a-button :size="formConfig.size" :loading="uploadTarget.loading || formConfig.loading" :type="formConfig.submitType ?? 'primary'" html-type="submit">{{ formConfig.submitText ? formConfig.submitText : '提交' }}</a-button>
      <!-- form:button:reset -->
      <a-button :size="formConfig.size" v-if="formConfig.reset"  :type="formConfig.submitType">{{ formConfig.resetText ? formConfig.resetText : '重置' }}</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { ref, reactive ,Ref,computed,useSlots, watch} from "vue"
import { InboxOutlined,PlusOutlined, LoadingOutlined,UploadOutlined  } from '@ant-design/icons-vue';
import type { UploadProps } from 'ant-design-vue';
import { message } from 'ant-design-vue';
let slots = useSlots()
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');


type FormType = {
    formData?: Array<FormItem>,
    formConfig?: FormConfig,
    formRules?: Array<any>
}

const props = withDefaults(defineProps<FormType>(),{
  formConfig: {
    name: 'form',
    labelCol: { span:2 },
    wrapperCol: { offset:2 },
    layout: 'horizontal',
  },
  formData: () => [],
  formRules: () => [],
})

let uploadTarget = reactive<FormItem>({
})


const formModel = computed(() => {
  let obj:any = {}
  props.formData?.forEach((item:FormItem) => {
      obj[item.key] = item.value
  })
  return obj
})

// 事件处理
const onFinish = async (values: any) => {
  let uploadStatus = await handleUpload()
  console.log('Success:', values, formModel);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};

const handlePreview = async (file: UploadProps['fileList'][number]) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};

const beforeUpload: UploadProps['beforeUpload'] = (file,fileList) => {
  console.log(file,fileList);
  uploadTarget.value = [...(uploadTarget.value as any[] || []), file];
  return false;
};

const handleUpload = () => {
  return new Promise((resolve,reject) => {
    if(uploadTarget.manualUpload) {
      const formData = new FormData();
      (uploadTarget.value as any[])?.forEach((file: UploadProps['fileList'][number]) => {
        formData.append('files[]', file as any);
      });
      uploadTarget.loading = true;

      // ajax upload
      setTimeout(() => {
        resolve(true);
        message.success('文件上传成功!')
        uploadTarget.loading = false
      }, 1000);
    } else {
      resolve(true);
    }
  })
}

</script>

<style lang="scss" scoped>
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
  float: right;
}
.ant-upload-drag-icon {
  margin-bottom: 16px;
  box-sizing: border-box;
}
</style>
