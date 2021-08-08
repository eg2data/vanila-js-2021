const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "키케로",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다",
        author: "파울로 코엘료",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다",
        author: "켄러",
    },
    {
        quote: "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
        author: "헬렌켈러",
    },
    {
        quote: "행복한 삶을 살기 위해 필요한 것은 거의 없다",
        author: "마르쿠스 아우렐리우스 안토니우스",
    },
    {
        quote: "모든 인생은 실험이다 . 더 많이 실험할수록 더 나아진다",
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
        author: "스콧 핏제랄드",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author: "앙드레 말로",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
        author: "제임스 딘",
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
        author: "괴테",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote; // 배운 걸 또 적용하는 건 다른건가보다. 이렇게 했어야지~!
author.innerText = todaysQuote.author;


