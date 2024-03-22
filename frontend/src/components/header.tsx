import Link from "next/link"

export function Header() {
    return (
        <header className="bg-white text-zinc-900 py-4 border-b">
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    <div className="text-2xl font-bold">Frames builder</div>
                    <div className="space-x-4">
                        <Link className="text-zinc-900 hover:text-zinc-700" href="#">
                            My Frames
                        </Link>
                        <Link className="text-zinc-900 hover:text-zinc-700" href="#">
                            Analitics
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
