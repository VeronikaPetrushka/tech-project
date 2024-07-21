import css from './FavoritePage.module.css';
// import Filter from '../../components/Filters/Filters';
import FavoriteList from '../../components/FavoriteList/FavoriteList';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { selectCampers } from '../../redux/selectors';
import { fetchCampers } from '../../redux/operations';
import DetailsModal from '../../components/Modal/Modal';

const FavoritePage = () => {

    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);

    // const [selectedLocation, setSelectedLocation] = useState("");
    // const [selectedEquipment, setSelectedEquipment] = useState({
    //     airConditioner: false,
    //     transmission: false,
    //     kitchen: false,
    //     TV: false,
    //     shower: false,
    // });
    // const [selectedType, setSelectedType] = useState({
    //     panelTruck: false,
    //     fullyIntegrated: false,
    //     alcove: false,
    // });
    const [filteredCampers, setFilteredCampers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCamper, setSelectedCamper] = useState(null);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    useEffect(() => {
        setFilteredCampers(campers);
    }, [campers]);

    // const handleLocationChange = (location) => {
    //     setSelectedLocation(location);
    // };

    // const handleEquipmentChange = (equipment) => {
    //     setSelectedEquipment(prevEquipment => ({
    //         ...prevEquipment,
    //         ...equipment
    //     }));
    // };

    // const handleTypeChange = (type) => {
    //     setSelectedType(prevType => ({
    //         ...prevType,
    //         ...type
    //     }));
    // };

    // const handleSearch = () => {
    //     const filtered = campers.filter(camper => {
    //         const locationMatches = selectedLocation ? camper.location === selectedLocation : true;

    //         const equipmentMatches = Object.keys(selectedEquipment).every(key => {
    //             if (!selectedEquipment[key]) return true;
    //             if (key === 'transmission') return camper.transmission === 'automatic';
    //             return camper.details[key] === 1;
    //         });

    //         const typeMatches = Object.keys(selectedType).some(key => selectedType[key] && camper.form === key);

    //         return locationMatches && equipmentMatches && typeMatches;
    //     });

    //     setFilteredCampers(filtered);
    // };

    // const locations = [...new Set(campers.map(camper => camper.location))];

    const handleOpenModal = (camper) => {
        setSelectedCamper(camper);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCamper(null);
    };

    const favoriteCampers = useMemo(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        return favorites.filter(fav => filteredCampers.some(camper => camper._id === fav._id));
    }, [filteredCampers]);

    return (
        <div className={css.page}>
            {/* <Filter
                locations={locations}
                onLocationChange={handleLocationChange}
                onEquipmentChange={handleEquipmentChange}
                onTypeChange={handleTypeChange}
                onSearch={handleSearch}
            /> */}
            <FavoriteList
                favorites={favoriteCampers}
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
    );
};

export default FavoritePage;
