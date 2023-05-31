import { ASSET_SERVER_URL } from "../lib/config"
import { ObjectContract } from "../lib/types"

export function objectImage(contract: ObjectContract, tokenId: bigint) {
  return `${ASSET_SERVER_URL}/images/${contract}/${tokenId.toString()}.png`
}

export async function getSpritesheets() {
  return await (await fetch(ASSET_SERVER_URL + "/api/spritesheets")).json() as string[]
}

export function objectImageBySpritesheet(contract: ObjectContract, tokenId: bigint) {
  return `${contract}_${tokenId.toString()}.png`
}
