import { HyperText } from "./magicui/hyper-text";
import { NumberTicker } from "./magicui/number-ticker";

export default function StatsSection() {
    return (
        <div className="mx-auto max-w-5xl my-0 px-6 max-md:my-8">
            <div className="grid gap-3 *:text-start md:grid-cols-3">
                <div className="rounded-(--radius) space-y-4 border py-8 max-md:py-4 font-bold flex flex-row justify-center items-center gap-2">
                    <div className="text-6xl m-0 max-md:text-4xl">
                        <HyperText
                            animateOnHover={false}
                            // delay={2000}
                            duration={1500}>
                            Jr.
                        </HyperText>
                    </div>
                    <p className="text-lg">
                        Professional <br /> Level
                    </p>
                </div>
                <div className="rounded-(--radius) space-y-4 border py-8 max-md:py-4 font-bold flex flex-row justify-center items-center gap-2">
                    <div className="text-6xl m-0 max-md:text-4xl">
                        <NumberTicker value={10} />+
                    </div>
                    <p className="text-xl">
                        Projects <br /> Done
                    </p>
                </div>
                <div className="rounded-(--radius) space-y-4 border py-8 max-md:py-4 font-bold flex flex-row justify-center items-center gap-2">
                    <div className="text-6xl m-0 max-md:text-4xl">
                        <NumberTicker value={3} />+
                    </div>
                    <p className="text-xl">
                        Years Of <br /> Experience
                    </p>
                </div>
            </div>
        </div>
    );
}
