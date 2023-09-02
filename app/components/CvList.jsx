
import { deleteCv, getCvs } from '@/libs/apiCalls'



const CvList =async  () => {


  const { cvs } = await getCvs()

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this cv? ')) deleteCv()
  }

  return (
    <div>
      LIST
      {cvs.map(cv => (
        <div key={cv._id}>
          <p>{cv.name}</p>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      ))}
    </div>
  )
}

export default CvList