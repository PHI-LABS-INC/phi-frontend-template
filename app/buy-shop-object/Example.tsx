'use client'

import { useAccount } from 'wagmi'
import { usePhiShopShopBuyObject, usePreparePhiShopShopBuyObject } from '../../hooks/generated-wagmi'

export default function Example() {
  const { address } = useAccount()
  const { config } = usePreparePhiShopShopBuyObject({
    args: address ? [address, [BigInt(100001)], [], [], []] : undefined,
    value: BigInt(0)
  })
  const { write, data, isLoading, isSuccess } = usePhiShopShopBuyObject(config)

  return (
    <div>
      <button disabled={!write} onClick={() => write?.()}>
        Buy
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
}
