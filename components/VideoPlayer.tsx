"use client"

import { PlayIcon } from "lucide-react"
import { useRef, useState } from "react"

export default function VideoPlayer({ video_url }: { video_url: string }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)


    return (
        <div className="relative flex justify-center items-center cursor-pointer">
            {(!isHovered && !isPlaying) &&
                <div className="absolute bg-black p-4 rounded-full opacity-50">
                    <PlayIcon className="size-6" />
                </div>
            }
            <video
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                ref={videoRef}
                controls={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <source src={video_url} type="video/mp4" />
            </video>
        </div>
    )
}
