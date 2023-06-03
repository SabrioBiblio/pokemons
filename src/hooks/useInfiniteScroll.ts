// hook for bonus
import { useState, useEffect, useCallback } from 'react';

type HookPropsReturn = [boolean, (data: boolean) => void]

const useInfiniteScroll = (callback: () => void): HookPropsReturn => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    if(document.body.scrollHeight <= window.scrollY + window.innerHeight && !isFetching){
      setIsFetching(true)
    }
  }, [isFetching]);

  useEffect(() => { 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isFetching])

  useEffect(() => {
    if(!isFetching) return;

    callback();
    setIsFetching(false)
  }, [isFetching])

  return [isFetching, setIsFetching]
};

export default useInfiniteScroll;