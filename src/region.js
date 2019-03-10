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
  }
]


export default arr