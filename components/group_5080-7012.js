// forms/group_5080-7012.js

export const formBundle = {
    // ==========================================
    // A105080 资产折旧、摊销及纳税调整明细表
    // ==========================================
    A105080: {
        schema: {
            id: 'A105080',
            title: '资产折旧、摊销及纳税调整明细表 (A105080)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '4%'}, {title: '项 目', rowspan: 2, width: '20%'},
                    {title: '账载金额', colspan: 3}, {title: '税收金额', colspan: 5},
                    {title: '纳税调整\\n整金额', rowspan: 2, width: '8%'}
                ],
                [
                    {title: '资产\\n原值\\n1', width: '8%'}, {title: '本年折旧、\\n摊销额\\n2', width: '8%'}, {title: '累计折旧、\\n摊销额\\n3', width: '8%'},
                    {title: '资产计\\n税基础\\n4', width: '8%'}, {title: '税收折旧、\\n摊销额\\n5', width: '8%'}, {title: '享受加速折旧政策的\\n资产按税收一般规定\\n计算的折旧、摊销额\\n6', width: '10%'},
                    {title: '加速折旧、\\n摊销统计额\\n7 (5-6)', width: '8%'}, {title: '累计折\\n旧、摊\\n销额\\n8', width: '8%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、固定资产 (2+3+4+5+6+7)', isBold: true, inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L1_C8'}, {key:'L1_C9', isReadonly:true}] },
                { line: '2', text: '（一）房屋、建筑物', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C8'}, {key:'L2_C9', isReadonly:true}] },
                { line: '8', text: '二、生产性生物资产 (9+10)', isBold: true, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C8'}, {key:'L8_C9', isReadonly:true}] },
                { line: '11', text: '三、无形资产 (12+..+19)', isBold: true, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L11_C8'}, {key:'L11_C9', isReadonly:true}] },
                { line: '20', text: '四、长期待摊费用 (21+..+25)', isBold: true, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4'}, {key:'L20_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L20_C8'}, {key:'L20_C9', isReadonly:true}] },
                { line: '26', text: '五、油气勘探投资', isBold: true, inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}, {key:'L26_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L26_C8'}, {key:'L26_C9', isReadonly:true}] },
                { line: '27', text: '六、油气开发投资', isBold: true, inputs: [{key:'L27_C1'}, {key:'L27_C2'}, {key:'L27_C3'}, {key:'L27_C4'}, {key:'L27_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L27_C8'}, {key:'L27_C9', isReadonly:true}] },
                { line: '30', text: '合计', isBold: true, inputs: [{key:'L30_C1', isReadonly:true}, {key:'L30_C2', isReadonly:true}, {key:'L30_C3', isReadonly:true}, {key:'L30_C4', isReadonly:true}, {key:'L30_C5', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L30_C8', isReadonly:true}, {key:'L30_C9', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105080) return;
            const t = db.A105080;
            [1, 2, 8, 11, 20, 26, 27, 30].forEach(r => { t[`L${r}_C9`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C5`] || 0); });
            for (let c = 1; c <= 9; c++) {
                if (c === 6 || c === 7) continue;
                t[`L30_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L8_C${c}`] || 0) + (t[`L11_C${c}`] || 0) + (t[`L20_C${c}`] || 0) + (t[`L26_C${c}`] || 0) + (t[`L27_C${c}`] || 0);
            }
        }
    },

    // ==========================================
    // A105090 资产损失税前扣除及纳税调整明细表
    // ==========================================
    A105090: {
        schema: {
            id: 'A105090',
            title: '资产损失税前扣除及纳税调整明细表 (A105090)',
            headers: [
                [
                    {title: '行次', width: '5%'}, {title: '项目', width: '35%'},
                    {title: '资产损失直\\n接计入本年\\n损益金额\\n1', width: '10%'}, {title: '资产损失准\\n备金核销金\\n额\\n2', width: '10%'},
                    {title: '资产处置\\n收入\\n3', width: '10%'}, {title: '赔偿收入\\n4', width: '10%'},
                    {title: '资产计税\\n基础\\n5', width: '10%'}, {title: '资产损失的\\n税收金额\\n6 (5-3-4)', width: '10%'},
                    {title: '纳税调整\\n金额\\n7', width: '10%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、现金及银行存款损失', inputs: [{key:'L1_C1'}, {isAsterisk:true}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {key:'L1_C7', isReadonly:true}] },
                { line: '2', text: '二、应收及预付款项坏账损失', inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}, {key:'L2_C7', isReadonly:true}] },
                { line: '16', text: '八、债权性投资损失 (17+23)', isBold: true, inputs: [{key:'L16_C1', isReadonly:true}, {key:'L16_C2', isReadonly:true}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4', isReadonly:true}, {key:'L16_C5', isReadonly:true}, {key:'L16_C6', isReadonly:true}, {key:'L16_C7', isReadonly:true}] },
                { line: '29', text: '合计', isBold: true, inputs: [{key:'L29_C1', isReadonly:true}, {key:'L29_C2', isReadonly:true}, {key:'L29_C3', isReadonly:true}, {key:'L29_C4', isReadonly:true}, {key:'L29_C5', isReadonly:true}, {key:'L29_C6', isReadonly:true}, {key:'L29_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105090) return;
            const t = db.A105090;
            [1, 2, 16, 29].forEach(r => {
                t[`L${r}_C6`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = (t[`L${r}_C1`] || 0) + (t[`L${r}_C2`] || 0) - t[`L${r}_C6`];
            });
        }
    },

    // ==========================================
    // A105100 企业重组及递延纳税事项纳税调整明细表
    // ==========================================
    A105100: {
        schema: {
            id: 'A105100',
            title: '企业重组及递延纳税事项纳税调整明细表 (A105100)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '5%'}, {title: '项 目', rowspan: 2, width: '25%'},
                    {title: '一般性税务处理', colspan: 3}, {title: '特殊性税务处理（递延纳税）', colspan: 3},
                    {title: '纳税调整\\n金额\\n7(3+6)', rowspan: 2, width: '10%'}
                ],
                [
                    {title: '账载金额\\n1', width: '10%'}, {title: '税收金额\\n2', width: '10%'}, {title: '纳税调\\n整金额\\n3(2-1)', width: '10%'},
                    {title: '账载金额\\n4', width: '10%'}, {title: '税收金额\\n5', width: '10%'}, {title: '纳税调\\n整金额\\n6(5-4)', width: '10%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、债务重组', inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {key:'L1_C7', isReadonly:true}] },
                { line: '4', text: '二、股权收购', inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3', isReadonly:true}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '8', text: '四、企业合并 (9+10)', isBold: true, inputs: [{key:'L8_C1', isReadonly:true}, {key:'L8_C2', isReadonly:true}, {key:'L8_C3', isReadonly:true}, {key:'L8_C4', isReadonly:true}, {key:'L8_C5', isReadonly:true}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] },
                { line: '17', text: '合计', isBold: true, inputs: [{key:'L17_C1', isReadonly:true}, {key:'L17_C2', isReadonly:true}, {key:'L17_C3', isReadonly:true}, {key:'L17_C4', isReadonly:true}, {key:'L17_C5', isReadonly:true}, {key:'L17_C6', isReadonly:true}, {key:'L17_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105100) return;
            const t = db.A105100;
            [1, 4].forEach(r => {
                t[`L${r}_C3`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C1`] || 0);
                t[`L${r}_C6`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = t[`L${r}_C3`] + t[`L${r}_C6`];
            });
        }
    }
};