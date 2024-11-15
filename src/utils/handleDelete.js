import { getDatabase, ref ,get, set,remove } from "firebase/database";

export const handleDelete = (itemId, collection, setState) => {
    const db = getDatabase();
  const itemRef  = ref(db, `${collection}/${itemId}`);
  const trashRef = ref(db, `Trash/${itemId}`);
  get(itemRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const itemData = snapshot.val();

      // Lưu dữ liệu vào Trash trước khi xóa
      set(trashRef, {
        ...itemData,
        deletedAt: new Date().toISOString() // Lưu thêm thời gian xóa nếu cần
      })
        .then(() => {
          // Xóa document khỏi collection gốc
          return remove(itemRef);
        })
        .then(() => {
          console.log(`Item with ID: ${itemId} has been moved to Trash and deleted from ${collection}.`);

          // Cập nhật state sau khi xóa
          setState((currentItems) => currentItems.filter((item) => item.id !== itemId));
        })
        .catch((error) => {
          console.error("Error moving item to Trash:", error);
        });
    } else {
      console.log("No such item to delete.");
    }
  })
  .catch((error) => {
    console.error("Error fetching item:", error);
  });
  };