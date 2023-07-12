<template>
  <div class="ray_tracing">
    <FuCard title="光线追踪（v-tracing） | 鼠标移入盒子产生光影追踪效果">
      <div class="color_pick" v-if="false">
        <div class="left">
          <span>背景色快捷选择：</span>
          <div class="colors">
            <div class="color_card" @click="changeBgColor(item.hexadecimal)" :style="{'background-color': item.hexadecimal,boxShadow:`2px 2px 8px ${item.hexadecimal}`}" v-for="item in colorArrs" :key="item.name">
              <div class="name">{{ item.name }}</div>
              <div class="color_val">
                <span>{{ item.hexadecimal }}</span>
                <span>{{ item.rgb }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span>自定义：</span>
          <color-picker v-model:rgba="color"></color-picker>
        </div>
      </div>
      <div class="ray_trancing_box">
        <div class="ray_trancing_item" v-tracing :key="i" v-for="i in 4">
        </div>
      </div>
    </FuCard>
  </div>
</template>

<script setup lang="ts" name="ray_tracing">
import { ref, reactive } from "vue"

let colorArrs = [

  {
    name: '满江红',
    hexadecimal: '#a7535a',
    rgb: 'rgb(168, 83, 90)'
  },
  {
    name: '山茶红',
    hexadecimal: '#ed556a',
    rgb: 'rgb(237, 85, 106)'
  },
  {
    name: '橘橙',
    hexadecimal: '#f97d1c',
    rgb: 'rgb(249, 125, 28)'
  },
  {
    name: '竹绿',
    hexadecimal: '#1ba784',
    rgb: 'rgb(27, 167, 132)'
  },
  {
    name: '雁灰',
    hexadecimal: '#80766e',
    rgb: 'rgb(128, 118, 110)'
  },
  {
    name: '满天星紫',
    hexadecimal: '#2e317c',
    rgb: 'rgb(46, 49, 124)'
  },

]

let color = ref<string>('#060404')

const changeBgColor = (val:string) => {
  color.value = val
}
</script>

<style lang="scss" scoped>
.ray_tracing {
  .color_pick {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .colors {
      flex: 1;
      color: #fff;
      display: flex;
      flex-wrap: wrap;
      .color_card {
        padding: 5px;
        border-radius: 4px;
        margin-right: 8px;
        cursor: pointer;
        user-select: none;
        &:last-child {
          margin-right: 0;
        }
        .color_val {
          font-size: 12px;
          &>span:first-child {
            margin-right: 10px;
          }
        }
      }
    }
    &>div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &>span {
        margin-bottom: 5px;
        font-weight: 600;
      }
    }
    .left {
      align-items: flex-start;
    }
    & ::v-deep(.zs-color-picker-panel) {
      z-index: 9;
    }
  }
  .ray_trancing_box {
    .ray_trancing_item {
      background-color: v-bind(color);
      height: 300px;
      margin-bottom: 10px;
      border-radius: 6px;
      border: 1px solid var(--wangwang-border);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
