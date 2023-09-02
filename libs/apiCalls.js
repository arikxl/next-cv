const END_POINT ='http://localhost:3000/api/cv'

export const getCvs = async () => {
    try {
        const res = await fetch(END_POINT, {
            cache: 'no-store'
        });
        return res.json()
    } catch (error) {
        console.error(error);
    }
}

export const deleteCv = async () => {
    try {
        const res = await fetch(END_POINT, {
            cache: 'no-store'
        });
        return res.json()
    } catch (error) {
        console.error(error);
    }
}