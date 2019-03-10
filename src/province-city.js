
const arr = [
  {
    "id,": 1,
    "region,": "北京",
    "parentId": 0
  },
  {
    "id,": 2,
    "region,": "天津",
    "parentId": 0
  },
  {
    "id,": 3,
    "region,": "上海",
    "parentId": 0
  },
  {
    "id,": 4,
    "region,": "重庆",
    "parentId": 0
  },
  {
    "id,": 5,
    "region,": "河北",
    "parentId": 0
  },
  {
    "id,": 6,
    "region,": "山西",
    "parentId": 0
  },
  {
    "id,": 7,
    "region,": "内蒙古",
    "parentId": 0
  },
  {
    "id,": 8,
    "region,": "辽宁",
    "parentId": 0
  },
  {
    "id,": 9,
    "region,": "吉林",
    "parentId": 0
  },
  {
    "id,": 10,
    "region,": "黑龙江",
    "parentId": 0
  },
  {
    "id,": 11,
    "region,": "江苏",
    "parentId": 0
  },
  {
    "id,": 12,
    "region,": "浙江",
    "parentId": 0
  },
  {
    "id,": 13,
    "region,": "安徽",
    "parentId": 0
  },
  {
    "id,": 14,
    "region,": "福建",
    "parentId": 0
  },
  {
    "id,": 15,
    "region,": "江西",
    "parentId": 0
  },
  {
    "id,": 16,
    "region,": "山东",
    "parentId": 0
  },
  {
    "id,": 17,
    "region,": "河南",
    "parentId": 0
  },
  {
    "id,": 18,
    "region,": "湖北",
    "parentId": 0
  },
  {
    "id,": 19,
    "region,": "湖南",
    "parentId": 0
  },
  {
    "id,": 20,
    "region,": "广东",
    "parentId": 0
  },
  {
    "id,": 21,
    "region,": "广西",
    "parentId": 0
  },
  {
    "id,": 22,
    "region,": "海南",
    "parentId": 0
  },
  {
    "id,": 23,
    "region,": "四川",
    "parentId": 0
  },
  {
    "id,": 24,
    "region,": "贵州",
    "parentId": 0
  },
  {
    "id,": 25,
    "region,": "云南",
    "parentId": 0
  },
  {
    "id,": 26,
    "region,": "西藏",
    "parentId": 0
  },
  {
    "id,": 27,
    "region,": "陕西",
    "parentId": 0
  },
  {
    "id,": 28,
    "region,": "甘肃",
    "parentId": 0
  },
  {
    "id,": 29,
    "region,": "青海",
    "parentId": 0
  },
  {
    "id,": 30,
    "region,": "宁夏",
    "parentId": 0
  },
  {
    "id,": 31,
    "region,": "新疆",
    "parentId": 0
  },
  {
    "id,": 32,
    "region,": "台湾",
    "parentId": 0
  },
  {
    "id,": 33,
    "region,": "香港",
    "parentId": 0
  },
  {
    "id,": 34,
    "region,": "澳门",
    "parentId": 0
  },
  {
    "id,": 35,
    "region,": "海外",
    "parentId": 0
  },
  {
    "id,": 36,
    "region,": "东城",
    "parentId": 1
  },
  {
    "id,": 37,
    "region,": "西城",
    "parentId": 1
  },
  {
    "id,": 40,
    "region,": "朝阳",
    "parentId": 1
  },
  {
    "id,": 41,
    "region,": "丰台",
    "parentId": 1
  },
  {
    "id,": 42,
    "region,": "石景山",
    "parentId": 1
  },
  {
    "id,": 43,
    "region,": "海淀",
    "parentId": 1
  },
  {
    "id,": 44,
    "region,": "门头沟",
    "parentId": 1
  },
  {
    "id,": 45,
    "region,": "房山",
    "parentId": 1
  },
  {
    "id,": 46,
    "region,": "通州",
    "parentId": 1
  },
  {
    "id,": 47,
    "region,": "顺义",
    "parentId": 1
  },
  {
    "id,": 48,
    "region,": "昌平",
    "parentId": 1
  },
  {
    "id,": 49,
    "region,": "大兴",
    "parentId": 1
  },
  {
    "id,": 50,
    "region,": "怀柔",
    "parentId": 1
  },
  {
    "id,": 51,
    "region,": "平谷",
    "parentId": 1
  },
  {
    "id,": 52,
    "region,": "密云",
    "parentId": 1
  },
  {
    "id,": 53,
    "region,": "延庆",
    "parentId": 1
  },
  {
    "id,": 54,
    "region,": "和平",
    "parentId": 2
  },
  {
    "id,": 55,
    "region,": "河东",
    "parentId": 2
  },
  {
    "id,": 56,
    "region,": "河西",
    "parentId": 2
  },
  {
    "id,": 57,
    "region,": "南开",
    "parentId": 2
  },
  {
    "id,": 58,
    "region,": "河北",
    "parentId": 2
  },
  {
    "id,": 59,
    "region,": "红桥",
    "parentId": 2
  },
  {
    "id,": 60,
    "region,": "东丽",
    "parentId": 2
  },
  {
    "id,": 61,
    "region,": "西青",
    "parentId": 2
  },
  {
    "id,": 62,
    "region,": "津南",
    "parentId": 2
  },
  {
    "id,": 63,
    "region,": "北辰",
    "parentId": 2
  },
  {
    "id,": 64,
    "region,": "武清",
    "parentId": 2
  },
  {
    "id,": 65,
    "region,": "宝坻",
    "parentId": 2
  },
  {
    "id,": 66,
    "region,": "滨海新区",
    "parentId": 2
  },
  {
    "id,": 67,
    "region,": "宁河",
    "parentId": 2
  },
  {
    "id,": 68,
    "region,": "蓟州",
    "parentId": 2
  },
  {
    "id,": 69,
    "region,": "静海",
    "parentId": 2
  },
  {
    "id,": 70,
    "region,": "黄浦",
    "parentId": 3
  },
  {
    "id,": 71,
    "region,": "徐汇",
    "parentId": 3
  },
  {
    "id,": 72,
    "region,": "长宁",
    "parentId": 3
  },
  {
    "id,": 73,
    "region,": "静安",
    "parentId": 3
  },
  {
    "id,": 74,
    "region,": "普陀",
    "parentId": 3
  },
  {
    "id,": 76,
    "region,": "虹口",
    "parentId": 3
  },
  {
    "id,": 77,
    "region,": "杨浦",
    "parentId": 3
  },
  {
    "id,": 78,
    "region,": "闵行",
    "parentId": 3
  },
  {
    "id,": 79,
    "region,": "宝山",
    "parentId": 3
  },
  {
    "id,": 80,
    "region,": "嘉定",
    "parentId": 3
  },
  {
    "id,": 81,
    "region,": "浦东新区",
    "parentId": 3
  },
  {
    "id,": 82,
    "region,": "金山",
    "parentId": 3
  },
  {
    "id,": 83,
    "region,": "松江",
    "parentId": 3
  },
  {
    "id,": 84,
    "region,": "青浦",
    "parentId": 3
  },
  {
    "id,": 85,
    "region,": "奉贤",
    "parentId": 3
  },
  {
    "id,": 86,
    "region,": "崇明",
    "parentId": 3
  },
  {
    "id,": 87,
    "region,": "万州",
    "parentId": 4
  },
  {
    "id,": 88,
    "region,": "涪陵",
    "parentId": 4
  },
  {
    "id,": 89,
    "region,": "渝中",
    "parentId": 4
  },
  {
    "id,": 90,
    "region,": "大渡口",
    "parentId": 4
  },
  {
    "id,": 91,
    "region,": "江北",
    "parentId": 4
  },
  {
    "id,": 92,
    "region,": "沙坪坝",
    "parentId": 4
  },
  {
    "id,": 93,
    "region,": "九龙坡",
    "parentId": 4
  },
  {
    "id,": 94,
    "region,": "南岸",
    "parentId": 4
  },
  {
    "id,": 95,
    "region,": "北碚",
    "parentId": 4
  },
  {
    "id,": 96,
    "region,": "綦江",
    "parentId": 4
  },
  {
    "id,": 97,
    "region,": "大足",
    "parentId": 4
  },
  {
    "id,": 98,
    "region,": "渝北",
    "parentId": 4
  },
  {
    "id,": 99,
    "region,": "巴南",
    "parentId": 4
  },
  {
    "id,": 100,
    "region,": "黔江",
    "parentId": 4
  },
  {
    "id,": 101,
    "region,": "长寿",
    "parentId": 4
  },
  {
    "id,": 102,
    "region,": "江津",
    "parentId": 4
  },
  {
    "id,": 103,
    "region,": "合川",
    "parentId": 4
  },
  {
    "id,": 104,
    "region,": "永川",
    "parentId": 4
  },
  {
    "id,": 105,
    "region,": "南川",
    "parentId": 4
  },
  {
    "id,": 106,
    "region,": "潼南",
    "parentId": 4
  },
  {
    "id,": 107,
    "region,": "铜梁",
    "parentId": 4
  },
  {
    "id,": 108,
    "region,": "荣昌",
    "parentId": 4
  },
  {
    "id,": 109,
    "region,": "璧山",
    "parentId": 4
  },
  {
    "id,": 110,
    "region,": "梁平",
    "parentId": 4
  },
  {
    "id,": 111,
    "region,": "城口",
    "parentId": 4
  },
  {
    "id,": 112,
    "region,": "丰都",
    "parentId": 4
  },
  {
    "id,": 113,
    "region,": "垫江",
    "parentId": 4
  },
  {
    "id,": 114,
    "region,": "武隆",
    "parentId": 4
  },
  {
    "id,": 115,
    "region,": "忠县",
    "parentId": 4
  },
  {
    "id,": 116,
    "region,": "开州",
    "parentId": 4
  },
  {
    "id,": 117,
    "region,": "云阳",
    "parentId": 4
  },
  {
    "id,": 118,
    "region,": "奉节",
    "parentId": 4
  },
  {
    "id,": 119,
    "region,": "巫山",
    "parentId": 4
  },
  {
    "id,": 120,
    "region,": "巫溪",
    "parentId": 4
  },
  {
    "id,": 121,
    "region,": "石柱",
    "parentId": 4
  },
  {
    "id,": 122,
    "region,": "秀山",
    "parentId": 4
  },
  {
    "id,": 123,
    "region,": "酉阳",
    "parentId": 4
  },
  {
    "id,": 124,
    "region,": "彭水",
    "parentId": 4
  },
  {
    "id,": 125,
    "region,": "石家庄",
    "parentId": 5
  },
  {
    "id,": 126,
    "region,": "唐山",
    "parentId": 5
  },
  {
    "id,": 127,
    "region,": "秦皇岛",
    "parentId": 5
  },
  {
    "id,": 128,
    "region,": "邯郸",
    "parentId": 5
  },
  {
    "id,": 129,
    "region,": "邢台",
    "parentId": 5
  },
  {
    "id,": 130,
    "region,": "保定",
    "parentId": 5
  },
  {
    "id,": 131,
    "region,": "张家口",
    "parentId": 5
  },
  {
    "id,": 132,
    "region,": "承德",
    "parentId": 5
  },
  {
    "id,": 133,
    "region,": "沧州",
    "parentId": 5
  },
  {
    "id,": 134,
    "region,": "廊坊",
    "parentId": 5
  },
  {
    "id,": 135,
    "region,": "衡水",
    "parentId": 5
  },
  {
    "id,": 136,
    "region,": "太原",
    "parentId": 6
  },
  {
    "id,": 137,
    "region,": "大同",
    "parentId": 6
  },
  {
    "id,": 138,
    "region,": "阳泉",
    "parentId": 6
  },
  {
    "id,": 139,
    "region,": "长治",
    "parentId": 6
  },
  {
    "id,": 140,
    "region,": "晋城",
    "parentId": 6
  },
  {
    "id,": 141,
    "region,": "朔州",
    "parentId": 6
  },
  {
    "id,": 142,
    "region,": "晋中",
    "parentId": 6
  },
  {
    "id,": 143,
    "region,": "运城",
    "parentId": 6
  },
  {
    "id,": 144,
    "region,": "忻州",
    "parentId": 6
  },
  {
    "id,": 145,
    "region,": "临汾",
    "parentId": 6
  },
  {
    "id,": 146,
    "region,": "吕梁",
    "parentId": 6
  },
  {
    "id,": 147,
    "region,": "呼和浩特",
    "parentId": 7
  },
  {
    "id,": 148,
    "region,": "包头",
    "parentId": 7
  },
  {
    "id,": 149,
    "region,": "乌海",
    "parentId": 7
  },
  {
    "id,": 150,
    "region,": "赤峰",
    "parentId": 7
  },
  {
    "id,": 151,
    "region,": "通辽",
    "parentId": 7
  },
  {
    "id,": 152,
    "region,": "鄂尔多斯",
    "parentId": 7
  },
  {
    "id,": 153,
    "region,": "呼伦贝尔",
    "parentId": 7
  },
  {
    "id,": 154,
    "region,": "巴彦淖尔",
    "parentId": 7
  },
  {
    "id,": 155,
    "region,": "乌兰察布",
    "parentId": 7
  },
  {
    "id,": 156,
    "region,": "兴安",
    "parentId": 7
  },
  {
    "id,": 157,
    "region,": "锡林郭勒",
    "parentId": 7
  },
  {
    "id,": 158,
    "region,": "阿拉善",
    "parentId": 7
  },
  {
    "id,": 159,
    "region,": "沈阳",
    "parentId": 8
  },
  {
    "id,": 160,
    "region,": "大连",
    "parentId": 8
  },
  {
    "id,": 161,
    "region,": "鞍山",
    "parentId": 8
  },
  {
    "id,": 162,
    "region,": "抚顺",
    "parentId": 8
  },
  {
    "id,": 163,
    "region,": "本溪",
    "parentId": 8
  },
  {
    "id,": 164,
    "region,": "丹东",
    "parentId": 8
  },
  {
    "id,": 165,
    "region,": "锦州",
    "parentId": 8
  },
  {
    "id,": 166,
    "region,": "营口",
    "parentId": 8
  },
  {
    "id,": 167,
    "region,": "阜新",
    "parentId": 8
  },
  {
    "id,": 168,
    "region,": "辽阳",
    "parentId": 8
  },
  {
    "id,": 169,
    "region,": "盘锦",
    "parentId": 8
  },
  {
    "id,": 170,
    "region,": "铁岭",
    "parentId": 8
  },
  {
    "id,": 171,
    "region,": "朝阳",
    "parentId": 8
  },
  {
    "id,": 172,
    "region,": "葫芦岛",
    "parentId": 8
  },
  {
    "id,": 173,
    "region,": "长春",
    "parentId": 9
  },
  {
    "id,": 174,
    "region,": "吉林",
    "parentId": 9
  },
  {
    "id,": 175,
    "region,": "四平",
    "parentId": 9
  },
  {
    "id,": 176,
    "region,": "辽源",
    "parentId": 9
  },
  {
    "id,": 177,
    "region,": "通化",
    "parentId": 9
  },
  {
    "id,": 178,
    "region,": "白山",
    "parentId": 9
  },
  {
    "id,": 179,
    "region,": "松原",
    "parentId": 9
  },
  {
    "id,": 180,
    "region,": "白城",
    "parentId": 9
  },
  {
    "id,": 181,
    "region,": "延边",
    "parentId": 9
  },
  {
    "id,": 182,
    "region,": "哈尔滨",
    "parentId": 10
  },
  {
    "id,": 183,
    "region,": "齐齐哈尔",
    "parentId": 10
  },
  {
    "id,": 184,
    "region,": "鸡西",
    "parentId": 10
  },
  {
    "id,": 185,
    "region,": "鹤岗",
    "parentId": 10
  },
  {
    "id,": 186,
    "region,": "双鸭山",
    "parentId": 10
  },
  {
    "id,": 187,
    "region,": "大庆",
    "parentId": 10
  },
  {
    "id,": 188,
    "region,": "伊春",
    "parentId": 10
  },
  {
    "id,": 189,
    "region,": "佳木斯",
    "parentId": 10
  },
  {
    "id,": 190,
    "region,": "七台河",
    "parentId": 10
  },
  {
    "id,": 191,
    "region,": "牡丹江",
    "parentId": 10
  },
  {
    "id,": 192,
    "region,": "黑河",
    "parentId": 10
  },
  {
    "id,": 193,
    "region,": "绥化",
    "parentId": 10
  },
  {
    "id,": 194,
    "region,": "大兴安岭",
    "parentId": 10
  },
  {
    "id,": 195,
    "region,": "南京",
    "parentId": 11
  },
  {
    "id,": 196,
    "region,": "无锡",
    "parentId": 11
  },
  {
    "id,": 197,
    "region,": "徐州",
    "parentId": 11
  },
  {
    "id,": 198,
    "region,": "常州",
    "parentId": 11
  },
  {
    "id,": 199,
    "region,": "苏州",
    "parentId": 11
  },
  {
    "id,": 200,
    "region,": "南通",
    "parentId": 11
  },
  {
    "id,": 201,
    "region,": "连云港",
    "parentId": 11
  },
  {
    "id,": 202,
    "region,": "淮安",
    "parentId": 11
  },
  {
    "id,": 203,
    "region,": "盐城",
    "parentId": 11
  },
  {
    "id,": 204,
    "region,": "扬州",
    "parentId": 11
  },
  {
    "id,": 205,
    "region,": "镇江",
    "parentId": 11
  },
  {
    "id,": 206,
    "region,": "泰州",
    "parentId": 11
  },
  {
    "id,": 207,
    "region,": "宿迁",
    "parentId": 11
  },
  {
    "id,": 208,
    "region,": "杭州",
    "parentId": 12
  },
  {
    "id,": 209,
    "region,": "宁波",
    "parentId": 12
  },
  {
    "id,": 210,
    "region,": "温州",
    "parentId": 12
  },
  {
    "id,": 211,
    "region,": "嘉兴",
    "parentId": 12
  },
  {
    "id,": 212,
    "region,": "湖州",
    "parentId": 12
  },
  {
    "id,": 213,
    "region,": "绍兴",
    "parentId": 12
  },
  {
    "id,": 214,
    "region,": "金华",
    "parentId": 12
  },
  {
    "id,": 215,
    "region,": "衢州",
    "parentId": 12
  },
  {
    "id,": 216,
    "region,": "舟山",
    "parentId": 12
  },
  {
    "id,": 217,
    "region,": "台州",
    "parentId": 12
  },
  {
    "id,": 218,
    "region,": "丽水",
    "parentId": 12
  },
  {
    "id,": 219,
    "region,": "合肥",
    "parentId": 13
  },
  {
    "id,": 220,
    "region,": "芜湖",
    "parentId": 13
  },
  {
    "id,": 221,
    "region,": "蚌埠",
    "parentId": 13
  },
  {
    "id,": 222,
    "region,": "淮南",
    "parentId": 13
  },
  {
    "id,": 223,
    "region,": "马鞍山",
    "parentId": 13
  },
  {
    "id,": 224,
    "region,": "淮北",
    "parentId": 13
  },
  {
    "id,": 225,
    "region,": "铜陵",
    "parentId": 13
  },
  {
    "id,": 226,
    "region,": "安庆",
    "parentId": 13
  },
  {
    "id,": 227,
    "region,": "黄山",
    "parentId": 13
  },
  {
    "id,": 228,
    "region,": "滁州",
    "parentId": 13
  },
  {
    "id,": 229,
    "region,": "阜阳",
    "parentId": 13
  },
  {
    "id,": 230,
    "region,": "宿州",
    "parentId": 13
  },
  {
    "id,": 231,
    "region,": "六安",
    "parentId": 13
  },
  {
    "id,": 232,
    "region,": "亳州",
    "parentId": 13
  },
  {
    "id,": 233,
    "region,": "池州",
    "parentId": 13
  },
  {
    "id,": 234,
    "region,": "宣城",
    "parentId": 13
  },
  {
    "id,": 235,
    "region,": "福州",
    "parentId": 14
  },
  {
    "id,": 236,
    "region,": "厦门",
    "parentId": 14
  },
  {
    "id,": 237,
    "region,": "莆田",
    "parentId": 14
  },
  {
    "id,": 238,
    "region,": "三明",
    "parentId": 14
  },
  {
    "id,": 239,
    "region,": "泉州",
    "parentId": 14
  },
  {
    "id,": 240,
    "region,": "漳州",
    "parentId": 14
  },
  {
    "id,": 241,
    "region,": "南平",
    "parentId": 14
  },
  {
    "id,": 242,
    "region,": "龙岩",
    "parentId": 14
  },
  {
    "id,": 243,
    "region,": "宁德",
    "parentId": 14
  },
  {
    "id,": 244,
    "region,": "南昌",
    "parentId": 15
  },
  {
    "id,": 245,
    "region,": "景德镇",
    "parentId": 15
  },
  {
    "id,": 246,
    "region,": "萍乡",
    "parentId": 15
  },
  {
    "id,": 247,
    "region,": "九江",
    "parentId": 15
  },
  {
    "id,": 248,
    "region,": "新余",
    "parentId": 15
  },
  {
    "id,": 249,
    "region,": "鹰潭",
    "parentId": 15
  },
  {
    "id,": 250,
    "region,": "赣州",
    "parentId": 15
  },
  {
    "id,": 251,
    "region,": "吉安",
    "parentId": 15
  },
  {
    "id,": 252,
    "region,": "宜春",
    "parentId": 15
  },
  {
    "id,": 253,
    "region,": "抚州",
    "parentId": 15
  },
  {
    "id,": 254,
    "region,": "上饶",
    "parentId": 15
  },
  {
    "id,": 255,
    "region,": "济南",
    "parentId": 16
  },
  {
    "id,": 256,
    "region,": "青岛",
    "parentId": 16
  },
  {
    "id,": 257,
    "region,": "淄博",
    "parentId": 16
  },
  {
    "id,": 258,
    "region,": "枣庄",
    "parentId": 16
  },
  {
    "id,": 259,
    "region,": "东营",
    "parentId": 16
  },
  {
    "id,": 260,
    "region,": "烟台",
    "parentId": 16
  },
  {
    "id,": 261,
    "region,": "潍坊",
    "parentId": 16
  },
  {
    "id,": 262,
    "region,": "济宁",
    "parentId": 16
  },
  {
    "id,": 263,
    "region,": "泰安",
    "parentId": 16
  },
  {
    "id,": 264,
    "region,": "威海",
    "parentId": 16
  },
  {
    "id,": 265,
    "region,": "日照",
    "parentId": 16
  },
  {
    "id,": 267,
    "region,": "临沂",
    "parentId": 16
  },
  {
    "id,": 268,
    "region,": "德州",
    "parentId": 16
  },
  {
    "id,": 269,
    "region,": "聊城",
    "parentId": 16
  },
  {
    "id,": 270,
    "region,": "滨州",
    "parentId": 16
  },
  {
    "id,": 271,
    "region,": "菏泽",
    "parentId": 16
  },
  {
    "id,": 272,
    "region,": "郑州",
    "parentId": 17
  },
  {
    "id,": 273,
    "region,": "开封",
    "parentId": 17
  },
  {
    "id,": 274,
    "region,": "洛阳",
    "parentId": 17
  },
  {
    "id,": 275,
    "region,": "平顶山",
    "parentId": 17
  },
  {
    "id,": 276,
    "region,": "安阳",
    "parentId": 17
  },
  {
    "id,": 277,
    "region,": "鹤壁",
    "parentId": 17
  },
  {
    "id,": 278,
    "region,": "新乡",
    "parentId": 17
  },
  {
    "id,": 279,
    "region,": "焦作",
    "parentId": 17
  },
  {
    "id,": 280,
    "region,": "濮阳",
    "parentId": 17
  },
  {
    "id,": 281,
    "region,": "许昌",
    "parentId": 17
  },
  {
    "id,": 282,
    "region,": "漯河",
    "parentId": 17
  },
  {
    "id,": 283,
    "region,": "三门峡",
    "parentId": 17
  },
  {
    "id,": 284,
    "region,": "南阳",
    "parentId": 17
  },
  {
    "id,": 285,
    "region,": "商丘",
    "parentId": 17
  },
  {
    "id,": 286,
    "region,": "信阳",
    "parentId": 17
  },
  {
    "id,": 287,
    "region,": "周口",
    "parentId": 17
  },
  {
    "id,": 288,
    "region,": "驻马店",
    "parentId": 17
  },
  {
    "id,": 289,
    "region,": "济源",
    "parentId": 17
  },
  {
    "id,": 290,
    "region,": "武汉",
    "parentId": 18
  },
  {
    "id,": 291,
    "region,": "黄石",
    "parentId": 18
  },
  {
    "id,": 292,
    "region,": "十堰",
    "parentId": 18
  },
  {
    "id,": 293,
    "region,": "宜昌",
    "parentId": 18
  },
  {
    "id,": 294,
    "region,": "襄阳",
    "parentId": 18
  },
  {
    "id,": 295,
    "region,": "鄂州",
    "parentId": 18
  },
  {
    "id,": 296,
    "region,": "荆门",
    "parentId": 18
  },
  {
    "id,": 297,
    "region,": "孝感",
    "parentId": 18
  },
  {
    "id,": 298,
    "region,": "荆州",
    "parentId": 18
  },
  {
    "id,": 299,
    "region,": "黄冈",
    "parentId": 18
  },
  {
    "id,": 300,
    "region,": "咸宁",
    "parentId": 18
  },
  {
    "id,": 301,
    "region,": "随州",
    "parentId": 18
  },
  {
    "id,": 302,
    "region,": "恩施",
    "parentId": 18
  },
  {
    "id,": 303,
    "region,": "仙桃",
    "parentId": 18
  },
  {
    "id,": 304,
    "region,": "潜江",
    "parentId": 18
  },
  {
    "id,": 305,
    "region,": "天门",
    "parentId": 18
  },
  {
    "id,": 306,
    "region,": "神农架林区",
    "parentId": 18
  },
  {
    "id,": 307,
    "region,": "长沙",
    "parentId": 19
  },
  {
    "id,": 308,
    "region,": "株洲",
    "parentId": 19
  },
  {
    "id,": 309,
    "region,": "湘潭",
    "parentId": 19
  },
  {
    "id,": 310,
    "region,": "衡阳",
    "parentId": 19
  },
  {
    "id,": 311,
    "region,": "邵阳",
    "parentId": 19
  },
  {
    "id,": 312,
    "region,": "岳阳",
    "parentId": 19
  },
  {
    "id,": 313,
    "region,": "常德",
    "parentId": 19
  },
  {
    "id,": 314,
    "region,": "张家界",
    "parentId": 19
  },
  {
    "id,": 315,
    "region,": "益阳",
    "parentId": 19
  },
  {
    "id,": 316,
    "region,": "郴州",
    "parentId": 19
  },
  {
    "id,": 317,
    "region,": "永州",
    "parentId": 19
  },
  {
    "id,": 318,
    "region,": "怀化",
    "parentId": 19
  },
  {
    "id,": 319,
    "region,": "娄底",
    "parentId": 19
  },
  {
    "id,": 320,
    "region,": "湘西",
    "parentId": 19
  },
  {
    "id,": 321,
    "region,": "广州",
    "parentId": 20
  },
  {
    "id,": 322,
    "region,": "韶关",
    "parentId": 20
  },
  {
    "id,": 323,
    "region,": "深圳",
    "parentId": 20
  },
  {
    "id,": 324,
    "region,": "珠海",
    "parentId": 20
  },
  {
    "id,": 325,
    "region,": "汕头",
    "parentId": 20
  },
  {
    "id,": 326,
    "region,": "佛山",
    "parentId": 20
  },
  {
    "id,": 327,
    "region,": "江门",
    "parentId": 20
  },
  {
    "id,": 328,
    "region,": "湛江",
    "parentId": 20
  },
  {
    "id,": 329,
    "region,": "茂名",
    "parentId": 20
  },
  {
    "id,": 330,
    "region,": "肇庆",
    "parentId": 20
  },
  {
    "id,": 331,
    "region,": "惠州",
    "parentId": 20
  },
  {
    "id,": 332,
    "region,": "梅州",
    "parentId": 20
  },
  {
    "id,": 333,
    "region,": "汕尾",
    "parentId": 20
  },
  {
    "id,": 334,
    "region,": "河源",
    "parentId": 20
  },
  {
    "id,": 335,
    "region,": "阳江",
    "parentId": 20
  },
  {
    "id,": 336,
    "region,": "清远",
    "parentId": 20
  },
  {
    "id,": 337,
    "region,": "东莞",
    "parentId": 20
  },
  {
    "id,": 338,
    "region,": "中山",
    "parentId": 20
  },
  {
    "id,": 339,
    "region,": "潮州",
    "parentId": 20
  },
  {
    "id,": 340,
    "region,": "揭阳",
    "parentId": 20
  },
  {
    "id,": 341,
    "region,": "云浮",
    "parentId": 20
  },
  {
    "id,": 342,
    "region,": "南宁",
    "parentId": 21
  },
  {
    "id,": 343,
    "region,": "柳州",
    "parentId": 21
  },
  {
    "id,": 344,
    "region,": "桂林",
    "parentId": 21
  },
  {
    "id,": 345,
    "region,": "梧州",
    "parentId": 21
  },
  {
    "id,": 346,
    "region,": "北海",
    "parentId": 21
  },
  {
    "id,": 347,
    "region,": "防城港",
    "parentId": 21
  },
  {
    "id,": 348,
    "region,": "钦州",
    "parentId": 21
  },
  {
    "id,": 349,
    "region,": "贵港",
    "parentId": 21
  },
  {
    "id,": 350,
    "region,": "玉林",
    "parentId": 21
  },
  {
    "id,": 351,
    "region,": "百色",
    "parentId": 21
  },
  {
    "id,": 352,
    "region,": "贺州",
    "parentId": 21
  },
  {
    "id,": 353,
    "region,": "河池",
    "parentId": 21
  },
  {
    "id,": 354,
    "region,": "来宾",
    "parentId": 21
  },
  {
    "id,": 355,
    "region,": "崇左",
    "parentId": 21
  },
  {
    "id,": 356,
    "region,": "海口",
    "parentId": 22
  },
  {
    "id,": 357,
    "region,": "三亚",
    "parentId": 22
  },
  {
    "id,": 358,
    "region,": "三沙",
    "parentId": 22
  },
  {
    "id,": 359,
    "region,": "五指山",
    "parentId": 22
  },
  {
    "id,": 360,
    "region,": "琼海",
    "parentId": 22
  },
  {
    "id,": 361,
    "region,": "儋州",
    "parentId": 22
  },
  {
    "id,": 362,
    "region,": "文昌",
    "parentId": 22
  },
  {
    "id,": 363,
    "region,": "万宁",
    "parentId": 22
  },
  {
    "id,": 364,
    "region,": "东方",
    "parentId": 22
  },
  {
    "id,": 365,
    "region,": "定安",
    "parentId": 22
  },
  {
    "id,": 366,
    "region,": "屯昌",
    "parentId": 22
  },
  {
    "id,": 367,
    "region,": "澄迈",
    "parentId": 22
  },
  {
    "id,": 368,
    "region,": "临高",
    "parentId": 22
  },
  {
    "id,": 369,
    "region,": "白沙",
    "parentId": 22
  },
  {
    "id,": 370,
    "region,": "昌江",
    "parentId": 22
  },
  {
    "id,": 371,
    "region,": "乐东",
    "parentId": 22
  },
  {
    "id,": 372,
    "region,": "陵水",
    "parentId": 22
  },
  {
    "id,": 373,
    "region,": "保亭",
    "parentId": 22
  },
  {
    "id,": 374,
    "region,": "琼中",
    "parentId": 22
  },
  {
    "id,": 375,
    "region,": "成都",
    "parentId": 23
  },
  {
    "id,": 376,
    "region,": "自贡",
    "parentId": 23
  },
  {
    "id,": 377,
    "region,": "攀枝花",
    "parentId": 23
  },
  {
    "id,": 378,
    "region,": "泸州",
    "parentId": 23
  },
  {
    "id,": 379,
    "region,": "德阳",
    "parentId": 23
  },
  {
    "id,": 380,
    "region,": "绵阳",
    "parentId": 23
  },
  {
    "id,": 381,
    "region,": "广元",
    "parentId": 23
  },
  {
    "id,": 382,
    "region,": "遂宁",
    "parentId": 23
  },
  {
    "id,": 383,
    "region,": "内江",
    "parentId": 23
  },
  {
    "id,": 384,
    "region,": "乐山",
    "parentId": 23
  },
  {
    "id,": 385,
    "region,": "南充",
    "parentId": 23
  },
  {
    "id,": 386,
    "region,": "眉山",
    "parentId": 23
  },
  {
    "id,": 387,
    "region,": "宜宾",
    "parentId": 23
  },
  {
    "id,": 388,
    "region,": "广安",
    "parentId": 23
  },
  {
    "id,": 389,
    "region,": "达州",
    "parentId": 23
  },
  {
    "id,": 390,
    "region,": "雅安",
    "parentId": 23
  },
  {
    "id,": 391,
    "region,": "巴中",
    "parentId": 23
  },
  {
    "id,": 392,
    "region,": "资阳",
    "parentId": 23
  },
  {
    "id,": 393,
    "region,": "阿坝",
    "parentId": 23
  },
  {
    "id,": 394,
    "region,": "甘孜",
    "parentId": 23
  },
  {
    "id,": 395,
    "region,": "凉山",
    "parentId": 23
  },
  {
    "id,": 396,
    "region,": "贵阳",
    "parentId": 24
  },
  {
    "id,": 397,
    "region,": "六盘水",
    "parentId": 24
  },
  {
    "id,": 398,
    "region,": "遵义",
    "parentId": 24
  },
  {
    "id,": 399,
    "region,": "安顺",
    "parentId": 24
  },
  {
    "id,": 400,
    "region,": "毕节",
    "parentId": 24
  },
  {
    "id,": 401,
    "region,": "铜仁",
    "parentId": 24
  },
  {
    "id,": 402,
    "region,": "黔西南",
    "parentId": 24
  },
  {
    "id,": 403,
    "region,": "黔东南",
    "parentId": 24
  },
  {
    "id,": 404,
    "region,": "黔南",
    "parentId": 24
  },
  {
    "id,": 405,
    "region,": "昆明",
    "parentId": 25
  },
  {
    "id,": 406,
    "region,": "曲靖",
    "parentId": 25
  },
  {
    "id,": 407,
    "region,": "玉溪",
    "parentId": 25
  },
  {
    "id,": 408,
    "region,": "昭通",
    "parentId": 25
  },
  {
    "id,": 409,
    "region,": "丽江",
    "parentId": 25
  },
  {
    "id,": 410,
    "region,": "普洱",
    "parentId": 25
  },
  {
    "id,": 411,
    "region,": "临沧",
    "parentId": 25
  },
  {
    "id,": 412,
    "region,": "楚雄",
    "parentId": 25
  },
  {
    "id,": 413,
    "region,": "红河",
    "parentId": 25
  },
  {
    "id,": 414,
    "region,": "文山",
    "parentId": 25
  },
  {
    "id,": 415,
    "region,": "西双版纳",
    "parentId": 25
  },
  {
    "id,": 416,
    "region,": "大理",
    "parentId": 25
  },
  {
    "id,": 417,
    "region,": "德宏",
    "parentId": 25
  },
  {
    "id,": 418,
    "region,": "怒江",
    "parentId": 25
  },
  {
    "id,": 419,
    "region,": "迪庆",
    "parentId": 25
  },
  {
    "id,": 420,
    "region,": "保山",
    "parentId": 25
  },
  {
    "id,": 421,
    "region,": "拉萨",
    "parentId": 26
  },
  {
    "id,": 422,
    "region,": "昌都",
    "parentId": 26
  },
  {
    "id,": 423,
    "region,": "山南",
    "parentId": 26
  },
  {
    "id,": 424,
    "region,": "日喀则",
    "parentId": 26
  },
  {
    "id,": 425,
    "region,": "那曲",
    "parentId": 26
  },
  {
    "id,": 426,
    "region,": "阿里",
    "parentId": 26
  },
  {
    "id,": 427,
    "region,": "林芝",
    "parentId": 26
  },
  {
    "id,": 428,
    "region,": "西安",
    "parentId": 27
  },
  {
    "id,": 429,
    "region,": "铜川",
    "parentId": 27
  },
  {
    "id,": 430,
    "region,": "宝鸡",
    "parentId": 27
  },
  {
    "id,": 431,
    "region,": "咸阳",
    "parentId": 27
  },
  {
    "id,": 432,
    "region,": "渭南",
    "parentId": 27
  },
  {
    "id,": 433,
    "region,": "延安",
    "parentId": 27
  },
  {
    "id,": 434,
    "region,": "汉中",
    "parentId": 27
  },
  {
    "id,": 435,
    "region,": "榆林",
    "parentId": 27
  },
  {
    "id,": 436,
    "region,": "安康",
    "parentId": 27
  },
  {
    "id,": 437,
    "region,": "商洛",
    "parentId": 27
  },
  {
    "id,": 438,
    "region,": "兰州",
    "parentId": 28
  },
  {
    "id,": 439,
    "region,": "嘉峪关",
    "parentId": 28
  },
  {
    "id,": 440,
    "region,": "金昌",
    "parentId": 28
  },
  {
    "id,": 441,
    "region,": "白银",
    "parentId": 28
  },
  {
    "id,": 442,
    "region,": "天水",
    "parentId": 28
  },
  {
    "id,": 443,
    "region,": "武威",
    "parentId": 28
  },
  {
    "id,": 444,
    "region,": "张掖",
    "parentId": 28
  },
  {
    "id,": 445,
    "region,": "平凉",
    "parentId": 28
  },
  {
    "id,": 446,
    "region,": "酒泉",
    "parentId": 28
  },
  {
    "id,": 447,
    "region,": "庆阳",
    "parentId": 28
  },
  {
    "id,": 448,
    "region,": "定西",
    "parentId": 28
  },
  {
    "id,": 449,
    "region,": "陇南",
    "parentId": 28
  },
  {
    "id,": 450,
    "region,": "临夏",
    "parentId": 28
  },
  {
    "id,": 451,
    "region,": "甘南",
    "parentId": 28
  },
  {
    "id,": 452,
    "region,": "西宁",
    "parentId": 29
  },
  {
    "id,": 453,
    "region,": "海东",
    "parentId": 29
  },
  {
    "id,": 454,
    "region,": "海北",
    "parentId": 29
  },
  {
    "id,": 455,
    "region,": "黄南",
    "parentId": 29
  },
  {
    "id,": 456,
    "region,": "海南",
    "parentId": 29
  },
  {
    "id,": 457,
    "region,": "果洛",
    "parentId": 29
  },
  {
    "id,": 458,
    "region,": "玉树",
    "parentId": 29
  },
  {
    "id,": 459,
    "region,": "海西",
    "parentId": 29
  },
  {
    "id,": 460,
    "region,": "银川",
    "parentId": 30
  },
  {
    "id,": 461,
    "region,": "石嘴山",
    "parentId": 30
  },
  {
    "id,": 462,
    "region,": "吴忠",
    "parentId": 30
  },
  {
    "id,": 463,
    "region,": "固原",
    "parentId": 30
  },
  {
    "id,": 464,
    "region,": "中卫",
    "parentId": 30
  },
  {
    "id,": 465,
    "region,": "乌鲁木齐",
    "parentId": 31
  },
  {
    "id,": 466,
    "region,": "克拉玛依",
    "parentId": 31
  },
  {
    "id,": 467,
    "region,": "吐鲁番",
    "parentId": 31
  },
  {
    "id,": 468,
    "region,": "哈密",
    "parentId": 31
  },
  {
    "id,": 469,
    "region,": "昌吉",
    "parentId": 31
  },
  {
    "id,": 470,
    "region,": "博尔塔拉",
    "parentId": 31
  },
  {
    "id,": 471,
    "region,": "巴音郭楞",
    "parentId": 31
  },
  {
    "id,": 472,
    "region,": "阿克苏",
    "parentId": 31
  },
  {
    "id,": 473,
    "region,": "克孜勒苏",
    "parentId": 31
  },
  {
    "id,": 474,
    "region,": "喀什",
    "parentId": 31
  },
  {
    "id,": 475,
    "region,": "和田",
    "parentId": 31
  },
  {
    "id,": 476,
    "region,": "伊犁",
    "parentId": 31
  },
  {
    "id,": 477,
    "region,": "塔城",
    "parentId": 31
  },
  {
    "id,": 478,
    "region,": "阿勒泰",
    "parentId": 31
  },
  {
    "id,": 479,
    "region,": "石河子",
    "parentId": 31
  },
  {
    "id,": 480,
    "region,": "阿拉尔",
    "parentId": 31
  },
  {
    "id,": 481,
    "region,": "图木舒克",
    "parentId": 31
  },
  {
    "id,": 482,
    "region,": "五家渠",
    "parentId": 31
  },
  {
    "id,": 483,
    "region,": "北屯",
    "parentId": 31
  },
  {
    "id,": 484,
    "region,": "铁门关",
    "parentId": 31
  },
  {
    "id,": 485,
    "region,": "台北",
    "parentId": 32
  },
  {
    "id,": 486,
    "region,": "高雄",
    "parentId": 32
  },
  {
    "id,": 487,
    "region,": "基隆",
    "parentId": 32
  },
  {
    "id,": 488,
    "region,": "台中",
    "parentId": 32
  },
  {
    "id,": 489,
    "region,": "台南",
    "parentId": 32
  },
  {
    "id,": 490,
    "region,": "新竹",
    "parentId": 32
  },
  {
    "id,": 491,
    "region,": "嘉义",
    "parentId": 32
  },
  {
    "id,": 492,
    "region,": "新北",
    "parentId": 32
  },
  {
    "id,": 493,
    "region,": "宜兰",
    "parentId": 32
  },
  {
    "id,": 494,
    "region,": "桃园",
    "parentId": 32
  },
  {
    "id,": 495,
    "region,": "新竹",
    "parentId": 32
  },
  {
    "id,": 496,
    "region,": "苗栗",
    "parentId": 32
  },
  {
    "id,": 497,
    "region,": "彰化",
    "parentId": 32
  },
  {
    "id,": 498,
    "region,": "南投",
    "parentId": 32
  },
  {
    "id,": 499,
    "region,": "云林",
    "parentId": 32
  },
  {
    "id,": 500,
    "region,": "嘉义",
    "parentId": 32
  },
  {
    "id,": 501,
    "region,": "屏东",
    "parentId": 32
  },
  {
    "id,": 502,
    "region,": "台东",
    "parentId": 32
  },
  {
    "id,": 503,
    "region,": "花莲",
    "parentId": 32
  },
  {
    "id,": 504,
    "region,": "澎湖",
    "parentId": 32
  },
  {
    "id,": 505,
    "region,": "连江",
    "parentId": 32
  },
  {
    "id,": 506,
    "region,": "金门",
    "parentId": 32
  },
  {
    "id,": 507,
    "region,": "中西",
    "parentId": 33
  },
  {
    "id,": 508,
    "region,": "葵青",
    "parentId": 33
  },
  {
    "id,": 509,
    "region,": "元朗",
    "parentId": 33
  },
  {
    "id,": 510,
    "region,": "屯门",
    "parentId": 33
  },
  {
    "id,": 511,
    "region,": "荃湾",
    "parentId": 33
  },
  {
    "id,": 512,
    "region,": "西贡",
    "parentId": 33
  },
  {
    "id,": 513,
    "region,": "沙田",
    "parentId": 33
  },
  {
    "id,": 514,
    "region,": "大埔",
    "parentId": 33
  },
  {
    "id,": 515,
    "region,": "北区",
    "parentId": 33
  },
  {
    "id,": 516,
    "region,": "观塘",
    "parentId": 33
  },
  {
    "id,": 517,
    "region,": "黄大仙",
    "parentId": 33
  },
  {
    "id,": 518,
    "region,": "深水埗",
    "parentId": 33
  },
  {
    "id,": 519,
    "region,": "油尖旺",
    "parentId": 33
  },
  {
    "id,": 520,
    "region,": "九龙城",
    "parentId": 33
  },
  {
    "id,": 521,
    "region,": "南区",
    "parentId": 33
  },
  {
    "id,": 522,
    "region,": "东区",
    "parentId": 33
  },
  {
    "id,": 523,
    "region,": "湾仔",
    "parentId": 33
  },
  {
    "id,": 524,
    "region,": "离岛",
    "parentId": 33
  },
  {
    "id,": 525,
    "region,": "花地玛",
    "parentId": 34
  },
  {
    "id,": 526,
    "region,": "圣安多",
    "parentId": 34
  },
  {
    "id,": 527,
    "region,": "大堂区",
    "parentId": 34
  },
  {
    "id,": 528,
    "region,": "望德",
    "parentId": 34
  },
  {
    "id,": 529,
    "region,": "风顺",
    "parentId": 34
  },
  {
    "id,": 530,
    "region,": "嘉模",
    "parentId": 34
  },
  {
    "id,": 531,
    "region,": "圣方济各",
    "parentId": 34
  },
  {
    "id,": 532,
    "region,": "路氹城",
    "parentId": 34
  },
  {
    "id,": 533,
    "region,": "长安",
    "parentId": 125
  },
  {
    "id,": 535,
    "region,": "桥西",
    "parentId": 125
  },
  {
    "id,": 536,
    "region,": "新华",
    "parentId": 125
  },
  {
    "id,": 537,
    "region,": "井陉矿",
    "parentId": 125
  },
  {
    "id,": 538,
    "region,": "裕华",
    "parentId": 125
  },
  {
    "id,": 539,
    "region,": "井陉",
    "parentId": 125
  },
  {
    "id,": 540,
    "region,": "正定",
    "parentId": 125
  },
  {
    "id,": 541,
    "region,": "栾城",
    "parentId": 125
  },
  {
    "id,": 542,
    "region,": "行唐",
    "parentId": 125
  },
  {
    "id,": 543,
    "region,": "灵寿",
    "parentId": 125
  },
  {
    "id,": 544,
    "region,": "高邑",
    "parentId": 125
  },
  {
    "id,": 545,
    "region,": "深泽",
    "parentId": 125
  },
  {
    "id,": 546,
    "region,": "赞皇",
    "parentId": 125
  },
  {
    "id,": 547,
    "region,": "无极",
    "parentId": 125
  },
  {
    "id,": 548,
    "region,": "平山",
    "parentId": 125
  },
  {
    "id,": 549,
    "region,": "元氏",
    "parentId": 125
  },
  {
    "id,": 550,
    "region,": "赵县",
    "parentId": 125
  },
  {
    "id,": 551,
    "region,": "辛集",
    "parentId": 125
  },
  {
    "id,": 552,
    "region,": "藁城",
    "parentId": 125
  },
  {
    "id,": 553,
    "region,": "晋州",
    "parentId": 125
  },
  {
    "id,": 554,
    "region,": "新乐",
    "parentId": 125
  },
  {
    "id,": 555,
    "region,": "鹿泉",
    "parentId": 125
  },
  {
    "id,": 556,
    "region,": "路南",
    "parentId": 126
  },
  {
    "id,": 557,
    "region,": "路北",
    "parentId": 126
  },
  {
    "id,": 558,
    "region,": "古冶",
    "parentId": 126
  },
  {
    "id,": 559,
    "region,": "开平",
    "parentId": 126
  },
  {
    "id,": 560,
    "region,": "丰南",
    "parentId": 126
  },
  {
    "id,": 561,
    "region,": "丰润",
    "parentId": 126
  },
  {
    "id,": 562,
    "region,": "滦县",
    "parentId": 126
  },
  {
    "id,": 563,
    "region,": "滦南",
    "parentId": 126
  },
  {
    "id,": 564,
    "region,": "乐亭",
    "parentId": 126
  },
  {
    "id,": 565,
    "region,": "迁西",
    "parentId": 126
  },
  {
    "id,": 566,
    "region,": "玉田",
    "parentId": 126
  },
  {
    "id,": 567,
    "region,": "唐海",
    "parentId": 126
  },
  {
    "id,": 568,
    "region,": "遵化",
    "parentId": 126
  },
  {
    "id,": 569,
    "region,": "迁安",
    "parentId": 126
  },
  {
    "id,": 570,
    "region,": "海港",
    "parentId": 127
  },
  {
    "id,": 571,
    "region,": "山海关",
    "parentId": 127
  },
  {
    "id,": 572,
    "region,": "北戴河",
    "parentId": 127
  },
  {
    "id,": 573,
    "region,": "青龙",
    "parentId": 127
  },
  {
    "id,": 574,
    "region,": "昌黎",
    "parentId": 127
  },
  {
    "id,": 575,
    "region,": "抚宁",
    "parentId": 127
  },
  {
    "id,": 576,
    "region,": "卢龙",
    "parentId": 127
  },
  {
    "id,": 577,
    "region,": "邯山",
    "parentId": 128
  },
  {
    "id,": 578,
    "region,": "丛台",
    "parentId": 128
  },
  {
    "id,": 579,
    "region,": "复兴",
    "parentId": 128
  },
  {
    "id,": 580,
    "region,": "峰峰矿",
    "parentId": 128
  },
  {
    "id,": 582,
    "region,": "临漳",
    "parentId": 128
  },
  {
    "id,": 583,
    "region,": "成安",
    "parentId": 128
  },
  {
    "id,": 584,
    "region,": "大名",
    "parentId": 128
  },
  {
    "id,": 585,
    "region,": "涉县",
    "parentId": 128
  },
  {
    "id,": 586,
    "region,": "磁县",
    "parentId": 128
  },
  {
    "id,": 587,
    "region,": "肥乡",
    "parentId": 128
  },
  {
    "id,": 588,
    "region,": "永年",
    "parentId": 128
  },
  {
    "id,": 589,
    "region,": "邱县",
    "parentId": 128
  },
  {
    "id,": 590,
    "region,": "鸡泽",
    "parentId": 128
  },
  {
    "id,": 591,
    "region,": "广平",
    "parentId": 128
  },
  {
    "id,": 592,
    "region,": "馆陶",
    "parentId": 128
  },
  {
    "id,": 593,
    "region,": "魏县",
    "parentId": 128
  },
  {
    "id,": 594,
    "region,": "曲周",
    "parentId": 128
  },
  {
    "id,": 595,
    "region,": "武安",
    "parentId": 128
  },
  {
    "id,": 596,
    "region,": "桥东",
    "parentId": 129
  },
  {
    "id,": 597,
    "region,": "桥西",
    "parentId": 129
  },
  {
    "id,": 598,
    "region,": "邢台",
    "parentId": 129
  },
  {
    "id,": 599,
    "region,": "临城",
    "parentId": 129
  },
  {
    "id,": 600,
    "region,": "内丘",
    "parentId": 129
  },
  {
    "id,": 601,
    "region,": "柏乡",
    "parentId": 129
  },
  {
    "id,": 602,
    "region,": "隆尧",
    "parentId": 129
  },
  {
    "id,": 603,
    "region,": "任县",
    "parentId": 129
  },
  {
    "id,": 604,
    "region,": "南和",
    "parentId": 129
  },
  {
    "id,": 605,
    "region,": "宁晋",
    "parentId": 129
  },
  {
    "id,": 606,
    "region,": "巨鹿",
    "parentId": 129
  },
  {
    "id,": 607,
    "region,": "新河",
    "parentId": 129
  },
  {
    "id,": 608,
    "region,": "广宗",
    "parentId": 129
  },
  {
    "id,": 609,
    "region,": "平乡",
    "parentId": 129
  },
  {
    "id,": 610,
    "region,": "威县",
    "parentId": 129
  },
  {
    "id,": 611,
    "region,": "清河",
    "parentId": 129
  },
  {
    "id,": 612,
    "region,": "临西",
    "parentId": 129
  },
  {
    "id,": 613,
    "region,": "南宫",
    "parentId": 129
  },
  {
    "id,": 614,
    "region,": "沙河",
    "parentId": 129
  },
  {
    "id,": 615,
    "region,": "竞秀",
    "parentId": 130
  },
  {
    "id,": 616,
    "region,": "莲池",
    "parentId": 130
  },
  {
    "id,": 618,
    "region,": "满城",
    "parentId": 130
  },
  {
    "id,": 619,
    "region,": "清苑",
    "parentId": 130
  },
  {
    "id,": 620,
    "region,": "涞水",
    "parentId": 130
  },
  {
    "id,": 621,
    "region,": "阜平",
    "parentId": 130
  },
  {
    "id,": 622,
    "region,": "徐水",
    "parentId": 130
  },
  {
    "id,": 623,
    "region,": "定兴",
    "parentId": 130
  },
  {
    "id,": 624,
    "region,": "唐县",
    "parentId": 130
  },
  {
    "id,": 625,
    "region,": "高阳",
    "parentId": 130
  },
  {
    "id,": 626,
    "region,": "容城",
    "parentId": 130
  },
  {
    "id,": 627,
    "region,": "涞源",
    "parentId": 130
  },
  {
    "id,": 628,
    "region,": "望都",
    "parentId": 130
  },
  {
    "id,": 629,
    "region,": "安新",
    "parentId": 130
  },
  {
    "id,": 630,
    "region,": "易县",
    "parentId": 130
  },
  {
    "id,": 631,
    "region,": "曲阳",
    "parentId": 130
  },
  {
    "id,": 632,
    "region,": "蠡县",
    "parentId": 130
  },
  {
    "id,": 633,
    "region,": "顺平",
    "parentId": 130
  },
  {
    "id,": 634,
    "region,": "博野",
    "parentId": 130
  },
  {
    "id,": 635,
    "region,": "雄县",
    "parentId": 130
  },
  {
    "id,": 636,
    "region,": "涿州",
    "parentId": 130
  },
  {
    "id,": 637,
    "region,": "定州",
    "parentId": 130
  },
  {
    "id,": 638,
    "region,": "安国",
    "parentId": 130
  },
  {
    "id,": 639,
    "region,": "高碑店",
    "parentId": 130
  },
  {
    "id,": 640,
    "region,": "桥东",
    "parentId": 131
  },
  {
    "id,": 641,
    "region,": "桥西",
    "parentId": 131
  },
  {
    "id,": 642,
    "region,": "宣化",
    "parentId": 131
  },
  {
    "id,": 643,
    "region,": "下花园",
    "parentId": 131
  },
  {
    "id,": 645,
    "region,": "张北",
    "parentId": 131
  },
  {
    "id,": 646,
    "region,": "康保",
    "parentId": 131
  },
  {
    "id,": 647,
    "region,": "沽源",
    "parentId": 131
  },
  {
    "id,": 648,
    "region,": "尚义",
    "parentId": 131
  },
  {
    "id,": 649,
    "region,": "蔚县",
    "parentId": 131
  },
  {
    "id,": 650,
    "region,": "阳原",
    "parentId": 131
  },
  {
    "id,": 651,
    "region,": "怀安",
    "parentId": 131
  },
  {
    "id,": 652,
    "region,": "万全",
    "parentId": 131
  },
  {
    "id,": 653,
    "region,": "怀来",
    "parentId": 131
  },
  {
    "id,": 654,
    "region,": "涿鹿",
    "parentId": 131
  },
  {
    "id,": 655,
    "region,": "赤城",
    "parentId": 131
  },
  {
    "id,": 656,
    "region,": "崇礼",
    "parentId": 131
  },
  {
    "id,": 657,
    "region,": "双桥",
    "parentId": 132
  },
  {
    "id,": 658,
    "region,": "双滦",
    "parentId": 132
  },
  {
    "id,": 659,
    "region,": "鹰手营子",
    "parentId": 132
  },
  {
    "id,": 660,
    "region,": "承德",
    "parentId": 132
  },
  {
    "id,": 661,
    "region,": "兴隆",
    "parentId": 132
  },
  {
    "id,": 662,
    "region,": "平泉",
    "parentId": 132
  },
  {
    "id,": 663,
    "region,": "滦平",
    "parentId": 132
  },
  {
    "id,": 664,
    "region,": "隆化",
    "parentId": 132
  },
  {
    "id,": 665,
    "region,": "丰宁",
    "parentId": 132
  },
  {
    "id,": 666,
    "region,": "宽城",
    "parentId": 132
  },
  {
    "id,": 667,
    "region,": "围场",
    "parentId": 132
  },
  {
    "id,": 668,
    "region,": "新华",
    "parentId": 133
  },
  {
    "id,": 669,
    "region,": "运河",
    "parentId": 133
  },
  {
    "id,": 670,
    "region,": "沧县",
    "parentId": 133
  },
  {
    "id,": 671,
    "region,": "青县",
    "parentId": 133
  },
  {
    "id,": 672,
    "region,": "东光",
    "parentId": 133
  },
  {
    "id,": 673,
    "region,": "海兴",
    "parentId": 133
  },
  {
    "id,": 674,
    "region,": "盐山",
    "parentId": 133
  },
  {
    "id,": 675,
    "region,": "肃宁",
    "parentId": 133
  },
  {
    "id,": 676,
    "region,": "南皮",
    "parentId": 133
  },
  {
    "id,": 677,
    "region,": "吴桥",
    "parentId": 133
  },
  {
    "id,": 678,
    "region,": "献县",
    "parentId": 133
  },
  {
    "id,": 679,
    "region,": "孟村",
    "parentId": 133
  },
  {
    "id,": 680,
    "region,": "泊头",
    "parentId": 133
  },
  {
    "id,": 681,
    "region,": "任丘",
    "parentId": 133
  },
  {
    "id,": 682,
    "region,": "黄骅",
    "parentId": 133
  },
  {
    "id,": 683,
    "region,": "河间",
    "parentId": 133
  },
  {
    "id,": 684,
    "region,": "安次",
    "parentId": 134
  },
  {
    "id,": 685,
    "region,": "广阳",
    "parentId": 134
  },
  {
    "id,": 686,
    "region,": "固安",
    "parentId": 134
  },
  {
    "id,": 687,
    "region,": "永清",
    "parentId": 134
  },
  {
    "id,": 688,
    "region,": "香河",
    "parentId": 134
  },
  {
    "id,": 689,
    "region,": "大城",
    "parentId": 134
  },
  {
    "id,": 690,
    "region,": "文安",
    "parentId": 134
  },
  {
    "id,": 691,
    "region,": "大厂",
    "parentId": 134
  },
  {
    "id,": 692,
    "region,": "霸州",
    "parentId": 134
  },
  {
    "id,": 693,
    "region,": "三河",
    "parentId": 134
  },
  {
    "id,": 694,
    "region,": "桃城",
    "parentId": 135
  },
  {
    "id,": 695,
    "region,": "枣强",
    "parentId": 135
  },
  {
    "id,": 696,
    "region,": "武邑",
    "parentId": 135
  },
  {
    "id,": 697,
    "region,": "武强",
    "parentId": 135
  },
  {
    "id,": 698,
    "region,": "饶阳",
    "parentId": 135
  },
  {
    "id,": 699,
    "region,": "安平",
    "parentId": 135
  },
  {
    "id,": 700,
    "region,": "故城",
    "parentId": 135
  },
  {
    "id,": 701,
    "region,": "景县",
    "parentId": 135
  },
  {
    "id,": 702,
    "region,": "阜城",
    "parentId": 135
  },
  {
    "id,": 703,
    "region,": "冀州",
    "parentId": 135
  },
  {
    "id,": 704,
    "region,": "深州",
    "parentId": 135
  },
  {
    "id,": 705,
    "region,": "小店",
    "parentId": 136
  },
  {
    "id,": 706,
    "region,": "迎泽",
    "parentId": 136
  },
  {
    "id,": 707,
    "region,": "杏花岭",
    "parentId": 136
  },
  {
    "id,": 708,
    "region,": "尖草坪",
    "parentId": 136
  },
  {
    "id,": 709,
    "region,": "万柏林",
    "parentId": 136
  },
  {
    "id,": 710,
    "region,": "晋源",
    "parentId": 136
  },
  {
    "id,": 711,
    "region,": "清徐",
    "parentId": 136
  },
  {
    "id,": 712,
    "region,": "阳曲",
    "parentId": 136
  },
  {
    "id,": 713,
    "region,": "娄烦",
    "parentId": 136
  },
  {
    "id,": 714,
    "region,": "古交",
    "parentId": 136
  },
  {
    "id,": 715,
    "region,": "城区",
    "parentId": 137
  },
  {
    "id,": 716,
    "region,": "矿区",
    "parentId": 137
  },
  {
    "id,": 717,
    "region,": "南郊",
    "parentId": 137
  },
  {
    "id,": 718,
    "region,": "新荣",
    "parentId": 137
  },
  {
    "id,": 719,
    "region,": "阳高",
    "parentId": 137
  },
  {
    "id,": 720,
    "region,": "天镇",
    "parentId": 137
  },
  {
    "id,": 721,
    "region,": "广灵",
    "parentId": 137
  },
  {
    "id,": 722,
    "region,": "灵丘",
    "parentId": 137
  },
  {
    "id,": 723,
    "region,": "浑源",
    "parentId": 137
  },
  {
    "id,": 724,
    "region,": "左云",
    "parentId": 137
  },
  {
    "id,": 725,
    "region,": "大同",
    "parentId": 137
  },
  {
    "id,": 726,
    "region,": "城区",
    "parentId": 138
  },
  {
    "id,": 727,
    "region,": "矿区",
    "parentId": 138
  },
  {
    "id,": 728,
    "region,": "郊区",
    "parentId": 138
  },
  {
    "id,": 729,
    "region,": "平定",
    "parentId": 138
  },
  {
    "id,": 730,
    "region,": "盂县",
    "parentId": 138
  },
  {
    "id,": 731,
    "region,": "城区",
    "parentId": 139
  },
  {
    "id,": 732,
    "region,": "郊区",
    "parentId": 139
  },
  {
    "id,": 733,
    "region,": "长治",
    "parentId": 139
  },
  {
    "id,": 734,
    "region,": "襄垣",
    "parentId": 139
  },
  {
    "id,": 735,
    "region,": "屯留",
    "parentId": 139
  },
  {
    "id,": 736,
    "region,": "平顺",
    "parentId": 139
  },
  {
    "id,": 737,
    "region,": "黎城",
    "parentId": 139
  },
  {
    "id,": 738,
    "region,": "壶关",
    "parentId": 139
  },
  {
    "id,": 739,
    "region,": "长子",
    "parentId": 139
  },
  {
    "id,": 740,
    "region,": "武乡",
    "parentId": 139
  },
  {
    "id,": 741,
    "region,": "沁县",
    "parentId": 139
  },
  {
    "id,": 742,
    "region,": "沁源",
    "parentId": 139
  },
  {
    "id,": 743,
    "region,": "潞城",
    "parentId": 139
  },
  {
    "id,": 744,
    "region,": "城区",
    "parentId": 140
  },
  {
    "id,": 745,
    "region,": "沁水",
    "parentId": 140
  },
  {
    "id,": 746,
    "region,": "阳城",
    "parentId": 140
  },
  {
    "id,": 747,
    "region,": "陵川",
    "parentId": 140
  },
  {
    "id,": 748,
    "region,": "泽州",
    "parentId": 140
  },
  {
    "id,": 749,
    "region,": "高平",
    "parentId": 140
  },
  {
    "id,": 750,
    "region,": "朔城",
    "parentId": 141
  },
  {
    "id,": 751,
    "region,": "平鲁",
    "parentId": 141
  },
  {
    "id,": 752,
    "region,": "山阴",
    "parentId": 141
  },
  {
    "id,": 753,
    "region,": "应县",
    "parentId": 141
  },
  {
    "id,": 754,
    "region,": "右玉",
    "parentId": 141
  },
  {
    "id,": 755,
    "region,": "怀仁",
    "parentId": 141
  },
  {
    "id,": 756,
    "region,": "榆次",
    "parentId": 142
  },
  {
    "id,": 757,
    "region,": "榆社",
    "parentId": 142
  },
  {
    "id,": 758,
    "region,": "左权",
    "parentId": 142
  },
  {
    "id,": 759,
    "region,": "和顺",
    "parentId": 142
  },
  {
    "id,": 760,
    "region,": "昔阳",
    "parentId": 142
  },
  {
    "id,": 761,
    "region,": "寿阳",
    "parentId": 142
  },
  {
    "id,": 762,
    "region,": "太谷",
    "parentId": 142
  },
  {
    "id,": 763,
    "region,": "祁县",
    "parentId": 142
  },
  {
    "id,": 764,
    "region,": "平遥",
    "parentId": 142
  },
  {
    "id,": 765,
    "region,": "灵石",
    "parentId": 142
  },
  {
    "id,": 766,
    "region,": "介休",
    "parentId": 142
  },
  {
    "id,": 767,
    "region,": "盐湖",
    "parentId": 143
  },
  {
    "id,": 768,
    "region,": "临猗",
    "parentId": 143
  },
  {
    "id,": 769,
    "region,": "万荣",
    "parentId": 143
  },
  {
    "id,": 770,
    "region,": "闻喜",
    "parentId": 143
  },
  {
    "id,": 771,
    "region,": "稷山",
    "parentId": 143
  },
  {
    "id,": 772,
    "region,": "新绛",
    "parentId": 143
  },
  {
    "id,": 773,
    "region,": "绛县",
    "parentId": 143
  },
  {
    "id,": 774,
    "region,": "垣曲",
    "parentId": 143
  },
  {
    "id,": 775,
    "region,": "夏县",
    "parentId": 143
  },
  {
    "id,": 776,
    "region,": "平陆",
    "parentId": 143
  },
  {
    "id,": 777,
    "region,": "芮城",
    "parentId": 143
  },
  {
    "id,": 778,
    "region,": "永济",
    "parentId": 143
  },
  {
    "id,": 779,
    "region,": "河津",
    "parentId": 143
  },
  {
    "id,": 780,
    "region,": "忻府",
    "parentId": 144
  },
  {
    "id,": 781,
    "region,": "定襄",
    "parentId": 144
  },
  {
    "id,": 782,
    "region,": "五台",
    "parentId": 144
  },
  {
    "id,": 783,
    "region,": "代县",
    "parentId": 144
  },
  {
    "id,": 784,
    "region,": "繁峙",
    "parentId": 144
  },
  {
    "id,": 785,
    "region,": "宁武",
    "parentId": 144
  },
  {
    "id,": 786,
    "region,": "静乐",
    "parentId": 144
  },
  {
    "id,": 787,
    "region,": "神池",
    "parentId": 144
  },
  {
    "id,": 788,
    "region,": "五寨",
    "parentId": 144
  },
  {
    "id,": 789,
    "region,": "岢岚",
    "parentId": 144
  },
  {
    "id,": 790,
    "region,": "河曲",
    "parentId": 144
  },
  {
    "id,": 791,
    "region,": "保德",
    "parentId": 144
  },
  {
    "id,": 792,
    "region,": "偏关",
    "parentId": 144
  },
  {
    "id,": 793,
    "region,": "原平",
    "parentId": 144
  },
  {
    "id,": 794,
    "region,": "尧都",
    "parentId": 145
  },
  {
    "id,": 795,
    "region,": "曲沃",
    "parentId": 145
  },
  {
    "id,": 796,
    "region,": "翼城",
    "parentId": 145
  },
  {
    "id,": 797,
    "region,": "襄汾",
    "parentId": 145
  },
  {
    "id,": 798,
    "region,": "洪洞",
    "parentId": 145
  },
  {
    "id,": 799,
    "region,": "古县",
    "parentId": 145
  },
  {
    "id,": 800,
    "region,": "安泽",
    "parentId": 145
  },
  {
    "id,": 801,
    "region,": "浮山",
    "parentId": 145
  },
  {
    "id,": 802,
    "region,": "吉县",
    "parentId": 145
  },
  {
    "id,": 803,
    "region,": "乡宁",
    "parentId": 145
  },
  {
    "id,": 804,
    "region,": "大宁",
    "parentId": 145
  },
  {
    "id,": 805,
    "region,": "隰县",
    "parentId": 145
  },
  {
    "id,": 806,
    "region,": "永和",
    "parentId": 145
  },
  {
    "id,": 807,
    "region,": "蒲县",
    "parentId": 145
  },
  {
    "id,": 808,
    "region,": "汾西",
    "parentId": 145
  },
  {
    "id,": 809,
    "region,": "侯马",
    "parentId": 145
  },
  {
    "id,": 810,
    "region,": "霍州",
    "parentId": 145
  },
  {
    "id,": 811,
    "region,": "离石",
    "parentId": 146
  },
  {
    "id,": 812,
    "region,": "文水",
    "parentId": 146
  },
  {
    "id,": 813,
    "region,": "交城",
    "parentId": 146
  },
  {
    "id,": 814,
    "region,": "兴县",
    "parentId": 146
  },
  {
    "id,": 815,
    "region,": "临县",
    "parentId": 146
  },
  {
    "id,": 816,
    "region,": "柳林",
    "parentId": 146
  },
  {
    "id,": 817,
    "region,": "石楼",
    "parentId": 146
  },
  {
    "id,": 818,
    "region,": "岚县",
    "parentId": 146
  },
  {
    "id,": 819,
    "region,": "方山",
    "parentId": 146
  },
  {
    "id,": 820,
    "region,": "中阳",
    "parentId": 146
  },
  {
    "id,": 821,
    "region,": "交口",
    "parentId": 146
  },
  {
    "id,": 822,
    "region,": "孝义",
    "parentId": 146
  },
  {
    "id,": 823,
    "region,": "汾阳",
    "parentId": 146
  },
  {
    "id,": 824,
    "region,": "新城",
    "parentId": 147
  },
  {
    "id,": 825,
    "region,": "回民",
    "parentId": 147
  },
  {
    "id,": 826,
    "region,": "玉泉",
    "parentId": 147
  },
  {
    "id,": 827,
    "region,": "赛罕",
    "parentId": 147
  },
  {
    "id,": 828,
    "region,": "土默特左",
    "parentId": 147
  },
  {
    "id,": 829,
    "region,": "托克托",
    "parentId": 147
  },
  {
    "id,": 830,
    "region,": "和林格尔",
    "parentId": 147
  },
  {
    "id,": 831,
    "region,": "清水河",
    "parentId": 147
  },
  {
    "id,": 832,
    "region,": "武川",
    "parentId": 147
  },
  {
    "id,": 833,
    "region,": "东河",
    "parentId": 148
  },
  {
    "id,": 834,
    "region,": "昆都仑",
    "parentId": 148
  },
  {
    "id,": 835,
    "region,": "青山",
    "parentId": 148
  },
  {
    "id,": 836,
    "region,": "石拐",
    "parentId": 148
  },
  {
    "id,": 837,
    "region,": "白云",
    "parentId": 148
  },
  {
    "id,": 838,
    "region,": "九原",
    "parentId": 148
  },
  {
    "id,": 839,
    "region,": "土默特右",
    "parentId": 148
  },
  {
    "id,": 840,
    "region,": "固阳",
    "parentId": 148
  },
  {
    "id,": 841,
    "region,": "达尔罕茂明安",
    "parentId": 148
  },
  {
    "id,": 842,
    "region,": "海勃湾",
    "parentId": 149
  },
  {
    "id,": 843,
    "region,": "海南",
    "parentId": 149
  },
  {
    "id,": 844,
    "region,": "乌达",
    "parentId": 149
  },
  {
    "id,": 845,
    "region,": "红山",
    "parentId": 150
  },
  {
    "id,": 846,
    "region,": "元宝山",
    "parentId": 150
  },
  {
    "id,": 847,
    "region,": "松山",
    "parentId": 150
  },
  {
    "id,": 848,
    "region,": "阿鲁科尔沁",
    "parentId": 150
  },
  {
    "id,": 849,
    "region,": "巴林左",
    "parentId": 150
  },
  {
    "id,": 850,
    "region,": "巴林右",
    "parentId": 150
  },
  {
    "id,": 851,
    "region,": "林西",
    "parentId": 150
  },
  {
    "id,": 852,
    "region,": "克什克腾",
    "parentId": 150
  },
  {
    "id,": 853,
    "region,": "翁牛特",
    "parentId": 150
  },
  {
    "id,": 854,
    "region,": "喀喇沁",
    "parentId": 150
  },
  {
    "id,": 855,
    "region,": "宁城",
    "parentId": 150
  },
  {
    "id,": 856,
    "region,": "敖汉",
    "parentId": 150
  },
  {
    "id,": 857,
    "region,": "科尔沁",
    "parentId": 151
  },
  {
    "id,": 858,
    "region,": "科尔沁左翼中",
    "parentId": 151
  },
  {
    "id,": 859,
    "region,": "科尔沁左翼后",
    "parentId": 151
  },
  {
    "id,": 860,
    "region,": "开鲁",
    "parentId": 151
  },
  {
    "id,": 861,
    "region,": "库伦",
    "parentId": 151
  },
  {
    "id,": 862,
    "region,": "奈曼",
    "parentId": 151
  },
  {
    "id,": 863,
    "region,": "扎鲁特",
    "parentId": 151
  },
  {
    "id,": 864,
    "region,": "霍林郭勒",
    "parentId": 151
  },
  {
    "id,": 865,
    "region,": "东胜",
    "parentId": 152
  },
  {
    "id,": 866,
    "region,": "达拉特",
    "parentId": 152
  },
  {
    "id,": 867,
    "region,": "准格尔",
    "parentId": 152
  },
  {
    "id,": 868,
    "region,": "鄂托克前",
    "parentId": 152
  },
  {
    "id,": 869,
    "region,": "鄂托克",
    "parentId": 152
  },
  {
    "id,": 870,
    "region,": "杭锦",
    "parentId": 152
  },
  {
    "id,": 871,
    "region,": "乌审",
    "parentId": 152
  },
  {
    "id,": 872,
    "region,": "伊金霍洛",
    "parentId": 152
  },
  {
    "id,": 873,
    "region,": "海拉尔",
    "parentId": 153
  },
  {
    "id,": 874,
    "region,": "阿荣",
    "parentId": 153
  },
  {
    "id,": 875,
    "region,": "莫力达瓦",
    "parentId": 153
  },
  {
    "id,": 876,
    "region,": "鄂伦春",
    "parentId": 153
  },
  {
    "id,": 877,
    "region,": "鄂温克族",
    "parentId": 153
  },
  {
    "id,": 878,
    "region,": "陈巴尔虎",
    "parentId": 153
  },
  {
    "id,": 879,
    "region,": "新巴尔虎左",
    "parentId": 153
  },
  {
    "id,": 880,
    "region,": "新巴尔虎右",
    "parentId": 153
  },
  {
    "id,": 881,
    "region,": "满洲里",
    "parentId": 153
  },
  {
    "id,": 882,
    "region,": "牙克石",
    "parentId": 153
  },
  {
    "id,": 883,
    "region,": "扎兰屯",
    "parentId": 153
  },
  {
    "id,": 884,
    "region,": "额尔古纳",
    "parentId": 153
  },
  {
    "id,": 885,
    "region,": "根河",
    "parentId": 153
  },
  {
    "id,": 886,
    "region,": "临河",
    "parentId": 154
  },
  {
    "id,": 887,
    "region,": "五原",
    "parentId": 154
  },
  {
    "id,": 888,
    "region,": "磴口",
    "parentId": 154
  },
  {
    "id,": 889,
    "region,": "乌拉特前",
    "parentId": 154
  },
  {
    "id,": 890,
    "region,": "乌拉特中",
    "parentId": 154
  },
  {
    "id,": 891,
    "region,": "乌拉特后",
    "parentId": 154
  },
  {
    "id,": 892,
    "region,": "杭锦后",
    "parentId": 154
  },
  {
    "id,": 893,
    "region,": "集宁",
    "parentId": 155
  },
  {
    "id,": 894,
    "region,": "卓资",
    "parentId": 155
  },
  {
    "id,": 895,
    "region,": "化德",
    "parentId": 155
  },
  {
    "id,": 896,
    "region,": "商都",
    "parentId": 155
  },
  {
    "id,": 897,
    "region,": "兴和",
    "parentId": 155
  },
  {
    "id,": 898,
    "region,": "凉城",
    "parentId": 155
  },
  {
    "id,": 899,
    "region,": "察哈尔右翼前",
    "parentId": 155
  },
  {
    "id,": 900,
    "region,": "察哈尔右翼中",
    "parentId": 155
  },
  {
    "id,": 901,
    "region,": "察哈尔右翼后",
    "parentId": 155
  },
  {
    "id,": 902,
    "region,": "四子王",
    "parentId": 155
  },
  {
    "id,": 903,
    "region,": "丰镇",
    "parentId": 155
  },
  {
    "id,": 904,
    "region,": "乌兰浩特",
    "parentId": 156
  },
  {
    "id,": 905,
    "region,": "阿尔山",
    "parentId": 156
  },
  {
    "id,": 906,
    "region,": "科尔沁右翼前",
    "parentId": 156
  },
  {
    "id,": 907,
    "region,": "科尔沁右翼中",
    "parentId": 156
  },
  {
    "id,": 908,
    "region,": "扎赉特",
    "parentId": 156
  },
  {
    "id,": 909,
    "region,": "突泉",
    "parentId": 156
  },
  {
    "id,": 910,
    "region,": "二连浩特",
    "parentId": 157
  },
  {
    "id,": 911,
    "region,": "锡林浩特",
    "parentId": 157
  },
  {
    "id,": 912,
    "region,": "阿巴嘎",
    "parentId": 157
  },
  {
    "id,": 913,
    "region,": "苏尼特左",
    "parentId": 157
  },
  {
    "id,": 914,
    "region,": "苏尼特右",
    "parentId": 157
  },
  {
    "id,": 915,
    "region,": "东乌珠穆沁",
    "parentId": 157
  },
  {
    "id,": 916,
    "region,": "西乌珠穆沁",
    "parentId": 157
  },
  {
    "id,": 917,
    "region,": "太仆寺",
    "parentId": 157
  },
  {
    "id,": 918,
    "region,": "镶黄",
    "parentId": 157
  },
  {
    "id,": 919,
    "region,": "正镶白",
    "parentId": 157
  },
  {
    "id,": 920,
    "region,": "正蓝",
    "parentId": 157
  },
  {
    "id,": 921,
    "region,": "多伦",
    "parentId": 157
  },
  {
    "id,": 922,
    "region,": "阿拉善左",
    "parentId": 158
  },
  {
    "id,": 923,
    "region,": "阿拉善右",
    "parentId": 158
  },
  {
    "id,": 924,
    "region,": "额济纳",
    "parentId": 158
  },
  {
    "id,": 925,
    "region,": "和平",
    "parentId": 159
  },
  {
    "id,": 926,
    "region,": "沈河",
    "parentId": 159
  },
  {
    "id,": 927,
    "region,": "大东",
    "parentId": 159
  },
  {
    "id,": 928,
    "region,": "皇姑",
    "parentId": 159
  },
  {
    "id,": 929,
    "region,": "铁西",
    "parentId": 159
  },
  {
    "id,": 930,
    "region,": "苏家屯",
    "parentId": 159
  },
  {
    "id,": 931,
    "region,": "浑南",
    "parentId": 159
  },
  {
    "id,": 932,
    "region,": "沈北新区",
    "parentId": 159
  },
  {
    "id,": 933,
    "region,": "于洪",
    "parentId": 159
  },
  {
    "id,": 934,
    "region,": "辽中",
    "parentId": 159
  },
  {
    "id,": 935,
    "region,": "康平",
    "parentId": 159
  },
  {
    "id,": 936,
    "region,": "法库",
    "parentId": 159
  },
  {
    "id,": 937,
    "region,": "新民",
    "parentId": 159
  },
  {
    "id,": 938,
    "region,": "中山",
    "parentId": 160
  },
  {
    "id,": 939,
    "region,": "西岗",
    "parentId": 160
  },
  {
    "id,": 940,
    "region,": "沙河口",
    "parentId": 160
  },
  {
    "id,": 941,
    "region,": "甘井子",
    "parentId": 160
  },
  {
    "id,": 942,
    "region,": "旅顺口",
    "parentId": 160
  },
  {
    "id,": 943,
    "region,": "金州",
    "parentId": 160
  },
  {
    "id,": 944,
    "region,": "长海",
    "parentId": 160
  },
  {
    "id,": 945,
    "region,": "瓦房店",
    "parentId": 160
  },
  {
    "id,": 946,
    "region,": "普兰店",
    "parentId": 160
  },
  {
    "id,": 947,
    "region,": "庄河",
    "parentId": 160
  },
  {
    "id,": 948,
    "region,": "铁东",
    "parentId": 161
  },
  {
    "id,": 949,
    "region,": "铁西",
    "parentId": 161
  },
  {
    "id,": 950,
    "region,": "立山",
    "parentId": 161
  },
  {
    "id,": 951,
    "region,": "千山",
    "parentId": 161
  },
  {
    "id,": 952,
    "region,": "台安",
    "parentId": 161
  },
  {
    "id,": 953,
    "region,": "岫岩",
    "parentId": 161
  },
  {
    "id,": 954,
    "region,": "海城",
    "parentId": 161
  },
  {
    "id,": 955,
    "region,": "新抚",
    "parentId": 162
  },
  {
    "id,": 956,
    "region,": "东洲",
    "parentId": 162
  },
  {
    "id,": 957,
    "region,": "望花",
    "parentId": 162
  },
  {
    "id,": 958,
    "region,": "顺城",
    "parentId": 162
  },
  {
    "id,": 959,
    "region,": "抚顺",
    "parentId": 162
  },
  {
    "id,": 960,
    "region,": "新宾",
    "parentId": 162
  },
  {
    "id,": 961,
    "region,": "清原",
    "parentId": 162
  },
  {
    "id,": 962,
    "region,": "平山",
    "parentId": 163
  },
  {
    "id,": 963,
    "region,": "溪湖",
    "parentId": 163
  },
  {
    "id,": 964,
    "region,": "明山",
    "parentId": 163
  },
  {
    "id,": 965,
    "region,": "南芬",
    "parentId": 163
  },
  {
    "id,": 966,
    "region,": "本溪",
    "parentId": 163
  },
  {
    "id,": 967,
    "region,": "桓仁",
    "parentId": 163
  },
  {
    "id,": 968,
    "region,": "元宝",
    "parentId": 164
  },
  {
    "id,": 969,
    "region,": "振兴",
    "parentId": 164
  },
  {
    "id,": 970,
    "region,": "振安",
    "parentId": 164
  },
  {
    "id,": 971,
    "region,": "宽甸",
    "parentId": 164
  },
  {
    "id,": 972,
    "region,": "东港",
    "parentId": 164
  },
  {
    "id,": 973,
    "region,": "凤城",
    "parentId": 164
  },
  {
    "id,": 974,
    "region,": "古塔",
    "parentId": 165
  },
  {
    "id,": 975,
    "region,": "凌河",
    "parentId": 165
  },
  {
    "id,": 976,
    "region,": "太和",
    "parentId": 165
  },
  {
    "id,": 977,
    "region,": "黑山",
    "parentId": 165
  },
  {
    "id,": 978,
    "region,": "义县",
    "parentId": 165
  },
  {
    "id,": 979,
    "region,": "凌海",
    "parentId": 165
  },
  {
    "id,": 980,
    "region,": "北镇",
    "parentId": 165
  },
  {
    "id,": 981,
    "region,": "站前",
    "parentId": 166
  },
  {
    "id,": 982,
    "region,": "西市",
    "parentId": 166
  },
  {
    "id,": 983,
    "region,": "鲅鱼圈",
    "parentId": 166
  },
  {
    "id,": 984,
    "region,": "老边",
    "parentId": 166
  },
  {
    "id,": 985,
    "region,": "盖州",
    "parentId": 166
  },
  {
    "id,": 986,
    "region,": "大石桥",
    "parentId": 166
  },
  {
    "id,": 987,
    "region,": "海州",
    "parentId": 167
  },
  {
    "id,": 988,
    "region,": "新邱",
    "parentId": 167
  },
  {
    "id,": 989,
    "region,": "太平",
    "parentId": 167
  },
  {
    "id,": 990,
    "region,": "清河门",
    "parentId": 167
  },
  {
    "id,": 991,
    "region,": "细河",
    "parentId": 167
  },
  {
    "id,": 992,
    "region,": "阜新",
    "parentId": 167
  },
  {
    "id,": 993,
    "region,": "彰武",
    "parentId": 167
  },
  {
    "id,": 994,
    "region,": "白塔",
    "parentId": 168
  },
  {
    "id,": 995,
    "region,": "文圣",
    "parentId": 168
  },
  {
    "id,": 996,
    "region,": "宏伟",
    "parentId": 168
  },
  {
    "id,": 997,
    "region,": "弓长岭",
    "parentId": 168
  },
  {
    "id,": 998,
    "region,": "辽阳",
    "parentId": 168
  },
  {
    "id,": 999,
    "region,": "灯塔",
    "parentId": 168
  },
  {
    "id,": 1000,
    "region,": "太子河",
    "parentId": 168
  },
  {
    "id,": 1001,
    "region,": "双台子",
    "parentId": 169
  },
  {
    "id,": 1002,
    "region,": "兴隆台",
    "parentId": 169
  },
  {
    "id,": 1003,
    "region,": "大洼",
    "parentId": 169
  },
  {
    "id,": 1004,
    "region,": "盘山",
    "parentId": 169
  },
  {
    "id,": 1005,
    "region,": "银州",
    "parentId": 170
  },
  {
    "id,": 1006,
    "region,": "清河",
    "parentId": 170
  },
  {
    "id,": 1007,
    "region,": "铁岭",
    "parentId": 170
  },
  {
    "id,": 1008,
    "region,": "西丰",
    "parentId": 170
  },
  {
    "id,": 1009,
    "region,": "昌图",
    "parentId": 170
  },
  {
    "id,": 1010,
    "region,": "调兵山",
    "parentId": 170
  },
  {
    "id,": 1011,
    "region,": "开原",
    "parentId": 170
  },
  {
    "id,": 1012,
    "region,": "双塔",
    "parentId": 171
  },
  {
    "id,": 1013,
    "region,": "龙城",
    "parentId": 171
  },
  {
    "id,": 1014,
    "region,": "朝阳",
    "parentId": 171
  },
  {
    "id,": 1015,
    "region,": "建平",
    "parentId": 171
  },
  {
    "id,": 1016,
    "region,": "喀喇沁左翼",
    "parentId": 171
  },
  {
    "id,": 1017,
    "region,": "北票",
    "parentId": 171
  },
  {
    "id,": 1018,
    "region,": "凌源",
    "parentId": 171
  },
  {
    "id,": 1019,
    "region,": "连山",
    "parentId": 172
  },
  {
    "id,": 1020,
    "region,": "龙港",
    "parentId": 172
  },
  {
    "id,": 1021,
    "region,": "南票",
    "parentId": 172
  },
  {
    "id,": 1022,
    "region,": "绥中",
    "parentId": 172
  },
  {
    "id,": 1023,
    "region,": "建昌",
    "parentId": 172
  },
  {
    "id,": 1024,
    "region,": "兴城",
    "parentId": 172
  },
  {
    "id,": 1025,
    "region,": "南关",
    "parentId": 173
  },
  {
    "id,": 1026,
    "region,": "宽城",
    "parentId": 173
  },
  {
    "id,": 1027,
    "region,": "朝阳",
    "parentId": 173
  },
  {
    "id,": 1028,
    "region,": "二道",
    "parentId": 173
  },
  {
    "id,": 1029,
    "region,": "绿园",
    "parentId": 173
  },
  {
    "id,": 1030,
    "region,": "双阳",
    "parentId": 173
  },
  {
    "id,": 1031,
    "region,": "农安",
    "parentId": 173
  },
  {
    "id,": 1032,
    "region,": "九台",
    "parentId": 173
  },
  {
    "id,": 1033,
    "region,": "榆树",
    "parentId": 173
  },
  {
    "id,": 1034,
    "region,": "德惠",
    "parentId": 173
  },
  {
    "id,": 1035,
    "region,": "昌邑",
    "parentId": 174
  },
  {
    "id,": 1036,
    "region,": "龙潭",
    "parentId": 174
  },
  {
    "id,": 1037,
    "region,": "船营",
    "parentId": 174
  },
  {
    "id,": 1038,
    "region,": "丰满",
    "parentId": 174
  },
  {
    "id,": 1039,
    "region,": "永吉",
    "parentId": 174
  },
  {
    "id,": 1040,
    "region,": "桦甸",
    "parentId": 174
  },
  {
    "id,": 1041,
    "region,": "蛟河",
    "parentId": 174
  },
  {
    "id,": 1042,
    "region,": "舒兰",
    "parentId": 174
  },
  {
    "id,": 1043,
    "region,": "磐石",
    "parentId": 174
  },
  {
    "id,": 1044,
    "region,": "铁西",
    "parentId": 175
  },
  {
    "id,": 1045,
    "region,": "铁东",
    "parentId": 175
  },
  {
    "id,": 1046,
    "region,": "梨树",
    "parentId": 175
  },
  {
    "id,": 1047,
    "region,": "伊通",
    "parentId": 175
  },
  {
    "id,": 1048,
    "region,": "公主岭",
    "parentId": 175
  },
  {
    "id,": 1049,
    "region,": "双辽",
    "parentId": 175
  },
  {
    "id,": 1050,
    "region,": "龙山",
    "parentId": 176
  },
  {
    "id,": 1051,
    "region,": "西安",
    "parentId": 176
  },
  {
    "id,": 1052,
    "region,": "东丰",
    "parentId": 176
  },
  {
    "id,": 1053,
    "region,": "东辽",
    "parentId": 176
  },
  {
    "id,": 1054,
    "region,": "东昌",
    "parentId": 177
  },
  {
    "id,": 1055,
    "region,": "二道江",
    "parentId": 177
  },
  {
    "id,": 1056,
    "region,": "通化",
    "parentId": 177
  },
  {
    "id,": 1057,
    "region,": "辉南",
    "parentId": 177
  },
  {
    "id,": 1058,
    "region,": "柳河",
    "parentId": 177
  },
  {
    "id,": 1059,
    "region,": "梅河口",
    "parentId": 177
  },
  {
    "id,": 1060,
    "region,": "集安",
    "parentId": 177
  },
  {
    "id,": 1061,
    "region,": "浑江",
    "parentId": 178
  },
  {
    "id,": 1062,
    "region,": "江源",
    "parentId": 178
  },
  {
    "id,": 1063,
    "region,": "抚松",
    "parentId": 178
  },
  {
    "id,": 1064,
    "region,": "靖宇",
    "parentId": 178
  },
  {
    "id,": 1065,
    "region,": "长白",
    "parentId": 178
  },
  {
    "id,": 1066,
    "region,": "临江",
    "parentId": 178
  },
  {
    "id,": 1067,
    "region,": "宁江",
    "parentId": 179
  },
  {
    "id,": 1068,
    "region,": "前郭尔罗斯",
    "parentId": 179
  },
  {
    "id,": 1069,
    "region,": "长岭",
    "parentId": 179
  },
  {
    "id,": 1070,
    "region,": "乾安",
    "parentId": 179
  },
  {
    "id,": 1071,
    "region,": "扶余",
    "parentId": 179
  },
  {
    "id,": 1072,
    "region,": "洮北",
    "parentId": 180
  },
  {
    "id,": 1073,
    "region,": "镇赉",
    "parentId": 180
  },
  {
    "id,": 1074,
    "region,": "洮南",
    "parentId": 180
  },
  {
    "id,": 1075,
    "region,": "大安",
    "parentId": 180
  },
  {
    "id,": 1076,
    "region,": "通榆",
    "parentId": 180
  },
  {
    "id,": 1077,
    "region,": "延吉",
    "parentId": 181
  },
  {
    "id,": 1078,
    "region,": "图们",
    "parentId": 181
  },
  {
    "id,": 1079,
    "region,": "敦化",
    "parentId": 181
  },
  {
    "id,": 1080,
    "region,": "珲春",
    "parentId": 181
  },
  {
    "id,": 1081,
    "region,": "龙井",
    "parentId": 181
  },
  {
    "id,": 1082,
    "region,": "和龙",
    "parentId": 181
  },
  {
    "id,": 1083,
    "region,": "汪清",
    "parentId": 181
  },
  {
    "id,": 1084,
    "region,": "安图",
    "parentId": 181
  },
  {
    "id,": 1085,
    "region,": "道里",
    "parentId": 182
  },
  {
    "id,": 1086,
    "region,": "南岗",
    "parentId": 182
  },
  {
    "id,": 1087,
    "region,": "道外",
    "parentId": 182
  },
  {
    "id,": 1088,
    "region,": "平房",
    "parentId": 182
  },
  {
    "id,": 1089,
    "region,": "松北",
    "parentId": 182
  },
  {
    "id,": 1090,
    "region,": "香坊",
    "parentId": 182
  },
  {
    "id,": 1091,
    "region,": "呼兰",
    "parentId": 182
  },
  {
    "id,": 1092,
    "region,": "阿城",
    "parentId": 182
  },
  {
    "id,": 1093,
    "region,": "依兰",
    "parentId": 182
  },
  {
    "id,": 1094,
    "region,": "方正",
    "parentId": 182
  },
  {
    "id,": 1095,
    "region,": "宾县",
    "parentId": 182
  },
  {
    "id,": 1096,
    "region,": "巴彦",
    "parentId": 182
  },
  {
    "id,": 1097,
    "region,": "木兰",
    "parentId": 182
  },
  {
    "id,": 1098,
    "region,": "通河",
    "parentId": 182
  },
  {
    "id,": 1099,
    "region,": "延寿",
    "parentId": 182
  },
  {
    "id,": 1100,
    "region,": "双城",
    "parentId": 182
  },
  {
    "id,": 1101,
    "region,": "尚志",
    "parentId": 182
  },
  {
    "id,": 1102,
    "region,": "五常",
    "parentId": 182
  },
  {
    "id,": 1103,
    "region,": "龙沙",
    "parentId": 183
  },
  {
    "id,": 1104,
    "region,": "建华",
    "parentId": 183
  },
  {
    "id,": 1105,
    "region,": "铁锋",
    "parentId": 183
  },
  {
    "id,": 1106,
    "region,": "昂昂溪",
    "parentId": 183
  },
  {
    "id,": 1107,
    "region,": "富拉尔基",
    "parentId": 183
  },
  {
    "id,": 1108,
    "region,": "碾子山",
    "parentId": 183
  },
  {
    "id,": 1109,
    "region,": "梅里斯",
    "parentId": 183
  },
  {
    "id,": 1110,
    "region,": "龙江",
    "parentId": 183
  },
  {
    "id,": 1111,
    "region,": "依安",
    "parentId": 183
  },
  {
    "id,": 1112,
    "region,": "泰来",
    "parentId": 183
  },
  {
    "id,": 1113,
    "region,": "甘南",
    "parentId": 183
  },
  {
    "id,": 1114,
    "region,": "富裕",
    "parentId": 183
  },
  {
    "id,": 1115,
    "region,": "克山",
    "parentId": 183
  },
  {
    "id,": 1116,
    "region,": "克东",
    "parentId": 183
  },
  {
    "id,": 1117,
    "region,": "拜泉",
    "parentId": 183
  },
  {
    "id,": 1118,
    "region,": "讷河",
    "parentId": 183
  },
  {
    "id,": 1119,
    "region,": "鸡冠",
    "parentId": 184
  },
  {
    "id,": 1120,
    "region,": "恒山",
    "parentId": 184
  },
  {
    "id,": 1121,
    "region,": "滴道",
    "parentId": 184
  },
  {
    "id,": 1122,
    "region,": "梨树",
    "parentId": 184
  },
  {
    "id,": 1123,
    "region,": "城子河",
    "parentId": 184
  },
  {
    "id,": 1124,
    "region,": "麻山",
    "parentId": 184
  },
  {
    "id,": 1125,
    "region,": "鸡东",
    "parentId": 184
  },
  {
    "id,": 1126,
    "region,": "虎林",
    "parentId": 184
  },
  {
    "id,": 1127,
    "region,": "密山",
    "parentId": 184
  },
  {
    "id,": 1128,
    "region,": "向阳",
    "parentId": 185
  },
  {
    "id,": 1129,
    "region,": "工农",
    "parentId": 185
  },
  {
    "id,": 1130,
    "region,": "南山",
    "parentId": 185
  },
  {
    "id,": 1131,
    "region,": "兴安",
    "parentId": 185
  },
  {
    "id,": 1132,
    "region,": "东山",
    "parentId": 185
  },
  {
    "id,": 1133,
    "region,": "兴山",
    "parentId": 185
  },
  {
    "id,": 1134,
    "region,": "萝北",
    "parentId": 185
  },
  {
    "id,": 1135,
    "region,": "绥滨",
    "parentId": 185
  },
  {
    "id,": 1136,
    "region,": "尖山",
    "parentId": 186
  },
  {
    "id,": 1137,
    "region,": "岭东",
    "parentId": 186
  },
  {
    "id,": 1138,
    "region,": "四方台",
    "parentId": 186
  },
  {
    "id,": 1139,
    "region,": "宝山",
    "parentId": 186
  },
  {
    "id,": 1140,
    "region,": "集贤",
    "parentId": 186
  },
  {
    "id,": 1141,
    "region,": "友谊",
    "parentId": 186
  },
  {
    "id,": 1142,
    "region,": "宝清",
    "parentId": 186
  },
  {
    "id,": 1143,
    "region,": "饶河",
    "parentId": 186
  },
  {
    "id,": 1144,
    "region,": "萨尔图",
    "parentId": 187
  },
  {
    "id,": 1145,
    "region,": "龙凤",
    "parentId": 187
  },
  {
    "id,": 1146,
    "region,": "让胡路",
    "parentId": 187
  },
  {
    "id,": 1147,
    "region,": "红岗",
    "parentId": 187
  },
  {
    "id,": 1148,
    "region,": "大同",
    "parentId": 187
  },
  {
    "id,": 1149,
    "region,": "肇州",
    "parentId": 187
  },
  {
    "id,": 1150,
    "region,": "肇源",
    "parentId": 187
  },
  {
    "id,": 1151,
    "region,": "林甸",
    "parentId": 187
  },
  {
    "id,": 1152,
    "region,": "杜尔伯特",
    "parentId": 187
  },
  {
    "id,": 1153,
    "region,": "伊春",
    "parentId": 188
  },
  {
    "id,": 1154,
    "region,": "南岔",
    "parentId": 188
  },
  {
    "id,": 1155,
    "region,": "友好",
    "parentId": 188
  },
  {
    "id,": 1156,
    "region,": "西林",
    "parentId": 188
  },
  {
    "id,": 1157,
    "region,": "翠峦",
    "parentId": 188
  },
  {
    "id,": 1158,
    "region,": "新青",
    "parentId": 188
  },
  {
    "id,": 1159,
    "region,": "美溪",
    "parentId": 188
  },
  {
    "id,": 1160,
    "region,": "金山屯",
    "parentId": 188
  },
  {
    "id,": 1161,
    "region,": "五营",
    "parentId": 188
  },
  {
    "id,": 1162,
    "region,": "乌马河",
    "parentId": 188
  },
  {
    "id,": 1163,
    "region,": "汤旺河",
    "parentId": 188
  },
  {
    "id,": 1164,
    "region,": "带岭",
    "parentId": 188
  },
  {
    "id,": 1165,
    "region,": "乌伊岭",
    "parentId": 188
  },
  {
    "id,": 1166,
    "region,": "红星",
    "parentId": 188
  },
  {
    "id,": 1167,
    "region,": "上甘岭",
    "parentId": 188
  },
  {
    "id,": 1168,
    "region,": "嘉荫",
    "parentId": 188
  },
  {
    "id,": 1169,
    "region,": "铁力",
    "parentId": 188
  },
  {
    "id,": 1170,
    "region,": "向阳",
    "parentId": 189
  },
  {
    "id,": 1171,
    "region,": "前进",
    "parentId": 189
  },
  {
    "id,": 1172,
    "region,": "东风",
    "parentId": 189
  },
  {
    "id,": 1173,
    "region,": "郊区",
    "parentId": 189
  },
  {
    "id,": 1174,
    "region,": "桦南",
    "parentId": 189
  },
  {
    "id,": 1175,
    "region,": "桦川",
    "parentId": 189
  },
  {
    "id,": 1176,
    "region,": "汤原",
    "parentId": 189
  },
  {
    "id,": 1177,
    "region,": "抚远",
    "parentId": 189
  },
  {
    "id,": 1178,
    "region,": "同江",
    "parentId": 189
  },
  {
    "id,": 1179,
    "region,": "富锦",
    "parentId": 189
  },
  {
    "id,": 1180,
    "region,": "新兴",
    "parentId": 190
  },
  {
    "id,": 1181,
    "region,": "桃山",
    "parentId": 190
  },
  {
    "id,": 1182,
    "region,": "茄子河",
    "parentId": 190
  },
  {
    "id,": 1183,
    "region,": "勃利",
    "parentId": 190
  },
  {
    "id,": 1184,
    "region,": "东安",
    "parentId": 191
  },
  {
    "id,": 1185,
    "region,": "阳明",
    "parentId": 191
  },
  {
    "id,": 1186,
    "region,": "爱民",
    "parentId": 191
  },
  {
    "id,": 1187,
    "region,": "西安",
    "parentId": 191
  },
  {
    "id,": 1188,
    "region,": "东宁",
    "parentId": 191
  },
  {
    "id,": 1189,
    "region,": "林口",
    "parentId": 191
  },
  {
    "id,": 1190,
    "region,": "绥芬河",
    "parentId": 191
  },
  {
    "id,": 1191,
    "region,": "海林",
    "parentId": 191
  },
  {
    "id,": 1192,
    "region,": "宁安",
    "parentId": 191
  },
  {
    "id,": 1193,
    "region,": "穆棱",
    "parentId": 191
  },
  {
    "id,": 1194,
    "region,": "爱辉",
    "parentId": 192
  },
  {
    "id,": 1195,
    "region,": "嫩江",
    "parentId": 192
  },
  {
    "id,": 1196,
    "region,": "逊克",
    "parentId": 192
  },
  {
    "id,": 1197,
    "region,": "孙吴",
    "parentId": 192
  },
  {
    "id,": 1198,
    "region,": "北安",
    "parentId": 192
  },
  {
    "id,": 1199,
    "region,": "五大连池",
    "parentId": 192
  },
  {
    "id,": 1200,
    "region,": "北林",
    "parentId": 193
  },
  {
    "id,": 1201,
    "region,": "望奎",
    "parentId": 193
  },
  {
    "id,": 1202,
    "region,": "兰西",
    "parentId": 193
  },
  {
    "id,": 1203,
    "region,": "青冈",
    "parentId": 193
  },
  {
    "id,": 1204,
    "region,": "庆安",
    "parentId": 193
  },
  {
    "id,": 1205,
    "region,": "明水",
    "parentId": 193
  },
  {
    "id,": 1206,
    "region,": "绥棱",
    "parentId": 193
  },
  {
    "id,": 1207,
    "region,": "安达",
    "parentId": 193
  },
  {
    "id,": 1208,
    "region,": "肇东",
    "parentId": 193
  },
  {
    "id,": 1209,
    "region,": "海伦",
    "parentId": 193
  },
  {
    "id,": 1210,
    "region,": "加格达奇",
    "parentId": 194
  },
  {
    "id,": 1211,
    "region,": "松岭",
    "parentId": 194
  },
  {
    "id,": 1212,
    "region,": "新林",
    "parentId": 194
  },
  {
    "id,": 1213,
    "region,": "呼中",
    "parentId": 194
  },
  {
    "id,": 1214,
    "region,": "呼玛",
    "parentId": 194
  },
  {
    "id,": 1215,
    "region,": "塔河",
    "parentId": 194
  },
  {
    "id,": 1216,
    "region,": "漠河",
    "parentId": 194
  },
  {
    "id,": 1217,
    "region,": "玄武",
    "parentId": 195
  },
  {
    "id,": 1218,
    "region,": "秦淮",
    "parentId": 195
  },
  {
    "id,": 1219,
    "region,": "建邺",
    "parentId": 195
  },
  {
    "id,": 1220,
    "region,": "鼓楼",
    "parentId": 195
  },
  {
    "id,": 1221,
    "region,": "浦口",
    "parentId": 195
  },
  {
    "id,": 1222,
    "region,": "栖霞",
    "parentId": 195
  },
  {
    "id,": 1223,
    "region,": "雨花台",
    "parentId": 195
  },
  {
    "id,": 1224,
    "region,": "江宁",
    "parentId": 195
  },
  {
    "id,": 1225,
    "region,": "六合",
    "parentId": 195
  },
  {
    "id,": 1226,
    "region,": "溧水",
    "parentId": 195
  },
  {
    "id,": 1227,
    "region,": "高淳",
    "parentId": 195
  },
  {
    "id,": 1228,
    "region,": "梁溪",
    "parentId": 196
  },
  {
    "id,": 1229,
    "region,": "新吴",
    "parentId": 196
  },
  {
    "id,": 1231,
    "region,": "锡山",
    "parentId": 196
  },
  {
    "id,": 1232,
    "region,": "惠山",
    "parentId": 196
  },
  {
    "id,": 1233,
    "region,": "滨湖",
    "parentId": 196
  },
  {
    "id,": 1234,
    "region,": "江阴",
    "parentId": 196
  },
  {
    "id,": 1235,
    "region,": "宜兴",
    "parentId": 196
  },
  {
    "id,": 1236,
    "region,": "鼓楼",
    "parentId": 197
  },
  {
    "id,": 1237,
    "region,": "云龙",
    "parentId": 197
  },
  {
    "id,": 1238,
    "region,": "贾汪",
    "parentId": 197
  },
  {
    "id,": 1239,
    "region,": "泉山",
    "parentId": 197
  },
  {
    "id,": 1240,
    "region,": "铜山",
    "parentId": 197
  },
  {
    "id,": 1241,
    "region,": "丰县",
    "parentId": 197
  },
  {
    "id,": 1242,
    "region,": "沛县",
    "parentId": 197
  },
  {
    "id,": 1243,
    "region,": "睢宁",
    "parentId": 197
  },
  {
    "id,": 1244,
    "region,": "新沂",
    "parentId": 197
  },
  {
    "id,": 1245,
    "region,": "邳州",
    "parentId": 197
  },
  {
    "id,": 1246,
    "region,": "天宁",
    "parentId": 198
  },
  {
    "id,": 1247,
    "region,": "钟楼",
    "parentId": 198
  },
  {
    "id,": 1249,
    "region,": "新北",
    "parentId": 198
  },
  {
    "id,": 1250,
    "region,": "武进",
    "parentId": 198
  },
  {
    "id,": 1251,
    "region,": "溧阳",
    "parentId": 198
  },
  {
    "id,": 1252,
    "region,": "金坛",
    "parentId": 198
  },
  {
    "id,": 1253,
    "region,": "虎丘",
    "parentId": 199
  },
  {
    "id,": 1254,
    "region,": "吴中",
    "parentId": 199
  },
  {
    "id,": 1255,
    "region,": "相城",
    "parentId": 199
  },
  {
    "id,": 1256,
    "region,": "姑苏",
    "parentId": 199
  },
  {
    "id,": 1257,
    "region,": "吴江",
    "parentId": 199
  },
  {
    "id,": 1258,
    "region,": "常熟",
    "parentId": 199
  },
  {
    "id,": 1259,
    "region,": "张家港",
    "parentId": 199
  },
  {
    "id,": 1260,
    "region,": "昆山",
    "parentId": 199
  },
  {
    "id,": 1261,
    "region,": "太仓",
    "parentId": 199
  },
  {
    "id,": 1262,
    "region,": "崇川",
    "parentId": 200
  },
  {
    "id,": 1263,
    "region,": "港闸",
    "parentId": 200
  },
  {
    "id,": 1264,
    "region,": "通州",
    "parentId": 200
  },
  {
    "id,": 1265,
    "region,": "海安",
    "parentId": 200
  },
  {
    "id,": 1266,
    "region,": "如东",
    "parentId": 200
  },
  {
    "id,": 1267,
    "region,": "启东",
    "parentId": 200
  },
  {
    "id,": 1268,
    "region,": "如皋",
    "parentId": 200
  },
  {
    "id,": 1269,
    "region,": "海门",
    "parentId": 200
  },
  {
    "id,": 1270,
    "region,": "连云",
    "parentId": 201
  },
  {
    "id,": 1272,
    "region,": "海州",
    "parentId": 201
  },
  {
    "id,": 1273,
    "region,": "赣榆",
    "parentId": 201
  },
  {
    "id,": 1274,
    "region,": "东海",
    "parentId": 201
  },
  {
    "id,": 1275,
    "region,": "灌云",
    "parentId": 201
  },
  {
    "id,": 1276,
    "region,": "灌南",
    "parentId": 201
  },
  {
    "id,": 1277,
    "region,": "清河",
    "parentId": 202
  },
  {
    "id,": 1278,
    "region,": "淮安",
    "parentId": 202
  },
  {
    "id,": 1279,
    "region,": "淮阴",
    "parentId": 202
  },
  {
    "id,": 1280,
    "region,": "清浦",
    "parentId": 202
  },
  {
    "id,": 1281,
    "region,": "涟水",
    "parentId": 202
  },
  {
    "id,": 1282,
    "region,": "洪泽",
    "parentId": 202
  },
  {
    "id,": 1283,
    "region,": "盱眙",
    "parentId": 202
  },
  {
    "id,": 1284,
    "region,": "金湖",
    "parentId": 202
  },
  {
    "id,": 1285,
    "region,": "亭湖",
    "parentId": 203
  },
  {
    "id,": 1286,
    "region,": "盐都",
    "parentId": 203
  },
  {
    "id,": 1287,
    "region,": "响水",
    "parentId": 203
  },
  {
    "id,": 1288,
    "region,": "滨海",
    "parentId": 203
  },
  {
    "id,": 1289,
    "region,": "阜宁",
    "parentId": 203
  },
  {
    "id,": 1290,
    "region,": "射阳",
    "parentId": 203
  },
  {
    "id,": 1291,
    "region,": "建湖",
    "parentId": 203
  },
  {
    "id,": 1292,
    "region,": "东台",
    "parentId": 203
  },
  {
    "id,": 1293,
    "region,": "大丰",
    "parentId": 203
  },
  {
    "id,": 1294,
    "region,": "广陵",
    "parentId": 204
  },
  {
    "id,": 1295,
    "region,": "邗江",
    "parentId": 204
  },
  {
    "id,": 1296,
    "region,": "江都",
    "parentId": 204
  },
  {
    "id,": 1297,
    "region,": "宝应",
    "parentId": 204
  },
  {
    "id,": 1298,
    "region,": "仪征",
    "parentId": 204
  },
  {
    "id,": 1299,
    "region,": "高邮",
    "parentId": 204
  },
  {
    "id,": 1300,
    "region,": "京口",
    "parentId": 205
  },
  {
    "id,": 1301,
    "region,": "润州",
    "parentId": 205
  },
  {
    "id,": 1302,
    "region,": "丹徒",
    "parentId": 205
  },
  {
    "id,": 1303,
    "region,": "丹阳",
    "parentId": 205
  },
  {
    "id,": 1304,
    "region,": "扬中",
    "parentId": 205
  },
  {
    "id,": 1305,
    "region,": "句容",
    "parentId": 205
  },
  {
    "id,": 1306,
    "region,": "海陵",
    "parentId": 206
  },
  {
    "id,": 1307,
    "region,": "高港",
    "parentId": 206
  },
  {
    "id,": 1308,
    "region,": "兴化",
    "parentId": 206
  },
  {
    "id,": 1309,
    "region,": "靖江",
    "parentId": 206
  },
  {
    "id,": 1310,
    "region,": "泰兴",
    "parentId": 206
  },
  {
    "id,": 1311,
    "region,": "姜堰",
    "parentId": 206
  },
  {
    "id,": 1312,
    "region,": "宿城",
    "parentId": 207
  },
  {
    "id,": 1313,
    "region,": "宿豫",
    "parentId": 207
  },
  {
    "id,": 1314,
    "region,": "沭阳",
    "parentId": 207
  },
  {
    "id,": 1315,
    "region,": "泗阳",
    "parentId": 207
  },
  {
    "id,": 1316,
    "region,": "泗洪",
    "parentId": 207
  },
  {
    "id,": 1317,
    "region,": "上城",
    "parentId": 208
  },
  {
    "id,": 1318,
    "region,": "下城",
    "parentId": 208
  },
  {
    "id,": 1319,
    "region,": "江干",
    "parentId": 208
  },
  {
    "id,": 1320,
    "region,": "拱墅",
    "parentId": 208
  },
  {
    "id,": 1321,
    "region,": "西湖",
    "parentId": 208
  },
  {
    "id,": 1322,
    "region,": "滨江",
    "parentId": 208
  },
  {
    "id,": 1323,
    "region,": "萧山",
    "parentId": 208
  },
  {
    "id,": 1324,
    "region,": "余杭",
    "parentId": 208
  },
  {
    "id,": 1325,
    "region,": "桐庐",
    "parentId": 208
  },
  {
    "id,": 1326,
    "region,": "淳安",
    "parentId": 208
  },
  {
    "id,": 1327,
    "region,": "建德",
    "parentId": 208
  },
  {
    "id,": 1328,
    "region,": "富阳",
    "parentId": 208
  },
  {
    "id,": 1329,
    "region,": "临安",
    "parentId": 208
  },
  {
    "id,": 1330,
    "region,": "海曙",
    "parentId": 209
  },
  {
    "id,": 1332,
    "region,": "江北",
    "parentId": 209
  },
  {
    "id,": 1333,
    "region,": "北仑",
    "parentId": 209
  },
  {
    "id,": 1334,
    "region,": "镇海",
    "parentId": 209
  },
  {
    "id,": 1335,
    "region,": "鄞州",
    "parentId": 209
  },
  {
    "id,": 1336,
    "region,": "象山",
    "parentId": 209
  },
  {
    "id,": 1337,
    "region,": "宁海",
    "parentId": 209
  },
  {
    "id,": 1338,
    "region,": "余姚",
    "parentId": 209
  },
  {
    "id,": 1339,
    "region,": "慈溪",
    "parentId": 209
  },
  {
    "id,": 1340,
    "region,": "奉化",
    "parentId": 209
  },
  {
    "id,": 1341,
    "region,": "鹿城",
    "parentId": 210
  },
  {
    "id,": 1342,
    "region,": "龙湾",
    "parentId": 210
  },
  {
    "id,": 1343,
    "region,": "瓯海",
    "parentId": 210
  },
  {
    "id,": 1344,
    "region,": "洞头",
    "parentId": 210
  },
  {
    "id,": 1345,
    "region,": "永嘉",
    "parentId": 210
  },
  {
    "id,": 1346,
    "region,": "平阳",
    "parentId": 210
  },
  {
    "id,": 1347,
    "region,": "苍南",
    "parentId": 210
  },
  {
    "id,": 1348,
    "region,": "文成",
    "parentId": 210
  },
  {
    "id,": 1349,
    "region,": "泰顺",
    "parentId": 210
  },
  {
    "id,": 1350,
    "region,": "瑞安",
    "parentId": 210
  },
  {
    "id,": 1351,
    "region,": "乐清",
    "parentId": 210
  },
  {
    "id,": 1352,
    "region,": "南湖",
    "parentId": 211
  },
  {
    "id,": 1353,
    "region,": "秀洲",
    "parentId": 211
  },
  {
    "id,": 1354,
    "region,": "嘉善",
    "parentId": 211
  },
  {
    "id,": 1355,
    "region,": "海盐",
    "parentId": 211
  },
  {
    "id,": 1356,
    "region,": "海宁",
    "parentId": 211
  },
  {
    "id,": 1357,
    "region,": "平湖",
    "parentId": 211
  },
  {
    "id,": 1358,
    "region,": "桐乡",
    "parentId": 211
  },
  {
    "id,": 1359,
    "region,": "吴兴",
    "parentId": 212
  },
  {
    "id,": 1360,
    "region,": "南浔",
    "parentId": 212
  },
  {
    "id,": 1361,
    "region,": "德清",
    "parentId": 212
  },
  {
    "id,": 1362,
    "region,": "长兴",
    "parentId": 212
  },
  {
    "id,": 1363,
    "region,": "安吉",
    "parentId": 212
  },
  {
    "id,": 1364,
    "region,": "越城",
    "parentId": 213
  },
  {
    "id,": 1365,
    "region,": "柯桥",
    "parentId": 213
  },
  {
    "id,": 1366,
    "region,": "新昌",
    "parentId": 213
  },
  {
    "id,": 1367,
    "region,": "诸暨",
    "parentId": 213
  },
  {
    "id,": 1368,
    "region,": "上虞",
    "parentId": 213
  },
  {
    "id,": 1369,
    "region,": "嵊州",
    "parentId": 213
  },
  {
    "id,": 1370,
    "region,": "婺城",
    "parentId": 214
  },
  {
    "id,": 1371,
    "region,": "金东",
    "parentId": 214
  },
  {
    "id,": 1372,
    "region,": "武义",
    "parentId": 214
  },
  {
    "id,": 1373,
    "region,": "浦江",
    "parentId": 214
  },
  {
    "id,": 1374,
    "region,": "磐安",
    "parentId": 214
  },
  {
    "id,": 1375,
    "region,": "兰溪",
    "parentId": 214
  },
  {
    "id,": 1376,
    "region,": "义乌",
    "parentId": 214
  },
  {
    "id,": 1377,
    "region,": "东阳",
    "parentId": 214
  },
  {
    "id,": 1378,
    "region,": "永康",
    "parentId": 214
  },
  {
    "id,": 1379,
    "region,": "柯城",
    "parentId": 215
  },
  {
    "id,": 1380,
    "region,": "衢江",
    "parentId": 215
  },
  {
    "id,": 1381,
    "region,": "常山",
    "parentId": 215
  },
  {
    "id,": 1382,
    "region,": "开化",
    "parentId": 215
  },
  {
    "id,": 1383,
    "region,": "龙游",
    "parentId": 215
  },
  {
    "id,": 1384,
    "region,": "江山",
    "parentId": 215
  },
  {
    "id,": 1385,
    "region,": "定海",
    "parentId": 216
  },
  {
    "id,": 1386,
    "region,": "普陀",
    "parentId": 216
  },
  {
    "id,": 1387,
    "region,": "岱山",
    "parentId": 216
  },
  {
    "id,": 1388,
    "region,": "嵊泗",
    "parentId": 216
  },
  {
    "id,": 1389,
    "region,": "椒江",
    "parentId": 217
  },
  {
    "id,": 1390,
    "region,": "黄岩",
    "parentId": 217
  },
  {
    "id,": 1391,
    "region,": "路桥",
    "parentId": 217
  },
  {
    "id,": 1392,
    "region,": "玉环",
    "parentId": 217
  },
  {
    "id,": 1393,
    "region,": "三门",
    "parentId": 217
  },
  {
    "id,": 1394,
    "region,": "天台",
    "parentId": 217
  },
  {
    "id,": 1395,
    "region,": "仙居",
    "parentId": 217
  },
  {
    "id,": 1396,
    "region,": "温岭",
    "parentId": 217
  },
  {
    "id,": 1397,
    "region,": "临海",
    "parentId": 217
  },
  {
    "id,": 1398,
    "region,": "莲都",
    "parentId": 218
  },
  {
    "id,": 1399,
    "region,": "青田",
    "parentId": 218
  },
  {
    "id,": 1400,
    "region,": "缙云",
    "parentId": 218
  },
  {
    "id,": 1401,
    "region,": "遂昌",
    "parentId": 218
  },
  {
    "id,": 1402,
    "region,": "松阳",
    "parentId": 218
  },
  {
    "id,": 1403,
    "region,": "云和",
    "parentId": 218
  },
  {
    "id,": 1404,
    "region,": "庆元",
    "parentId": 218
  },
  {
    "id,": 1405,
    "region,": "景宁",
    "parentId": 218
  },
  {
    "id,": 1406,
    "region,": "龙泉",
    "parentId": 218
  },
  {
    "id,": 1407,
    "region,": "瑶海",
    "parentId": 219
  },
  {
    "id,": 1408,
    "region,": "庐阳",
    "parentId": 219
  },
  {
    "id,": 1409,
    "region,": "蜀山",
    "parentId": 219
  },
  {
    "id,": 1410,
    "region,": "包河",
    "parentId": 219
  },
  {
    "id,": 1411,
    "region,": "长丰",
    "parentId": 219
  },
  {
    "id,": 1412,
    "region,": "肥东",
    "parentId": 219
  },
  {
    "id,": 1413,
    "region,": "肥西",
    "parentId": 219
  },
  {
    "id,": 1414,
    "region,": "庐江",
    "parentId": 219
  },
  {
    "id,": 1415,
    "region,": "巢湖",
    "parentId": 219
  },
  {
    "id,": 1416,
    "region,": "镜湖",
    "parentId": 220
  },
  {
    "id,": 1417,
    "region,": "弋江",
    "parentId": 220
  },
  {
    "id,": 1418,
    "region,": "鸠江",
    "parentId": 220
  },
  {
    "id,": 1419,
    "region,": "三山",
    "parentId": 220
  },
  {
    "id,": 1420,
    "region,": "芜湖",
    "parentId": 220
  },
  {
    "id,": 1421,
    "region,": "繁昌",
    "parentId": 220
  },
  {
    "id,": 1422,
    "region,": "南陵",
    "parentId": 220
  },
  {
    "id,": 1423,
    "region,": "无为",
    "parentId": 220
  },
  {
    "id,": 1424,
    "region,": "龙子湖",
    "parentId": 221
  },
  {
    "id,": 1425,
    "region,": "蚌山",
    "parentId": 221
  },
  {
    "id,": 1426,
    "region,": "禹会",
    "parentId": 221
  },
  {
    "id,": 1427,
    "region,": "淮上",
    "parentId": 221
  },
  {
    "id,": 1428,
    "region,": "怀远",
    "parentId": 221
  },
  {
    "id,": 1429,
    "region,": "五河",
    "parentId": 221
  },
  {
    "id,": 1430,
    "region,": "固镇",
    "parentId": 221
  },
  {
    "id,": 1431,
    "region,": "大通",
    "parentId": 222
  },
  {
    "id,": 1432,
    "region,": "田家庵",
    "parentId": 222
  },
  {
    "id,": 1433,
    "region,": "谢家集",
    "parentId": 222
  },
  {
    "id,": 1434,
    "region,": "八公山",
    "parentId": 222
  },
  {
    "id,": 1435,
    "region,": "潘集",
    "parentId": 222
  },
  {
    "id,": 1436,
    "region,": "凤台",
    "parentId": 222
  },
  {
    "id,": 1437,
    "region,": "花山",
    "parentId": 223
  },
  {
    "id,": 1438,
    "region,": "雨山",
    "parentId": 223
  },
  {
    "id,": 1439,
    "region,": "博望",
    "parentId": 223
  },
  {
    "id,": 1440,
    "region,": "当涂",
    "parentId": 223
  },
  {
    "id,": 1441,
    "region,": "含山",
    "parentId": 223
  },
  {
    "id,": 1442,
    "region,": "和县",
    "parentId": 223
  },
  {
    "id,": 1443,
    "region,": "杜集",
    "parentId": 224
  },
  {
    "id,": 1444,
    "region,": "相山",
    "parentId": 224
  },
  {
    "id,": 1445,
    "region,": "烈山",
    "parentId": 224
  },
  {
    "id,": 1446,
    "region,": "濉溪",
    "parentId": 224
  },
  {
    "id,": 1447,
    "region,": "铜官山",
    "parentId": 225
  },
  {
    "id,": 1449,
    "region,": "郊区",
    "parentId": 225
  },
  {
    "id,": 1450,
    "region,": "义安",
    "parentId": 225
  },
  {
    "id,": 1451,
    "region,": "迎江",
    "parentId": 226
  },
  {
    "id,": 1452,
    "region,": "大观",
    "parentId": 226
  },
  {
    "id,": 1453,
    "region,": "宜秀",
    "parentId": 226
  },
  {
    "id,": 1454,
    "region,": "怀宁",
    "parentId": 226
  },
  {
    "id,": 1455,
    "region,": "枞阳",
    "parentId": 225
  },
  {
    "id,": 1456,
    "region,": "潜山",
    "parentId": 226
  },
  {
    "id,": 1457,
    "region,": "太湖",
    "parentId": 226
  },
  {
    "id,": 1458,
    "region,": "宿松",
    "parentId": 226
  },
  {
    "id,": 1459,
    "region,": "望江",
    "parentId": 226
  },
  {
    "id,": 1460,
    "region,": "岳西",
    "parentId": 226
  },
  {
    "id,": 1461,
    "region,": "桐城",
    "parentId": 226
  },
  {
    "id,": 1462,
    "region,": "屯溪",
    "parentId": 227
  },
  {
    "id,": 1463,
    "region,": "黄山",
    "parentId": 227
  },
  {
    "id,": 1464,
    "region,": "徽州",
    "parentId": 227
  },
  {
    "id,": 1465,
    "region,": "歙县",
    "parentId": 227
  },
  {
    "id,": 1466,
    "region,": "休宁",
    "parentId": 227
  },
  {
    "id,": 1467,
    "region,": "黟县",
    "parentId": 227
  },
  {
    "id,": 1468,
    "region,": "祁门",
    "parentId": 227
  },
  {
    "id,": 1469,
    "region,": "琅玡",
    "parentId": 228
  },
  {
    "id,": 1470,
    "region,": "南谯",
    "parentId": 228
  },
  {
    "id,": 1471,
    "region,": "来安",
    "parentId": 228
  },
  {
    "id,": 1472,
    "region,": "全椒",
    "parentId": 228
  },
  {
    "id,": 1473,
    "region,": "定远",
    "parentId": 228
  },
  {
    "id,": 1474,
    "region,": "凤阳",
    "parentId": 228
  },
  {
    "id,": 1475,
    "region,": "天长",
    "parentId": 228
  },
  {
    "id,": 1476,
    "region,": "明光",
    "parentId": 228
  },
  {
    "id,": 1477,
    "region,": "颍州",
    "parentId": 229
  },
  {
    "id,": 1478,
    "region,": "颍东",
    "parentId": 229
  },
  {
    "id,": 1479,
    "region,": "颍泉",
    "parentId": 229
  },
  {
    "id,": 1480,
    "region,": "临泉",
    "parentId": 229
  },
  {
    "id,": 1481,
    "region,": "太和",
    "parentId": 229
  },
  {
    "id,": 1482,
    "region,": "阜南",
    "parentId": 229
  },
  {
    "id,": 1483,
    "region,": "颖上",
    "parentId": 229
  },
  {
    "id,": 1484,
    "region,": "界首",
    "parentId": 229
  },
  {
    "id,": 1485,
    "region,": "埇桥",
    "parentId": 230
  },
  {
    "id,": 1486,
    "region,": "砀山",
    "parentId": 230
  },
  {
    "id,": 1487,
    "region,": "萧县",
    "parentId": 230
  },
  {
    "id,": 1488,
    "region,": "灵璧",
    "parentId": 230
  },
  {
    "id,": 1489,
    "region,": "泗县",
    "parentId": 230
  },
  {
    "id,": 1490,
    "region,": "金安",
    "parentId": 231
  },
  {
    "id,": 1491,
    "region,": "裕安",
    "parentId": 231
  },
  {
    "id,": 1492,
    "region,": "寿县",
    "parentId": 222
  },
  {
    "id,": 1493,
    "region,": "霍邱",
    "parentId": 231
  },
  {
    "id,": 1494,
    "region,": "舒城",
    "parentId": 231
  },
  {
    "id,": 1495,
    "region,": "金寨",
    "parentId": 231
  },
  {
    "id,": 1496,
    "region,": "霍山",
    "parentId": 231
  },
  {
    "id,": 1497,
    "region,": "谯城",
    "parentId": 232
  },
  {
    "id,": 1498,
    "region,": "涡阳",
    "parentId": 232
  },
  {
    "id,": 1499,
    "region,": "蒙城",
    "parentId": 232
  },
  {
    "id,": 1500,
    "region,": "利辛",
    "parentId": 232
  },
  {
    "id,": 1501,
    "region,": "贵池",
    "parentId": 233
  },
  {
    "id,": 1502,
    "region,": "东至",
    "parentId": 233
  },
  {
    "id,": 1503,
    "region,": "石台",
    "parentId": 233
  },
  {
    "id,": 1504,
    "region,": "青阳",
    "parentId": 233
  },
  {
    "id,": 1505,
    "region,": "宣州",
    "parentId": 234
  },
  {
    "id,": 1506,
    "region,": "郎溪",
    "parentId": 234
  },
  {
    "id,": 1507,
    "region,": "广德",
    "parentId": 234
  },
  {
    "id,": 1508,
    "region,": "泾县",
    "parentId": 234
  },
  {
    "id,": 1509,
    "region,": "绩溪",
    "parentId": 234
  },
  {
    "id,": 1510,
    "region,": "旌德",
    "parentId": 234
  },
  {
    "id,": 1511,
    "region,": "宁国",
    "parentId": 234
  },
  {
    "id,": 1512,
    "region,": "鼓楼",
    "parentId": 235
  },
  {
    "id,": 1513,
    "region,": "台江",
    "parentId": 235
  },
  {
    "id,": 1514,
    "region,": "仓山",
    "parentId": 235
  },
  {
    "id,": 1515,
    "region,": "马尾",
    "parentId": 235
  },
  {
    "id,": 1516,
    "region,": "晋安",
    "parentId": 235
  },
  {
    "id,": 1517,
    "region,": "闽侯",
    "parentId": 235
  },
  {
    "id,": 1518,
    "region,": "连江",
    "parentId": 235
  },
  {
    "id,": 1519,
    "region,": "罗源",
    "parentId": 235
  },
  {
    "id,": 1520,
    "region,": "闽清",
    "parentId": 235
  },
  {
    "id,": 1521,
    "region,": "永泰",
    "parentId": 235
  },
  {
    "id,": 1522,
    "region,": "平潭",
    "parentId": 235
  },
  {
    "id,": 1523,
    "region,": "福清",
    "parentId": 235
  },
  {
    "id,": 1524,
    "region,": "长乐",
    "parentId": 235
  },
  {
    "id,": 1525,
    "region,": "思明",
    "parentId": 236
  },
  {
    "id,": 1526,
    "region,": "海沧",
    "parentId": 236
  },
  {
    "id,": 1527,
    "region,": "湖里",
    "parentId": 236
  },
  {
    "id,": 1528,
    "region,": "集美",
    "parentId": 236
  },
  {
    "id,": 1529,
    "region,": "同安",
    "parentId": 236
  },
  {
    "id,": 1530,
    "region,": "翔安",
    "parentId": 236
  },
  {
    "id,": 1531,
    "region,": "城厢",
    "parentId": 237
  },
  {
    "id,": 1532,
    "region,": "涵江",
    "parentId": 237
  },
  {
    "id,": 1533,
    "region,": "荔城",
    "parentId": 237
  },
  {
    "id,": 1534,
    "region,": "秀屿",
    "parentId": 237
  },
  {
    "id,": 1535,
    "region,": "仙游",
    "parentId": 237
  },
  {
    "id,": 1536,
    "region,": "梅列",
    "parentId": 238
  },
  {
    "id,": 1537,
    "region,": "三元",
    "parentId": 238
  },
  {
    "id,": 1538,
    "region,": "明溪",
    "parentId": 238
  },
  {
    "id,": 1539,
    "region,": "清流",
    "parentId": 238
  },
  {
    "id,": 1540,
    "region,": "宁化",
    "parentId": 238
  },
  {
    "id,": 1541,
    "region,": "大田",
    "parentId": 238
  },
  {
    "id,": 1542,
    "region,": "尤溪",
    "parentId": 238
  },
  {
    "id,": 1543,
    "region,": "沙县",
    "parentId": 238
  },
  {
    "id,": 1544,
    "region,": "将乐",
    "parentId": 238
  },
  {
    "id,": 1545,
    "region,": "泰宁",
    "parentId": 238
  },
  {
    "id,": 1546,
    "region,": "建宁",
    "parentId": 238
  },
  {
    "id,": 1547,
    "region,": "永安",
    "parentId": 238
  },
  {
    "id,": 1548,
    "region,": "鲤城",
    "parentId": 239
  },
  {
    "id,": 1549,
    "region,": "丰泽",
    "parentId": 239
  },
  {
    "id,": 1550,
    "region,": "洛江",
    "parentId": 239
  },
  {
    "id,": 1551,
    "region,": "泉港",
    "parentId": 239
  },
  {
    "id,": 1552,
    "region,": "惠安",
    "parentId": 239
  },
  {
    "id,": 1553,
    "region,": "安溪",
    "parentId": 239
  },
  {
    "id,": 1554,
    "region,": "永春",
    "parentId": 239
  },
  {
    "id,": 1555,
    "region,": "德化",
    "parentId": 239
  },
  {
    "id,": 1556,
    "region,": "金门",
    "parentId": 239
  },
  {
    "id,": 1557,
    "region,": "石狮",
    "parentId": 239
  },
  {
    "id,": 1558,
    "region,": "晋江",
    "parentId": 239
  },
  {
    "id,": 1559,
    "region,": "南安",
    "parentId": 239
  },
  {
    "id,": 1560,
    "region,": "芗城",
    "parentId": 240
  },
  {
    "id,": 1561,
    "region,": "龙文",
    "parentId": 240
  },
  {
    "id,": 1562,
    "region,": "云霄",
    "parentId": 240
  },
  {
    "id,": 1563,
    "region,": "漳浦",
    "parentId": 240
  },
  {
    "id,": 1564,
    "region,": "诏安",
    "parentId": 240
  },
  {
    "id,": 1565,
    "region,": "长泰",
    "parentId": 240
  },
  {
    "id,": 1566,
    "region,": "东山",
    "parentId": 240
  },
  {
    "id,": 1567,
    "region,": "南靖",
    "parentId": 240
  },
  {
    "id,": 1568,
    "region,": "平和",
    "parentId": 240
  },
  {
    "id,": 1569,
    "region,": "华安",
    "parentId": 240
  },
  {
    "id,": 1570,
    "region,": "龙海",
    "parentId": 240
  },
  {
    "id,": 1571,
    "region,": "延平",
    "parentId": 241
  },
  {
    "id,": 1572,
    "region,": "顺昌",
    "parentId": 241
  },
  {
    "id,": 1573,
    "region,": "浦城",
    "parentId": 241
  },
  {
    "id,": 1574,
    "region,": "光泽",
    "parentId": 241
  },
  {
    "id,": 1575,
    "region,": "松溪",
    "parentId": 241
  },
  {
    "id,": 1576,
    "region,": "政和",
    "parentId": 241
  },
  {
    "id,": 1577,
    "region,": "邵武",
    "parentId": 241
  },
  {
    "id,": 1578,
    "region,": "武夷山",
    "parentId": 241
  },
  {
    "id,": 1579,
    "region,": "建瓯",
    "parentId": 241
  },
  {
    "id,": 1580,
    "region,": "建阳",
    "parentId": 241
  },
  {
    "id,": 1581,
    "region,": "新罗",
    "parentId": 242
  },
  {
    "id,": 1582,
    "region,": "长汀",
    "parentId": 242
  },
  {
    "id,": 1583,
    "region,": "永定",
    "parentId": 242
  },
  {
    "id,": 1584,
    "region,": "上杭",
    "parentId": 242
  },
  {
    "id,": 1585,
    "region,": "武平",
    "parentId": 242
  },
  {
    "id,": 1586,
    "region,": "连城",
    "parentId": 242
  },
  {
    "id,": 1587,
    "region,": "漳平",
    "parentId": 242
  },
  {
    "id,": 1588,
    "region,": "蕉城",
    "parentId": 243
  },
  {
    "id,": 1589,
    "region,": "霞浦",
    "parentId": 243
  },
  {
    "id,": 1590,
    "region,": "古田",
    "parentId": 243
  },
  {
    "id,": 1591,
    "region,": "屏南",
    "parentId": 243
  },
  {
    "id,": 1592,
    "region,": "寿宁",
    "parentId": 243
  },
  {
    "id,": 1593,
    "region,": "周宁",
    "parentId": 243
  },
  {
    "id,": 1594,
    "region,": "柘荣",
    "parentId": 243
  },
  {
    "id,": 1595,
    "region,": "福安",
    "parentId": 243
  },
  {
    "id,": 1596,
    "region,": "福鼎",
    "parentId": 243
  },
  {
    "id,": 1597,
    "region,": "东湖",
    "parentId": 244
  },
  {
    "id,": 1598,
    "region,": "西湖",
    "parentId": 244
  },
  {
    "id,": 1599,
    "region,": "青云谱",
    "parentId": 244
  },
  {
    "id,": 1600,
    "region,": "湾里",
    "parentId": 244
  },
  {
    "id,": 1601,
    "region,": "青山湖",
    "parentId": 244
  },
  {
    "id,": 1602,
    "region,": "南昌",
    "parentId": 244
  },
  {
    "id,": 1603,
    "region,": "新建",
    "parentId": 244
  },
  {
    "id,": 1604,
    "region,": "安义",
    "parentId": 244
  },
  {
    "id,": 1605,
    "region,": "进贤",
    "parentId": 244
  },
  {
    "id,": 1606,
    "region,": "昌江",
    "parentId": 245
  },
  {
    "id,": 1607,
    "region,": "珠山",
    "parentId": 245
  },
  {
    "id,": 1608,
    "region,": "浮梁",
    "parentId": 245
  },
  {
    "id,": 1609,
    "region,": "乐平",
    "parentId": 245
  },
  {
    "id,": 1610,
    "region,": "安源",
    "parentId": 246
  },
  {
    "id,": 1611,
    "region,": "湘东",
    "parentId": 246
  },
  {
    "id,": 1612,
    "region,": "莲花",
    "parentId": 246
  },
  {
    "id,": 1613,
    "region,": "上栗",
    "parentId": 246
  },
  {
    "id,": 1614,
    "region,": "芦溪",
    "parentId": 246
  },
  {
    "id,": 1615,
    "region,": "濂溪",
    "parentId": 247
  },
  {
    "id,": 1616,
    "region,": "浔阳",
    "parentId": 247
  },
  {
    "id,": 1617,
    "region,": "九江",
    "parentId": 247
  },
  {
    "id,": 1618,
    "region,": "武宁",
    "parentId": 247
  },
  {
    "id,": 1619,
    "region,": "修水",
    "parentId": 247
  },
  {
    "id,": 1620,
    "region,": "永修",
    "parentId": 247
  },
  {
    "id,": 1621,
    "region,": "德安",
    "parentId": 247
  },
  {
    "id,": 1622,
    "region,": "庐山",
    "parentId": 247
  },
  {
    "id,": 1623,
    "region,": "都昌",
    "parentId": 247
  },
  {
    "id,": 1624,
    "region,": "湖口",
    "parentId": 247
  },
  {
    "id,": 1625,
    "region,": "彭泽",
    "parentId": 247
  },
  {
    "id,": 1626,
    "region,": "瑞昌",
    "parentId": 247
  },
  {
    "id,": 1627,
    "region,": "共青城",
    "parentId": 247
  },
  {
    "id,": 1628,
    "region,": "渝水",
    "parentId": 248
  },
  {
    "id,": 1629,
    "region,": "分宜",
    "parentId": 248
  },
  {
    "id,": 1630,
    "region,": "月湖",
    "parentId": 249
  },
  {
    "id,": 1631,
    "region,": "余江",
    "parentId": 249
  },
  {
    "id,": 1632,
    "region,": "贵溪",
    "parentId": 249
  },
  {
    "id,": 1633,
    "region,": "章贡",
    "parentId": 250
  },
  {
    "id,": 1634,
    "region,": "赣县",
    "parentId": 250
  },
  {
    "id,": 1635,
    "region,": "信丰",
    "parentId": 250
  },
  {
    "id,": 1636,
    "region,": "大余",
    "parentId": 250
  },
  {
    "id,": 1637,
    "region,": "上犹",
    "parentId": 250
  },
  {
    "id,": 1638,
    "region,": "崇义",
    "parentId": 250
  },
  {
    "id,": 1639,
    "region,": "安远",
    "parentId": 250
  },
  {
    "id,": 1640,
    "region,": "龙南",
    "parentId": 250
  },
  {
    "id,": 1641,
    "region,": "定南",
    "parentId": 250
  },
  {
    "id,": 1642,
    "region,": "全南",
    "parentId": 250
  },
  {
    "id,": 1643,
    "region,": "宁都",
    "parentId": 250
  },
  {
    "id,": 1644,
    "region,": "于都",
    "parentId": 250
  },
  {
    "id,": 1645,
    "region,": "兴国",
    "parentId": 250
  },
  {
    "id,": 1646,
    "region,": "会昌",
    "parentId": 250
  },
  {
    "id,": 1647,
    "region,": "寻乌",
    "parentId": 250
  },
  {
    "id,": 1648,
    "region,": "石城",
    "parentId": 250
  },
  {
    "id,": 1649,
    "region,": "瑞金",
    "parentId": 250
  },
  {
    "id,": 1650,
    "region,": "南康",
    "parentId": 250
  },
  {
    "id,": 1651,
    "region,": "吉州",
    "parentId": 251
  },
  {
    "id,": 1652,
    "region,": "青原",
    "parentId": 251
  },
  {
    "id,": 1653,
    "region,": "吉安",
    "parentId": 251
  },
  {
    "id,": 1654,
    "region,": "吉水",
    "parentId": 251
  },
  {
    "id,": 1655,
    "region,": "峡江",
    "parentId": 251
  },
  {
    "id,": 1656,
    "region,": "新干",
    "parentId": 251
  },
  {
    "id,": 1657,
    "region,": "永丰",
    "parentId": 251
  },
  {
    "id,": 1658,
    "region,": "泰和",
    "parentId": 251
  },
  {
    "id,": 1659,
    "region,": "遂川",
    "parentId": 251
  },
  {
    "id,": 1660,
    "region,": "万安",
    "parentId": 251
  },
  {
    "id,": 1661,
    "region,": "安福",
    "parentId": 251
  },
  {
    "id,": 1662,
    "region,": "永新",
    "parentId": 251
  },
  {
    "id,": 1663,
    "region,": "井冈山",
    "parentId": 251
  },
  {
    "id,": 1664,
    "region,": "袁州",
    "parentId": 252
  },
  {
    "id,": 1665,
    "region,": "奉新",
    "parentId": 252
  },
  {
    "id,": 1666,
    "region,": "万载",
    "parentId": 252
  },
  {
    "id,": 1667,
    "region,": "上高",
    "parentId": 252
  },
  {
    "id,": 1668,
    "region,": "宜丰",
    "parentId": 252
  },
  {
    "id,": 1669,
    "region,": "靖安",
    "parentId": 252
  },
  {
    "id,": 1670,
    "region,": "铜鼓",
    "parentId": 252
  },
  {
    "id,": 1671,
    "region,": "丰城",
    "parentId": 252
  },
  {
    "id,": 1672,
    "region,": "樟树",
    "parentId": 252
  },
  {
    "id,": 1673,
    "region,": "高安",
    "parentId": 252
  },
  {
    "id,": 1674,
    "region,": "临川",
    "parentId": 253
  },
  {
    "id,": 1675,
    "region,": "南城",
    "parentId": 253
  },
  {
    "id,": 1676,
    "region,": "黎川",
    "parentId": 253
  },
  {
    "id,": 1677,
    "region,": "南丰",
    "parentId": 253
  },
  {
    "id,": 1678,
    "region,": "崇仁",
    "parentId": 253
  },
  {
    "id,": 1679,
    "region,": "乐安",
    "parentId": 253
  },
  {
    "id,": 1680,
    "region,": "宜黄",
    "parentId": 253
  },
  {
    "id,": 1681,
    "region,": "金溪",
    "parentId": 253
  },
  {
    "id,": 1682,
    "region,": "资溪",
    "parentId": 253
  },
  {
    "id,": 1683,
    "region,": "东乡",
    "parentId": 253
  },
  {
    "id,": 1684,
    "region,": "广昌",
    "parentId": 253
  },
  {
    "id,": 1685,
    "region,": "信州",
    "parentId": 254
  },
  {
    "id,": 1686,
    "region,": "上饶",
    "parentId": 254
  },
  {
    "id,": 1687,
    "region,": "广丰",
    "parentId": 254
  },
  {
    "id,": 1688,
    "region,": "玉山",
    "parentId": 254
  },
  {
    "id,": 1689,
    "region,": "铅山",
    "parentId": 254
  },
  {
    "id,": 1690,
    "region,": "横峰",
    "parentId": 254
  },
  {
    "id,": 1691,
    "region,": "弋阳",
    "parentId": 254
  },
  {
    "id,": 1692,
    "region,": "余干",
    "parentId": 254
  },
  {
    "id,": 1693,
    "region,": "鄱阳",
    "parentId": 254
  },
  {
    "id,": 1694,
    "region,": "万年",
    "parentId": 254
  },
  {
    "id,": 1695,
    "region,": "婺源",
    "parentId": 254
  },
  {
    "id,": 1696,
    "region,": "德兴",
    "parentId": 254
  },
  {
    "id,": 1697,
    "region,": "历下",
    "parentId": 255
  },
  {
    "id,": 1698,
    "region,": "市中",
    "parentId": 255
  },
  {
    "id,": 1699,
    "region,": "槐荫",
    "parentId": 255
  },
  {
    "id,": 1700,
    "region,": "天桥",
    "parentId": 255
  },
  {
    "id,": 1701,
    "region,": "历城",
    "parentId": 255
  },
  {
    "id,": 1702,
    "region,": "长清",
    "parentId": 255
  },
  {
    "id,": 1703,
    "region,": "平阴",
    "parentId": 255
  },
  {
    "id,": 1704,
    "region,": "济阳",
    "parentId": 255
  },
  {
    "id,": 1705,
    "region,": "商河",
    "parentId": 255
  },
  {
    "id,": 1706,
    "region,": "章丘",
    "parentId": 255
  },
  {
    "id,": 1707,
    "region,": "市南",
    "parentId": 256
  },
  {
    "id,": 1708,
    "region,": "市北",
    "parentId": 256
  },
  {
    "id,": 1709,
    "region,": "黄岛",
    "parentId": 256
  },
  {
    "id,": 1710,
    "region,": "崂山",
    "parentId": 256
  },
  {
    "id,": 1711,
    "region,": "李沧",
    "parentId": 256
  },
  {
    "id,": 1712,
    "region,": "城阳",
    "parentId": 256
  },
  {
    "id,": 1713,
    "region,": "胶州",
    "parentId": 256
  },
  {
    "id,": 1714,
    "region,": "即墨",
    "parentId": 256
  },
  {
    "id,": 1715,
    "region,": "平度",
    "parentId": 256
  },
  {
    "id,": 1716,
    "region,": "莱西",
    "parentId": 256
  },
  {
    "id,": 1717,
    "region,": "淄川",
    "parentId": 257
  },
  {
    "id,": 1718,
    "region,": "张店",
    "parentId": 257
  },
  {
    "id,": 1719,
    "region,": "博山",
    "parentId": 257
  },
  {
    "id,": 1720,
    "region,": "临淄",
    "parentId": 257
  },
  {
    "id,": 1721,
    "region,": "周村",
    "parentId": 257
  },
  {
    "id,": 1722,
    "region,": "桓台",
    "parentId": 257
  },
  {
    "id,": 1723,
    "region,": "高青",
    "parentId": 257
  },
  {
    "id,": 1724,
    "region,": "沂源",
    "parentId": 257
  },
  {
    "id,": 1725,
    "region,": "市中",
    "parentId": 258
  },
  {
    "id,": 1726,
    "region,": "薛城",
    "parentId": 258
  },
  {
    "id,": 1727,
    "region,": "峄城",
    "parentId": 258
  },
  {
    "id,": 1728,
    "region,": "台儿庄",
    "parentId": 258
  },
  {
    "id,": 1729,
    "region,": "山亭",
    "parentId": 258
  },
  {
    "id,": 1730,
    "region,": "滕州",
    "parentId": 258
  },
  {
    "id,": 1731,
    "region,": "东营",
    "parentId": 259
  },
  {
    "id,": 1732,
    "region,": "河口",
    "parentId": 259
  },
  {
    "id,": 1733,
    "region,": "垦利",
    "parentId": 259
  },
  {
    "id,": 1734,
    "region,": "利津",
    "parentId": 259
  },
  {
    "id,": 1735,
    "region,": "广饶",
    "parentId": 259
  },
  {
    "id,": 1736,
    "region,": "芝罘",
    "parentId": 260
  },
  {
    "id,": 1737,
    "region,": "福山",
    "parentId": 260
  },
  {
    "id,": 1738,
    "region,": "牟平",
    "parentId": 260
  },
  {
    "id,": 1739,
    "region,": "莱山",
    "parentId": 260
  },
  {
    "id,": 1740,
    "region,": "长岛",
    "parentId": 260
  },
  {
    "id,": 1741,
    "region,": "龙口",
    "parentId": 260
  },
  {
    "id,": 1742,
    "region,": "莱阳",
    "parentId": 260
  },
  {
    "id,": 1743,
    "region,": "莱州",
    "parentId": 260
  },
  {
    "id,": 1744,
    "region,": "蓬莱",
    "parentId": 260
  },
  {
    "id,": 1745,
    "region,": "招远",
    "parentId": 260
  },
  {
    "id,": 1746,
    "region,": "栖霞",
    "parentId": 260
  },
  {
    "id,": 1747,
    "region,": "海阳",
    "parentId": 260
  },
  {
    "id,": 1748,
    "region,": "潍城",
    "parentId": 261
  },
  {
    "id,": 1749,
    "region,": "寒亭",
    "parentId": 261
  },
  {
    "id,": 1750,
    "region,": "坊子",
    "parentId": 261
  },
  {
    "id,": 1751,
    "region,": "奎文",
    "parentId": 261
  },
  {
    "id,": 1752,
    "region,": "临朐",
    "parentId": 261
  },
  {
    "id,": 1753,
    "region,": "昌乐",
    "parentId": 261
  },
  {
    "id,": 1754,
    "region,": "青州",
    "parentId": 261
  },
  {
    "id,": 1755,
    "region,": "诸城",
    "parentId": 261
  },
  {
    "id,": 1756,
    "region,": "寿光",
    "parentId": 261
  },
  {
    "id,": 1757,
    "region,": "安丘",
    "parentId": 261
  },
  {
    "id,": 1758,
    "region,": "高密",
    "parentId": 261
  },
  {
    "id,": 1759,
    "region,": "昌邑",
    "parentId": 261
  },
  {
    "id,": 1761,
    "region,": "任城",
    "parentId": 262
  },
  {
    "id,": 1762,
    "region,": "微山",
    "parentId": 262
  },
  {
    "id,": 1763,
    "region,": "鱼台",
    "parentId": 262
  },
  {
    "id,": 1764,
    "region,": "金乡",
    "parentId": 262
  },
  {
    "id,": 1765,
    "region,": "嘉祥",
    "parentId": 262
  },
  {
    "id,": 1766,
    "region,": "汶上",
    "parentId": 262
  },
  {
    "id,": 1767,
    "region,": "泗水",
    "parentId": 262
  },
  {
    "id,": 1768,
    "region,": "梁山",
    "parentId": 262
  },
  {
    "id,": 1769,
    "region,": "曲阜",
    "parentId": 262
  },
  {
    "id,": 1770,
    "region,": "兖州",
    "parentId": 262
  },
  {
    "id,": 1771,
    "region,": "邹城",
    "parentId": 262
  },
  {
    "id,": 1772,
    "region,": "泰山",
    "parentId": 263
  },
  {
    "id,": 1773,
    "region,": "岱岳",
    "parentId": 263
  },
  {
    "id,": 1774,
    "region,": "宁阳",
    "parentId": 263
  },
  {
    "id,": 1775,
    "region,": "东平",
    "parentId": 263
  },
  {
    "id,": 1776,
    "region,": "新泰",
    "parentId": 263
  },
  {
    "id,": 1777,
    "region,": "肥城",
    "parentId": 263
  },
  {
    "id,": 1778,
    "region,": "环翠",
    "parentId": 264
  },
  {
    "id,": 1779,
    "region,": "文登",
    "parentId": 264
  },
  {
    "id,": 1780,
    "region,": "荣成",
    "parentId": 264
  },
  {
    "id,": 1781,
    "region,": "乳山",
    "parentId": 264
  },
  {
    "id,": 1782,
    "region,": "东港",
    "parentId": 265
  },
  {
    "id,": 1783,
    "region,": "岚山",
    "parentId": 265
  },
  {
    "id,": 1784,
    "region,": "五莲",
    "parentId": 265
  },
  {
    "id,": 1785,
    "region,": "莒县",
    "parentId": 265
  },
  {
    "id,": 1786,
    "region,": "莱芜",
    "parentId": 255
  },
  {
    "id,": 1787,
    "region,": "钢城",
    "parentId": 255
  },
  {
    "id,": 1788,
    "region,": "兰山",
    "parentId": 267
  },
  {
    "id,": 1789,
    "region,": "罗庄",
    "parentId": 267
  },
  {
    "id,": 1790,
    "region,": "河东",
    "parentId": 267
  },
  {
    "id,": 1791,
    "region,": "沂南",
    "parentId": 267
  },
  {
    "id,": 1792,
    "region,": "郯城",
    "parentId": 267
  },
  {
    "id,": 1793,
    "region,": "沂水",
    "parentId": 267
  },
  {
    "id,": 1794,
    "region,": "兰陵",
    "parentId": 267
  },
  {
    "id,": 1795,
    "region,": "费县",
    "parentId": 267
  },
  {
    "id,": 1796,
    "region,": "平邑",
    "parentId": 267
  },
  {
    "id,": 1797,
    "region,": "莒南",
    "parentId": 267
  },
  {
    "id,": 1798,
    "region,": "蒙阴",
    "parentId": 267
  },
  {
    "id,": 1799,
    "region,": "临沭",
    "parentId": 267
  },
  {
    "id,": 1800,
    "region,": "德城",
    "parentId": 268
  },
  {
    "id,": 1801,
    "region,": "陵城",
    "parentId": 268
  },
  {
    "id,": 1802,
    "region,": "宁津",
    "parentId": 268
  },
  {
    "id,": 1803,
    "region,": "庆云",
    "parentId": 268
  },
  {
    "id,": 1804,
    "region,": "临邑",
    "parentId": 268
  },
  {
    "id,": 1805,
    "region,": "齐河",
    "parentId": 268
  },
  {
    "id,": 1806,
    "region,": "平原",
    "parentId": 268
  },
  {
    "id,": 1807,
    "region,": "夏津",
    "parentId": 268
  },
  {
    "id,": 1808,
    "region,": "武城",
    "parentId": 268
  },
  {
    "id,": 1809,
    "region,": "乐陵",
    "parentId": 268
  },
  {
    "id,": 1810,
    "region,": "禹城",
    "parentId": 268
  },
  {
    "id,": 1811,
    "region,": "东昌府",
    "parentId": 269
  },
  {
    "id,": 1812,
    "region,": "阳谷",
    "parentId": 269
  },
  {
    "id,": 1813,
    "region,": "莘县",
    "parentId": 269
  },
  {
    "id,": 1814,
    "region,": "茌平",
    "parentId": 269
  },
  {
    "id,": 1815,
    "region,": "东阿",
    "parentId": 269
  },
  {
    "id,": 1816,
    "region,": "冠县",
    "parentId": 269
  },
  {
    "id,": 1817,
    "region,": "高唐",
    "parentId": 269
  },
  {
    "id,": 1818,
    "region,": "临清",
    "parentId": 269
  },
  {
    "id,": 1819,
    "region,": "滨城",
    "parentId": 270
  },
  {
    "id,": 1820,
    "region,": "惠民",
    "parentId": 270
  },
  {
    "id,": 1821,
    "region,": "阳信",
    "parentId": 270
  },
  {
    "id,": 1822,
    "region,": "无棣",
    "parentId": 270
  },
  {
    "id,": 1823,
    "region,": "沾化",
    "parentId": 270
  },
  {
    "id,": 1824,
    "region,": "博兴",
    "parentId": 270
  },
  {
    "id,": 1825,
    "region,": "邹平",
    "parentId": 270
  },
  {
    "id,": 1826,
    "region,": "牡丹",
    "parentId": 271
  },
  {
    "id,": 1827,
    "region,": "曹县",
    "parentId": 271
  },
  {
    "id,": 1828,
    "region,": "单县",
    "parentId": 271
  },
  {
    "id,": 1829,
    "region,": "成武",
    "parentId": 271
  },
  {
    "id,": 1830,
    "region,": "巨野",
    "parentId": 271
  },
  {
    "id,": 1831,
    "region,": "郓城",
    "parentId": 271
  },
  {
    "id,": 1832,
    "region,": "鄄城",
    "parentId": 271
  },
  {
    "id,": 1833,
    "region,": "定陶",
    "parentId": 271
  },
  {
    "id,": 1834,
    "region,": "东明",
    "parentId": 271
  },
  {
    "id,": 1835,
    "region,": "中原",
    "parentId": 272
  },
  {
    "id,": 1836,
    "region,": "二七",
    "parentId": 272
  },
  {
    "id,": 1837,
    "region,": "管城",
    "parentId": 272
  },
  {
    "id,": 1838,
    "region,": "金水",
    "parentId": 272
  },
  {
    "id,": 1839,
    "region,": "上街",
    "parentId": 272
  },
  {
    "id,": 1840,
    "region,": "惠济",
    "parentId": 272
  },
  {
    "id,": 1841,
    "region,": "中牟",
    "parentId": 272
  },
  {
    "id,": 1842,
    "region,": "巩义",
    "parentId": 272
  },
  {
    "id,": 1843,
    "region,": "荥阳",
    "parentId": 272
  },
  {
    "id,": 1844,
    "region,": "新密",
    "parentId": 272
  },
  {
    "id,": 1845,
    "region,": "新郑",
    "parentId": 272
  },
  {
    "id,": 1846,
    "region,": "登封",
    "parentId": 272
  },
  {
    "id,": 1847,
    "region,": "龙亭",
    "parentId": 273
  },
  {
    "id,": 1848,
    "region,": "顺河",
    "parentId": 273
  },
  {
    "id,": 1849,
    "region,": "鼓楼",
    "parentId": 273
  },
  {
    "id,": 1850,
    "region,": "禹王台",
    "parentId": 273
  },
  {
    "id,": 1852,
    "region,": "杞县",
    "parentId": 273
  },
  {
    "id,": 1853,
    "region,": "通许",
    "parentId": 273
  },
  {
    "id,": 1854,
    "region,": "尉氏",
    "parentId": 273
  },
  {
    "id,": 1855,
    "region,": "祥符",
    "parentId": 273
  },
  {
    "id,": 1856,
    "region,": "兰考",
    "parentId": 273
  },
  {
    "id,": 1857,
    "region,": "老城",
    "parentId": 274
  },
  {
    "id,": 1858,
    "region,": "西工",
    "parentId": 274
  },
  {
    "id,": 1859,
    "region,": "瀍河",
    "parentId": 274
  },
  {
    "id,": 1860,
    "region,": "涧西",
    "parentId": 274
  },
  {
    "id,": 1861,
    "region,": "吉利",
    "parentId": 274
  },
  {
    "id,": 1862,
    "region,": "洛龙",
    "parentId": 274
  },
  {
    "id,": 1863,
    "region,": "孟津",
    "parentId": 274
  },
  {
    "id,": 1864,
    "region,": "新安",
    "parentId": 274
  },
  {
    "id,": 1865,
    "region,": "栾川",
    "parentId": 274
  },
  {
    "id,": 1866,
    "region,": "嵩县",
    "parentId": 274
  },
  {
    "id,": 1867,
    "region,": "汝阳",
    "parentId": 274
  },
  {
    "id,": 1868,
    "region,": "宜阳",
    "parentId": 274
  },
  {
    "id,": 1869,
    "region,": "洛宁",
    "parentId": 274
  },
  {
    "id,": 1870,
    "region,": "伊川",
    "parentId": 274
  },
  {
    "id,": 1871,
    "region,": "偃师",
    "parentId": 274
  },
  {
    "id,": 1872,
    "region,": "新华",
    "parentId": 275
  },
  {
    "id,": 1873,
    "region,": "卫东",
    "parentId": 275
  },
  {
    "id,": 1874,
    "region,": "石龙",
    "parentId": 275
  },
  {
    "id,": 1875,
    "region,": "湛河",
    "parentId": 275
  },
  {
    "id,": 1876,
    "region,": "宝丰",
    "parentId": 275
  },
  {
    "id,": 1877,
    "region,": "叶县",
    "parentId": 275
  },
  {
    "id,": 1878,
    "region,": "鲁山",
    "parentId": 275
  },
  {
    "id,": 1879,
    "region,": "郏县",
    "parentId": 275
  },
  {
    "id,": 1880,
    "region,": "舞钢",
    "parentId": 275
  },
  {
    "id,": 1881,
    "region,": "汝州",
    "parentId": 275
  },
  {
    "id,": 1882,
    "region,": "文峰",
    "parentId": 276
  },
  {
    "id,": 1883,
    "region,": "北关",
    "parentId": 276
  },
  {
    "id,": 1884,
    "region,": "殷都",
    "parentId": 276
  },
  {
    "id,": 1885,
    "region,": "龙安",
    "parentId": 276
  },
  {
    "id,": 1886,
    "region,": "安阳",
    "parentId": 276
  },
  {
    "id,": 1887,
    "region,": "汤阴",
    "parentId": 276
  },
  {
    "id,": 1888,
    "region,": "滑县",
    "parentId": 276
  },
  {
    "id,": 1889,
    "region,": "内黄",
    "parentId": 276
  },
  {
    "id,": 1890,
    "region,": "林州",
    "parentId": 276
  },
  {
    "id,": 1891,
    "region,": "鹤山",
    "parentId": 277
  },
  {
    "id,": 1892,
    "region,": "山城",
    "parentId": 277
  },
  {
    "id,": 1893,
    "region,": "淇滨",
    "parentId": 277
  },
  {
    "id,": 1894,
    "region,": "浚县",
    "parentId": 277
  },
  {
    "id,": 1895,
    "region,": "淇县",
    "parentId": 277
  },
  {
    "id,": 1896,
    "region,": "红旗",
    "parentId": 278
  },
  {
    "id,": 1897,
    "region,": "卫滨",
    "parentId": 278
  },
  {
    "id,": 1898,
    "region,": "凤泉",
    "parentId": 278
  },
  {
    "id,": 1899,
    "region,": "牧野",
    "parentId": 278
  },
  {
    "id,": 1900,
    "region,": "新乡",
    "parentId": 278
  },
  {
    "id,": 1901,
    "region,": "获嘉",
    "parentId": 278
  },
  {
    "id,": 1902,
    "region,": "原阳",
    "parentId": 278
  },
  {
    "id,": 1903,
    "region,": "延津",
    "parentId": 278
  },
  {
    "id,": 1904,
    "region,": "封丘",
    "parentId": 278
  },
  {
    "id,": 1905,
    "region,": "长垣",
    "parentId": 278
  },
  {
    "id,": 1906,
    "region,": "卫辉",
    "parentId": 278
  },
  {
    "id,": 1907,
    "region,": "辉县",
    "parentId": 278
  },
  {
    "id,": 1908,
    "region,": "解放",
    "parentId": 279
  },
  {
    "id,": 1909,
    "region,": "中站",
    "parentId": 279
  },
  {
    "id,": 1910,
    "region,": "马村",
    "parentId": 279
  },
  {
    "id,": 1911,
    "region,": "山阳",
    "parentId": 279
  },
  {
    "id,": 1912,
    "region,": "修武",
    "parentId": 279
  },
  {
    "id,": 1913,
    "region,": "博爱",
    "parentId": 279
  },
  {
    "id,": 1914,
    "region,": "武陟",
    "parentId": 279
  },
  {
    "id,": 1915,
    "region,": "温县",
    "parentId": 279
  },
  {
    "id,": 1916,
    "region,": "沁阳",
    "parentId": 279
  },
  {
    "id,": 1917,
    "region,": "孟州",
    "parentId": 279
  },
  {
    "id,": 1918,
    "region,": "华龙",
    "parentId": 280
  },
  {
    "id,": 1919,
    "region,": "清丰",
    "parentId": 280
  },
  {
    "id,": 1920,
    "region,": "南乐",
    "parentId": 280
  },
  {
    "id,": 1921,
    "region,": "范县",
    "parentId": 280
  },
  {
    "id,": 1922,
    "region,": "台前",
    "parentId": 280
  },
  {
    "id,": 1923,
    "region,": "濮阳",
    "parentId": 280
  },
  {
    "id,": 1924,
    "region,": "魏都",
    "parentId": 281
  },
  {
    "id,": 1925,
    "region,": "建安",
    "parentId": 281
  },
  {
    "id,": 1926,
    "region,": "鄢陵",
    "parentId": 281
  },
  {
    "id,": 1927,
    "region,": "襄城",
    "parentId": 281
  },
  {
    "id,": 1928,
    "region,": "禹州",
    "parentId": 281
  },
  {
    "id,": 1929,
    "region,": "长葛",
    "parentId": 281
  },
  {
    "id,": 1930,
    "region,": "源汇",
    "parentId": 282
  },
  {
    "id,": 1931,
    "region,": "郾城",
    "parentId": 282
  },
  {
    "id,": 1932,
    "region,": "召陵",
    "parentId": 282
  },
  {
    "id,": 1933,
    "region,": "舞阳",
    "parentId": 282
  },
  {
    "id,": 1934,
    "region,": "临颍",
    "parentId": 282
  },
  {
    "id,": 1935,
    "region,": "湖滨",
    "parentId": 283
  },
  {
    "id,": 1936,
    "region,": "渑池",
    "parentId": 283
  },
  {
    "id,": 1937,
    "region,": "陕州",
    "parentId": 283
  },
  {
    "id,": 1938,
    "region,": "卢氏",
    "parentId": 283
  },
  {
    "id,": 1939,
    "region,": "义马",
    "parentId": 283
  },
  {
    "id,": 1940,
    "region,": "灵宝",
    "parentId": 283
  },
  {
    "id,": 1941,
    "region,": "宛城",
    "parentId": 284
  },
  {
    "id,": 1942,
    "region,": "卧龙",
    "parentId": 284
  },
  {
    "id,": 1943,
    "region,": "南召",
    "parentId": 284
  },
  {
    "id,": 1944,
    "region,": "方城",
    "parentId": 284
  },
  {
    "id,": 1945,
    "region,": "西峡",
    "parentId": 284
  },
  {
    "id,": 1946,
    "region,": "镇平",
    "parentId": 284
  },
  {
    "id,": 1947,
    "region,": "内乡",
    "parentId": 284
  },
  {
    "id,": 1948,
    "region,": "淅川",
    "parentId": 284
  },
  {
    "id,": 1949,
    "region,": "社旗",
    "parentId": 284
  },
  {
    "id,": 1950,
    "region,": "唐河",
    "parentId": 284
  },
  {
    "id,": 1951,
    "region,": "新野",
    "parentId": 284
  },
  {
    "id,": 1952,
    "region,": "桐柏",
    "parentId": 284
  },
  {
    "id,": 1953,
    "region,": "邓州",
    "parentId": 284
  },
  {
    "id,": 1954,
    "region,": "粱园",
    "parentId": 285
  },
  {
    "id,": 1955,
    "region,": "睢阳",
    "parentId": 285
  },
  {
    "id,": 1956,
    "region,": "民权",
    "parentId": 285
  },
  {
    "id,": 1957,
    "region,": "睢县",
    "parentId": 285
  },
  {
    "id,": 1958,
    "region,": "宁陵",
    "parentId": 285
  },
  {
    "id,": 1959,
    "region,": "柘城",
    "parentId": 285
  },
  {
    "id,": 1960,
    "region,": "虞城",
    "parentId": 285
  },
  {
    "id,": 1961,
    "region,": "夏邑",
    "parentId": 285
  },
  {
    "id,": 1962,
    "region,": "永城",
    "parentId": 285
  },
  {
    "id,": 1963,
    "region,": "浉河",
    "parentId": 286
  },
  {
    "id,": 1964,
    "region,": "平桥",
    "parentId": 286
  },
  {
    "id,": 1965,
    "region,": "罗山",
    "parentId": 286
  },
  {
    "id,": 1966,
    "region,": "光山",
    "parentId": 286
  },
  {
    "id,": 1967,
    "region,": "新县",
    "parentId": 286
  },
  {
    "id,": 1968,
    "region,": "商城",
    "parentId": 286
  },
  {
    "id,": 1969,
    "region,": "固始",
    "parentId": 286
  },
  {
    "id,": 1970,
    "region,": "潢川",
    "parentId": 286
  },
  {
    "id,": 1971,
    "region,": "淮滨",
    "parentId": 286
  },
  {
    "id,": 1972,
    "region,": "息县",
    "parentId": 286
  },
  {
    "id,": 1973,
    "region,": "川汇",
    "parentId": 287
  },
  {
    "id,": 1974,
    "region,": "扶沟",
    "parentId": 287
  },
  {
    "id,": 1975,
    "region,": "西华",
    "parentId": 287
  },
  {
    "id,": 1976,
    "region,": "商水",
    "parentId": 287
  },
  {
    "id,": 1977,
    "region,": "沈丘",
    "parentId": 287
  },
  {
    "id,": 1978,
    "region,": "郸城",
    "parentId": 287
  },
  {
    "id,": 1979,
    "region,": "淮阳",
    "parentId": 287
  },
  {
    "id,": 1980,
    "region,": "太康",
    "parentId": 287
  },
  {
    "id,": 1981,
    "region,": "鹿邑",
    "parentId": 287
  },
  {
    "id,": 1982,
    "region,": "项城",
    "parentId": 287
  },
  {
    "id,": 1983,
    "region,": "驿城",
    "parentId": 288
  },
  {
    "id,": 1984,
    "region,": "西平",
    "parentId": 288
  },
  {
    "id,": 1985,
    "region,": "上蔡",
    "parentId": 288
  },
  {
    "id,": 1986,
    "region,": "平舆",
    "parentId": 288
  },
  {
    "id,": 1987,
    "region,": "正阳",
    "parentId": 288
  },
  {
    "id,": 1988,
    "region,": "确山",
    "parentId": 288
  },
  {
    "id,": 1989,
    "region,": "泌阳",
    "parentId": 288
  },
  {
    "id,": 1990,
    "region,": "汝南",
    "parentId": 288
  },
  {
    "id,": 1991,
    "region,": "遂平",
    "parentId": 288
  },
  {
    "id,": 1992,
    "region,": "新蔡",
    "parentId": 288
  },
  {
    "id,": 1993,
    "region,": "江岸",
    "parentId": 290
  },
  {
    "id,": 1994,
    "region,": "江汉",
    "parentId": 290
  },
  {
    "id,": 1995,
    "region,": "硚口",
    "parentId": 290
  },
  {
    "id,": 1996,
    "region,": "汉阳",
    "parentId": 290
  },
  {
    "id,": 1997,
    "region,": "武昌",
    "parentId": 290
  },
  {
    "id,": 1998,
    "region,": "青山",
    "parentId": 290
  },
  {
    "id,": 1999,
    "region,": "洪山",
    "parentId": 290
  },
  {
    "id,": 2000,
    "region,": "东西湖",
    "parentId": 290
  },
  {
    "id,": 2001,
    "region,": "汉南",
    "parentId": 290
  },
  {
    "id,": 2002,
    "region,": "蔡甸",
    "parentId": 290
  },
  {
    "id,": 2003,
    "region,": "江夏",
    "parentId": 290
  },
  {
    "id,": 2004,
    "region,": "黄陂",
    "parentId": 290
  },
  {
    "id,": 2005,
    "region,": "新洲",
    "parentId": 290
  },
  {
    "id,": 2006,
    "region,": "黄石港",
    "parentId": 291
  },
  {
    "id,": 2007,
    "region,": "西塞山",
    "parentId": 291
  },
  {
    "id,": 2008,
    "region,": "下陆",
    "parentId": 291
  },
  {
    "id,": 2009,
    "region,": "铁山",
    "parentId": 291
  },
  {
    "id,": 2010,
    "region,": "阳新",
    "parentId": 291
  },
  {
    "id,": 2011,
    "region,": "大冶",
    "parentId": 291
  },
  {
    "id,": 2012,
    "region,": "茅箭",
    "parentId": 292
  },
  {
    "id,": 2013,
    "region,": "张湾",
    "parentId": 292
  },
  {
    "id,": 2014,
    "region,": "郧阳",
    "parentId": 292
  },
  {
    "id,": 2015,
    "region,": "郧西",
    "parentId": 292
  },
  {
    "id,": 2016,
    "region,": "竹山",
    "parentId": 292
  },
  {
    "id,": 2017,
    "region,": "竹溪",
    "parentId": 292
  },
  {
    "id,": 2018,
    "region,": "房县",
    "parentId": 292
  },
  {
    "id,": 2019,
    "region,": "丹江口",
    "parentId": 292
  },
  {
    "id,": 2020,
    "region,": "西陵",
    "parentId": 293
  },
  {
    "id,": 2021,
    "region,": "伍家岗",
    "parentId": 293
  },
  {
    "id,": 2022,
    "region,": "点军",
    "parentId": 293
  },
  {
    "id,": 2023,
    "region,": "虢亭",
    "parentId": 293
  },
  {
    "id,": 2024,
    "region,": "夷陵",
    "parentId": 293
  },
  {
    "id,": 2025,
    "region,": "远安",
    "parentId": 293
  },
  {
    "id,": 2026,
    "region,": "兴山",
    "parentId": 293
  },
  {
    "id,": 2027,
    "region,": "秭归",
    "parentId": 293
  },
  {
    "id,": 2028,
    "region,": "长阳",
    "parentId": 293
  },
  {
    "id,": 2029,
    "region,": "五峰",
    "parentId": 293
  },
  {
    "id,": 2030,
    "region,": "宜都",
    "parentId": 293
  },
  {
    "id,": 2031,
    "region,": "当阳",
    "parentId": 293
  },
  {
    "id,": 2032,
    "region,": "枝江",
    "parentId": 293
  },
  {
    "id,": 2033,
    "region,": "襄城",
    "parentId": 294
  },
  {
    "id,": 2034,
    "region,": "樊城",
    "parentId": 294
  },
  {
    "id,": 2035,
    "region,": "襄州",
    "parentId": 294
  },
  {
    "id,": 2036,
    "region,": "南漳",
    "parentId": 294
  },
  {
    "id,": 2037,
    "region,": "谷城",
    "parentId": 294
  },
  {
    "id,": 2038,
    "region,": "保康",
    "parentId": 294
  },
  {
    "id,": 2039,
    "region,": "老河口",
    "parentId": 294
  },
  {
    "id,": 2040,
    "region,": "枣阳",
    "parentId": 294
  },
  {
    "id,": 2041,
    "region,": "宜城",
    "parentId": 294
  },
  {
    "id,": 2042,
    "region,": "粱子湖",
    "parentId": 295
  },
  {
    "id,": 2043,
    "region,": "华容",
    "parentId": 295
  },
  {
    "id,": 2044,
    "region,": "鄂城",
    "parentId": 295
  },
  {
    "id,": 2045,
    "region,": "东宝",
    "parentId": 296
  },
  {
    "id,": 2046,
    "region,": "掇刀",
    "parentId": 296
  },
  {
    "id,": 2047,
    "region,": "京山",
    "parentId": 296
  },
  {
    "id,": 2048,
    "region,": "沙洋",
    "parentId": 296
  },
  {
    "id,": 2049,
    "region,": "钟祥",
    "parentId": 296
  },
  {
    "id,": 2050,
    "region,": "孝南",
    "parentId": 297
  },
  {
    "id,": 2051,
    "region,": "大悟",
    "parentId": 297
  },
  {
    "id,": 2052,
    "region,": "云梦",
    "parentId": 297
  },
  {
    "id,": 2053,
    "region,": "应城",
    "parentId": 297
  },
  {
    "id,": 2054,
    "region,": "安陆",
    "parentId": 297
  },
  {
    "id,": 2055,
    "region,": "汉川",
    "parentId": 297
  },
  {
    "id,": 2056,
    "region,": "沙市",
    "parentId": 298
  },
  {
    "id,": 2057,
    "region,": "荆州",
    "parentId": 298
  },
  {
    "id,": 2058,
    "region,": "公安",
    "parentId": 298
  },
  {
    "id,": 2059,
    "region,": "监利",
    "parentId": 298
  },
  {
    "id,": 2060,
    "region,": "江陵",
    "parentId": 298
  },
  {
    "id,": 2061,
    "region,": "石首",
    "parentId": 298
  },
  {
    "id,": 2062,
    "region,": "洪湖",
    "parentId": 298
  },
  {
    "id,": 2063,
    "region,": "松滋",
    "parentId": 298
  },
  {
    "id,": 2064,
    "region,": "黄州",
    "parentId": 299
  },
  {
    "id,": 2065,
    "region,": "团风",
    "parentId": 299
  },
  {
    "id,": 2066,
    "region,": "红安",
    "parentId": 299
  },
  {
    "id,": 2067,
    "region,": "罗田",
    "parentId": 299
  },
  {
    "id,": 2068,
    "region,": "英山",
    "parentId": 299
  },
  {
    "id,": 2069,
    "region,": "浠水",
    "parentId": 299
  },
  {
    "id,": 2070,
    "region,": "蕲春",
    "parentId": 299
  },
  {
    "id,": 2071,
    "region,": "黄梅",
    "parentId": 299
  },
  {
    "id,": 2072,
    "region,": "麻城",
    "parentId": 299
  },
  {
    "id,": 2073,
    "region,": "武穴",
    "parentId": 299
  },
  {
    "id,": 2074,
    "region,": "咸安",
    "parentId": 300
  },
  {
    "id,": 2075,
    "region,": "嘉鱼",
    "parentId": 300
  },
  {
    "id,": 2076,
    "region,": "通城",
    "parentId": 300
  },
  {
    "id,": 2077,
    "region,": "崇阳",
    "parentId": 300
  },
  {
    "id,": 2078,
    "region,": "通山",
    "parentId": 300
  },
  {
    "id,": 2079,
    "region,": "赤壁",
    "parentId": 300
  },
  {
    "id,": 2080,
    "region,": "曾都",
    "parentId": 301
  },
  {
    "id,": 2081,
    "region,": "随县",
    "parentId": 301
  },
  {
    "id,": 2082,
    "region,": "广水",
    "parentId": 301
  },
  {
    "id,": 2083,
    "region,": "恩施",
    "parentId": 302
  },
  {
    "id,": 2084,
    "region,": "利川",
    "parentId": 302
  },
  {
    "id,": 2085,
    "region,": "建始",
    "parentId": 302
  },
  {
    "id,": 2086,
    "region,": "巴东",
    "parentId": 302
  },
  {
    "id,": 2087,
    "region,": "宣恩",
    "parentId": 302
  },
  {
    "id,": 2088,
    "region,": "咸丰",
    "parentId": 302
  },
  {
    "id,": 2089,
    "region,": "来凤",
    "parentId": 302
  },
  {
    "id,": 2090,
    "region,": "鹤峰",
    "parentId": 302
  },
  {
    "id,": 2091,
    "region,": "芙蓉",
    "parentId": 307
  },
  {
    "id,": 2092,
    "region,": "天心",
    "parentId": 307
  },
  {
    "id,": 2093,
    "region,": "岳麓",
    "parentId": 307
  },
  {
    "id,": 2094,
    "region,": "开福",
    "parentId": 307
  },
  {
    "id,": 2095,
    "region,": "雨花",
    "parentId": 307
  },
  {
    "id,": 2096,
    "region,": "望城",
    "parentId": 307
  },
  {
    "id,": 2097,
    "region,": "长沙",
    "parentId": 307
  },
  {
    "id,": 2098,
    "region,": "宁乡",
    "parentId": 307
  },
  {
    "id,": 2099,
    "region,": "浏阳",
    "parentId": 307
  },
  {
    "id,": 2100,
    "region,": "荷塘",
    "parentId": 308
  },
  {
    "id,": 2101,
    "region,": "芦淞",
    "parentId": 308
  },
  {
    "id,": 2102,
    "region,": "石峰",
    "parentId": 308
  },
  {
    "id,": 2103,
    "region,": "天元",
    "parentId": 308
  },
  {
    "id,": 2104,
    "region,": "株洲",
    "parentId": 308
  },
  {
    "id,": 2105,
    "region,": "攸县",
    "parentId": 308
  },
  {
    "id,": 2106,
    "region,": "茶陵",
    "parentId": 308
  },
  {
    "id,": 2107,
    "region,": "炎陵",
    "parentId": 308
  },
  {
    "id,": 2108,
    "region,": "醴陵",
    "parentId": 308
  },
  {
    "id,": 2109,
    "region,": "雨湖",
    "parentId": 309
  },
  {
    "id,": 2110,
    "region,": "岳塘",
    "parentId": 309
  },
  {
    "id,": 2111,
    "region,": "湘潭",
    "parentId": 309
  },
  {
    "id,": 2112,
    "region,": "湘乡",
    "parentId": 309
  },
  {
    "id,": 2113,
    "region,": "韶山",
    "parentId": 309
  },
  {
    "id,": 2114,
    "region,": "珠晖",
    "parentId": 310
  },
  {
    "id,": 2115,
    "region,": "雁峰",
    "parentId": 310
  },
  {
    "id,": 2116,
    "region,": "石鼓",
    "parentId": 310
  },
  {
    "id,": 2117,
    "region,": "蒸湘",
    "parentId": 310
  },
  {
    "id,": 2118,
    "region,": "南岳",
    "parentId": 310
  },
  {
    "id,": 2119,
    "region,": "衡阳",
    "parentId": 310
  },
  {
    "id,": 2120,
    "region,": "衡南",
    "parentId": 310
  },
  {
    "id,": 2121,
    "region,": "衡山",
    "parentId": 310
  },
  {
    "id,": 2122,
    "region,": "衡东",
    "parentId": 310
  },
  {
    "id,": 2123,
    "region,": "祁东",
    "parentId": 310
  },
  {
    "id,": 2124,
    "region,": "耒阳",
    "parentId": 310
  },
  {
    "id,": 2125,
    "region,": "常宁",
    "parentId": 310
  },
  {
    "id,": 2126,
    "region,": "双清",
    "parentId": 311
  },
  {
    "id,": 2127,
    "region,": "大祥",
    "parentId": 311
  },
  {
    "id,": 2128,
    "region,": "北塔",
    "parentId": 311
  },
  {
    "id,": 2129,
    "region,": "邵东",
    "parentId": 311
  },
  {
    "id,": 2130,
    "region,": "新邵",
    "parentId": 311
  },
  {
    "id,": 2131,
    "region,": "邵阳",
    "parentId": 311
  },
  {
    "id,": 2132,
    "region,": "隆回",
    "parentId": 311
  },
  {
    "id,": 2133,
    "region,": "洞口",
    "parentId": 311
  },
  {
    "id,": 2134,
    "region,": "绥宁",
    "parentId": 311
  },
  {
    "id,": 2135,
    "region,": "新宁",
    "parentId": 311
  },
  {
    "id,": 2136,
    "region,": "城步",
    "parentId": 311
  },
  {
    "id,": 2137,
    "region,": "武冈",
    "parentId": 311
  },
  {
    "id,": 2138,
    "region,": "岳阳楼",
    "parentId": 312
  },
  {
    "id,": 2139,
    "region,": "云溪",
    "parentId": 312
  },
  {
    "id,": 2140,
    "region,": "君山",
    "parentId": 312
  },
  {
    "id,": 2141,
    "region,": "岳阳",
    "parentId": 312
  },
  {
    "id,": 2142,
    "region,": "华容",
    "parentId": 312
  },
  {
    "id,": 2143,
    "region,": "湘阴",
    "parentId": 312
  },
  {
    "id,": 2144,
    "region,": "平江",
    "parentId": 312
  },
  {
    "id,": 2145,
    "region,": "汨罗",
    "parentId": 312
  },
  {
    "id,": 2146,
    "region,": "临湘",
    "parentId": 312
  },
  {
    "id,": 2147,
    "region,": "武陵",
    "parentId": 313
  },
  {
    "id,": 2148,
    "region,": "鼎城",
    "parentId": 313
  },
  {
    "id,": 2149,
    "region,": "安乡",
    "parentId": 313
  },
  {
    "id,": 2150,
    "region,": "汉寿",
    "parentId": 313
  },
  {
    "id,": 2151,
    "region,": "澧县",
    "parentId": 313
  },
  {
    "id,": 2152,
    "region,": "临澧",
    "parentId": 313
  },
  {
    "id,": 2153,
    "region,": "桃源",
    "parentId": 313
  },
  {
    "id,": 2154,
    "region,": "石门",
    "parentId": 313
  },
  {
    "id,": 2155,
    "region,": "津市",
    "parentId": 313
  },
  {
    "id,": 2156,
    "region,": "永定",
    "parentId": 314
  },
  {
    "id,": 2157,
    "region,": "武陵源",
    "parentId": 314
  },
  {
    "id,": 2158,
    "region,": "慈利",
    "parentId": 314
  },
  {
    "id,": 2159,
    "region,": "桑植",
    "parentId": 314
  },
  {
    "id,": 2160,
    "region,": "资阳",
    "parentId": 315
  },
  {
    "id,": 2161,
    "region,": "赫山",
    "parentId": 315
  },
  {
    "id,": 2162,
    "region,": "南县",
    "parentId": 315
  },
  {
    "id,": 2163,
    "region,": "桃江",
    "parentId": 315
  },
  {
    "id,": 2164,
    "region,": "安化",
    "parentId": 315
  },
  {
    "id,": 2165,
    "region,": "沅江",
    "parentId": 315
  },
  {
    "id,": 2166,
    "region,": "北湖",
    "parentId": 316
  },
  {
    "id,": 2167,
    "region,": "苏仙",
    "parentId": 316
  },
  {
    "id,": 2168,
    "region,": "桂阳",
    "parentId": 316
  },
  {
    "id,": 2169,
    "region,": "宜章",
    "parentId": 316
  },
  {
    "id,": 2170,
    "region,": "永兴",
    "parentId": 316
  },
  {
    "id,": 2171,
    "region,": "嘉禾",
    "parentId": 316
  },
  {
    "id,": 2172,
    "region,": "临武",
    "parentId": 316
  },
  {
    "id,": 2173,
    "region,": "汝城",
    "parentId": 316
  },
  {
    "id,": 2174,
    "region,": "桂东",
    "parentId": 316
  },
  {
    "id,": 2175,
    "region,": "安仁",
    "parentId": 316
  },
  {
    "id,": 2176,
    "region,": "资兴",
    "parentId": 316
  },
  {
    "id,": 2177,
    "region,": "零陵",
    "parentId": 317
  },
  {
    "id,": 2178,
    "region,": "冷水滩",
    "parentId": 317
  },
  {
    "id,": 2179,
    "region,": "祁阳",
    "parentId": 317
  },
  {
    "id,": 2180,
    "region,": "东安",
    "parentId": 317
  },
  {
    "id,": 2181,
    "region,": "双牌",
    "parentId": 317
  },
  {
    "id,": 2182,
    "region,": "道县",
    "parentId": 317
  },
  {
    "id,": 2183,
    "region,": "江永",
    "parentId": 317
  },
  {
    "id,": 2184,
    "region,": "宁远",
    "parentId": 317
  },
  {
    "id,": 2185,
    "region,": "蓝山",
    "parentId": 317
  },
  {
    "id,": 2186,
    "region,": "新田",
    "parentId": 317
  },
  {
    "id,": 2187,
    "region,": "江华",
    "parentId": 317
  },
  {
    "id,": 2188,
    "region,": "鹤城",
    "parentId": 318
  },
  {
    "id,": 2189,
    "region,": "中方",
    "parentId": 318
  },
  {
    "id,": 2190,
    "region,": "沅陵",
    "parentId": 318
  },
  {
    "id,": 2191,
    "region,": "辰溪",
    "parentId": 318
  },
  {
    "id,": 2192,
    "region,": "溆浦",
    "parentId": 318
  },
  {
    "id,": 2193,
    "region,": "会同",
    "parentId": 318
  },
  {
    "id,": 2194,
    "region,": "麻阳",
    "parentId": 318
  },
  {
    "id,": 2195,
    "region,": "新晃",
    "parentId": 318
  },
  {
    "id,": 2196,
    "region,": "芷江",
    "parentId": 318
  },
  {
    "id,": 2197,
    "region,": "靖州",
    "parentId": 318
  },
  {
    "id,": 2198,
    "region,": "通道",
    "parentId": 318
  },
  {
    "id,": 2199,
    "region,": "洪江",
    "parentId": 318
  },
  {
    "id,": 2200,
    "region,": "娄星",
    "parentId": 319
  },
  {
    "id,": 2201,
    "region,": "双峰",
    "parentId": 319
  },
  {
    "id,": 2202,
    "region,": "新化",
    "parentId": 319
  },
  {
    "id,": 2203,
    "region,": "冷水江",
    "parentId": 319
  },
  {
    "id,": 2204,
    "region,": "涟源",
    "parentId": 319
  },
  {
    "id,": 2205,
    "region,": "吉首",
    "parentId": 320
  },
  {
    "id,": 2206,
    "region,": "泸溪",
    "parentId": 320
  },
  {
    "id,": 2207,
    "region,": "凤凰",
    "parentId": 320
  },
  {
    "id,": 2208,
    "region,": "花垣",
    "parentId": 320
  },
  {
    "id,": 2209,
    "region,": "保靖",
    "parentId": 320
  },
  {
    "id,": 2210,
    "region,": "古丈",
    "parentId": 320
  },
  {
    "id,": 2211,
    "region,": "永顺",
    "parentId": 320
  },
  {
    "id,": 2212,
    "region,": "龙山",
    "parentId": 320
  },
  {
    "id,": 2213,
    "region,": "荔湾",
    "parentId": 321
  },
  {
    "id,": 2214,
    "region,": "越秀",
    "parentId": 321
  },
  {
    "id,": 2215,
    "region,": "海珠",
    "parentId": 321
  },
  {
    "id,": 2216,
    "region,": "天河",
    "parentId": 321
  },
  {
    "id,": 2217,
    "region,": "白云",
    "parentId": 321
  },
  {
    "id,": 2218,
    "region,": "黄埔",
    "parentId": 321
  },
  {
    "id,": 2219,
    "region,": "番禺",
    "parentId": 321
  },
  {
    "id,": 2220,
    "region,": "花都",
    "parentId": 321
  },
  {
    "id,": 2221,
    "region,": "南沙",
    "parentId": 321
  },
  {
    "id,": 2223,
    "region,": "增城",
    "parentId": 321
  },
  {
    "id,": 2224,
    "region,": "从化",
    "parentId": 321
  },
  {
    "id,": 2225,
    "region,": "武江",
    "parentId": 322
  },
  {
    "id,": 2226,
    "region,": "浈江",
    "parentId": 322
  },
  {
    "id,": 2227,
    "region,": "曲江",
    "parentId": 322
  },
  {
    "id,": 2228,
    "region,": "始兴",
    "parentId": 322
  },
  {
    "id,": 2229,
    "region,": "仁化",
    "parentId": 322
  },
  {
    "id,": 2230,
    "region,": "翁源",
    "parentId": 322
  },
  {
    "id,": 2231,
    "region,": "乳源",
    "parentId": 322
  },
  {
    "id,": 2232,
    "region,": "新丰",
    "parentId": 322
  },
  {
    "id,": 2233,
    "region,": "乐昌",
    "parentId": 322
  },
  {
    "id,": 2234,
    "region,": "南雄",
    "parentId": 322
  },
  {
    "id,": 2235,
    "region,": "罗湖",
    "parentId": 323
  },
  {
    "id,": 2236,
    "region,": "福田",
    "parentId": 323
  },
  {
    "id,": 2237,
    "region,": "南山",
    "parentId": 323
  },
  {
    "id,": 2238,
    "region,": "宝安",
    "parentId": 323
  },
  {
    "id,": 2239,
    "region,": "龙岗",
    "parentId": 323
  },
  {
    "id,": 2240,
    "region,": "盐田",
    "parentId": 323
  },
  {
    "id,": 2241,
    "region,": "香洲",
    "parentId": 324
  },
  {
    "id,": 2242,
    "region,": "斗门",
    "parentId": 324
  },
  {
    "id,": 2243,
    "region,": "金湾",
    "parentId": 324
  },
  {
    "id,": 2244,
    "region,": "龙湖",
    "parentId": 325
  },
  {
    "id,": 2245,
    "region,": "金平",
    "parentId": 325
  },
  {
    "id,": 2246,
    "region,": "濠江",
    "parentId": 325
  },
  {
    "id,": 2247,
    "region,": "潮阳",
    "parentId": 325
  },
  {
    "id,": 2248,
    "region,": "潮南",
    "parentId": 325
  },
  {
    "id,": 2249,
    "region,": "澄海",
    "parentId": 325
  },
  {
    "id,": 2250,
    "region,": "南澳",
    "parentId": 325
  },
  {
    "id,": 2251,
    "region,": "禅城",
    "parentId": 326
  },
  {
    "id,": 2252,
    "region,": "南海",
    "parentId": 326
  },
  {
    "id,": 2253,
    "region,": "顺德",
    "parentId": 326
  },
  {
    "id,": 2254,
    "region,": "三水",
    "parentId": 326
  },
  {
    "id,": 2255,
    "region,": "高明",
    "parentId": 326
  },
  {
    "id,": 2256,
    "region,": "蓬江",
    "parentId": 327
  },
  {
    "id,": 2257,
    "region,": "江海",
    "parentId": 327
  },
  {
    "id,": 2258,
    "region,": "新会",
    "parentId": 327
  },
  {
    "id,": 2259,
    "region,": "台山",
    "parentId": 327
  },
  {
    "id,": 2260,
    "region,": "开平",
    "parentId": 327
  },
  {
    "id,": 2261,
    "region,": "鹤山",
    "parentId": 327
  },
  {
    "id,": 2262,
    "region,": "恩平",
    "parentId": 327
  },
  {
    "id,": 2263,
    "region,": "赤坎",
    "parentId": 328
  },
  {
    "id,": 2264,
    "region,": "霞山",
    "parentId": 328
  },
  {
    "id,": 2265,
    "region,": "坡头",
    "parentId": 328
  },
  {
    "id,": 2266,
    "region,": "麻章",
    "parentId": 328
  },
  {
    "id,": 2267,
    "region,": "遂溪",
    "parentId": 328
  },
  {
    "id,": 2268,
    "region,": "徐闻",
    "parentId": 328
  },
  {
    "id,": 2269,
    "region,": "廉江",
    "parentId": 328
  },
  {
    "id,": 2270,
    "region,": "雷州",
    "parentId": 328
  },
  {
    "id,": 2271,
    "region,": "吴川",
    "parentId": 328
  },
  {
    "id,": 2272,
    "region,": "茂南",
    "parentId": 329
  },
  {
    "id,": 2274,
    "region,": "电白",
    "parentId": 329
  },
  {
    "id,": 2275,
    "region,": "高州",
    "parentId": 329
  },
  {
    "id,": 2276,
    "region,": "化州",
    "parentId": 329
  },
  {
    "id,": 2277,
    "region,": "信宜",
    "parentId": 329
  },
  {
    "id,": 2278,
    "region,": "端州",
    "parentId": 330
  },
  {
    "id,": 2279,
    "region,": "鼎湖",
    "parentId": 330
  },
  {
    "id,": 2280,
    "region,": "广宁",
    "parentId": 330
  },
  {
    "id,": 2281,
    "region,": "怀集",
    "parentId": 330
  },
  {
    "id,": 2282,
    "region,": "封开",
    "parentId": 330
  },
  {
    "id,": 2283,
    "region,": "德庆",
    "parentId": 330
  },
  {
    "id,": 2284,
    "region,": "高要",
    "parentId": 330
  },
  {
    "id,": 2285,
    "region,": "四会",
    "parentId": 330
  },
  {
    "id,": 2286,
    "region,": "惠城",
    "parentId": 331
  },
  {
    "id,": 2287,
    "region,": "惠阳",
    "parentId": 331
  },
  {
    "id,": 2288,
    "region,": "博罗",
    "parentId": 331
  },
  {
    "id,": 2289,
    "region,": "惠东",
    "parentId": 331
  },
  {
    "id,": 2290,
    "region,": "龙门",
    "parentId": 331
  },
  {
    "id,": 2291,
    "region,": "梅江",
    "parentId": 332
  },
  {
    "id,": 2292,
    "region,": "梅县",
    "parentId": 332
  },
  {
    "id,": 2293,
    "region,": "大埔",
    "parentId": 332
  },
  {
    "id,": 2294,
    "region,": "丰顺",
    "parentId": 332
  },
  {
    "id,": 2295,
    "region,": "五华",
    "parentId": 332
  },
  {
    "id,": 2296,
    "region,": "平远",
    "parentId": 332
  },
  {
    "id,": 2297,
    "region,": "蕉岭",
    "parentId": 332
  },
  {
    "id,": 2298,
    "region,": "兴宁",
    "parentId": 332
  },
  {
    "id,": 2299,
    "region,": "城区",
    "parentId": 333
  },
  {
    "id,": 2300,
    "region,": "海丰",
    "parentId": 333
  },
  {
    "id,": 2301,
    "region,": "陆河",
    "parentId": 333
  },
  {
    "id,": 2302,
    "region,": "陆丰",
    "parentId": 333
  },
  {
    "id,": 2303,
    "region,": "源城",
    "parentId": 334
  },
  {
    "id,": 2304,
    "region,": "紫金",
    "parentId": 334
  },
  {
    "id,": 2305,
    "region,": "龙川",
    "parentId": 334
  },
  {
    "id,": 2306,
    "region,": "连平",
    "parentId": 334
  },
  {
    "id,": 2307,
    "region,": "和平",
    "parentId": 334
  },
  {
    "id,": 2308,
    "region,": "东源",
    "parentId": 334
  },
  {
    "id,": 2309,
    "region,": "江城",
    "parentId": 335
  },
  {
    "id,": 2310,
    "region,": "阳西",
    "parentId": 335
  },
  {
    "id,": 2311,
    "region,": "阳东",
    "parentId": 335
  },
  {
    "id,": 2312,
    "region,": "阳春",
    "parentId": 335
  },
  {
    "id,": 2313,
    "region,": "清城",
    "parentId": 336
  },
  {
    "id,": 2314,
    "region,": "佛冈",
    "parentId": 336
  },
  {
    "id,": 2315,
    "region,": "阳山",
    "parentId": 336
  },
  {
    "id,": 2316,
    "region,": "连山",
    "parentId": 336
  },
  {
    "id,": 2317,
    "region,": "连南",
    "parentId": 336
  },
  {
    "id,": 2318,
    "region,": "清新",
    "parentId": 336
  },
  {
    "id,": 2319,
    "region,": "英德",
    "parentId": 336
  },
  {
    "id,": 2320,
    "region,": "连州",
    "parentId": 336
  },
  {
    "id,": 2321,
    "region,": "湘桥",
    "parentId": 339
  },
  {
    "id,": 2322,
    "region,": "潮安",
    "parentId": 339
  },
  {
    "id,": 2323,
    "region,": "饶平",
    "parentId": 339
  },
  {
    "id,": 2324,
    "region,": "榕城",
    "parentId": 340
  },
  {
    "id,": 2325,
    "region,": "揭东",
    "parentId": 340
  },
  {
    "id,": 2326,
    "region,": "揭西",
    "parentId": 340
  },
  {
    "id,": 2327,
    "region,": "惠来",
    "parentId": 340
  },
  {
    "id,": 2328,
    "region,": "普宁",
    "parentId": 340
  },
  {
    "id,": 2329,
    "region,": "云城",
    "parentId": 341
  },
  {
    "id,": 2330,
    "region,": "新兴",
    "parentId": 341
  },
  {
    "id,": 2331,
    "region,": "郁南",
    "parentId": 341
  },
  {
    "id,": 2332,
    "region,": "云安",
    "parentId": 341
  },
  {
    "id,": 2333,
    "region,": "罗定",
    "parentId": 341
  },
  {
    "id,": 2334,
    "region,": "兴宁",
    "parentId": 342
  },
  {
    "id,": 2335,
    "region,": "青秀",
    "parentId": 342
  },
  {
    "id,": 2336,
    "region,": "江南",
    "parentId": 342
  },
  {
    "id,": 2337,
    "region,": "西乡塘",
    "parentId": 342
  },
  {
    "id,": 2338,
    "region,": "良庆",
    "parentId": 342
  },
  {
    "id,": 2339,
    "region,": "邕宁",
    "parentId": 342
  },
  {
    "id,": 2340,
    "region,": "武鸣",
    "parentId": 342
  },
  {
    "id,": 2341,
    "region,": "隆安",
    "parentId": 342
  },
  {
    "id,": 2342,
    "region,": "马山",
    "parentId": 342
  },
  {
    "id,": 2343,
    "region,": "上林",
    "parentId": 342
  },
  {
    "id,": 2344,
    "region,": "宾阳",
    "parentId": 342
  },
  {
    "id,": 2345,
    "region,": "横县",
    "parentId": 342
  },
  {
    "id,": 2346,
    "region,": "城中",
    "parentId": 343
  },
  {
    "id,": 2347,
    "region,": "鱼峰",
    "parentId": 343
  },
  {
    "id,": 2348,
    "region,": "柳南",
    "parentId": 343
  },
  {
    "id,": 2349,
    "region,": "柳北",
    "parentId": 343
  },
  {
    "id,": 2350,
    "region,": "柳江",
    "parentId": 343
  },
  {
    "id,": 2351,
    "region,": "柳城",
    "parentId": 343
  },
  {
    "id,": 2352,
    "region,": "鹿寨",
    "parentId": 343
  },
  {
    "id,": 2353,
    "region,": "融安",
    "parentId": 343
  },
  {
    "id,": 2354,
    "region,": "融水",
    "parentId": 343
  },
  {
    "id,": 2355,
    "region,": "三江",
    "parentId": 343
  },
  {
    "id,": 2356,
    "region,": "秀峰",
    "parentId": 344
  },
  {
    "id,": 2357,
    "region,": "叠彩",
    "parentId": 344
  },
  {
    "id,": 2358,
    "region,": "象山",
    "parentId": 344
  },
  {
    "id,": 2359,
    "region,": "七星",
    "parentId": 344
  },
  {
    "id,": 2360,
    "region,": "雁山",
    "parentId": 344
  },
  {
    "id,": 2361,
    "region,": "阳朔",
    "parentId": 344
  },
  {
    "id,": 2362,
    "region,": "临桂",
    "parentId": 344
  },
  {
    "id,": 2363,
    "region,": "灵川",
    "parentId": 344
  },
  {
    "id,": 2364,
    "region,": "全州",
    "parentId": 344
  },
  {
    "id,": 2365,
    "region,": "兴安",
    "parentId": 344
  },
  {
    "id,": 2366,
    "region,": "永福",
    "parentId": 344
  },
  {
    "id,": 2367,
    "region,": "灌阳",
    "parentId": 344
  },
  {
    "id,": 2368,
    "region,": "龙胜",
    "parentId": 344
  },
  {
    "id,": 2369,
    "region,": "资源",
    "parentId": 344
  },
  {
    "id,": 2370,
    "region,": "平乐",
    "parentId": 344
  },
  {
    "id,": 2371,
    "region,": "荔浦",
    "parentId": 344
  },
  {
    "id,": 2372,
    "region,": "恭城",
    "parentId": 344
  },
  {
    "id,": 2373,
    "region,": "龙圩",
    "parentId": 345
  },
  {
    "id,": 2374,
    "region,": "万秀",
    "parentId": 345
  },
  {
    "id,": 2375,
    "region,": "长洲",
    "parentId": 345
  },
  {
    "id,": 2376,
    "region,": "苍梧",
    "parentId": 345
  },
  {
    "id,": 2377,
    "region,": "藤县",
    "parentId": 345
  },
  {
    "id,": 2378,
    "region,": "蒙山",
    "parentId": 345
  },
  {
    "id,": 2379,
    "region,": "岑溪",
    "parentId": 345
  },
  {
    "id,": 2380,
    "region,": "海城",
    "parentId": 346
  },
  {
    "id,": 2381,
    "region,": "银海",
    "parentId": 346
  },
  {
    "id,": 2382,
    "region,": "铁山港",
    "parentId": 346
  },
  {
    "id,": 2383,
    "region,": "合浦",
    "parentId": 346
  },
  {
    "id,": 2384,
    "region,": "港口",
    "parentId": 347
  },
  {
    "id,": 2385,
    "region,": "防城",
    "parentId": 347
  },
  {
    "id,": 2386,
    "region,": "上思",
    "parentId": 347
  },
  {
    "id,": 2387,
    "region,": "东兴",
    "parentId": 347
  },
  {
    "id,": 2388,
    "region,": "钦南",
    "parentId": 348
  },
  {
    "id,": 2389,
    "region,": "钦北",
    "parentId": 348
  },
  {
    "id,": 2390,
    "region,": "灵山",
    "parentId": 348
  },
  {
    "id,": 2391,
    "region,": "浦北",
    "parentId": 348
  },
  {
    "id,": 2392,
    "region,": "港北",
    "parentId": 349
  },
  {
    "id,": 2393,
    "region,": "港南",
    "parentId": 349
  },
  {
    "id,": 2394,
    "region,": "覃塘",
    "parentId": 349
  },
  {
    "id,": 2395,
    "region,": "桂平",
    "parentId": 349
  },
  {
    "id,": 2396,
    "region,": "平南",
    "parentId": 349
  },
  {
    "id,": 2397,
    "region,": "玉州",
    "parentId": 350
  },
  {
    "id,": 2398,
    "region,": "容县",
    "parentId": 350
  },
  {
    "id,": 2399,
    "region,": "陆川",
    "parentId": 350
  },
  {
    "id,": 2400,
    "region,": "博白",
    "parentId": 350
  },
  {
    "id,": 2401,
    "region,": "兴业",
    "parentId": 350
  },
  {
    "id,": 2402,
    "region,": "北流",
    "parentId": 350
  },
  {
    "id,": 2403,
    "region,": "右江",
    "parentId": 351
  },
  {
    "id,": 2404,
    "region,": "田阳",
    "parentId": 351
  },
  {
    "id,": 2405,
    "region,": "田东",
    "parentId": 351
  },
  {
    "id,": 2406,
    "region,": "平果",
    "parentId": 351
  },
  {
    "id,": 2407,
    "region,": "德保",
    "parentId": 351
  },
  {
    "id,": 2408,
    "region,": "靖西",
    "parentId": 351
  },
  {
    "id,": 2409,
    "region,": "那坡",
    "parentId": 351
  },
  {
    "id,": 2410,
    "region,": "凌云",
    "parentId": 351
  },
  {
    "id,": 2411,
    "region,": "乐业",
    "parentId": 351
  },
  {
    "id,": 2412,
    "region,": "田林",
    "parentId": 351
  },
  {
    "id,": 2413,
    "region,": "西林",
    "parentId": 351
  },
  {
    "id,": 2414,
    "region,": "隆林",
    "parentId": 351
  },
  {
    "id,": 2415,
    "region,": "八步",
    "parentId": 352
  },
  {
    "id,": 2416,
    "region,": "昭平",
    "parentId": 352
  },
  {
    "id,": 2417,
    "region,": "钟山",
    "parentId": 352
  },
  {
    "id,": 2418,
    "region,": "富川",
    "parentId": 352
  },
  {
    "id,": 2419,
    "region,": "金城江",
    "parentId": 353
  },
  {
    "id,": 2420,
    "region,": "南丹",
    "parentId": 353
  },
  {
    "id,": 2421,
    "region,": "天峨",
    "parentId": 353
  },
  {
    "id,": 2422,
    "region,": "凤山",
    "parentId": 353
  },
  {
    "id,": 2423,
    "region,": "东兰",
    "parentId": 353
  },
  {
    "id,": 2424,
    "region,": "罗城",
    "parentId": 353
  },
  {
    "id,": 2425,
    "region,": "环江",
    "parentId": 353
  },
  {
    "id,": 2426,
    "region,": "巴马",
    "parentId": 353
  },
  {
    "id,": 2427,
    "region,": "都安",
    "parentId": 353
  },
  {
    "id,": 2428,
    "region,": "大化",
    "parentId": 353
  },
  {
    "id,": 2429,
    "region,": "宜州",
    "parentId": 353
  },
  {
    "id,": 2430,
    "region,": "兴宾",
    "parentId": 354
  },
  {
    "id,": 2431,
    "region,": "忻城",
    "parentId": 354
  },
  {
    "id,": 2432,
    "region,": "象州",
    "parentId": 354
  },
  {
    "id,": 2433,
    "region,": "武宣",
    "parentId": 354
  },
  {
    "id,": 2434,
    "region,": "金秀",
    "parentId": 354
  },
  {
    "id,": 2435,
    "region,": "合山",
    "parentId": 354
  },
  {
    "id,": 2436,
    "region,": "江州",
    "parentId": 355
  },
  {
    "id,": 2437,
    "region,": "扶绥",
    "parentId": 355
  },
  {
    "id,": 2438,
    "region,": "宁明",
    "parentId": 355
  },
  {
    "id,": 2439,
    "region,": "龙州",
    "parentId": 355
  },
  {
    "id,": 2440,
    "region,": "大新",
    "parentId": 355
  },
  {
    "id,": 2441,
    "region,": "天等",
    "parentId": 355
  },
  {
    "id,": 2442,
    "region,": "凭祥",
    "parentId": 355
  },
  {
    "id,": 2443,
    "region,": "秀英",
    "parentId": 356
  },
  {
    "id,": 2444,
    "region,": "龙华",
    "parentId": 356
  },
  {
    "id,": 2445,
    "region,": "琼山",
    "parentId": 356
  },
  {
    "id,": 2446,
    "region,": "美兰",
    "parentId": 356
  },
  {
    "id,": 2447,
    "region,": "锦江",
    "parentId": 375
  },
  {
    "id,": 2448,
    "region,": "青羊",
    "parentId": 375
  },
  {
    "id,": 2449,
    "region,": "金牛",
    "parentId": 375
  },
  {
    "id,": 2450,
    "region,": "武侯",
    "parentId": 375
  },
  {
    "id,": 2451,
    "region,": "成华",
    "parentId": 375
  },
  {
    "id,": 2452,
    "region,": "龙泉驿",
    "parentId": 375
  },
  {
    "id,": 2453,
    "region,": "青白江",
    "parentId": 375
  },
  {
    "id,": 2454,
    "region,": "新都",
    "parentId": 375
  },
  {
    "id,": 2455,
    "region,": "温江",
    "parentId": 375
  },
  {
    "id,": 2456,
    "region,": "金堂",
    "parentId": 375
  },
  {
    "id,": 2457,
    "region,": "双流",
    "parentId": 375
  },
  {
    "id,": 2458,
    "region,": "郫都",
    "parentId": 375
  },
  {
    "id,": 2459,
    "region,": "大邑",
    "parentId": 375
  },
  {
    "id,": 2460,
    "region,": "蒲江",
    "parentId": 375
  },
  {
    "id,": 2461,
    "region,": "新津",
    "parentId": 375
  },
  {
    "id,": 2462,
    "region,": "都江堰",
    "parentId": 375
  },
  {
    "id,": 2463,
    "region,": "彭州",
    "parentId": 375
  },
  {
    "id,": 2464,
    "region,": "邛崃",
    "parentId": 375
  },
  {
    "id,": 2465,
    "region,": "崇州",
    "parentId": 375
  },
  {
    "id,": 2466,
    "region,": "自流井",
    "parentId": 376
  },
  {
    "id,": 2467,
    "region,": "贡井",
    "parentId": 376
  },
  {
    "id,": 2468,
    "region,": "大安",
    "parentId": 376
  },
  {
    "id,": 2469,
    "region,": "沿滩",
    "parentId": 376
  },
  {
    "id,": 2470,
    "region,": "荣县",
    "parentId": 376
  },
  {
    "id,": 2471,
    "region,": "富顺",
    "parentId": 376
  },
  {
    "id,": 2472,
    "region,": "东区",
    "parentId": 377
  },
  {
    "id,": 2473,
    "region,": "西区",
    "parentId": 377
  },
  {
    "id,": 2474,
    "region,": "仁和",
    "parentId": 377
  },
  {
    "id,": 2475,
    "region,": "米易",
    "parentId": 377
  },
  {
    "id,": 2476,
    "region,": "盐边",
    "parentId": 377
  },
  {
    "id,": 2477,
    "region,": "江阳",
    "parentId": 378
  },
  {
    "id,": 2478,
    "region,": "纳溪",
    "parentId": 378
  },
  {
    "id,": 2479,
    "region,": "龙马潭",
    "parentId": 378
  },
  {
    "id,": 2480,
    "region,": "泸县",
    "parentId": 378
  },
  {
    "id,": 2481,
    "region,": "合江",
    "parentId": 378
  },
  {
    "id,": 2482,
    "region,": "叙永",
    "parentId": 378
  },
  {
    "id,": 2483,
    "region,": "古蔺",
    "parentId": 378
  },
  {
    "id,": 2484,
    "region,": "旌阳",
    "parentId": 379
  },
  {
    "id,": 2485,
    "region,": "中江",
    "parentId": 379
  },
  {
    "id,": 2486,
    "region,": "罗江",
    "parentId": 379
  },
  {
    "id,": 2487,
    "region,": "广汉",
    "parentId": 379
  },
  {
    "id,": 2488,
    "region,": "什邡",
    "parentId": 379
  },
  {
    "id,": 2489,
    "region,": "绵竹",
    "parentId": 379
  },
  {
    "id,": 2490,
    "region,": "涪城",
    "parentId": 380
  },
  {
    "id,": 2491,
    "region,": "游仙",
    "parentId": 380
  },
  {
    "id,": 2492,
    "region,": "三台",
    "parentId": 380
  },
  {
    "id,": 2493,
    "region,": "盐亭",
    "parentId": 380
  },
  {
    "id,": 2494,
    "region,": "安州",
    "parentId": 380
  },
  {
    "id,": 2495,
    "region,": "梓潼",
    "parentId": 380
  },
  {
    "id,": 2496,
    "region,": "北川",
    "parentId": 380
  },
  {
    "id,": 2497,
    "region,": "平武",
    "parentId": 380
  },
  {
    "id,": 2498,
    "region,": "江油",
    "parentId": 380
  },
  {
    "id,": 2499,
    "region,": "利州",
    "parentId": 381
  },
  {
    "id,": 2500,
    "region,": "昭化",
    "parentId": 381
  },
  {
    "id,": 2501,
    "region,": "朝天",
    "parentId": 381
  },
  {
    "id,": 2502,
    "region,": "旺苍",
    "parentId": 381
  },
  {
    "id,": 2503,
    "region,": "青川",
    "parentId": 381
  },
  {
    "id,": 2504,
    "region,": "剑阁",
    "parentId": 381
  },
  {
    "id,": 2505,
    "region,": "苍溪",
    "parentId": 381
  },
  {
    "id,": 2506,
    "region,": "船山",
    "parentId": 382
  },
  {
    "id,": 2507,
    "region,": "安居",
    "parentId": 382
  },
  {
    "id,": 2508,
    "region,": "蓬溪",
    "parentId": 382
  },
  {
    "id,": 2509,
    "region,": "射洪",
    "parentId": 382
  },
  {
    "id,": 2510,
    "region,": "大英",
    "parentId": 382
  },
  {
    "id,": 2511,
    "region,": "市中",
    "parentId": 383
  },
  {
    "id,": 2512,
    "region,": "东兴",
    "parentId": 383
  },
  {
    "id,": 2513,
    "region,": "威远",
    "parentId": 383
  },
  {
    "id,": 2514,
    "region,": "资中",
    "parentId": 383
  },
  {
    "id,": 2515,
    "region,": "隆昌",
    "parentId": 383
  },
  {
    "id,": 2516,
    "region,": "市中",
    "parentId": 384
  },
  {
    "id,": 2517,
    "region,": "沙湾",
    "parentId": 384
  },
  {
    "id,": 2518,
    "region,": "五通桥",
    "parentId": 384
  },
  {
    "id,": 2519,
    "region,": "金口河",
    "parentId": 384
  },
  {
    "id,": 2520,
    "region,": "犍为",
    "parentId": 384
  },
  {
    "id,": 2521,
    "region,": "井研",
    "parentId": 384
  },
  {
    "id,": 2522,
    "region,": "夹江",
    "parentId": 384
  },
  {
    "id,": 2523,
    "region,": "沐川",
    "parentId": 384
  },
  {
    "id,": 2524,
    "region,": "峨边",
    "parentId": 384
  },
  {
    "id,": 2525,
    "region,": "马边",
    "parentId": 384
  },
  {
    "id,": 2526,
    "region,": "峨眉山",
    "parentId": 384
  },
  {
    "id,": 2527,
    "region,": "顺庆",
    "parentId": 385
  },
  {
    "id,": 2528,
    "region,": "高坪",
    "parentId": 385
  },
  {
    "id,": 2529,
    "region,": "嘉陵",
    "parentId": 385
  },
  {
    "id,": 2530,
    "region,": "南部",
    "parentId": 385
  },
  {
    "id,": 2531,
    "region,": "营山",
    "parentId": 385
  },
  {
    "id,": 2532,
    "region,": "蓬安",
    "parentId": 385
  },
  {
    "id,": 2533,
    "region,": "仪陇",
    "parentId": 385
  },
  {
    "id,": 2534,
    "region,": "西充",
    "parentId": 385
  },
  {
    "id,": 2535,
    "region,": "阆中",
    "parentId": 385
  },
  {
    "id,": 2536,
    "region,": "东坡",
    "parentId": 386
  },
  {
    "id,": 2537,
    "region,": "仁寿",
    "parentId": 386
  },
  {
    "id,": 2538,
    "region,": "彭山",
    "parentId": 386
  },
  {
    "id,": 2539,
    "region,": "洪雅",
    "parentId": 386
  },
  {
    "id,": 2540,
    "region,": "丹棱",
    "parentId": 386
  },
  {
    "id,": 2541,
    "region,": "青神",
    "parentId": 386
  },
  {
    "id,": 2542,
    "region,": "翠屏",
    "parentId": 387
  },
  {
    "id,": 2543,
    "region,": "南溪",
    "parentId": 387
  },
  {
    "id,": 2544,
    "region,": "宜宾",
    "parentId": 387
  },
  {
    "id,": 2545,
    "region,": "江安",
    "parentId": 387
  },
  {
    "id,": 2546,
    "region,": "长宁",
    "parentId": 387
  },
  {
    "id,": 2547,
    "region,": "高县",
    "parentId": 387
  },
  {
    "id,": 2548,
    "region,": "珙县",
    "parentId": 387
  },
  {
    "id,": 2549,
    "region,": "筠连",
    "parentId": 387
  },
  {
    "id,": 2550,
    "region,": "兴文",
    "parentId": 387
  },
  {
    "id,": 2551,
    "region,": "屏山",
    "parentId": 387
  },
  {
    "id,": 2552,
    "region,": "广安",
    "parentId": 388
  },
  {
    "id,": 2553,
    "region,": "岳池",
    "parentId": 388
  },
  {
    "id,": 2554,
    "region,": "武胜",
    "parentId": 388
  },
  {
    "id,": 2555,
    "region,": "邻水",
    "parentId": 388
  },
  {
    "id,": 2556,
    "region,": "华蓥",
    "parentId": 388
  },
  {
    "id,": 2557,
    "region,": "通川",
    "parentId": 389
  },
  {
    "id,": 2558,
    "region,": "达川",
    "parentId": 389
  },
  {
    "id,": 2559,
    "region,": "宣汉",
    "parentId": 389
  },
  {
    "id,": 2560,
    "region,": "开江",
    "parentId": 389
  },
  {
    "id,": 2561,
    "region,": "大竹",
    "parentId": 389
  },
  {
    "id,": 2562,
    "region,": "渠县",
    "parentId": 389
  },
  {
    "id,": 2563,
    "region,": "万源",
    "parentId": 389
  },
  {
    "id,": 2564,
    "region,": "雨城",
    "parentId": 390
  },
  {
    "id,": 2565,
    "region,": "名山",
    "parentId": 390
  },
  {
    "id,": 2566,
    "region,": "荥经",
    "parentId": 390
  },
  {
    "id,": 2567,
    "region,": "汉源",
    "parentId": 390
  },
  {
    "id,": 2568,
    "region,": "石棉",
    "parentId": 390
  },
  {
    "id,": 2569,
    "region,": "天全",
    "parentId": 390
  },
  {
    "id,": 2570,
    "region,": "芦山",
    "parentId": 390
  },
  {
    "id,": 2571,
    "region,": "宝兴",
    "parentId": 390
  },
  {
    "id,": 2572,
    "region,": "巴州",
    "parentId": 391
  },
  {
    "id,": 2573,
    "region,": "通江",
    "parentId": 391
  },
  {
    "id,": 2574,
    "region,": "南江",
    "parentId": 391
  },
  {
    "id,": 2575,
    "region,": "平昌",
    "parentId": 391
  },
  {
    "id,": 2576,
    "region,": "雁江",
    "parentId": 392
  },
  {
    "id,": 2577,
    "region,": "安岳",
    "parentId": 392
  },
  {
    "id,": 2578,
    "region,": "乐至",
    "parentId": 392
  },
  {
    "id,": 2579,
    "region,": "简阳",
    "parentId": 375
  },
  {
    "id,": 2580,
    "region,": "马尔康",
    "parentId": 393
  },
  {
    "id,": 2581,
    "region,": "汶川",
    "parentId": 393
  },
  {
    "id,": 2582,
    "region,": "理县",
    "parentId": 393
  },
  {
    "id,": 2583,
    "region,": "茂县",
    "parentId": 393
  },
  {
    "id,": 2584,
    "region,": "松潘",
    "parentId": 393
  },
  {
    "id,": 2585,
    "region,": "九寨沟",
    "parentId": 393
  },
  {
    "id,": 2586,
    "region,": "金川",
    "parentId": 393
  },
  {
    "id,": 2587,
    "region,": "小金",
    "parentId": 393
  },
  {
    "id,": 2588,
    "region,": "黑水",
    "parentId": 393
  },
  {
    "id,": 2589,
    "region,": "壤塘",
    "parentId": 393
  },
  {
    "id,": 2590,
    "region,": "阿坝",
    "parentId": 393
  },
  {
    "id,": 2591,
    "region,": "若尔盖",
    "parentId": 393
  },
  {
    "id,": 2592,
    "region,": "红原",
    "parentId": 393
  },
  {
    "id,": 2593,
    "region,": "康定",
    "parentId": 394
  },
  {
    "id,": 2594,
    "region,": "泸定",
    "parentId": 394
  },
  {
    "id,": 2595,
    "region,": "丹巴",
    "parentId": 394
  },
  {
    "id,": 2596,
    "region,": "九龙",
    "parentId": 394
  },
  {
    "id,": 2597,
    "region,": "雅江",
    "parentId": 394
  },
  {
    "id,": 2598,
    "region,": "道孚",
    "parentId": 394
  },
  {
    "id,": 2599,
    "region,": "炉霍",
    "parentId": 394
  },
  {
    "id,": 2600,
    "region,": "甘孜",
    "parentId": 394
  },
  {
    "id,": 2601,
    "region,": "新龙",
    "parentId": 394
  },
  {
    "id,": 2602,
    "region,": "德格",
    "parentId": 394
  },
  {
    "id,": 2603,
    "region,": "白玉",
    "parentId": 394
  },
  {
    "id,": 2604,
    "region,": "石渠",
    "parentId": 394
  },
  {
    "id,": 2605,
    "region,": "色达",
    "parentId": 394
  },
  {
    "id,": 2606,
    "region,": "理塘",
    "parentId": 394
  },
  {
    "id,": 2607,
    "region,": "巴塘",
    "parentId": 394
  },
  {
    "id,": 2608,
    "region,": "乡城",
    "parentId": 394
  },
  {
    "id,": 2609,
    "region,": "稻城",
    "parentId": 394
  },
  {
    "id,": 2610,
    "region,": "得荣",
    "parentId": 394
  },
  {
    "id,": 2611,
    "region,": "西昌",
    "parentId": 395
  },
  {
    "id,": 2612,
    "region,": "木里",
    "parentId": 395
  },
  {
    "id,": 2613,
    "region,": "盐源",
    "parentId": 395
  },
  {
    "id,": 2614,
    "region,": "德昌",
    "parentId": 395
  },
  {
    "id,": 2615,
    "region,": "会理",
    "parentId": 395
  },
  {
    "id,": 2616,
    "region,": "会东",
    "parentId": 395
  },
  {
    "id,": 2617,
    "region,": "宁南",
    "parentId": 395
  },
  {
    "id,": 2618,
    "region,": "普格",
    "parentId": 395
  },
  {
    "id,": 2619,
    "region,": "布拖",
    "parentId": 395
  },
  {
    "id,": 2620,
    "region,": "金阳",
    "parentId": 395
  },
  {
    "id,": 2621,
    "region,": "昭觉",
    "parentId": 395
  },
  {
    "id,": 2622,
    "region,": "喜德",
    "parentId": 395
  },
  {
    "id,": 2623,
    "region,": "冕宁",
    "parentId": 395
  },
  {
    "id,": 2624,
    "region,": "越西",
    "parentId": 395
  },
  {
    "id,": 2625,
    "region,": "甘洛",
    "parentId": 395
  },
  {
    "id,": 2626,
    "region,": "美姑",
    "parentId": 395
  },
  {
    "id,": 2627,
    "region,": "雷波",
    "parentId": 395
  },
  {
    "id,": 2628,
    "region,": "观山湖",
    "parentId": 396
  },
  {
    "id,": 2629,
    "region,": "南明",
    "parentId": 396
  },
  {
    "id,": 2630,
    "region,": "云岩",
    "parentId": 396
  },
  {
    "id,": 2631,
    "region,": "花溪",
    "parentId": 396
  },
  {
    "id,": 2632,
    "region,": "乌当",
    "parentId": 396
  },
  {
    "id,": 2633,
    "region,": "白云",
    "parentId": 396
  },
  {
    "id,": 2634,
    "region,": "开阳",
    "parentId": 396
  },
  {
    "id,": 2635,
    "region,": "息烽",
    "parentId": 396
  },
  {
    "id,": 2636,
    "region,": "修文",
    "parentId": 396
  },
  {
    "id,": 2637,
    "region,": "清镇",
    "parentId": 396
  },
  {
    "id,": 2638,
    "region,": "钟山",
    "parentId": 397
  },
  {
    "id,": 2639,
    "region,": "六枝特",
    "parentId": 397
  },
  {
    "id,": 2640,
    "region,": "水城",
    "parentId": 397
  },
  {
    "id,": 2641,
    "region,": "盘县",
    "parentId": 397
  },
  {
    "id,": 2642,
    "region,": "红花岗",
    "parentId": 398
  },
  {
    "id,": 2643,
    "region,": "汇川",
    "parentId": 398
  },
  {
    "id,": 2644,
    "region,": "播州",
    "parentId": 398
  },
  {
    "id,": 2645,
    "region,": "桐梓",
    "parentId": 398
  },
  {
    "id,": 2646,
    "region,": "绥阳",
    "parentId": 398
  },
  {
    "id,": 2647,
    "region,": "正安",
    "parentId": 398
  },
  {
    "id,": 2648,
    "region,": "道真",
    "parentId": 398
  },
  {
    "id,": 2649,
    "region,": "务川",
    "parentId": 398
  },
  {
    "id,": 2650,
    "region,": "凤冈",
    "parentId": 398
  },
  {
    "id,": 2651,
    "region,": "湄潭",
    "parentId": 398
  },
  {
    "id,": 2652,
    "region,": "余庆",
    "parentId": 398
  },
  {
    "id,": 2653,
    "region,": "习水",
    "parentId": 398
  },
  {
    "id,": 2654,
    "region,": "赤水",
    "parentId": 398
  },
  {
    "id,": 2655,
    "region,": "仁怀",
    "parentId": 398
  },
  {
    "id,": 2656,
    "region,": "西秀",
    "parentId": 399
  },
  {
    "id,": 2657,
    "region,": "平坝",
    "parentId": 399
  },
  {
    "id,": 2658,
    "region,": "普定",
    "parentId": 399
  },
  {
    "id,": 2659,
    "region,": "镇宁",
    "parentId": 399
  },
  {
    "id,": 2660,
    "region,": "关岭",
    "parentId": 399
  },
  {
    "id,": 2661,
    "region,": "紫云",
    "parentId": 399
  },
  {
    "id,": 2662,
    "region,": "七星关",
    "parentId": 400
  },
  {
    "id,": 2663,
    "region,": "大方",
    "parentId": 400
  },
  {
    "id,": 2664,
    "region,": "黔西",
    "parentId": 400
  },
  {
    "id,": 2665,
    "region,": "金沙",
    "parentId": 400
  },
  {
    "id,": 2666,
    "region,": "织金",
    "parentId": 400
  },
  {
    "id,": 2667,
    "region,": "纳雍",
    "parentId": 400
  },
  {
    "id,": 2668,
    "region,": "威宁",
    "parentId": 400
  },
  {
    "id,": 2669,
    "region,": "赫章",
    "parentId": 400
  },
  {
    "id,": 2670,
    "region,": "碧江",
    "parentId": 401
  },
  {
    "id,": 2671,
    "region,": "万山",
    "parentId": 401
  },
  {
    "id,": 2672,
    "region,": "江口",
    "parentId": 401
  },
  {
    "id,": 2673,
    "region,": "玉屏",
    "parentId": 401
  },
  {
    "id,": 2674,
    "region,": "石阡",
    "parentId": 401
  },
  {
    "id,": 2675,
    "region,": "思南",
    "parentId": 401
  },
  {
    "id,": 2676,
    "region,": "印江",
    "parentId": 401
  },
  {
    "id,": 2677,
    "region,": "德江",
    "parentId": 401
  },
  {
    "id,": 2678,
    "region,": "沿河",
    "parentId": 401
  },
  {
    "id,": 2679,
    "region,": "松桃",
    "parentId": 401
  },
  {
    "id,": 2680,
    "region,": "兴义",
    "parentId": 402
  },
  {
    "id,": 2681,
    "region,": "兴仁",
    "parentId": 402
  },
  {
    "id,": 2682,
    "region,": "普安",
    "parentId": 402
  },
  {
    "id,": 2683,
    "region,": "晴隆",
    "parentId": 402
  },
  {
    "id,": 2684,
    "region,": "贞丰",
    "parentId": 402
  },
  {
    "id,": 2685,
    "region,": "望谟",
    "parentId": 402
  },
  {
    "id,": 2686,
    "region,": "册亨",
    "parentId": 402
  },
  {
    "id,": 2687,
    "region,": "安龙",
    "parentId": 402
  },
  {
    "id,": 2688,
    "region,": "凯里",
    "parentId": 403
  },
  {
    "id,": 2689,
    "region,": "黄平",
    "parentId": 403
  },
  {
    "id,": 2690,
    "region,": "施秉",
    "parentId": 403
  },
  {
    "id,": 2691,
    "region,": "三穗",
    "parentId": 403
  },
  {
    "id,": 2692,
    "region,": "镇远",
    "parentId": 403
  },
  {
    "id,": 2693,
    "region,": "岑巩",
    "parentId": 403
  },
  {
    "id,": 2694,
    "region,": "天柱",
    "parentId": 403
  },
  {
    "id,": 2695,
    "region,": "锦屏",
    "parentId": 403
  },
  {
    "id,": 2696,
    "region,": "剑河",
    "parentId": 403
  },
  {
    "id,": 2697,
    "region,": "台江",
    "parentId": 403
  },
  {
    "id,": 2698,
    "region,": "黎平",
    "parentId": 403
  },
  {
    "id,": 2699,
    "region,": "榕江",
    "parentId": 403
  },
  {
    "id,": 2700,
    "region,": "从江",
    "parentId": 403
  },
  {
    "id,": 2701,
    "region,": "雷山",
    "parentId": 403
  },
  {
    "id,": 2702,
    "region,": "麻江",
    "parentId": 403
  },
  {
    "id,": 2703,
    "region,": "丹寨",
    "parentId": 403
  },
  {
    "id,": 2704,
    "region,": "都匀",
    "parentId": 404
  },
  {
    "id,": 2705,
    "region,": "福泉",
    "parentId": 404
  },
  {
    "id,": 2706,
    "region,": "荔波",
    "parentId": 404
  },
  {
    "id,": 2707,
    "region,": "贵定",
    "parentId": 404
  },
  {
    "id,": 2708,
    "region,": "瓮安",
    "parentId": 404
  },
  {
    "id,": 2709,
    "region,": "独山",
    "parentId": 404
  },
  {
    "id,": 2710,
    "region,": "平塘",
    "parentId": 404
  },
  {
    "id,": 2711,
    "region,": "罗甸",
    "parentId": 404
  },
  {
    "id,": 2712,
    "region,": "长顺",
    "parentId": 404
  },
  {
    "id,": 2713,
    "region,": "龙里",
    "parentId": 404
  },
  {
    "id,": 2714,
    "region,": "惠水",
    "parentId": 404
  },
  {
    "id,": 2715,
    "region,": "三都",
    "parentId": 404
  },
  {
    "id,": 2716,
    "region,": "五华",
    "parentId": 405
  },
  {
    "id,": 2717,
    "region,": "盘龙",
    "parentId": 405
  },
  {
    "id,": 2718,
    "region,": "官渡",
    "parentId": 405
  },
  {
    "id,": 2719,
    "region,": "西山",
    "parentId": 405
  },
  {
    "id,": 2720,
    "region,": "东川",
    "parentId": 405
  },
  {
    "id,": 2721,
    "region,": "呈贡",
    "parentId": 405
  },
  {
    "id,": 2722,
    "region,": "晋宁",
    "parentId": 405
  },
  {
    "id,": 2723,
    "region,": "富民",
    "parentId": 405
  },
  {
    "id,": 2724,
    "region,": "宜良",
    "parentId": 405
  },
  {
    "id,": 2725,
    "region,": "石林",
    "parentId": 405
  },
  {
    "id,": 2726,
    "region,": "嵩明",
    "parentId": 405
  },
  {
    "id,": 2727,
    "region,": "禄劝",
    "parentId": 405
  },
  {
    "id,": 2728,
    "region,": "寻甸",
    "parentId": 405
  },
  {
    "id,": 2729,
    "region,": "安宁",
    "parentId": 405
  },
  {
    "id,": 2730,
    "region,": "麒麟",
    "parentId": 406
  },
  {
    "id,": 2731,
    "region,": "马龙",
    "parentId": 406
  },
  {
    "id,": 2732,
    "region,": "陆良",
    "parentId": 406
  },
  {
    "id,": 2733,
    "region,": "师宗",
    "parentId": 406
  },
  {
    "id,": 2734,
    "region,": "罗平",
    "parentId": 406
  },
  {
    "id,": 2735,
    "region,": "富源",
    "parentId": 406
  },
  {
    "id,": 2736,
    "region,": "会泽",
    "parentId": 406
  },
  {
    "id,": 2737,
    "region,": "沾益",
    "parentId": 406
  },
  {
    "id,": 2738,
    "region,": "宣威",
    "parentId": 406
  },
  {
    "id,": 2739,
    "region,": "红塔",
    "parentId": 407
  },
  {
    "id,": 2740,
    "region,": "江川",
    "parentId": 407
  },
  {
    "id,": 2741,
    "region,": "澄江",
    "parentId": 407
  },
  {
    "id,": 2742,
    "region,": "通海",
    "parentId": 407
  },
  {
    "id,": 2743,
    "region,": "华宁",
    "parentId": 407
  },
  {
    "id,": 2744,
    "region,": "易门",
    "parentId": 407
  },
  {
    "id,": 2745,
    "region,": "峨山",
    "parentId": 407
  },
  {
    "id,": 2746,
    "region,": "新平",
    "parentId": 407
  },
  {
    "id,": 2747,
    "region,": "元江",
    "parentId": 407
  },
  {
    "id,": 2748,
    "region,": "昭阳",
    "parentId": 408
  },
  {
    "id,": 2749,
    "region,": "鲁甸",
    "parentId": 408
  },
  {
    "id,": 2750,
    "region,": "巧家",
    "parentId": 408
  },
  {
    "id,": 2751,
    "region,": "盐津",
    "parentId": 408
  },
  {
    "id,": 2752,
    "region,": "大关",
    "parentId": 408
  },
  {
    "id,": 2753,
    "region,": "永善",
    "parentId": 408
  },
  {
    "id,": 2754,
    "region,": "绥江",
    "parentId": 408
  },
  {
    "id,": 2755,
    "region,": "镇雄",
    "parentId": 408
  },
  {
    "id,": 2756,
    "region,": "彝良",
    "parentId": 408
  },
  {
    "id,": 2757,
    "region,": "威信",
    "parentId": 408
  },
  {
    "id,": 2758,
    "region,": "水富",
    "parentId": 408
  },
  {
    "id,": 2759,
    "region,": "古城",
    "parentId": 409
  },
  {
    "id,": 2760,
    "region,": "玉龙",
    "parentId": 409
  },
  {
    "id,": 2761,
    "region,": "永胜",
    "parentId": 409
  },
  {
    "id,": 2762,
    "region,": "华坪",
    "parentId": 409
  },
  {
    "id,": 2763,
    "region,": "宁蒗",
    "parentId": 409
  },
  {
    "id,": 2764,
    "region,": "思茅",
    "parentId": 410
  },
  {
    "id,": 2765,
    "region,": "宁洱",
    "parentId": 410
  },
  {
    "id,": 2766,
    "region,": "墨江",
    "parentId": 410
  },
  {
    "id,": 2767,
    "region,": "景东",
    "parentId": 410
  },
  {
    "id,": 2768,
    "region,": "景谷",
    "parentId": 410
  },
  {
    "id,": 2769,
    "region,": "镇沅",
    "parentId": 410
  },
  {
    "id,": 2770,
    "region,": "江城",
    "parentId": 410
  },
  {
    "id,": 2771,
    "region,": "孟连",
    "parentId": 410
  },
  {
    "id,": 2772,
    "region,": "澜沧",
    "parentId": 410
  },
  {
    "id,": 2773,
    "region,": "西盟",
    "parentId": 410
  },
  {
    "id,": 2774,
    "region,": "临翔",
    "parentId": 411
  },
  {
    "id,": 2775,
    "region,": "凤庆",
    "parentId": 411
  },
  {
    "id,": 2776,
    "region,": "云县",
    "parentId": 411
  },
  {
    "id,": 2777,
    "region,": "永德",
    "parentId": 411
  },
  {
    "id,": 2778,
    "region,": "镇康",
    "parentId": 411
  },
  {
    "id,": 2779,
    "region,": "双江",
    "parentId": 411
  },
  {
    "id,": 2780,
    "region,": "耿马",
    "parentId": 411
  },
  {
    "id,": 2781,
    "region,": "沧源",
    "parentId": 411
  },
  {
    "id,": 2782,
    "region,": "楚雄",
    "parentId": 412
  },
  {
    "id,": 2783,
    "region,": "双柏",
    "parentId": 412
  },
  {
    "id,": 2784,
    "region,": "牟定",
    "parentId": 412
  },
  {
    "id,": 2785,
    "region,": "南华",
    "parentId": 412
  },
  {
    "id,": 2786,
    "region,": "姚安",
    "parentId": 412
  },
  {
    "id,": 2787,
    "region,": "大姚",
    "parentId": 412
  },
  {
    "id,": 2788,
    "region,": "永仁",
    "parentId": 412
  },
  {
    "id,": 2789,
    "region,": "元谋",
    "parentId": 412
  },
  {
    "id,": 2790,
    "region,": "武定",
    "parentId": 412
  },
  {
    "id,": 2791,
    "region,": "禄丰",
    "parentId": 412
  },
  {
    "id,": 2792,
    "region,": "个旧",
    "parentId": 413
  },
  {
    "id,": 2793,
    "region,": "开远",
    "parentId": 413
  },
  {
    "id,": 2794,
    "region,": "蒙自",
    "parentId": 413
  },
  {
    "id,": 2795,
    "region,": "屏边",
    "parentId": 413
  },
  {
    "id,": 2796,
    "region,": "建水",
    "parentId": 413
  },
  {
    "id,": 2797,
    "region,": "石屏",
    "parentId": 413
  },
  {
    "id,": 2798,
    "region,": "弥勒",
    "parentId": 413
  },
  {
    "id,": 2799,
    "region,": "泸西",
    "parentId": 413
  },
  {
    "id,": 2800,
    "region,": "元阳",
    "parentId": 413
  },
  {
    "id,": 2801,
    "region,": "红河",
    "parentId": 413
  },
  {
    "id,": 2802,
    "region,": "金平",
    "parentId": 413
  },
  {
    "id,": 2803,
    "region,": "绿春",
    "parentId": 413
  },
  {
    "id,": 2804,
    "region,": "河口",
    "parentId": 413
  },
  {
    "id,": 2805,
    "region,": "文山",
    "parentId": 414
  },
  {
    "id,": 2806,
    "region,": "砚山",
    "parentId": 414
  },
  {
    "id,": 2807,
    "region,": "西畴",
    "parentId": 414
  },
  {
    "id,": 2808,
    "region,": "麻栗坡",
    "parentId": 414
  },
  {
    "id,": 2809,
    "region,": "马关",
    "parentId": 414
  },
  {
    "id,": 2810,
    "region,": "丘北",
    "parentId": 414
  },
  {
    "id,": 2811,
    "region,": "广南",
    "parentId": 414
  },
  {
    "id,": 2812,
    "region,": "富宁",
    "parentId": 414
  },
  {
    "id,": 2813,
    "region,": "景洪",
    "parentId": 415
  },
  {
    "id,": 2814,
    "region,": "勐海",
    "parentId": 415
  },
  {
    "id,": 2815,
    "region,": "勐腊",
    "parentId": 415
  },
  {
    "id,": 2816,
    "region,": "大理",
    "parentId": 416
  },
  {
    "id,": 2817,
    "region,": "漾濞",
    "parentId": 416
  },
  {
    "id,": 2818,
    "region,": "祥云",
    "parentId": 416
  },
  {
    "id,": 2819,
    "region,": "宾川",
    "parentId": 416
  },
  {
    "id,": 2820,
    "region,": "弥渡",
    "parentId": 416
  },
  {
    "id,": 2821,
    "region,": "南涧",
    "parentId": 416
  },
  {
    "id,": 2822,
    "region,": "巍山",
    "parentId": 416
  },
  {
    "id,": 2823,
    "region,": "永平",
    "parentId": 416
  },
  {
    "id,": 2824,
    "region,": "云龙",
    "parentId": 416
  },
  {
    "id,": 2825,
    "region,": "洱源",
    "parentId": 416
  },
  {
    "id,": 2826,
    "region,": "剑川",
    "parentId": 416
  },
  {
    "id,": 2827,
    "region,": "鹤庆",
    "parentId": 416
  },
  {
    "id,": 2828,
    "region,": "瑞丽",
    "parentId": 417
  },
  {
    "id,": 2829,
    "region,": "芒市",
    "parentId": 417
  },
  {
    "id,": 2830,
    "region,": "梁河",
    "parentId": 417
  },
  {
    "id,": 2831,
    "region,": "盈江",
    "parentId": 417
  },
  {
    "id,": 2832,
    "region,": "陇川",
    "parentId": 417
  },
  {
    "id,": 2833,
    "region,": "泸水",
    "parentId": 418
  },
  {
    "id,": 2834,
    "region,": "福贡",
    "parentId": 418
  },
  {
    "id,": 2835,
    "region,": "贡山",
    "parentId": 418
  },
  {
    "id,": 2836,
    "region,": "兰坪",
    "parentId": 418
  },
  {
    "id,": 2837,
    "region,": "香格里拉",
    "parentId": 419
  },
  {
    "id,": 2838,
    "region,": "德钦",
    "parentId": 419
  },
  {
    "id,": 2839,
    "region,": "维西",
    "parentId": 419
  },
  {
    "id,": 2840,
    "region,": "隆阳",
    "parentId": 420
  },
  {
    "id,": 2841,
    "region,": "施甸",
    "parentId": 420
  },
  {
    "id,": 2842,
    "region,": "腾冲",
    "parentId": 420
  },
  {
    "id,": 2843,
    "region,": "龙陵",
    "parentId": 420
  },
  {
    "id,": 2844,
    "region,": "昌宁",
    "parentId": 420
  },
  {
    "id,": 2845,
    "region,": "城关",
    "parentId": 421
  },
  {
    "id,": 2846,
    "region,": "林周",
    "parentId": 421
  },
  {
    "id,": 2847,
    "region,": "当雄",
    "parentId": 421
  },
  {
    "id,": 2848,
    "region,": "尼木",
    "parentId": 421
  },
  {
    "id,": 2849,
    "region,": "曲水",
    "parentId": 421
  },
  {
    "id,": 2850,
    "region,": "堆龙德庆",
    "parentId": 421
  },
  {
    "id,": 2851,
    "region,": "达孜",
    "parentId": 421
  },
  {
    "id,": 2852,
    "region,": "墨竹工卡",
    "parentId": 421
  },
  {
    "id,": 2853,
    "region,": "卡若",
    "parentId": 422
  },
  {
    "id,": 2854,
    "region,": "江达",
    "parentId": 422
  },
  {
    "id,": 2855,
    "region,": "贡觉",
    "parentId": 422
  },
  {
    "id,": 2856,
    "region,": "类乌齐",
    "parentId": 422
  },
  {
    "id,": 2857,
    "region,": "丁青",
    "parentId": 422
  },
  {
    "id,": 2858,
    "region,": "察雅",
    "parentId": 422
  },
  {
    "id,": 2859,
    "region,": "八宿",
    "parentId": 422
  },
  {
    "id,": 2860,
    "region,": "左贡",
    "parentId": 422
  },
  {
    "id,": 2861,
    "region,": "芒康",
    "parentId": 422
  },
  {
    "id,": 2862,
    "region,": "洛隆",
    "parentId": 422
  },
  {
    "id,": 2863,
    "region,": "边坝",
    "parentId": 422
  },
  {
    "id,": 2864,
    "region,": "乃东",
    "parentId": 423
  },
  {
    "id,": 2865,
    "region,": "扎囊",
    "parentId": 423
  },
  {
    "id,": 2866,
    "region,": "贡嘎",
    "parentId": 423
  },
  {
    "id,": 2867,
    "region,": "桑日",
    "parentId": 423
  },
  {
    "id,": 2868,
    "region,": "琼结",
    "parentId": 423
  },
  {
    "id,": 2869,
    "region,": "曲松",
    "parentId": 423
  },
  {
    "id,": 2870,
    "region,": "措美",
    "parentId": 423
  },
  {
    "id,": 2871,
    "region,": "洛扎",
    "parentId": 423
  },
  {
    "id,": 2872,
    "region,": "加查",
    "parentId": 423
  },
  {
    "id,": 2873,
    "region,": "隆子",
    "parentId": 423
  },
  {
    "id,": 2874,
    "region,": "错那",
    "parentId": 423
  },
  {
    "id,": 2875,
    "region,": "浪卡子",
    "parentId": 423
  },
  {
    "id,": 2876,
    "region,": "桑珠孜",
    "parentId": 424
  },
  {
    "id,": 2877,
    "region,": "南木林",
    "parentId": 424
  },
  {
    "id,": 2878,
    "region,": "江孜",
    "parentId": 424
  },
  {
    "id,": 2879,
    "region,": "定日",
    "parentId": 424
  },
  {
    "id,": 2880,
    "region,": "萨迦",
    "parentId": 424
  },
  {
    "id,": 2881,
    "region,": "拉孜",
    "parentId": 424
  },
  {
    "id,": 2882,
    "region,": "昂仁",
    "parentId": 424
  },
  {
    "id,": 2883,
    "region,": "谢通门",
    "parentId": 424
  },
  {
    "id,": 2884,
    "region,": "白朗",
    "parentId": 424
  },
  {
    "id,": 2885,
    "region,": "仁布",
    "parentId": 424
  },
  {
    "id,": 2886,
    "region,": "康马",
    "parentId": 424
  },
  {
    "id,": 2887,
    "region,": "定结",
    "parentId": 424
  },
  {
    "id,": 2888,
    "region,": "仲巴",
    "parentId": 424
  },
  {
    "id,": 2889,
    "region,": "亚东",
    "parentId": 424
  },
  {
    "id,": 2890,
    "region,": "吉隆",
    "parentId": 424
  },
  {
    "id,": 2891,
    "region,": "聂拉木",
    "parentId": 424
  },
  {
    "id,": 2892,
    "region,": "萨嘎",
    "parentId": 424
  },
  {
    "id,": 2893,
    "region,": "岗巴",
    "parentId": 424
  },
  {
    "id,": 2894,
    "region,": "双湖",
    "parentId": 425
  },
  {
    "id,": 2895,
    "region,": "色尼",
    "parentId": 425
  },
  {
    "id,": 2896,
    "region,": "嘉黎",
    "parentId": 425
  },
  {
    "id,": 2897,
    "region,": "比如",
    "parentId": 425
  },
  {
    "id,": 2898,
    "region,": "聂荣",
    "parentId": 425
  },
  {
    "id,": 2899,
    "region,": "安多",
    "parentId": 425
  },
  {
    "id,": 2900,
    "region,": "申扎",
    "parentId": 425
  },
  {
    "id,": 2901,
    "region,": "索县",
    "parentId": 425
  },
  {
    "id,": 2902,
    "region,": "班戈",
    "parentId": 425
  },
  {
    "id,": 2903,
    "region,": "巴青",
    "parentId": 425
  },
  {
    "id,": 2904,
    "region,": "尼玛",
    "parentId": 425
  },
  {
    "id,": 2905,
    "region,": "普兰",
    "parentId": 426
  },
  {
    "id,": 2906,
    "region,": "札达",
    "parentId": 426
  },
  {
    "id,": 2907,
    "region,": "噶尔",
    "parentId": 426
  },
  {
    "id,": 2908,
    "region,": "日土",
    "parentId": 426
  },
  {
    "id,": 2909,
    "region,": "革吉",
    "parentId": 426
  },
  {
    "id,": 2910,
    "region,": "改则",
    "parentId": 426
  },
  {
    "id,": 2911,
    "region,": "措勤",
    "parentId": 426
  },
  {
    "id,": 2912,
    "region,": "巴宜",
    "parentId": 427
  },
  {
    "id,": 2913,
    "region,": "工布江达",
    "parentId": 427
  },
  {
    "id,": 2914,
    "region,": "米林",
    "parentId": 427
  },
  {
    "id,": 2915,
    "region,": "墨脱",
    "parentId": 427
  },
  {
    "id,": 2916,
    "region,": "波密",
    "parentId": 427
  },
  {
    "id,": 2917,
    "region,": "察隅",
    "parentId": 427
  },
  {
    "id,": 2918,
    "region,": "朗县",
    "parentId": 427
  },
  {
    "id,": 2919,
    "region,": "新城",
    "parentId": 428
  },
  {
    "id,": 2920,
    "region,": "碑林",
    "parentId": 428
  },
  {
    "id,": 2921,
    "region,": "莲湖",
    "parentId": 428
  },
  {
    "id,": 2922,
    "region,": "灞桥",
    "parentId": 428
  },
  {
    "id,": 2923,
    "region,": "未央",
    "parentId": 428
  },
  {
    "id,": 2924,
    "region,": "雁塔",
    "parentId": 428
  },
  {
    "id,": 2925,
    "region,": "阎良",
    "parentId": 428
  },
  {
    "id,": 2926,
    "region,": "临潼",
    "parentId": 428
  },
  {
    "id,": 2927,
    "region,": "长安",
    "parentId": 428
  },
  {
    "id,": 2928,
    "region,": "蓝田",
    "parentId": 428
  },
  {
    "id,": 2929,
    "region,": "周至",
    "parentId": 428
  },
  {
    "id,": 2930,
    "region,": "鄠邑",
    "parentId": 428
  },
  {
    "id,": 2931,
    "region,": "高陵",
    "parentId": 428
  },
  {
    "id,": 2932,
    "region,": "王益",
    "parentId": 429
  },
  {
    "id,": 2933,
    "region,": "印台",
    "parentId": 429
  },
  {
    "id,": 2934,
    "region,": "耀州",
    "parentId": 429
  },
  {
    "id,": 2935,
    "region,": "宜君",
    "parentId": 429
  },
  {
    "id,": 2936,
    "region,": "渭滨",
    "parentId": 430
  },
  {
    "id,": 2937,
    "region,": "金台",
    "parentId": 430
  },
  {
    "id,": 2938,
    "region,": "陈仓",
    "parentId": 430
  },
  {
    "id,": 2939,
    "region,": "凤翔",
    "parentId": 430
  },
  {
    "id,": 2940,
    "region,": "岐山",
    "parentId": 430
  },
  {
    "id,": 2941,
    "region,": "扶风",
    "parentId": 430
  },
  {
    "id,": 2942,
    "region,": "眉县",
    "parentId": 430
  },
  {
    "id,": 2943,
    "region,": "陇县",
    "parentId": 430
  },
  {
    "id,": 2944,
    "region,": "千阳",
    "parentId": 430
  },
  {
    "id,": 2945,
    "region,": "麟游",
    "parentId": 430
  },
  {
    "id,": 2946,
    "region,": "凤县",
    "parentId": 430
  },
  {
    "id,": 2947,
    "region,": "太白",
    "parentId": 430
  },
  {
    "id,": 2948,
    "region,": "秦都",
    "parentId": 431
  },
  {
    "id,": 2949,
    "region,": "杨陵",
    "parentId": 431
  },
  {
    "id,": 2950,
    "region,": "渭城",
    "parentId": 431
  },
  {
    "id,": 2951,
    "region,": "三原",
    "parentId": 431
  },
  {
    "id,": 2952,
    "region,": "泾阳",
    "parentId": 431
  },
  {
    "id,": 2953,
    "region,": "乾县",
    "parentId": 431
  },
  {
    "id,": 2954,
    "region,": "礼泉",
    "parentId": 431
  },
  {
    "id,": 2955,
    "region,": "永寿",
    "parentId": 431
  },
  {
    "id,": 2956,
    "region,": "彬县",
    "parentId": 431
  },
  {
    "id,": 2957,
    "region,": "长武",
    "parentId": 431
  },
  {
    "id,": 2958,
    "region,": "旬邑",
    "parentId": 431
  },
  {
    "id,": 2959,
    "region,": "淳化",
    "parentId": 431
  },
  {
    "id,": 2960,
    "region,": "武功",
    "parentId": 431
  },
  {
    "id,": 2961,
    "region,": "兴平",
    "parentId": 431
  },
  {
    "id,": 2962,
    "region,": "临渭",
    "parentId": 432
  },
  {
    "id,": 2963,
    "region,": "华州",
    "parentId": 432
  },
  {
    "id,": 2964,
    "region,": "潼关",
    "parentId": 432
  },
  {
    "id,": 2965,
    "region,": "大荔",
    "parentId": 432
  },
  {
    "id,": 2966,
    "region,": "合阳",
    "parentId": 432
  },
  {
    "id,": 2967,
    "region,": "澄城",
    "parentId": 432
  },
  {
    "id,": 2968,
    "region,": "蒲城",
    "parentId": 432
  },
  {
    "id,": 2969,
    "region,": "白水",
    "parentId": 432
  },
  {
    "id,": 2970,
    "region,": "富平",
    "parentId": 432
  },
  {
    "id,": 2971,
    "region,": "韩城",
    "parentId": 432
  },
  {
    "id,": 2972,
    "region,": "华阴",
    "parentId": 432
  },
  {
    "id,": 2973,
    "region,": "宝塔",
    "parentId": 433
  },
  {
    "id,": 2974,
    "region,": "延长",
    "parentId": 433
  },
  {
    "id,": 2975,
    "region,": "延川",
    "parentId": 433
  },
  {
    "id,": 2976,
    "region,": "子长",
    "parentId": 433
  },
  {
    "id,": 2977,
    "region,": "安塞",
    "parentId": 433
  },
  {
    "id,": 2978,
    "region,": "志丹",
    "parentId": 433
  },
  {
    "id,": 2979,
    "region,": "吴起",
    "parentId": 433
  },
  {
    "id,": 2980,
    "region,": "甘泉",
    "parentId": 433
  },
  {
    "id,": 2981,
    "region,": "富县",
    "parentId": 433
  },
  {
    "id,": 2982,
    "region,": "洛川",
    "parentId": 433
  },
  {
    "id,": 2983,
    "region,": "宜川",
    "parentId": 433
  },
  {
    "id,": 2984,
    "region,": "黄龙",
    "parentId": 433
  },
  {
    "id,": 2985,
    "region,": "黄陵",
    "parentId": 433
  },
  {
    "id,": 2986,
    "region,": "汉台",
    "parentId": 434
  },
  {
    "id,": 2987,
    "region,": "南郑",
    "parentId": 434
  },
  {
    "id,": 2988,
    "region,": "城固",
    "parentId": 434
  },
  {
    "id,": 2989,
    "region,": "洋县",
    "parentId": 434
  },
  {
    "id,": 2990,
    "region,": "西乡",
    "parentId": 434
  },
  {
    "id,": 2991,
    "region,": "勉县",
    "parentId": 434
  },
  {
    "id,": 2992,
    "region,": "宁强",
    "parentId": 434
  },
  {
    "id,": 2993,
    "region,": "略阳",
    "parentId": 434
  },
  {
    "id,": 2994,
    "region,": "镇巴",
    "parentId": 434
  },
  {
    "id,": 2995,
    "region,": "留坝",
    "parentId": 434
  },
  {
    "id,": 2996,
    "region,": "佛坪",
    "parentId": 434
  },
  {
    "id,": 2997,
    "region,": "榆阳",
    "parentId": 435
  },
  {
    "id,": 2998,
    "region,": "神木",
    "parentId": 435
  },
  {
    "id,": 2999,
    "region,": "府谷",
    "parentId": 435
  },
  {
    "id,": 3000,
    "region,": "横山",
    "parentId": 435
  },
  {
    "id,": 3001,
    "region,": "靖边",
    "parentId": 435
  },
  {
    "id,": 3002,
    "region,": "定边",
    "parentId": 435
  },
  {
    "id,": 3003,
    "region,": "绥德",
    "parentId": 435
  },
  {
    "id,": 3004,
    "region,": "米脂",
    "parentId": 435
  },
  {
    "id,": 3005,
    "region,": "佳县",
    "parentId": 435
  },
  {
    "id,": 3006,
    "region,": "吴堡",
    "parentId": 435
  },
  {
    "id,": 3007,
    "region,": "清涧",
    "parentId": 435
  },
  {
    "id,": 3008,
    "region,": "子洲",
    "parentId": 435
  },
  {
    "id,": 3009,
    "region,": "汉滨",
    "parentId": 436
  },
  {
    "id,": 3010,
    "region,": "汉阴",
    "parentId": 436
  },
  {
    "id,": 3011,
    "region,": "石泉",
    "parentId": 436
  },
  {
    "id,": 3012,
    "region,": "宁陕",
    "parentId": 436
  },
  {
    "id,": 3013,
    "region,": "紫阳",
    "parentId": 436
  },
  {
    "id,": 3014,
    "region,": "岚皋",
    "parentId": 436
  },
  {
    "id,": 3015,
    "region,": "平利",
    "parentId": 436
  },
  {
    "id,": 3016,
    "region,": "镇坪",
    "parentId": 436
  },
  {
    "id,": 3017,
    "region,": "旬阳",
    "parentId": 436
  },
  {
    "id,": 3018,
    "region,": "白河",
    "parentId": 436
  },
  {
    "id,": 3019,
    "region,": "商州",
    "parentId": 437
  },
  {
    "id,": 3020,
    "region,": "洛南",
    "parentId": 437
  },
  {
    "id,": 3021,
    "region,": "丹凤",
    "parentId": 437
  },
  {
    "id,": 3022,
    "region,": "商南",
    "parentId": 437
  },
  {
    "id,": 3023,
    "region,": "山阳",
    "parentId": 437
  },
  {
    "id,": 3024,
    "region,": "镇安",
    "parentId": 437
  },
  {
    "id,": 3025,
    "region,": "柞水",
    "parentId": 437
  },
  {
    "id,": 3026,
    "region,": "城关",
    "parentId": 438
  },
  {
    "id,": 3027,
    "region,": "七里河",
    "parentId": 438
  },
  {
    "id,": 3028,
    "region,": "西固",
    "parentId": 438
  },
  {
    "id,": 3029,
    "region,": "安宁",
    "parentId": 438
  },
  {
    "id,": 3030,
    "region,": "红古",
    "parentId": 438
  },
  {
    "id,": 3031,
    "region,": "永登",
    "parentId": 438
  },
  {
    "id,": 3032,
    "region,": "皋兰",
    "parentId": 438
  },
  {
    "id,": 3033,
    "region,": "榆中",
    "parentId": 438
  },
  {
    "id,": 3034,
    "region,": "镜铁",
    "parentId": 439
  },
  {
    "id,": 3035,
    "region,": "长城",
    "parentId": 439
  },
  {
    "id,": 3036,
    "region,": "雄关",
    "parentId": 439
  },
  {
    "id,": 3037,
    "region,": "金川",
    "parentId": 440
  },
  {
    "id,": 3038,
    "region,": "永昌",
    "parentId": 440
  },
  {
    "id,": 3039,
    "region,": "白银",
    "parentId": 441
  },
  {
    "id,": 3040,
    "region,": "平川",
    "parentId": 441
  },
  {
    "id,": 3041,
    "region,": "靖远",
    "parentId": 441
  },
  {
    "id,": 3042,
    "region,": "会宁",
    "parentId": 441
  },
  {
    "id,": 3043,
    "region,": "景泰",
    "parentId": 441
  },
  {
    "id,": 3044,
    "region,": "秦州",
    "parentId": 442
  },
  {
    "id,": 3045,
    "region,": "麦积",
    "parentId": 442
  },
  {
    "id,": 3046,
    "region,": "清水",
    "parentId": 442
  },
  {
    "id,": 3047,
    "region,": "秦安",
    "parentId": 442
  },
  {
    "id,": 3048,
    "region,": "甘谷",
    "parentId": 442
  },
  {
    "id,": 3049,
    "region,": "武山",
    "parentId": 442
  },
  {
    "id,": 3050,
    "region,": "张家川",
    "parentId": 442
  },
  {
    "id,": 3051,
    "region,": "凉州",
    "parentId": 443
  },
  {
    "id,": 3052,
    "region,": "民勤",
    "parentId": 443
  },
  {
    "id,": 3053,
    "region,": "古浪",
    "parentId": 443
  },
  {
    "id,": 3054,
    "region,": "天祝",
    "parentId": 443
  },
  {
    "id,": 3055,
    "region,": "甘州",
    "parentId": 444
  },
  {
    "id,": 3056,
    "region,": "肃南",
    "parentId": 444
  },
  {
    "id,": 3057,
    "region,": "民乐",
    "parentId": 444
  },
  {
    "id,": 3058,
    "region,": "临泽",
    "parentId": 444
  },
  {
    "id,": 3059,
    "region,": "高台",
    "parentId": 444
  },
  {
    "id,": 3060,
    "region,": "山丹",
    "parentId": 444
  },
  {
    "id,": 3061,
    "region,": "崆峒",
    "parentId": 445
  },
  {
    "id,": 3062,
    "region,": "泾川",
    "parentId": 445
  },
  {
    "id,": 3063,
    "region,": "灵台",
    "parentId": 445
  },
  {
    "id,": 3064,
    "region,": "崇信",
    "parentId": 445
  },
  {
    "id,": 3065,
    "region,": "华亭",
    "parentId": 445
  },
  {
    "id,": 3066,
    "region,": "庄浪",
    "parentId": 445
  },
  {
    "id,": 3067,
    "region,": "静宁",
    "parentId": 445
  },
  {
    "id,": 3068,
    "region,": "肃州",
    "parentId": 446
  },
  {
    "id,": 3069,
    "region,": "金塔",
    "parentId": 446
  },
  {
    "id,": 3070,
    "region,": "瓜州",
    "parentId": 446
  },
  {
    "id,": 3071,
    "region,": "肃北",
    "parentId": 446
  },
  {
    "id,": 3072,
    "region,": "阿克塞",
    "parentId": 446
  },
  {
    "id,": 3073,
    "region,": "玉门",
    "parentId": 446
  },
  {
    "id,": 3074,
    "region,": "敦煌",
    "parentId": 446
  },
  {
    "id,": 3075,
    "region,": "西峰",
    "parentId": 447
  },
  {
    "id,": 3076,
    "region,": "庆城",
    "parentId": 447
  },
  {
    "id,": 3077,
    "region,": "环县",
    "parentId": 447
  },
  {
    "id,": 3078,
    "region,": "华池",
    "parentId": 447
  },
  {
    "id,": 3079,
    "region,": "合水",
    "parentId": 447
  },
  {
    "id,": 3080,
    "region,": "正宁",
    "parentId": 447
  },
  {
    "id,": 3081,
    "region,": "宁县",
    "parentId": 447
  },
  {
    "id,": 3082,
    "region,": "镇原",
    "parentId": 447
  },
  {
    "id,": 3083,
    "region,": "安定",
    "parentId": 448
  },
  {
    "id,": 3084,
    "region,": "通渭",
    "parentId": 448
  },
  {
    "id,": 3085,
    "region,": "陇西",
    "parentId": 448
  },
  {
    "id,": 3086,
    "region,": "渭源",
    "parentId": 448
  },
  {
    "id,": 3087,
    "region,": "临洮",
    "parentId": 448
  },
  {
    "id,": 3088,
    "region,": "漳县",
    "parentId": 448
  },
  {
    "id,": 3089,
    "region,": "岷县",
    "parentId": 448
  },
  {
    "id,": 3090,
    "region,": "武都",
    "parentId": 449
  },
  {
    "id,": 3091,
    "region,": "成县",
    "parentId": 449
  },
  {
    "id,": 3092,
    "region,": "文县",
    "parentId": 449
  },
  {
    "id,": 3093,
    "region,": "宕昌",
    "parentId": 449
  },
  {
    "id,": 3094,
    "region,": "康县",
    "parentId": 449
  },
  {
    "id,": 3095,
    "region,": "西和",
    "parentId": 449
  },
  {
    "id,": 3096,
    "region,": "礼县",
    "parentId": 449
  },
  {
    "id,": 3097,
    "region,": "徽县",
    "parentId": 449
  },
  {
    "id,": 3098,
    "region,": "两当",
    "parentId": 449
  },
  {
    "id,": 3099,
    "region,": "临夏",
    "parentId": 450
  },
  {
    "id,": 3100,
    "region,": "临夏",
    "parentId": 450
  },
  {
    "id,": 3101,
    "region,": "康乐",
    "parentId": 450
  },
  {
    "id,": 3102,
    "region,": "永靖",
    "parentId": 450
  },
  {
    "id,": 3103,
    "region,": "广河",
    "parentId": 450
  },
  {
    "id,": 3104,
    "region,": "和政",
    "parentId": 450
  },
  {
    "id,": 3105,
    "region,": "东乡族",
    "parentId": 450
  },
  {
    "id,": 3106,
    "region,": "积石山",
    "parentId": 450
  },
  {
    "id,": 3107,
    "region,": "合作",
    "parentId": 451
  },
  {
    "id,": 3108,
    "region,": "临潭",
    "parentId": 451
  },
  {
    "id,": 3109,
    "region,": "卓尼",
    "parentId": 451
  },
  {
    "id,": 3110,
    "region,": "舟曲",
    "parentId": 451
  },
  {
    "id,": 3111,
    "region,": "迭部",
    "parentId": 451
  },
  {
    "id,": 3112,
    "region,": "玛曲",
    "parentId": 451
  },
  {
    "id,": 3113,
    "region,": "碌曲",
    "parentId": 451
  },
  {
    "id,": 3114,
    "region,": "夏河",
    "parentId": 451
  },
  {
    "id,": 3115,
    "region,": "城东",
    "parentId": 452
  },
  {
    "id,": 3116,
    "region,": "城中",
    "parentId": 452
  },
  {
    "id,": 3117,
    "region,": "城西",
    "parentId": 452
  },
  {
    "id,": 3118,
    "region,": "城北",
    "parentId": 452
  },
  {
    "id,": 3119,
    "region,": "大通",
    "parentId": 452
  },
  {
    "id,": 3120,
    "region,": "湟中",
    "parentId": 452
  },
  {
    "id,": 3121,
    "region,": "湟源",
    "parentId": 452
  },
  {
    "id,": 3122,
    "region,": "乐都",
    "parentId": 453
  },
  {
    "id,": 3123,
    "region,": "平安",
    "parentId": 453
  },
  {
    "id,": 3124,
    "region,": "民和",
    "parentId": 453
  },
  {
    "id,": 3125,
    "region,": "互助",
    "parentId": 453
  },
  {
    "id,": 3126,
    "region,": "化隆",
    "parentId": 453
  },
  {
    "id,": 3127,
    "region,": "循化",
    "parentId": 453
  },
  {
    "id,": 3128,
    "region,": "门源",
    "parentId": 454
  },
  {
    "id,": 3129,
    "region,": "祁连",
    "parentId": 454
  },
  {
    "id,": 3130,
    "region,": "海晏",
    "parentId": 454
  },
  {
    "id,": 3131,
    "region,": "刚察",
    "parentId": 454
  },
  {
    "id,": 3132,
    "region,": "同仁",
    "parentId": 455
  },
  {
    "id,": 3133,
    "region,": "尖扎",
    "parentId": 455
  },
  {
    "id,": 3134,
    "region,": "泽库",
    "parentId": 455
  },
  {
    "id,": 3135,
    "region,": "河南",
    "parentId": 455
  },
  {
    "id,": 3136,
    "region,": "共和",
    "parentId": 456
  },
  {
    "id,": 3137,
    "region,": "同德",
    "parentId": 456
  },
  {
    "id,": 3138,
    "region,": "贵德",
    "parentId": 456
  },
  {
    "id,": 3139,
    "region,": "兴海",
    "parentId": 456
  },
  {
    "id,": 3140,
    "region,": "贵南",
    "parentId": 456
  },
  {
    "id,": 3141,
    "region,": "玛沁",
    "parentId": 457
  },
  {
    "id,": 3142,
    "region,": "班玛",
    "parentId": 457
  },
  {
    "id,": 3143,
    "region,": "甘德",
    "parentId": 457
  },
  {
    "id,": 3144,
    "region,": "达日",
    "parentId": 457
  },
  {
    "id,": 3145,
    "region,": "久治",
    "parentId": 457
  },
  {
    "id,": 3146,
    "region,": "玛多",
    "parentId": 457
  },
  {
    "id,": 3147,
    "region,": "玉树",
    "parentId": 458
  },
  {
    "id,": 3148,
    "region,": "杂多",
    "parentId": 458
  },
  {
    "id,": 3149,
    "region,": "治多",
    "parentId": 458
  },
  {
    "id,": 3150,
    "region,": "囊谦",
    "parentId": 458
  },
  {
    "id,": 3151,
    "region,": "曲麻莱",
    "parentId": 458
  },
  {
    "id,": 3152,
    "region,": "大柴旦",
    "parentId": 459
  },
  {
    "id,": 3153,
    "region,": "冷湖",
    "parentId": 459
  },
  {
    "id,": 3154,
    "region,": "茫崖",
    "parentId": 459
  },
  {
    "id,": 3155,
    "region,": "格尔木",
    "parentId": 459
  },
  {
    "id,": 3156,
    "region,": "德令哈",
    "parentId": 459
  },
  {
    "id,": 3157,
    "region,": "乌兰",
    "parentId": 459
  },
  {
    "id,": 3158,
    "region,": "都兰",
    "parentId": 459
  },
  {
    "id,": 3159,
    "region,": "天峻",
    "parentId": 459
  },
  {
    "id,": 3160,
    "region,": "兴庆",
    "parentId": 460
  },
  {
    "id,": 3161,
    "region,": "西夏",
    "parentId": 460
  },
  {
    "id,": 3162,
    "region,": "金凤",
    "parentId": 460
  },
  {
    "id,": 3163,
    "region,": "永宁",
    "parentId": 460
  },
  {
    "id,": 3164,
    "region,": "贺兰",
    "parentId": 460
  },
  {
    "id,": 3165,
    "region,": "灵武",
    "parentId": 460
  },
  {
    "id,": 3166,
    "region,": "大武口",
    "parentId": 461
  },
  {
    "id,": 3167,
    "region,": "惠农",
    "parentId": 461
  },
  {
    "id,": 3168,
    "region,": "平罗",
    "parentId": 461
  },
  {
    "id,": 3169,
    "region,": "红寺堡",
    "parentId": 462
  },
  {
    "id,": 3170,
    "region,": "利通",
    "parentId": 462
  },
  {
    "id,": 3171,
    "region,": "盐池",
    "parentId": 462
  },
  {
    "id,": 3172,
    "region,": "同心",
    "parentId": 462
  },
  {
    "id,": 3173,
    "region,": "青铜峡",
    "parentId": 462
  },
  {
    "id,": 3174,
    "region,": "原州",
    "parentId": 463
  },
  {
    "id,": 3175,
    "region,": "西吉",
    "parentId": 463
  },
  {
    "id,": 3176,
    "region,": "隆德",
    "parentId": 463
  },
  {
    "id,": 3177,
    "region,": "泾源",
    "parentId": 463
  },
  {
    "id,": 3178,
    "region,": "彭阳",
    "parentId": 463
  },
  {
    "id,": 3179,
    "region,": "沙坡头",
    "parentId": 464
  },
  {
    "id,": 3180,
    "region,": "中宁",
    "parentId": 464
  },
  {
    "id,": 3181,
    "region,": "海原",
    "parentId": 464
  },
  {
    "id,": 3182,
    "region,": "天山",
    "parentId": 465
  },
  {
    "id,": 3183,
    "region,": "沙依巴克",
    "parentId": 465
  },
  {
    "id,": 3184,
    "region,": "新市",
    "parentId": 465
  },
  {
    "id,": 3185,
    "region,": "水磨沟",
    "parentId": 465
  },
  {
    "id,": 3186,
    "region,": "头屯河",
    "parentId": 465
  },
  {
    "id,": 3187,
    "region,": "达坂城",
    "parentId": 465
  },
  {
    "id,": 3188,
    "region,": "米东",
    "parentId": 465
  },
  {
    "id,": 3189,
    "region,": "乌鲁木齐",
    "parentId": 465
  },
  {
    "id,": 3190,
    "region,": "独山子",
    "parentId": 466
  },
  {
    "id,": 3191,
    "region,": "克拉玛依",
    "parentId": 466
  },
  {
    "id,": 3192,
    "region,": "白碱滩",
    "parentId": 466
  },
  {
    "id,": 3193,
    "region,": "乌尔禾",
    "parentId": 466
  },
  {
    "id,": 3194,
    "region,": "高昌",
    "parentId": 467
  },
  {
    "id,": 3195,
    "region,": "鄯善",
    "parentId": 467
  },
  {
    "id,": 3196,
    "region,": "托克逊",
    "parentId": 467
  },
  {
    "id,": 3197,
    "region,": "伊州",
    "parentId": 468
  },
  {
    "id,": 3198,
    "region,": "巴里坤",
    "parentId": 468
  },
  {
    "id,": 3199,
    "region,": "伊吾",
    "parentId": 468
  },
  {
    "id,": 3200,
    "region,": "昌吉",
    "parentId": 469
  },
  {
    "id,": 3201,
    "region,": "阜康",
    "parentId": 469
  },
  {
    "id,": 3202,
    "region,": "呼图壁",
    "parentId": 469
  },
  {
    "id,": 3203,
    "region,": "玛纳斯",
    "parentId": 469
  },
  {
    "id,": 3204,
    "region,": "奇台",
    "parentId": 469
  },
  {
    "id,": 3205,
    "region,": "吉木萨尔",
    "parentId": 469
  },
  {
    "id,": 3206,
    "region,": "木垒",
    "parentId": 469
  },
  {
    "id,": 3207,
    "region,": "阿拉山口",
    "parentId": 470
  },
  {
    "id,": 3208,
    "region,": "博乐",
    "parentId": 470
  },
  {
    "id,": 3209,
    "region,": "精河",
    "parentId": 470
  },
  {
    "id,": 3210,
    "region,": "温泉",
    "parentId": 470
  },
  {
    "id,": 3211,
    "region,": "库尔勒",
    "parentId": 471
  },
  {
    "id,": 3212,
    "region,": "轮台",
    "parentId": 471
  },
  {
    "id,": 3213,
    "region,": "尉犁",
    "parentId": 471
  },
  {
    "id,": 3214,
    "region,": "若羌",
    "parentId": 471
  },
  {
    "id,": 3215,
    "region,": "且末",
    "parentId": 471
  },
  {
    "id,": 3216,
    "region,": "焉耆",
    "parentId": 471
  },
  {
    "id,": 3217,
    "region,": "和静",
    "parentId": 471
  },
  {
    "id,": 3218,
    "region,": "和硕",
    "parentId": 471
  },
  {
    "id,": 3219,
    "region,": "博湖",
    "parentId": 471
  },
  {
    "id,": 3220,
    "region,": "阿克苏",
    "parentId": 472
  },
  {
    "id,": 3221,
    "region,": "温宿",
    "parentId": 472
  },
  {
    "id,": 3222,
    "region,": "库车",
    "parentId": 472
  },
  {
    "id,": 3223,
    "region,": "沙雅",
    "parentId": 472
  },
  {
    "id,": 3224,
    "region,": "新和",
    "parentId": 472
  },
  {
    "id,": 3225,
    "region,": "拜城",
    "parentId": 472
  },
  {
    "id,": 3226,
    "region,": "乌什",
    "parentId": 472
  },
  {
    "id,": 3227,
    "region,": "阿瓦提",
    "parentId": 472
  },
  {
    "id,": 3228,
    "region,": "柯坪",
    "parentId": 472
  },
  {
    "id,": 3229,
    "region,": "阿图什",
    "parentId": 473
  },
  {
    "id,": 3230,
    "region,": "阿克陶",
    "parentId": 473
  },
  {
    "id,": 3231,
    "region,": "阿合奇",
    "parentId": 473
  },
  {
    "id,": 3232,
    "region,": "乌恰",
    "parentId": 473
  },
  {
    "id,": 3233,
    "region,": "喀什",
    "parentId": 474
  },
  {
    "id,": 3234,
    "region,": "疏附",
    "parentId": 474
  },
  {
    "id,": 3235,
    "region,": "疏勒",
    "parentId": 474
  },
  {
    "id,": 3236,
    "region,": "英吉沙",
    "parentId": 474
  },
  {
    "id,": 3237,
    "region,": "泽普",
    "parentId": 474
  },
  {
    "id,": 3238,
    "region,": "莎车",
    "parentId": 474
  },
  {
    "id,": 3239,
    "region,": "叶城",
    "parentId": 474
  },
  {
    "id,": 3240,
    "region,": "麦盖提",
    "parentId": 474
  },
  {
    "id,": 3241,
    "region,": "岳普湖",
    "parentId": 474
  },
  {
    "id,": 3242,
    "region,": "伽师",
    "parentId": 474
  },
  {
    "id,": 3243,
    "region,": "巴楚",
    "parentId": 474
  },
  {
    "id,": 3244,
    "region,": "塔什库尔干",
    "parentId": 474
  },
  {
    "id,": 3245,
    "region,": "和田",
    "parentId": 475
  },
  {
    "id,": 3246,
    "region,": "和田",
    "parentId": 475
  },
  {
    "id,": 3247,
    "region,": "墨玉",
    "parentId": 475
  },
  {
    "id,": 3248,
    "region,": "皮山",
    "parentId": 475
  },
  {
    "id,": 3249,
    "region,": "洛浦",
    "parentId": 475
  },
  {
    "id,": 3250,
    "region,": "策勒",
    "parentId": 475
  },
  {
    "id,": 3251,
    "region,": "于田",
    "parentId": 475
  },
  {
    "id,": 3252,
    "region,": "民丰",
    "parentId": 475
  },
  {
    "id,": 3253,
    "region,": "伊宁",
    "parentId": 476
  },
  {
    "id,": 3254,
    "region,": "奎屯",
    "parentId": 476
  },
  {
    "id,": 3255,
    "region,": "伊宁",
    "parentId": 476
  },
  {
    "id,": 3256,
    "region,": "察布查尔锡伯",
    "parentId": 476
  },
  {
    "id,": 3257,
    "region,": "霍城",
    "parentId": 476
  },
  {
    "id,": 3258,
    "region,": "巩留",
    "parentId": 476
  },
  {
    "id,": 3259,
    "region,": "新源",
    "parentId": 476
  },
  {
    "id,": 3260,
    "region,": "昭苏",
    "parentId": 476
  },
  {
    "id,": 3261,
    "region,": "特克斯",
    "parentId": 476
  },
  {
    "id,": 3262,
    "region,": "尼勒克",
    "parentId": 476
  },
  {
    "id,": 3263,
    "region,": "塔城",
    "parentId": 477
  },
  {
    "id,": 3264,
    "region,": "乌苏",
    "parentId": 477
  },
  {
    "id,": 3265,
    "region,": "额敏",
    "parentId": 477
  },
  {
    "id,": 3266,
    "region,": "沙湾",
    "parentId": 477
  },
  {
    "id,": 3267,
    "region,": "托里",
    "parentId": 477
  },
  {
    "id,": 3268,
    "region,": "裕民",
    "parentId": 477
  },
  {
    "id,": 3269,
    "region,": "和布克赛尔",
    "parentId": 477
  },
  {
    "id,": 3270,
    "region,": "阿勒泰",
    "parentId": 478
  },
  {
    "id,": 3271,
    "region,": "布尔津",
    "parentId": 478
  },
  {
    "id,": 3272,
    "region,": "富蕴",
    "parentId": 478
  },
  {
    "id,": 3273,
    "region,": "福海",
    "parentId": 478
  },
  {
    "id,": 3274,
    "region,": "哈巴河",
    "parentId": 478
  },
  {
    "id,": 3275,
    "region,": "青河",
    "parentId": 478
  },
  {
    "id,": 3276,
    "region,": "吉木乃",
    "parentId": 478
  },
  {
    "id,": 3277,
    "region,": "松山",
    "parentId": 485
  },
  {
    "id,": 3278,
    "region,": "信义",
    "parentId": 485
  },
  {
    "id,": 3279,
    "region,": "大安",
    "parentId": 485
  },
  {
    "id,": 3280,
    "region,": "中山",
    "parentId": 485
  },
  {
    "id,": 3281,
    "region,": "中正",
    "parentId": 485
  },
  {
    "id,": 3282,
    "region,": "大同",
    "parentId": 485
  },
  {
    "id,": 3283,
    "region,": "万华",
    "parentId": 485
  },
  {
    "id,": 3284,
    "region,": "文山",
    "parentId": 485
  },
  {
    "id,": 3285,
    "region,": "南港",
    "parentId": 485
  },
  {
    "id,": 3286,
    "region,": "内湖",
    "parentId": 485
  },
  {
    "id,": 3287,
    "region,": "士林",
    "parentId": 485
  },
  {
    "id,": 3288,
    "region,": "北投",
    "parentId": 485
  },
  {
    "id,": 3289,
    "region,": "盐埕",
    "parentId": 486
  },
  {
    "id,": 3290,
    "region,": "鼓山",
    "parentId": 486
  },
  {
    "id,": 3291,
    "region,": "左营",
    "parentId": 486
  },
  {
    "id,": 3292,
    "region,": "楠梓",
    "parentId": 486
  },
  {
    "id,": 3293,
    "region,": "三民",
    "parentId": 486
  },
  {
    "id,": 3294,
    "region,": "新兴",
    "parentId": 486
  },
  {
    "id,": 3295,
    "region,": "前金",
    "parentId": 486
  },
  {
    "id,": 3296,
    "region,": "苓雅",
    "parentId": 486
  },
  {
    "id,": 3297,
    "region,": "前镇",
    "parentId": 486
  },
  {
    "id,": 3298,
    "region,": "旗津",
    "parentId": 486
  },
  {
    "id,": 3299,
    "region,": "小港",
    "parentId": 486
  },
  {
    "id,": 3300,
    "region,": "中正",
    "parentId": 487
  },
  {
    "id,": 3301,
    "region,": "七堵",
    "parentId": 487
  },
  {
    "id,": 3302,
    "region,": "暖暖",
    "parentId": 487
  },
  {
    "id,": 3303,
    "region,": "仁爱",
    "parentId": 487
  },
  {
    "id,": 3304,
    "region,": "中山",
    "parentId": 487
  },
  {
    "id,": 3305,
    "region,": "安乐",
    "parentId": 487
  },
  {
    "id,": 3306,
    "region,": "信义",
    "parentId": 487
  },
  {
    "id,": 3307,
    "region,": "大安",
    "parentId": 488
  },
  {
    "id,": 3308,
    "region,": "神冈",
    "parentId": 488
  },
  {
    "id,": 3309,
    "region,": "石冈",
    "parentId": 488
  },
  {
    "id,": 3310,
    "region,": "东势",
    "parentId": 488
  },
  {
    "id,": 3311,
    "region,": "新社",
    "parentId": 488
  },
  {
    "id,": 3312,
    "region,": "和平",
    "parentId": 488
  },
  {
    "id,": 3313,
    "region,": "大肚",
    "parentId": 488
  },
  {
    "id,": 3314,
    "region,": "沙鹿",
    "parentId": 488
  },
  {
    "id,": 3315,
    "region,": "龙井",
    "parentId": 488
  },
  {
    "id,": 3316,
    "region,": "梧栖",
    "parentId": 488
  },
  {
    "id,": 3317,
    "region,": "清水",
    "parentId": 488
  },
  {
    "id,": 3318,
    "region,": "大甲",
    "parentId": 488
  },
  {
    "id,": 3319,
    "region,": "外埔",
    "parentId": 488
  },
  {
    "id,": 3320,
    "region,": "大雅",
    "parentId": 488
  },
  {
    "id,": 3321,
    "region,": "潭子",
    "parentId": 488
  },
  {
    "id,": 3322,
    "region,": "后里",
    "parentId": 488
  },
  {
    "id,": 3323,
    "region,": "丰原",
    "parentId": 488
  },
  {
    "id,": 3324,
    "region,": "乌日",
    "parentId": 488
  },
  {
    "id,": 3325,
    "region,": "雾峰",
    "parentId": 488
  },
  {
    "id,": 3326,
    "region,": "大里",
    "parentId": 488
  },
  {
    "id,": 3327,
    "region,": "太平",
    "parentId": 488
  },
  {
    "id,": 3328,
    "region,": "中区",
    "parentId": 488
  },
  {
    "id,": 3329,
    "region,": "东区",
    "parentId": 488
  },
  {
    "id,": 3330,
    "region,": "南区",
    "parentId": 488
  },
  {
    "id,": 3331,
    "region,": "西区",
    "parentId": 488
  },
  {
    "id,": 3332,
    "region,": "北区",
    "parentId": 488
  },
  {
    "id,": 3333,
    "region,": "西屯",
    "parentId": 488
  },
  {
    "id,": 3334,
    "region,": "南屯",
    "parentId": 488
  },
  {
    "id,": 3335,
    "region,": "北屯",
    "parentId": 488
  },
  {
    "id,": 3336,
    "region,": "东区",
    "parentId": 489
  },
  {
    "id,": 3337,
    "region,": "南区",
    "parentId": 489
  },
  {
    "id,": 3338,
    "region,": "北区",
    "parentId": 489
  },
  {
    "id,": 3339,
    "region,": "安南",
    "parentId": 489
  },
  {
    "id,": 3340,
    "region,": "安平",
    "parentId": 489
  },
  {
    "id,": 3341,
    "region,": "中西",
    "parentId": 489
  },
  {
    "id,": 3342,
    "region,": "东区",
    "parentId": 490
  },
  {
    "id,": 3343,
    "region,": "北区",
    "parentId": 490
  },
  {
    "id,": 3344,
    "region,": "香山",
    "parentId": 490
  },
  {
    "id,": 3345,
    "region,": "东区",
    "parentId": 491
  },
  {
    "id,": 3346,
    "region,": "西区",
    "parentId": 491
  },
  {
    "id,": 3347,
    "region,": "板桥",
    "parentId": 492
  },
  {
    "id,": 3348,
    "region,": "瑞芳",
    "parentId": 492
  },
  {
    "id,": 3349,
    "region,": "八里",
    "parentId": 492
  },
  {
    "id,": 3350,
    "region,": "深坑",
    "parentId": 492
  },
  {
    "id,": 3351,
    "region,": "三芝",
    "parentId": 492
  },
  {
    "id,": 3352,
    "region,": "金山",
    "parentId": 492
  },
  {
    "id,": 3353,
    "region,": "万里",
    "parentId": 492
  },
  {
    "id,": 3354,
    "region,": "贡寮",
    "parentId": 492
  },
  {
    "id,": 3355,
    "region,": "石门",
    "parentId": 492
  },
  {
    "id,": 3356,
    "region,": "双溪",
    "parentId": 492
  },
  {
    "id,": 3357,
    "region,": "石碇",
    "parentId": 492
  },
  {
    "id,": 3358,
    "region,": "坪林",
    "parentId": 492
  },
  {
    "id,": 3359,
    "region,": "乌来",
    "parentId": 492
  },
  {
    "id,": 3360,
    "region,": "泰山",
    "parentId": 492
  },
  {
    "id,": 3361,
    "region,": "五股",
    "parentId": 492
  },
  {
    "id,": 3362,
    "region,": "莺歌",
    "parentId": 492
  },
  {
    "id,": 3363,
    "region,": "中和",
    "parentId": 492
  },
  {
    "id,": 3364,
    "region,": "新庄",
    "parentId": 492
  },
  {
    "id,": 3365,
    "region,": "三重",
    "parentId": 492
  },
  {
    "id,": 3366,
    "region,": "新店",
    "parentId": 492
  },
  {
    "id,": 3367,
    "region,": "土城",
    "parentId": 492
  },
  {
    "id,": 3368,
    "region,": "永和",
    "parentId": 492
  },
  {
    "id,": 3369,
    "region,": "芦洲",
    "parentId": 492
  },
  {
    "id,": 3370,
    "region,": "汐止",
    "parentId": 492
  },
  {
    "id,": 3371,
    "region,": "树林",
    "parentId": 492
  },
  {
    "id,": 3372,
    "region,": "淡水",
    "parentId": 492
  },
  {
    "id,": 3373,
    "region,": "三峡",
    "parentId": 492
  },
  {
    "id,": 3374,
    "region,": "林口",
    "parentId": 492
  },
  {
    "id,": 3375,
    "region,": "平溪",
    "parentId": 492
  },
  {
    "id,": 3376,
    "region,": "宜兰",
    "parentId": 493
  },
  {
    "id,": 3377,
    "region,": "罗东",
    "parentId": 493
  },
  {
    "id,": 3378,
    "region,": "苏澳",
    "parentId": 493
  },
  {
    "id,": 3379,
    "region,": "头城",
    "parentId": 493
  },
  {
    "id,": 3380,
    "region,": "礁溪",
    "parentId": 493
  },
  {
    "id,": 3381,
    "region,": "壮围",
    "parentId": 493
  },
  {
    "id,": 3382,
    "region,": "员山",
    "parentId": 493
  },
  {
    "id,": 3383,
    "region,": "冬山",
    "parentId": 493
  },
  {
    "id,": 3384,
    "region,": "五结",
    "parentId": 493
  },
  {
    "id,": 3385,
    "region,": "三星",
    "parentId": 493
  },
  {
    "id,": 3386,
    "region,": "大同",
    "parentId": 493
  },
  {
    "id,": 3387,
    "region,": "南澳",
    "parentId": 493
  },
  {
    "id,": 3388,
    "region,": "桃园",
    "parentId": 494
  },
  {
    "id,": 3389,
    "region,": "中坜",
    "parentId": 494
  },
  {
    "id,": 3390,
    "region,": "大溪",
    "parentId": 494
  },
  {
    "id,": 3391,
    "region,": "杨梅",
    "parentId": 494
  },
  {
    "id,": 3392,
    "region,": "芦竹",
    "parentId": 494
  },
  {
    "id,": 3393,
    "region,": "大园",
    "parentId": 494
  },
  {
    "id,": 3394,
    "region,": "龟山",
    "parentId": 494
  },
  {
    "id,": 3395,
    "region,": "八德",
    "parentId": 494
  },
  {
    "id,": 3396,
    "region,": "龙潭",
    "parentId": 494
  },
  {
    "id,": 3397,
    "region,": "平镇",
    "parentId": 494
  },
  {
    "id,": 3398,
    "region,": "新屋",
    "parentId": 494
  },
  {
    "id,": 3399,
    "region,": "观音",
    "parentId": 494
  },
  {
    "id,": 3400,
    "region,": "复兴",
    "parentId": 494
  },
  {
    "id,": 3401,
    "region,": "竹北",
    "parentId": 495
  },
  {
    "id,": 3402,
    "region,": "竹东",
    "parentId": 495
  },
  {
    "id,": 3403,
    "region,": "新埔",
    "parentId": 495
  },
  {
    "id,": 3404,
    "region,": "关西",
    "parentId": 495
  },
  {
    "id,": 3405,
    "region,": "湖口",
    "parentId": 495
  },
  {
    "id,": 3406,
    "region,": "新丰",
    "parentId": 495
  },
  {
    "id,": 3407,
    "region,": "芎林",
    "parentId": 495
  },
  {
    "id,": 3408,
    "region,": "横山",
    "parentId": 495
  },
  {
    "id,": 3409,
    "region,": "北埔",
    "parentId": 495
  },
  {
    "id,": 3410,
    "region,": "宝山",
    "parentId": 495
  },
  {
    "id,": 3411,
    "region,": "峨眉",
    "parentId": 495
  },
  {
    "id,": 3412,
    "region,": "尖石",
    "parentId": 495
  },
  {
    "id,": 3413,
    "region,": "五峰",
    "parentId": 495
  },
  {
    "id,": 3414,
    "region,": "苗栗",
    "parentId": 496
  },
  {
    "id,": 3415,
    "region,": "苑里",
    "parentId": 496
  },
  {
    "id,": 3416,
    "region,": "通霄",
    "parentId": 496
  },
  {
    "id,": 3417,
    "region,": "竹南",
    "parentId": 496
  },
  {
    "id,": 3418,
    "region,": "头份",
    "parentId": 496
  },
  {
    "id,": 3419,
    "region,": "后龙",
    "parentId": 496
  },
  {
    "id,": 3420,
    "region,": "卓兰",
    "parentId": 496
  },
  {
    "id,": 3421,
    "region,": "大湖",
    "parentId": 496
  },
  {
    "id,": 3422,
    "region,": "公馆",
    "parentId": 496
  },
  {
    "id,": 3423,
    "region,": "铜锣",
    "parentId": 496
  },
  {
    "id,": 3424,
    "region,": "南庄",
    "parentId": 496
  },
  {
    "id,": 3425,
    "region,": "头屋",
    "parentId": 496
  },
  {
    "id,": 3426,
    "region,": "三义",
    "parentId": 496
  },
  {
    "id,": 3427,
    "region,": "西湖",
    "parentId": 496
  },
  {
    "id,": 3428,
    "region,": "造桥",
    "parentId": 496
  },
  {
    "id,": 3429,
    "region,": "三湾",
    "parentId": 496
  },
  {
    "id,": 3430,
    "region,": "狮潭",
    "parentId": 496
  },
  {
    "id,": 3431,
    "region,": "泰安",
    "parentId": 496
  },
  {
    "id,": 3432,
    "region,": "彰化",
    "parentId": 497
  },
  {
    "id,": 3433,
    "region,": "鹿港",
    "parentId": 497
  },
  {
    "id,": 3434,
    "region,": "和美",
    "parentId": 497
  },
  {
    "id,": 3435,
    "region,": "线西",
    "parentId": 497
  },
  {
    "id,": 3436,
    "region,": "伸港",
    "parentId": 497
  },
  {
    "id,": 3437,
    "region,": "福兴",
    "parentId": 497
  },
  {
    "id,": 3438,
    "region,": "秀水",
    "parentId": 497
  },
  {
    "id,": 3439,
    "region,": "花坛",
    "parentId": 497
  },
  {
    "id,": 3440,
    "region,": "芬园",
    "parentId": 497
  },
  {
    "id,": 3441,
    "region,": "员林",
    "parentId": 497
  },
  {
    "id,": 3442,
    "region,": "溪湖",
    "parentId": 497
  },
  {
    "id,": 3443,
    "region,": "田中",
    "parentId": 497
  },
  {
    "id,": 3444,
    "region,": "大村",
    "parentId": 497
  },
  {
    "id,": 3445,
    "region,": "埔盐",
    "parentId": 497
  },
  {
    "id,": 3446,
    "region,": "埔心",
    "parentId": 497
  },
  {
    "id,": 3447,
    "region,": "永靖",
    "parentId": 497
  },
  {
    "id,": 3448,
    "region,": "社头",
    "parentId": 497
  },
  {
    "id,": 3449,
    "region,": "二水",
    "parentId": 497
  },
  {
    "id,": 3450,
    "region,": "北斗",
    "parentId": 497
  },
  {
    "id,": 3451,
    "region,": "二林",
    "parentId": 497
  },
  {
    "id,": 3452,
    "region,": "田尾",
    "parentId": 497
  },
  {
    "id,": 3453,
    "region,": "埤头",
    "parentId": 497
  },
  {
    "id,": 3454,
    "region,": "芳苑",
    "parentId": 497
  },
  {
    "id,": 3455,
    "region,": "大城",
    "parentId": 497
  },
  {
    "id,": 3456,
    "region,": "竹塘",
    "parentId": 497
  },
  {
    "id,": 3457,
    "region,": "溪州",
    "parentId": 497
  },
  {
    "id,": 3458,
    "region,": "南投",
    "parentId": 498
  },
  {
    "id,": 3459,
    "region,": "南投",
    "parentId": 498
  },
  {
    "id,": 3460,
    "region,": "草屯",
    "parentId": 498
  },
  {
    "id,": 3461,
    "region,": "竹山",
    "parentId": 498
  },
  {
    "id,": 3462,
    "region,": "集集",
    "parentId": 498
  },
  {
    "id,": 3463,
    "region,": "名间",
    "parentId": 498
  },
  {
    "id,": 3464,
    "region,": "鹿谷",
    "parentId": 498
  },
  {
    "id,": 3465,
    "region,": "中寮",
    "parentId": 498
  },
  {
    "id,": 3466,
    "region,": "鱼池",
    "parentId": 498
  },
  {
    "id,": 3467,
    "region,": "国姓",
    "parentId": 498
  },
  {
    "id,": 3468,
    "region,": "水里",
    "parentId": 498
  },
  {
    "id,": 3469,
    "region,": "信义",
    "parentId": 498
  },
  {
    "id,": 3470,
    "region,": "仁爱",
    "parentId": 498
  },
  {
    "id,": 3471,
    "region,": "斗六",
    "parentId": 499
  },
  {
    "id,": 3472,
    "region,": "斗南",
    "parentId": 499
  },
  {
    "id,": 3473,
    "region,": "虎尾",
    "parentId": 499
  },
  {
    "id,": 3474,
    "region,": "西螺",
    "parentId": 499
  },
  {
    "id,": 3475,
    "region,": "土库",
    "parentId": 499
  },
  {
    "id,": 3476,
    "region,": "北港",
    "parentId": 499
  },
  {
    "id,": 3477,
    "region,": "古坑",
    "parentId": 499
  },
  {
    "id,": 3478,
    "region,": "大埤",
    "parentId": 499
  },
  {
    "id,": 3479,
    "region,": "莿桐",
    "parentId": 499
  },
  {
    "id,": 3480,
    "region,": "林内",
    "parentId": 499
  },
  {
    "id,": 3481,
    "region,": "二仑",
    "parentId": 499
  },
  {
    "id,": 3482,
    "region,": "仑背",
    "parentId": 499
  },
  {
    "id,": 3483,
    "region,": "麦寮",
    "parentId": 499
  },
  {
    "id,": 3484,
    "region,": "东势",
    "parentId": 499
  },
  {
    "id,": 3485,
    "region,": "褒忠",
    "parentId": 499
  },
  {
    "id,": 3486,
    "region,": "台西",
    "parentId": 499
  },
  {
    "id,": 3487,
    "region,": "元长",
    "parentId": 499
  },
  {
    "id,": 3488,
    "region,": "四湖",
    "parentId": 499
  },
  {
    "id,": 3489,
    "region,": "口湖",
    "parentId": 499
  },
  {
    "id,": 3490,
    "region,": "水林",
    "parentId": 499
  },
  {
    "id,": 3491,
    "region,": "太保",
    "parentId": 500
  },
  {
    "id,": 3492,
    "region,": "朴子",
    "parentId": 500
  },
  {
    "id,": 3493,
    "region,": "布袋",
    "parentId": 500
  },
  {
    "id,": 3494,
    "region,": "大林",
    "parentId": 500
  },
  {
    "id,": 3495,
    "region,": "民雄",
    "parentId": 500
  },
  {
    "id,": 3496,
    "region,": "溪口",
    "parentId": 500
  },
  {
    "id,": 3497,
    "region,": "新港",
    "parentId": 500
  },
  {
    "id,": 3498,
    "region,": "六脚",
    "parentId": 500
  },
  {
    "id,": 3499,
    "region,": "东石",
    "parentId": 500
  },
  {
    "id,": 3500,
    "region,": "义竹",
    "parentId": 500
  },
  {
    "id,": 3501,
    "region,": "鹿草",
    "parentId": 500
  },
  {
    "id,": 3502,
    "region,": "水上",
    "parentId": 500
  },
  {
    "id,": 3503,
    "region,": "中埔",
    "parentId": 500
  },
  {
    "id,": 3504,
    "region,": "竹崎",
    "parentId": 500
  },
  {
    "id,": 3505,
    "region,": "梅山",
    "parentId": 500
  },
  {
    "id,": 3506,
    "region,": "番路",
    "parentId": 500
  },
  {
    "id,": 3507,
    "region,": "大埔",
    "parentId": 500
  },
  {
    "id,": 3508,
    "region,": "阿里山",
    "parentId": 500
  },
  {
    "id,": 3509,
    "region,": "屏东",
    "parentId": 501
  },
  {
    "id,": 3510,
    "region,": "潮州",
    "parentId": 501
  },
  {
    "id,": 3511,
    "region,": "东港",
    "parentId": 501
  },
  {
    "id,": 3512,
    "region,": "恒春",
    "parentId": 501
  },
  {
    "id,": 3513,
    "region,": "万丹",
    "parentId": 501
  },
  {
    "id,": 3514,
    "region,": "长治",
    "parentId": 501
  },
  {
    "id,": 3515,
    "region,": "麟洛",
    "parentId": 501
  },
  {
    "id,": 3516,
    "region,": "九如",
    "parentId": 501
  },
  {
    "id,": 3517,
    "region,": "里港",
    "parentId": 501
  },
  {
    "id,": 3518,
    "region,": "盐埔",
    "parentId": 501
  },
  {
    "id,": 3519,
    "region,": "高树",
    "parentId": 501
  },
  {
    "id,": 3520,
    "region,": "万峦",
    "parentId": 501
  },
  {
    "id,": 3521,
    "region,": "内埔",
    "parentId": 501
  },
  {
    "id,": 3522,
    "region,": "竹田",
    "parentId": 501
  },
  {
    "id,": 3523,
    "region,": "新埤",
    "parentId": 501
  },
  {
    "id,": 3524,
    "region,": "枋寮",
    "parentId": 501
  },
  {
    "id,": 3525,
    "region,": "新园",
    "parentId": 501
  },
  {
    "id,": 3526,
    "region,": "崁顶",
    "parentId": 501
  },
  {
    "id,": 3527,
    "region,": "林边",
    "parentId": 501
  },
  {
    "id,": 3528,
    "region,": "南州",
    "parentId": 501
  },
  {
    "id,": 3529,
    "region,": "佳冬",
    "parentId": 501
  },
  {
    "id,": 3530,
    "region,": "琉球",
    "parentId": 501
  },
  {
    "id,": 3531,
    "region,": "车城",
    "parentId": 501
  },
  {
    "id,": 3532,
    "region,": "满州",
    "parentId": 501
  },
  {
    "id,": 3533,
    "region,": "枋山",
    "parentId": 501
  },
  {
    "id,": 3534,
    "region,": "三地门",
    "parentId": 501
  },
  {
    "id,": 3535,
    "region,": "雾台",
    "parentId": 501
  },
  {
    "id,": 3536,
    "region,": "玛家",
    "parentId": 501
  },
  {
    "id,": 3537,
    "region,": "泰武",
    "parentId": 501
  },
  {
    "id,": 3538,
    "region,": "来义",
    "parentId": 501
  },
  {
    "id,": 3539,
    "region,": "春日",
    "parentId": 501
  },
  {
    "id,": 3540,
    "region,": "狮子",
    "parentId": 501
  },
  {
    "id,": 3541,
    "region,": "牡丹",
    "parentId": 501
  },
  {
    "id,": 3542,
    "region,": "卑南",
    "parentId": 502
  },
  {
    "id,": 3543,
    "region,": "台东",
    "parentId": 502
  },
  {
    "id,": 3544,
    "region,": "成功",
    "parentId": 502
  },
  {
    "id,": 3545,
    "region,": "关山",
    "parentId": 502
  },
  {
    "id,": 3546,
    "region,": "鹿野",
    "parentId": 502
  },
  {
    "id,": 3547,
    "region,": "池上",
    "parentId": 502
  },
  {
    "id,": 3548,
    "region,": "东河",
    "parentId": 502
  },
  {
    "id,": 3549,
    "region,": "长滨",
    "parentId": 502
  },
  {
    "id,": 3550,
    "region,": "太麻里",
    "parentId": 502
  },
  {
    "id,": 3551,
    "region,": "大武",
    "parentId": 502
  },
  {
    "id,": 3552,
    "region,": "绿岛",
    "parentId": 502
  },
  {
    "id,": 3553,
    "region,": "海端",
    "parentId": 502
  },
  {
    "id,": 3554,
    "region,": "延平",
    "parentId": 502
  },
  {
    "id,": 3555,
    "region,": "金峰",
    "parentId": 502
  },
  {
    "id,": 3556,
    "region,": "达仁",
    "parentId": 502
  },
  {
    "id,": 3557,
    "region,": "兰屿",
    "parentId": 502
  },
  {
    "id,": 3558,
    "region,": "花莲",
    "parentId": 503
  },
  {
    "id,": 3559,
    "region,": "凤林",
    "parentId": 503
  },
  {
    "id,": 3560,
    "region,": "玉里",
    "parentId": 503
  },
  {
    "id,": 3561,
    "region,": "新城",
    "parentId": 503
  },
  {
    "id,": 3562,
    "region,": "吉安",
    "parentId": 503
  },
  {
    "id,": 3563,
    "region,": "寿丰",
    "parentId": 503
  },
  {
    "id,": 3564,
    "region,": "光复",
    "parentId": 503
  },
  {
    "id,": 3565,
    "region,": "丰滨",
    "parentId": 503
  },
  {
    "id,": 3566,
    "region,": "瑞穗",
    "parentId": 503
  },
  {
    "id,": 3567,
    "region,": "富里",
    "parentId": 503
  },
  {
    "id,": 3568,
    "region,": "秀林",
    "parentId": 503
  },
  {
    "id,": 3569,
    "region,": "万荣",
    "parentId": 503
  },
  {
    "id,": 3570,
    "region,": "卓溪",
    "parentId": 503
  },
  {
    "id,": 3571,
    "region,": "马公",
    "parentId": 504
  },
  {
    "id,": 3572,
    "region,": "湖西",
    "parentId": 504
  },
  {
    "id,": 3573,
    "region,": "白沙",
    "parentId": 504
  },
  {
    "id,": 3574,
    "region,": "西屿",
    "parentId": 504
  },
  {
    "id,": 3575,
    "region,": "望安",
    "parentId": 504
  },
  {
    "id,": 3576,
    "region,": "七美",
    "parentId": 504
  },
  {
    "id,": 3577,
    "region,": "双河",
    "parentId": 31
  },
  {
    "id,": 3578,
    "region,": "海棠",
    "parentId": 357
  },
  {
    "id,": 3579,
    "region,": "吉阳",
    "parentId": 357
  },
  {
    "id,": 3580,
    "region,": "天涯",
    "parentId": 357
  },
  {
    "id,": 3581,
    "region,": "崖州",
    "parentId": 357
  },
  {
    "id,": 3582,
    "region,": "霍尔果斯",
    "parentId": 476
  },
  {
    "id,": 3583,
    "region,": "前锋",
    "parentId": 388
  },
  {
    "id,": 3584,
    "region,": "福绵",
    "parentId": 350
  },
  {
    "id,": 3585,
    "region,": "可克达拉",
    "parentId": 31
  },
  {
    "id,": 7036,
    "region,": "龙华",
    "parentId": 323
  },
  {
    "id,": 7037,
    "region,": "坪山",
    "parentId": 323
  },
  {
    "id,": 7038,
    "region,": "昆玉",
    "parentId": 31
  },
  {
    "id,": 7039,
    "region,": "平桂",
    "parentId": 352
  },
  {
    "id,": 7040,
    "region,": "巴什",
    "parentId": 152
  },
  {
    "id,": 7041,
    "region,": "叶集",
    "parentId": 231
  }
]
export default arr