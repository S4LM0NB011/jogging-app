import React from 'react'
import useFirestore from '../hooks/useFirestore'

export const TripGrid = () => {
    const { docs } = useFirestore('trips');
    return (
        <div>
            
        </div>
    )
}
