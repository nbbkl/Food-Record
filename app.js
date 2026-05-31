// ========================================
// 饮食记录助手 - 每日营养追踪
// 学号：R24790237  姓名：马肃
// 数据来源：《中国食物成分表》第6版
// ========================================

// ========== 食物营养数据库（每100克） ==========
// 格式：{ name, cal(千卡), protein(g), carbs(g), fat(g), category }
var foodDB = [
    // ---- 主食谷物 ----
    { name:"白米饭", cal:116, protein:2.6, carbs:25.9, fat:0.3, cat:"主食" },
    { name:"白米粥", cal:46, protein:1.1, carbs:9.7, fat:0.1, cat:"主食" },
    { name:"糙米饭", cal:123, protein:2.7, carbs:23.0, fat:1.2, cat:"主食" },
    { name:"馒头", cal:223, protein:7.0, carbs:46.0, fat:0.7, cat:"主食" },
    { name:"花卷", cal:211, protein:6.4, carbs:45.6, fat:1.0, cat:"主食" },
    { name:"面条(煮)", cal:138, protein:4.5, carbs:28.0, fat:0.9, cat:"主食" },
    { name:"挂面", cal:353, protein:10.3, carbs:75.6, fat:0.6, cat:"主食" },
    { name:"全麦面包", cal:247, protein:13.0, carbs:41.0, fat:4.2, cat:"主食" },
    { name:"白面包", cal:266, protein:8.0, carbs:50.0, fat:3.1, cat:"主食" },
    { name:"油条", cal:386, protein:6.9, carbs:40.0, fat:22.0, cat:"主食" },
    { name:"饺子(煮)", cal:240, protein:9.0, carbs:28.0, fat:10.0, cat:"主食" },
    { name:"包子(猪肉)", cal:227, protein:8.0, carbs:30.0, fat:8.0, cat:"主食" },
    { name:"烧饼", cal:324, protein:8.5, carbs:55.0, fat:8.0, cat:"主食" },
    { name:"玉米", cal:112, protein:3.3, carbs:22.8, fat:1.2, cat:"主食" },
    { name:"红薯", cal:86, protein:1.6, carbs:20.1, fat:0.1, cat:"主食" },
    { name:"土豆", cal:77, protein:2.0, carbs:17.2, fat:0.1, cat:"主食" },
    { name:"山药", cal:57, protein:1.5, carbs:12.4, fat:0.1, cat:"主食" },
    { name:"燕麦片", cal:367, protein:13.5, carbs:66.0, fat:6.7, cat:"主食" },
    { name:"小米粥", cal:46, protein:1.4, carbs:8.4, fat:0.7, cat:"主食" },
    { name:"通心粉", cal:351, protein:11.9, carbs:75.8, fat:0.1, cat:"主食" },
    { name:"年糕", cal:154, protein:3.3, carbs:34.7, fat:0.3, cat:"主食" },

    // ---- 肉类 ----
    { name:"鸡胸肉", cal:133, protein:31.0, carbs:0.0, fat:1.2, cat:"肉类" },
    { name:"鸡腿肉", cal:181, protein:20.0, carbs:0.0, fat:11.0, cat:"肉类" },
    { name:"鸡翅", cal:222, protein:18.0, carbs:0.0, fat:16.0, cat:"肉类" },
    { name:"牛肉(瘦)", cal:125, protein:22.0, carbs:1.0, fat:4.0, cat:"肉类" },
    { name:"牛肉(肥瘦)", cal:250, protein:20.0, carbs:0.0, fat:19.0, cat:"肉类" },
    { name:"牛腩", cal:283, protein:17.0, carbs:0.0, fat:23.0, cat:"肉类" },
    { name:"猪肉(瘦)", cal:143, protein:20.3, carbs:1.5, fat:6.2, cat:"肉类" },
    { name:"猪肉(五花)", cal:395, protein:13.2, carbs:0.0, fat:37.0, cat:"肉类" },
    { name:"猪排骨", cal:264, protein:18.3, carbs:0.0, fat:20.4, cat:"肉类" },
    { name:"猪肝", cal:129, protein:19.3, carbs:5.0, fat:3.5, cat:"肉类" },
    { name:"羊肉", cal:294, protein:25.0, carbs:0.0, fat:21.0, cat:"肉类" },
    { name:"鸭肉", cal:240, protein:15.5, carbs:0.0, fat:19.7, cat:"肉类" },
    { name:"培根", cal:541, protein:12.0, carbs:1.0, fat:55.0, cat:"肉类" },
    { name:"火腿肠", cal:212, protein:14.0, carbs:5.0, fat:15.0, cat:"肉类" },
    { name:"腊肉", cal:498, protein:16.0, carbs:3.0, fat:47.0, cat:"肉类" },

    // ---- 蛋奶类 ----
    { name:"鸡蛋(煮)", cal:143, protein:12.6, carbs:1.1, fat:10.6, cat:"蛋奶" },
    { name:"鸡蛋(炒)", cal:196, protein:13.0, carbs:1.0, fat:15.0, cat:"蛋奶" },
    { name:"蛋清", cal:52, protein:11.0, carbs:0.7, fat:0.2, cat:"蛋奶" },
    { name:"蛋黄", cal:322, protein:15.2, carbs:0.0, fat:28.0, cat:"蛋奶" },
    { name:"鹌鹑蛋", cal:160, protein:12.8, carbs:0.0, fat:11.1, cat:"蛋奶" },
    { name:"牛奶(全脂)", cal:61, protein:3.0, carbs:4.8, fat:3.2, cat:"蛋奶" },
    { name:"牛奶(脱脂)", cal:35, protein:3.4, carbs:5.0, fat:0.1, cat:"蛋奶" },
    { name:"酸奶(原味)", cal:72, protein:3.5, carbs:10.0, fat:2.5, cat:"蛋奶" },
    { name:"酸奶(希腊)", cal:97, protein:10.0, carbs:4.0, fat:5.0, cat:"蛋奶" },
    { name:"奶酪", cal:350, protein:25.0, carbs:1.3, fat:27.0, cat:"蛋奶" },
    { name:"黄油", cal:717, protein:0.9, carbs:0.1, fat:81.0, cat:"蛋奶" },

    // ---- 鱼类海鲜 ----
    { name:"三文鱼", cal:208, protein:20.0, carbs:0.0, fat:13.0, cat:"海鲜" },
    { name:"鳕鱼", cal:82, protein:18.0, carbs:0.0, fat:0.7, cat:"海鲜" },
    { name:"金枪鱼", cal:144, protein:23.0, carbs:0.0, fat:5.0, cat:"海鲜" },
    { name:"带鱼", cal:127, protein:17.7, carbs:0.0, fat:4.9, cat:"海鲜" },
    { name:"鲫鱼", cal:108, protein:17.1, carbs:0.0, fat:2.7, cat:"海鲜" },
    { name:"鲤鱼", cal:109, protein:17.6, carbs:0.0, fat:4.1, cat:"海鲜" },
    { name:"虾仁", cal:99, protein:24.0, carbs:0.2, fat:0.3, cat:"海鲜" },
    { name:"基围虾", cal:87, protein:18.6, carbs:0.0, fat:0.8, cat:"海鲜" },
    { name:"螃蟹", cal:95, protein:13.8, carbs:2.3, fat:2.3, cat:"海鲜" },
    { name:"蛤蜊", cal:56, protein:10.1, carbs:4.6, fat:0.4, cat:"海鲜" },
    { name:"生蚝", cal:73, protein:9.0, carbs:4.0, fat:2.0, cat:"海鲜" },
    { name:"鱿鱼", cal:92, protein:17.4, carbs:0.0, fat:1.6, cat:"海鲜" },
    { name:"海参", cal:29, protein:6.0, carbs:0.0, fat:0.1, cat:"海鲜" },

    // ---- 豆类坚果 ----
    { name:"黄豆", cal:446, protein:36.0, carbs:30.0, fat:20.0, cat:"豆类" },
    { name:"豆腐", cal:81, protein:8.1, carbs:2.0, fat:3.7, cat:"豆类" },
    { name:"豆腐干", cal:153, protein:16.0, carbs:3.0, fat:8.0, cat:"豆类" },
    { name:"豆浆", cal:31, protein:3.0, carbs:1.2, fat:1.6, cat:"豆类" },
    { name:"腐竹", cal:459, protein:44.6, carbs:22.3, fat:21.7, cat:"豆类" },
    { name:"绿豆", cal:329, protein:21.6, carbs:62.0, fat:0.8, cat:"豆类" },
    { name:"红豆", cal:324, protein:20.2, carbs:63.4, fat:0.6, cat:"豆类" },
    { name:"花生", cal:567, protein:25.0, carbs:16.0, fat:49.0, cat:"豆类" },
    { name:"核桃", cal:654, protein:15.0, carbs:14.0, fat:65.0, cat:"豆类" },
    { name:"杏仁", cal:579, protein:21.0, carbs:22.0, fat:50.0, cat:"豆类" },
    { name:"腰果", cal:553, protein:18.0, carbs:30.0, fat:44.0, cat:"豆类" },
    { name:"开心果", cal:560, protein:20.0, carbs:28.0, fat:45.0, cat:"豆类" },
    { name:"瓜子", cal:582, protein:23.0, carbs:20.0, fat:50.0, cat:"豆类" },
    { name:"芝麻", cal:573, protein:19.0, carbs:24.0, fat:50.0, cat:"豆类" },

    // ---- 蔬菜类 ----
    { name:"西兰花", cal:34, protein:2.8, carbs:7.0, fat:0.4, cat:"蔬菜" },
    { name:"菠菜", cal:23, protein:2.9, carbs:3.6, fat:0.4, cat:"蔬菜" },
    { name:"生菜", cal:15, protein:1.4, carbs:2.0, fat:0.2, cat:"蔬菜" },
    { name:"白菜", cal:13, protein:1.5, carbs:2.2, fat:0.1, cat:"蔬菜" },
    { name:"芹菜", cal:14, protein:0.7, carbs:3.0, fat:0.1, cat:"蔬菜" },
    { name:"西红柿", cal:18, protein:0.9, carbs:3.9, fat:0.2, cat:"蔬菜" },
    { name:"黄瓜", cal:16, protein:0.7, carbs:3.6, fat:0.1, cat:"蔬菜" },
    { name:"胡萝卜", cal:41, protein:1.0, carbs:9.6, fat:0.2, cat:"蔬菜" },
    { name:"白萝卜", cal:18, protein:0.9, carbs:4.0, fat:0.1, cat:"蔬菜" },
    { name:"洋葱", cal:40, protein:1.1, carbs:9.3, fat:0.1, cat:"蔬菜" },
    { name:"青椒", cal:20, protein:0.9, carbs:4.6, fat:0.2, cat:"蔬菜" },
    { name:"茄子", cal:25, protein:1.0, carbs:5.9, fat:0.2, cat:"蔬菜" },
    { name:"冬瓜", cal:11, protein:0.4, carbs:2.6, fat:0.1, cat:"蔬菜" },
    { name:"南瓜", cal:26, protein:1.0, carbs:6.5, fat:0.1, cat:"蔬菜" },
    { name:"豆角", cal:34, protein:2.5, carbs:6.7, fat:0.3, cat:"蔬菜" },
    { name:"莲藕", cal:74, protein:2.6, carbs:16.4, fat:0.1, cat:"蔬菜" },
    { name:"蘑菇", cal:22, protein:3.1, carbs:3.3, fat:0.3, cat:"蔬菜" },
    { name:"金针菇", cal:26, protein:2.4, carbs:4.0, fat:0.4, cat:"蔬菜" },
    { name:"木耳", cal:265, protein:12.1, carbs:65.6, fat:1.5, cat:"蔬菜" },
    { name:"海带", cal:43, protein:1.7, carbs:10.0, fat:0.2, cat:"蔬菜" },
    { name:"蒜苔", cal:31, protein:2.0, carbs:6.3, fat:0.3, cat:"蔬菜" },
    { name:"苦瓜", cal:19, protein:1.0, carbs:4.9, fat:0.1, cat:"蔬菜" },
    { name:"丝瓜", cal:20, protein:1.0, carbs:4.2, fat:0.1, cat:"蔬菜" },

    // ---- 水果类 ----
    { name:"苹果", cal:52, protein:0.3, carbs:14.0, fat:0.2, cat:"水果" },
    { name:"香蕉", cal:89, protein:1.1, carbs:23.0, fat:0.3, cat:"水果" },
    { name:"橙子", cal:47, protein:0.9, carbs:12.0, fat:0.1, cat:"水果" },
    { name:"葡萄", cal:69, protein:0.7, carbs:18.0, fat:0.2, cat:"水果" },
    { name:"西瓜", cal:30, protein:0.6, carbs:7.6, fat:0.1, cat:"水果" },
    { name:"草莓", cal:32, protein:0.7, carbs:8.0, fat:0.3, cat:"水果" },
    { name:"蓝莓", cal:57, protein:0.7, carbs:14.0, fat:0.3, cat:"水果" },
    { name:"猕猴桃", cal:61, protein:1.1, carbs:15.0, fat:0.5, cat:"水果" },
    { name:"芒果", cal:60, protein:0.8, carbs:15.0, fat:0.4, cat:"水果" },
    { name:"菠萝", cal:50, protein:0.5, carbs:13.0, fat:0.1, cat:"水果" },
    { name:"桃子", cal:39, protein:0.9, carbs:10.0, fat:0.1, cat:"水果" },
    { name:"梨", cal:57, protein:0.4, carbs:15.0, fat:0.1, cat:"水果" },
    { name:"柚子", cal:42, protein:0.8, carbs:11.0, fat:0.1, cat:"水果" },
    { name:"樱桃", cal:63, protein:1.1, carbs:16.0, fat:0.2, cat:"水果" },
    { name:"榴莲", cal:147, protein:1.5, carbs:27.0, fat:5.3, cat:"水果" },
    { name:"牛油果", cal:160, protein:2.0, carbs:9.0, fat:15.0, cat:"水果" },
    { name:"火龙果", cal:55, protein:1.1, carbs:13.0, fat:0.4, cat:"水果" },
    { name:"荔枝", cal:66, protein:0.8, carbs:17.0, fat:0.4, cat:"水果" },
    { name:"山竹", cal:73, protein:0.4, carbs:18.0, fat:0.6, cat:"水果" },
    { name:"哈密瓜", cal:34, protein:0.8, carbs:8.0, fat:0.1, cat:"水果" },

    // ---- 零食甜点 ----
    { name:"薯片", cal:536, protein:7.0, carbs:53.0, fat:34.0, cat:"零食" },
    { name:"饼干", cal:433, protein:8.0, carbs:70.0, fat:15.0, cat:"零食" },
    { name:"巧克力", cal:546, protein:5.0, carbs:60.0, fat:31.0, cat:"零食" },
    { name:"冰淇淋", cal:207, protein:3.5, carbs:24.0, fat:11.0, cat:"零食" },
    { name:"蛋糕(奶油)", cal:347, protein:4.0, carbs:50.0, fat:15.0, cat:"零食" },
    { name:"方便面", cal:472, protein:9.5, carbs:60.0, fat:21.0, cat:"零食" },
    { name:"糖果", cal:387, protein:0.0, carbs:98.0, fat:0.0, cat:"零食" },
    { name:"爆米花", cal:387, protein:13.0, carbs:78.0, fat:4.0, cat:"零食" },
    { name:"肉松", cal:396, protein:36.0, carbs:25.0, fat:12.0, cat:"零食" },
    { name:"牛肉干", cal:336, protein:55.0, carbs:8.0, fat:8.0, cat:"零食" },

    // ---- 饮品 ----
    { name:"可乐", cal:42, protein:0.0, carbs:10.6, fat:0.0, cat:"饮品" },
    { name:"雪碧", cal:41, protein:0.0, carbs:10.2, fat:0.0, cat:"饮品" },
    { name:"橙汁", cal:45, protein:0.7, carbs:10.0, fat:0.1, cat:"饮品" },
    { name:"苹果汁", cal:46, protein:0.1, carbs:11.0, fat:0.1, cat:"饮品" },
    { name:"豆浆(甜)", cal:42, protein:2.0, carbs:2.6, fat:1.6, cat:"饮品" },
    { name:"美式咖啡", cal:2, protein:0.1, carbs:0.0, fat:0.0, cat:"饮品" },
    { name:"拿铁咖啡", cal:56, protein:2.8, carbs:5.0, fat:2.7, cat:"饮品" },
    { name:"奶茶(珍珠)", cal:76, protein:1.0, carbs:13.0, fat:2.0, cat:"饮品" },
    { name:"绿茶", cal:1, protein:0.0, carbs:0.0, fat:0.0, cat:"饮品" },
    { name:"啤酒", cal:43, protein:0.4, carbs:3.6, fat:0.0, cat:"饮品" },
    { name:"红葡萄酒", cal:85, protein:0.1, carbs:2.6, fat:0.0, cat:"饮品" },
    { name:"运动饮料", cal:26, protein:0.0, carbs:6.4, fat:0.0, cat:"饮品" },

    // ---- 调味酱料 ----
    { name:"植物油", cal:899, protein:0.0, carbs:0.0, fat:99.9, cat:"调料" },
    { name:"橄榄油", cal:899, protein:0.0, carbs:0.0, fat:99.9, cat:"调料" },
    { name:"花生酱", cal:598, protein:25.0, carbs:20.0, fat:50.0, cat:"调料" },
    { name:"芝麻酱", cal:630, protein:19.0, carbs:10.0, fat:57.0, cat:"调料" },
    { name:"番茄酱", cal:92, protein:1.6, carbs:22.0, fat:0.3, cat:"调料" },
    { name:"沙拉酱", cal:680, protein:1.0, carbs:3.0, fat:73.0, cat:"调料" },
    { name:"酱油", cal:45, protein:5.6, carbs:5.6, fat:0.1, cat:"调料" },
    { name:"醋", cal:18, protein:0.4, carbs:4.0, fat:0.0, cat:"调料" },
    { name:"白糖", cal:400, protein:0.0, carbs:100.0, fat:0.0, cat:"调料" },
    { name:"蜂蜜", cal:304, protein:0.3, carbs:80.0, fat:0.0, cat:"调料" },

    // ============ 以下为新扩展菜品数据 ============

    // ---- 炒菜类（含油烹饪，每100克成品） ----
    { name:"番茄炒蛋", cal:87, protein:5.8, carbs:4.2, fat:5.0, cat:"炒菜" },
    { name:"青椒肉丝", cal:112, protein:9.5, carbs:3.8, fat:6.5, cat:"炒菜" },
    { name:"宫保鸡丁", cal:168, protein:14.2, carbs:8.5, fat:8.0, cat:"炒菜" },
    { name:"鱼香肉丝", cal:145, protein:10.5, carbs:7.8, fat:7.2, cat:"炒菜" },
    { name:"麻婆豆腐", cal:92, protein:6.8, carbs:3.5, fat:5.5, cat:"炒菜" },
    { name:"回锅肉", cal:245, protein:12.0, carbs:5.0, fat:18.5, cat:"炒菜" },
    { name:"糖醋里脊", cal:220, protein:11.0, carbs:22.0, fat:9.5, cat:"炒菜" },
    { name:"蒜蓉西兰花", cal:52, protein:3.0, carbs:6.0, fat:2.2, cat:"炒菜" },
    { name:"地三鲜", cal:118, protein:2.5, carbs:12.0, fat:7.0, cat:"炒菜" },
    { name:"干煸四季豆", cal:95, protein:3.0, carbs:8.5, fat:5.8, cat:"炒菜" },
    { name:"酸辣土豆丝", cal:85, protein:2.0, carbs:15.0, fat:2.5, cat:"炒菜" },
    { name:"蚝油生菜", cal:38, protein:1.6, carbs:3.5, fat:2.0, cat:"炒菜" },
    { name:"蒜苔炒肉", cal:108, protein:8.5, carbs:5.2, fat:5.8, cat:"炒菜" },
    { name:"芹菜炒牛肉", cal:98, protein:12.0, carbs:3.0, fat:4.5, cat:"炒菜" },
    { name:"韭菜炒鸡蛋", cal:105, protein:7.2, carbs:3.0, fat:6.8, cat:"炒菜" },
    { name:"西葫芦炒鸡蛋", cal:72, protein:5.0, carbs:3.5, fat:4.0, cat:"炒菜" },
    { name:"木须肉", cal:125, protein:10.5, carbs:4.5, fat:7.0, cat:"炒菜" },
    { name:"辣子鸡丁", cal:185, protein:15.0, carbs:7.0, fat:10.5, cat:"炒菜" },
    { name:"香菇青菜", cal:42, protein:3.2, carbs:5.0, fat:1.5, cat:"炒菜" },
    { name:"洋葱炒肉", cal:115, protein:9.0, carbs:6.5, fat:5.8, cat:"炒菜" },
    { name:"红烧茄子", cal:98, protein:1.5, carbs:10.0, fat:6.2, cat:"炒菜" },
    { name:"炒豆芽", cal:45, protein:3.0, carbs:4.5, fat:2.0, cat:"炒菜" },
    { name:"尖椒炒肉", cal:128, protein:10.0, carbs:4.0, fat:7.8, cat:"炒菜" },
    { name:"葱爆羊肉", cal:168, protein:16.0, carbs:3.5, fat:10.0, cat:"炒菜" },

    // ---- 汤羹类（每100毫升） ----
    { name:"番茄蛋花汤", cal:22, protein:1.5, carbs:2.0, fat:0.8, cat:"汤羹" },
    { name:"紫菜蛋花汤", cal:18, protein:2.0, carbs:1.2, fat:0.5, cat:"汤羹" },
    { name:"冬瓜排骨汤", cal:45, protein:4.5, carbs:2.0, fat:2.2, cat:"汤羹" },
    { name:"玉米排骨汤", cal:52, protein:4.8, carbs:4.0, fat:2.0, cat:"汤羹" },
    { name:"鸡汤(清炖)", cal:38, protein:5.0, carbs:1.0, fat:1.8, cat:"汤羹" },
    { name:"酸辣汤", cal:28, protein:3.0, carbs:3.5, fat:0.5, cat:"汤羹" },
    { name:"豆腐青菜汤", cal:16, protein:2.0, carbs:1.5, fat:0.3, cat:"汤羹" },
    { name:"鲫鱼豆腐汤", cal:35, protein:5.5, carbs:1.0, fat:1.2, cat:"汤羹" },
    { name:"银耳莲子羹", cal:42, protein:1.2, carbs:9.0, fat:0.2, cat:"汤羹" },
    { name:"绿豆汤", cal:28, protein:1.5, carbs:6.0, fat:0.1, cat:"汤羹" },
    { name:"牛肉汤", cal:42, protein:6.5, carbs:0.8, fat:1.8, cat:"汤羹" },
    { name:"羊肉汤", cal:52, protein:6.0, carbs:1.0, fat:3.0, cat:"汤羹" },
    { name:"鸡蛋羹", cal:48, protein:4.5, carbs:1.0, fat:2.8, cat:"汤羹" },
    { name:"酸菜鱼汤", cal:38, protein:5.0, carbs:1.0, fat:1.8, cat:"汤羹" },
    { name:"味噌汤", cal:22, protein:2.0, carbs:2.5, fat:0.5, cat:"汤羹" },

    // ---- 炖菜/红烧类（每100克成品） ----
    { name:"红烧肉", cal:305, protein:10.0, carbs:8.0, fat:25.0, cat:"炖菜" },
    { name:"红烧排骨", cal:252, protein:15.0, carbs:6.5, fat:18.0, cat:"炖菜" },
    { name:"红烧牛肉", cal:178, protein:18.0, carbs:5.0, fat:9.5, cat:"炖菜" },
    { name:"土豆烧牛肉", cal:132, protein:12.0, carbs:10.0, fat:5.0, cat:"炖菜" },
    { name:"黄焖鸡", cal:155, protein:13.5, carbs:5.0, fat:8.5, cat:"炖菜" },
    { name:"酱骨架", cal:195, protein:16.0, carbs:3.0, fat:13.0, cat:"炖菜" },
    { name:"啤酒鸭", cal:172, protein:14.0, carbs:3.5, fat:11.0, cat:"炖菜" },
    { name:"咖喱鸡", cal:142, protein:12.0, carbs:8.0, fat:6.5, cat:"炖菜" },
    { name:"番茄牛腩", cal:118, protein:11.0, carbs:5.5, fat:5.5, cat:"炖菜" },
    { name:"小鸡炖蘑菇", cal:128, protein:14.0, carbs:4.0, fat:6.0, cat:"炖菜" },
    { name:"红烧带鱼", cal:155, protein:16.0, carbs:4.0, fat:8.0, cat:"炖菜" },
    { name:"排骨炖豆角", cal:138, protein:9.0, carbs:7.0, fat:7.5, cat:"炖菜" },

    // ---- 蒸菜类（每100克成品） ----
    { name:"清蒸鲈鱼", cal:98, protein:17.5, carbs:0.5, fat:3.0, cat:"蒸菜" },
    { name:"蒸蛋羹", cal:52, protein:5.0, carbs:1.2, fat:3.0, cat:"蒸菜" },
    { name:"粉蒸肉", cal:278, protein:12.0, carbs:18.0, fat:16.0, cat:"蒸菜" },
    { name:"蒸排骨", cal:185, protein:14.0, carbs:3.0, fat:13.0, cat:"蒸菜" },
    { name:"蒸红薯", cal:86, protein:1.6, carbs:20.1, fat:0.1, cat:"蒸菜" },
    { name:"蒸山药", cal:57, protein:1.5, carbs:12.4, fat:0.1, cat:"蒸菜" },
    { name:"蒜蓉粉丝蒸虾", cal:85, protein:12.0, carbs:6.0, fat:1.5, cat:"蒸菜" },
    { name:"蒸饺(猪肉白菜)", cal:198, protein:8.5, carbs:24.0, fat:7.5, cat:"蒸菜" },
    { name:"肠粉(鸡蛋)", cal:128, protein:4.5, carbs:17.0, fat:4.5, cat:"蒸菜" },
    { name:"小笼包", cal:215, protein:9.0, carbs:22.0, fat:10.0, cat:"蒸菜" },

    // ---- 凉菜/卤味类（每100克） ----
    { name:"凉拌黄瓜", cal:32, protein:0.8, carbs:4.5, fat:1.5, cat:"凉菜" },
    { name:"凉拌木耳", cal:52, protein:2.5, carbs:8.0, fat:1.2, cat:"凉菜" },
    { name:"皮蛋豆腐", cal:72, protein:6.5, carbs:2.5, fat:3.8, cat:"凉菜" },
    { name:"拍黄瓜", cal:30, protein:0.8, carbs:4.0, fat:1.5, cat:"凉菜" },
    { name:"凉拌海带丝", cal:42, protein:1.8, carbs:7.5, fat:0.8, cat:"凉菜" },
    { name:"口水鸡", cal:185, protein:16.0, carbs:3.0, fat:12.0, cat:"凉菜" },
    { name:"卤牛肉", cal:152, protein:24.0, carbs:2.0, fat:5.5, cat:"凉菜" },
    { name:"卤鸡爪", cal:220, protein:16.0, carbs:0.5, fat:17.0, cat:"凉菜" },
    { name:"凉皮", cal:118, protein:4.0, carbs:21.0, fat:2.0, cat:"凉菜" },
    { name:"凉面", cal:145, protein:5.0, carbs:27.0, fat:2.5, cat:"凉菜" },

    // ---- 品牌/包装食品 ----
    { name:"康师傅红烧牛肉面", cal:472, protein:9.5, carbs:60.0, fat:21.0, cat:"品牌" },
    { name:"统一老坛酸菜面", cal:465, protein:9.0, carbs:58.0, fat:22.0, cat:"品牌" },
    { name:"奥利奥饼干", cal:483, protein:5.0, carbs:68.0, fat:21.0, cat:"品牌" },
    { name:"乐事原味薯片", cal:542, protein:6.5, carbs:52.0, fat:35.0, cat:"品牌" },
    { name:"士力架", cal:488, protein:8.5, carbs:60.0, fat:24.0, cat:"品牌" },
    { name:"德芙牛奶巧克力", cal:538, protein:7.0, carbs:55.0, fat:32.0, cat:"品牌" },
    { name:"蒙牛纯牛奶", cal:65, protein:3.2, carbs:4.8, fat:3.5, cat:"品牌" },
    { name:"伊利纯牛奶", cal:64, protein:3.1, carbs:4.9, fat:3.4, cat:"品牌" },
    { name:"安慕希酸奶", cal:88, protein:3.0, carbs:13.0, fat:2.8, cat:"品牌" },
    { name:"养乐多", cal:68, protein:1.2, carbs:15.0, fat:0.1, cat:"品牌" },
    { name:"王老吉凉茶", cal:36, protein:0.0, carbs:9.0, fat:0.0, cat:"品牌" },
    { name:"红牛维生素饮料", cal:46, protein:0.0, carbs:11.0, fat:0.0, cat:"品牌" },
    { name:"三只松鼠每日坚果", cal:575, protein:16.0, carbs:22.0, fat:46.0, cat:"品牌" },
    { name:"旺旺仙贝", cal:492, protein:5.0, carbs:68.0, fat:22.0, cat:"品牌" },
    { name:"美好时光海苔", cal:248, protein:35.0, carbs:28.0, fat:2.5, cat:"品牌" },
    { name:"康师傅冰红茶", cal:38, protein:0.0, carbs:9.5, fat:0.0, cat:"品牌" },
    { name:"雀巢速溶咖啡", cal:55, protein:1.5, carbs:9.0, fat:1.2, cat:"品牌" },
    { name:"老干妈辣椒酱", cal:425, protein:6.0, carbs:12.0, fat:38.0, cat:"品牌" },

    // ---- 粥/粉/面类主食 ----
    { name:"皮蛋瘦肉粥", cal:52, protein:3.5, carbs:7.0, fat:1.2, cat:"主食" },
    { name:"南瓜粥", cal:32, protein:0.8, carbs:7.0, fat:0.1, cat:"主食" },
    { name:"八宝粥", cal:78, protein:2.0, carbs:16.0, fat:0.5, cat:"主食" },
    { name:"炒河粉", cal:178, protein:5.0, carbs:25.0, fat:6.5, cat:"主食" },
    { name:"炒米粉", cal:172, protein:4.5, carbs:26.0, fat:6.0, cat:"主食" },
    { name:"兰州拉面", cal:125, protein:5.5, carbs:22.0, fat:2.0, cat:"主食" },
    { name:"炸酱面", cal:185, protein:7.5, carbs:26.0, fat:5.5, cat:"主食" },
    { name:"担担面", cal:168, protein:6.0, carbs:24.0, fat:5.5, cat:"主食" },
    { name:"酸辣粉", cal:138, protein:3.0, carbs:22.0, fat:4.5, cat:"主食" },
    { name:"螺蛳粉", cal:155, protein:5.0, carbs:21.0, fat:5.5, cat:"主食" },
    { name:"过桥米线", cal:128, protein:4.5, carbs:20.0, fat:3.5, cat:"主食" },
    { name:"肉夹馍", cal:228, protein:12.0, carbs:25.0, fat:8.5, cat:"主食" },
    { name:"煎饼果子", cal:185, protein:7.0, carbs:22.0, fat:7.5, cat:"主食" },
    { name:"手抓饼", cal:278, protein:6.0, carbs:32.0, fat:14.0, cat:"主食" },

    // ---- 火锅/烧烤类（每100克生食材） ----
    { name:"肥牛卷", cal:285, protein:18.0, carbs:0.0, fat:24.0, cat:"肉类" },
    { name:"肥羊卷", cal:310, protein:19.0, carbs:0.0, fat:26.0, cat:"肉类" },
    { name:"毛肚", cal:85, protein:14.0, carbs:0.0, fat:3.0, cat:"肉类" },
    { name:"黄喉", cal:72, protein:12.0, carbs:0.0, fat:2.5, cat:"肉类" },
    { name:"鸭血", cal:58, protein:12.0, carbs:0.5, fat:1.0, cat:"肉类" },
    { name:"午餐肉", cal:278, protein:10.0, carbs:8.0, fat:21.0, cat:"肉类" },
];

