import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":291.68,"feels_like":290.95,"temp_min":288.68,"temp_max":293.78,"pressure":1030,"humidity":52},"visibility":10000,"wind":{"speed":3.83,"deg":94,"gust":4.07},"clouds":{"all":8},"dt":1650115603,"sys":{"type":2,"id":268730,"country":"GB","sunrise":1650085364,"sunset":1650135450},"timezone":3600,"id":2643743,"name":"London","cod":200}
