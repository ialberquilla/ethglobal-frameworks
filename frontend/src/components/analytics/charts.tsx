import BarChart from "./bar";
import PieChart from "./pie";

export function Charts() {

    return (
        <main className="container mx-auto px-8 md:px-14 py-14 bg-white min-h-screen">
            <section className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div style={{ height: '400px', width: '400px' }}>
                        <PieChart />
                    </div>
                    <div>
                        <BarChart />
                    </div>
                </div>
            </section>
        </main>
    )
}