// ========== 全局状态 ==========
var currentDate = getTodayStr();
var currentMeal = 'breakfast';
var selectedFood = null;
var selectedCategory = '全部';

// 今日饮食记录 {date: {breakfast:[], lunch:[], dinner:[], snacks:[]}}
var dietLog = loadData();

// ========== 数据持久化 ==========
function loadData() {
    var data = localStorage.getItem('dietLog');
    return data ? JSON.parse(data) : {};
}

function saveData() {
    localStorage.setItem('dietLog', JSON.stringify(dietLog));
}

// ========== 自定义食物管理 ==========
var customFoods = loadCustomFoods();

function loadCustomFoods() {
    var data = localStorage.getItem('customFoods');
    return data ? JSON.parse(data) : [];
}

function saveCustomFoods() {
    localStorage.setItem('customFoods', JSON.stringify(customFoods));
}

function getAllFoods() {
    return foodDB.concat(customFoods);
}

// ========== 用户身体数据 ==========
var userProfile = loadProfile();

function loadProfile() {
    var data = localStorage.getItem('userProfile');
    return data ? JSON.parse(data) : null;
}

function saveProfile() {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function getTodayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth()+1) + '-' + pad(d.getDate());
}

function pad(n) { return n < 10 ? '0'+n : ''+n; }

