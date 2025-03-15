import Image from "next/image";

const gameCategories = {
    "fifthRow": [
        { name: "Ludo king", image: "/images/game/ludo.jpg", game: "/games/ludo.html" },
        { name: "Train winner", image: "/images/game/train.avif", game: "/games/trainWinner.html" },
        { name: "Car Race", image: "/images/game/carRace.avif", game: "/games/carRace.html" },
        { name: "Color Sort", image: "/images/game/colorSort.jpg", game: "/games/colorSort.html" },
    ],
    "sixthRow": [
        { name: "Giant rush", image: "/images/game/giantRush.png", game: "/games/giantRush.html" },
        { name: "Snipper shot", image: "/images/game/snipper.png", game: "/games/snipperShot.html" },
        { name: "Cut the rope", image: "/images/game/cutTheRope.jpeg", game: "/games/cutRope.html" },
        { name: "Food rush", image: "/images/game/foodRush.webp", game: "/games/foodRush.html" },
    ],
    "Racing": [
        { name: "Moto", image: "/images/game/Moto.jpg", game: "/games/motox3.html" },
        { name: "Speed Boat", image: "/images/game/count.avif", game: "/games/speedBoat.html" },
        { name: "Sprint Club Nitro", image: "/images/game/SprintClubNitro.jpg", game: "/games/sprintClubNitro.html" },
        { name: "Uphill Racing", image: "/images/game/uphilracing.jpg", game: "/games/uphillRacing.html" }
    ],
    "Action": [
        { name: "Stickman", image: "/images/game/stickman.avif", game: "/games/stickman.html" },
        { name: "Jumpcat", image: "/images/game/jumpcat.webp", game: "/games/jumpcat.html" },
        { name: "Totemia", image: "/images/game/Totemi.jpg", game: "/games/totemia.html" },
        { name: "Om Nom Run", image: "/images/game/om-nom-run.png", game: "/games/omnomrun.html" },
    ],
    "Arcade": [
        { name: "Bubble Tower 3D", image: "/images/game/BubbleTower3dTeaser.jpg", game: "/games/bubbleTower.html" },
        { name: "Truck", image: "/images/game/Truck.jpg", game: "/games/endlessTruck.html" },
        { name: "Truck Trials", image: "/images/game/TruckTrials.jpg", game: "/games/trucksTrial.html" },
        { name: "Cannon Balls 3D", image: "/images/game/CannonBalls3d.jpg", game: "/games/canonBalls.html" },
    ],
    "Puzzle": [
        { name: "Bubble", image: "/images/game/bubble.jpg", game: "/games/bubble.html" },
        { name: "Element Blocks", image: "/images/game/ElementBlocks.jpg", game: "/games/elmentBlock.html" },
        { name: "One Connect Classic", image: "/images/game/OnetConnectClassicTeaser.jpg", game: "/games/classic.html" },
        { name: "Sort It Teaser", image: "/images/game/SortItTeaser.jpg", game: "/games/sortit.html" }
    ],
    "sevenRow": [
        { name: "Mining", image: "/images/game/idle-mining-empire.png", game: "/games/mining.html" },
        { name: "Cube Match", image: "/images/game/cubeMatch.png", game: "/games/cubeMatch.html" },
        { name: "Thief puzzle", image: "/images/game/thiefPuzzle.png", game: "/games/thiefPuzzle.html" },
        { name: "TowerFall html", image: "/images/game/towerFall.jpg", game: "/games/towerFall.html" },
    ],
    "eightRow": [
        { name: "Pipe puzzle", image: "/images/game/pipePuzzle.png", game: "/games/pipePuzzle.html" },
        { name: "Tower smash", image: "/images/game/towerSmash.png", game: "/games/towerSmash.html" },
        { name: "Peet sneak", image: "/images/game/peetLock.webp", game: "/games/peatSneek.html" },
        { name: "Pizza", image: "/images/game/pizzaPairUp.png", game: "/games/pizza.html" },
    ],
    "nineRow": [
        { name: "Slime road", image: "/images/game/slimeRoad.png", game: "/games/slimeRoad.html" },
        { name: "knife", image: "/images/game/knife.png", game: "/games/knife.html" },
        { name: "Fruit Cut", image: "/images/game/fruitCut.png", game: "/games/fruitCut.html" },
        // { name: "Pizza", image: "/images/game/pizzaPairUp.png", game: "/games/pizza.html" },
    ]
};

export default function GameCarousel() {
    return (
        <div className="p-6 min-h-screen text-white">
            <h2 className="text-3xl font-bold text-center mb-6 uppercase tracking-wider text-white ">
                Game Collection
            </h2>
            {Object.entries(gameCategories).map(([category, games]) => (
                <div key={category} className="mb-8">
                    {/* <h3 className="text-2xl font-semibold mb-4 text-center text-white">{category}</h3> 2xl:grid-cols-8*/}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6  gap-5">
                        {games.map((game, index) => (
                            <a
                                key={index}
                                href={game?.game}
                                // target="_blank"
                                rel="noopener noreferrer"
                                className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 border-2 border-transparent hover:border-white"
                            >
                                <Image
                                    src={game.image}
                                    alt={game.name}
                                    width={200}
                                    height={200}
                                    priority={index < 6}
                                    className="object-cover w-full h-full"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}