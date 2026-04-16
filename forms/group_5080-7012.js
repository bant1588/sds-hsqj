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
                    {title: '行次', rowspan: 2, width: '4%'}, {title: '项 目', colspan: 2, rowspan: 2, width: '30%'},
                    {title: '账载金额', colspan: 3}, {title: '税收金额', colspan: 5},
                    {title: '纳税调整\\n金额', rowspan: 2, width: '6%'}
                ],
                [
                    {title: '资产\\n原值\\n1', width: '6%'}, {title: '本年折旧、\\n摊销额\\n2', width: '6%'}, {title: '累计折旧、\\n摊销额\\n3', width: '6%'},
                    {title: '资产计\\n税基础\\n4', width: '6%'}, {title: '税收折旧、\\n摊销额\\n5', width: '6%'}, {title: '享受加速折旧政策的\\n资产按税收一般规定\\n计算的折旧、摊销额\\n6', width: '10%'},
                    {title: '加速折旧、\\n摊销统计额\\n7 (5-6)', width: '6%'}, {title: '累计折\\n旧、摊\\n销额\\n8', width: '6%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、固定资产 (2+3+4+5+6+7)', textColspan: 2, isBold: true, inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L1_C8'}, {key:'L1_C9', isReadonly:true}] },
                { line: '2', text: '（一）房屋、建筑物', textColspan: 2, indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C8'}, {key:'L2_C9', isReadonly:true}] },
                { line: '3', text: '（二）飞机、火车、轮船、机器、机械和其他生产设备', textColspan: 2, indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C8'}, {key:'L3_C9', isReadonly:true}] },
                { line: '4', text: '（三）与生产经营活动有关的器具、工具、家具等', textColspan: 2, indent: 1, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L4_C8'}, {key:'L4_C9', isReadonly:true}] },
                { line: '5', text: '（四）飞机、火车、轮船以外的运输工具', textColspan: 2, indent: 1, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C8'}, {key:'L5_C9', isReadonly:true}] },
                { line: '6', text: '（五）电子设备', textColspan: 2, indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C8'}, {key:'L6_C9', isReadonly:true}] },
                { line: '7', text: '（六）其他', textColspan: 2, indent: 1, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C8'}, {key:'L7_C9', isReadonly:true}] },
                { line: '8', text: '二、生产性生物资产 (9+10)', textColspan: 2, isBold: true, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C8'}, {key:'L8_C9', isReadonly:true}] },
                { line: '9', text: '（一）林木类', textColspan: 2, indent: 1, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C8'}, {key:'L9_C9', isReadonly:true}] },
                { line: '10', text: '（二）畜类', textColspan: 2, indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L10_C8'}, {key:'L10_C9', isReadonly:true}] },
                { line: '11', text: '三、无形资产 (12+13+14+15+16+17+18+19)', textColspan: 2, isBold: true, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L11_C8'}, {key:'L11_C9', isReadonly:true}] },
                { line: '12', text: '（一）专利权', textColspan: 2, indent: 1, inputs: [{key:'L12_C1'}, {key:'L12_C2'}, {key:'L12_C3'}, {key:'L12_C4'}, {key:'L12_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L12_C8'}, {key:'L12_C9', isReadonly:true}] },
                { line: '13', text: '（二）商标权', textColspan: 2, indent: 1, inputs: [{key:'L13_C1'}, {key:'L13_C2'}, {key:'L13_C3'}, {key:'L13_C4'}, {key:'L13_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L13_C8'}, {key:'L13_C9', isReadonly:true}] },
                { line: '14', text: '（三）著作权', textColspan: 2, indent: 1, inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3'}, {key:'L14_C4'}, {key:'L14_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L14_C8'}, {key:'L14_C9', isReadonly:true}] },
                { line: '15', text: '（四）土地使用权', textColspan: 2, indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {key:'L15_C4'}, {key:'L15_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L15_C8'}, {key:'L15_C9', isReadonly:true}] },
                { line: '16', text: '（五）非专利技术', textColspan: 2, indent: 1, inputs: [{key:'L16_C1'}, {key:'L16_C2'}, {key:'L16_C3'}, {key:'L16_C4'}, {key:'L16_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L16_C8'}, {key:'L16_C9', isReadonly:true}] },
                { line: '17', text: '（六）特许权使用费', textColspan: 2, indent: 1, inputs: [{key:'L17_C1'}, {key:'L17_C2'}, {key:'L17_C3'}, {key:'L17_C4'}, {key:'L17_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L17_C8'}, {key:'L17_C9', isReadonly:true}] },
                { line: '18', text: '（七）软件', textColspan: 2, indent: 1, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}, {key:'L18_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L18_C8'}, {key:'L18_C9', isReadonly:true}] },
                { line: '19', text: '（八）其他', textColspan: 2, indent: 1, inputs: [{key:'L19_C1'}, {key:'L19_C2'}, {key:'L19_C3'}, {key:'L19_C4'}, {key:'L19_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L19_C8'}, {key:'L19_C9', isReadonly:true}] },
                { line: '20', text: '四、长期待摊费用 (21+22+23+24+25)', textColspan: 2, isBold: true, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4'}, {key:'L20_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L20_C8'}, {key:'L20_C9', isReadonly:true}] },
                { line: '21', text: '（一）已足额提取折旧的固定资产的改建支出', textColspan: 2, indent: 1, inputs: [{key:'L21_C1'}, {key:'L21_C2'}, {key:'L21_C3'}, {key:'L21_C4'}, {key:'L21_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L21_C8'}, {key:'L21_C9', isReadonly:true}] },
                { line: '22', text: '（二）租入固定资产的改建支出', textColspan: 2, indent: 1, inputs: [{key:'L22_C1'}, {key:'L22_C2'}, {key:'L22_C3'}, {key:'L22_C4'}, {key:'L22_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L22_C8'}, {key:'L22_C9', isReadonly:true}] },
                { line: '23', text: '（三）固定资产的大修理支出', textColspan: 2, indent: 1, inputs: [{key:'L23_C1'}, {key:'L23_C2'}, {key:'L23_C3'}, {key:'L23_C4'}, {key:'L23_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L23_C8'}, {key:'L23_C9', isReadonly:true}] },
                { line: '24', text: '（四）开办费', textColspan: 2, indent: 1, inputs: [{key:'L24_C1'}, {key:'L24_C2'}, {key:'L24_C3'}, {key:'L24_C4'}, {key:'L24_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L24_C8'}, {key:'L24_C9', isReadonly:true}] },
                { line: '25', text: '（五）其他', textColspan: 2, indent: 1, inputs: [{key:'L25_C1'}, {key:'L25_C2'}, {key:'L25_C3'}, {key:'L25_C4'}, {key:'L25_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L25_C8'}, {key:'L25_C9', isReadonly:true}] },
                { line: '26', text: '五、油气勘探投资', textColspan: 2, isBold: true, inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}, {key:'L26_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L26_C8'}, {key:'L26_C9', isReadonly:true}] },
                { line: '27', text: '六、油气开发投资', textColspan: 2, isBold: true, inputs: [{key:'L27_C1'}, {key:'L27_C2'}, {key:'L27_C3'}, {key:'L27_C4'}, {key:'L27_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L27_C8'}, {key:'L27_C9', isReadonly:true}] },
                
                // 拆分列显示的跨行区域
                { line: '28', text: '享受资产加速折旧（摊销）及一次性扣除（摊销）政策的资产加速折旧（摊销）额大于一般折旧（摊销）额的部分', textRowspan: 6, width: '15%', text2: '（一）加速折旧（摊销）', align2: 'left', inputs: [{key:'L28_C1'}, {key:'L28_C2'}, {key:'L28_C3'}, {key:'L28_C4'}, {key:'L28_C5'}, {key:'L28_C6'}, {key:'L28_C7'}, {key:'L28_C8'}, {isAsterisk:true}] },
                { line: '28.1', text2: '（填写优惠事项名称）', align2: 'center', inputs: [{key:'L28_1_C1'}, {key:'L28_1_C2'}, {key:'L28_1_C3'}, {key:'L28_1_C4'}, {key:'L28_1_C5'}, {key:'L28_1_C6'}, {key:'L28_1_C7'}, {key:'L28_1_C8'}, {isAsterisk:true}] },
                { line: '28.2', text2: '（填写优惠事项名称）', align2: 'center', inputs: [{key:'L28_2_C1'}, {key:'L28_2_C2'}, {key:'L28_2_C3'}, {key:'L28_2_C4'}, {key:'L28_2_C5'}, {key:'L28_2_C6'}, {key:'L28_2_C7'}, {key:'L28_2_C8'}, {isAsterisk:true}] },
                { line: '29', text2: '（二）一次性扣除（摊销）', align2: 'left', inputs: [{key:'L29_C1'}, {key:'L29_C2'}, {key:'L29_C3'}, {key:'L29_C4'}, {key:'L29_C5'}, {key:'L29_C6'}, {key:'L29_C7'}, {key:'L29_C8'}, {isAsterisk:true}] },
                { line: '29.1', text2: '（填写优惠事项名称）', align2: 'center', inputs: [{key:'L29_1_C1'}, {key:'L29_1_C2'}, {key:'L29_1_C3'}, {key:'L29_1_C4'}, {key:'L29_1_C5'}, {key:'L29_1_C6'}, {key:'L29_1_C7'}, {key:'L29_1_C8'}, {isAsterisk:true}] },
                { line: '29.2', text2: '（填写优惠事项名称）', align2: 'center', inputs: [{key:'L29_2_C1'}, {key:'L29_2_C2'}, {key:'L29_2_C3'}, {key:'L29_2_C4'}, {key:'L29_2_C5'}, {key:'L29_2_C6'}, {key:'L29_2_C7'}, {key:'L29_2_C8'}, {isAsterisk:true}] },
                
                { line: '30', text: '合计', textColspan: 2, isBold: true, inputs: [{key:'L30_C1', isReadonly:true}, {key:'L30_C2', isReadonly:true}, {key:'L30_C3', isReadonly:true}, {key:'L30_C4', isReadonly:true}, {key:'L30_C5', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L30_C8', isReadonly:true}, {key:'L30_C9', isReadonly:true}] },
                { line: '附列资料', text: '全民所有制企业公司制改制资产评估增值政策资产', textColspan: 2, inputs: [{key:'LF1_C1'}, {key:'LF1_C2'}, {key:'LF1_C3'}, {key:'LF1_C4'}, {key:'LF1_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'LF1_C8'}, {key:'LF1_C9'}] }
            ]
        },
        logic: (db) => {
            if (!db.A105080) return;
            const t = db.A105080;
            
            // 行次求和逻辑
            const sumRows = (target, sources, cols) => {
                cols.forEach(c => {
                    t[`L${target}_C${c}`] = sources.reduce((acc, row) => acc + (t[`L${row}_C${c}`] || 0), 0);
                });
            };

            const allCols = [1, 2, 3, 4, 5, 8]; // 6,7为星号跳过

            // 1=2+3+4+5+6+7
            sumRows(1, [2, 3, 4, 5, 6, 7], allCols);
            // 8=9+10
            sumRows(8, [9, 10], allCols);
            // 11=12+13+14+15+16+17+18+19
            sumRows(11, [12, 13, 14, 15, 16, 17, 18, 19], allCols);
            // 20=21+22+23+24+25
            sumRows(20, [21, 22, 23, 24, 25], allCols);
            // 30=1+8+11+20+26+27
            sumRows(30, [1, 8, 11, 20, 26, 27], allCols);

            // 列计算: c9 = c2 - c5
            for (let r = 1; r <= 27; r++) {
                t[`L${r}_C9`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C5`] || 0);
            }
            t['L30_C9'] = (t['L30_C2'] || 0) - (t['L30_C5'] || 0);
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
                    {title: '资产损失直\\n接计入本年\\n损益金额\\n1', width: '9%'}, {title: '资产损失准\\n备金核销金\\n额\\n2', width: '9%'},
                    {title: '资产处置\\n收入\\n3', width: '8%'}, {title: '赔偿收入\\n4', width: '8%'},
                    {title: '资产计税\\n基础\\n5', width: '8%'}, {title: '资产损失的\\n税收金额\\n6 (5-3-4)', width: '9%'},
                    {title: '纳税调整\\n金额\\n7', width: '9%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、现金及银行存款损失', inputs: [{key:'L1_C1'}, {isAsterisk:true}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {key:'L1_C7', isReadonly:true}] },
                { line: '2', text: '二、应收及预付款项坏账损失', inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}, {key:'L2_C7', isReadonly:true}] },
                { line: '3', text: '其中：逾期三年以上的应收款项损失', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}] },
                { line: '4', text: '逾期一年以上的小额应收款项损失', indent: 2, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '5', text: '三、存货损失', inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6', isReadonly:true}, {key:'L5_C7', isReadonly:true}] },
                { line: '6', text: '其中：存货盘亏、报废、毁损、变质或被盗损失', indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}] },
                { line: '7', text: '四、固定资产损失', inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6', isReadonly:true}, {key:'L7_C7', isReadonly:true}] },
                { line: '8', text: '其中：固定资产盘亏、丢失、报废、损毁或被盗损失', indent: 1, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] },
                { line: '9', text: '五、无形资产损失', inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6', isReadonly:true}, {key:'L9_C7', isReadonly:true}] },
                { line: '10', text: '其中：无形资产转让损失', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}] },
                { line: '11', text: '无形资产被替代或超过法律保护期限形成的损失', indent: 2, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6', isReadonly:true}, {key:'L11_C7', isReadonly:true}] },
                { line: '12', text: '六、在建工程损失', inputs: [{key:'L12_C1'}, {isAsterisk:true}, {key:'L12_C3'}, {key:'L12_C4'}, {key:'L12_C5'}, {key:'L12_C6', isReadonly:true}, {key:'L12_C7', isReadonly:true}] },
                { line: '13', text: '其中：在建工程停建、报废损失', indent: 1, inputs: [{key:'L13_C1'}, {isAsterisk:true}, {key:'L13_C3'}, {key:'L13_C4'}, {key:'L13_C5'}, {key:'L13_C6', isReadonly:true}, {key:'L13_C7', isReadonly:true}] },
                { line: '14', text: '七、生产性生物资产损失', inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3'}, {key:'L14_C4'}, {key:'L14_C5'}, {key:'L14_C6', isReadonly:true}, {key:'L14_C7', isReadonly:true}] },
                { line: '15', text: '其中：生产性生物资产盘亏、非正常死亡、被盗、丢失等产生的损失', indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {key:'L15_C4'}, {key:'L15_C5'}, {key:'L15_C6', isReadonly:true}, {key:'L15_C7', isReadonly:true}] },
                { line: '16', text: '八、债权性投资损失 (17+23)', isBold: true, inputs: [{key:'L16_C1', isReadonly:true}, {key:'L16_C2', isReadonly:true}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4', isReadonly:true}, {key:'L16_C5', isReadonly:true}, {key:'L16_C6', isReadonly:true}, {key:'L16_C7', isReadonly:true}] },
                { line: '17', text: '（一）金融企业债权性投资损失 (18+22)', indent: 1, inputs: [{key:'L17_C1', isReadonly:true}, {key:'L17_C2', isReadonly:true}, {key:'L17_C3', isReadonly:true}, {key:'L17_C4', isReadonly:true}, {key:'L17_C5', isReadonly:true}, {key:'L17_C6', isReadonly:true}, {key:'L17_C7', isReadonly:true}] },
                { line: '18', text: '1.贷款损失', indent: 2, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}, {key:'L18_C5'}, {key:'L18_C6', isReadonly:true}, {key:'L18_C7', isReadonly:true}] },
                { line: '19', text: '其中：符合条件的涉农和中小企业贷款损失', indent: 3, inputs: [{key:'L19_C1'}, {key:'L19_C2'}, {key:'L19_C3'}, {key:'L19_C4'}, {key:'L19_C5'}, {key:'L19_C6', isReadonly:true}, {key:'L19_C7', isReadonly:true}] },
                { line: '20', text: '其中：单户贷款余额300万（含）以下的贷款损失', indent: 3, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4'}, {key:'L20_C5'}, {key:'L20_C6', isReadonly:true}, {key:'L20_C7', isReadonly:true}] },
                { line: '21', text: '单户贷款余额300万元至1000万元（含）的贷款损失', indent: 3, inputs: [{key:'L21_C1'}, {key:'L21_C2'}, {key:'L21_C3'}, {key:'L21_C4'}, {key:'L21_C5'}, {key:'L21_C6', isReadonly:true}, {key:'L21_C7', isReadonly:true}] },
                { line: '22', text: '2.其他债权性投资损失', indent: 2, inputs: [{key:'L22_C1'}, {key:'L22_C2'}, {key:'L22_C3'}, {key:'L22_C4'}, {key:'L22_C5'}, {key:'L22_C6', isReadonly:true}, {key:'L22_C7', isReadonly:true}] },
                { line: '23', text: '（二）非金融企业债权性投资损失', indent: 1, inputs: [{key:'L23_C1'}, {key:'L23_C2'}, {key:'L23_C3'}, {key:'L23_C4'}, {key:'L23_C5'}, {key:'L23_C6', isReadonly:true}, {key:'L23_C7', isReadonly:true}] },
                { line: '24', text: '九、股权（权益）性投资损失', inputs: [{key:'L24_C1'}, {key:'L24_C2'}, {key:'L24_C3'}, {key:'L24_C4'}, {key:'L24_C5'}, {key:'L24_C6', isReadonly:true}, {key:'L24_C7', isReadonly:true}] },
                { line: '25', text: '其中：股权转让损失', indent: 1, inputs: [{key:'L25_C1'}, {key:'L25_C2'}, {key:'L25_C3'}, {key:'L25_C4'}, {key:'L25_C5'}, {key:'L25_C6', isReadonly:true}, {key:'L25_C7', isReadonly:true}] },
                { line: '26', text: '十、通过各种交易场所、市场买卖债券、股票、期货、基金以及金融衍生产品等发生的损失', inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}, {key:'L26_C5'}, {key:'L26_C6', isReadonly:true}, {key:'L26_C7', isReadonly:true}] },
                { line: '27', text: '十一、打包出售资产损失', inputs: [{key:'L27_C1'}, {key:'L27_C2'}, {key:'L27_C3'}, {key:'L27_C4'}, {key:'L27_C5'}, {key:'L27_C6', isReadonly:true}, {key:'L27_C7', isReadonly:true}] },
                { line: '28', text: '十二、其他资产损失', inputs: [{key:'L28_C1'}, {key:'L28_C2'}, {key:'L28_C3'}, {key:'L28_C4'}, {key:'L28_C5'}, {key:'L28_C6', isReadonly:true}, {key:'L28_C7', isReadonly:true}] },
                { line: '29', text: '合计 (1+2+5+7+9+12+14+16+24+26+27+28)', isBold: true, inputs: [{key:'L29_C1', isReadonly:true}, {key:'L29_C2', isReadonly:true}, {key:'L29_C3', isReadonly:true}, {key:'L29_C4', isReadonly:true}, {key:'L29_C5', isReadonly:true}, {key:'L29_C6', isReadonly:true}, {key:'L29_C7', isReadonly:true}] },
                { line: '30', text: '其中：分支机构留存备查的资产损失', indent: 1, inputs: [{key:'L30_C1'}, {key:'L30_C2'}, {key:'L30_C3'}, {key:'L30_C4'}, {key:'L30_C5'}, {key:'L30_C6', isReadonly:true}, {key:'L30_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105090) return;
            const t = db.A105090;
            
            const sumRows = (target, sources) => {
                [1, 2, 3, 4, 5].forEach(c => {
                    t[`L${target}_C${c}`] = sources.reduce((acc, row) => acc + (t[`L${row}_C${c}`] || 0), 0);
                });
            };

            // 计算层级汇总
            sumRows(17, [18, 22]);
            sumRows(16, [17, 23]);
            sumRows(29, [1, 2, 5, 7, 9, 12, 14, 16, 24, 26, 27, 28]);

            // 列级运算
            for (let r = 1; r <= 30; r++) {
                t[`L${r}_C6`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = (t[`L${r}_C1`] || 0) + (t[`L${r}_C2`] || 0) - t[`L${r}_C6`];
            }
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
                { line: '2', text: '其中：以非货币性资产清偿债务', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3', isReadonly:true}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}, {key:'L2_C7', isReadonly:true}] },
                { line: '3', text: '债转股', indent: 2, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3', isReadonly:true}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}] },
                { line: '4', text: '二、股权收购', inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3', isReadonly:true}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '5', text: '其中：涉及跨境重组的股权收购', indent: 1, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3', isReadonly:true}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6', isReadonly:true}, {key:'L5_C7', isReadonly:true}] },
                { line: '6', text: '三、资产收购', inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3', isReadonly:true}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}] },
                { line: '7', text: '其中：涉及跨境重组的资产收购', indent: 1, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3', isReadonly:true}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6', isReadonly:true}, {key:'L7_C7', isReadonly:true}] },
                { line: '8', text: '四、企业合并 (9+10)', isBold: true, inputs: [{key:'L8_C1', isReadonly:true}, {key:'L8_C2', isReadonly:true}, {key:'L8_C3', isReadonly:true}, {key:'L8_C4', isReadonly:true}, {key:'L8_C5', isReadonly:true}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] },
                { line: '9', text: '（一）同一控制下企业合并', indent: 1, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3', isReadonly:true}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6', isReadonly:true}, {key:'L9_C7', isReadonly:true}] },
                { line: '10', text: '（二）非同一控制下企业合并', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}] },
                { line: '11', text: '五、企业分立', inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3', isReadonly:true}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6', isReadonly:true}, {key:'L11_C7', isReadonly:true}] },
                { line: '12', text: '六、非货币性资产对外投资', inputs: [{key:'L12_C1'}, {key:'L12_C2'}, {key:'L12_C3', isReadonly:true}, {key:'L12_C4'}, {key:'L12_C5'}, {key:'L12_C6', isReadonly:true}, {key:'L12_C7', isReadonly:true}] },
                { line: '13', text: '七、技术入股', inputs: [{key:'L13_C1'}, {key:'L13_C2'}, {key:'L13_C3', isReadonly:true}, {key:'L13_C4'}, {key:'L13_C5'}, {key:'L13_C6', isReadonly:true}, {key:'L13_C7', isReadonly:true}] },
                { line: '14', text: '八、股权划转、资产划转', inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3', isReadonly:true}, {key:'L14_C4'}, {key:'L14_C5'}, {key:'L14_C6', isReadonly:true}, {key:'L14_C7', isReadonly:true}] },
                { line: '15', text: '九、基础设施领域不动产投资信托基金（□原始权益人 □项目公司）', inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3', isReadonly:true}, {key:'L15_C4'}, {key:'L15_C5'}, {key:'L15_C6', isReadonly:true}, {key:'L15_C7', isReadonly:true}] },
                { line: '15.1', text: '（一）设立基础设施 REITs 前', indent: 1, inputs: [{key:'L15_1_C1'}, {key:'L15_1_C2'}, {key:'L15_1_C3', isReadonly:true}, {key:'L15_1_C4'}, {key:'L15_1_C5'}, {key:'L15_1_C6', isReadonly:true}, {key:'L15_1_C7', isReadonly:true}] },
                { line: '15.2', text: '（二）设立基础设施 REITs 阶段', indent: 1, inputs: [{key:'L15_2_C1'}, {key:'L15_2_C2'}, {key:'L15_2_C3', isReadonly:true}, {key:'L15_2_C4'}, {key:'L15_2_C5'}, {key:'L15_2_C6', isReadonly:true}, {key:'L15_2_C7', isReadonly:true}] },
                { line: '16', text: '十、其他', inputs: [{key:'L16_C1'}, {key:'L16_C2'}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4'}, {key:'L16_C5'}, {key:'L16_C6', isReadonly:true}, {key:'L16_C7', isReadonly:true}] },
                { line: '17', text: '合计 (1+4+6+8+11+12+13+14+15+16)', isBold: true, inputs: [{key:'L17_C1', isReadonly:true}, {key:'L17_C2', isReadonly:true}, {key:'L17_C3', isReadonly:true}, {key:'L17_C4', isReadonly:true}, {key:'L17_C5', isReadonly:true}, {key:'L17_C6', isReadonly:true}, {key:'L17_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105100) return;
            const t = db.A105100;
            
            const sumCols = (target, sources) => {
                [1, 2, 4, 5].forEach(c => {
                    t[`L${target}_C${c}`] = sources.reduce((acc, row) => acc + (t[`L${row}_C${c}`] || 0), 0);
                });
            };

            // 层级汇总
            sumCols(8, [9, 10]);
            sumCols(17, [1, 4, 6, 8, 11, 12, 13, 14, 15, 16]); // 注意这里根据表样加的是 15 主行，不含 15.1/15.2

            // 列级运算
            const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '15_1', '15_2', 16, 17];
            rows.forEach(r => {
                t[`L${r}_C3`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C1`] || 0);
                t[`L${r}_C6`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = t[`L${r}_C3`] + t[`L${r}_C6`];
            });
        }
    },

    // ==========================================
    // A105110 政策性搬迁纳税调整明细表
    // ==========================================
    A105110: {
        schema: {
            id: 'A105110',
            title: '政策性搬迁纳税调整明细表 (A105110)',
            columns: [
                { title: '行次', width: '10%' },
                { title: '项 目', width: '60%' },
                { title: '金 额', width: '30%' }
            ],
            rows: [
                { line: '1', text: '一、搬迁收入 (2+8)', isBold: true, inputs: [{key:'L1_C1', isReadonly:true}] },
                { line: '2', text: '（一）搬迁补偿收入 (3+4+5+6+7)', indent: 1, inputs: [{key:'L2_C1', isReadonly:true}] },
                { line: '3', text: '1.对被征用资产价值的补偿', indent: 2, inputs: [{key:'L3_C1'}] },
                { line: '4', text: '2.因搬迁、安置而给予的补偿', indent: 2, inputs: [{key:'L4_C1'}] },
                { line: '5', text: '3.对停产停业形成的损失而给予的补偿', indent: 2, inputs: [{key:'L5_C1'}] },
                { line: '6', text: '4.资产搬迁过程中遭到毁损而取得的保险赔款', indent: 2, inputs: [{key:'L6_C1'}] },
                { line: '7', text: '5.其他补偿收入', indent: 2, inputs: [{key:'L7_C1'}] },
                { line: '8', text: '（二）搬迁资产处置收入', indent: 1, inputs: [{key:'L8_C1'}] },
                { line: '9', text: '二、搬迁支出 (10+16)', isBold: true, inputs: [{key:'L9_C1', isReadonly:true}] },
                { line: '10', text: '（一）搬迁费用支出 (11+12+13+14+15)', indent: 1, inputs: [{key:'L10_C1', isReadonly:true}] },
                { line: '11', text: '1.安置职工实际发生的费用', indent: 2, inputs: [{key:'L11_C1'}] },
                { line: '12', text: '2.停工期间支付给职工的工资及福利费', indent: 2, inputs: [{key:'L12_C1'}] },
                { line: '13', text: '3.临时存放搬迁资产而发生的费用', indent: 2, inputs: [{key:'L13_C1'}] },
                { line: '14', text: '4.各类资产搬迁安装费用', indent: 2, inputs: [{key:'L14_C1'}] },
                { line: '15', text: '5.其他与搬迁相关的费用', indent: 2, inputs: [{key:'L15_C1'}] },
                { line: '16', text: '（二）搬迁资产处置支出', indent: 1, inputs: [{key:'L16_C1'}] },
                { line: '17', text: '三、搬迁所得或损失 (1-9)', isBold: true, inputs: [{key:'L17_C1', isReadonly:true}] },
                { line: '18', text: '四、应计入本年应纳税所得额的搬迁所得或损失 (19+20+21)', isBold: true, inputs: [{key:'L18_C1', isReadonly:true}] },
                { line: '19', text: '其中：搬迁所得', indent: 1, inputs: [{key:'L19_C1'}] },
                { line: '20', text: '搬迁损失一次性扣除', indent: 1, inputs: [{key:'L20_C1'}] },
                { line: '21', text: '搬迁损失分期扣除', indent: 1, inputs: [{key:'L21_C1'}] },
                { line: '22', text: '五、计入当期损益的搬迁收益或损失', isBold: true, inputs: [{key:'L22_C1'}] },
                { line: '23', text: '六、以前年度搬迁损失当期扣除金额', isBold: true, inputs: [{key:'L23_C1'}] },
                { line: '24', text: '七、纳税调整金额 (18-22-23)', isBold: true, inputs: [{key:'L24_C1', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105110) return;
            const t = db.A105110;

            t['L2_C1'] = (t['L3_C1'] || 0) + (t['L4_C1'] || 0) + (t['L5_C1'] || 0) + (t['L6_C1'] || 0) + (t['L7_C1'] || 0);
            t['L1_C1'] = t['L2_C1'] + (t['L8_C1'] || 0);

            t['L10_C1'] = (t['L11_C1'] || 0) + (t['L12_C1'] || 0) + (t['L13_C1'] || 0) + (t['L14_C1'] || 0) + (t['L15_C1'] || 0);
            t['L9_C1'] = t['L10_C1'] + (t['L16_C1'] || 0);

            t['L17_C1'] = t['L1_C1'] - t['L9_C1'];

            t['L18_C1'] = (t['L19_C1'] || 0) + (t['L20_C1'] || 0) + (t['L21_C1'] || 0);

            t['L24_C1'] = t['L18_C1'] - (t['L22_C1'] || 0) - (t['L23_C1'] || 0);
        }
    }
};