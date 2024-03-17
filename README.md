## NEMTUS Hackathon 2024

### 📺 Explanation / 説明書き

- ～実社会における課題解決～

AI ChatBotとトークンやモザイクの送信統合を実現。AIエージェント増加を見据え、Web3ゲームでの営業を可能にし、稼いだ利益をコミュニティ経済圏へ還元し、クリエータに収益を分配するシステム構築を目指す。


### 🎯 To do at this time / 今回やったこと
①Token & Mozaic
AI Agentにトークンやモザイクを送信することができる

②API & LAnchin 
XYMの現在の価格、トランザクションの情報、商品の情報などを聞くことができる

③VOICEVOX
いろんな声優さんの声でテキストを読み上げてくれる

 [Web アプリ](https://nextjs-ai-agents-5yhp0apkc-jun0908.vercel.app/)

 [Slide / スライド](https://www.canva.com/design/DAF7ojdua6E/8ErNYUTUAMa48AcUEhxCbA/edit?utm_content=DAF7ojdua6E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

 [Movie in Loom/ 紹介動画 Loom](https://www.loom.com/share/6d470c31cb374f7f94587d5b7be31d77?sid=c83495ec-9e79-43f2-96cd-7337bb9681b0)
  

### 🔵 How to excute / 実行方法
- APIの取得
  
  ①OPEN_WEATHER_API_KEY
  [https://platform.openai.com/api-keys](https://hibi-update.org/other/openweathermap-api/)
  
  ②OPENAI
  https://platform.openai.com/api-keys
  
  ③NEMTUS_PRIVATE_KEY
  https://zenn.dev/nemtus/articles/blockchain-symbol-react-1st-symbol-sdk

  ④VOICEVOX_URL
  http://127.0.0.1:50021

- Dockerの起動
```bash
docker-compose up
```

- フロントエンドの起動
```bash
# Clone the repository
git clone https://github.com/Jun0908/nextjs-ai-agents

# Change to the project directory
cd nextjs-ai-agents

# Install library
npm install 

# Start the development server
npm run dev
```
