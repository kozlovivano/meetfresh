const CATEGORIES = [
  {
    id: 1,
    description: 'DESSERT',
    description_chinese: 'CH'
  },
  {
    id: 2,
    description: 'DRINK',
    description_chinese: 'CH'
  },
  {
    id: 3,
    description: 'SNACKS',
    description_chinese: 'CH'
  },
  {
    id: 4,
    description: 'COFFEE',
    description_chinese: 'CH'
  }
];
const GROUPS = [
  {
    id: 1,
    category_id: 1,
    description: 'Grass Jelly # 1 - H',
    description_chinese: 'CH',
    image: 'https://source.unsplash.com/collection/1163637/120x120/?sig=1'
  },
  {
    id: 2,
    category_id: 1,
    description: 'Grass Jelly # 4 - H',
    description_chinese: 'CH',
    image: 'https://source.unsplash.com/collection/1163637/120x120/?sig=2'
  },
  {
    id: 3,
    category_id: 2,
    description: 'FreshMilk GT_Cold',
    description_chinese: 'CH',
    image: 'https://source.unsplash.com/collection/1163637/120x120/?sig=3'
  },
  {
    id: 4,
    category_id: 2,
    description: 'FreshMilk BT_Cold',
    description_chinese: 'CH',
    image: 'https://source.unsplash.com/collection/1163637/120x120/?sig=4'
  },
  {
    id: 5,
    category_id: 2,
    description: 'PR DRK /Fresh MilK_Hot',
    description_chinese: 'CH',
    image: 'https://source.unsplash.com/collection/1163637/120x120/?sig=5'
  },
  {
    id: 6,
    category_id: 3,
    description: 'Q Mochi & Egg Pudding',
    description_chinese: 'CH',
    image: 'https://source.unsplash.com/collection/1163637/120x120/?sig=6'
  },
  {
    id: 7,
    category_id: 4,
    description: 'Americano',
    description_chinese: 'CH',
    image: 'https://source.unsplash.com/collection/1163637/120x120/?sig=7'
  },
];
const ARTICLES = [
  {
    "id": 3269,
    "group_id": 3,
    "description": "Taro balls",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=75",
    "description_chinese": "鮮芋仙紅茶",
    "price": 3.5
  },
  {
    "id": 4798,
    "group_id": 6,
    "description": "Raw Soy Milk",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=54",
    "description_chinese": "黑糖粉",
    "price": 4.2
  },
  {
    "id": 2430,
    "group_id": 6,
    "description": "Lemon Syrup",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=94",
    "description_chinese": "奶蓋粉",
    "price": 13.7
  },
  {
    "id": 5269,
    "group_id": 2,
    "description": "Lemon Syrup",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=67",
    "description_chinese": "黑糖粉",
    "price": 13.7
  },
  {
    "id": 4874,
    "group_id": 2,
    "description": "Peanut Mochi",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=86",
    "description_chinese": "奶精粉",
    "price": 3.03
  },
  {
    "id": 1081,
    "group_id": 6,
    "description": "Passion Fruit Syrup",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=68",
    "description_chinese": "鮮芋仙‐燒仙草粉",
    "price": 1.5
  },
  {
    "id": 2273,
    "group_id": 3,
    "description": "Passion Fruit Syrup",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=54",
    "description_chinese": "蜜香紅茶",
    "price": 2.6
  },
  {
    "id": 1253,
    "group_id": 4,
    "description": "Q Mochi - Original",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=24",
    "description_chinese": "奶香金萱(青茶)",
    "price": 2.6
  },
  {
    "id": 9044,
    "group_id": 4,
    "description": "Sesame Rice Balls",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=3",
    "description_chinese": "寒天凍粉",
    "price": 3.03
  },
  {
    "id": 2517,
    "group_id": 4,
    "description": "Sesame Mochi",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=83",
    "description_chinese": "焦糖布丁粉",
    "price": 1.2
  },
  {
    "id": 9605,
    "group_id": 1,
    "description": "Sesame Mochi",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=52",
    "description_chinese": "蜜香紅茶",
    "price": 3.5
  },
  {
    "id": 1100,
    "group_id": 2,
    "description": "Mini Taro balls",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=47",
    "description_chinese": "奶香金萱(青茶)",
    "price": 2.6
  },
  {
    "id": 5554,
    "group_id": 4,
    "description": "Sesame Mochi",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=22",
    "description_chinese": "雞蛋仔專用粉-原味",
    "price": 1.5
  },
  {
    "id": 7408,
    "group_id": 3,
    "description": "Rice balls",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=83",
    "description_chinese": "茉香綠茶",
    "price": 3.5
  },
  {
    "id": 3120,
    "group_id": 7,
    "description": "Refined Sugar",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=48",
    "description_chinese": "焦糖粉",
    "price": 13.7
  },
  {
    "id": 4163,
    "group_id": 1,
    "description": "Lemon Syrup",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=80",
    "description_chinese": "寒天凍粉",
    "price": 4.2
  },
  {
    "id": 6584,
    "group_id": 4,
    "description": "Mung Bean Cake",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=51",
    "description_chinese": "豆花粉",
    "price": 3.03
  },
  {
    "id": 3833,
    "group_id": 6,
    "description": "Taro",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=61",
    "description_chinese": "鮮芋仙‐燒仙草粉",
    "price": 2.6
  },
  {
    "id": 5659,
    "group_id": 5,
    "description": "Passion Fruit Syrup",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=2",
    "description_chinese": "奶蓋粉",
    "price": 3.5
  },
  {
    "id": 7323,
    "group_id": 1,
    "description": "Mini Taro balls",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=78",
    "description_chinese": "奶香金萱(青茶)",
    "price": 1.2
  },
  {
    "id": 3828,
    "group_id": 1,
    "description": "Q Mochi - Brown Sugar ",
    "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=90",
    "description_chinese": "焦糖布丁粉",
    "price": 1.2
  }
];
