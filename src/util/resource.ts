export type Resource<T> = {
  isLoading: boolean;
  error: Error | null;
  data: T | null;
};

export const resourceLoading = <T>() =>
  ({
    isLoading: true,
    data: null,
    error: null,
  } as Resource<T>);

export const resourceSuccess = <T>(data: T) =>
  ({
    isLoading: false,
    data,
    error: null,
  } as Resource<T>);

export const resourceError = <T>(error: Error) =>
  ({
    isLoading: false,
    data: null,
    error,
  } as Resource<T>);
