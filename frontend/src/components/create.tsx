import { useState } from "react"
import { Header } from "./header"

import { Select } from "./createFrame/select"
import { Configure } from "./createFrame/configure"
import { Pricing } from "./createFrame/pricing"
import { Review } from "./createFrame/review"


export function Create() {
    const [step, setStep] = useState(0)
    const [erc20Conditions, setErc20Conditions] = useState([])
    const [nftConditions, setNFTConditions] = useState([])
    const [mainImage, setMainImage] = useState(null)
    const [conditionImage, setConditionImage] = useState(null)
    const [elseImage, setElseImage] = useState(null)
    const [frameName, setFrameName] = useState("")
    const [assetConditionPrice, setAssetConditionPrice] = useState(0)
    const [assetElsePrice, setAssetElsePrice] = useState(0)
    const [assetCondition, setAssetCondition] = useState("")
    const [assetElse, setAssetElse] = useState("")
    const [discount, setDiscount] = useState(0)


    return (
        <section className="w-full bg-white">
            <Header />
            {step === 0 && <Select setStep={setStep} />}
            {step === 1 && <Configure setStep={setStep}
                setErc20Conditions={setErc20Conditions}
                setNftConditions={setNFTConditions}
                erc20Conditions={erc20Conditions}
                nftConditions={nftConditions}
                setMainImage={setMainImage}
                setConditionImage={setConditionImage}
                setElseImage={setElseImage}
                setFrameName={setFrameName}
            />}
            {step === 2 && <Pricing setStep={setStep}
                setAssetConditionPrice={setAssetConditionPrice}
                setElsePrice={setAssetElsePrice}
                setAssetCondition={setAssetCondition}
                setAssetElse={setAssetElse}
                setDiscount={setDiscount}
            />}
            {step === 3 && <Review setStep={setStep}
                mainImage={mainImage}
                conditionImage={conditionImage}
                elseImage={elseImage}
                assetConditionPrice={assetConditionPrice}
                assetElsePrice={assetElsePrice}
                assetCondition={assetCondition}
                assetElse={assetElse}
                erc20Conditions={erc20Conditions}
                nftConditions={nftConditions}
                frameName={frameName}
                discount={discount}
            />}
        </section>
    )
}
