import { clearSummaryUI } from './js/lib/summary/clearSummaryUI';
import { fetchTravelWeatherSummaryData } from './js/lib/summary/fetchTravelWeatherSummaryData';
import { updateSummaryUI } from './js/lib/summary/updateSummaryUI';
import { createWeatherSummaryElements } from './js/lib/summary/createWeatherSummaryElements';
import { updateWeatherSummary } from './js/lib/summary/updateWeatherSummary';


import { clearDetailUI } from './js/lib/detail/clearDetailUI';
import { fetchTravelWeatherDetailData } from './js/lib/detail/fetchTravelWeatherDetailData';
import { updateDetailUI } from './js/lib/detail/updateDetailUI';
import { createWeatherDetailElements } from './js/lib/detail/createWeatherDetailElements';
import { updateWeatherDetail } from './js/lib/detail/updateWeatherDetail';

import { changeEndDatePicker } from './js/lib/misc/changeEndDatePicker';
import { enableLocationImageModal,disableLocationImageModal } from './js/lib/misc/locationImageModalBehavior';
import { clearLocationImageUI} from './js/lib/locationImage/clearLocationImageUI';
import { createErrorElement } from './js/lib/error/createErrorElement';
import { createLocationImageElements} from './js/lib/locationImage/createLocationImageElements';
import { fetchCountryImage } from './js/lib/locationImage/fetchCountryImage';
import { fetchLocationImage } from './js/lib/locationImage/fetchLocationImage';
import { scrollTopArrow, stickyHeaderSection } from './js/lib/misc/topArrowBehavior';
import { updateErrorUI } from './js/lib/error/updateErrorUI';
import { updateLocationImage } from './js/lib/locationImage/updateLocationImage';
import { updateLocationImageUI } from './js/lib/locationImage/updateLocationImageUI';


import { clearUI } from './js/lib/misc/clearUI';
import { clearErrorUI } from './js/lib/error/clearErrorUI';
import { calculateDateDiffDays } from './js/lib/misc/calculateDateDiffDays';
import { getTravelData } from './js/lib/misc/getTravelData';
import { setDatePickerValue } from './js/lib/misc/setDatePickerValue';
import { showWeatherSummary } from './js/lib/summary/showWeatherSummary';

import { clearSaveTripUI } from './js/lib/trip/clearSaveTripUI';
import { createSaveTripElement } from './js/lib/trip/createSaveTripElement';
import { deleteSavedTrip } from './js/lib/trip/deleteSavedTrip';
import { getTripData } from './js/lib/trip/getTripData';
import { loadTripData } from './js/lib/trip/loadTripData';
import { postTripData } from './js/lib/trip/postTripData';
import { updateSaveTripUI } from './js/lib/trip/updateSaveTripUI';
import { saveTrip } from './js/lib/trip/saveTrip';
import { removeSavedTrip } from './js/lib/trip/removeSavedTrip';

import { showNavigationModal } from './js/lib/navigationBurger/showNavigationModal';
import { hideNavigationModal } from './js/lib/navigationBurger/hideNavigationModal';

//SCSS Styling
import './styles/base/base.scss';
import './styles/user-section/error-section.scss';
import './styles/form-section/form-section.scss';
import './styles/header-section/header-section.scss';
import './styles/location-section/location-section.scss';
import './styles/location-section/weather-detail/weather-detail.scss';
import './styles/location-section/weather-summary/weather-summary.scss';
import './styles/saved-trip-section/saved-trip-section.scss';
import './styles/user-section/user-section.scss';


import './styles/footer-section.scss';
import './styles/image-modal/image-modal.scss';
import './styles/navigation-section.scss';

//Media Queries
import './styles/base/media-queries-base.scss';
import './styles/form-section/media-queries-form-section.scss';
import './styles/header-section/media-queries-header-section.scss';
import './styles/location-section/media-queries-location-section.scss';
import './styles/location-section/weather-detail/media-queries-weather-detail.scss';
import './styles/location-section/weather-summary/media-queries-weather-summary.scss';
import './styles/saved-trip-section/media-queries-saved-trip-section.scss';


//Images
import './images/travel-4548127_640.png';

export { clearSummaryUI, fetchTravelWeatherSummaryData,updateSummaryUI,createWeatherSummaryElements,updateWeatherSummary,
    clearDetailUI,fetchTravelWeatherDetailData,updateDetailUI,createWeatherDetailElements,updateWeatherDetail,clearLocationImageUI,createLocationImageElements,
    fetchCountryImage,fetchLocationImage,updateLocationImage,updateLocationImageUI,
    clearUI,calculateDateDiffDays,getTravelData,setDatePickerValue,showWeatherSummary,
    clearSaveTripUI,createSaveTripElement,deleteSavedTrip,getTripData,
    loadTripData,
    postTripData,updateSaveTripUI,removeSavedTrip,saveTrip, createErrorElement, changeEndDatePicker, 
    clearErrorUI,updateErrorUI,scrollTopArrow,stickyHeaderSection,enableLocationImageModal,disableLocationImageModal, showNavigationModal,hideNavigationModal };
