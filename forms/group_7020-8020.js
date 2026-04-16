// forms/group_7020-8020.js

export const formBundle = {
    // ==========================================
    // A107020 所得减免优惠明细表
    // ==========================================
    A107020: {
        schema: {
            id: 'A107020',
            title: '所得减免优惠明细表 (A107020)',
            columns: [
                {title:'行次', width:'4%'}, {title:'减免项目', width:'12%'},
                {title:'项目名称(1)', width:'10%'}, {title:'优惠事项(2)', width:'10%'}, {title:'优惠方式(3)', width:'8%'},
                {title:'项目收入(4)', width:'7%'}, {title:'项目成本(5)', width:'7%'}, {title:'相关税费(6)', width:'7%'},
                {title:'分摊费用(7)', width:'7%'}, {title:'纳税调整(8)', width:'7%'}, 
                {title:'免税项目(9)', width:'7%'}, {title:'减半项目(10)', width:'7%'}, {title:'减免所得额(11)', width:'7%'}
            ],
            rows: [
                { line: '1', text: '一、农、林、牧、渔业项目', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2', type:'text'}, {key:'L1_C3', type:'text'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9'}, {key:'L1_C10'}, {key:'L1_C11', isReadonly:true}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2', type:'text'}, {key:'L2_C3', type:'text'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9'}, {key:'L2_C10'}, {key:'L2_C11', isReadonly:true}] },
                { line: '3', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C4', isReadonly:true}, {key:'L3_C5', isReadonly:true}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}, {key:'L3_C8', isReadonly:true}, {key:'L3_C9', isReadonly:true}, {key:'L3_C10', isReadonly:true}, {key:'L3_C11', isReadonly:true}] },
                { line: '4', text: '二、国家重点扶持的公共基础设施项目', inputs: [{key:'L4_C1', type:'text'}, {key:'L4_C2', type:'text'}, {key:'L4_C3', type:'text'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}, {key:'L4_C8'}, {key:'L4_C9'}, {key:'L4_C10'}, {key:'L4_C11', isReadonly:true}] },
                { line: '5', text: '', inputs: [{key:'L5_C1', type:'text'}, {key:'L5_C2', type:'text'}, {key:'L5_C3', type:'text'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}, {key:'L5_C8'}, {key:'L5_C9'}, {key:'L5_C10'}, {key:'L5_C11', isReadonly:true}] },
                { line: '6', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C4', isReadonly:true}, {key:'L6_C5', isReadonly:true}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}, {key:'L6_C8', isReadonly:true}, {key:'L6_C9', isReadonly:true}, {key:'L6_C10', isReadonly:true}, {key:'L6_C11', isReadonly:true}] },
                { line: '7', text: '三、符合条件的环境保护、节能节水项目', inputs: [{key:'L7_C1', type:'text'}, {key:'L7_C2', type:'text'}, {key:'L7_C3', type:'text'}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6'}, {key:'L7_C7'}, {key:'L7_C8'}, {key:'L7_C9'}, {key:'L7_C10'}, {key:'L7_C11', isReadonly:true}] },
                { line: '8', text: '', inputs: [{key:'L8_C1', type:'text'}, {key:'L8_C2', type:'text'}, {key:'L8_C3', type:'text'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6'}, {key:'L8_C7'}, {key:'L8_C8'}, {key:'L8_C9'}, {key:'L8_C10'}, {key:'L8_C11', isReadonly:true}] },
                { line: '9', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C4', isReadonly:true}, {key:'L9_C5', isReadonly:true}, {key:'L9_C6', isReadonly:true}, {key:'L9_C7', isReadonly:true}, {key:'L9_C8', isReadonly:true}, {key:'L9_C9', isReadonly:true}, {key:'L9_C10', isReadonly:true}, {key:'L9_C11', isReadonly:true}] },
                { line: '10', text: '四、符合条件的技术转让项目', inputs: [{key:'L10_C1', type:'text'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6'}, {key:'L10_C7'}, {key:'L10_C8'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '11', text: '', inputs: [{key:'L11_C1', type:'text'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6'}, {key:'L11_C7'}, {key:'L11_C8'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '12', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L12_C4', isReadonly:true}, {key:'L12_C5', isReadonly:true}, {key:'L12_C6', isReadonly:true}, {key:'L12_C7', isReadonly:true}, {key:'L12_C8', isReadonly:true}, {key:'L12_C9'}, {key:'L12_C10'}, {key:'L12_C11', isReadonly:true}] },
                { line: '13', text: '五、清洁发展机制项目', inputs: [{key:'L13_C1', type:'text'}, {isAsterisk:true}, {key:'L13_C3', type:'text'}, {key:'L13_C4'}, {key:'L13_C5'}, {key:'L13_C6'}, {key:'L13_C7'}, {key:'L13_C8'}, {key:'L13_C9'}, {key:'L13_C10'}, {key:'L13_C11', isReadonly:true}] },
                { line: '14', text: '', inputs: [{key:'L14_C1', type:'text'}, {isAsterisk:true}, {key:'L14_C3', type:'text'}, {key:'L14_C4'}, {key:'L14_C5'}, {key:'L14_C6'}, {key:'L14_C7'}, {key:'L14_C8'}, {key:'L14_C9'}, {key:'L14_C10'}, {key:'L14_C11', isReadonly:true}] },
                { line: '15', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L15_C4', isReadonly:true}, {key:'L15_C5', isReadonly:true}, {key:'L15_C6', isReadonly:true}, {key:'L15_C7', isReadonly:true}, {key:'L15_C8', isReadonly:true}, {key:'L15_C9', isReadonly:true}, {key:'L15_C10', isReadonly:true}, {key:'L15_C11', isReadonly:true}] },
                { line: '16', text: '六、符合条件的节能服务公司实施的合同能源管理项目', inputs: [{key:'L16_C1', type:'text'}, {isAsterisk:true}, {key:'L16_C3', type:'text'}, {key:'L16_C4'}, {key:'L16_C5'}, {key:'L16_C6'}, {key:'L16_C7'}, {key:'L16_C8'}, {key:'L16_C9'}, {key:'L16_C10'}, {key:'L16_C11', isReadonly:true}] },
                { line: '17', text: '', inputs: [{key:'L17_C1', type:'text'}, {isAsterisk:true}, {key:'L17_C3', type:'text'}, {key:'L17_C4'}, {key:'L17_C5'}, {key:'L17_C6'}, {key:'L17_C7'}, {key:'L17_C8'}, {key:'L17_C9'}, {key:'L17_C10'}, {key:'L17_C11', isReadonly:true}] },
                { line: '18', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L18_C4', isReadonly:true}, {key:'L18_C5', isReadonly:true}, {key:'L18_C6', isReadonly:true}, {key:'L18_C7', isReadonly:true}, {key:'L18_C8', isReadonly:true}, {key:'L18_C9', isReadonly:true}, {key:'L18_C10', isReadonly:true}, {key:'L18_C11', isReadonly:true}] },
                { line: '19', text: '七、线宽小于130纳米（含）的集成电路生产项目', inputs: [{key:'L19_C1', type:'text'}, {isAsterisk:true}, {key:'L19_C3', type:'text'}, {key:'L19_C4'}, {key:'L19_C5'}, {key:'L19_C6'}, {key:'L19_C7'}, {key:'L19_C8'}, {key:'L19_C9'}, {key:'L19_C10'}, {key:'L19_C11', isReadonly:true}] },
                { line: '20', text: '', inputs: [{key:'L20_C1', type:'text'}, {isAsterisk:true}, {key:'L20_C3', type:'text'}, {key:'L20_C4'}, {key:'L20_C5'}, {key:'L20_C6'}, {key:'L20_C7'}, {key:'L20_C8'}, {key:'L20_C9'}, {key:'L20_C10'}, {key:'L20_C11', isReadonly:true}] },
                { line: '21', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L21_C4', isReadonly:true}, {key:'L21_C5', isReadonly:true}, {key:'L21_C6', isReadonly:true}, {key:'L21_C7', isReadonly:true}, {key:'L21_C8', isReadonly:true}, {key:'L21_C9', isReadonly:true}, {key:'L21_C10', isReadonly:true}, {key:'L21_C11', isReadonly:true}] },
                { line: '22', text: '八、线宽小于65纳米（含）或投资额超过150亿元的集成电路生产项目', inputs: [{key:'L22_C1', type:'text'}, {isAsterisk:true}, {key:'L22_C3', type:'text'}, {key:'L22_C4'}, {key:'L22_C5'}, {key:'L22_C6'}, {key:'L22_C7'}, {key:'L22_C8'}, {key:'L22_C9'}, {key:'L22_C10'}, {key:'L22_C11', isReadonly:true}] },
                { line: '23', text: '', inputs: [{key:'L23_C1', type:'text'}, {isAsterisk:true}, {key:'L23_C3', type:'text'}, {key:'L23_C4'}, {key:'L23_C5'}, {key:'L23_C6'}, {key:'L23_C7'}, {key:'L23_C8'}, {key:'L23_C9'}, {key:'L23_C10'}, {key:'L23_C11', isReadonly:true}] },
                { line: '24', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L24_C4', isReadonly:true}, {key:'L24_C5', isReadonly:true}, {key:'L24_C6', isReadonly:true}, {key:'L24_C7', isReadonly:true}, {key:'L24_C8', isReadonly:true}, {key:'L24_C9', isReadonly:true}, {key:'L24_C10', isReadonly:true}, {key:'L24_C11', isReadonly:true}] },
                { line: '25', text: '九、线宽小于28纳米（含）的集成电路生产项目', inputs: [{key:'L25_C1', type:'text'}, {isAsterisk:true}, {key:'L25_C3', type:'text'}, {key:'L25_C4'}, {key:'L25_C5'}, {key:'L25_C6'}, {key:'L25_C7'}, {key:'L25_C8'}, {key:'L25_C9'}, {key:'L25_C10'}, {key:'L25_C11', isReadonly:true}] },
                { line: '26', text: '', inputs: [{key:'L26_C1', type:'text'}, {isAsterisk:true}, {key:'L26_C3', type:'text'}, {key:'L26_C4'}, {key:'L26_C5'}, {key:'L26_C6'}, {key:'L26_C7'}, {key:'L26_C8'}, {key:'L26_C9'}, {key:'L26_C10'}, {key:'L26_C11', isReadonly:true}] },
                { line: '27', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L27_C4', isReadonly:true}, {key:'L27_C5', isReadonly:true}, {key:'L27_C6', isReadonly:true}, {key:'L27_C7', isReadonly:true}, {key:'L27_C8', isReadonly:true}, {key:'L27_C9', isReadonly:true}, {key:'L27_C10', isReadonly:true}, {key:'L27_C11', isReadonly:true}] },
                { line: '28', text: '十、其他', inputs: [{key:'L28_C1', type:'text'}, {key:'L28_C2', type:'text'}, {key:'L28_C3', type:'text'}, {key:'L28_C4'}, {key:'L28_C5'}, {key:'L28_C6'}, {key:'L28_C7'}, {key:'L28_C8'}, {key:'L28_C9'}, {key:'L28_C10'}, {key:'L28_C11', isReadonly:true}] },
                { line: '29', text: '', inputs: [{key:'L29_C1', type:'text'}, {key:'L29_C2', type:'text'}, {key:'L29_C3', type:'text'}, {key:'L29_C4'}, {key:'L29_C5'}, {key:'L29_C6'}, {key:'L29_C7'}, {key:'L29_C8'}, {key:'L29_C9'}, {key:'L29_C10'}, {key:'L29_C11', isReadonly:true}] },
                { line: '30', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L30_C4', isReadonly:true}, {key:'L30_C5', isReadonly:true}, {key:'L30_C6', isReadonly:true}, {key:'L30_C7', isReadonly:true}, {key:'L30_C8', isReadonly:true}, {key:'L30_C9', isReadonly:true}, {key:'L30_C10', isReadonly:true}, {key:'L30_C11', isReadonly:true}] },
                { line: '31', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L31_C4', isReadonly:true}, {key:'L31_C5', isReadonly:true}, {key:'L31_C6', isReadonly:true}, {key:'L31_C7', isReadonly:true}, {key:'L31_C8', isReadonly:true}, {key:'L31_C9', isReadonly:true}, {key:'L31_C10', isReadonly:true}, {key:'L31_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107020) return;
            const t = db.A107020;
            const detailRows = [1,2, 4,5, 7,8, 10,11, 13,14, 16,17, 19,20, 22,23, 25,26, 28,29];
            const subtotalPairs = [
                {s:3, rows:[1,2]}, {s:6, rows:[4,5]}, {s:9, rows:[7,8]}, {s:12, rows:[10,11]},
                {s:15, rows:[13,14]}, {s:18, rows:[16,17]}, {s:21, rows:[19,20]},
                {s:24, rows:[22,23]}, {s:27, rows:[25,26]}, {s:30, rows:[28,29]}
            ];
            // 计算 11 = 9 + 10 * 50%
            detailRows.forEach(r => {
                if(t[`L${r}_C11`] !== undefined) {
                    t[`L${r}_C11`] = (t[`L${r}_C9`] || 0) + (t[`L${r}_C10`] || 0) * 0.5;
                }
            });
            // 汇总计算
            subtotalPairs.forEach(pair => {
                for(let c=4; c<=11; c++) {
                    if (pair.s === 12 && (c===9 || c===10)) continue; // 12行的 9, 10列手动输入
                    let sum = 0;
                    pair.rows.forEach(r => sum += (t[`L${r}_C${c}`] || 0));
                    t[`L${pair.s}_C${c}`] = sum;
                }
            });
            t.L12_C11 = (t.L12_C9 || 0) + (t.L12_C10 || 0) * 0.5; // 特殊处理技术转让的减免
            
            // 总计
            for(let c=4; c<=11; c++) {
                t[`L31_C${c}`] = (t[`L3_C${c}`]||0) + (t[`L6_C${c}`]||0) + (t[`L9_C${c}`]||0) + (t[`L12_C${c}`]||0) + (t[`L15_C${c}`]||0) + (t[`L18_C${c}`]||0) + (t[`L21_C${c}`]||0) + (t[`L24_C${c}`]||0) + (t[`L27_C${c}`]||0) + (t[`L30_C${c}`]||0);
            }
        }
    },

    // ==========================================
    // A107030 抵扣应纳税所得额明细表
    // ==========================================
    A107030: {
        schema: {
            id: 'A107030',
            title: '抵扣应纳税所得额明细表 (A107030)',
            columns: [
                {title:'行次', width:'6%'}, {title:'项 目', width:'40%'},
                {title:'合计金额(1=2+3)', width:'18%'}, {title:'投资中小高新技术(2)', width:'18%'}, {title:'投资初创科技型(3)', width:'18%'}
            ],
            rows: [
                { line: '1', text: '本年新增的符合条件的股权投资额', inputs: [{key:'L1_C1', isReadonly:true}, {key:'L1_C2'}, {key:'L1_C3'}] },
                { line: '2', text: '税收规定的抵扣率', inputs: [{key:'L2_C1', isReadonly:true, value:0.7}, {key:'L2_C2', isReadonly:true, value:0.7}, {key:'L2_C3', isReadonly:true, value:0.7}] },
                { line: '3', text: '本年新增的可抵扣的股权投资额 (1×2)', inputs: [{key:'L3_C1', isReadonly:true}, {key:'L3_C2', isReadonly:true}, {key:'L3_C3', isReadonly:true}] },
                { line: '4', text: '以前年度结转的尚未抵扣的股权投资余额', inputs: [{key:'L4_C1'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '5', text: '本年可抵扣的股权投资额 (3+4)', inputs: [{key:'L5_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '6', text: '本年可用于抵扣的应纳税所得额', inputs: [{key:'L6_C1'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '7', text: '本年实际抵扣应纳税所得额', inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}] },
                { line: '8', text: '结转以后年度抵扣的股权投资余额', inputs: [{key:'L8_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '9', text: '本年从有限合伙创投企业应分得的应纳税所得额', inputs: [{key:'L9_C1', isReadonly:true}, {key:'L9_C2'}, {key:'L9_C3'}] },
                { line: '10', text: '本年新增的可抵扣投资额', inputs: [{key:'L10_C1', isReadonly:true}, {key:'L10_C2'}, {key:'L10_C3'}] },
                { line: '11', text: '以前年度结转的可抵扣投资额余额', inputs: [{key:'L11_C1'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '12', text: '本年可抵扣投资额 (10+11)', inputs: [{key:'L12_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '13', text: '本年实际抵扣应分得的应纳税所得额', inputs: [{key:'L13_C1'}, {key:'L13_C2'}, {key:'L13_C3'}] },
                { line: '14', text: '结转以后年度抵扣的投资额余额', inputs: [{key:'L14_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '15', text: '三、抵扣应纳税所得额合计 (7+13)', isBold:true, inputs: [{key:'L15_C1', isReadonly:true}, {key:'L15_C2', isReadonly:true}, {key:'L15_C3', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107030) return;
            const t = db.A107030;
            [2, 3].forEach(c => {
                t[`L2_C${c}`] = 0.7; // 70% 抵扣率
                t[`L3_C${c}`] = (t[`L1_C${c}`] || 0) * t[`L2_C${c}`];
                t[`L1_C1`] = (t[`L1_C2`] || 0) + (t[`L1_C3`] || 0);
                t[`L3_C1`] = (t[`L3_C2`] || 0) + (t[`L3_C3`] || 0);
                t[`L9_C1`] = (t[`L9_C2`] || 0) + (t[`L9_C3`] || 0);
                t[`L10_C1`] = (t[`L10_C2`] || 0) + (t[`L10_C3`] || 0);
            });
            t.L5_C1 = (t.L3_C1 || 0) + (t.L4_C1 || 0);
            t.L8_C1 = (t.L5_C1 || 0) - (t.L7_C1 || 0);
            t.L12_C1 = (t.L10_C1 || 0) + (t.L11_C1 || 0);
            t.L14_C1 = (t.L12_C1 || 0) - (t.L13_C1 || 0);

            [1, 2, 3].forEach(c => {
                t[`L15_C${c}`] = (t[`L7_C${c}`] || 0) + (t[`L13_C${c}`] || 0);
            });
        }
    },

    // ==========================================
    // A107041 高新技术企业优惠情况及明细表
    // ==========================================
    A107041: {
        schema: {
            id: 'A107041',
            title: '高新技术企业优惠情况及明细表 (A107041)',
            columns: [{title:'行次', width:'8%'}, {title:'项 目', width:'52%'}, {title:'指标1', width:'10%'}, {title:'指标2', width:'10%'}, {title:'指标3', width:'10%'}, {title:'指标4(合计)', width:'10%'}],
            rows: [
                { line: '1', text: '高新技术企业证书编号 / 取得时间', inputs: [{key:'L1_C1', type:'text', colspan:4}] },
                { line: '2', text: '对企业主要产品发挥核心支持作用的技术所属范围', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2', type:'text'}, {key:'L2_C3', type:'text'}, {key:'L2_C4', type:'text'}] },
                { line: '4', text: '一、本年高新技术产品（服务）收入 (5+6)', isBold:true, inputs: [{key:'L4_C4', isReadonly:true}] },
                { line: '5', text: '其中：产品（服务）收入', indent:1, inputs: [{key:'L5_C4'}] },
                { line: '6', text: '技术性收入', indent:1, inputs: [{key:'L6_C4'}] },
                { line: '7', text: '二、本年企业总收入 (8-9)', isBold:true, inputs: [{key:'L7_C4', isReadonly:true}] },
                { line: '8', text: '其中：收入总额', indent:1, inputs: [{key:'L8_C4'}] },
                { line: '9', text: '不征税收入', indent:1, inputs: [{key:'L9_C4'}] },
                { line: '10', text: '三、高新收入占总收入比例 (4÷7)', isBold:true, inputs: [{key:'L10_C4', isReadonly:true}] },
                { line: '11', text: '四、本年科技人员数', isBold:true, inputs: [{key:'L11_C4'}] },
                { line: '12', text: '五、本年职工总数', isBold:true, inputs: [{key:'L12_C4'}] },
                { line: '13', text: '六、科技人员占比 (11÷12)', isBold:true, inputs: [{key:'L13_C4', isReadonly:true}] },
                { line: '14', text: '高新创发费用归集年度', isBold:true, inputs: [{key:'L14_C1', type:'text', value:'本年度', isReadonly:true}, {key:'L14_C2', type:'text', value:'前一年度', isReadonly:true}, {key:'L14_C3', type:'text', value:'前二年度', isReadonly:true}, {key:'L14_C4', type:'text', value:'合计', isReadonly:true}] },
                { line: '15', text: '七、归集的高新研发费用金额 (16+25)', inputs: [{key:'L15_C1', isReadonly:true}, {key:'L15_C2', isReadonly:true}, {key:'L15_C3', isReadonly:true}, {key:'L15_C4', isReadonly:true}] },
                { line: '16', text: '（一）内部研究开发投入 (17+..+22+24)', indent:1, inputs: [{key:'L16_C1', isReadonly:true}, {key:'L16_C2', isReadonly:true}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4', isReadonly:true}] },
                { line: '17', text: '1. 人员人工费用', indent:2, inputs: [{key:'L17_C1'}, {key:'L17_C2'}, {key:'L17_C3'}, {key:'L17_C4', isReadonly:true}] },
                { line: '18', text: '2. 直接投入费用', indent:2, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4', isReadonly:true}] },
                { line: '19', text: '3. 折旧费用与长期待摊费用', indent:2, inputs: [{key:'L19_C1'}, {key:'L19_C2'}, {key:'L19_C3'}, {key:'L19_C4', isReadonly:true}] },
                { line: '20', text: '4. 无形资产摊销费用', indent:2, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4', isReadonly:true}] },
                { line: '21', text: '5. 设计费用', indent:2, inputs: [{key:'L21_C1'}, {key:'L21_C2'}, {key:'L21_C3'}, {key:'L21_C4', isReadonly:true}] },
                { line: '22', text: '6. 装备调试费与试验费用', indent:2, inputs: [{key:'L22_C1'}, {key:'L22_C2'}, {key:'L22_C3'}, {key:'L22_C4', isReadonly:true}] },
                { line: '23', text: '7. 其他费用', indent:2, inputs: [{key:'L23_C1'}, {key:'L23_C2'}, {key:'L23_C3'}, {key:'L23_C4', isReadonly:true}] },
                { line: '24', text: '其中：可计入研发费用的其他费用', indent:3, inputs: [{key:'L24_C1'}, {key:'L24_C2'}, {key:'L24_C3'}, {key:'L24_C4', isReadonly:true}] },
                { line: '25', text: '（二）委托外部研发费用 [(26+28)×80%]', indent:1, inputs: [{key:'L25_C1', isReadonly:true}, {key:'L25_C2', isReadonly:true}, {key:'L25_C3', isReadonly:true}, {key:'L25_C4', isReadonly:true}] },
                { line: '26', text: '1. 境内的外部研发费', indent:2, inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4', isReadonly:true}] },
                { line: '27', text: '2. 境外的外部研发费', indent:2, inputs: [{key:'L27_C1'}, {key:'L27_C2'}, {key:'L27_C3'}, {key:'L27_C4', isReadonly:true}] },
                { line: '28', text: '其中：可计入研发费用的境外的外部研发费', indent:3, inputs: [{key:'L28_C1'}, {key:'L28_C2'}, {key:'L28_C3'}, {key:'L28_C4', isReadonly:true}] },
                { line: '29', text: '八、销售（营业）收入', isBold:true, inputs: [{key:'L29_C1'}, {key:'L29_C2'}, {key:'L29_C3'}, {key:'L29_C4', isReadonly:true}] },
                { line: '30', text: '九、三年研发费用占销售收入的比例', isBold:true, inputs: [{key:'L30_C4', isReadonly:true}] },
                { line: '31', text: '减免税额：高新技术企业', isBold:true, inputs: [{key:'L31_C4'}] },
                { line: '32', text: '特区和浦东新区定期减免税额', isBold:true, inputs: [{key:'L32_C4'}] }
            ]
        },
        logic: (db) => {
            if (!db.A107041) return;
            const t = db.A107041;
            t.L4_C4 = (t.L5_C4 || 0) + (t.L6_C4 || 0);
            t.L7_C4 = (t.L8_C4 || 0) - (t.L9_C4 || 0);
            t.L10_C4 = t.L7_C4 ? (t.L4_C4 / t.L7_C4).toFixed(4) : 0;
            t.L13_C4 = t.L12_C4 ? (t.L11_C4 / t.L12_C4).toFixed(4) : 0;

            for (let c = 1; c <= 3; c++) {
                t[`L16_C${c}`] = (t[`L17_C${c}`]||0) + (t[`L18_C${c}`]||0) + (t[`L19_C${c}`]||0) + (t[`L20_C${c}`]||0) + (t[`L21_C${c}`]||0) + (t[`L22_C${c}`]||0) + (t[`L24_C${c}`]||0);
                t[`L25_C${c}`] = ((t[`L26_C${c}`]||0) + (t[`L28_C${c}`]||0)) * 0.8;
                t[`L15_C${c}`] = (t[`L16_C${c}`]||0) + (t[`L25_C${c}`]||0);
            }
            // 横向合计(C4)
            for (let r = 15; r <= 29; r++) {
                if (r===23) continue;
                t[`L${r}_C4`] = (t[`L${r}_C1`] || 0) + (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0);
            }
            t.L30_C4 = t.L29_C4 ? (t.L15_C4 / t.L29_C4).toFixed(4) : 0;
        }
    },

    // ==========================================
    // A107042 软件、集成电路企业优惠情况及明细表
    // ==========================================
    A107042: {
        schema: {
            id: 'A107042',
            title: '软件、集成电路企业优惠情况及明细表 (A107042)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目 / 指标', width:'70%'}, {title:'数量 \\ 金额', width:'20%'}],
            rows: [
                { line: '1', text: '一、企业本年月平均职工总人数', isBold:true, inputs: [{key:'L1'}] },
                { line: '2', text: '其中：大专以上学历职工人数', indent:1, inputs: [{key:'L2'}] },
                { line: '3', text: '研究开发人员人数', indent:1, inputs: [{key:'L3'}] },
                { line: '4', text: '二、研发费用总额', isBold:true, inputs: [{key:'L4'}] },
                { line: '5', text: '其中：企业在中国境内发生的研发费用金额', indent:1, inputs: [{key:'L5'}] },
                { line: '6', text: '三、企业收入总额', isBold:true, inputs: [{key:'L6'}] },
                { line: '7', text: '四、符合条件的销售（营业）收入', isBold:true, inputs: [{key:'L7'}] },
                { line: '8', text: '其中：自主设计、自主开发销售及服务收入', indent:1, inputs: [{key:'L8'}] },
                { line: '9', text: '五、拥有核心关键技术和属于本企业的知识产权总数', isBold:true, inputs: [{key:'L9'}] },
                { line: '10', text: '其中：发明专利', indent:1, inputs: [{key:'L10'}] },
                { line: '11', text: '集成电路布图设计登记', indent:1, inputs: [{key:'L11'}] },
                { line: '12', text: '计算机软件著作权', indent:1, inputs: [{key:'L12'}] },
                { line: '13', text: '是否从事8英寸及以下集成电路生产', inputs: [{key:'L13', type:'text'}] },
                { line: '14', text: '是否按照开发、销售嵌入式软件企业条件享受政策', inputs: [{key:'L14', type:'text'}] },
                { line: '15', text: '重点集成电路设计领域和重点软件领域', inputs: [{key:'L15', type:'text'}] },
                { line: '16', text: '减免税额', isBold:true, inputs: [{key:'L16'}] }
            ]
        },
        logic: (db) => {
            if (!db.A107042) return;
            // 简单数据收集，无强计算逻辑
        }
    },

    // ==========================================
    // A107050 税额抵免优惠明细表
    // ==========================================
    A107050: {
        schema: {
            id: 'A107050',
            title: '税额抵免优惠明细表 (A107050)',
            columns: [
                {title:'行次', width:'4%'}, {title:'类别', width:'6%'}, {title:'年度(1)', width:'10%'},
                {title:'当年抵免前应纳税额(2)', width:'14%'}, {title:'当年允许抵免的投资额(3)', width:'14%'}, 
                {title:'当年实际可抵免税额(4)', width:'14%'}, {title:'以前年度已抵免小计(5)', width:'13%'}, 
                {title:'本年实际抵免税额(6)', width:'13%'}, {title:'结转以后可抵免税额(7)', width:'12%'}
            ],
            rows: [
                { line: '1', text: '抵免情况', text2: '前五年度', inputs: [{key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {isAsterisk:true}] },
                { line: '2', text: '', text2: '前四年度', inputs: [{key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}] },
                { line: '3', text: '', text2: '前三年度', inputs: [{key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7'}] },
                { line: '4', text: '', text2: '前二年度', inputs: [{key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}] },
                { line: '5', text: '', text2: '前一年度', inputs: [{key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}] },
                { line: '6', text: '', text2: '本年度', inputs: [{key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {isAsterisk:true}, {key:'L6_C6'}, {key:'L6_C7'}] },
                { line: '7', text: '', text2: '本年实际抵免合计', isBold:true, inputs: [{key:'L7_C2', isReadonly:true}, {key:'L7_C3', isReadonly:true}, {key:'L7_C4', isReadonly:true}, {key:'L7_C5', isReadonly:true}, {key:'L7_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '8', text: '', text2: '可结转以后年度抵免合计', isBold:true, inputs: [{key:'L8_C2', isReadonly:true}, {key:'L8_C3', isReadonly:true}, {key:'L8_C4', isReadonly:true}, {key:'L8_C5', isReadonly:true}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] },
                { line: '9', text: '本年投资', text2: '投资类型', inputs: [{key:'L9_C2', type:'text', value:'投资额', isReadonly:true}, {key:'L9_C3', type:'text', value:'抵免比例', isReadonly:true}, {key:'L9_C4', type:'text', value:'可抵免税额', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '9.1', text: '', text2: '项目明细1', inputs: [{key:'L9_1_C2'}, {key:'L9_1_C3'}, {key:'L9_1_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '9.2', text: '', text2: '项目明细2', inputs: [{key:'L9_2_C2'}, {key:'L9_2_C3'}, {key:'L9_2_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107050) return;
            const t = db.A107050;
            let sum6 = 0; let sum7 = 0;
            for(let r=1; r<=6; r++) {
                sum6 += (t[`L${r}_C6`] || 0);
                if (r > 1) sum7 += (t[`L${r}_C7`] || 0);
            }
            t.L7_C6 = sum6;
            t.L8_C7 = sum7;
        }
    },

    // ==========================================
    // A108000 境外所得税收抵免明细表 (超级矩阵)
    // ==========================================
    A108000: {
        schema: {
            id: 'A108000',
            title: '境外所得税收抵免明细表 (A108000)',
            columns: [
                {title:'行次', width:'3%'}, {title:'国家(1)', width:'5%'},
                {title:'税前所得(2)', width:'5%'}, {title:'调整后所得(3)', width:'5%'}, {title:'弥补亏损(4)', width:'5%'},
                {title:'应纳税所得(5=3-4)', width:'5%'}, {title:'抵减境内亏损(6)', width:'5%'}, {title:'抵减后所得(7=5-6)', width:'5%'},
                {title:'税率(8)', width:'4%'}, {title:'应纳税额(9=7×8)', width:'5%'}, {title:'可抵免税额(10)', width:'5%'},
                {title:'抵免限额(11)', width:'5%'}, {title:'本年可抵免(12)', width:'5%'}, {title:'未超限额余额(13=11-12)', width:'5%'},
                {title:'可抵免以前年度(14)', width:'5%'}, {title:'简易低于12.5%(15)', width:'5%'}, {title:'简易12.5%(16)', width:'5%'},
                {title:'简易25%(17)', width:'5%'}, {title:'简易小计(18=15+16+17)', width:'5%'}, {title:'抵免合计(19=12+14+18)', width:'5%'}
            ],
            rows: [
                { line: '1', text: '', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5', isReadonly:true}, {key:'L1_C6'}, {key:'L1_C7', isReadonly:true}, {key:'L1_C8', value:0.25}, {key:'L1_C9', isReadonly:true}, {key:'L1_C10'}, {key:'L1_C11'}, {key:'L1_C12'}, {key:'L1_C13', isReadonly:true}, {key:'L1_C14'}, {key:'L1_C15'}, {key:'L1_C16'}, {key:'L1_C17'}, {key:'L1_C18', isReadonly:true}, {key:'L1_C19', isReadonly:true}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5', isReadonly:true}, {key:'L2_C6'}, {key:'L2_C7', isReadonly:true}, {key:'L2_C8', value:0.25}, {key:'L2_C9', isReadonly:true}, {key:'L2_C10'}, {key:'L2_C11'}, {key:'L2_C12'}, {key:'L2_C13', isReadonly:true}, {key:'L2_C14'}, {key:'L2_C15'}, {key:'L2_C16'}, {key:'L2_C17'}, {key:'L2_C18', isReadonly:true}, {key:'L2_C19', isReadonly:true}] },
                { line: '3', text: '', inputs: [{key:'L3_C1', type:'text'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5', isReadonly:true}, {key:'L3_C6'}, {key:'L3_C7', isReadonly:true}, {key:'L3_C8', value:0.25}, {key:'L3_C9', isReadonly:true}, {key:'L3_C10'}, {key:'L3_C11'}, {key:'L3_C12'}, {key:'L3_C13', isReadonly:true}, {key:'L3_C14'}, {key:'L3_C15'}, {key:'L3_C16'}, {key:'L3_C17'}, {key:'L3_C18', isReadonly:true}, {key:'L3_C19', isReadonly:true}] },
                { line: '4', text: '', inputs: [{key:'L4_C1', type:'text'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5', isReadonly:true}, {key:'L4_C6'}, {key:'L4_C7', isReadonly:true}, {key:'L4_C8', value:0.25}, {key:'L4_C9', isReadonly:true}, {key:'L4_C10'}, {key:'L4_C11'}, {key:'L4_C12'}, {key:'L4_C13', isReadonly:true}, {key:'L4_C14'}, {key:'L4_C15'}, {key:'L4_C16'}, {key:'L4_C17'}, {key:'L4_C18', isReadonly:true}, {key:'L4_C19', isReadonly:true}] },
                { line: '5', text: '', inputs: [{key:'L5_C1', type:'text'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5', isReadonly:true}, {key:'L5_C6'}, {key:'L5_C7', isReadonly:true}, {key:'L5_C8', value:0.25}, {key:'L5_C9', isReadonly:true}, {key:'L5_C10'}, {key:'L5_C11'}, {key:'L5_C12'}, {key:'L5_C13', isReadonly:true}, {key:'L5_C14'}, {key:'L5_C15'}, {key:'L5_C16'}, {key:'L5_C17'}, {key:'L5_C18', isReadonly:true}, {key:'L5_C19', isReadonly:true}] },
                { line: '10', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {isAsterisk:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}, {key:'L10_C12', isReadonly:true}, {key:'L10_C13', isReadonly:true}, {key:'L10_C14', isReadonly:true}, {key:'L10_C15', isReadonly:true}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true}, {key:'L10_C18', isReadonly:true}, {key:'L10_C19', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A108000) return;
            const t = db.A108000;
            // 矩阵横向计算
            for(let r=1; r<=9; r++) {
                if(t[`L${r}_C8`] === undefined) t[`L${r}_C8`] = 0.25; 
                t[`L${r}_C5`] = (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C6`] || 0);
                t[`L${r}_C9`] = t[`L${r}_C7`] * t[`L${r}_C8`];
                t[`L${r}_C13`] = (t[`L${r}_C11`] || 0) - (t[`L${r}_C12`] || 0);
                t[`L${r}_C18`] = (t[`L${r}_C15`] || 0) + (t[`L${r}_C16`] || 0) + (t[`L${r}_C17`] || 0);
                t[`L${r}_C19`] = (t[`L${r}_C12`] || 0) + (t[`L${r}_C14`] || 0) + t[`L${r}_C18`];
            }
            // 矩阵纵向合计
            const cols = [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
            cols.forEach(c => {
                let sum = 0;
                for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L10_C${c}`] = sum;
            });
        }
    },

    // ==========================================
    // A108010 境外所得纳税调整后所得明细表
    // ==========================================
    A108010: {
        schema: {
            id: 'A108010',
            title: '境外所得纳税调整后所得明细表 (A108010)',
            columns: [
                {title:'行次', width:'3%'}, {title:'国家(1)', width:'5%'},
                {title:'分支利润(2)', width:'4%'}, {title:'股息红利(3)', width:'4%'}, {title:'利息(4)', width:'3%'},
                {title:'租金(5)', width:'3%'}, {title:'特许权费(6)', width:'3%'}, {title:'财产转让(7)', width:'4%'},
                {title:'其他(8)', width:'3%'}, {title:'小计(9=2..8)', width:'4%'}, 
                {title:'直接缴纳(10)', width:'4%'}, {title:'间接负担(11)', width:'4%'}, {title:'税收饶让(12)', width:'4%'},
                {title:'小计(13)', width:'4%'}, {title:'税前所得(14)', width:'4%'}, {title:'分支收入调整(15)', width:'4%'},
                {title:'分支分摊扣除(16)', width:'4%'}, {title:'对应调整成本(17)', width:'4%'}, {title:'调整后所得(18)', width:'4%'},
                {title:'投资利润(19)', width:'4%'}, {title:'分摊扣除(20)', width:'4%'}, {title:'调整额(21)', width:'4%'},
                {title:'调整后所得(22)', width:'4%'}, {title:'应纳税额(23)', width:'4%'}, {title:'对应股息(24)', width:'4%'},
                {title:'对应税额(25)', width:'4%'}, {title:'免税小计(26=22+24)', width:'4%'}
            ],
            rows: [
                { line: '1', text: '', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9', isReadonly:true}, {key:'L1_C10'}, {key:'L1_C11'}, {key:'L1_C12'}, {key:'L1_C13', isReadonly:true}, {key:'L1_C14', isReadonly:true}, {key:'L1_C15'}, {key:'L1_C16'}, {key:'L1_C17'}, {key:'L1_C18', isReadonly:true}, {key:'L1_C19'}, {key:'L1_C20'}, {key:'L1_C21'}, {key:'L1_C22', isReadonly:true}, {key:'L1_C23'}, {key:'L1_C24'}, {key:'L1_C25'}, {key:'L1_C26', isReadonly:true}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9', isReadonly:true}, {key:'L2_C10'}, {key:'L2_C11'}, {key:'L2_C12'}, {key:'L2_C13', isReadonly:true}, {key:'L2_C14', isReadonly:true}, {key:'L2_C15'}, {key:'L2_C16'}, {key:'L2_C17'}, {key:'L2_C18', isReadonly:true}, {key:'L2_C19'}, {key:'L2_C20'}, {key:'L2_C21'}, {key:'L2_C22', isReadonly:true}, {key:'L2_C23'}, {key:'L2_C24'}, {key:'L2_C25'}, {key:'L2_C26', isReadonly:true}] },
                { line: '3', text: '', inputs: [{key:'L3_C1', type:'text'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7'}, {key:'L3_C8'}, {key:'L3_C9', isReadonly:true}, {key:'L3_C10'}, {key:'L3_C11'}, {key:'L3_C12'}, {key:'L3_C13', isReadonly:true}, {key:'L3_C14', isReadonly:true}, {key:'L3_C15'}, {key:'L3_C16'}, {key:'L3_C17'}, {key:'L3_C18', isReadonly:true}, {key:'L3_C19'}, {key:'L3_C20'}, {key:'L3_C21'}, {key:'L3_C22', isReadonly:true}, {key:'L3_C23'}, {key:'L3_C24'}, {key:'L3_C25'}, {key:'L3_C26', isReadonly:true}] },
                { line: '10', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}, {key:'L10_C12', isReadonly:true}, {key:'L10_C13', isReadonly:true}, {key:'L10_C14', isReadonly:true}, {key:'L10_C15', isReadonly:true}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true}, {key:'L10_C18', isReadonly:true}, {key:'L10_C19', isReadonly:true}, {key:'L10_C20', isReadonly:true}, {key:'L10_C21', isReadonly:true}, {key:'L10_C22', isReadonly:true}, {key:'L10_C23', isReadonly:true}, {key:'L10_C24', isReadonly:true}, {key:'L10_C25', isReadonly:true}, {key:'L10_C26', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A108010) return;
            const t = db.A108010;
            for(let r=1; r<=9; r++) {
                t[`L${r}_C9`] = (t[`L${r}_C2`]||0) + (t[`L${r}_C3`]||0) + (t[`L${r}_C4`]||0) + (t[`L${r}_C5`]||0) + (t[`L${r}_C6`]||0) + (t[`L${r}_C7`]||0) + (t[`L${r}_C8`]||0);
                t[`L${r}_C13`] = (t[`L${r}_C10`]||0) + (t[`L${r}_C11`]||0) + (t[`L${r}_C12`]||0);
                t[`L${r}_C14`] = t[`L${r}_C9`] + t[`L${r}_C13`];
                t[`L${r}_C18`] = t[`L${r}_C14`] + (t[`L${r}_C15`]||0) - (t[`L${r}_C16`]||0) - (t[`L${r}_C17`]||0);
                t[`L${r}_C22`] = (t[`L${r}_C19`]||0) - (t[`L${r}_C20`]||0) + (t[`L${r}_C21`]||0);
                t[`L${r}_C26`] = t[`L${r}_C22`] + (t[`L${r}_C24`]||0);
            }
            for(let c=2; c<=26; c++) {
                let sum = 0;
                for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L10_C${c}`] = sum;
            }
        }
    },

    // ==========================================
    // A108020 境外分支机构弥补亏损明细表
    // ==========================================
    A108020: {
        schema: {
            id: 'A108020',
            title: '境外分支机构弥补亏损明细表 (A108020)',
            columns: [
                {title:'行次', width:'4%'}, {title:'国家(1)', width:'16%'},
                {title:'以前未弥补非实际(2)', width:'10%'}, {title:'本年发生非实际(3)', width:'10%'}, 
                {title:'本年弥补非实际(4)', width:'10%'}, {title:'结转非实际(5)', width:'10%'},
                {title:'以前未弥补实际(6)', width:'10%'}, {title:'本年发生实际(7)', width:'10%'},
                {title:'本年弥补实际(8)', width:'10%'}, {title:'结转实际(9)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5', isReadonly:true}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9', isReadonly:true}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5', isReadonly:true}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9', isReadonly:true}] },
                { line: '3', text: '', inputs: [{key:'L3_C1', type:'text'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5', isReadonly:true}, {key:'L3_C6'}, {key:'L3_C7'}, {key:'L3_C8'}, {key:'L3_C9', isReadonly:true}] },
                { line: '10', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A108020) return;
            const t = db.A108020;
            for(let r=1; r<=9; r++) {
                t[`L${r}_C5`] = (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C9`] = (t[`L${r}_C6`] || 0) + (t[`L${r}_C7`] || 0) - (t[`L${r}_C8`] || 0);
            }
            [2, 3, 4, 5, 6, 7, 8, 9].forEach(c => {
                let sum = 0;
                for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L10_C${c}`] = sum;
            });
        }
    }
};