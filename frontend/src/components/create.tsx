import { useState } from "react"
import { Header } from "./header"

import { Select } from "./createFrame/select"
import { Configure } from "./createFrame/configure"


export function Create() {
  const [step, setStep] = useState(0)
  const [erc20Conditions, setErc20Conditions] = useState([])
  const [nftConditions, setNFTConditions] = useState([])
  const [mainImage, setMainImage] = useState(null)
  const [conditionImage, setConditionImage] = useState(null)
  const [elseImage, setElseImage] = useState(null)
  const [frameName, setFrameName] = useState("")

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
    </section>
  )
}
