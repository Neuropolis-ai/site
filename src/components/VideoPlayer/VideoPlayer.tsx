'use client'
import { useRef, useState } from 'react'
import { BsPlayFill } from 'react-icons/bs'

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlayVideo = () => {
        if (videoRef.current) {
            if (!isPlaying) {
                videoRef.current.play()
                setIsPlaying(true)
            } else {
                videoRef.current.pause()
                setIsPlaying(false)
            }
        }
    }

    return (
        <div
            className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[900px] mx-auto mt-[60px] sm:mt-[80px] md:mt-[100px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[475px] border border-[#262626] rounded-[12px] relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video
                ref={videoRef}
                src="/assets/video/video-player.mp4"
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-[12px]"
            ></video>

            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                    onClick={handlePlayVideo}
                >
                    <div className="flex items-center justify-center bg-black/70 rounded-full p-4 transition-all duration-500 ease-in-out" style={{
                        paddingRight: isHovered ? '2.5rem' : '1rem',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}>
                        <BsPlayFill className="text-white text-3xl transition-transform duration-300" />
                        <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{
                            maxWidth: isHovered ? '200px' : '0',
                            opacity: isHovered ? 1 : 0
                        }}>
                            <span className="text-white font-medium ml-2 whitespace-nowrap">Как мы работаем</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VideoPlayer
