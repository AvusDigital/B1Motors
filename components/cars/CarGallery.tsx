'use client'

import { useState } from 'react'
import Image from 'next/image'

type CarGalleryProps = {
  images: string[]
  model: string
}

export default function CarGallery({ images, model }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || '')

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 h-[470px]">
        <Image
          src={selectedImage}
          alt={model}
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] transition duration-300"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-4">
        {images?.map((image, index) => {
          const isActive = selectedImage === image

          return (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden rounded-xl border transition h-24 ${
                isActive
                  ? 'border-red-500 shadow-[0_0_18px_rgba(220,38,38,0.18)]'
                  : 'border-white/10 hover:border-red-500/40'
              }`}
            >
              <Image
                src={image}
                alt={`${model} ${index + 1}`}
                fill
                sizes="25vw"
                className="object-cover object-[center_30%]"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}