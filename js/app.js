// js/app.js
import { createApp, ref, shallowRef, computed, markRaw } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { db, initFormState, injectFormulas, resetDB } from './engine.js'
import { exportToExcel } from './exporter.js'
import TaxTableRenderer from '../components/TaxTableRenderer.js'

const formToGroupMap = {
    'A000000': 'group_0000-4000', 'A100000': 'group_0000-4000', 'A101010': 'group_0000-4000', 
    'A101020': 'group_0000-4000', 'A102010': 'group_0000-4000', 'A102020': 'group_0000-4000', 
    'A103000': 'group_0000-4000', 'A104000': 'group_0000-4000',
    'A105000': 'group_5000-5070', 'A105010': 'group_5000-5070', 'A105020': 'group_5000-5070', 
    'A105030': 'group_5000-5070', 'A105040': 'group_5000-5070', 'A105050': 'group_5000-5070', 
    'A105060': 'group_5000-5070', 'A105070': 'group_5000-5070',
    'A105080': 'group_5080-7012', 'A105090': 'group_5080-7012', 'A105100': 'group_5080-7012', 
    'A105110': 'group_5080-7012', 'A105120': 'group_5080-7012', 'A106000': 'group_5080-7012', 
    'A107011': 'group_5080-7012', 'A107012': 'group_5080-7012',
    'A107020': 'group_7020-8020', 'A107030': 'group_7020-8020', 'A107041': 'group_7020-8020', 
    'A107042': 'group_7020-8020', 'A107050': 'group_7020-8020', 'A108000': 'group_7020-8020', 
    'A108010': 'group_7020-8020', 'A108020': 'group_7020-8020',
    'A108030': 'group_8030-9010', 'A109000': 'group_8030-9010', 'A109010': 'group_8030-9010'
}

const PlaceholderForm = {
    template: `<div class="form-card" style="text-align:center;padding:60px;"><h3>⚠️ 暂未配置该表单数据，请在对应的 group 文件中添加</h3></div>`
}

