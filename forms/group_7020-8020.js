// forms/group_7020-8020.js

export const formBundle = {
    // ==========================================
    // A107041 高新技术企业优惠情况及明细表 (极特殊跨列排版还原)
    // ==========================================
    A107041: {
        schema: {
            id: 'A107041',
            title: '高新技术企业优惠情况及明细表 (A107041)',
            headers: [[{title: '基本信息', colspan: 7}]],
            rows: [
                { inputs: [
                    {type: 'label', value: '1', style: 'text-align:center;width:5%;'}, 
                    {type: 'label', value: '高新技术企业证书编号', colspan: 2, style: 'text-align:center;width:25%;'}, 
                    {key: 'L1_C1', type: 'text', colspan: 2}, 
                    {type: 'label', value: '高新技术企业证书取得时间', style: 'text-align:center;width:20%;'}, 
                    {key: 'L1_C2', type: 'text'}
                ]},
                { inputs: [
                    {type: 'label', value: '2', rowspan: 2, style: 'text-align:center;'}, 
                    {type: 'label', value: '对企业主要产品（服务）发挥核心支持作用的技术所属范围', rowspan: 2, colspan: 2, style: 'text-align:center;padding:10px;'}, 
                    {type: 'label', value: '国家重点支持的高新技术领域', colspan: 4, style: 'text-align:center;'}
                ]},
                { inputs: [
                    {type: 'label', value: '一级领域', style: 'text-align:center;', colspan: 2}, 
                    {type: 'label', value: '二级领域', style: 'text-align:center;'}, 
                    {type: 'label', value: '三级领域', style: 'text-align:center;'}
                ]},
                { inputs: [{type: 'label', value: '3', style: 'text-align:center;'}, {type: 'label', value: '关键指标情况', colspan: 6, style: 'font-weight:bold;text-align:center;'}] },
                { inputs: [
                    {type: 'label', value: '4', style: 'text-align:center;'}, {type: 'label', value: '收入<br>指标', rowspan: 7, style: 'text-align:center;width:8%;'}, 
                    {type: 'label', value: '一、本年高新技术产品（服务）收入 (5+6)', style: 'text-align:left;'}, {key: 'L4_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}
                ]},
                { inputs: [{type: 'label', value: '5', style: 'text-align:center;'}, {type: 'label', value: '其中：产品（服务）收入', style: 'text-align:left;padding-left:30px;'}, {key: 'L5_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '6', style: 'text-align:center;'}, {type: 'label', value: '技术性收入', style: 'text-align:left;padding-left:30px;'}, {key: 'L6_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '7', style: 'text-align:center;'}, {type: 'label', value: '二、本年企业总收入 (8-9)', style: 'text-align:left;'}, {key: 'L7_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '8', style: 'text-align:center;'}, {type: 'label', value: '其中：收入总额', style: 'text-align:left;padding-left:30px;'}, {key: 'L8_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '9', style: 'text-align:center;'}, {type: 'label', value: '不征税收入', style: 'text-align:left;padding-left:30px;'}, {key: 'L9_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '10', style: 'text-align:center;'}, {type: 'label', value: '三、高新收入占总收入比例 (4÷7)', style: 'text-align:left;'}, {key: 'L10_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                
                { inputs: [{type: 'label', value: '11', style: 'text-align:center;'}, {type: 'label', value: '人员<br>指标', rowspan: 3, style: 'text-align:center;'}, {type: 'label', value: '四、本年科技人员数', style: 'text-align:left;'}, {key: 'L11_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '12', style: 'text-align:center;'}, {type: 'label', value: '五、本年职工总数', style: 'text-align:left;'}, {key: 'L12_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '13', style: 'text-align:center;'}, {type: 'label', value: '六、科技人员占比 (11÷12)', style: 'text-align:left;'}, {key: 'L13_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                
                { inputs: [
                    {type: 'label', value: '14', style: 'text-align:center;'}, {type: 'label', value: '高新创发费用归集年度', colspan: 2, style: 'text-align:center;font-weight:bold;'}, 
                    {type: 'label', value: '本年度<br>1', style: 'text-align:center;width:12%;'}, {type: 'label', value: '前一年度<br>2', style: 'text-align:center;width:12%;'}, {type: 'label', value: '前二年度<br>3', style: 'text-align:center;width:12%;'}, {type: 'label', value: '合计<br>4', style: 'text-align:center;width:12%;'}
                ]},
                { inputs: [{type: 'label', value: '15', style: 'text-align:center;'}, {type: 'label', value: '研发<br>费用<br>指标', rowspan: 14, style: 'text-align:center;'}, {type: 'label', value: '七、归集的高新研发费用金额 (16+25)', style: 'text-align:left;'}, {key: 'L15_C1', isReadonly:true}, {key: 'L15_C2', isReadonly:true}, {key: 'L15_C3', isReadonly:true}, {key: 'L15_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '16', style: 'text-align:center;'}, {type: 'label', value: '（一）内部研究开发投入 (17+..+22+24)', style: 'text-align:left;padding-left:20px;'}, {key: 'L16_C1', isReadonly:true}, {key: 'L16_C2', isReadonly:true}, {key: 'L16_C3', isReadonly:true}, {key: 'L16_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '17', style: 'text-align:center;'}, {type: 'label', value: '1. 人员人工费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L17_C1'}, {key: 'L17_C2'}, {key: 'L17_C3'}, {key: 'L17_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '18', style: 'text-align:center;'}, {type: 'label', value: '2. 直接投入费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L18_C1'}, {key: 'L18_C2'}, {key: 'L18_C3'}, {key: 'L18_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '19', style: 'text-align:center;'}, {type: 'label', value: '3. 折旧费用与长期待摊费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L19_C1'}, {key: 'L19_C2'}, {key: 'L19_C3'}, {key: 'L19_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '20', style: 'text-align:center;'}, {type: 'label', value: '4. 无形资产摊销费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L20_C1'}, {key: 'L20_C2'}, {key: 'L20_C3'}, {key: 'L20_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '21', style: 'text-align:center;'}, {type: 'label', value: '5. 设计费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L21_C1'}, {key: 'L21_C2'}, {key: 'L21_C3'}, {key: 'L21_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '22', style: 'text-align:center;'}, {type: 'label', value: '6. 装备调试费与试验费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L22_C1'}, {key: 'L22_C2'}, {key: 'L22_C3'}, {key: 'L22_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '23', style: 'text-align:center;'}, {type: 'label', value: '7. 其他费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L23_C1'}, {key: 'L23_C2'}, {key: 'L23_C3'}, {key: 'L23_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '24', style: 'text-align:center;'}, {type: 'label', value: '其中：可计入研发费用的其他费用', style: 'text-align:left;padding-left:60px;'}, {key: 'L24_C1'}, {key: 'L24_C2'}, {key: 'L24_C3'}, {key: 'L24_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '25', style: 'text-align:center;'}, {type: 'label', value: '（二）委托外部研发费用 [(26+28)×80%]', style: 'text-align:left;padding-left:20px;'}, {key: 'L25_C1', isReadonly:true}, {key: 'L25_C2', isReadonly:true}, {key: 'L25_C3', isReadonly:true}, {key: 'L25_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '26', style: 'text-align:center;'}, {type: 'label', value: '1. 境内的外部研发费', style: 'text-align:left;padding-left:40px;'}, {key: 'L26_C1'}, {key: 'L26_C2'}, {key: 'L26_C3'}, {key: 'L26_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '27', style: 'text-align:center;'}, {type: 'label', value: '2. 境外的外部研发费', style: 'text-align:left;padding-left:40px;'}, {key: 'L27_C1'}, {key: 'L27_C2'}, {key: 'L27_C3'}, {key: 'L27_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '28', style: 'text-align:center;'}, {type: 'label', value: '其中：可计入研发费用的境外的外部研发费', style: 'text-align:left;padding-left:60px;'}, {key: 'L28_C1'}, {key: 'L28_C2'}, {key: 'L28_C3'}, {key: 'L28_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '29', style: 'text-align:center;'}, {type: 'label', value: '八、销售（营业）收入', colspan: 2, style: 'text-align:left;'}, {key: 'L29_C1'}, {key: 'L29_C2'}, {key: 'L29_C3'}, {key: 'L29_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '30', style: 'text-align:center;'}, {type: 'label', value: '九、三年研发费用占销售收入比例', colspan: 2, style: 'text-align:left;'}, {key: 'L30_C4', isReadonly:true, colspan: 4}] },
                { inputs: [{type: 'label', value: '31', style: 'text-align:center;'}, {type: 'label', value: '减免<br>税额', rowspan: 2, style: 'text-align:center;'}, {type: 'label', value: '十、国家需要重点扶持的高新技术企业减免', style: 'text-align:left;'}, {key: 'L31_C4', colspan: 4}] },
                { inputs: [{type: 'label', value: '32', style: 'text-align:center;'}, {type: 'label', value: '十一、经济特区和上海浦东新区定期减免', style: 'text-align:left;'}, {key: 'L32_C4', colspan: 4}] }
            ]
        },
        logic: (db) => {
            if (!db.A107041) return;
            const t = db.A107041;
            t.L4_C1 = (t.L5_C1 || 0) + (t.L6_C1 || 0);
            t.L7_C1 = (t.L8_C1 || 0) - (t.L9_C1 || 0);
            t.L10_C1 = t.L7_C1 ? (t.L4_C1 / t.L7_C1).toFixed(4) : 0;
            t.L13_C1 = t.L12_C1 ? (t.L11_C1 / t.L12_C1).toFixed(4) : 0;

            for (let c = 1; c <= 3; c++) {
                t[`L16_C${c}`] = (t[`L17_C${c}`]||0) + (t[`L18_C${c}`]||0) + (t[`L19_C${c}`]||0) + (t[`L20_C${c}`]||0) + (t[`L21_C${c}`]||0) + (t[`L22_C${c}`]||0) + (t[`L24_C${c}`]||0);
                t[`L25_C${c}`] = ((t[`L26_C${c}`]||0) + (t[`L28_C${c}`]||0)) * 0.8;
                t[`L15_C${c}`] = (t[`L16_C${c}`]||0) + (t[`L25_C${c}`]||0);
            }
            for (let r = 15; r <= 29; r++) {
                if (r===23) continue;
                t[`L${r}_C4`] = (t[`L${r}_C1`] || 0) + (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0);
            }
            t.L30_C4 = t.L29_C4 ? (t.L15_C4 / t.L29_C4).toFixed(4) : 0;
        }
    },

    // ==========================================
    // A107050 税额抵免优惠明细表 (表头跨列多级还原)
    // ==========================================
    A107050: {
        schema: {
            id: 'A107050',
            title: '税额抵免优惠明细表 (A107050)',
            headers: [
                [
                    {title: '行次', width: '4%'},
                    {title: '类别', width: '6%'},
                    {title: '项目', width: '12%'},
                    {title: '年度\\n1', width: '8%'},
                    {title: '当年抵免前应纳税\\n额\\n2', width: '10%'},
                    {title: '当年允许抵免的专\\n用设备投资额\\n3', width: '10%'},
                    {title: '当年实际可抵免税\\n额\\n4', width: '10%'},
                    {title: '以前年度已抵免额\\n小计\\n5', width: '10%'},
                    {title: '本年实际抵免的各\\n年度税额\\n6', width: '10%'},
                    {title: '可结转以后年度抵\\n免的税额\\n7', width: '10%'}
                ]
            ],
            rows: [
                { inputs: [{type:'label', value:'1', style:'text-align:center'}, {type:'label', value:'抵免<br>情况', rowspan:6, style:'text-align:center'}, {type:'label', value:'前五年度', style:'text-align:center'}, {key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {isAsterisk:true}] },
                { inputs: [{type:'label', value:'2', style:'text-align:center'}, {type:'label', value:'前四年度', style:'text-align:center'}, {key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}] },
                { inputs: [{type:'label', value:'3', style:'text-align:center'}, {type:'label', value:'前三年度', style:'text-align:center'}, {key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7'}] },
                { inputs: [{type:'label', value:'4', style:'text-align:center'}, {type:'label', value:'前二年度', style:'text-align:center'}, {key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}] },
                { inputs: [{type:'label', value:'5', style:'text-align:center'}, {type:'label', value:'前一年度', style:'text-align:center'}, {key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}] },
                { inputs: [{type:'label', value:'6', style:'text-align:center'}, {type:'label', value:'本年度', style:'text-align:center'}, {key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {isAsterisk:true}, {key:'L6_C6'}, {key:'L6_C7'}] },
                { inputs: [{type:'label', value:'7', style:'text-align:center'}, {type:'label', value:'本年实际抵免税额合计', colspan:2, style:'font-weight:bold;text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C6', isReadonly:true}, {isAsterisk:true}] },
                { inputs: [{type:'label', value:'8', style:'text-align:center'}, {type:'label', value:'可结转以后年度抵免的税额合计', colspan:2, style:'font-weight:bold;text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C7', isReadonly:true}] },
                { inputs: [
                    {type:'label', value:'9', rowspan:4, style:'text-align:center'}, {type:'label', value:'本年<br>允许<br>抵免<br>专用<br>设备<br>投资<br>情况', rowspan:4, style:'text-align:center'},
                    {type:'label', value:'投资类型', colspan:2, style:'text-align:center;font-weight:bold'}, {type:'label', value:'投资额', colspan:2, style:'text-align:center;font-weight:bold'},
                    {type:'label', value:'抵免比例', colspan:2, style:'text-align:center;font-weight:bold'}, {type:'label', value:'可抵免税额', colspan:2, style:'text-align:center;font-weight:bold'}
                ]},
                { inputs: [{type:'label', value:'9.1', style:'text-align:center'}, {key:'L9_1_C1', type:'text', colspan:2}, {key:'L9_1_C2', colspan:2}, {key:'L9_1_C3', colspan:2}, {key:'L9_1_C4', colspan:2}] },
                { inputs: [{type:'label', value:'9.2', style:'text-align:center'}, {key:'L9_2_C1', type:'text', colspan:2}, {key:'L9_2_C2', colspan:2}, {key:'L9_2_C3', colspan:2}, {key:'L9_2_C4', colspan:2}] },
                { inputs: [{type:'label', value:'9.3', style:'text-align:center'}, {key:'L9_3_C1', type:'text', colspan:2}, {key:'L9_3_C2', colspan:2}, {key:'L9_3_C3', colspan:2}, {key:'L9_3_C4', colspan:2}] }
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
            t.L7_C6 = sum6; t.L8_C7 = sum7;
        }
    },

    // ==========================================
    // A108000 境外所得税收抵免明细表 (超复杂表头矩阵还原)
    // ==========================================
    A108000: {
        schema: {
            id: 'A108000',
            title: '境外所得税收抵免明细表 (A108000)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '3%'}, {title: '国家\\n(地区)', rowspan: 2, width: '5%'},
                    {title: '境外\\n税前\\n所得\\n2', rowspan: 2, width: '5%'}, {title: '境外\\n所得\\n纳税\\n调整\\n后所\\n得\\n3', rowspan: 2, width: '5%'},
                    {title: '弥补\\n境外\\n以前\\n年度\\n亏损\\n4', rowspan: 2, width: '5%'}, {title: '境外\\n应纳\\n税所\\n得额\\n5\\n(3-4)', rowspan: 2, width: '5%'},
                    {title: '抵减\\n境内\\n亏损\\n6', rowspan: 2, width: '5%'}, {title: '抵减\\n境内\\n亏损\\n后的\\n境外\\n应纳\\n税所\\n得额\\n7\\n(5-6)', rowspan: 2, width: '5%'},
                    {title: '税率\\n8', rowspan: 2, width: '4%'}, {title: '境外所\\n得应纳\\n税额\\n9\\n(7×8)', rowspan: 2, width: '5%'},
                    {title: '境外\\n所得\\n可抵\\n免税\\n额\\n10', rowspan: 2, width: '5%'}, {title: '境外\\n所得\\n抵免\\n限额\\n11', rowspan: 2, width: '5%'},
                    {title: '本年\\n可抵\\n免境\\n外所\\n得税\\n额\\n12', rowspan: 2, width: '5%'}, {title: '未超\\n过境\\n外所\\n得税\\n抵免\\n限额\\n的余\\n额\\n13\\n(11-12)', rowspan: 2, width: '5%'},
                    {title: '本年\\n可抵\\n免以\\n前年\\n度未\\n抵免\\n境外\\n所得\\n税额\\n14', rowspan: 2, width: '5%'},
                    {title: '按简易办法计算', colspan: 4}, {title: '境外所\\n得抵免\\n所得税\\n额合计\\n19(12+14\\n+18)', rowspan: 2, width: '5%'}
                ],
                [
                    {title: '按低于\\n12.5%\\n的实际\\n税率计\\n算的抵\\n免额\\n15', width: '5%'}, {title: '按\\n12.5\\n%计\\n算的\\n抵免\\n额\\n16', width: '5%'},
                    {title: '按\\n25%\\n计算\\n的抵\\n免额\\n17', width: '5%'}, {title: '小计\\n18(15+\\n16+17)', width: '5%'}
                ]
            ],
            rows: [
                ...Array.from({length: 9}).map((_, i) => ({
                    line: `${i+1}`, inputs: [
                        {key:`L${i+1}_C1`, type:'text'}, {key:`L${i+1}_C2`}, {key:`L${i+1}_C3`}, {key:`L${i+1}_C4`}, {key:`L${i+1}_C5`, isReadonly:true}, 
                        {key:`L${i+1}_C6`}, {key:`L${i+1}_C7`, isReadonly:true}, {key:`L${i+1}_C8`, value:0.25}, {key:`L${i+1}_C9`, isReadonly:true}, 
                        {key:`L${i+1}_C10`}, {key:`L${i+1}_C11`}, {key:`L${i+1}_C12`}, {key:`L${i+1}_C13`, isReadonly:true}, {key:`L${i+1}_C14`}, 
                        {key:`L${i+1}_C15`}, {key:`L${i+1}_C16`}, {key:`L${i+1}_C17`}, {key:`L${i+1}_C18`, isReadonly:true}, {key:`L${i+1}_C19`, isReadonly:true}
                    ]
                })),
                { line: '10', text: '合计', isBold:true, inputs: [
                    {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true},
                    {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {isAsterisk:true}, {key:'L10_C9', isReadonly:true},
                    {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}, {key:'L10_C12', isReadonly:true}, {key:'L10_C13', isReadonly:true},
                    {key:'L10_C14', isReadonly:true}, {key:'L10_C15', isReadonly:true}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true},
                    {key:'L10_C18', isReadonly:true}, {key:'L10_C19', isReadonly:true}
                ]}
            ]
        },
        logic: (db) => {
            if (!db.A108000) return;
            const t = db.A108000;
            for(let r=1; r<=9; r++) {
                if(t[`L${r}_C8`] === undefined) t[`L${r}_C8`] = 0.25; 
                t[`L${r}_C5`] = (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C6`] || 0);
                t[`L${r}_C9`] = t[`L${r}_C7`] * t[`L${r}_C8`];
                t[`L${r}_C13`] = (t[`L${r}_C11`] || 0) - (t[`L${r}_C12`] || 0);
                t[`L${r}_C18`] = (t[`L${r}_C15`] || 0) + (t[`L${r}_C16`] || 0) + (t[`L${r}_C17`] || 0);
                t[`L${r}_C19`] = (t[`L${r}_C12`] || 0) + (t[`L${r}_C14`] || 0) + t[`L${r}_C18`];
            }
            const cols = [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
            cols.forEach(c => { let sum = 0; for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0); t[`L10_C${c}`] = sum; });
        }
    }
};