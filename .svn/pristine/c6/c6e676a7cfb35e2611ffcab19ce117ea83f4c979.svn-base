<template>
    <div>
      <Toolbar
       class="toolbar"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
    </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

 // 编辑器实例，必须用 shallowRef
 const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor:any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

</script>

<style lang="scss" scoped>
.toolbar {
  border-bottom: 1px solid #ccc;
}
:root[theme='light'] {
  .toolbar {
    border-bottom-color: #000;
  }
}
</style>
