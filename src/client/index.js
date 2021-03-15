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

import { clearLocationImageUI} from './js/lib/locationImage/clearLocationImageUI';
import { createLocationImageElements} from './js/lib/locationImage/createLocationImageElements';
import { fetchLocationImage } from './js/lib/locationImage/fetchLocationImage';
import { updateLocationImage } from './js/lib/locationImage/updateLocationImage';
import { updateLocationImageUI } from './js/lib/locationImage/updateLocationImageUI';

import { clearUI } from './js/lib/clearUI';
import { calculateDateDiffDays } from './js/lib/calculateDateDiffDays';
import { getTravelData } from './js/lib/getTravelData';
import { setDatePickerValue } from './js/lib/setDatePickerValue';
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

import './styles/base.scss';
import './styles/weather-summary.scss';
import './styles/location-section.scss';
import './styles/user-section.scss';
import './styles/weather-detail.scss';
import './styles/form-section.scss';
import './styles/saved-trip-section.scss';
import './styles/header-section.scss';

export { clearSummaryUI, fetchTravelWeatherSummaryData,updateSummaryUI,createWeatherSummaryElements,updateWeatherSummary,
    clearDetailUI,fetchTravelWeatherDetailData,updateDetailUI,createWeatherDetailElements,updateWeatherDetail,clearLocationImageUI,createLocationImageElements,fetchLocationImage,updateLocationImage,updateLocationImageUI,
    clearUI,calculateDateDiffDays,getTravelData,setDatePickerValue,showWeatherSummary,
    clearSaveTripUI,createSaveTripElement,deleteSavedTrip,getTripData,
    loadTripData,
    postTripData,updateSaveTripUI,removeSavedTrip,saveTrip };
