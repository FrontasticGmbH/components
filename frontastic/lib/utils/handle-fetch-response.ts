//import { FetcherError } from '@commerce/utils/errors'

export function getError(errors: any[], status: number) {
  //return new FetcherError({ errors, status })
  console.log('errors,', errors);
  return new Error(`Error, ${status}`);
}

export async function getAsyncError(res: Response) {
  console.log('error', res);
  const data = await res.json();
  return getError(data.errors, res.status);
}

const handleFetchResponse = async (res: Response) => {
  console.log(`res ok = ${res.ok}:`, res);
  if (res.ok) {
    const data = await res.json();
    console.log('fetcher response ', data);

    // Frontastic api currently doesn't handle errors
    // add later here
    // if (errors && errors.length) {
    //   throw getError(errors, res.status);
    // }

    return data;
  }

  throw await getAsyncError(res);
};

export default handleFetchResponse;
