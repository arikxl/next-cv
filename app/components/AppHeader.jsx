import Link from "next/link"

const AppHeader = () => {
    return (
        <header className='mb-5 gap-6 text-white text-xl flex items-center justify-center py-4'>
            <Link href="https://www.linkedin.com/in/arik-alexandrov/"
                target='_blank' className='font-bold underline'>
                Arik Alexandrov
            </Link>
            <p>
                Home task for ngSoft
            </p>
        </header>
    )
}

export default AppHeader