import { QUEST_OBJECT_CONTRACT_ADDRESS } from "../../lib/config"
import Example from "./Example"

export default async function Page() {
  return (
    <div>
      <h3>spritesheet</h3>
      <Example contract={QUEST_OBJECT_CONTRACT_ADDRESS} tokenId={BigInt(100201)} />
    </div>
  )
}
