import { Buy as BuyEvent } from "../generated/Marketplace/Marketplace"
import { Buy } from "../generated/schema"

export function handleBuy(event: BuyEvent): void {
  let entity = new Buy(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.buyer = event.params.buyer
  entity.asset = event.params.asset
  entity.discount = event.params.discount
  entity.price = event.params.price
  entity.frameId = event.params.frameId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
