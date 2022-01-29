import React from 'react'
import { Link } from "react-router-dom"
import WaterCycleImg from "../svg_img/watercycle.png"
import SolarSystemImg from "../svg_img/solarsyatem.jpeg"
import VolcanoImg from "../svg_img/volcano.jpeg"
import OlympusMonsImg from "../svg_img/olympusmons.jpeg"

export default function Explore() {
    return (
        <div className="bg-bgDark">

            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl text-white font-semibold tracking-wide lg:text-6xl">
                    Choose Topic
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-56"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">
                <Link to='/waterCycle'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 w-72 h-72 bg-white border-primary rounded-lg" alt="" src={WaterCycleImg} />
                            <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Water Cycle</div>
                        </div>
                    </div>
                </Link>

                <Link to='/solarSystem'>
                    <div className="m-8">
                        <div className="w-96 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-primary rounded-lg" alt="" src={SolarSystemImg} />
                            <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Solar System</div>
                        </div>
                    </div>
                </Link>

                <Link to='/volcano'>
                    <div className="m-8">
                        <div className="w-80 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-primary rounded-lg" alt="" src={VolcanoImg} />
                            <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Volcano</div>
                        </div>
                    </div>
                </Link>

                <Link to='/olympusMons'>
                    <div className="m-8">
                        <div className="w-80 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-primary rounded-lg" alt="" src={OlympusMonsImg} />
                            <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Olympus Mons</div>
                        </div>
                    </div>
                </Link>

                <div className="m-8">
                    <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-primary rounded-lg bg-gray-50">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">More topics comming soon..</div>
                    </div>
                </div>

            </div>
        </div >
    )
}