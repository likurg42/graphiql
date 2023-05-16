import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface PlaygroundState {
  url: string;
  query: string;
  result: object;
  loadingState: 'idle' | 'pending' | 'error';
  error: null | ValidationError;
}

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

const performQuery = createAsyncThunk<
  object,
  string,
  { state: { playground: PlaygroundState }; rejectValue: ValidationError }
>('todos/performQuery', async (query: string, { rejectWithValue, getState }) => {
  try {
    const { url } = getState().playground;
    const { data } = await axios.post<{ data: object }>(url, { query });

    return data;
  } catch (e) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(e) && e.response) {
      return rejectWithValue(e.response.data);
    }

    return 'Something Wrong';
  }
});

const initialState: PlaygroundState = {
  query: '',
  result: {},
  loadingState: 'idle',
  error: null,
  url: 'https://rickandmortyapi.com/graphql',
};

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    updateUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performQuery.pending, (state) => {
        state.loadingState = 'pending';
      })
      .addCase(performQuery.rejected, (state, action) => {
        state.loadingState = 'error';
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(performQuery.fulfilled, (state, action) => {
        state.result = action.payload;
        state.loadingState = 'idle';
      });
  },
});
export const playgroundThunks = { performQuery };
export const { actions: playgroundActions } = playgroundSlice;
export const { reducer: playgroundReducer } = playgroundSlice;
