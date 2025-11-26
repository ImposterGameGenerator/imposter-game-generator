// Word Packs Data
// 词库数据 - 5种语言 × 8个主题 × 20个词汇

const WORD_PACKS = {
  en: {
    animals: ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Monkey', 'Panda', 'Koala', 'Kangaroo', 'Penguin', 'Dolphin', 'Whale', 'Eagle', 'Owl', 'Parrot', 'Butterfly', 'Crocodile', 'Hippo', 'Rhino', 'Cheetah'],
    sports: ['Football', 'Basketball', 'Tennis', 'Baseball', 'Soccer', 'Hockey', 'Golf', 'Swimming', 'Running', 'Cycling', 'Boxing', 'Wrestling', 'Surfing', 'Skiing', 'Volleyball', 'Cricket', 'Rugby', 'Badminton', 'Archery', 'Fencing'],
    movies: ['Avatar', 'Titanic', 'Inception', 'Avengers', 'Matrix', 'Gladiator', 'Jaws', 'Rocky', 'Frozen', 'Shrek', 'Joker', 'Batman', 'Superman', 'Spiderman', 'StarWars', 'LordOfRings', 'HarryPotter', 'JurassicPark', 'Terminator', 'Predator'],
    food: ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad', 'Steak', 'Chicken', 'Rice', 'Bread', 'Cheese', 'Chocolate', 'Cake', 'Cookie', 'IceCream', 'Sandwich', 'Taco', 'Burrito', 'Noodles', 'Soup', 'Curry'],
    technology: ['Computer', 'Smartphone', 'Tablet', 'Laptop', 'Internet', 'WiFi', 'Bluetooth', 'Camera', 'Television', 'Radio', 'GPS', 'Drone', 'Robot', 'AI', 'VR', 'Cloud', 'Database', 'Algorithm', 'Network', 'Server'],
    music: ['Guitar', 'Piano', 'Drums', 'Violin', 'Saxophone', 'Trumpet', 'Flute', 'Harp', 'Accordion', 'Harmonica', 'Jazz', 'Rock', 'Pop', 'Classical', 'Blues', 'Opera', 'Symphony', 'Concert', 'Orchestra', 'Band'],
    countries: ['America', 'China', 'Japan', 'France', 'Germany', 'Italy', 'Spain', 'Brazil', 'Australia', 'Canada', 'Mexico', 'India', 'Russia', 'Egypt', 'Greece', 'Thailand', 'Turkey', 'Argentina', 'Portugal', 'Norway'],
    colors: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Black', 'White', 'Gray', 'Gold', 'Silver', 'Bronze', 'Crimson', 'Navy', 'Turquoise', 'Magenta', 'Cyan', 'Violet']
  },
  zh: {
    animals: ['狮子', '老虎', '大象', '长颈鹿', '斑马', '猴子', '熊猫', '考拉', '袋鼠', '企鹅', '海豚', '鲸鱼', '老鹰', '猫头鹰', '鹦鹉', '蝴蝶', '鳄鱼', '河马', '犀牛', '猎豹'],
    sports: ['足球', '篮球', '网球', '棒球', '橄榄球', '曲棍球', '高尔夫', '游泳', '跑步', '骑行', '拳击', '摔跤', '冲浪', '滑雪', '排球', '板球', '羽毛球', '射箭', '击剑', '体操'],
    movies: ['阿凡达', '泰坦尼克号', '盗梦空间', '复仇者联盟', '黑客帝国', '角斗士', '大白鲨', '洛奇', '冰雪奇缘', '怪物史莱克', '小丑', '蝙蝠侠', '超人', '蜘蛛侠', '星球大战', '指环王', '哈利波特', '侏罗纪公园', '终结者', '铁血战士'],
    food: ['披萨', '汉堡', '寿司', '意大利面', '沙拉', '牛排', '鸡肉', '米饭', '面包', '奶酪', '巧克力', '蛋糕', '饼干', '冰淇淋', '三明治', '玉米卷', '卷饼', '面条', '汤', '咖喱'],
    technology: ['电脑', '智能手机', '平板', '笔记本', '互联网', '无线网', '蓝牙', '相机', '电视', '收音机', '导航', '无人机', '机器人', '人工智能', '虚拟现实', '云计算', '数据库', '算法', '网络', '服务器'],
    music: ['吉他', '钢琴', '鼓', '小提琴', '萨克斯', '小号', '长笛', '竖琴', '手风琴', '口琴', '爵士乐', '摇滚', '流行乐', '古典乐', '布鲁斯', '歌剧', '交响乐', '音乐会', '管弦乐队', '乐队'],
    countries: ['美国', '中国', '日本', '法国', '德国', '意大利', '西班牙', '巴西', '澳大利亚', '加拿大', '墨西哥', '印度', '俄罗斯', '埃及', '希腊', '泰国', '土耳其', '阿根廷', '葡萄牙', '挪威'],
    colors: ['红色', '蓝色', '绿色', '黄色', '橙色', '紫色', '粉色', '棕色', '黑色', '白色', '灰色', '金色', '银色', '青铜色', '深红', '海军蓝', '青绿色', '洋红', '青色', '紫罗兰']
  },
  ja: {
    animals: ['ライオン', 'トラ', 'ゾウ', 'キリン', 'シマウマ', 'サル', 'パンダ', 'コアラ', 'カンガルー', 'ペンギン', 'イルカ', 'クジラ', 'ワシ', 'フクロウ', 'オウム', 'チョウ', 'ワニ', 'カバ', 'サイ', 'チーター'],
    sports: ['サッカー', 'バスケ', 'テニス', '野球', 'ラグビー', 'ホッケー', 'ゴルフ', '水泳', 'ランニング', '自転車', 'ボクシング', 'レスリング', 'サーフィン', 'スキー', 'バレー', 'クリケット', 'バドミントン', 'アーチェリー', 'フェンシング', '体操'],
    movies: ['アバター', 'タイタニック', 'インセプション', 'アベンジャーズ', 'マトリックス', 'グラディエーター', 'ジョーズ', 'ロッキー', 'アナと雪の女王', 'シュレック', 'ジョーカー', 'バットマン', 'スーパーマン', 'スパイダーマン', 'スターウォーズ', 'ロード・オブ・ザ・リング', 'ハリーポッター', 'ジュラシックパーク', 'ターミネーター', 'プレデター'],
    food: ['ピザ', 'ハンバーガー', '寿司', 'パスタ', 'サラダ', 'ステーキ', 'チキン', 'ライス', 'パン', 'チーズ', 'チョコレート', 'ケーキ', 'クッキー', 'アイスクリーム', 'サンドイッチ', 'タコス', 'ブリトー', 'ヌードル', 'スープ', 'カレー'],
    technology: ['コンピュータ', 'スマホ', 'タブレット', 'ノートパソコン', 'インターネット', 'WiFi', 'ブルートゥース', 'カメラ', 'テレビ', 'ラジオ', 'GPS', 'ドローン', 'ロボット', 'AI', 'VR', 'クラウド', 'データベース', 'アルゴリズム', 'ネットワーク', 'サーバー'],
    music: ['ギター', 'ピアノ', 'ドラム', 'バイオリン', 'サックス', 'トランペット', 'フルート', 'ハープ', 'アコーディオン', 'ハーモニカ', 'ジャズ', 'ロック', 'ポップ', 'クラシック', 'ブルース', 'オペラ', 'シンフォニー', 'コンサート', 'オーケストラ', 'バンド'],
    countries: ['アメリカ', '中国', '日本', 'フランス', 'ドイツ', 'イタリア', 'スペイン', 'ブラジル', 'オーストラリア', 'カナダ', 'メキシコ', 'インド', 'ロシア', 'エジプト', 'ギリシャ', 'タイ', 'トルコ', 'アルゼンチン', 'ポルトガル', 'ノルウェー'],
    colors: ['赤', '青', '緑', '黄色', 'オレンジ', '紫', 'ピンク', '茶色', '黒', '白', '灰色', '金色', '銀色', '銅色', '深紅', 'ネイビー', 'ターコイズ', 'マゼンタ', 'シアン', 'バイオレット']
  },
  ko: {
    animals: ['사자', '호랑이', '코끼리', '기린', '얼룩말', '원숭이', '판다', '코알라', '캥거루', '펭귄', '돌고래', '고래', '독수리', '부엉이', '앵무새', '나비', '악어', '하마', '코뿔소', '치타'],
    sports: ['축구', '농구', '테니스', '야구', '럭비', '하키', '골프', '수영', '달리기', '사이클', '복싱', '레슬링', '서핑', '스키', '배구', '크리켓', '배드민턴', '양궁', '펜싱', '체조'],
    movies: ['아바타', '타이타닉', '인셉션', '어벤져스', '매트릭스', '글래디에이터', '죠스', '록키', '겨울왕국', '슈렉', '조커', '배트맨', '슈퍼맨', '스파이더맨', '스타워즈', '반지의 제왕', '해리포터', '쥬라기 공원', '터미네이터', '프레데터'],
    food: ['피자', '햄버거', '초밥', '파스타', '샐러드', '스테이크', '치킨', '밥', '빵', '치즈', '초콜릿', '케이크', '쿠키', '아이스크림', '샌드위치', '타코', '부리또', '국수', '수프', '카레'],
    technology: ['컴퓨터', '스마트폰', '태블릿', '노트북', '인터넷', '와이파이', '블루투스', '카메라', 'TV', '라디오', 'GPS', '드론', '로봇', 'AI', 'VR', '클라우드', '데이터베이스', '알고리즘', '네트워크', '서버'],
    music: ['기타', '피아노', '드럼', '바이올린', '색소폰', '트럼펫', '플루트', '하프', '아코디언', '하모니카', '재즈', '록', '팝', '클래식', '블루스', '오페라', '심포니', '콘서트', '오케스트라', '밴드'],
    countries: ['미국', '중국', '일본', '프랑스', '독일', '이탈리아', '스페인', '브라질', '호주', '캐나다', '멕시코', '인도', '러시아', '이집트', '그리스', '태국', '터키', '아르헨티나', '포르투갈', '노르웨이'],
    colors: ['빨강', '파랑', '초록', '노랑', '주황', '보라', '분홍', '갈색', '검정', '흰색', '회색', '금색', '은색', '청동색', '진홍', '네이비', '청록색', '자홍색', '청록', '보라']
  },
  es: {
    animals: ['León', 'Tigre', 'Elefante', 'Jirafa', 'Cebra', 'Mono', 'Panda', 'Koala', 'Canguro', 'Pingüino', 'Delfín', 'Ballena', 'Águila', 'Búho', 'Loro', 'Mariposa', 'Cocodrilo', 'Hipopótamo', 'Rinoceronte', 'Guepardo'],
    sports: ['Fútbol', 'Baloncesto', 'Tenis', 'Béisbol', 'Rugby', 'Hockey', 'Golf', 'Natación', 'Correr', 'Ciclismo', 'Boxeo', 'Lucha', 'Surf', 'Esquí', 'Voleibol', 'Cricket', 'Bádminton', 'Tiro con arco', 'Esgrima', 'Gimnasia'],
    movies: ['Avatar', 'Titanic', 'Origen', 'Vengadores', 'Matrix', 'Gladiador', 'Tiburón', 'Rocky', 'Frozen', 'Shrek', 'Joker', 'Batman', 'Superman', 'Spiderman', 'Star Wars', 'Señor de los Anillos', 'Harry Potter', 'Jurassic Park', 'Terminator', 'Depredador'],
    food: ['Pizza', 'Hamburguesa', 'Sushi', 'Pasta', 'Ensalada', 'Bistec', 'Pollo', 'Arroz', 'Pan', 'Queso', 'Chocolate', 'Pastel', 'Galleta', 'Helado', 'Sándwich', 'Taco', 'Burrito', 'Fideos', 'Sopa', 'Curry'],
    technology: ['Computadora', 'Smartphone', 'Tableta', 'Portátil', 'Internet', 'WiFi', 'Bluetooth', 'Cámara', 'Televisión', 'Radio', 'GPS', 'Dron', 'Robot', 'IA', 'RV', 'Nube', 'Base de datos', 'Algoritmo', 'Red', 'Servidor'],
    music: ['Guitarra', 'Piano', 'Batería', 'Violín', 'Saxofón', 'Trompeta', 'Flauta', 'Arpa', 'Acordeón', 'Armónica', 'Jazz', 'Rock', 'Pop', 'Clásica', 'Blues', 'Ópera', 'Sinfonía', 'Concierto', 'Orquesta', 'Banda'],
    countries: ['Estados Unidos', 'China', 'Japón', 'Francia', 'Alemania', 'Italia', 'España', 'Brasil', 'Australia', 'Canadá', 'México', 'India', 'Rusia', 'Egipto', 'Grecia', 'Tailandia', 'Turquía', 'Argentina', 'Portugal', 'Noruega'],
    colors: ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Morado', 'Rosa', 'Marrón', 'Negro', 'Blanco', 'Gris', 'Dorado', 'Plateado', 'Bronce', 'Carmesí', 'Marino', 'Turquesa', 'Magenta', 'Cian', 'Violeta']
  }
};
