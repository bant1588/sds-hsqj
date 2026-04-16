// forms/group_8030-9010.js

export const formBundle = {
    // ==========================================
    // A108030 跨年度结转抵免境外所得税明细表
    // ==========================================
    A108030: {
        schema: {
            id: 'A108030',
            title: '跨年度结转抵免境外所得税明细表 (A108030)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '3%'},
                    {title: '国家\\n(地区)\\n1', rowspan: 2, width: '7%'},
                    {title: '前五年度境外所得已缴所得税未抵免余额', colspan: 6},
                    {title: '本年实际抵免以前年度未抵免的境外已缴所得税额', colspan: 6},
                    {title: '结转以后年度抵免的境外所得已缴所得税额', colspan: 6}
                ],
                [
                    {title: '前五年\\n2', width: '5%'}, {title: '前四年\\n3', width: '5%'}, {title: '前三年\\n4', width: '5%'}, {title: '前二年\\n5', width: '5%'}, {title: '前一年\\n6', width: '5%'}, {title: '小计\\n7(2+\\n...+6)', width: '5%'},
                    {title: '前五年\\n8', width: '5%'}, {title: '前四年\\n9', width: '5%'}, {title: '前三年\\n10', width: '5%'}, {title: '前二年\\n11', width: '5%'}, {title: '前一年\\n12', width: '5%'}, {title: '小计\\n13(8+\\n...+12)', width: '5%'},
                    {title: '前四年\\n14\\n(3-9)', width: '5%'}, {title: '前三年\\n15\\n(4-10)', width: '5%'}, {title: '前二年\\n16\\n(5-11)', width: '5%'}, {title: '前一年\\n17\\n(6-12)', width: '5%'}, {title: '本年\\n18', width: '5%'}, {title: '小计\\n19(14+\\n...+18)', width: '5%'}
                ]
            ],
            rows: [
                ...Array.from({length: 9}).map((_, i) => ({
                    line: `${i+1}`, inputs: [
                        {key:`L${i+1}_C1`, type:'text'}, {key:`L${i+1}_C2`}, {key:`L${i+1}_C3`}, {key:`L${i+1}_C4`}, {key:`L${i+1}_C5`}, {key:`L${i+1}_C6`}, {key:`L${i+1}_C7`, isReadonly:true},
                        {key:`L${i+1}_C8`}, {key:`L${i+1}_C9`}, {key:`L${i+1}_C10`}, {key:`L${i+1}_C11`}, {key:`L${i+1}_C12`}, {key:`L${i+1}_C13`, isReadonly:true},
                        {key:`L${i+1}_C14`, isReadonly:true}, {key:`L${i+1}_C15`, isReadonly:true}, {key:`L${i+1}_C16`, isReadonly:true}, {key:`L${i+1}_C17`, isReadonly:true}, {key:`L${i+1}_C18`}, {key:`L${i+1}_C19`, isReadonly:true}
                    ]
                })),
                { line: '10', text: '合计', isBold:true, inputs: [
                    {isAsterisk:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true},
                    {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}, {key:'L10_C12', isReadonly:true}, {key:'L10_C13', isReadonly:true},
                    {key:'L10_C14', isReadonly:true}, {key:'L10_C15', isReadonly:true}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true}, {key:'L10_C18', isReadonly:true}, {key:'L10_C19', isReadonly:true}
                ]}
            ]
        },
        logic: (db) => {
            if (!db.A108030) return;
            const t = db.A108030;
            // 横向计算
            for(let r=1; r<=9; r++) {
                t[`L${r}_C7`] = (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0) + (t[`L${r}_C4`] || 0) + (t[`L${r}_C5`] || 0) + (t[`L${r}_C6`] || 0);
                t[`L${r}_C13`] = (t[`L${r}_C8`] || 0) + (t[`L${r}_C9`] || 0) + (t[`L${r}_C10`] || 0) + (t[`L${r}_C11`] || 0) + (t[`L${r}_C12`] || 0);
                
                t[`L${r}_C14`] = (t[`L${r}_C3`] || 0) - (t[`L${r}_C9`] || 0);
                t[`L${r}_C15`] = (t[`L${r}_C4`] || 0) - (t[`L${r}_C10`] || 0);
                t[`L${r}_C16`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C11`] || 0);
                t[`L${r}_C17`] = (t[`L${r}_C6`] || 0) - (t[`L${r}_C12`] || 0);
                
                t[`L${r}_C19`] = (t[`L${r}_C14`] || 0) + (t[`L${r}_C15`] || 0) + (t[`L${r}_C16`] || 0) + (t[`L${r}_C17`] || 0) + (t[`L${r}_C18`] || 0);
            }
            // 纵向合计
            for(let c=2; c<=19; c++) {
                let sum = 0;
                for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L10_C${c}`] = sum;
            }
        }
    },

    // ==========================================
    // A109000 跨地区经营汇总纳税企业年度分摊企业所得税明细表
    // ==========================================
    A109000: {
        schema: {
            id: 'A109000',
            title: '跨地区经营汇总纳税企业年度分摊企业所得税明细表 (A109000)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'70%'}, {title:'金 额', width:'20%'}],
            rows: [
                { line: '1', text: '一、实际应纳所得税额', inputs: [{key: 'L1_C1'}] },
                { line: '2', text: '减：境外所得应纳所得税额', indent: 1, inputs: [{key: 'L2_C1'}] },
                { line: '3', text: '加：境外所得抵免所得税额', indent: 1, inputs: [{key: 'L3_C1'}] },
                { line: '4', text: '二、本年实际应纳所得税额（1－2＋3）', isBold: true, inputs: [{key: 'L4_C1', isReadonly: true}] },
                { line: '5', text: '其中：总机构直接管理建筑项目部预分所得税额', indent: 1, inputs: [{key: 'L5_C1'}] },
                { line: '6', text: '总机构实际应分摊所得税额［（4－5）×总机构分摊比例___%］', indent: 1, inputs: [{key: 'L6_C1'}] },
                { line: '7', text: '财政集中实际应分配所得税额［（4－5）×财政集中分摊比例___%］', indent: 1, inputs: [{key: 'L7_C1'}] },
                { line: '8', text: '分支机构实际应分摊所得税额［（4－5）×分支机构分摊比例___%］', indent: 1, inputs: [{key: 'L8_C1'}] },
                { line: '9', text: '其中：总机构主体生产经营部门实际应分摊所得税额［（8×总机构主体生产经营部门分摊比例___%）］', indent: 2, inputs: [{key: 'L9_C1'}] },
                { line: '10', text: '三、本年累计已预分、已分摊所得税额（11＋12＋13＋14）', isBold: true, inputs: [{key: 'L10_C1', isReadonly: true}] },
                { line: '11', text: '其中：总机构直接管理建筑项目部预分所得税额', indent: 1, inputs: [{key: 'L11_C1'}] },
                { line: '12', text: '总机构已分摊所得税额', indent: 1, inputs: [{key: 'L12_C1'}] },
                { line: '13', text: '财政集中已分配所得税额', indent: 1, inputs: [{key: 'L13_C1'}] },
                { line: '14', text: '分支机构已分摊所得税额', indent: 1, inputs: [{key: 'L14_C1'}] },
                { line: '15', text: '其中：总机构主体生产经营部门已分摊所得税额', indent: 2, inputs: [{key: 'L15_C1'}] },
                { line: '16', text: '四、本年度应分摊的应补（退）的所得税额（4－10）', isBold: true, inputs: [{key: 'L16_C1', isReadonly: true}] },
                { line: '17', text: '其中：总机构分摊本年应补（退）的所得税额（6－12）', indent: 1, inputs: [{key: 'L17_C1', isReadonly: true}] },
                { line: '18', text: '财政集中分配本年应补（退）的所得税额（7－13）', indent: 1, inputs: [{key: 'L18_C1', isReadonly: true}] },
                { line: '19', text: '分支机构分摊本年应补（退）的所得税额（8－14）', indent: 1, inputs: [{key: 'L19_C1', isReadonly: true}] },
                { line: '20', text: '其中：总机构主体生产经营部门分摊本年应补（退）的所得税额（9－15）', indent: 2, inputs: [{key: 'L20_C1', isReadonly: true}] },
                { line: '21', text: '五、境外所得抵免后的应纳所得税额（2－3）', isBold: true, inputs: [{key: 'L21_C1', isReadonly: true}] },
                { line: '22', text: '六、总机构本年应补（退）所得税额（17＋18＋20＋21）', isBold: true, inputs: [{key: 'L22_C1', isReadonly: true}] },
                { line: '23', text: '七、总机构应享受民族地方优惠金额', isBold: true, inputs: [{key: 'L23_C1'}] },
                { line: '24', text: '总机构全年累计已享受民族地方优惠金额', indent: 1, inputs: [{key: 'L24_C1'}] },
                { line: '25', text: '总机构因民族地方优惠调整分配金额（23－24）', indent: 1, inputs: [{key: 'L25_C1', isReadonly: true}] },
                { line: '26', text: '八、总机构本年实际应补（退）所得税额（22－25）', isBold: true, inputs: [{key: 'L26_C1', isReadonly: true}] }
            ]
        },
        logic: (db) => {
            if (!db.A109000) return;
            const t = db.A109000;
            t.L4_C1 = (t.L1_C1 || 0) - (t.L2_C1 || 0) + (t.L3_C1 || 0);
            t.L10_C1 = (t.L11_C1 || 0) + (t.L12_C1 || 0) + (t.L13_C1 || 0) + (t.L14_C1 || 0);
            t.L16_C1 = t.L4_C1 - t.L10_C1;
            t.L17_C1 = (t.L6_C1 || 0) - (t.L12_C1 || 0);
            t.L18_C1 = (t.L7_C1 || 0) - (t.L13_C1 || 0);
            t.L19_C1 = (t.L8_C1 || 0) - (t.L14_C1 || 0);
            t.L20_C1 = (t.L9_C1 || 0) - (t.L15_C1 || 0);
            t.L21_C1 = (t.L2_C1 || 0) - (t.L3_C1 || 0);
            t.L22_C1 = t.L17_C1 + t.L18_C1 + t.L20_C1 + t.L21_C1;
            t.L25_C1 = (t.L23_C1 || 0) - (t.L24_C1 || 0);
            t.L26_C1 = t.L22_C1 - t.L25_C1;
        }
    },

    // ==========================================
    // A109010 企业所得税汇总纳税分支机构所得税分配表
    // ==========================================
    A109010: {
        schema: {
            id: 'A109010',
            title: '企业所得税汇总纳税分支机构所得税分配表 (A109010)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '4%'}, 
                    {title: '统一社会信用代码\\n(纳税人识别号)', rowspan: 2, width: '12%'}, 
                    {title: '机构名称', rowspan: 2, width: '12%'},
                    {title: '三项因素', colspan: 3}, 
                    {title: '分摊\\n比例', rowspan: 2, width: '6%'}, 
                    {title: '实际应\\n分摊所\\n得税额', rowspan: 2, width: '8%'}, 
                    {title: '累计已\\n分摊所\\n得税额', rowspan: 2, width: '8%'},
                    {title: '分摊应\\n补(退)\\n所得税\\n额', rowspan: 2, width: '8%'}, 
                    {title: '民族自治地区企业\\n所得税地方分享部\\n分优惠金额(□免\\n征 □减征:减征幅\\n度___%)', rowspan: 2, width: '14%'}, 
                    {title: '实际分\\n摊应补\\n(退)\\n所得税\\n额', rowspan: 2, width: '8%'}
                ],
                [
                    {title: '营业收入', width: '8%'}, {title: '职工薪酬', width: '8%'}, {title: '资产总额', width: '8%'}
                ]
            ],
            rows: [
                // 顶层表头模拟区 (利用跨列呈现独立的五项汇总)
                {
                    inputs: [
                        {type: 'label', value: '', colspan: 1}, // 占位“行次”
                        {type: 'label', value: '本年实际应纳所得税额', colspan: 2, innerStyle: 'font-weight:bold;'},
                        {type: 'label', value: '总机构直接管理建筑项目部预分所得税额', colspan: 3, innerStyle: 'font-weight:bold;'},
                        {type: 'label', value: '总机构实际应分摊所得税额', colspan: 2, innerStyle: 'font-weight:bold;'},
                        {type: 'label', value: '财政集中实际应分配所得税额', colspan: 2, innerStyle: 'font-weight:bold;'},
                        {type: 'label', value: '分支机构实际应分摊所得税额', colspan: 2, innerStyle: 'font-weight:bold;'}
                    ]
                },
                // 顶层输入框模拟区
                {
                    inputs: [
                        {type: 'label', value: '', colspan: 1}, // 占位“行次”
                        {key: 'TOP_C1', colspan: 2},
                        {key: 'TOP_C2', colspan: 3},
                        {key: 'TOP_C3', colspan: 2},
                        {key: 'TOP_C4', colspan: 2},
                        {key: 'TOP_C5', colspan: 2}
                    ]
                },
                // 分支机构明细数据行 (初始展示 6 行供填报)
                ...Array.from({length: 6}).map((_, i) => ({
                    line: `${i+1}`, inputs: [
                        {key:`L${i+1}_C1`, type:'text'}, {key:`L${i+1}_C2`, type:'text'}, {key:`L${i+1}_C3`}, 
                        {key:`L${i+1}_C4`}, {key:`L${i+1}_C5`}, {key:`L${i+1}_C6`}, {key:`L${i+1}_C7`}, 
                        {key:`L${i+1}_C8`}, {key:`L${i+1}_C9`, isReadonly:true}, {key:`L${i+1}_C10`}, {key:`L${i+1}_C11`, isReadonly:true}
                    ]
                })),
                { line: '合计', isBold:true, inputs: [
                    {isAsterisk:true}, {isAsterisk:true}, {key:'L_SUM_C3', isReadonly:true}, {key:'L_SUM_C4', isReadonly:true}, 
                    {key:'L_SUM_C5', isReadonly:true}, {key:'L_SUM_C6', isReadonly:true}, {key:'L_SUM_C7', isReadonly:true}, 
                    {key:'L_SUM_C8', isReadonly:true}, {key:'L_SUM_C9', isReadonly:true}, {key:'L_SUM_C10', isReadonly:true}, {key:'L_SUM_C11', isReadonly:true}
                ]}
            ]
        },
        logic: (db) => {
            if (!db.A109010) return;
            const t = db.A109010;
            // 明细行计算
            for(let r=1; r<=6; r++) {
                t[`L${r}_C9`] = (t[`L${r}_C7`] || 0) - (t[`L${r}_C8`] || 0);
                t[`L${r}_C11`] = t[`L${r}_C9`] - (t[`L${r}_C10`] || 0);
            }
            // 纵向合计计算
            for(let c=3; c<=11; c++) {
                let sum = 0;
                for(let r=1; r<=6; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L_SUM_C${c}`] = sum;
            }
        }
    }
};