import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { playgroundActions, playgroundThunks } from './playgroundSlice.ts';
import { useAppDispatch, useAppSelector } from '../../store.ts';

export const usePlayground = () => {
  const dispatch = useAppDispatch();

  const actions = useMemo(
    () => bindActionCreators({ ...playgroundActions, ...playgroundThunks }, dispatch),
    [dispatch]
  );
  const error = useAppSelector((store) => store.playground.error);
  const query = useAppSelector((store) => store.playground.query);
  const result = useAppSelector((store) => store.playground.result);
  const loadingState = useAppSelector((store) => store.playground.loadingState);
  const url = useAppSelector((store) => store.playground.url);

  return {
    ...actions,
    error,
    query,
    result,
    loadingState,
    url,
  };
};