const App = {
    components: { TaxTableRenderer },
    template: `
        <div class="app-container">
            <div class="top-banner" style="position: fixed; top: 0; left: 0; width: 100%; background-color: #fdf5e6; color: #8b4513; display: flex; align-items: center; justify-content: center; gap: 15px; z-index: 2000; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border-bottom: 2px solid #ffa500; font-size: 16px; height: 54px; box-sizing: border-box; padding: 0 20px;">
                <span style="font-size: 20px;">💡</span>
                <span style="font-weight: 500;">本系统属于模拟系统，仅用于学习交流，具体依税务实际征税为准!</span>
                <div style="background-color: #07c160; color: white; padding: 6px 16px; border-radius: 6px; display: flex; align-items: center; gap: 8px; font-weight: bold; font-size: 15px;">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8.384 15.01c.28 0 .507-.227.507-.508a.508.508 0 0 0-.507-.507.508.508 0 0 0-.508.507c0 .281.227.508.508.508m4.618 0c.28 0 .507-.227.507-.508a.508.508 0 0 0-.507-.507.508.508 0 0 0-.508.507c0 .281.227.508.508.508m2.28-4.524c.71 0 1.284-.46 1.284-1.028s-.574-1.028-1.284-1.028-1.285.46-1.285 1.028.575 1.028 1.285 1.028m-4.225 0c.71 0 1.284-.46 1.284-1.028s-.574-1.028-1.284-1.028-1.285.46-1.285 1.028.575 1.028 1.285 1.028M24 10.368c0-4.043-4.14-7.32-9.248-7.32-5.107 0-9.247 3.277-9.247 7.32 0 3.84 3.733 7.005 8.71 7.284l-.32 1.45c-.04.187.08.307.24.227l2.12-1.24c.147-.094.294-.187.427-.267.45.067.893.094 1.318.094 5.108 0 9.3-3.277 9.3-7.548M6.924 13.911c-.347.013-.693.026-1.026.026-.4 0-.8-.013-1.201-.053l-1.6.934c-.12.08-.226.014-.186-.147l.24-1.093c-2.88-1.147-4.742-3.32-4.742-5.787 0-3.52 3.841-6.374 8.562-6.374.2 0 .4 0 .613.013C4.204 2.857 1.39 5.391 1.39 8.35c0 2.507 2.134 4.72 5.374 5.507l.16.054z"/></svg>
                    加微信进群 13519445134
                </div>
            </div>

            <div style="padding-top: 54px; min-height: 100vh;">
                <div v-if="!isFilling" class="directory-container">
                    <div class="directory-header" style="padding: 20px 0; border-bottom: 1px solid #eee; position: sticky; top: 54px; background: #ffffff; z-index: 1000;">
                        <h2>企业所得税年报模拟系统</h2>
                        <div class="action-group">
                            <button class="btn default-btn" @click="selectAll">全选</button>
                            <button class="btn default-btn" @click="deselectAll">取消</button>
                            <button class="btn primary-btn" @click="startFilling" :disabled="selectedIds.length === 0">
                                进入填报 <span v-if="selectedIds.length > 0">({{ selectedIds.length }})</span>
                            </button>
                        </div>
                    </div>
                    <div class="directory-list" style="margin-top: 20px;">
                        <label v-for="item in fullCatalog" :key="item.id" class="checkbox-item" :style="mandatoryIds.includes(item.id) ? 'opacity: 0.7; cursor: not-allowed;' : ''">
                            <input type="checkbox" :value="item.id" v-model="selectedIds" :disabled="mandatoryIds.includes(item.id)">
                            <span class="form-id">{{ item.id }}</span>
                            <span class="form-name">{{ item.name }}</span>
                            <span v-if="mandatoryIds.includes(item.id)" style="color: #e53935; font-size: 12px; margin-left: 5px; font-weight: normal;">(必填)</span>
                        </label>
                    </div>
                </div>

                <div v-else class="workspace">
                    <div class="sidebar" style="display: flex; flex-direction: column; height: calc(100vh - 54px); position: sticky; top: 54px; background: #4285f4; color: #ffffff;">
                        
                        <div class="sidebar-menu-list" style="flex: 1; overflow-y: auto; padding: 10px 0;">
                            <div v-for="item in selectedForms" :key="item.id" 
                                 class="menu-item" :class="{ active: currentMenu === item.id }" @click="switchTab(item)">
                                <div style="font-weight:bold;">{{ item.id }}</div>
                                <div style="font-size:12px;opacity:0.9;line-height:1.4;">{{ item.name }}</div>
                            </div>
                        </div>

                        <div class="sidebar-footer" style="padding: 15px; border-top: 1px solid rgba(255, 255, 255, 0.2); background: #4285f4; flex-shrink: 0;">
                            <button class="back-btn" @click="isFilling = false" style="width: 100%; box-sizing: border-box; background: #ffffff; color: #4285f4; border: none; border-radius: 4px; padding: 10px 0; font-weight: bold; cursor: pointer; margin-bottom: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.15); transition: background 0.2s;">
                                ← 返回目录
                            </button>
                            
                            <button class="btn success-btn" @click="handleExport" :disabled="isExporting" style="width: 100%; margin-bottom: 12px; box-sizing: border-box; padding: 10px 0; font-weight: bold; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                {{ isExporting ? '导出中...' : '📥 导出到 Excel' }}
                            </button>
                            
                            <button class="btn danger-btn" @click="handleReset" style="width: 100%; box-sizing: border-box; padding: 10px 0; font-weight: bold; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                🗑️ 重置填写数据
                            </button>
                        </div>
                    </div>
                    
                    <div class="content" style="position: relative; flex: 1;">
                        <div class="workspace-actions" style="background: #ffffff; padding: 0 20px; border-bottom: 2px solid #4a90e2; display: flex; align-items: center; height: 60px; box-sizing: border-box;">
                            <div style="color: #333; font-size: 15px;">
                                当前填报表单：<strong style="color: #4a90e2; font-size: 16px;">{{ currentMenu }}</strong>
                            </div>
                        </div>

                        <div class="tax-table-container" style="padding: 20px;">
                            <TaxTableRenderer v-if="isCurrentFormConfig" :config="currentConfig" />
                            <component v-else :is="currentView" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    setup() {
        const fullCatalog = ref([
            { id: 'A000000', name: '企业所得税年度纳税申报基础信息表' },
            { id: 'A100000', name: '企业所得税年度纳税申报主表' },
            { id: 'A101010', name: '一般企业收入明细表' },
            { id: 'A101020', name: '金融企业收入明细表' },
            { id: 'A102010', name: '一般企业成本支出明细表' },
            { id: 'A102020', name: '金融企业支出明细表' },
            { id: 'A103000', name: '事业单位、民间非营利组织收入、支出明细表' },
            { id: 'A104000', name: '期间费用明细表' },
            { id: 'A105000', name: '纳税调整项目明细表' },
            { id: 'A105010', name: '视同销售和房地产开发企业特定业务纳税调整明细表' },
            { id: 'A105020', name: '未按权责发生制确认收入纳税调整明细表' },
            { id: 'A105030', name: '投资收益纳税调整明细表' },
            { id: 'A105040', name: '专项用途财政性资金纳税调整明细表' },
            { id: 'A105050', name: '职工薪酬支出及纳税调整明细表' },
            { id: 'A105060', name: '广告费和业务宣传费跨年度纳税调整明细表' },
            { id: 'A105070', name: '捐赠支出及纳税调整明细表' },
            { id: 'A105080', name: '资产折旧、摊销及纳税调整明细表' },
            { id: 'A105090', name: '资产损失税前扣除及纳税调整明细表' },
            { id: 'A105100', name: '企业重组及递延纳税事项纳税调整明细表' },
            { id: 'A105110', name: '政策性搬迁纳税调整明细表' },
            { id: 'A105120', name: '特殊行业准备金及纳税调整明细表' },
            { id: 'A106000', name: '企业所得税弥补亏损明细表' },
            { id: 'A107011', name: '符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表' },
            { id: 'A107012', name: '研发费用加计扣除优惠明细表' },
            { id: 'A107020', name: '所得减免优惠明细表' },
            { id: 'A107030', name: '抵扣应纳税所得额明细表' },
            { id: 'A107041', name: '高新技术企业优惠情况及明细表' },
            { id: 'A107042', name: '软件、集成电路企业优惠情况及明细表' },
            { id: 'A107050', name: '税额抵免优惠明细表' },
            { id: 'A108000', name: '境外所得税收抵免明细表' },
            { id: 'A108010', name: '境外所得纳税调整后所得明细表' },
            { id: 'A108020', name: '境外分支机构弥补亏损明细表' },
            { id: 'A108030', name: '跨年度结转抵免境外所得税明细表' },
            { id: 'A109000', name: '跨地区经营汇总纳税企业年度分摊企业所得税明细表' },
            { id: 'A109010', name: '企业所得税汇总纳税分支机构所得税分配表' }
        ])
        
        // 定义必选的表单ID
        const mandatoryIds = ['A000000', 'A100000', 'A105000', 'A105050', 'A105080', 'A106000']
        // 初始化时选中必选表单
        const selectedIds = ref([...mandatoryIds])
        
        const isFilling = ref(false)
        const isExporting = ref(false)
        const currentMenu = ref('')
        const isCurrentFormConfig = ref(false)
        const currentConfig = ref(null)
        const currentView = shallowRef(null)
        const loadedLogics = new Set()

        const selectedForms = computed(() => fullCatalog.value.filter(i => selectedIds.value.includes(i.id)))

        const selectAll = () => { selectedIds.value = fullCatalog.value.map(i => i.id) }
        // 取消全选时，恢复到必选项，而不是全部清空
        const deselectAll = () => { selectedIds.value = [...mandatoryIds] }

        const handleReset = () => {
            if (confirm('确认要清空所有已填报的数据吗？该操作不可撤销。')) {
                resetDB()
            }
        }

        const handleExport = async () => {
            isExporting.value = true
            try {
                await exportToExcel(selectedIds.value, formToGroupMap, db)
            } catch (err) {
                alert('导出失败，请检查控制台错误信息。')
            } finally {
                isExporting.value = false
            }
        }

        const startFilling = () => { isFilling.value = true; if (selectedForms.value[0]) switchTab(selectedForms.value[0]); }

        const switchTab = async (formItem) => {
            currentMenu.value = formItem.id
            const formId = formItem.id
            const groupName = formToGroupMap[formId]

            if (!groupName) {
                isCurrentFormConfig.value = false
                currentView.value = markRaw(PlaceholderForm)
                return
            }

            try {
                const groupModule = await import(`../forms/${groupName}.js`)
                const bundle = groupModule.formBundle || Object.values(groupModule)[0] 
                const target = bundle[formId]

                if (target) {
                    const fields = []
                    target.schema.rows.forEach(r => {
                        if (r.key) fields.push({ key: r.key, type: r.type || 'number' })
                        if (r.inputs) r.inputs.forEach(i => { 
                            if (i.key) fields.push({ key: i.key, type: i.type || 'number' }) 
                        })
                    })
                    initFormState(formId, fields)

                    if (target.logic && !loadedLogics.has(formId)) {
                        injectFormulas(target.logic)
                        loadedLogics.add(formId)
                    }

                    currentConfig.value = target.schema
                    isCurrentFormConfig.value = true
                } else {
                    isCurrentFormConfig.value = false
                    currentView.value = markRaw(PlaceholderForm)
                }
            } catch (e) {
                console.warn(`加载 ${groupName}.js 失败`, e)
                isCurrentFormConfig.value = false
                currentView.value = markRaw(PlaceholderForm)
            }
        }

        return { 
            fullCatalog, selectedIds, mandatoryIds, isFilling, selectedForms, currentMenu, 
            isCurrentFormConfig, currentConfig, currentView, isExporting,
            startFilling, switchTab, selectAll, deselectAll, handleReset, handleExport
        }
    }
}
createApp(App).mount('#app')