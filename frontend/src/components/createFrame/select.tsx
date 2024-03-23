
export function Select({ setStep }: { setStep: (step: number) => void }) {
    return (
      <main className="container mx-auto px-8 md:px-14 py-14">
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Select your template</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Select the type of frame you want to build. Each frame will allow users to take different actions
              </p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/buy.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
                onClick={() => setStep(1)}
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Buy Frame</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This frame allows users to purchase an NFT or token directly from Farcaster
              </p>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/stake.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Staking Frame</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This frame allows users to stake a fixed amount on a protocol without leaving Farcaster
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }
  