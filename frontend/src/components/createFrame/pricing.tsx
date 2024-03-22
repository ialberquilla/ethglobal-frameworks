import Link from "next/link"

export function Pricing({
  setStep,
  setAssetConditionPrice,
  setElsePrice,
  setAssetCondition,
  setAssetElse,
  setDiscount
}: {
  setStep: (step: number) => void,
  setAssetConditionPrice: any,
  setElsePrice: any,
  setAssetCondition: any,
  setAssetElse: any,
  setDiscount: any
}) {


  return (
    <main className="container mx-auto px-4 md:px-6 py-8">
      <Link className="text-blue-500 hover:underline" href="#" onClick={() => setStep(1)}>
        {`< Go back`}
      </Link>
      <div className="mt-8" />
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Asset to be sold if conditions are met</h2>
        <label className="block text-lg font-semibold mb-2" htmlFor="imageUploadElse">
          Price
        </label>
        <input
          className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
          id="discountPrice"
          type="text"
          onChange={(e) => setAssetConditionPrice(e.target.value)}
        />
        <label className="block text-lg font-semibold mb-2" htmlFor="imageUploadElse">
          Discount
        </label>
        <input
          className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
          id="discountPrice"
          type="text"
          onChange={(e) => setDiscount(e.target.value)}
        />
        <label className="block text-lg font-semibold mb-2 pt-4" htmlFor="imageUploadElse">
          Token address
        </label>
        <input
          className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
          id="discountPrice"
          type="text"
          onChange={(e) => setAssetCondition(e.target.value)}
        />
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Asset to be sold if conditions are not met</h2>
        <label className="block text-lg font-semibold mb-2 pt-4" htmlFor="imageUploadElse">
          Price
        </label>
        <input
          className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
          id="discountPrice"
          type="text"
          onChange={(e) => setElsePrice(e.target.value)}
        />
        <label className="block text-lg font-semibold mb-2 pt-4" htmlFor="imageUploadElse">
          Token address
        </label>
        <input
          className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
          id="discountPrice"
          type="text"
          onChange={(e) => setAssetElse(e.target.value)}
        />
      </section>
      <button onClick={() => setStep(3)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        Next
      </button>
    </main>
  )
}