function getDayData(date) {
    if (!dietLog[date]) dietLog[date] = {breakfast:[], lunch:[], dinner:[], snacks:[]};
    return dietLog[date];
}

// ========== 初始化 ==========
function init() {
    updateDateDisplay();
    renderCategoryBar();
    renderFoodList();
    renderTodayLog();
    updateSummary();
    renderAdvicePanel();
    bindEvents();
}

function bindEvents() {
    // Tab切换
    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
            document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
            this.classList.add('active');
            var panelMap = {foods:'panelFoods', today:'panelToday', advice:'panelAdvice'};
            document.getElementById(panelMap[this.dataset.tab]).classList.add('active');
            if (this.dataset.tab === 'advice') renderAdvicePanel();
        });
    });

    // 日期导航
    document.getElementById('btnPrevDay').addEventListener('click', function() { changeDate(-1); });
    document.getElementById('btnNextDay').addEventListener('click', function() { changeDate(1); });
    document.getElementById('btnToday').addEventListener('click', function() { currentDate = getTodayStr(); refreshAll(); });

    // 历史记录
    document.getElementById('btnHistory').addEventListener('click', showHistory);
    document.getElementById('btnCloseHistory').addEventListener('click', function() {
        document.getElementById('modalHistory').classList.remove('show');
    });

    // 自定义食物
    document.getElementById('btnCustomFood').addEventListener('click', openCustomFoodModal);
    document.getElementById('btnCloseCustom').addEventListener('click', function() {
        document.getElementById('modalCustomFood').classList.remove('show');
    });
    document.getElementById('btnConfirmCustom').addEventListener('click', confirmCustomFood);
    document.getElementById('btnManageCustom').addEventListener('click', toggleCustomList);

    // 个人设置
    document.getElementById('btnSettings').addEventListener('click', openSettings);
    document.getElementById('btnCloseSettings').addEventListener('click', function() {
        document.getElementById('modalSettings').classList.remove('show');
    });
    document.getElementById('btnSaveProfile').addEventListener('click', saveProfileData);
    document.getElementById('btnOpenSettingsFromAdvice').addEventListener('click', openSettings);
    document.getElementById('btnEditProfile').addEventListener('click', openSettings);

    // 性别选择
    document.querySelectorAll('.gender-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.gender-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
        });
    });

    // 添加食物弹窗
    document.getElementById('btnCloseAdd').addEventListener('click', function() {
        document.getElementById('modalAddFood').classList.remove('show');
    });
    document.getElementById('btnConfirmAdd').addEventListener('click', confirmAddFood);

    // 用餐类型选择
    document.querySelectorAll('.meal-type-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.meal-type-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentMeal = this.dataset.meal;
        });
    });

    document.getElementById('inputAmount').addEventListener('input', updatePreview);

    // 点击弹窗遮罩关闭
    ['modalHistory','modalAddFood','modalCustomFood','modalSettings'].forEach(function(id) {
        document.getElementById(id).addEventListener('click', function(e) {
            if (e.target === this) this.classList.remove('show');
        });
    });
}

