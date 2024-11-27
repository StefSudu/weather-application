import '../StyleSheets/weatherCard.css'
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from 'react';

export default function WeatherCard({info, isLoading}) {
    const [hot, setHot ] = useState(true);

    useEffect(() => {
        var averageSum = 0;

        for (let i = 0; i < 6; i++) {
            averageSum += info[2][i] + info[3][i];
        }
        setHot(averageSum/6);
    }, [hot, info])

    return (
        <>
            {isLoading ? 
                <ClipLoader
                    color="ffffff"
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> : 
                <div className="weatherCardContainer">
                    <div className="weatherDataCountry">
                    <p>{info[0]}
                        {hot > 19 ? <p>Hot</p> : <p>Cold</p>}
                    </p>
                    </div>
                    <div className="weatherDataSmallerContainer">
                        <div className="weatherDataTitles">
                            <p>date</p>
                            <p>low</p>
                            <p>high</p>
                        </div>
                        <div className="weatherDataInfo">
                            <div className="weatherDataDate">
                                {info[1].map((d) => 
                                    <p id={d.id}>{d.slice(5)}</p>
                                )}
                            </div>
                            <div className="weatherDataMinTemp">
                                {info[2].map((minT) => 
                                    <p id={minT.id}>{minT}</p>)
                                }
                            </div>
                            <div className="weatherDataMaxTemp">
                                {info[3].map((maxT) => 
                                    <p id={maxT.id}>{maxT}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div> 
            }
        </>
    )
}