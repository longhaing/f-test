import { useCallback, useEffect, useState } from 'react';
import { CollectionItem } from '../model/collection';
import { fetchCollectionApi } from '../api/collection';

const useCollection = () => {
  const [collectionData, setCollectionData] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const getCollection = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchCollectionApi();
      setCollectionData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCollection = useCallback((newCollection: CollectionItem) => {
    setCollectionData([...collectionData, newCollection]);
  }, []);

  useEffect(() => {
    getCollection();
  }, []);

  return {
    data: collectionData,
    loading,
    isSuccess: !error,
    error,
    updateCollection,
  };
};

export default useCollection;
