import React from 'react'

import Modal from '../Mobile/Modal'
import { useLevel, useCurrentTopCategory, useNavPath } from '../mainMenuState'

import topCategories from './topCategories'

export default {
    title: 'Main Menu',
}

export const MobileNavigationModal = () => {
    const [level, setLevel] = useLevel(0)
    const [currentTopCategory, setCurrentTopCategory] = useCurrentTopCategory(0)
    const [navPath, setNavPath] = useNavPath([])

    return (
        <Modal
            isOpen
            level={level}
            topCategories={topCategories}
            currentTopCategory={currentTopCategory}
            handleSelectTopCategory={(categoryId) => {
                setLevel(0)
                setNavPath([])
                setCurrentTopCategory(categoryId)
            }}
            handleSelectNavItem={(item, toLevel) => {
                setLevel(toLevel + 1)
                setNavPath([...navPath, item])
            }}
            handleGoBack={() => {
                setLevel(level - 1)
                setNavPath(navPath.slice(0, -1))
            }}
            navPath={navPath}
        />
    )
}
