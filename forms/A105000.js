// forms/A105000.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">纳税调整项目明细表 (A105000)</h2>
            <table class="tax-table">
                <thead>
                    <tr>
                        <th rowspan="2" width="6%">行次</th>
                        <th rowspan="2" width="46%">项 目</th>
                        <th width="12%">账载金额</th>
                        <th width="12%">税收金额</th>
                        <th width="12%">调增金额</th>
                        <th width="12%">调减金额</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in rows" :key="row.id">
                        <td>{{ row.id }}</td>
                        <td class="text-left" :class="row.cls">{{ row.label }}</td>
                        <td v-for="(showInput, index) in row.inputs" :key="index">
                            <input v-if="showInput === 1" 
                                   type="number" 
                                   class="tax-input" 
                                   v-model="db.A105000['L' + row.id.replace('.','_') + '_' + (index + 1)]">
                            <span v-else style="color: #666;">*</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() {
        // 核心：将表格高度结构化，避免臃肿的HTML，精准控制每个 * 号的位置
        // inputs数组: [账载金额, 税收金额, 调增金额, 调减金额]，1代表可填，0代表*
        const rows = [
            { id: '1', label: '一、收入类调整项目 (2+3+...+11)', cls: 'font-bold', inputs: [0, 0, 1, 1] },
            { id: '2', label: '（一）视同销售收入 (填写A105010)', cls: 'pl-2', inputs: [0, 1, 1, 0] },
            { id: '3', label: '（二）未按权责发生制原则确认的收入 (填写A105020)', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '4', label: '（三）投资收益 (填写A105030)', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '5', label: '（四）按权益法核算长期股权投资对初始投资成本调整确认收益', cls: 'pl-2', inputs: [0, 0, 0, 1] },
            { id: '6', label: '（五）交易性金融资产初始投资调整', cls: 'pl-2', inputs: [0, 0, 1, 0] },
            { id: '7', label: '（六）公允价值变动净损益', cls: 'pl-2', inputs: [1, 0, 1, 1] },
            { id: '8', label: '（七）不征税收入', cls: 'pl-2', inputs: [0, 0, 1, 1] },
            { id: '9', label: '其中：专项用途财政性资金 (填写A105040)', cls: 'pl-4', inputs: [0, 0, 1, 1] },
            { id: '10', label: '（八）销售折扣、折让和退回', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '11', label: '（九）其他', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '12', label: '二、扣除类调整项目 (13+14+...+24+26+27+28+29+30)', cls: 'font-bold', inputs: [0, 0, 1, 1] },
            { id: '13', label: '（一）视同销售成本 (填写A105010)', cls: 'pl-2', inputs: [0, 1, 0, 1] },
            { id: '14', label: '（二）职工薪酬 (填写A105050)', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '15', label: '（三）业务招待费支出', cls: 'pl-2', inputs: [1, 1, 1, 0] },
            { id: '16', label: '（四）广告费和业务宣传费支出 (填写A105060)', cls: 'pl-2', inputs: [0, 0, 1, 1] },
            { id: '17', label: '（五）捐赠支出 (填写A105070)', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '18', label: '（六）利息支出', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '19', label: '（七）罚金、罚款和被没收财物的损失', cls: 'pl-2', inputs: [1, 0, 1, 0] },
            { id: '20', label: '（八）税收滞纳金、加收利息', cls: 'pl-2', inputs: [1, 0, 1, 0] },
            { id: '21', label: '（九）赞助支出', cls: 'pl-2', inputs: [1, 0, 1, 0] },
            { id: '22', label: '（十）与未实现融资收益相关在当期确认的财务费用', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '23', label: '（十一）佣金和手续费支出 (保险企业填写A105060)', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '24', label: '（十二）不征税收入用于支出所形成的费用', cls: 'pl-2', inputs: [0, 0, 1, 0] },
            { id: '25', label: '其中：专项用途财政性资金用于支出所形成的费用 (填写A105040)', cls: 'pl-4', inputs: [0, 0, 1, 0] },
            { id: '26', label: '（十三）跨期扣除项目', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '27', label: '（十四）与取得收入无关的支出', cls: 'pl-2', inputs: [1, 0, 1, 0] },
            { id: '28', label: '（十五）境外所得分摊的共同支出', cls: 'pl-2', inputs: [0, 0, 1, 0] },
            { id: '29', label: '（十六）党组织工作经费', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '30', label: '（十七）其他', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '31', label: '三、资产类调整项目 (32+33+34+35)', cls: 'font-bold', inputs: [0, 0, 1, 1] },
            { id: '32', label: '（一）资产折旧、摊销 (填写A105080)', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '33', label: '（二）资产减值准备金', cls: 'pl-2', inputs: [1, 0, 1, 1] },
            { id: '34', label: '（三）资产损失 (填写A105090)', cls: 'pl-2', inputs: [0, 0, 1, 1] },
            { id: '35', label: '（四）其他', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '36', label: '四、特殊事项调整项目 (37+38+...+43)', cls: 'font-bold', inputs: [0, 0, 1, 1] },
            { id: '37', label: '（一）企业重组及递延纳税事项 (填写A105100)', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '38', label: '（二）政策性搬迁 (填写A105110)', cls: 'pl-2', inputs: [0, 0, 1, 1] },
            { id: '39', label: '（三）特殊行业准备金 (39.1+39.2+39.4+39.5+39.6+39.7)', cls: 'pl-2', inputs: [0, 0, 1, 1] },
            { id: '39.1', label: '1. 保险公司保障保障基金', cls: 'pl-4', inputs: [1, 1, 1, 1] },
            { id: '39.2', label: '2. 保险公司准备金', cls: 'pl-4', inputs: [1, 1, 1, 1] },
            { id: '39.3', label: '其中：已发生未报案未决赔款准备金', cls: 'pl-6', inputs: [1, 1, 1, 1] },
            { id: '39.4', label: '3. 证券行业准备金', cls: 'pl-4', inputs: [1, 1, 1, 1] },
            { id: '39.5', label: '4. 期货行业准备金', cls: 'pl-4', inputs: [1, 1, 1, 1] },
            { id: '39.6', label: '5. 中小企业融资（信用）担保机构准备金', cls: 'pl-4', inputs: [1, 1, 1, 1] },
            { id: '39.7', label: '6. 金融企业、小额贷款公司准备金 (填写A105120)', cls: 'pl-4', inputs: [0, 0, 1, 1] },
            { id: '40', label: '（四）房地产开发企业特定业务计算的纳税调整额 (填写A105010)', cls: 'pl-2', inputs: [0, 1, 1, 1] },
            { id: '41', label: '（五）合伙企业法人合伙人应分得的应纳税所得额', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '42', label: '（六）发行永续债利息支出', cls: 'pl-2', inputs: [1, 1, 1, 1] },
            { id: '43', label: '（七）其他', cls: 'pl-2', inputs: [0, 0, 1, 1] },
            { id: '44', label: '五、特别纳税调整应税所得', cls: 'font-bold', inputs: [0, 0, 1, 1] },
            { id: '45', label: '六、其他', cls: 'font-bold', inputs: [0, 0, 1, 1] },
            { id: '46', label: '合计 (1+12+31+36+44+45)', cls: 'font-bold', inputs: [0, 0, 1, 1] }
        ]

        return { db, rows }
    }
}