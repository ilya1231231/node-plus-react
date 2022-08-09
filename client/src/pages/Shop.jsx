import React from "react"
import { useDispatch, useSelector } from 'react-redux';

const Shop = () => {
    const dispatch = useDispatch()

    const getAuth = () => {
        dispatch({type: 'MAKE_AUTH', payload: true})
    }
    const typeDevices = useSelector(state => state.typeDeviceReducer)

    const isAuth = useSelector(state => state.userReducer.isAuth)
    return(
        <div>
            {isAuth ? 'ПРОШУ К ТОВАРАМ' : 'ВЫ НЕ АВТОРИЗОВАНЫ'}
            <button onClick={() => getAuth()}>Нажми для авторизвации</button>
            { typeDevices 
                ? typeDevices.map((type) => {
                    <div>{type.name}</div>
                })
                : ''
            }
            <button>Нажми для получения типов</button>
        </div>
    )
}

export default Shop;