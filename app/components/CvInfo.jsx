
import { useState } from "react"
import ErrorMsg from "./ErrorMsg"

const CvfInfo = ({ pdfFile }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [id, setId] = useState(null)
    const [linkedin, setLinkedin] = useState(null)

    return (
            pdfFile && (
                <section className='flex justify-between my-6 items-center'>
                    <p>Name: {name ? name : <ErrorMsg>Missing Name</ErrorMsg>}</p>
                    <p>Email: {email ? email : <ErrorMsg>Missing Email</ErrorMsg>}</p>
                    <p>Phone: {phone ? phone : <ErrorMsg>Missing Phone</ErrorMsg>}</p>
                    <p>Id: {id ? id : <ErrorMsg>Missing Id</ErrorMsg>}</p>
                    <p>Linkedin: {linkedin ? linkedin : <ErrorMsg>Missing Linkedin</ErrorMsg>}</p>
                </section>
                )
            


    )
}

export default CvfInfo