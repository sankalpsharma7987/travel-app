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

import { clearUI } from './js/lib/clearUI';
import { calculateDateDiffDays } from './js/lib/calculateDateDiffDays';
import { getTravelData } from './js/lib/getTravelData';
import { setDatePickerValue } from './js/lib/setDatePickerValue';
import { showWeatherSummary } from './js/lib/summary/showWeatherSummary';


import './styles/base.scss';
import './styles/weather-summary.scss';

export { clearSummaryUI, fetchTravelWeatherSummaryData,updateSummaryUI,createWeatherSummaryElements,updateWeatherSummary,
    clearDetailUI,fetchTravelWeatherDetailData,updateDetailUI,createWeatherDetailElements,updateWeatherDetail,
    clearUI,calculateDateDiffDays,getTravelData,setDatePickerValue,showWeatherSummary };
