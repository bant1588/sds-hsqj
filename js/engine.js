// js/engine.js
import { reactive, watchEffect } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// 1. 全局数据总线
export const db = reactive({})

// 2. 智能初始化槽位工具
export const initFormState = (formId, fields) => {
    if (!db[formId]) {
        db[formId] = {}
    }
    // fields 结构变为：[{ key: 'L1', type: 'number' }, { key: 'L1_name', type: 'text' }]
    fields.forEach(field => { 
        if (field.key && db[formId][field.key] === undefined) {
            // 如果明确指定是 text 文本，初始化为空字符串；否则初始化为 0
            db[formId][field.key] = field.type === 'text' ? '' : 0 
        }
    })
}

// 3. 逻辑注入器：将各张表的公式动态挂载到引擎中
export const injectFormulas = (logicFunction) => {
    watchEffect(() => {
        logicFunction(db)
    })
}