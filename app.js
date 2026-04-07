// ===== DATA =====
const EXAM_DATE=new Date(2026,4,16,8,0),START_DATE=new Date(2026,3,7);
const SUBJECTS=[
  {id:'qm',name:'Quant 数量方法',weight:'6-9%',hours:15,color:'#4fc3f7'},
  {id:'fsa',name:'FSA 财务报表分析',weight:'13-17%',hours:28,color:'#ff6b6b'},
  {id:'fi',name:'Fixed Income 固定收益',weight:'11-14%',hours:22,color:'#a78bfa'},
  {id:'equity',name:'Equity 权益投资',weight:'10-14%',hours:20,color:'#00d26a'},
  {id:'corp',name:'Corporate 公司金融',weight:'6-9%',hours:10,color:'#ff9f43'},
  {id:'econ',name:'Economics 经济学',weight:'6-9%',hours:12,color:'#fd79a8'},
  {id:'alts',name:'Alts 另类投资',weight:'7-10%',hours:8,color:'#ffc107'},
  {id:'pm',name:'Portfolio 组合管理',weight:'8-12%',hours:12,color:'#6c5ce7'},
  {id:'deriv',name:'Derivatives 衍生品',weight:'5-8%',hours:8,color:'#55efc4'},
  {id:'ethics',name:'Ethics 道德',weight:'15-20%',hours:25,color:'#fab1a0'},
];
// 39-day plan: Day 1 = Apr 7 (Tue). Morning study 8:10-9:10 on workdays (7:30 wake, piano till 8:10).
const PLAN=[
{day:1,date:'4/7(二)',title:'QM：货币时间价值+描述统计',subject:'qm',tasks:'☀️ 8:10-9:10 TVM: PV,FV,年金,永续年金,NPV,IRR\n🍜 12:30-13:30 刷题15题\n🌙 21:30-22:45 描述统计:均值/中位数/众数,σ,CV,偏度/峰度',tip:'PV=FV/(1+r)^n · 永续PV=PMT/r'},
{day:2,date:'4/8(三)',title:'QM：概率论+概率分布',subject:'qm',tasks:'☀️ 8:10-9:10 条件概率,贝叶斯,期望值,方差\n🍜 12:30-13:30 刷题15题\n🌙 21:30-22:45 正态分布(Z分数,68-95-99),t分布',tip:'P(A|B)=P(AB)/P(B) · Z=(X-μ)/σ'},
{day:3,date:'4/9(四)',title:'QM：抽样估计+假设检验',subject:'qm',tasks:'☀️ 8:10-9:10 CLT,置信区间,z vs t检验\n🍜 12:30-13:30 刷题15题+回顾错题\n🌙 21:30-22:45 假设检验:H₀/H₁,Type I/II,P值',tip:'σ已知or n≥30→z · σ未知且n<30→t'},
{day:4,date:'4/10(五)',title:'FSA(1/6)：框架+利润表',subject:'fsa',tasks:'☀️ 8:10-9:10 IFRS vs GAAP差异,概念框架\n🍜 12:30-13:30 刷FSA题15题\n🌙 21:30-22:45 利润表:收入确认5步法,费用配比,EPS\n⚡ 19-21点 QM知识树整理',tip:'听完立刻做题！'},
{day:5,date:'4/11(六)⭐',title:'FSA(2-3/6)：资产负债表+现金流',subject:'fsa',tasks:'☀️ 8:30-12:00 资产负债表A=L+E;存货FIFO/LIFO;现金流CFO(间接法)\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 长期资产:资本化vs费用化,折旧,减值+做FSA题40题\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:30 所得税DTA/DTL+整理QM&FSA知识树',tip:'间接法CFO:净利润+折旧-非经营±营运资本=CFO'},
{day:6,date:'4/12(日)⭐',title:'FSA(4/6)：负债/租赁+比率+杜邦',subject:'fsa',tasks:'☀️ 8:30-12:00 债券会计+租赁(IFRS16 vs GAAP)+报告质量\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 财务比率全家桶+杜邦+FSA综合50题\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 错题分析+整理FSA知识树+公式卡',tip:'ROE=净利润率×周转率×权益乘数'},
{day:7,date:'4/13(日)⭐',title:'FSA(5/6)：公司间投资+补强',subject:'fsa',tasks:'☀️ 8:30-12:00 公司间投资(<20%公允/20-50%权益/50%+合并)\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 FSA综合30题+错题\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 回看弱项+整理FSA完整知识树',tip:'每科学完马上整理知识树！'},
{day:8,date:'4/14(一)',title:'FSA(6/6)：综合测试+知识树',subject:'fsa',tasks:'☀️ 8:10-9:10 FSA综合测试30题限时\n🍜 12:30-13:30 错题分析\n🌙 21:30-22:45 整理FSA完整知识树',tip:'FSA最难最重要！'},
{day:9,date:'4/15(二)',title:'FI(1/4)：债券基础+估值',subject:'fi',tasks:'☀️ 8:10-9:10 债券特征,折现估值,价格-收益率反向\n🍜 12:30-13:30 刷FI题15题\n🌙 21:30-22:45 YTM,当前收益率,全价vs净价',tip:'票面<YTM→折价 · >YTM→溢价'},
{day:10,date:'4/16(三)',title:'FI(2/4)：利率风险+久期/凸性',subject:'fi',tasks:'☀️ 8:10-9:10 久期,凸性,利率敏感性因素\n🍜 12:30-13:30 刷FI题15题\n🌙 21:30-22:45 久期计算+凸性效应',tip:'久期↑→敏感性↑'},
{day:11,date:'4/17(四)',title:'FI(3/4)：债券类型+ABS',subject:'fi',tasks:'☀️ 8:10-9:10 可赎回/回售/转换/FRN/零息\n🍜 12:30-13:30 刷FI题15题\n🌙 21:30-22:45 ABS/MBS/提前偿付+信用分析\n⚡ 19-21点 FI综合30题',tip:''},
{day:12,date:'4/18(五)',title:'FI(4/4)综合+Equity开始',subject:'fi',tasks:'☀️ 8:10-9:10 FI综合30题\n🍜 12:30-13:30 FI错题\n🌙 21:30-22:45 整理FI知识树+Equity笔记\n⚡ 19-21点 FI综合20题',tip:''},
{day:13,date:'4/19(六)⭐',title:'Equity估值(核心!)',subject:'equity',tasks:'☀️ 8:30-12:00 市场组织+EMH+DDM(Gordon)+P/E+EV/EBITDA\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 综合40题+整理Equity知识树\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 回顾前2周公式卡+速查表',tip:'Gordon:V₀=D₁/(ke-g)'},
{day:14,date:'4/20(日)⭐',title:'Corp+Econ开始',subject:'corp',tasks:'☀️ 8:30-12:00 Corp:治理/ESG+资本预算(NPV,IRR)+WACC+杠杆\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 Corp综合+整理知识树+Econ(1/2):供需+弹性\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 Econ:4种市场结构+MR=MC',tip:'WACC=wd×rd×(1-t)+wp×rp+we×re'},
{day:15,date:'4/21(一)',title:'Econ(2/2)：宏观+知识树',subject:'econ',tasks:'☀️ 8:10-9:10 GDP+AD/AS+商业周期+货币/财政政策\n🍜 12:30-13:30 刷Econ题15题\n🌙 21:30-22:45 国际贸易+汇率+整理Econ知识树',tip:'GDP=C+I+G+(X-M)'},
{day:16,date:'4/22(二)',title:'PM(1/2)：组合理论',subject:'pm',tasks:'☀️ 8:10-9:10 IPS+回报衡量(HPR/TWR/MWR)\n🍜 12:30-13:30 刷PM题15题\n🌙 21:30-22:45 组合方差+相关系数+有效前沿',tip:'σp²=wA²σA²+wB²σB²+2wAwBσAσBρ'},
{day:17,date:'4/23(三)',title:'PM(2/2)：CAPM+综合',subject:'pm',tasks:'☀️ 8:10-9:10 CAPM/SML+Beta+CML vs SML\n🍜 12:30-13:30 PM综合15题\n🌙 21:30-22:45 整理PM知识树+公式卡',tip:'CAPM:E(Ri)=Rf+β(Rm-Rf) · 夏普=(Rp-Rf)/σp'},
{day:18,date:'4/24(四)',title:'Alts：对冲/PE/房地产/商品',subject:'alts',tasks:'☀️ 8:10-9:10 对冲(2+20),PE(J曲线),房地产(NOI/Cap Rate)\n🍜 12:30-13:30 刷Alts题15题\n🌙 21:30-22:45 大宗商品+整理Alts知识树',tip:'另类最容易拿分'},
{day:19,date:'4/25(五)',title:'Derivatives：远期/期货/期权',subject:'deriv',tasks:'☀️ 8:10-9:10 远期/期货/互换基础\n🍜 12:30-13:30 刷Deriv题15题\n🌙 21:30-22:45 期权payoff+Put-Call Parity\n⚡ 19-21点 Deriv综合20题',tip:'Call=max(0,ST-X) · P+S=C+PV(X)'},
{day:20,date:'4/26(六)⭐',title:'三小科收尾+半程复习',subject:'review',tasks:'☀️ 8:30-12:00 整理Alts+Deriv知识树+回顾全部知识树\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 全科混合测试50题\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 错题分析+所有公式卡复习',tip:'衍生品太难可放弃'},
{day:21,date:'4/27(日)⭐',title:'Ethics(1/4)：准则+Std I-III',subject:'ethics',tasks:'☀️ 8:30-12:00 6项准则+Std I(专业性)+Std II(MNPI/马赛克)\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 道德情景30题+Std III(客户:忠诚/公平/适合性)\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 错题+回顾',tip:'法律冲突→更严格 · 公平≠平等'},
{day:22,date:'4/28(一)',title:'Ethics(2/4)：Std IV-V',subject:'ethics',tasks:'☀️ 8:10-9:10 Std IV(雇主)+Std V(记录保存7年)\n🍜 12:30-13:30 道德情景15题\n🌙 21:30-22:45 道德错题复盘',tip:'交易优先:客户>雇主>个人'},
{day:23,date:'4/29(二)',title:'Ethics(3/4)：Std VI-VII+GIPS',subject:'ethics',tasks:'☀️ 8:10-9:10 Std VI(利益冲突)+Std VII(CFA头衔)\n🍜 12:30-13:30 道德情景15题\n🌙 21:30-22:45 GIPS:全公司合规,组合,验证',tip:'"John Smith, CFA"✓'},
{day:24,date:'4/30(三)',title:'Ethics(4/4)：情景专训+知识树',subject:'ethics',tasks:'☀️ 8:10-9:10 道德情景30题\n🍜 12:30-13:30 错题复盘\n🌙 21:30-22:45 整理Ethics知识树+易混淆标准',tip:'道德加权判分'},
{day:25,date:'5/1(四)🎉五一',title:'全科知识树梳理日',subject:'review',tasks:'☀️ 8:30-12:00 梳理QM+FSA+FI知识树(各40min)\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 梳理Equity+Corp+Econ+PM+Alts+Deriv\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 Ethics速查+道德20题+公式卡总复习',tip:'前辈第二阶段:每科2-3h梳理'},
{day:26,date:'5/2(五)',title:'弱项突破+模考准备',subject:'review',tasks:'☀️ 8:10-9:10 回顾知识树薄弱点\n🍜 12:30-13:30 混合刷题20题\n🌙 21:30-22:45 公式卡最后一遍+早睡',tip:'明天模考！7:30起床'},
{day:27,date:'5/3(六)⭐',title:'🔥第一次全真模拟',subject:'mock',tasks:'⏰ 8:00-10:15 上半场90题/135min\n休息 10:15-10:45\n📖 10:45-13:00 下半场90题/135min\n🍜 13:00-14:00 午饭\n📖 14:00-17:30 逐题分析错题\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 弱项速查+错题本',tip:'Mock 55%很正常别慌！'},
{day:28,date:'5/4(日)⭐',title:'模考复盘+弱项突破',subject:'mock',tasks:'☀️ 8:30-12:00 按弱项排序重做笔记+速查表\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 弱项做题60题\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 公式卡+错题本',tip:''},
{day:29,date:'5/5(一)',title:'弱项补强',subject:'review',tasks:'☀️ 8:10-9:10 模考弱项科目速查表\n🍜 12:30-13:30 弱项15题\n🌙 21:30-22:45 道德情景20题保温',tip:''},
{day:30,date:'5/6(二)',title:'FSA+FI回炉',subject:'review',tasks:'☀️ 8:10-9:10 FSA:间接法CFO+比率\n🍜 12:30-13:30 FSA新题15题\n🌙 21:30-22:45 FI:久期+估值',tip:''},
{day:31,date:'5/7(三)',title:'Equity+Corp+Econ回炉',subject:'review',tasks:'☀️ 8:10-9:10 Equity:估值模型\n🍜 12:30-13:30 Equity题15题\n🌙 21:30-22:45 Corp+Econ速查表',tip:''},
{day:32,date:'5/8(四)',title:'道德+三小科回炉',subject:'review',tasks:'☀️ 8:10-9:10 道德情景30题\n🍜 12:30-13:30 道德错题15题\n🌙 21:30-22:45 PM+Alts+Deriv速查表',tip:''},
{day:33,date:'5/9(五)',title:'全科混合+模考准备',subject:'review',tasks:'☀️ 8:10-9:10 全科混合30题\n🍜 12:30-13:30 错题分析\n🌙 21:30-22:45 公式卡总复习+早睡',tip:'明天第二次模考！'},
{day:34,date:'5/10(六)⭐',title:'🔥第二次全真模拟',subject:'mock',tasks:'⏰ 8:00-10:15 上半场90题/135min\n休息 10:15-10:45\n📖 10:45-13:00 下半场90题/135min\n🍜 13:00-14:00 午饭\n📖 14:00-17:30 逐题分析+弱项\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 错题本+公式卡',tip:'8点开考！训练生物钟！'},
{day:35,date:'5/11(日)⭐',title:'模考复盘+精准突破',subject:'mock',tasks:'☀️ 8:30-12:00 两次模考共同弱点深度复习\n🍜 12:00-13:00 午饭\n📖 13:00-17:30 弱项60题+道德通读\n🍽️ 17:30-18:30 晚饭\n🌙 18:30-22:00 公式卡总复习',tip:''},
{day:36,date:'5/12(一)',title:'道德最终冲刺',subject:'ethics',tasks:'☀️ 8:10-9:10 道德情景30题\n🍜 12:30-13:30 道德错题\n🌙 21:30-22:45 Ethics速查表通读',tip:''},
{day:37,date:'5/13(二)',title:'FSA+FI最终回顾',subject:'review',tasks:'☀️ 8:10-9:10 FSA速查+核心比率\n🍜 12:30-13:30 FI速查+久期\n🌙 21:30-22:45 FSA+FI混合30题',tip:''},
{day:38,date:'5/14(三)',title:'全科速查表马拉松',subject:'review',tasks:'☀️ 8:10-9:10 Ethics+QM+Econ(各20min)\n🍜 12:30-13:30 FSA+Corp(各30min)\n🌙 21:30-22:45 Equity+FI+Deriv+Alts+PM(各12min)',tip:''},
{day:39,date:'5/15(四)',title:'🌟考前最后一天',subject:'review',tasks:'☀️ 8:10-8:40 轻松翻公式卡\n白天正常上班，平常心\n🍽️ 18:00 晚饭(清淡)\n🌙 19:00-20:00 最后一遍道德7大标准\n📋 20:00-20:30 检查考试用品\n😴 22:00入睡 闹钟6:30',tip:'保证8.5h睡眠！'},
];
const WEEKS=[
  {label:'第1周(4/7-4/13)',sub:'QM建信心+FSA开始',days:[1,2,3,4,5,6,7]},
  {label:'第2周(4/14-4/20)',sub:'FSA收尾+FI+Equity+Corp',days:[8,9,10,11,12,13,14]},
  {label:'第3周(4/21-4/27)',sub:'Econ+PM+三小科+Ethics开始',days:[15,16,17,18,19,20,21]},
  {label:'第4周(4/28-5/4)',sub:'Ethics收尾+知识树+模考1',days:[22,23,24,25,26,27,28]},
  {label:'第5周(5/5-5/11)',sub:'弱项补强+模考2',days:[29,30,31,32,33,34,35]},
  {label:'第6周(5/12-5/15)',sub:'考前冲刺',days:[36,37,38,39]},
];
const FORMULAS=[
  {s:'TVM 货币时间价值',items:[{n:'现值/终值',f:'PV=FV/(1+r)^n  FV=PV×(1+r)^n'},{n:'永续年金',f:'PV = PMT / r'},{n:'增长永续',f:'PV = PMT / (r - g)'}]},
  {s:'CAPM / WACC',items:[{n:'CAPM',f:'E(Ri)=Rf+β(Rm-Rf)'},{n:'WACC',f:'WACC=wd×rd×(1-t)+wp×rp+we×re'},{n:'DDM求re',f:'re=D₁/P₀+g'},{n:'可持续增长',f:'g=ROE×(1-支付率)'}]},
  {s:'估值',items:[{n:'Gordon',f:'V₀=D₁/(ke-g)'},{n:'P/E',f:'P/E=支付率/(ke-g)'},{n:'FCFE',f:'FCFE=CFO-CapEx+净借款'},{n:'EV',f:'EV=市值+净债务'}]},
  {s:'FSA 财务报表',items:[{n:'杜邦三因素',f:'ROE=净利润率×周转率×权益乘数'},{n:'EPS',f:'(净利润-优先股息)/流通股'},{n:'FCF',f:'FCF=CFO-CapEx'},{n:'流动/速动',f:'CA/CL  (现金+有价+应收)/CL'},{n:'间接法CFO',f:'净利润+折旧-非经营±营运资本=CFO'},{n:'LIFO调整',f:'FIFO存货=LIFO存货+LIFO储备'}]},
  {s:'杠杆',items:[{n:'DOL',f:'%ΔEBIT/%ΔSales'},{n:'DFL',f:'EBIT/(EBIT-I)'},{n:'DTL',f:'DOL×DFL'},{n:'盈亏平衡',f:'BEP=F/(P-V)'}]},
  {s:'统计',items:[{n:'Z分数',f:'Z=(X-μ)/σ'},{n:'变异系数',f:'CV=σ/μ'},{n:'置信区间',f:'x̄±z/t×(s/√n)'},{n:'贝叶斯',f:'P(A|B)=P(AB)/P(B)'}]},
  {s:'组合',items:[{n:'两资产方差',f:'σp²=wA²σA²+wB²σB²+2wAwBσAσBρ'},{n:'Beta',f:'β=Cov(i,m)/σm²'},{n:'夏普',f:'(Rp-Rf)/σp'}]},
  {s:'衍生品',items:[{n:'Call',f:'max(0,ST-X)'},{n:'Put',f:'max(0,X-ST)'},{n:'Put-Call',f:'P+S=C+X/(1+rf)^T'}]},
  {s:'经济学',items:[{n:'GDP',f:'C+I+G+(X-M)'},{n:'费雪',f:'MV=PY'}]},
  {s:'固定收益',items:[{n:'久期近似',f:'ΔP/P≈-Duration×Δy'},{n:'凸性调整',f:'ΔP/P≈-D×Δy+½×Conv×(Δy)²'}]},
];
const RESOURCES=[
  {c:'📖 精华笔记',items:[{n:'HBarma CFA L1笔记PDF',u:'./CFA_L1_Study/CFA-Level-I/notes_compiled.pdf'}]},
  {c:'📋 速查表(收藏到手机)',items:[
    {n:'道德 Ethics',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_01_Ethical_and_Professional_Standards.md'},
    {n:'数量 QM',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_02_Quantitative_Methods.md'},
    {n:'经济 Econ',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_03_Economics.md'},
    {n:'财报 FSA',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_04_Financial_Reporting_and_Analysis.md'},
    {n:'公金 Corp',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_05_Corporate_Finance.md'},
    {n:'权益 Equity',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_06_Equity_Investments.md'},
    {n:'固收 FI',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_07_Fixed_Income.md'},
    {n:'衍生 Deriv',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_07_Derivatives.md'},
    {n:'另类 Alts',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_08_Alternative_Investments.md'},
    {n:'组合 PM',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_09_Portfolio_Management.md'},
    {n:'FSA关键比率',u:'https://adamvangrover.github.io/craft/CFA/Level_1/Cheat_Sheets/CS_FSA_Key_Ratios_for_Credit_Analysts.md'},
  ]},
  {c:'📝 练习题 & 模考',items:[
    {n:'CFA官方模考',u:'https://www.cfainstitute.org/programs/cfa-program/candidate-resources/mock-exam-and-practice-questions'},
    {n:'FreeFellow 1050题(午间首选)',u:'https://www.freefellow.org/free/cfa-level-1/'},
    {n:'Open Exam Prep 200+题',u:'https://open-exam-prep.com/practice/cfa-level1'},
    {n:'300Hours 90题模考',u:'https://300hours.com/free-cfa-level-1-mock-exam/'},
    {n:'CFAExamPrep 180题',u:'https://cfaexamprep.com/free-cfa-mock-exam'},
    {n:'FinQuiz 6套模考',u:'https://www.finquiz.com/cfa/level-1/mock-exam/'},
  ]},
];
const SL={all:'全部',qm:'数量',fsa:'财报',fi:'固收',equity:'权益',corp:'公金',econ:'经济',alts:'另类',pm:'组合',deriv:'衍生',ethics:'道德',mock:'模考',review:'复习',general:'通用'};

// Storage
function ld(k,d){try{return JSON.parse(localStorage.getItem('cfa_'+k))||d}catch{return d}}
function sv(k,v){localStorage.setItem('cfa_'+k,JSON.stringify(v))}
let cks=ld('checkins',{}),notes=ld('notes',[]),mf=ld('mastered',[]);
function todayNum(){return Math.floor((new Date()-START_DATE)/864e5)+1}
function daysLeft(){return Math.max(0,Math.ceil((EXAM_DATE-new Date())/864e5))}
function openM(id){document.getElementById(id).classList.add('show')}
function closeM(id){document.getElementById(id).classList.remove('show')}

// Nav
document.querySelectorAll('.nav-item').forEach(n=>n.addEventListener('click',()=>{
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  n.classList.add('active');document.getElementById('page-'+n.dataset.page).classList.add('active');
  document.querySelector('.sidebar').classList.remove('open');
}));

// Dashboard
function renderDash(){
  const tn=todayNum(),td=39,cd=Object.keys(cks).filter(k=>cks[k].completion>0).length;
  const th=Object.values(cks).reduce((s,c)=>s+(c.hours||0),0);
  let streak=0;for(let d=tn;d>=1;d--){if(cks[d]&&cks[d].completion>0)streak++;else break;}
  if(!cks[tn]||!cks[tn].completion){streak=0;for(let d=tn-1;d>=1;d--){if(cks[d]&&cks[d].completion>0)streak++;else break;}}
  const avg=cd?Math.round(Object.values(cks).reduce((s,c)=>s+(c.completion||0),0)/cd):0;
  document.getElementById('cd').textContent=daysLeft();
  document.getElementById('sg').innerHTML=`
    <div class="stat-card accent"><div class="v">Day ${Math.min(tn,td)}<span style="font-size:.65rem;color:var(--text2)">/${td}</span></div><div class="l">备考进度</div></div>
    <div class="stat-card green"><div class="v">${cd}</div><div class="l">已打卡天数</div></div>
    <div class="stat-card blue"><div class="v">${th.toFixed(1)}h</div><div class="l">累计学习</div></div>
    <div class="stat-card orange"><div class="v">${streak}天</div><div class="l">${streak>=3?'🔥':'⚡'}连续打卡</div></div>
    <div class="stat-card yellow"><div class="v">${avg}%</div><div class="l">平均完成度</div></div>
    <div class="stat-card red"><div class="v">${daysLeft()}</div><div class="l">距考试</div></div>`;
  const dp=Math.min(100,Math.round(tn/td*100)),cp=Math.round(cd/td*100);
  document.getElementById('op').innerHTML=`
    <div class="progress-bar-wrap"><div class="progress-label"><span>时间进度</span><span class="pct">${dp}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${dp}%"></div></div></div>
    <div class="progress-bar-wrap"><div class="progress-label"><span>打卡进度</span><span class="pct">${cp}%</span></div><div class="progress-track"><div class="progress-fill green" style="width:${cp}%"></div></div></div>`;
  // Weekly chart
  let wh='',mx=1;const ds=[];
  for(let i=6;i>=0;i--){const d=tn-i,c=cks[d],h=c?c.hours:0;if(h>mx)mx=h;const p=PLAN.find(x=>x.day===d);ds.push({d,h,l:p?p.date:'D'+d});}
  ds.forEach(({h,l})=>{const p=Math.max(4,h/mx*100);wh+=`<div class="mini-bar" style="height:${p}%;${h?'':'background:var(--bg3);'}"><div class="tip">${l}: ${h}h</div></div>`;});
  document.getElementById('wc').innerHTML=wh;
  // Subject table
  const sh={};PLAN.forEach(p=>{const c=cks[p.day];if(c&&c.hours>0&&p.subject!=='review'&&p.subject!=='mock')sh[p.subject]=(sh[p.subject]||0)+c.hours;});
  document.getElementById('stb').innerHTML=SUBJECTS.map(s=>{
    const lg=sh[s.id]||0,pc=Math.min(100,Math.round(lg/s.hours*100));
    let st='not-started',sl='未开始';if(pc>=100){st='completed';sl='已完成';}else if(pc>0){st='in-progress';sl='进行中';}
    return `<tr><td><span class="sdot" style="background:${s.color}"></span>${s.name}</td><td>${s.weight}</td><td>${s.hours}h</td><td>${lg.toFixed(1)}h</td><td><div class="progress-track" style="width:80px;height:6px;display:inline-block;vertical-align:middle"><div class="progress-fill green" style="width:${pc}%"></div></div> <span style="font-size:.7rem;color:var(--accent2)">${pc}%</span></td><td><span class="status-badge ${st}">${sl}</span></td></tr>`;
  }).join('');
  // Today
  const plan=PLAN.find(p=>p.day===tn),el=document.getElementById('tt');
  if(!plan){el.innerHTML=`<div class="empty-state"><div class="eicon">${tn>39?'🎯':'📅'}</div><p>${tn>39?'备考期结束，祝考试顺利！':'今天无计划任务'}</p></div>`;return;}
  const ci=cks[plan.day];
  el.innerHTML=`<div style="margin-bottom:8px"><b>Day ${plan.day} · ${plan.date}</b> <span class="note-tag tag-${plan.subject}">${SL[plan.subject]||plan.subject}</span>${ci?` <span class="status-badge completed">已打卡 ${ci.hours}h</span>`:''}</div>
    <div style="font-size:.86rem;font-weight:600;margin-bottom:4px">${plan.title}</div>
    <div style="font-size:.8rem;color:var(--text2);white-space:pre-wrap;line-height:1.6">${plan.tasks}</div>
    ${plan.tip?`<div style="font-size:.76rem;color:var(--orange);margin-top:6px">💡 ${plan.tip}</div>`:''}
    <div style="margin-top:10px">${ci?`<button class="btn btn-sm btn-secondary" onclick="openCI(${plan.day})">修改打卡</button>`:`<button class="btn btn-sm btn-primary" onclick="openCI(${plan.day})">✅ 打卡</button>`} <button class="btn btn-sm btn-secondary" onclick="openNM(null,'${plan.subject}','','Day${plan.day} ')">📝 记笔记</button></div>`;
}

// Plan
function renderPlan(){
  const tn=todayNum();let h='';
  WEEKS.forEach((w,wi)=>{
    const cur=w.days.includes(tn);
    h+=`<div class="week-section"><div class="week-header" onclick="toggleW(${wi})"><span>${w.label}</span><span style="color:var(--text2);font-size:.75rem;margin-left:4px">${w.sub}</span>${cur?'<span style="background:var(--accent);color:#fff;font-size:.58rem;padding:1px 7px;border-radius:4px;margin-left:6px">本周</span>':''}<span class="toggle" id="wt-${wi}">▼</span></div><div class="week-body${!cur&&wi<Math.floor((tn-1)/7)?' collapsed':''}" id="wb-${wi}" style="max-height:3000px">`;
    w.days.forEach(dn=>{
      const p=PLAN.find(x=>x.day===dn);if(!p)return;
      const ci=cks[dn],isT=dn===tn,isPast=dn<tn,done=ci&&ci.completion>0;
      let cls='day-card';if(isT)cls+=' today';if(isPast&&done)cls+=' done';
      h+=`<div class="${cls}"><div class="day-check" onclick="event.stopPropagation();openCI(${dn})"></div><div class="day-info"><div class="day-date">Day ${p.day} · ${p.date}</div><div class="day-title">${p.title} <span class="note-tag tag-${p.subject}" style="font-size:.63rem;vertical-align:middle">${SL[p.subject]||p.subject}</span></div><div class="day-tasks">${p.tasks}</div>${p.tip?`<div style="font-size:.7rem;color:var(--orange);margin-top:2px">💡 ${p.tip}</div>`:''}${ci?`<div class="day-logged">✅ ${ci.hours}h · 完成${ci.completion}%${ci.note?' · 📝':''}</div>`:''}
      <div class="day-actions">${ci?`<button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();openCI(${dn})">修改</button>`:`<button class="btn btn-sm btn-primary" onclick="event.stopPropagation();openCI(${dn})">打卡</button>`} <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();openNM(null,'${p.subject}','','Day${dn} ')">📝</button></div></div></div>`;
    });
    h+=`</div></div>`;
  });
  document.getElementById('pc').innerHTML=h;
}
function toggleW(i){const b=document.getElementById('wb-'+i),t=document.getElementById('wt-'+i);b.classList.toggle('collapsed');t.textContent=b.classList.contains('collapsed')?'▶':'▼';}

// Check-in
function openCI(dn){
  const p=PLAN.find(x=>x.day===dn),ci=cks[dn];
  document.getElementById('ci-day').value=`Day ${dn} · ${p?p.date:''} — ${p?p.title:''}`;
  document.getElementById('ci-day').dataset.dn=dn;
  document.getElementById('ci-h').value=ci?ci.hours:'';
  document.getElementById('ci-c').value=ci?ci.completion:'100';
  document.getElementById('ci-n').value=ci?ci.note||'':'';
  openM('ci-modal');
}
function saveCI(){
  const dn=+document.getElementById('ci-day').dataset.dn,hrs=parseFloat(document.getElementById('ci-h').value)||0,comp=+document.getElementById('ci-c').value,note=document.getElementById('ci-n').value.trim();
  cks[dn]={hours:hrs,completion:comp,note,date:new Date().toISOString()};sv('checkins',cks);
  if(note&&!notes.find(n=>n.title==='Day'+dn+' 打卡心得')){
    const p=PLAN.find(x=>x.day===dn);
    notes.unshift({id:Date.now()+'',title:'Day'+dn+' 打卡心得',subject:p?p.subject:'general',type:'insight',content:note,created:new Date().toISOString(),updated:new Date().toISOString()});sv('notes',notes);
  }
  closeM('ci-modal');renderAll();
}

// Notes
let nFilter='all';
function renderNotes(){
  const fl=document.getElementById('nf');
  fl.innerHTML=Object.keys(SL).map(s=>`<div class="filter-chip ${nFilter===s?'active':''}" onclick="nFilter='${s}';renderNotes()">${SL[s]}</div>`).join('');
  const ls=document.getElementById('nl');
  let fn=nFilter==='all'?notes:notes.filter(n=>n.subject===nFilter);
  if(!fn.length){ls.innerHTML='<div class="empty-state"><div class="eicon">📝</div><p>还没有笔记，点击"新建笔记"开始记录</p></div>';return;}
  const te={note:'📖',insight:'💡',mistake:'❌',formula:'📐'};
  ls.innerHTML=fn.map(n=>`<div class="note-card" onclick="viewN('${n.id}')"><div class="note-meta"><span class="note-tag tag-${n.subject}">${SL[n.subject]||n.subject}</span><span class="note-tag" style="background:var(--bg3);color:var(--text2)">${te[n.type]||'📖'} ${n.type}</span><span class="note-date-label">${new Date(n.created).toLocaleDateString('zh-CN')}</span></div><div class="note-title">${n.title}</div><div class="note-preview">${n.content}</div><div class="note-actions"><button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();openNM('${n.id}')">✏️</button><button class="btn btn-sm btn-danger" onclick="event.stopPropagation();delN('${n.id}')">🗑️</button></div></div>`).join('');
}
function openNM(eid,sub,type,pre){
  document.getElementById('nei').value=eid||'';
  document.getElementById('nmt').textContent=eid?'✏️ 编辑笔记':'📝 新建笔记';
  if(eid){const n=notes.find(x=>x.id===eid);if(n){document.getElementById('n-title').value=n.title;document.getElementById('n-sub').value=n.subject;document.getElementById('n-type').value=n.type;document.getElementById('n-content').value=n.content;}}
  else{document.getElementById('n-title').value=pre||'';document.getElementById('n-sub').value=sub||'general';document.getElementById('n-type').value=type||'note';document.getElementById('n-content').value='';}
  openM('n-modal');
}
function saveN(){
  const eid=document.getElementById('nei').value,title=document.getElementById('n-title').value.trim()||'无标题',sub=document.getElementById('n-sub').value,type=document.getElementById('n-type').value,content=document.getElementById('n-content').value.trim();
  if(!content){alert('请输入内容');return;}
  if(eid){const i=notes.findIndex(n=>n.id===eid);if(i>=0)notes[i]={...notes[i],title,subject:sub,type,content,updated:new Date().toISOString()};}
  else notes.unshift({id:Date.now()+'',title,subject:sub,type,content,created:new Date().toISOString(),updated:new Date().toISOString()});
  sv('notes',notes);closeM('n-modal');renderNotes();
}
function delN(id){if(!confirm('确定删除？'))return;notes=notes.filter(n=>n.id!==id);sv('notes',notes);renderNotes();}
function viewN(id){
  const n=notes.find(x=>x.id===id);if(!n)return;
  document.getElementById('vnt').textContent=n.title;
  document.getElementById('vnm').innerHTML=`<span class="note-tag tag-${n.subject}">${SL[n.subject]}</span> <span class="note-date-label">${new Date(n.created).toLocaleString('zh-CN')}</span>`;
  document.getElementById('vnb').textContent=n.content;openM('vn-modal');
}

// Formulas
function renderFormulas(){
  let h='',gi=0,total=0;
  FORMULAS.forEach(s=>{h+=`<div class="formula-section"><div class="formula-section-title">${s.s}</div><div class="formula-grid">`;
    s.items.forEach(it=>{const k='f_'+gi,m=mf.includes(k);h+=`<div class="formula-card${m?' mastered':''}" onclick="togF('${k}',this)"><div class="fname">${it.n}</div>${it.f}</div>`;gi++;total++;});
    h+=`</div></div>`;});
  const mc=mf.length;
  h=`<div class="card" style="margin-bottom:14px"><div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><div><span style="font-size:1.4rem;font-weight:800;color:var(--green)">${mc}</span> <span style="color:var(--text2);font-size:.8rem">/ ${total} 已掌握</span></div><div style="flex:1;min-width:100px"><div class="progress-track"><div class="progress-fill green" style="width:${Math.round(mc/total*100)}%"></div></div></div><button class="btn btn-sm btn-secondary" onclick="mf=[];sv('mastered',mf);renderFormulas()">重置</button></div></div>`+h;
  document.getElementById('fc').innerHTML=h;
}
function togF(k,el){if(mf.includes(k)){mf=mf.filter(x=>x!==k);el.classList.remove('mastered');}else{mf.push(k);el.classList.add('mastered');}sv('mastered',mf);}

// Resources
function renderRes(){
  document.getElementById('rc').innerHTML=RESOURCES.map(r=>`<div class="card"><div class="card-title">${r.c}</div>${r.items.map(i=>`<div class="resource-link"><a href="${i.u}" target="_blank">🔗 ${i.n}</a></div>`).join('')}</div>`).join('');
}

// Render all
function renderAll(){renderDash();renderPlan();renderNotes();renderFormulas();renderRes();renderSyncInfo();}
renderAll();

// ===== SYNC =====
// Load gist config
(function loadGistCfg(){
  const t=localStorage.getItem('cfa_gist_token'),g=localStorage.getItem('cfa_gist_id');
  if(t)document.getElementById('gist-token').value=t;
  if(g)document.getElementById('gist-id').value=g;
})();

function saveGistConfig(){
  const t=document.getElementById('gist-token').value.trim(),g=document.getElementById('gist-id').value.trim();
  if(t)localStorage.setItem('cfa_gist_token',t);
  if(g)localStorage.setItem('cfa_gist_id',g);
  showStatus('sync-gist-status','💾 配置已保存','var(--green)');
}

function getAllData(){
  return {checkins:cks,notes,mastered:mf,_ts:new Date().toISOString(),_v:2};
}

function applyData(d){
  if(d.checkins){cks=d.checkins;sv('checkins',cks);}
  if(d.notes){notes=d.notes;sv('notes',notes);}
  if(d.mastered){mf=d.mastered;sv('mastered',mf);}
  renderAll();
}

// Manual export
function exportData(){
  const d=getAllData();
  const blob=new Blob([JSON.stringify(d,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='cfa-study-data-'+new Date().toISOString().slice(0,10)+'.json';
  a.click();URL.revokeObjectURL(a.href);
  showStatus('sync-manual-status','✅ 数据已导出','var(--green)');
}

// Manual import
function importData(e){
  const f=e.target.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=function(ev){
    try{
      const d=JSON.parse(ev.target.result);
      if(!d.checkins&&!d.notes){throw new Error('invalid');}
      if(!confirm('确认导入？当前数据将被覆盖。\n\n数据时间: '+(d._ts||'未知')))return;
      applyData(d);
      showStatus('sync-manual-status','✅ 数据导入成功！已加载 '+Object.keys(d.checkins||{}).length+' 天打卡 + '+(d.notes||[]).length+' 条笔记','var(--green)');
    }catch(err){showStatus('sync-manual-status','❌ 文件格式错误','var(--red)');}
  };
  r.readAsText(f);e.target.value='';
}

// Gist push
async function gistPush(){
  const token=document.getElementById('gist-token').value.trim();
  if(!token){showStatus('sync-gist-status','❌ 请先填写Token','var(--red)');return;}
  showStatus('sync-gist-status','⏳ 上传中...','var(--yellow)');
  const data=getAllData();
  const gistId=document.getElementById('gist-id').value.trim();
  try{
    let res;
    const body={description:'CFA L1 Study Progress (auto-sync)',public:false,files:{'cfa-study-data.json':{content:JSON.stringify(data,null,2)}}};
    if(gistId){
      res=await fetch('https://api.github.com/gists/'+gistId,{method:'PATCH',headers:{'Authorization':'token '+token,'Content-Type':'application/json'},body:JSON.stringify(body)});
    }else{
      res=await fetch('https://api.github.com/gists',{method:'POST',headers:{'Authorization':'token '+token,'Content-Type':'application/json'},body:JSON.stringify(body)});
    }
    if(!res.ok)throw new Error(res.status+' '+res.statusText);
    const j=await res.json();
    document.getElementById('gist-id').value=j.id;
    localStorage.setItem('cfa_gist_id',j.id);
    localStorage.setItem('cfa_gist_token',token);
    localStorage.setItem('cfa_last_push',new Date().toISOString());
    showStatus('sync-gist-status','✅ 上传成功！Gist ID: '+j.id,'var(--green)');
    renderSyncInfo();
  }catch(err){showStatus('sync-gist-status','❌ 上传失败: '+err.message,'var(--red)');}
}

// Gist pull
async function gistPull(){
  const token=document.getElementById('gist-token').value.trim();
  const gistId=document.getElementById('gist-id').value.trim();
  if(!token||!gistId){showStatus('sync-gist-status','❌ 请填写Token和Gist ID','var(--red)');return;}
  showStatus('sync-gist-status','⏳ 拉取中...','var(--yellow)');
  try{
    const res=await fetch('https://api.github.com/gists/'+gistId,{headers:{'Authorization':'token '+token}});
    if(!res.ok)throw new Error(res.status+' '+res.statusText);
    const j=await res.json();
    const file=j.files['cfa-study-data.json'];
    if(!file)throw new Error('Gist中找不到数据文件');
    const data=JSON.parse(file.content);
    const remoteTs=data._ts?new Date(data._ts).toLocaleString('zh-CN'):'未知';
    if(!confirm('确认从云端拉取数据？当前本地数据将被覆盖。\n\n云端数据时间: '+remoteTs))return;
    applyData(data);
    localStorage.setItem('cfa_gist_token',token);
    localStorage.setItem('cfa_gist_id',gistId);
    localStorage.setItem('cfa_last_pull',new Date().toISOString());
    showStatus('sync-gist-status','✅ 拉取成功！已同步 '+Object.keys(data.checkins||{}).length+' 天打卡 + '+(data.notes||[]).length+' 条笔记','var(--green)');
    renderSyncInfo();
  }catch(err){showStatus('sync-gist-status','❌ 拉取失败: '+err.message,'var(--red)');}
}

function showStatus(id,msg,color){const el=document.getElementById(id);el.textContent=msg;el.style.color=color;setTimeout(()=>{if(el.textContent===msg)el.style.opacity='.6';},5000);}

function renderSyncInfo(){
  const el=document.getElementById('sync-info');if(!el)return;
  const lp=localStorage.getItem('cfa_last_push'),ll=localStorage.getItem('cfa_last_pull'),gid=localStorage.getItem('cfa_gist_id');
  const ck=Object.keys(cks).filter(k=>cks[k].completion>0).length;
  el.innerHTML=`
    📊 本地数据: <b>${ck}</b> 天打卡 · <b>${notes.length}</b> 条笔记 · <b>${mf.length}</b> 个已掌握公式<br>
    ${gid?'🔗 Gist ID: <code style="font-size:.75rem;background:var(--bg3);padding:2px 6px;border-radius:4px;">'+gid+'</code><br>':'🔗 Gist: 未配置<br>'}
    ⬆️ 上次上传: ${lp?new Date(lp).toLocaleString('zh-CN'):'从未'}<br>
    ⬇️ 上次拉取: ${ll?new Date(ll).toLocaleString('zh-CN'):'从未'}
  `;
}
