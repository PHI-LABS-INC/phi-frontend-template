'use client'

import { useEffect } from "react"
import { useAccount } from "wagmi"
import { Sprite } from "pixi.js"
import { ObjectContract } from "../../lib/types"
import { usePhiQuestObjectBalanceOf } from "../../hooks/generated-wagmi"
import useEngine from "../../hooks/useEngine"
import { objectImageBySpritesheet } from "../../pixels/helper"


export default function Example({ contract, tokenId }: { contract: ObjectContract, tokenId: bigint }) {
  const { address } = useAccount()
  const { data: balance } = usePhiQuestObjectBalanceOf({ args: address ? [address, tokenId] : undefined })
  const engine = useEngine()

  useEffect(() => {
    if (!engine) return

    const object = Sprite.from(engine.assets[objectImageBySpritesheet(contract, tokenId)])
    object.anchor.set(0.5)
    object.x = engine.app.screen.width / 2
    object.y = engine.app.screen.height / 2
    engine.app.stage.addChild(object)
    if (balance) {
      engine.app.ticker.add(() => {
        object.rotation += 0.1
      })
    }
    return () => {
      engine.app.stage.removeChild(object)
    }
  }, [engine, balance])

  return <></>
}
