import { Application, Resource, Texture } from "pixi.js"
import { ASSET_SERVER_URL } from "../lib/config"
import { getSpritesheets } from "./helper"

export default class Engine {
  app: Application
  assets: { [contract_tokenId: string]: Texture<Resource> }

  constructor() {
    this.app = new Application({ width: 200, height: 200, backgroundAlpha: 0 })
    this.app.loader.baseUrl = ASSET_SERVER_URL
    this.assets = {}
  }

  async loadAssets() {
    const spritesheets = await getSpritesheets()
    return new Promise((resolve, reject) => {
      spritesheets.forEach((spritesheet) => this.app.loader.add(spritesheet))
      this.app.loader.load((_, resources) => (spritesheets.forEach((spritesheet) => (this.assets = { ...this.assets, ...resources[spritesheet].textures }))))
      this.app.loader.onComplete.add(resolve)
      this.app.loader.onError.add(reject)
    })
  }

  start() {
    document.body.appendChild(this.app.view)
  }

  stop() {
    document.body.removeChild(this.app.view)
  }
}
