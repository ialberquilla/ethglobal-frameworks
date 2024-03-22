import Link from "next/link"

export function Review(
  { setStep,
    mainImage,
    conditionImage,
    elseImage,
    assetConditionPrice,
    assetElsePrice,
    assetCondition,
    assetElse,
    erc20Conditions,
    nftConditions,
    frameName,
    discount
  }: {
    setStep: (step: number) => void,
    mainImage: any,
    conditionImage: any,
    elseImage: any,
    assetConditionPrice: any,
    assetElsePrice: any,
    assetCondition: any,
    assetElse: any,
    erc20Conditions: any[],
    nftConditions: any[],
    frameName: any,
    discount: any
  }) {

  return (
    <main className="container mx-auto px-4 md:px-6 py-8">
      <Link className="text-blue-500 hover:underline" href="#" onClick={() => setStep(2)}>
        {`< Go back`}
      </Link>
      <div className="mt-8" />
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Review your frame
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">Review your frame configuration and the conditions that user should meet</p>
          <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            <div
              className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
              <div className="data">
                <p className="font-semibold text-base leading-7 text-black mt-4">Frame name : <span className="text-gray-400 font-medium"> {frameName}</span></p>
              </div>
              <button onClick={() => setStep(3)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Create
              </button>
            </div>
            <div className="w-full px-3 min-[400px]:px-6">
              <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                <div className="img-box max-lg:w-full">
                  <img src={mainImage} alt="Premium Watch image"
                    className="aspect-square w-full lg:max-w-[140px]" />
                </div>
                <div className="flex flex-row items-center w-full ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                          Main page</h2>
                        <div className="flex items-center ">
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                        <div className="flex gap-3 lg:block">
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
                <div className="img-box max-lg:w-full">
                  <img src={conditionImage} alt="Diamond Watch image"
                    className="aspect-square w-full lg:max-w-[140px]" />
                </div>
                <div className="flex flex-row items-center w-full ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="font-semibold text-xl leading-8 text-black mb-3 ">
                          User meets condition</h2>
                        <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                          {assetCondition}</p>
                        <div className="flex items-center  ">
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">price</p>
                          <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">{assetConditionPrice} USDC</p>
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">Discount</p>
                          <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">{discount} USDC</p>
                        </div>
                      </div>
                      <div className="col-span-4 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div className="flex gap- lg:block">
                          <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                            Conditions</p>
                          {erc20Conditions.map((condition, index) => (
                            <li key={index} className="flex items-center">
                              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                              </svg>
                              {`One ${condition.address} ERC20 in ${condition.blockchain} blockchain`}
                            </li>
                          ))}
                          {nftConditions.map((condition, index) => (
                            <li key={index} className="flex items-center">
                              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                              </svg>
                              {`One ${condition.address} NFT in ${condition.blockchain} blockchain`}
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
                <div className="img-box max-lg:w-full">
                  <img src={elseImage} alt="Diamond Watch image"
                    className="aspect-square w-full lg:max-w-[140px]" />
                </div>
                <div className="flex flex-row items-center w-full ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="font-semibold text-xl leading-8 text-black mb-3 ">
                          User does not meets condition</h2>
                        <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                          {assetElse}</p>
                        <div className="flex items-center  ">
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">price</p>
                          <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">{assetElsePrice} USDC</p>
                        </div>
                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                        <div className="flex gap-3 lg:block">
                          <p className="font-medium text-sm leading-7 text-black">Discount</p>
                          <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">0 USDC</p>
                        </div>

                      </div>
                      <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                        <div className="flex gap-3 lg:block">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
