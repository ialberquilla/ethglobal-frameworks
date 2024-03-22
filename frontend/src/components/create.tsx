import { useState } from "react"
import { Header } from "./header"

import { Select } from "./createFrame/select"

export function Create() {
  const [step, setStep] = useState(0)

  return (
    <section className="w-full bg-white">
      <Header />
      {step === 0 && <Select setStep={setStep} />}
    </section>
  )
}
