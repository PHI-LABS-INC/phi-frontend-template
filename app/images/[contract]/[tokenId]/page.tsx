import Image from "next/image"
import { ObjectContract } from "../../../../lib/types"
import { objectImage } from "../../../../pixels/helper"

export default async function Page({ params: { contract, tokenId } }: { params: { contract: ObjectContract, tokenId: bigint } }) {
  return (
    <div>
      <h3>object image</h3>
      <div>contract: <a href={`https://polygonscan.com/address/${contract}`} target="_blank" rel="noreferrer">{contract}</a></div>
      <div>tokenId: {tokenId.toString()}</div>
      <div style={{ position: "relative", width: "200px", height: "200px" }}>
        <Image
          src={objectImage(contract, tokenId)}
          fill={true}
          style={{ objectFit: "contain", imageRendering: "pixelated" }}
          alt={`object ${contract}/${tokenId}`}
        />
      </div>
    </div>
  )
}
