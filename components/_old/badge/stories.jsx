import React from 'react'

import Badge from '.'
import IconButton from '../button/IconButton'

import { ReactComponent as CartIcon } from '../../../tailwind-icons/icon-cart.svg'
import { ReactComponent as WishlistIcon } from '../../../tailwind-icons/icon-heart.svg'

export default {
    title: 'Badge',
}

export const cartIcon = () => {
    return (
        <Badge
            count={5}
            onClick={() => {
                return null
            }}
            >
            <IconButton icon={<CartIcon />} />
        </Badge>
    )
}

export const wishlistIcon = () => {
    return (
        <Badge
            count={5}
            onClick={() => {
                return null
            }}
            >
            <IconButton icon={<WishlistIcon />} />
        </Badge>
    )
}
