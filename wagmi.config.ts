import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'
import { BASEPLATE_CONTRACT_ADDRESS, CLAIM_CONTRACT_ADDRESS, FREE_OBJECT_CONTRACT_ADDRESS, MAP_CONTRACT_ADDRESS, PREMIUM_OBJECT_CONTRACT_ADDRESS, QUEST_OBJECT_CONTRACT_ADDRESS, REGISTRY_CONTRACT_ADDRESS, SHOP_CONTRACT_ADDRESS, WALLPAPER_CONTRACT_ADDRESS } from './lib/config'
import { baseplateAbi, claimAbi, freeObjectAbi, mapAbi, premiumObjectAbi, questObjectAbi, registryAbi, shopAbi, wallpaperAbi } from './abis'

export default defineConfig(() => {
  return {
    out: 'hooks/generated-wagmi.ts',
    contracts: [
      {
        abi: questObjectAbi,
        name: 'Phi Quest Object',
        address: { [chains.polygon.id]: QUEST_OBJECT_CONTRACT_ADDRESS },
      },
      {
        abi: premiumObjectAbi,
        name: 'Phi Premium Object',
        address: { [chains.polygon.id]: PREMIUM_OBJECT_CONTRACT_ADDRESS },
      },
      {
        abi: freeObjectAbi,
        name: 'Phi Free Object',
        address: { [chains.polygon.id]: FREE_OBJECT_CONTRACT_ADDRESS },
      },
      {
        abi: wallpaperAbi,
        name: 'Phi Wallpaper',
        address: { [chains.polygon.id]: WALLPAPER_CONTRACT_ADDRESS },
      },
      {
        abi: baseplateAbi,
        name: 'Phi Baseplate',
        address: { [chains.polygon.id]: BASEPLATE_CONTRACT_ADDRESS },
      },
            {
        abi: claimAbi,
        name: 'Phi Claim',
        address: { [chains.polygon.id]: CLAIM_CONTRACT_ADDRESS },
      },
      {
        abi: shopAbi,
        name: 'Phi Shop',
        address: { [chains.polygon.id]: SHOP_CONTRACT_ADDRESS },
      },
      {
        abi: mapAbi,
        name: 'Phi Map',
        address: { [chains.polygon.id]: MAP_CONTRACT_ADDRESS },
      },
      {
        abi: registryAbi,
        name: 'Phi Registry',
        address: { [chains.polygon.id]: REGISTRY_CONTRACT_ADDRESS },
      },

    ],
    plugins: [react()],
  };
});
