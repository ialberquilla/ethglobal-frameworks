import { useState } from "react";

export function AddProtocolCondition({ isOpen, setIsOpen, protocolConditions, setProtocolConditions }:
    {
        isOpen: boolean,
        setIsOpen: (isOpen: boolean) => void
        setProtocolConditions: any,
        protocolConditions: any,
    }) {

    const [type, setType] = useState("Deposit")
    const [protocol, setProtocol] = useState("Aave")
    const [blockchain, setBlockchain] = useState("Polygon")

    const saveAndClose = () => {
        setProtocolConditions([...protocolConditions, { blockchain, protocol, type }])
        setIsOpen(false)
    }
    return (
        <div>
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    Add token condition
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                    </p>
                                    <form>
                                        <div>
                                            <label htmlFor="selectField" className="block text-sm font-medium text-gray-700">
                                                Select Blockchain
                                            </label>
                                            <select
                                                onChange={(event) => setBlockchain((event.target as HTMLSelectElement).value)}
                                                id="selectField" name="selectField" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                                <option >Polygon</option>
                                                <option>Ethereum</option>
                                                <option >Zora</option>
                                            </select>
                                            <label htmlFor="selectField" className="block text-sm font-medium text-gray-700">
                                                Select activity type
                                            </label>
                                            <select
                                                onChange={(event) => setType((event.target as HTMLSelectElement).value)}
                                                id="selectField" name="selectField" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                                <option >Deposit</option>
                                                <option >Swap</option>
                                            </select>
                                            <label htmlFor="selectField" className="block text-sm font-medium text-gray-700">
                                                Select activity type
                                            </label>
                                            <select
                                                onChange={(event) => setProtocol((event.target as HTMLSelectElement).value)}
                                                id="selectField" name="selectField" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                                <option >Aave</option>
                                                <option >Uniswap</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={() => setIsOpen(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Close
                                </button>
                                <button onClick={() => saveAndClose()} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}