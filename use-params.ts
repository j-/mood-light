import { ParsedUrlQuery, decode } from 'querystring';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useParams = (): ParsedUrlQuery => {
  const router = useRouter();
  const [params, setParams] = useState<ParsedUrlQuery>(router.query);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = decode(location.search.replace(/^\?/, ''));
      setParams(params);
    }
  }, [typeof window]);
  return params;
};
