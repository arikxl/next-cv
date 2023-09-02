
import { deleteCv, getCvs } from '@/libs/apiCalls'
import { useEffect, useState } from 'react'



const CvList =  () => {

  const [cvs, setCvs] = useState(null);

  useEffect(() => {
    getCvs()
      .then((data) => {
        setCvs(data.cvs);
      })
      .catch((error) => {
        console.error(error);
      });
  },[])


  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this cv? ')) deleteCv()
  }

  return (
    <div>
      LIST
      {cvs?.map(cv => (
        <div key={cv._id} className='border flex justify-between'>
          <p>{cv.name}</p>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      ))}
    </div>
  )
}

export default CvList