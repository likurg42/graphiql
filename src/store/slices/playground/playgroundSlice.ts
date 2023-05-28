import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface PlaygroundState {
  url: string;
  query: string;
  headers: string;
  variables: string;
  result: object;
  loadingState: 'idle' | 'pending' | 'error';
  error: null | ValidationError;
}

interface ValidationError {
  message: string;
  errors?: Record<string, string[]>;
}

const parseObject = (item: string) => (item.length > 0 ? JSON.parse(item) : {});

const performQuery = createAsyncThunk<
  object,
  {
    query: string;
    variables: string;
    headers: string;
  },
  {
    state: {
      playground: PlaygroundState;
    };
    rejectValue: ValidationError;
  }
>('todos/performQuery', async (queryData, { rejectWithValue, getState }) => {
  try {
    const { url } = getState().playground;
    const { query, variables, headers } = queryData;
    const parsedVariables = parseObject(variables);
    const parsedHeaders = parseObject(headers);
    const { data } = await axios.post<{
      data: object;
    }>(
      url,
      { query, variables: parsedVariables },
      {
        headers: parsedHeaders,
      }
    );

    return data;
  } catch (e) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(e) && e.response) {
      return rejectWithValue(e.response.data);
    }

    if (e instanceof Error) {
      return rejectWithValue({ message: e.message });
    }

    return 'Something Wrong';
  }
});

const initialState: PlaygroundState = {
  query: '',
  headers: '',
  variables: '',
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
        state.error = null;
        state.result = action.payload;
        state.loadingState = 'idle';
      });
  },
});
export const playgroundThunks = { performQuery };
export const { actions: playgroundActions } = playgroundSlice;
export const { reducer: playgroundReducer } = playgroundSlice;
