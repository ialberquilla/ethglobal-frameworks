import Link from "next/link"
import { useState } from "react"
import { AddCondition } from "../modals/addCondition"

export function Configure({
  setStep,
  setErc20Conditions,
  setNftConditions,
  erc20Conditions,
  nftConditions,
  setMainImage,
  setConditionImage,
  setElseImage,
  setFrameName
}: {
  setStep: (step: number) => void,
  setErc20Conditions: any,
  setNftConditions: any,
  erc20Conditions: string[],
  nftConditions: string[],
  setMainImage: any,
  setConditionImage: any,
  setElseImage: any,
  setFrameName: any
}) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        switch (type) {
          case "main":
            setMainImage(imageData);
            break;
          case "condition":
            setConditionImage(imageData);
            break;
          case "else":
            setElseImage(imageData);
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="container mx-auto px-4 md:px-6 py-8">
      <Link className="text-blue-500 hover:underline" href="#" onClick={() => setStep(0)}>
        {`< Go back`}
      </Link>
      <div className="mt-8" />
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Frame name</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
            id="discountPrice"
            type="text"
            onChange={(e) => setFrameName(e.target.value)}
          />
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Main</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="imageUpload">
              Upload Image
            </label>
            <input
              className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
              id="imageUpload"
              type="file"
              onChange={(e) => handleImageUpload(e, "main")}
            />
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Conditions</h2>
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="imageUploadElse">
            Upload Image
          </label>
          <input
            className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
            id="imageUploadElse"
            type="file"
            onChange={(e) => handleImageUpload(e, "condition")}
          />
        </div>
        <label className="block text-lg font-semibold mb-2 pt-4" htmlFor="imageUploadElse">
          User must hold one of this
        </label>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-2">
            <label className="block text-lg font-semibold mb-2" htmlFor="imageUploadElse">Add condition</label>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(true)}>+</button>
          </div>
        </div>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
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
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Else</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="imageUploadElse">
              Upload Image
            </label>
            <input
              className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-800"
              id="imageUploadElse"
              type="file"
              onChange={(e) => handleImageUpload(e, "else")}
            />
          </div>
        </div>
      </section>
      <button onClick={() => setStep(2)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        Next
      </button>
      <AddCondition
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setErc20Conditions={setErc20Conditions}
        erc20Conditions={erc20Conditions}
        nftConditions={nftConditions}
        setNftConditions={setNftConditions} />
    </main>
  )
}
