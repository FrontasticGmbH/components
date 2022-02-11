import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import useComponentSize from '@frontastic/catwalk/src/js/helper/hooks/useIsomorphicComponentSize'
import MediaApi from '@frontastic/common/src/js/mediaApi'
import Cloudinary from '@frontastic/common/src/js/mediaApi/cloudinary'

import MediaImage from '@frontastic/catwalk/src/js/mediaImage'
import {Project} from '@frontastic/common/src/js/types/replicator'

interface Props {
    image: any
}

interface RootState {
    app: {
        context: {
            project: Project
        }
    }
}

export default function FgImage({ image }: Props) {
    const projectConf = useSelector((state) => {
        return (state as RootState).app.context.project.configuration
    })
    const fgImgRef = useRef(null)
    const mediaApi = new Cloudinary(projectConf.media)
    const fgImgUrl = (fgImage, fgImgRef) => {
        const fgImgSize = useComponentSize(fgImgRef)
        return mediaApi.getImageUrl(fgImage.media, null, fgImgSize.height, {})
    }

    return (
        <>
            {image && image.media && (
                <figure
                    className='flex-1 h-32 w-full bg-no-repeat bg-contain bg-center mt-6'
                    ref={fgImgRef}
                    style={{
                        backgroundImage: `url(${fgImgUrl(image, fgImgRef)})`,
                    }}
                ></figure>
            )}
        </>
    )
}
