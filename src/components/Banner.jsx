import gsap from 'gsap';
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Container from './Container'

function Banner() {

    useGSAP(() => {
        const titleSplit = new SplitText(".title", { type: "words" });
        const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

        gsap.from(titleSplit.words, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        })
    }, [])

    return (
        <section className="bg-primary text-white px-0 py-16 text-center flex-center min-h-200">
            <Container>
                <h1 className='title uppercase font-bold mb-4 text-4xl md:text-5xl'>Hey I'm Willem April</h1>
                <p className='subtitle text-lg md:text-xl max-w-200 my-0 mx-auto text-secondary mb-4'>I am a passionate web developer who enjoys learning through building real-world projects. I’m constantly improving my skills while creating meaningful applications.</p>
                <div className="flex-center gap-4 pt-4 max-sm:flex-col">
                    <a href="/Willem_April.pdf" download>
                        <button className='inline-block px-8 sm:px-12 py-4 border border-accent rounded-lg font-medium text-base text-accent bg-transparent text-nowrap hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg'>Download CV</button>
                    </a>
                    <button className='inline-block px-8 sm:px-12 py-4 bg-accent hover:bg-amber-400 font-medium text-white transition-all duration-300 text-nowrap cursor-pointer text-base border-none rounded-lg hover:-translate-y-1 hover:shadow-lg'>View Projects</button>
                </div>
            </Container>
        </section>
    )
}

export default Banner