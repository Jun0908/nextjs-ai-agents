import Chat from "@/components/chat/Chat"
import Header from "@/components/header/header"
//import API from "@/components/header/TransactionComponent"

// メインページ
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 background-gradient">
      <Header />
      <Chat />

    </main>
  );
}

export default Home
