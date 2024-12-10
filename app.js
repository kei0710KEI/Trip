const locationSelect = document.getElementById("location");
const randomBtn = document.getElementById("random-btn");
const filterBtn = document.getElementById("filter-btn");
const dartBtn = document.getElementById("dart-btn");
const filterOptions = document.getElementById("filter-options");
const resultSection = document.getElementById("result");
const prefImage = document.getElementById("pref-image");
const prefInfo = document.getElementById("pref-info");
const distanceInfo = document.getElementById("distance");


const PREFECTURES = [
    { name: "北海道", image: "hokkaido.jpg", info: "広大な自然と美味しい海鮮が魅力。" },
    { name: "青森県", image: "aomori.jpg", info: "りんごとねぶた祭りが有名です。" },
    { name: "岩手県", image: "iwate.jpg", info: "美しい海岸線と歴史的な観光地があります。" },
    { name: "宮城県", image: "miyagi.jpg", info: "仙台の牛タンと松島の絶景が魅力。" },
    { name: "秋田県", image: "akita.jpg", info: "なまはげと秋田犬で有名です。" },
    { name: "山形県", image: "yamagata.jpg", info: "さくらんぼと温泉地が人気です。" },
    { name: "福島県", image: "fukushima.jpg", info: "自然豊かで歴史的なスポットがあります。" },
    { name: "東京都", image: "tokyo.jpg", info: "日本の首都で、活気あふれる大都市です。" },
    { name: "大阪府", image: "osaka.jpg", info: "たこ焼きやお好み焼きなど粉ものグルメが名物。" },
    { name: "京都府", image: "kyoto.jpg", info: "歴史的な寺社と伝統文化が息づく街です。" },
    { name: "沖縄県", image: "okinawa.jpg", info: "美しいビーチと独特の文化があります。" },
    // 省略せずに47都道府県を全て追加
];


// 現在位置とランダム選択時のイベント
randomBtn.addEventListener("click", () => {
    dartBtn.style.display = "inline-block";
    filterOptions.style.display = "none";
});

// フィルター選択
filterBtn.addEventListener("click", () => {
    filterOptions.style.display = "block";
    dartBtn.style.display = "inline-block";
});

// ダーツを投げる
dartBtn.addEventListener("click", () => {
    const selectedPref = PREFECTURES[Math.floor(Math.random() * PREFECTURES.length)];
    displayResult(selectedPref);
});

// 結果表示関数
function displayResult(pref) {
    prefImage.src = `images/${pref.image}`;
    prefInfo.textContent = `${pref.name}: ${pref.info}`;
    distanceInfo.textContent = "距離: 500km (例)"; // 距離計算は本格的に実装可能

    resultSection.style.display = "block";
}
