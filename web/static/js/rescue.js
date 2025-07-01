const translations = {
    zh: {
        title: "中国蛇伤急救指南",
        subtitle: "Chinese Snakebite First Aid Guide",
        stat1: "中国每年蛇伤病例数",
        stat2: "医学重要毒蛇种类",
        stat3: "蛇伤高发期",
        stat4: "发生在发展中国家",
        emergencyText: "紧急求助：拨打120",
        section1Title: "现场急救措施",
        step1Title: "脱离危险区域",
        step1Desc: "立即远离发生咬伤的区域，避免二次咬伤。水中被蛇咬伤者应立即转移到岸边。",
        step2Title: "认蛇",
        step2Desc: "尽量记住蛇的基本特征（形态、头型、体纹和颜色），但不要企图捕杀毒蛇。",
        step3Title: "保持镇定",
        step3Desc: "紧张恐慌会加速血液循环，促进毒素吸收。保持冷静，部分蛇咬伤是\"干咬\"（未排毒）。",
        step4Title: "立即呼救",
        step4Desc: "及时呼叫120或当地急救电话，快速送往有蛇伤救治能力的医院。",
        section2Title: "禁止措施",
        warningText: "蛇咬伤急救应避免以下措施，遵循\"不伤害、不延误\"原则",
        doNotTitle: "❌ 禁止操作：",
        prohibition1: "徒手触碰看似死亡的毒蛇",
        prohibition2: "等待症状发作以确定是否中毒",
        prohibition3: "使用止血带结扎",
        prohibition4: "用力切割伤口或企图用嘴吸出毒素",
        prohibition5: "冰敷或将伤口浸入水中",
        prohibition6: "饮酒止痛或喝咖啡饮料",
        prohibition7: "用烧灼等方法处理伤口",
        section3Title: "中国常见毒蛇类型",
        snakeType1: "神经毒性毒蛇",
        snake1: "银环蛇",
        snake2: "金环蛇",
        snake3: "眼镜蛇",
        snake4: "海蛇",
        snakeType2: "血液毒性毒蛇",
        snake5: "竹叶青蛇",
        snake6: "蝮蛇",
        snake7: "尖吻蝮蛇",
        snake8: "原矛头蝮蛇",
        snakeType3: "细胞毒性毒蛇",
        snake9: "中华眼镜蛇",
        snake10: "眼镜王蛇",
        section4Title: "抗蛇毒血清使用原则",
        principleTitle: "\"尽早足量、及时追加、同种专一、异种联合\"",
        principle1Title: "尽早足量",
        principle1Desc: "抗蛇毒血清启用时间早晚与预后直接相关，局部或全身进展性中毒表现就是可靠指征",
        principle2Title: "及时追加",
        principle2Desc: "中毒症状持续恶化是追加用药的指标，间隔时间约6-8小时",
        principle3Title: "同种专一",
        principle3Desc: "使用针对特定毒蛇的特异性抗蛇毒血清（如银环蛇、眼镜蛇等）",
        principle4Title: "异种联合",
        principle4Desc: "对无特异性抗蛇毒血清的毒蛇咬伤，联合使用同类或相似毒性的抗蛇毒血清",
        footer1Title: "指南来源",
        footer1Item1: "中华医学会急诊医学分会",
        footer1Item2: "国家急诊病控中心",
        footer1Item3: "中国医师协会急诊医师分会",
        footer1Item4: "《中华急诊医学杂志》2024年7月",
        footer2Title: "重要提醒",
        footer2Item1: "本指南不能替代专业医疗救治",
        footer2Item2: "所有蛇咬伤患者应尽快就医",
        footer2Item3: "无症状者至少留观24小时",
        footer3Title: "紧急联系电话",
        footer3Item1: "急救电话: 120",
        footer3Item2: "中毒控制中心: 当地电话号码",
        footer3Item3: "蛇伤专科医院咨询电话",
        copyright: "© 2025 中国蛇伤救治指南 - 仅作个人用途 | 实际救治请遵循医疗专业人员指导"
    },
    en: {
        title: "Chinese Snakebite First Aid Guide",
        subtitle: "Official Medical Guidelines for Snakebite Management",
        stat1: "Annual snakebite cases in China",
        stat2: "Medically important venomous snakes",
        stat3: "High-risk months for snakebites",
        stat4: "Occur in developing countries",
        emergencyText: "Emergency: Call 120",
        section1Title: "On-site First Aid Measures",
        step1Title: "Leave the danger area",
        step1Desc: "Immediately move away from the bite area to avoid secondary bites. If bitten in water, move to shore immediately.",
        step2Title: "Identify the snake",
        step2Desc: "Try to remember the snake's basic features (shape, head, patterns, color), but do not attempt to kill it.",
        step3Title: "Stay calm",
        step3Desc: "Panic accelerates blood circulation and toxin absorption. Remain calm as some bites are \"dry bites\" (no venom injected).",
        step4Title: "Call for help immediately",
        step4Desc: "Call 120 or local emergency services immediately for transport to a snakebite treatment facility.",
        section2Title: "Prohibited Actions",
        warningText: "Avoid these actions during snakebite first aid: \"Do no harm, do not delay\"",
        doNotTitle: "❌ Do NOT:",
        prohibition1: "Handle apparently dead snakes with bare hands",
        prohibition2: "Wait for symptoms to determine envenomation",
        prohibition3: "Apply tourniquets",
        prohibition4: "Cut the wound or attempt to suck out venom",
        prohibition5: "Apply ice or immerse the wound in water",
        prohibition6: "Consume alcohol or caffeinated drinks for pain relief",
        prohibition7: "Burn or cauterize the wound",
        section3Title: "Common Venomous Snakes in China",
        snakeType1: "Neurotoxic Snakes",
        snake1: "Many-banded krait",
        snake2: "Banded krait",
        snake3: "Chinese cobra",
        snake4: "Sea snake",
        snakeType2: "Hemotoxic Snakes",
        snake5: "Bamboo pit viper",
        snake6: "Pallas's pit viper",
        snake7: "Sharp-nosed pit viper",
        snake8: "Protobothrops mucrosquamatus",
        snakeType3: "Cytotoxic Snakes",
        snake9: "Chinese cobra",
        snake10: "King cobra",
        section4Title: "Antivenom Usage Principles",
        principleTitle: "\"Early adequate dose, timely supplementation, specific type, combined types\"",
        principle1Title: "Early adequate dose",
        principle1Desc: "Time to antivenom administration directly affects prognosis. Progressive local or systemic envenomation is a reliable indicator.",
        principle2Title: "Timely supplementation",
        principle2Desc: "Supplement when symptoms continue worsening. Typical interval is 6-8 hours.",
        principle3Title: "Specific type",
        principle3Desc: "Use antivenom specific to the snake species (e.g., for Bungarus multicinctus, Naja atra).",
        principle4Title: "Combined types",
        principle4Desc: "For bites from snakes without specific antivenom, use combination of antivenoms with similar toxicity profiles.",
        footer1Title: "Guideline Source",
        footer1Item1: "Emergency Medicine Branch, CMA",
        footer1Item2: "National Emergency Control Center",
        footer1Item3: "Emergency Physician Branch, CMDA",
        footer1Item4: "Chinese Journal of Emergency Medicine, July 2024",
        footer2Title: "Important Reminders",
        footer2Item1: "This guide does not replace professional medical care",
        footer2Item2: "All snakebite victims should seek medical attention immediately",
        footer2Item3: "Observe asymptomatic patients for at least 24 hours",
        footer3Title: "Emergency Contacts",
        footer3Item1: "Emergency: 120",
        footer3Item2: "Poison Control Center: Local number",
        footer3Item3: "Snakebite specialist hospital hotline",
        copyright: "© 2025 Chinese Snakebite Management Guidelines - For personal purposes only | Always follow professional medical advice"
    }
};

// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 设置默认语言
    let currentLang = localStorage.getItem('language') || 'zh';

    // 更新页面语言
    function updateLanguage(lang) {
        // 更新所有翻译文本
        Object.keys(translations[lang]).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translations[lang][key];
            }
        });

        // 更新按钮状态
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 更新html lang属性
        document.documentElement.lang = lang;

        // 存储语言选择
        localStorage.setItem('language', lang);
    }

    // 初始化语言
    updateLanguage(currentLang);

    // 绑定语言切换按钮事件
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });

    // 紧急求助按钮功能
    document.getElementById('emergencyBtn').addEventListener('click', function() {
        alert(currentLang === 'zh' ?
            "紧急求助：正在模拟拨打120急救电话..." :
            "Emergency: Simulating call to 120 emergency number...");
    });
});