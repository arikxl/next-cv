
function viewer({ pdfFile }) {
    return (
        <section className='h-[80vh] mb-6 border-purple-600 border-2'>
            {pdfFile && (<embed src={pdfFile} className='w-full h-full'/>)}
        </section>
    )
}

export default viewer