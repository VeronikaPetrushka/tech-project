import Filter from "../../components/Filters/Filters";
import CampersList from "../../components/CampersList/CampersList";
import css from './CataloguePage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import { selectCampers } from "../../redux/selectors";
import { useState, useEffect } from "react";

const CataloguePage = () => {

    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedEquipment, setSelectedEquipment] = useState({
        airConditioner: false,
        transmission: false,
        kitchen: false,
        TV: false,
        shower: false,
    });
    const [filteredCampers, setFilteredCampers] = useState([]);

    useEffect(() => {
      dispatch(fetchCampers())
    }, [dispatch]);

    useEffect(() => {
        setFilteredCampers(campers);
    }, [campers])

    const handleLocationChange = (location) => {
        setSelectedLocation(location)
    };

    const handleEquipmentChange = (equipment) => {
        setSelectedEquipment(prevEquipment => ({
            ...prevEquipment,
            ...equipment
        }));
    };

  const handleSearch = () => {
    const filtered = campers.filter(camper => {
      const locationMatches = selectedLocation ? camper.location === selectedLocation : true;

      const equipmentMatches = Object.keys(selectedEquipment).every(key => {
        if (!selectedEquipment[key]) return true;
        if (key === 'transmission') return camper.transmission === 'automatic';
        return camper.details[key] === 1;
      });

      return locationMatches && equipmentMatches;
    });

    setFilteredCampers(filtered);
  };

    const locations = [...new
        Set(campers.map(camper => camper.location))
    ];

    return (
        <div className={css.page}>
            <Filter
                locations={locations}
                onLocationChange={handleLocationChange}
                onEquipmentChange={handleEquipmentChange}
                onSearch={handleSearch}
            />
            <CampersList filteredCampers={filteredCampers} />
        </div>
    )
}

export default CataloguePage;