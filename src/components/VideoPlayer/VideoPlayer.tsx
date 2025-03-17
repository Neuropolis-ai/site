const VideoPlayer = () => {
    return (
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[900px] mx-auto mt-[60px] sm:mt-[80px] md:mt-[100px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[475px] border border-[#262626] rounded-[12px]">
            <video src="/assets/video/video-player.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover rounded-[12px]"></video>
        </div>
    )
}

export default VideoPlayer
