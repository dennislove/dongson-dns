import { useEffect, useState, useMemo } from 'react';
import { getFirestore, collection, getDocs, query, limit, orderBy } from 'firebase/firestore';

const useFirestoreCollectionWithIndexes = (collectionName, fetchLimit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const db = useMemo(() => getFirestore(), []);
  const collectionRef = useMemo(() => collection(db, collectionName), [db, collectionName]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        // Limit the number of documents and retrieve only specific fields
        const collectionQuery = query(
          collectionRef, 
          limit(fetchLimit),
          orderBy('title', 'asc')
        );

        const snapshot = await getDocs(collectionQuery);
        if (!snapshot.empty) {
          const fetchedData = [];
          snapshot.forEach(doc => {
            // Retrieve only image and title fields
            const { image, title , subtitle, images, descriptions, link} = doc.data();
            fetchedData.push({ id: doc.id, image, title, subtitle, images, descriptions, link });
            
          });
          setData(fetchedData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [collectionRef, fetchLimit]);

  return { data, loading, error };
};

export default useFirestoreCollectionWithIndexes;
