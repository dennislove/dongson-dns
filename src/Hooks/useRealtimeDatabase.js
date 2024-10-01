import { useEffect, useState,useMemo  } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const useRealtimeDatabase = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const db = useMemo(() => getDatabase(), []);
  const dbRef = useMemo(() => ref(db, path), [db, path]);
  useEffect(() => {

    const handleValueChange = (snapshot) => {
      if (snapshot.exists()) {
        const fetchedData = [];
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const value = childSnapshot.val();
          fetchedData.push({ id: key, ...value });
        });
        setData(fetchedData);
      } else {
        console.log("No data available");
        setData([]);
      }
      setLoading(false);
    };

    const handleError = (error) => {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    };

    // Lắng nghe dữ liệu thời gian thực
    onValue(dbRef, handleValueChange, handleError);

    // Cleanup listener khi component unmount
    return () => {
      off(dbRef, 'value', handleValueChange);
    };
  }, [path]);

  return { data, loading, error };
};

export default useRealtimeDatabase;
