import type { App } from 'vue';
import DOMFdirective from './DOMFdirective'
/**
 * 自定义指令
 */
export default function direactive(app: App) {
    // DOM自定义指令
    DOMFdirective(app)
}