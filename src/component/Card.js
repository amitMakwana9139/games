import React from 'react'

function Card() {
    return (
        <div
            className="relative h-[22em] w-[20em] border-[3px] border-[rgba(147,0,255,0.8)] rounded-[1.5em] bg-gradient-to-br from-[rgba(147,0,255,0.5)] to-[rgba(0,0,0,0.8)] text-white font-nunito p-[1em] flex flex-col justify-between gap-[1em] shadow-[0_0_20px_rgba(147,0,255,0.5)] transition-transform hover:scale-[1.05] duration-300"
        >
            {/* Card Overlay for Glow Effect */}
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] rounded-[1.5em] pointer-events-none"></div>

            {/* Game Image Section */}
            <div className="relative w-full h-[8em] overflow-hidden rounded-[1em] border-[2px] border-[rgba(147,0,255,0.8)] shadow-[0_0_15px_rgba(147,0,255,0.6)]">
                <img
                    src="/images/game/countfight.webp"
                    alt="Game Image"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Card Content */}
            <div className="relative">
                <h1 className="text-[1.8em] font-bold text-[rgba(255,255,255,0.9)] tracking-wide drop-shadow-[0_0_10px_rgba(147,0,255,0.8)]">
                    Game Card
                </h1>
                <p className="text-[0.9em] text-[rgba(255,255,255,0.75)] leading-relaxed">
                    Unlock the next level with this special power-up card. Enhance your abilities and conquer the game!
                </p>
            </div>

            {/* Button with Game UI Effects */}
            <button
                className="relative h-fit w-fit px-[1.2em] py-[0.5em] border-[2px] border-[rgba(147,0,255,0.8)] rounded-full flex justify-center items-center gap-[0.5em] bg-[rgba(147,0,255,0.2)] hover:bg-[rgba(147,0,255,0.5)] shadow-[0_0_10px_rgba(147,0,255,0.6)] hover:translate-y-[2px] duration-300"
            >
                <p className="text-white text-[1em] font-semibold">Activate</p>
                <svg
                    className="w-6 h-6 text-white group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    ></path>
                </svg>
            </button>
        </div>
    )
}

export default Card