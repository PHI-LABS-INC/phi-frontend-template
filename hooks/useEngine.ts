import { useState, useEffect } from "react"
import Engine from "../pixels/Engine"

export default function useEngine() {
  const [engine, setEngine] = useState<Engine>()

  useEffect(() => {
    const e = new Engine()
    e.start();
    (async () => {
      await e.loadAssets()
      setEngine(e)
    })()
    return () => {
      e.stop()
    }
  }, [])

  return engine
}
