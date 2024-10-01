import { useEffect, useState, useMemo } from 'react';
import { getFirestore, collection, getDocs, query, limit } from 'firebase/firestore';

const useFirestoreCollection = (collectionName, fetchLimit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sử dụng useMemo để tạo ra tham chiếu mới cho Firestore collection khi collectionName thay đổi
  const db = useMemo(() => getFirestore(), []);
  const collectionRef = useMemo(() => collection(db, collectionName), [db, collectionName]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);  // Kích hoạt trạng thái loading

      try {
        // Giới hạn số lượng tài liệu được tải
        const collectionQuery = query(collectionRef, limit(fetchLimit));
        const snapshot = await getDocs(collectionQuery);
        if (!snapshot.empty) {
          const fetchedData = [];
          snapshot.forEach(doc => {
            const key = doc.id;
            const docData = doc.data();
            fetchedData.push({ id: key, ...docData });
          });
          setData(fetchedData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Tắt trạng thái loading khi hoàn tất
      }
    };

    fetchData();
  }, [collectionRef, fetchLimit]);

  return { data, loading, error };
};

export default useFirestoreCollection;
