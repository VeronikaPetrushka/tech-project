import Filter from "../../components/Filters/Filters";
import CampersList from "../../components/CampersList/CampersList";
import css from './CataloguePage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import { selectCampers } from "../../redux/selectors";
import { useState, useEffect } from "react";
import DetailsModal from "../../components/Modal/Modal";

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
    const [selectedType, setSelectedType] = useState({
        panelTruck: false,
        fullyIntegrated: false,
        alcove: false,
    })
    const [filteredCampers, setFilteredCampers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCamper, setSelectedCamper] = useState(null);

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

    const handleTypeChange = (type) => {
        setSelectedType(prevType => ({
            ...prevType,
            ...type
            }));
    }

    const handleSearch = () => {
        const filtered = campers.filter(camper => {
            const locationMatches = selectedLocation ? camper.location === selectedLocation : true;

            const equipmentMatches = Object.keys(selectedEquipment).every(key => {
                if (!selectedEquipment[key]) return true;
                if (key === 'transmission') return camper.transmission === 'automatic';
                return camper.details[key] === 1;
            });

            const typeMatches = Object.keys(selectedType).every(key => {
                if (!selectedType[key]) return true;
                return camper.form === key;
            });

            return locationMatches && equipmentMatches && typeMatches;
        });

        setFilteredCampers(filtered);
    };


    const locations = [...new
        Set(campers.map(camper => camper.location))
    ];

    const handleOpenModal = (camper) => {
        setSelectedCamper(camper);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCamper(null);
    };

    return (
        <div className={css.page}>
            <Filter
                locations={locations}
                onLocationChange={handleLocationChange}
                onEquipmentChange={handleEquipmentChange}
                onTypeChange={handleTypeChange}
                onSearch={handleSearch}
            />
            <CampersList
                filteredCampers={filteredCampers}
                onShowMore={handleOpenModal}
            />
            {selectedCamper && (
                <DetailsModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    item={selectedCamper}
                />
      )}
        </div>
    )
}

export default CataloguePage;