// ========== 日期控制 ==========
function changeDate(delta) {
    var parts = currentDate.split('-');
    var d = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
    d.setDate(d.getDate() + delta);
    currentDate = d.getFullYear() + '-' + pad(d.getMonth()+1) + '-' + pad(d.getDate());
    refreshAll();
}

function updateDateDisplay() {
    var parts = currentDate.split('-');
    var weekdays = ['日','一','二','三','四','五','六'];
    var d = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
    var weekday = weekdays[d.getDay()];
    var isToday = currentDate === getTodayStr();
    document.getElementById('dateDisplay').textContent = parts[0]+'年'+parts[1]+'月'+parts[2]+'日 星期'+weekday + (isToday ? ' (今天)' : '');
}

function refreshAll() {
    updateDateDisplay();
    renderTodayLog();
    updateSummary();
}

// ========== 食物库渲染 ==========
function renderCategoryBar() {
    var categories = ['全部'];
    var seen = {};
    getAllFoods().forEach(function(f) {
        if (!seen[f.cat]) { seen[f.cat] = true; categories.push(f.cat); }
    });
    var html = '';
    categories.forEach(function(cat) {
        var active = (cat === selectedCategory) ? ' active' : '';
        html += '<button class="cat-btn'+active+'" onclick="selectCategory(\''+cat+'\')">'+cat+'</button>';
    });
    document.getElementById('categoryBar').innerHTML = html;
}

