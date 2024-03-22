
export function Select({ setStep }: { setStep: (step: number) => void }) {
    return (
      <main className="container mx-auto px-8 md:px-14 py-14">
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Select your template</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the top story. Click the link to read more.
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
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
                onClick={() => setStep(1)}
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Buy now</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the link to read more.
              </p>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Staking</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the link to read more.
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }
  