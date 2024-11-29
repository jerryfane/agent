import { getGameState, getRecentMessages } from "@/actions";
import { Main } from "@/app/home/components/Main";

export default async function Page() {
  const messages = await getRecentMessages(undefined, 100);
  const gameState = await getGameState();
  console.log(gameState);
  return <Main messages={messages} gameState={gameState} />;
}