function selectCategory(cat) {
    selectedCategory = cat;
    renderCategoryBar();
    renderFoodList();
}

function renderFoodList() {
    var keyword = document.getElementById('searchInput').value.trim().toLowerCase();
    var allFoods = getAllFoods();
    var filtered = allFoods.filter(function(f) {
        var matchCat = (selectedCategory === '全部' || f.cat === selectedCategory);
        var matchSearch = !keyword || f.name.toLowerCase().indexOf(keyword) !== -1;
        return matchCat && matchSearch;
    });

    var html = '';
    filtered.forEach(function(f, idx) {
        var isCustom = customFoods.indexOf(f) !== -1;
        html += '<div class="food-item" onclick="openAddFood(\''+f.name.replace(/'/g,"\\'")+'\')">';
        html += '<div class="food-info">';
        html += '<div class="food-name">'+f.name+(isCustom ? ' <span class="custom-badge">自定</span>' : '')+'</div>';
        html += '<div class="food-meta">每100g: '+f.cal+'千卡 | 蛋白质'+f.protein+'g | 碳水'+f.carbs+'g | 脂肪'+f.fat+'g</div>';
        html += '</div>';
        html += '<div class="food-cat-tag cat-'+f.cat+'">'+f.cat+'</div>';
        html += '<span class="food-add-icon">＋</span>';
        html += '</div>';
    });

    if (filtered.length === 0) {
        html = '<div class="empty-hint">本地食物库未找到匹配结果</div>';
    }

    document.getElementById('foodList').innerHTML = html;

    // 控制联网搜索区域显示
    var keyword = document.getElementById('searchInput').value.trim();
    var onlineSection = document.getElementById('onlineSection');
    if (keyword.length >= 1 && filtered.length < 3) {
        onlineSection.style.display = 'block';
        document.getElementById('btnOnlineSearch').textContent = '🌐 在 Open Food Facts 中搜索 "'+keyword+'"';
        // 清除之前的联网结果
        document.getElementById('onlineResults').innerHTML = '';
        document.getElementById('onlineError').style.display = 'none';
    } else if (keyword.length === 0) {
        onlineSection.style.display = 'none';
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    renderFoodList();
}

// ========== 添加食物流程 ==========
function openAddFood(foodName) {
    selectedFood = getAllFoods().find(function(f) { return f.name === foodName; });
    if (!selectedFood) return;

    document.getElementById('modalFoodName').textContent = '添加：' + foodName;
    document.getElementById('inputAmount').value = 100;
    currentMeal = 'breakfast';
    document.querySelectorAll('.meal-type-btn').forEach(function(b, i) {
        b.classList.toggle('active', i === 0);
    });

    var n = selectedFood;
    document.getElementById('nutritionPreview').innerHTML =
        '<span class="np-item">🔥 '+n.cal+'千卡</span>' +
        '<span class="np-item">🥩 蛋白质'+n.protein+'g</span>' +
        '<span class="np-item">🍚 碳水'+n.carbs+'g</span>' +
        '<span class="np-item">🧈 脂肪'+n.fat+'g</span>' +
        '<span class="np-note">（每100克）</span>';

    updatePreview();
    document.getElementById('modalAddFood').classList.add('show');
}

function updatePreview() {
    if (!selectedFood) return;
    var amount = parseFloat(document.getElementById('inputAmount').value) || 0;
    var ratio = amount / 100;
    var cal = (selectedFood.cal * ratio).toFixed(0);
    var protein = (selectedFood.protein * ratio).toFixed(1);
    var carbs = (selectedFood.carbs * ratio).toFixed(1);
    var fat = (selectedFood.fat * ratio).toFixed(1);

    document.getElementById('actualPreview').innerHTML =
        '<span class="ap-item">🔥 <b>'+cal+'</b>千卡</span>' +
        '<span class="ap-item">🥩 <b>'+protein+'</b>g蛋白质</span>' +
        '<span class="ap-item">🍚 <b>'+carbs+'</b>g碳水</span>' +
        '<span class="ap-item">🧈 <b>'+fat+'</b>g脂肪</span>';
}

function confirmAddFood() {
    if (!selectedFood) return;
    var amount = parseFloat(document.getElementById('inputAmount').value) || 0;
    if (amount <= 0) { alert('请输入有效的食用份量'); return; }

    var ratio = amount / 100;
    var entry = {
        name: selectedFood.name,
        amount: amount,
        cal: Math.round(selectedFood.cal * ratio),
        protein: parseFloat((selectedFood.protein * ratio).toFixed(1)),
        carbs: parseFloat((selectedFood.carbs * ratio).toFixed(1)),
        fat: parseFloat((selectedFood.fat * ratio).toFixed(1)),
        time: new Date().toLocaleTimeString('zh-CN', {hour:'2-digit',minute:'2-digit'})
    };

    var dayData = getDayData(currentDate);
    dayData[currentMeal].push(entry);
    saveData();

    document.getElementById('modalAddFood').classList.remove('show');
    renderTodayLog();
    updateSummary();
}

// ========== 今日记录渲染 ==========
function renderTodayLog() {
    var dayData = getDayData(currentDate);
    var meals = [
        {id:'breakfast', title:'🌅 早餐', items:'breakfastItems', summary:'breakfastSummary'},
        {id:'lunch', title:'☀️ 午餐', items:'lunchItems', summary:'lunchSummary'},
        {id:'dinner', title:'🌙 晚餐', items:'dinnerItems', summary:'dinnerSummary'},
        {id:'snacks', title:'🍪 加餐/零食', items:'snacksItems', summary:'snacksSummary'},
    ];

    var totalItems = 0;

    meals.forEach(function(meal) {
        var entries = dayData[meal.id] || [];
        totalItems += entries.length;
        var html = '';
        if (entries.length === 0) {
            html = '<div class="meal-empty">暂无记录，去食物库添加吧</div>';
        } else {
            entries.forEach(function(e, i) {
                html += '<div class="log-item">';
                html += '<div class="log-item-info">';
                html += '<span class="log-item-name">'+e.name+'</span>';
                html += '<span class="log-item-amount">'+e.amount+'g</span>';
                html += '<span class="log-item-time">'+e.time+'</span>';
                html += '</div>';
                html += '<div class="log-item-nutrition">';
                html += '🔥'+e.cal+'千卡  🥩'+e.protein+'g  🍚'+e.carbs+'g  🧈'+e.fat+'g';
                html += '</div>';
                html += '<button class="btn-del-item" onclick="removeFood(\''+meal.id+'\','+i+')">✕</button>';
                html += '</div>';
            });
        }
        document.getElementById(meal.items).innerHTML = html;

        // 计算该餐汇总
        var mcal = 0, mprotein = 0, mcarbs = 0, mfat = 0;
        entries.forEach(function(e) { mcal+=e.cal; mprotein+=e.protein; mcarbs+=e.carbs; mfat+=e.fat; });
        document.getElementById(meal.summary).innerHTML = entries.length > 0 ?
            '小计：🔥'+mcal+'千卡 | 🥩'+mprotein.toFixed(1)+'g | 🍚'+mcarbs.toFixed(1)+'g | 🧈'+mfat.toFixed(1)+'g' : '';
    });

    document.getElementById('logCount').textContent = totalItems;
}

function removeFood(mealType, index) {
    var dayData = getDayData(currentDate);
    dayData[mealType].splice(index, 1);
    saveData();
    renderTodayLog();
    updateSummary();
}

// ========== 营养汇总 ==========
function updateSummary() {
    var dayData = getDayData(currentDate);
    var totalCal = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;

    ['breakfast','lunch','dinner','snacks'].forEach(function(meal) {
        (dayData[meal] || []).forEach(function(e) {
            totalCal += e.cal;
            totalProtein += e.protein;
            totalCarbs += e.carbs;
            totalFat += e.fat;
        });
    });

    // 目标值（优先使用AI计算值，否则使用默认值）
    var targets = getTargets();

    // 更新数值
    document.getElementById('totalCal').textContent = totalCal;
    document.getElementById('totalProtein').textContent = totalProtein.toFixed(1);
    document.getElementById('totalCarbs').textContent = totalCarbs.toFixed(1);
    document.getElementById('totalFat').textContent = totalFat.toFixed(1);

    // 更新目标标签
    document.getElementById('targetCal').textContent = '目标 ' + targets.cal;
    document.getElementById('targetProtein').textContent = '目标 ' + targets.protein;
    document.getElementById('targetCarbs').textContent = '目标 ' + targets.carbs;
    document.getElementById('targetFat').textContent = '目标 ' + targets.fat;

    // 更新进度条
    updateBar('barCal', 'pctCal', totalCal, targets.cal);
    updateBar('barProtein', 'pctProtein', totalProtein, targets.protein);
    updateBar('barCarbs', 'pctCarbs', totalCarbs, targets.carbs);
    updateBar('barFat', 'pctFat', totalFat, targets.fat);
}

function updateBar(barId, pctId, value, target) {
    var pct = Math.min(100, Math.round(value / target * 100));
    document.getElementById(barId).style.width = pct + '%';
    document.getElementById(pctId).textContent = pct + '%';
    // 颜色变化
    var bar = document.getElementById(barId);
    bar.className = 'progress-fill ' + bar.className.split(' ')[0];
    if (pct > 100) bar.classList.add('over');
    else if (pct > 80) bar.classList.add('high');
    else if (pct > 50) bar.classList.add('mid');
}

// ========== 历史记录 ==========
function showHistory() {
    var dates = Object.keys(dietLog).sort().reverse();
    var html = '';
    if (dates.length === 0) {
        html = '<div class="empty-hint">暂无历史记录</div>';
    } else {
        dates.forEach(function(date) {
            var dayData = dietLog[date];
            var cal = 0, protein = 0, carbs = 0, fat = 0, count = 0;
            ['breakfast','lunch','dinner','snacks'].forEach(function(meal) {
                (dayData[meal] || []).forEach(function(e) {
                    cal += e.cal; protein += e.protein; carbs += e.carbs; fat += e.fat; count++;
                });
            });
            if (count === 0) return;
            var parts = date.split('-');
            var isToday = date === getTodayStr();
            html += '<div class="history-row" onclick="loadDate(\''+date+'\')">';
            html += '<div class="history-date">'+parts[0]+'年'+parts[1]+'月'+parts[2]+'日'+(isToday?' (今天)':'')+'</div>';
            html += '<div class="history-stats">'+count+'种食物 | 🔥'+cal+'千卡 🥩'+protein.toFixed(0)+'g 🍚'+carbs.toFixed(0)+'g 🧈'+fat.toFixed(0)+'g</div>';
            html += '</div>';
        });
    }
    document.getElementById('historyBody').innerHTML = html;
    document.getElementById('modalHistory').classList.add('show');
}

function loadDate(date) {
    currentDate = date;
    document.getElementById('modalHistory').classList.remove('show');
    refreshAll();
}

// ========== 自定义食物管理 ==========
function openCustomFoodModal() {
    document.getElementById('customName').value = '';
    document.getElementById('customCal').value = 100;
    document.getElementById('customProtein').value = 3;
    document.getElementById('customCarbs').value = 10;
    document.getElementById('customFat').value = 1;
    document.getElementById('customCat').value = '自定义';
    document.getElementById('customList').style.display = 'none';
    updateCustomCount();
    document.getElementById('modalCustomFood').classList.add('show');
}

function confirmCustomFood() {
    var name = document.getElementById('customName').value.trim();
    if (!name) { alert('请输入食物名称'); return; }
    if (getAllFoods().some(function(f) { return f.name === name; })) {
        alert('该食物名称已存在，请使用其他名称'); return;
    }
    var cal = parseFloat(document.getElementById('customCal').value) || 0;
    var protein = parseFloat(document.getElementById('customProtein').value) || 0;
    var carbs = parseFloat(document.getElementById('customCarbs').value) || 0;
    var fat = parseFloat(document.getElementById('customFat').value) || 0;

    customFoods.push({
        name: name,
        cal: cal,
        protein: protein,
        carbs: carbs,
        fat: fat,
        cat: document.getElementById('customCat').value
    });
    saveCustomFoods();
    refreshAll();
    renderCategoryBar();
    renderFoodList();
    updateCustomCount();
    document.getElementById('modalCustomFood').classList.remove('show');
}

function toggleCustomList() {
    var list = document.getElementById('customList');
    if (list.style.display === 'none') {
        renderCustomList();
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

function renderCustomList() {
    var html = '';
    if (customFoods.length === 0) {
        html = '<div class="empty-hint">暂无自定义食物</div>';
    } else {
        customFoods.forEach(function(f, i) {
            html += '<div class="custom-list-item">';
            html += '<span>'+f.name+' ('+f.cat+') — 🔥'+f.cal+'千卡</span>';
            html += '<button class="btn-del-item" onclick="deleteCustomFood('+i+')">✕</button>';
            html += '</div>';
        });
    }
    document.getElementById('customList').innerHTML = html;
}

function deleteCustomFood(index) {
    if (!confirm('确定删除"' + customFoods[index].name + '"吗？')) return;
    customFoods.splice(index, 1);
    saveCustomFoods();
    renderCustomList();
    renderCategoryBar();
    renderFoodList();
    updateCustomCount();
}

function updateCustomCount() {
    document.getElementById('customCount').textContent = customFoods.length;
}

// ========== 身体数据分析引擎 ==========
function getTargets() {
    if (!userProfile) {
        return {cal:2000, protein:60, carbs:250, fat:65};
    }
    return calculateTargets(userProfile);
}

function calculateTargets(p) {
    // Mifflin-St Jeor 公式计算 BMR
    var bmr;
    if (p.gender === 'male') {
        bmr = 10 * p.weight + 6.25 * p.height - 5 * p.age + 5;
    } else {
        bmr = 10 * p.weight + 6.25 * p.height - 5 * p.age - 161;
    }

    // TDEE = BMR × 活动系数
    var tdee = Math.round(bmr * p.activity);

    // 根据目标调整热量
    var calTarget;
    if (p.goal === 'cut') {
        calTarget = Math.round(tdee * 0.80);  // 减脂：20%热量缺口
    } else if (p.goal === 'bulk') {
        calTarget = Math.round(tdee * 1.15);  // 增肌：15%热量盈余
    } else {
        calTarget = tdee;  // 保持：维持热量
    }

    // 蛋白质目标（g/kg 体重）
    var proteinPerKg;
    if (p.goal === 'cut') {
        proteinPerKg = 2.2;  // 减脂期高蛋白保留肌肉
    } else if (p.goal === 'bulk') {
        proteinPerKg = 2.0;  // 增肌期充足蛋白
    } else {
        proteinPerKg = 1.5;  // 维持期标准蛋白
    }
    var proteinTarget = Math.round(p.weight * proteinPerKg);

    // 脂肪目标（g/kg 体重）
    var fatPerKg;
    if (p.goal === 'cut') {
        fatPerKg = 0.8;   // 减脂期低脂
    } else if (p.goal === 'bulk') {
        fatPerKg = 1.0;   // 增肌期适中脂肪
    } else {
        fatPerKg = 0.9;
    }
    var fatTarget = Math.round(p.weight * fatPerKg);

    // 碳水目标：剩余热量来自碳水（每克碳水4千卡）
    var carbCal = calTarget - (proteinTarget * 4) - (fatTarget * 9);
    var carbsTarget = Math.round(carbCal / 4);
    if (carbsTarget < 50) carbsTarget = 50;  // 碳水不低于50g

    return {
        cal: calTarget,
        protein: proteinTarget,
        carbs: carbsTarget,
        fat: fatTarget,
        bmr: Math.round(bmr),
        tdee: tdee
    };
}

// ========== 个人设置 ==========
function openSettings() {
    document.getElementById('modalSettings').classList.remove('show');
    document.getElementById('modalCustomFood').classList.remove('show');

    if (userProfile) {
        document.getElementById('profileAge').value = userProfile.age;
        document.getElementById('profileHeight').value = userProfile.height;
        document.getElementById('profileWeight').value = userProfile.weight;
        document.getElementById('profileActivity').value = userProfile.activity;
        document.getElementById('profileGoal').value = userProfile.goal;
        document.querySelectorAll('.gender-btn').forEach(function(b) {
            b.classList.toggle('active', b.dataset.gender === userProfile.gender);
        });
    }
    document.getElementById('modalSettings').classList.add('show');
}

function saveProfileData() {
    var activeGenderBtn = document.querySelector('.gender-btn.active');
    var gender = activeGenderBtn ? activeGenderBtn.dataset.gender : 'male';

    userProfile = {
        gender: gender,
        age: parseInt(document.getElementById('profileAge').value) || 22,
        height: parseFloat(document.getElementById('profileHeight').value) || 170,
        weight: parseFloat(document.getElementById('profileWeight').value) || 65,
        activity: parseFloat(document.getElementById('profileActivity').value) || 1.375,
        goal: document.getElementById('profileGoal').value
    };
    saveProfile();
    updateSummary();
    renderAdvicePanel();
    document.getElementById('modalSettings').classList.remove('show');
}

// ========== 智能建议渲染 ==========
function renderAdvicePanel() {
    if (!userProfile) {
        document.getElementById('advicePlaceholder').style.display = 'block';
        document.getElementById('adviceResult').style.display = 'none';
        return;
    }

    document.getElementById('advicePlaceholder').style.display = 'none';
    document.getElementById('adviceResult').style.display = 'block';

    var targets = calculateTargets(userProfile);
    var p = userProfile;

    // 阶段判定
    var phaseName, phaseEmoji, phaseColor, phaseDesc;
    if (p.goal === 'cut') {
        phaseName = '减脂期';
        phaseEmoji = '🔥';
        phaseColor = '#ef4444';
        phaseDesc = '当前处于热量缺口状态，目标是减少体脂同时尽量保留肌肉。建议配合力量训练，关注蛋白质摄入。';
    } else if (p.goal === 'bulk') {
        phaseName = '增肌期';
        phaseEmoji = '💪';
        phaseColor = '#3b82f6';
        phaseDesc = '当前处于热量盈余状态，目标是最大化肌肉增长。注意控制脂肪增长速度，建议每周增重0.25-0.5kg。';
    } else {
        phaseName = '保持期';
        phaseEmoji = '⚖️';
        phaseColor = '#10b981';
        phaseDesc = '当前处于热量平衡状态，维持现有体型。可以适当调整训练计划来改善身体成分。';
    }

    document.getElementById('advicePhase').innerHTML =
        '<div class="phase-badge" style="background:'+phaseColor+'">'+phaseEmoji+' '+phaseName+'</div>' +
        '<p class="phase-desc">'+phaseDesc+'</p>';

    // 身体数据详情
    document.getElementById('adviceDetail').innerHTML =
        '<div class="detail-grid">' +
        '<div class="detail-item"><span class="detail-label">性别</span><span class="detail-val">'+(p.gender==='male'?'男':'女')+'</span></div>' +
        '<div class="detail-item"><span class="detail-label">年龄</span><span class="detail-val">'+p.age+'岁</span></div>' +
        '<div class="detail-item"><span class="detail-label">身高</span><span class="detail-val">'+p.height+'cm</span></div>' +
        '<div class="detail-item"><span class="detail-label">体重</span><span class="detail-val">'+p.weight+'kg</span></div>' +
        '<div class="detail-item"><span class="detail-label">BMI</span><span class="detail-val">'+(p.weight/Math.pow(p.height/100,2)).toFixed(1)+'</span></div>' +
        '<div class="detail-item"><span class="detail-label">BMR</span><span class="detail-val">'+targets.bmr+'千卡</span></div>' +
        '<div class="detail-item"><span class="detail-label">TDEE</span><span class="detail-val">'+targets.tdee+'千卡</span></div>' +
        '<div class="detail-item"><span class="detail-label">活动系数</span><span class="detail-val">×'+p.activity+'</span></div>' +
        '</div>';

    // 每日目标
    document.getElementById('adviceTargets').innerHTML =
        '<h4 class="targets-title">📊 每日营养目标</h4>' +
        '<div class="targets-grid">' +
        '<div class="target-card t-cal"><div class="t-val">'+targets.cal+'</div><div class="t-unit">千卡</div><div class="t-label">热量</div></div>' +
        '<div class="target-card t-protein"><div class="t-val">'+targets.protein+'</div><div class="t-unit">g</div><div class="t-label">蛋白质</div></div>' +
        '<div class="target-card t-carbs"><div class="t-val">'+targets.carbs+'</div><div class="t-unit">g</div><div class="t-label">碳水</div></div>' +
        '<div class="target-card t-fat"><div class="t-val">'+targets.fat+'</div><div class="t-unit">g</div><div class="t-label">脂肪</div></div>' +
        '</div>' +
        '<div class="advice-tips">' + generateAdvice(p.goal, targets, p) + '</div>';
}

function generateAdvice(goal, targets, profile) {
    var tips = '<h4 class="targets-title">💡 个性化建议</h4><ul class="tips-list">';

    if (goal === 'cut') {
        tips += '<li>每日热量缺口约 '+(targets.tdee - targets.cal)+' 千卡，预计每周减重约 0.5kg</li>';
        tips += '<li>蛋白质摄入 '+(targets.protein / profile.weight).toFixed(1)+'g/kg，有助于保留肌肉</li>';
        tips += '<li>优先选择低GI碳水（燕麦、红薯、糙米），控制精制糖摄入</li>';
        tips += '<li>建议每周进行3-4次力量训练 + 2-3次有氧运动</li>';
        tips += '<li>保证每天7-8小时睡眠，降低皮质醇水平</li>';
    } else if (goal === 'bulk') {
        tips += '<li>每日热量盈余约 '+(targets.cal - targets.tdee)+' 千卡，目标每周增重 0.25-0.5kg</li>';
        tips += '<li>蛋白质 '+(targets.protein / profile.weight).toFixed(1)+'g/kg 确保肌肉合成</li>';
        tips += '<li>碳水 '+targets.carbs+'g/天，训练前后优先补充快碳</li>';
        tips += '<li>重点进行渐进超负荷力量训练，每周4-5次</li>';
        tips += '<li>适量健康脂肪（坚果、牛油果、橄榄油）支持激素水平</li>';
    } else {
        tips += '<li>维持当前热量平衡，体重波动在±1kg内属正常</li>';
        tips += '<li>蛋白质 '+(targets.protein / profile.weight).toFixed(1)+'g/kg 满足日常需求</li>';
        tips += '<li>可根据训练强度灵活调整碳水摄入量</li>';
        tips += '<li>保持规律的训练和作息习惯</li>';
    }

    tips += '</ul>';
    return tips;
}

// ========== 联网搜索功能（Open Food Facts API + CORS 代理 + 回退） ==========

// CORS 代理列表（按优先级尝试）
var CORS_PROXIES = [
    'https://corsproxy.io/?',           // 公共 CORS 代理
    'https://api.allorigins.win/raw?url=',
];

// Open Food Facts API 镜像（亚洲节点优先）
var OFF_MIRRORS = [
    'https://jp.openfoodfacts.org',     // 日本镜像 — 亚洲延迟最低
    'https://world.openfoodfacts.org',  // 全球主站
];

var onlineCache = {};   // 会话级搜索缓存
var FETCH_TIMEOUT = 8000; // 8 秒超时

// 带超时的 fetch 封装
function fetchWithTimeout(url, timeoutMs) {
    var controller = new AbortController();
    var timeoutId = setTimeout(function() { controller.abort(); }, timeoutMs);
    return fetch(url, { signal: controller.signal }).then(function(resp) {
        clearTimeout(timeoutId);
        return resp;
    });
}

// 尝试多种方式获取 API 数据
function fetchOFFData(path, keyword) {
    var query = 'search_terms=' + encodeURIComponent(keyword) +
                '&search_simple=1&json=1&page_size=15&lc=zh';

    // 先尝试通过 CORS 代理访问
    function tryProxy(proxyIdx) {
        if (proxyIdx >= CORS_PROXIES.length) return tryDirect(0);
        var url = CORS_PROXIES[proxyIdx] + encodeURIComponent(OFF_MIRRORS[0] + '/cgi/search.pl?' + query);
        return fetchWithTimeout(url, FETCH_TIMEOUT).then(function(r) {
            if (!r.ok) throw new Error('Proxy HTTP ' + r.status);
            return r.json();
        }).catch(function() {
            return tryProxy(proxyIdx + 1);
        });
    }

    // 回退：直接请求 API（部分浏览器/网络可能允许）
    function tryDirect(mirrorIdx) {
        if (mirrorIdx >= OFF_MIRRORS.length) {
            return Promise.reject(new Error('All endpoints unreachable'));
        }
        var url = OFF_MIRRORS[mirrorIdx] + '/cgi/search.pl?' + query;
        return fetchWithTimeout(url, FETCH_TIMEOUT).then(function(r) {
            if (!r.ok) throw new Error('Direct HTTP ' + r.status);
            return r.json();
        }).catch(function() {
            return tryDirect(mirrorIdx + 1);
        });
    }

    return tryProxy(0);
}

function searchOnline() {
    var keyword = document.getElementById('searchInput').value.trim();
    if (!keyword) return;

    if (onlineCache[keyword]) {
        renderOnlineResults(onlineCache[keyword], keyword);
        return;
    }

    var loading = document.getElementById('onlineLoading');
    var results = document.getElementById('onlineResults');
    var error = document.getElementById('onlineError');
    var btn = document.getElementById('btnOnlineSearch');

    loading.style.display = 'flex';
    results.innerHTML = '';
    error.style.display = 'none';
    btn.disabled = true;
    btn.textContent = '⏳ 正在搜索（通过代理）...';

    fetchOFFData('/cgi/search.pl', keyword)
        .then(function(data) {
            loading.style.display = 'none';
            btn.disabled = false;
            btn.textContent = '🌐 在 Open Food Facts 中搜索 "'+keyword+'"';

            if (!data.products || data.products.length === 0) {
                error.style.display = 'block';
                error.innerHTML = '😔 未找到相关食物，试试其他关键词';
                return;
            }

            var parsed = [];
            data.products.forEach(function(p) {
                var n = p.nutriments || {};
                var cal = n['energy-kcal_100g'] || n['energy-kcal'] ||
                          (n['energy_100g'] ? Math.round(n['energy_100g'] / 4.184) : 0);
                if (cal > 0 && cal < 900) {
                    parsed.push({
                        name: p.product_name || p.generic_name || '未知食物',
                        brand: p.brands || '',
                        cal: Math.round(cal),
                        protein: parseFloat((n.proteins_100g || 0).toFixed(1)),
                        carbs: parseFloat((n.carbohydrates_100g || 0).toFixed(1)),
                        fat: parseFloat((n.fat_100g || 0).toFixed(1)),
                        cat: '网络',
                        source: 'Open Food Facts'
                    });
                }
            });

            if (parsed.length === 0) {
                error.style.display = 'block';
                error.innerHTML = '😔 找到相关产品但缺少营养数据，请尝试其他关键词';
                return;
            }

            onlineCache[keyword] = parsed;
            renderOnlineResults(parsed, keyword);
        })
        .catch(function(err) {
            loading.style.display = 'none';
            btn.disabled = false;
            btn.textContent = '🌐 在 Open Food Facts 中搜索 "'+keyword+'"';
            error.style.display = 'block';
            if (err.name === 'AbortError') {
                error.innerHTML = '⏱️ 请求超时（超过'+FETCH_TIMEOUT/1000+'秒），可能网络不稳定，请重试';
            } else {
                error.innerHTML = '⚠️ 无法连接到食物数据库<br><small>可能原因：网络代理限制或 CORS 策略。可尝试使用 VPN 后重试。</small>';
            }
            console.error('Online search error:', err);
        });
}

function renderOnlineResults(results, keyword) {
    var container = document.getElementById('onlineResults');
    var html = '<div class="online-results-title">🔍 找到 ' + results.length + ' 个网络结果</div>';

    results.forEach(function(f) {
        var displayName = f.name + (f.brand ? ' — ' + f.brand : '');
        html += '<div class="food-item online-item" onclick="addOnlineFood(' +
                JSON.stringify(f.name).replace(/"/g, '&quot;') + ')">';
        html += '<div class="food-info">';
        html += '<div class="food-name">' + f.name +
                (f.brand ? ' <span class="online-brand">' + f.brand + '</span>' : '') +
                ' <span class="online-badge">🌐网络</span></div>';
        html += '<div class="food-meta">每100g: ' + f.cal + '千卡 | 蛋白质' + f.protein +
                'g | 碳水' + f.carbs + 'g | 脂肪' + f.fat + 'g</div>';
        html += '</div>';
        html += '<span class="food-add-icon">＋</span>';
        html += '</div>';
    });

    container.innerHTML = html;
}

// 点击网络结果 — 自动存入自定义食物库并打开添加弹窗
function addOnlineFood(nameStr) {
    var keyword = document.getElementById('searchInput').value.trim();
    var cached = onlineCache[keyword] || [];
    var food = cached.find(function(f) { return f.name === nameStr; });
    if (!food) return;

    // 检查是否已存在
    if (getAllFoods().some(function(f) { return f.name === food.name; })) {
        // 已存在，直接打开添加
        openAddFood(food.name);
        return;
    }

    // 自动保存为自定义食物
    customFoods.push({
        name: food.name,
        cal: food.cal,
        protein: food.protein,
        carbs: food.carbs,
        fat: food.fat,
        cat: '网络'
    });
    saveCustomFoods();
    renderCategoryBar();
    updateCustomCount();

    // 打开添加弹窗
    openAddFood(food.name);
}

// ========== 自定义食物表单中的联网查找 ==========
function lookupOnline() {
    var nameInput = document.getElementById('customName');
    var keyword = nameInput.value.trim();
    if (!keyword) {
        alert('请先输入食物名称');
        return;
    }

    // 先检查本地
    var localFound = getAllFoods().find(function(f) {
        return f.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    if (localFound) {
        document.getElementById('customCal').value = localFound.cal;
        document.getElementById('customProtein').value = localFound.protein;
        document.getElementById('customCarbs').value = localFound.carbs;
        document.getElementById('customFat').value = localFound.fat;
        document.getElementById('customCat').value = localFound.cat;
        document.getElementById('lookupResults').style.display = 'block';
        document.getElementById('lookupResults').innerHTML =
            '<span style="color:#10b981;">✓ 已在本地库找到「'+localFound.name+'」，营养数据已自动填充</span>';
        return;
    }

    var loading = document.getElementById('lookupLoading');
    var resultsDiv = document.getElementById('lookupResults');
    loading.style.display = 'flex';
    resultsDiv.style.display = 'none';

    fetchOFFData('/cgi/search.pl', keyword)
        .then(function(data) {
            loading.style.display = 'none';
            if (!data.products || data.products.length === 0) {
                resultsDiv.style.display = 'block';
                resultsDiv.innerHTML = '<span style="color:#f59e0b;">未找到匹配数据，请手动填写</span>';
                return;
            }

            var best = null;
            for (var i = 0; i < data.products.length; i++) {
                var n = (data.products[i].nutriments || {});
                var cal = n['energy-kcal_100g'] || n['energy-kcal'] ||
                          (n['energy_100g'] ? Math.round(n['energy_100g'] / 4.184) : 0);
                if (cal > 0 && cal < 900) {
                    best = {
                        cal: Math.round(cal),
                        protein: parseFloat((n.proteins_100g || 0).toFixed(1)),
                        carbs: parseFloat((n.carbohydrates_100g || 0).toFixed(1)),
                        fat: parseFloat((n.fat_100g || 0).toFixed(1)),
                        name: data.products[i].product_name || keyword
                    };
                    break;
                }
            }

            if (!best) {
                resultsDiv.style.display = 'block';
                resultsDiv.innerHTML = '<span style="color:#f59e0b;">找到产品但缺少营养数据，请手动填写</span>';
                return;
            }

            document.getElementById('customCal').value = best.cal;
            document.getElementById('customProtein').value = best.protein;
            document.getElementById('customCarbs').value = best.carbs;
            document.getElementById('customFat').value = best.fat;
            resultsDiv.style.display = 'block';
            resultsDiv.innerHTML = '<span style="color:#10b981;">✓ 已从网络获取「'+best.name+'」的营养数据</span>';
        })
        .catch(function(err) {
            loading.style.display = 'none';
            resultsDiv.style.display = 'block';
            if (err.name === 'AbortError') {
                resultsDiv.innerHTML = '<span style="color:#f59e0b;">⏱️ 请求超时，请手动填写或重试</span>';
            } else {
                resultsDiv.innerHTML = '<span style="color:#f59e0b;">⚠️ 无法联网查询，请手动填写营养数据</span>';
            }
        });
}

// ========== 启动 ==========
document.addEventListener('DOMContentLoaded', init);
