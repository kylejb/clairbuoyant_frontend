// src=medium.com/@zimrick

import React, { useState, useEffect } from "react"
import { geoEqualEarth, geoPath } from "d3-geo"
import { feature } from "topojson-client"

const buoys = [
  {name: "New York Harbor Entrance (44065)", coordinates: [-73.703, 40.369], population: 20000000 }
]

const projection = geoEqualEarth()
  .scale(160)
  .translate([ 800 / 2, 450 / 2 ])

const WorldMap = () => {
  const [geographies, setGeographies] = useState([])

  useEffect(() => {
    fetch("/world-110m.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          setGeographies(feature(worlddata, worlddata.objects.countries).features)
        })
      })
  }, [])

  const handleCountryClick = countryIndex => {
    console.log("Clicked on country: ", geographies[countryIndex])
  }

  const handleMarkerClick = i => {
    console.log("Marker: ", buoys[i])
  }

  return (
    <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
      <g className="countries">
        {
          geographies.map((d,i) => (
            <path
              key={ `path-${ i }` }
              d={ geoPath().projection(projection)(d) }
              className="country"
              fill={ `rgba(38,50,56,${ 1 / geographies.length * i})` }
              stroke="#FFFFFF"
              strokeWidth={ 0.5 }
              onClick={ () => handleCountryClick(i) }
            />
          ))
        }
      </g>
      <g className="markers">
        {
          buoys.map((city, i) => (
            <circle
              key={ `marker-${i}` }
              cx={ projection(city.coordinates)[0] }
              cy={ projection(city.coordinates)[1] }
              r={ city.population / 3000000 }
              fill="#E91E63"
              stroke="#FFFFFF"
              className="marker"
              onClick={ () => handleMarkerClick(i) }
            />
          ))
        }
      </g>
    </svg>
  )
}

export default WorldMap