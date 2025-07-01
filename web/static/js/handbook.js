const snakes = [
    {
        "id": 0,
        "scientific_name": "Boiga kraepelini",
        "chinese": {
            "name": "绞花林蛇",
            "toxicity": "有轻微的毒性，但咬到不会致人于死",
            "danger_level": "轻度危险",
            "distribution": "主要分布于台湾以及中国大陆的浙江、安徽、福建、江西、湖南、广东、海南、香港、广西、四川、贵州，以及越南等地",
            "habitat": "一般栖息于山区或丘陵以及常栖于溪沟旁灌木上或见于茶山矮树上。其生存的海拔范围为300至1100米",
            "behavior": "树栖蛇类，夜行性。多生活在丘陵、开垦地的树林，攀爬力强，以蜥蜴、鸟类为食，偶尔也吃鸟蛋、雏鸟。",
            "notice": [
                "本种于2023年被收录入《有重要生态、科学、社会价值的陆生野生动物名录》"
            ]
        },
        "english": {
            "name": "Boiga kraepelini",
            "toxicity": "Mildly venomous, but bites are not fatal to humans",
            "danger_level": "Low Risk",
            "distribution": "Distributed in Taiwan and mainland China (Zhejiang, Anhui, Fujian, Jiangxi, Hunan, Guangdong, Hainan, Hong Kong, Guangxi, Sichuan, Guizhou), and Vietnam",
            "habitat": "Inhabits mountainous or hilly areas, often found on shrubs near streams or in tea plantations at altitudes of 300-1100 meters",
            "behavior": "Arboreal and nocturnal. Lives in hills and cultivated forests, strong climbing ability, feeds on lizards and birds, occasionally bird eggs and nestlings.",
            "notice": [
                "Listed in the 'Catalogue of Terrestrial Wild Animals of Important Ecological, Scientific and Social Value' in 2023"
            ]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E7%BB%9E%E8%8A%B1%E6%9E%97%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/24/Boiga_kraepelini.jpg"
    },
    {
        "id": 1,
        "scientific_name": "Bungarus multicinctus",
        "chinese": {
            "name": "银环蛇",
            "toxicity": "银环蛇为台湾六大毒蛇之一，毒腺很小，但毒性强烈",
            "danger_level": "高度危险",
            "distribution": "银环蛇分布地区包括中国大陆南部、香港、缅甸、台湾、越南，等地。",
            "habitat": "多栖息于水边",
            "behavior": "银环蛇在夜间活动，多栖息水边，以鱼、蛙、蛇、鼠为食物。近来面临了人类捕杀与栖息地被破坏的问题,性情较温和不若眼镜蛇凶猛，受干扰时会尽可能迅速逃走，或将身体盘成大8字形并将头部藏在蛇身下，除非遭受严重威胁，否则不会轻易发动攻击",
            "notice": [
                "银环蛇具有α-、β- bungarotoxin两种神经毒素（可特异性地阻断骨骼肌终板膜中的ACh受体阳离子通道，使神经–肌接头的传递受阻，导致肌肉松弛），患者被咬时不会感到疼痛，反而想睡。轻微中毒时身体局部产生麻痹现象，若是毒素作用于神经肌肉交接位置，则会阻绝神经传导路线，致使横纹肌无法正常收缩，导致呼吸麻痹，作用时间约40分钟至2小时，或长达24小时。可以用神经性抗毒蛇血清治疗。",
                "本种于2023年被收录入《有重要生态、科学、社会价值的陆生野生动物名录》"
            ]
        },
        "english": {
            "name": "Bungarus multicinctus",
            "toxicity": "One of Taiwan's six major venomous snakes, small venom glands but highly potent venom",
            "danger_level": "High Risk",
            "distribution": "Distributed in southern mainland China, Hong Kong, Myanmar, Taiwan, Vietnam, and other areas",
            "habitat": "Mostly inhabits watersides",
            "behavior": "Nocturnal, often found near water, feeding on fish, frogs, snakes, and mice. Faces threats from human hunting and habitat destruction. Temperament is relatively mild compared to cobras; when disturbed, it will flee quickly or coil into a large figure-8 shape with its head hidden beneath its body. It rarely attacks unless severely threatened.",
            "notice": [
                "Contains two neurotoxins (α- and β-bungarotoxin) that specifically block ACh receptor cation channels in skeletal muscle endplates, causing muscle relaxation. Victims may not feel pain and become drowsy. Mild poisoning causes local paralysis; if toxins affect neuromuscular junctions, they block nerve conduction, preventing muscle contraction and leading to respiratory paralysis. Effects may appear in 40 minutes to 2 hours or up to 24 hours. Can be treated with neurotoxic antivenom.",
                "Listed in the 'Catalogue of Terrestrial Wild Animals of Important Ecological, Scientific and Social Value' in 2023"
            ]
        },
        "wiki_url": "https://zh.wikipedia.org/zh-hans/%E9%8A%80%E7%92%B0%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Bungarus_multicinctus_2.jpg"
    },
    {
        "id":2 ,
        "scientific_name": "Chrysopelea ornate",
        "chinese": {
            "name": "金花蛇",
            "toxicity": "毒性较轻，对人类甚少造成重大威胁",
            "danger_level": "轻度危险",
            "distribution": "分布于云南贵州、浙江、江西、溯南福建、广东、海南岛、广西。国外分布于印度(阿萨姆)、缅甸、泰国、柬埔寨、老挝、越南、马来西亚，印度尼西亚。",
            "habitat": "树栖性蛇类，擅长攀爬树木",
            "behavior": "平日多于日间活动，主要捕食鼠类、鸟类及蜥蜴等。属卵生蛇类。",
            "notice": ["本种在我国已知数量甚少，大规模毁林造田，砍伐树木，其栖息环境日益减少，此蛇更难存活。"]
        },
        "english": {
            "name": "Chrysopelea ornate",
            "toxicity": "Mildly venomous, rarely poses significant threat to humans",
            "danger_level": "Low Risk",
            "distribution": "Distributed in Yunnan, Guizhou, Zhejiang, Jiangxi, Fujian, Guangdong, Hainan Island, Guangxi in China, and in India (Assam), Myanmar, Thailand, Cambodia, Laos, Vietnam, Malaysia, Indonesia",
            "habitat": "Arboreal snake, skilled at climbing trees",
            "behavior": "Mostly active during the day, primarily preys on rodents, birds, and lizards. Oviparous species.",
            "notice": ["Known to have very few individuals in China. Large-scale deforestation and habitat destruction make survival increasingly difficult for this species."]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E9%87%91%E8%8A%B1%E8%9B%87%E5%B1%AC",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Chrysopelea_ornata.jpg"
    },
    {
        "id":3 ,
        "scientific_name": "Dendrelaphis pictus",
        "chinese": {
            "name": "过树蛇",
            "toxicity": "无毒",
            "danger_level": "安全",
            "distribution": "中国分布于广东、海南、广西、云南；国外分布于印度及东南亚。",
            "habitat": "生活于平原或山区，海拔不超过500米，",
            "behavior": "常树栖生活，食蜥蜴或蛙。卵生，每次产5～8枚卵。",
            "notice": [
                "具有滋阴活血、祛风去湿功效，也是'三蛇酒'用料之一。",
                "过树蛇是国家'三有保护动物'，未经批准私自捕捉、饲养是违法的。"
            ]
        },
        "english": {
            "name": "Dendrelaphis pictus",
            "toxicity": "Non-venomous",
            "danger_level": "Safe",
            "distribution": "Distributed in Guangdong, Hainan, Guangxi, Yunnan in China; India and Southeast Asia",
            "habitat": "Lives in plains or mountains, at altitudes below 500 meters",
            "behavior": "Arboreal, feeds on lizards or frogs. Oviparous, lays 5-8 eggs at a time.",
            "notice": [
                "Has medicinal properties for nourishing yin, promoting blood circulation, and dispelling wind-dampness. Also used in 'Three Snake Wine'.",
                "Protected under China's 'Three Haves' conservation status. Unauthorized capture or keeping is illegal."
            ]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E8%BF%87%E6%A0%91%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Dendre_pict_080410-6996_tdp.jpg"
    },
    {
        "id":4 ,
        "scientific_name": "Elaphe dione",
        "chinese": {
            "name": "白条锦蛇",
            "toxicity": "无毒",
            "danger_level": "安全",
            "distribution": "中国国内分布于秦岭至淮河以北各省区，国外分布于俄罗斯西伯利亚，朝鲜",
            "habitat": "栖息于平原、丘陵、山地。常绿阔叶林或落叶阔叶林下、草原、湿地、荒漠、田野、坟堆、路边、沼泽都曾发现",
            "behavior": "食物鼠、鸟及鸟蛋，可能也吃鱼、蛙、蜥蜴。白条锦蛇主要白天活动，性格非常温顺，即便被捕捉也极少有攻击行为",
            "notice": [
                "白条锦蛇是国家'三有保护动物'，未经批准私自捕捉、饲养是违法的",
                "白条锦蛇是鼠类的天敌。同时还具有一定的观赏价值"
            ]
        },
        "english": {
            "name": "Elaphe dione",
            "toxicity": "Non-venomous",
            "danger_level": "Safe",
            "distribution": "Distributed north of the Qinling-Huaihe line in China, Siberia in Russia, and Korea",
            "habitat": "Inhabits plains, hills, and mountains. Found in evergreen broad-leaved forests, deciduous broad-leaved forests, grasslands, wetlands, deserts, fields, graveyards, roadsides, and swamps",
            "behavior": "Feeds on rodents, birds, and bird eggs, may also eat fish, frogs, and lizards. Mainly diurnal, very docile temperament, rarely shows aggression even when captured",
            "notice": [
                "Protected under China's 'Three Haves' conservation status. Unauthorized capture or keeping is illegal.",
                "Natural predator of rodents. Also has ornamental value."
            ]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E7%99%BD%E6%9D%A1%E9%94%A6%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Elaphe_dione.JPG"
    },
    {
        "id":5 ,
        "scientific_name": "Naja atra",
        "chinese": {
            "name": "舟山眼镜蛇",
            "toxicity": "毒性强烈",
            "danger_level": "极度危险",
            "distribution": "分布于中国大陆南部、台湾和越南北部的中低海拔地区",
            "habitat": "常见于农田、灌丛、溪边等地",
            "behavior": "多于白昼活动，捕食蛙类、蜥蜴、蛇类、鸟类、鱼类等，但遇到天气较为闷热的时候，会改在黄昏活动",
            "notice": [
                "常用抗眼镜蛇毒血清治疗",
                "毒液里含有神经毒素，会破坏受害者的神经系统，受害者会因呼吸困难或心跳减弱而死亡"
            ]
        },
        "english": {
            "name": "Naja atra",
            "toxicity": "Highly venomous",
            "danger_level": "Extreme Risk",
            "distribution": "Distributed in southern mainland China, Taiwan, and northern Vietnam at low to medium altitudes",
            "habitat": "Commonly found in farmlands, shrubs, and near streams",
            "behavior": "Mostly active during the day, preys on frogs, lizards, snakes, birds, fish, etc. During hot and stuffy weather, becomes active at dusk",
            "notice": [
                "Treated with antivenom specific to cobras",
                "Venom contains neurotoxins that damage the victim's nervous system, leading to death from respiratory failure or weakened heartbeat"
            ]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E4%B8%AD%E8%8F%AF%E7%9C%BC%E9%8F%A1%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Naja_atra_%2803%29.jpg"
    },
    {
        "id":6 ,
        "scientific_name": "Ophiophagus Hannah",
        "chinese": {
            "name": "眼镜王蛇",
            "toxicity": "高毒性",
            "danger_level": "高度危险",
            "distribution": "分布于喜马拉雅山脉南麓、印度东北部与西南沿海地区、中国华南、中南半岛全境与马来群岛近半数岛屿",
            "habitat": "主要栖息于树林中,草地、灌木林、空旷林地及树林里",
            "behavior": "一般而言，眼镜王蛇为日行性的狩猎者，主要在白天猎食，但它也能在晚上出动，以其他蛇为主食，当食物短缺时，眼镜王蛇还会吃蜥蜴、鸟等动物来充饥",
            "notice": [
                "虽然眼镜王蛇的外型很像近亲眼镜蛇，但它既不是眼镜蛇属、也不是王蛇属，而是独立的眼镜王蛇属",
                "现在有两种抗蛇毒血清用于对抗眼镜王蛇的毒素，国际红十学会组织于泰国生产其一；中央研究所于印度生产其二，但二者的产量都不算高。",
                "眼镜王蛇被列入《世界自然保护联盟（IUCN）濒危物种红色名录》ver3.1，等级为易危（VU）"
            ]
        },
        "english": {
            "name": "Ophiophagus Hannah",
            "toxicity": "Highly venomous",
            "danger_level": "High Risk",
            "distribution": "Distributed in the southern foothills of the Himalayas, northeastern and southwestern coastal areas of India, southern China, throughout Indochina, and nearly half the islands of the Malay Archipelago",
            "habitat": "Mainly inhabits forests, grasslands, shrublands, open woodlands, and woods",
            "behavior": "Generally diurnal hunter, primarily hunting during the day, but can also be active at night. Feeds mainly on other snakes; when food is scarce, also eats lizards and birds.",
            "notice": [
                "Although resembling cobras, it belongs to its own genus Ophiophagus, not Naja (cobras) or Lampropeltis (kingsnakes).",
                "Two antivenoms are available: one produced by the Thai Red Cross Society and another by the Central Research Institute in India, but both have limited production.",
                "Listed as Vulnerable (VU) on the IUCN Red List of Threatened Species"
            ]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/98/Ophiophagus-hannah-kaeng-krachan-national-park.jpg"
    },
    {
        "id":7 ,
        "scientific_name": "Protobothrops mucrosquamatus",
        "chinese": {
            "name": "龟壳花（原矛头蝮）",
            "toxicity": "高毒性",
            "danger_level": "高度危险",
            "distribution": "中国长江以南大部分省区均有分布，南岭地区尤为常见。中国以外分布于印度、孟加拉国、缅甸、越南、老挝",
            "habitat": "栖息于海拔2200米以下的平原、丘陵和山区。常见于地势较平坦的竹林、茶山和溪边，也到居民耕作地、住宅附近的草丛、垃圾堆、柴草、石缝间活动，甚至进入室内。",
            "behavior": "喜爱捕食家鼠，也吃鸟、蛙、蛇及昆虫。主要在傍晚和夜间活动，白天偶见。夜间见时，原矛头蝮通常将身体的大部分隐藏在树丛或草丛中，只露出身体前半部分等待捕食机会，或者在岸边或早地缓慢移动，不会主动攻击人，受到惊扰时逃跑速度较慢，或作卷曲状自卫。",
            "notice": [
                "列入《世界自然保护联盟濒危物种红色名录》（IUCN 2011年 ver 3.1）——无危（LC）",
                "出血毒素引起的损伤出现速度较快，往往来不及施以抗毒血清治疗，这种病变会引起蛇伤病人肢体坏死，有时不得不截肢。"
            ]
        },
        "english": {
            "name": "Protobothrops mucrosquamatus",
            "toxicity": "Highly venomous",
            "danger_level": "High Risk",
            "distribution": "Distributed in most provinces south of the Yangtze River in China, especially common in the Nanling area. Also in India, Bangladesh, Myanmar, Vietnam, Laos.",
            "habitat": "Inhabits plains, hills, and mountains below 2200m altitude. Common in bamboo forests, tea plantations, and streamsides; also found in farmland, residential areas, grass, garbage dumps, firewood piles, rock crevices, and even indoors.",
            "behavior": "Prefers hunting house mice, also eats birds, frogs, snakes, and insects. Mainly active at dusk and night, occasionally seen during daytime. At night, often hides most of its body in bushes or grass, exposing only the front part to ambush prey, or moves slowly along shores or dry land. Not aggressive toward humans; when disturbed, escapes slowly or coils defensively.",
            "notice": [
                "Listed as Least Concern (LC) on the IUCN Red List (2011 ver 3.1)",
                "Hemorrhagic toxins cause rapid tissue damage, often too fast for antivenom treatment. This can lead to limb necrosis and sometimes amputation."
            ]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E9%BE%9C%E6%AE%BC%E8%8A%B1",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/40/Trimeresurus_mucrosquamatus_Taiwan.jpg"
    },
    {
        "id":8 ,
        "scientific_name": "Psammodynastes pulverulentus",
        "chinese": {
            "name": "紫沙蛇",
            "toxicity": "弱毒性",
            "danger_level": "轻度危险",
            "distribution": "分布于亚洲东南部",
            "habitat": "常栖息于平原或低海拔山区的沼泽、湿地或灌丛。",
            "behavior": "昼夜都会活动。生性凶猛，捕食蜥蜴、蛙类等，有时甚至会捕食其他蛇类。",
            "notice": ["其毒牙长在上颌骨的后端，咬人时不易被毒牙伤及人体，蛇毒相对较轻，被咬伤后较少出现全身中毒症状"]
        },
        "english": {
            "name": "Psammodynastes pulverulentus",
            "toxicity": "Weakly venomous",
            "danger_level": "Low Risk",
            "distribution": "Distributed in Southeast Asia",
            "habitat": "Often inhabits swamps, wetlands, or shrubs in plains or low-altitude mountainous areas",
            "behavior": "Active both day and night. Fierce temperament, preys on lizards, frogs, and sometimes other snakes.",
            "notice": ["Its fangs are located at the rear of the upper jaw, making it difficult to inject venom when biting humans. Venom is relatively mild; systemic symptoms are rare after bites."]
        },
        "wiki_url": "https://zh.wikipedia.org/zh-hans/%E7%B4%AB%E6%B2%99%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/08/Psammodynastes_pulverulentus%2C_Common_mock_viper_-_Tha_Yang_District%2C_Phetchaburi_%2827997141896%29.jpg"
    },
    {
        "id":9 ,
        "scientific_name": "Rhabdophis subminiatus",
        "chinese": {
            "name": "红脖颈槽蛇",
            "toxicity": "通常不易造成中毒",
            "danger_level": "轻度危险，毒牙短，且毒腺不发达，分泌量少，咬人时很难用毒牙咬到人体，除非被咬物被深深纳入口内，否则难以触及利牙",
            "distribution": "分布于缅甸、泰国、柬埔寨、老挝、越南、印度、锡金、马来西亚、印度尼西亚以及中国大陆的福建、广东、香港、海南、广西、四川、贵州、云南等地",
            "habitat": "水稻田、缓流及池塘中",
            "behavior": "白天活动，多发现于农耕区的水沟附近，主要以蛙类为食",
            "notice": ["列入《世界自然保护联盟濒危物种红色名录》(IUCN)2019年ver3.1——无危(LC)"]
        },
        "english": {
            "name": "Rhabdophis subminiatus",
            "toxicity": "Usually not causing poisoning",
            "danger_level": "Low Risk: short fangs, underdeveloped venom glands, low secretion. Difficult to envenomate humans unless deeply bitten.",
            "distribution": "Distributed in Myanmar, Thailand, Cambodia, Laos, Vietnam, India, Sikkim, Malaysia, Indonesia, and Fujian, Guangdong, Hong Kong, Hainan, Guangxi, Sichuan, Guizhou, Yunnan in mainland China",
            "habitat": "Rice fields, slow streams, and ponds",
            "behavior": "Diurnal, often found near ditches in agricultural areas, mainly feeds on frogs",
            "notice": ["Listed as Least Concern (LC) on the IUCN Red List (2019 ver 3.1)"]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E7%BA%A2%E8%84%96%E9%A2%88%E6%A7%BD%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Rhabdop_submin_080217-4693_ipb.jpg"
    },
    {
        "id":10 ,
        "scientific_name": "Rhabdophis tigrinus",
        "chinese": {
            "name": "虎斑颈槽蛇",
            "toxicity": "毒性轻微，毒液可诱发弥散性血管内凝血 (DIC)，导致牙龈出血、血尿、瘀斑和持续出血等症状。",
            "danger_level": "轻度危险",
            "distribution": "分布十分广泛，河北、山西、内蒙古、江苏、福建、广西、陕西、四川等地均有分布",
            "habitat": "喜欢潮湿的环境，栖息在近水的山地、丘陵和平原，如河流、稻田和湿地，日间活动为主，行动迅速。",
            "behavior": "主要以无尾两栖动物为食，幼蛇也会在水中捕食蛙类的蝌蚪,此外，也会偶尔捕食鼠、鱼、鸟类等。",
            "notice": ["虎斑颈槽蛇被列入中国《国家保护的有益的或者有重要经济、科学研究价值的陆生野生动物名录》"]
        },
        "english": {
            "name": "Rhabdophis tigrinus",
            "toxicity": "Mildly venomous; venom can induce disseminated intravascular coagulation (DIC), causing symptoms like gum bleeding, hematuria, ecchymosis, and persistent bleeding.",
            "danger_level": "Low Risk",
            "distribution": "Widely distributed in Hebei, Shanxi, Inner Mongolia, Jiangsu, Fujian, Guangxi, Shaanxi, Sichuan, and other regions",
            "habitat": "Prefers humid environments, inhabits mountains, hills, and plains near water, such as rivers, rice fields, and wetlands. Mainly diurnal, moves quickly.",
            "behavior": "Mainly feeds on anurans; juveniles also eat frog tadpoles in water. Occasionally preys on rodents, fish, and birds.",
            "notice": ["Listed in China's 'National Directory of Beneficial or Economically and Scientifically Important Terrestrial Wild Animals'"]
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E8%99%8E%E6%96%91%E9%A2%88%E6%A7%BD%E8%9B%87",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/47/Rhabdophis_tigrinus_IMG_6559.retouch.JPG"
    },
    {
        "id":11 ,
        "scientific_name": "Trimeresurus stejnegeri",
        "chinese": {
            "name": "赤尾青竹丝",
            "toxicity": "毒性较弱,毒液中含有出血性毒素，被咬的伤口会肿痛、发痒、瘀血或起水泡。",
            "danger_level": "轻度危险",
            "distribution": "赤尾青竹丝广泛分布在全国各地，数量极为普遍。",
            "habitat": "栖地形态极为广泛，由低海拔次生林到2,000多米山区的各类型环境皆能发现到它的踪迹。",
            "behavior": "白天夜晚均会活动，但以夜间活动较为频繁。通常以蛙类、蜥蜴、鸟类、老鼠及鼩鼱为食，其中又以蛙类为主。",
            "notice": []
        },
        "english": {
            "name": "Trimeresurus stejnegeri",
            "toxicity": "Weakly venomous; venom contains hemorrhagic toxins, causing swelling, pain, itching, bruising, or blisters at the bite site.",
            "danger_level": "Low Risk",
            "distribution": "Widely distributed throughout China, extremely common.",
            "habitat": "Extremely broad habitat range, found from low-altitude secondary forests to mountainous areas over 2000m.",
            "behavior": "Active both day and night, but more frequent at night. Feeds mainly on frogs, also lizards, birds, mice, and shrews.",
            "notice": []
        },
        "wiki_url": "https://zh.wikipedia.org/wiki/%E8%B5%A4%E5%B0%BE%E9%9D%92%E7%AB%B9%E7%B5%B2",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Trimeresurus_stejnegeri.jpg"
    }
];

// 翻译文本
const translations = {
    chinese: {
        pageTitle: "蛇类图鉴百科全书",
        pageSubtitle: "探索蛇类世界的奥秘 - 收录12种珍稀蛇类详细信息，包括毒性、分布区域、生活习性及保护状况",
        searchPlaceholder: "搜索蛇类名称...",
        statSpecies: "蛇类物种",
        statVenomous: "有毒蛇种",
        statProtected: "保护物种",
        toxicityTitle: "毒性信息",
        dangerLevelLabel: "危险级别:",
        distributionTitle: "分布区域",
        habitatTitle: "栖息环境",
        behaviorTitle: "行为特征",
        noticeTitle: "注意事项",
        encyclopediaTitle: "百科资料",
        viewFullLabel: "查看完整资料",
        footerText: "© 2025 蛇类图鉴百科全书  | 资料来源于维基百科"
    },
    english: {
        pageTitle: "Snake Encyclopedia",
        pageSubtitle: "Explore the world of snakes - Detailed information on 12 rare snake species, including toxicity, distribution, habits, and conservation status",
        searchPlaceholder: "Search snake name...",
        statSpecies: "Species",
        statVenomous: "Venomous",
        statProtected: "Protected",
        toxicityTitle: "Toxicity",
        dangerLevelLabel: "Danger Level:",
        distributionTitle: "Distribution",
        habitatTitle: "Habitat",
        behaviorTitle: "Behavior",
        noticeTitle: "Precautions",
        encyclopediaTitle: "Encyclopedia",
        viewFullLabel: "View Full Info",
        footerText: "© 2025 Snake Encyclopedia | Data from Wikipedia"
    }
};

// 当前语言
let currentLanguage = 'chinese';

// 获取DOM元素
const snakeGrid = document.getElementById('snakeGrid');
const searchInput = document.getElementById('searchInput');
const detailPage = document.getElementById('detailPage');
const closeDetail = document.getElementById('closeDetail');
const detailName = document.getElementById('detailName');
const detailScientific = document.getElementById('detailScientific');
const detailImage = document.getElementById('detailImage');
const detailToxicity = document.getElementById('detailToxicity');
const detailDanger = document.getElementById('detailDanger');
const detailDistribution = document.getElementById('detailDistribution');
const detailHabitat = document.getElementById('detailHabitat');
const detailBehavior = document.getElementById('detailBehavior');
const detailNotice = document.getElementById('detailNotice');
const wikiLink = document.getElementById('wikiLink');

// 渲染蛇类卡片
function renderSnakeCards(snakesToRender) {
    snakeGrid.innerHTML = '';

    snakesToRender.forEach(snake => {
        const snakeData = snake[currentLanguage];

        // 确定毒性类别
        let toxicityClass = 'non-toxic';
        if (snakeData.danger_level.includes('高度') || snakeData.danger_level.includes('极度') ||
            snakeData.danger_level.includes('High') || snakeData.danger_level.includes('Extreme')) {
            toxicityClass = 'toxic';
        } else if (snakeData.danger_level.includes('轻度') || snakeData.danger_level.includes('Low')) {
            toxicityClass = 'low-toxic';
        }

        const snakeCard = document.createElement('div');
        snakeCard.className = 'snake-card';
        snakeCard.innerHTML = `
                    <div class="snake-image">
                        <img src="${snake.image_url}" alt="${snakeData.name}">
                    </div>
                    <div class="snake-info">
                        <h3 class="snake-name">${snakeData.name}</h3>
                        <p class="snake-scientific">${snake.scientific_name}</p>
                        <div class="toxicity ${toxicityClass}">
                            ${snakeData.danger_level}
                        </div>
                    </div>
                `;

        snakeCard.addEventListener('click', () => showSnakeDetail(snake));
        snakeGrid.appendChild(snakeCard);
    });
}

// 显示蛇类详情
function showSnakeDetail(snake) {
    const snakeData = snake[currentLanguage];

    // 设置毒性类别
    let dangerClass = '';
    if (snakeData.danger_level.includes('高度') || snakeData.danger_level.includes('极度') ||
        snakeData.danger_level.includes('High') || snakeData.danger_level.includes('Extreme')) {
        dangerClass = 'dangerous';
    } else if (snakeData.danger_level.includes('轻度') || snakeData.danger_level.includes('Low')) {
        dangerClass = 'low-toxic';
    } else {
        dangerClass = 'non-toxic';
    }

    detailName.textContent = snakeData.name;
    detailScientific.textContent = snake.scientific_name;
    detailImage.src = snake.image_url;
    detailToxicity.textContent = snakeData.toxicity;
    detailDanger.textContent = snakeData.danger_level;
    detailDanger.className = dangerClass;
    detailDistribution.textContent = snakeData.distribution;
    detailHabitat.textContent = snakeData.habitat;
    detailBehavior.textContent = snakeData.behavior;
    wikiLink.href = snake.wiki_url;

    // 清空注意事项
    detailNotice.innerHTML = '';

    // 添加注意事项
    snakeData.notice.forEach(notice => {
        const li = document.createElement('li');
        li.textContent = notice;
        detailNotice.appendChild(li);
    });

    // 显示详情页
    detailPage.style.display = 'block';
}

// 关闭详情页
closeDetail.addEventListener('click', () => {
    detailPage.style.display = 'none';
});

// 搜索功能
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        renderSnakeCards(snakes);
        return;
    }

    const filteredSnakes = snakes.filter(snake => {
        const cnName = snake.chinese.name.toLowerCase();
        const enName = snake.english.name.toLowerCase();
        const sciName = snake.scientific_name.toLowerCase();

        return cnName.includes(searchTerm) ||
            enName.includes(searchTerm) ||
            sciName.includes(searchTerm);
    });

    renderSnakeCards(filteredSnakes);
});

// 更新页面文本
function updatePageText() {
    const langData = translations[currentLanguage];

    document.getElementById('pageTitle').textContent = langData.pageTitle;
    document.getElementById('pageSubtitle').textContent = langData.pageSubtitle;
    document.getElementById('searchInput').placeholder = langData.searchPlaceholder;
    document.getElementById('statSpecies').textContent = langData.statSpecies;
    document.getElementById('statVenomous').textContent = langData.statVenomous;
    document.getElementById('statProtected').textContent = langData.statProtected;
    document.getElementById('toxicityTitle').textContent = langData.toxicityTitle;
    document.getElementById('dangerLevelLabel').textContent = langData.dangerLevelLabel;
    document.getElementById('distributionTitle').textContent = langData.distributionTitle;
    document.getElementById('habitatTitle').textContent = langData.habitatTitle;
    document.getElementById('behaviorTitle').textContent = langData.behaviorTitle;
    document.getElementById('noticeTitle').textContent = langData.noticeTitle;
    document.getElementById('encyclopediaTitle').textContent = langData.encyclopediaTitle;
    document.getElementById('viewFullLabel').textContent = langData.viewFullLabel;
    document.getElementById('footerText').textContent = langData.footerText;
}

// 语言切换
document.getElementById('langZh').addEventListener('click', () => {
    currentLanguage = 'chinese';
    document.getElementById('langZh').classList.add('active');
    document.getElementById('langEn').classList.remove('active');
    updatePageText();
    renderSnakeCards(snakes);
});

document.getElementById('langEn').addEventListener('click', () => {
    currentLanguage = 'english';
    document.getElementById('langEn').classList.add('active');
    document.getElementById('langZh').classList.remove('active');
    updatePageText();
    renderSnakeCards(snakes);
});

// 初始化页面
window.addEventListener('load', () => {
    renderSnakeCards(snakes);
    updatePageText();
});