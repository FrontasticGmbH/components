import { useState } from 'react'

export const useLevel = (l = 0) => {
    const [level, setLevel] = useState(l)
    return [level, setLevel]
}

export const useCurrentTopCategory = (c = 0) => {
    const [currentTopCategory, setCurrentTopCategory] = useState(c)
    return [currentTopCategory, setCurrentTopCategory]
}

export const useNavPath = (np = []) => {
    const [navPath, setNavPath] = useState(np)
    return [navPath, setNavPath]
}
