import { QUEST_OBJECT_CONTRACT_ADDRESS } from "../lib/config"

export default async function Page() {
  return (
    <div>
      <h3>Examples</h3>
      <ul>
        <li><a href={`/images/${QUEST_OBJECT_CONTRACT_ADDRESS}/${100504}`}>object image</a></li>
        <li><a href="/spritesheet">spritesheet</a></li>
        <li><a href="/buy-shop-object">buy shop object</a></li>
      </ul>
    </div>
  )
}
