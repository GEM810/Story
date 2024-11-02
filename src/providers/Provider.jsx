import { useEffect } from 'react'
import { getCookie } from '../utils/helpers/cookie'

const Authorize = () => {
    useEffect(() => {
        const readCookie = async () => {
            const result = await getCookie('credential')
            console.log(result);

        }

        readCookie()
    }, [])
}
// eslint-disable-next-line react/prop-types
function Provider({children}) {
    return (
        <>
        <Authorize>{children}</Authorize>
        
        </>
    )
}

export default Provider