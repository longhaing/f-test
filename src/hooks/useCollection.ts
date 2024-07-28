import { useCallback, useEffect, useState } from 'react';
import { CollectionItem } from '../model/collection';
import { fetchCollectionApi } from '../api/collection';

const useCollection = () => {
  const [collectionData, setCollectionData] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(false);

  const getCollection = useCallback(async () => {
    setLoading(true);
    const response = await fetchCollectionApi();
    setCollectionData(response.data);
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
    updateCollection,
  };
};

export default useCollection;
