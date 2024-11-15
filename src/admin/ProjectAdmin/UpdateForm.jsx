import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, update } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToSlug } from './ToSlug';
import useRealtimeDatabase from '../../hooks/useRealtimeDatabase';

const UpdateForm = () => {
  const location = useLocation();

  const { data: news } = useRealtimeDatabase('du-an');
  const selectedNews = news.find(item => item.id === location.state || item._id === location.state);


  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    descriptions:[],
 image: '' ,

  });
  useEffect(() => {
    if (selectedNews) {
      const descriptionsArray = selectedNews.descriptions 
      ? Object.values(selectedNews.descriptions)
      : [];
      setFormData({
        title: selectedNews.title || '',
        slug: selectedNews.slug || '',
        descriptions: descriptionsArray,
        image: selectedNews.image || '' ,

      });
      
    } else {
      console.log("Selected News is undefined or null");
    }
  }, [selectedNews]);

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setFormData(prevState => ({
      ...prevState,                // Giữ lại các giá trị khác của formData
      title: newTitle,             // Cập nhật title
      slug: ToSlug(newTitle),      // Cập nhật slug dựa trên title
  }));
};
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Tạo một URL tạm thời để hiển thị ảnh đã chọn
      const imageURL = URL.createObjectURL(file);
      setFormData((prevState) => ({
        ...prevState,
        images: imageURL, // Hiển thị ảnh mới trước khi upload
        imageFile: file,  // Lưu file để upload sau này
    }));
    }
  };

    const handleDescriptionChange = (index, value) => {
      const newDescriptions = [...formData.descriptions];
      
      newDescriptions[index] = value;
      setFormData({ ...formData, descriptions: newDescriptions });
    };
  
    // Thêm một input mới cho description
    const addDescription = () => {
      setFormData({ ...formData, descriptions: [...formData.descriptions, ''] });
    };
  
    // Xóa input cuối cùng của description
    const removeDescription = () => {
      if (formData.descriptions.length > 1) {
        setFormData({
          ...formData,
          descriptions: formData.descriptions.slice(0, -1),
        });
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        // Get a reference to the database
        const db = getDatabase(); // Ensure you're getting the database instance correctly
        
        // Create a reference to the specific document you want to update
        const dbRef = ref(db, `du-an/${location.state}`); // Use the db instance directly
        
        const storage = getStorage();
        const imageFile = formData.imageFile; // Lấy file hình ảnh từ formData
      const imageRef = storageRef(storage, `images/du-an/${imageFile.name}`);
       // Upload file
       await uploadBytes(imageRef, imageFile);
        
       // Lấy URL download
       const downloadURL = await getDownloadURL(imageRef);
      
        // Update the document in the Realtime Database
        await update(dbRef, {
            title: formData.title, // Ensure you use the current title from formData
            slug: formData.slug,
            descriptions: formData.descriptions,
            image: downloadURL,
        });
        
        alert('Cập nhật thành công');
    } catch (error) {
        alert('Đã xảy ra lỗi khi cập nhật', error); // Log any errors
    }
};

  return (
    <form className=" space-y-6 border-2 p-6 bg-white rounded-lg font-inter" onSubmit={handleSubmit} >
    <div className="rounded-md shadow-sm ">
      <h1 className=' font-bold text-2xl'>Thêm dự án mới</h1>
      <div className=" flex flex-col gap-3 my-3">
          <div className=''>
          <label>Tiêu đề</label>
            <input
            type="text"
            id="title"
            className="form-control outline-none border rounded-lg p-2 w-full"
            placeholder="Tiêu đề"
            value={formData.title}
            onChange={handleTitleChange}
            />
          </div>
          <input
          type="text"
          id="slug"
          className="form-control border rounded-lg p-2 outline-none"
          placeholder="Slug"
            value={formData.slug}
           
          readOnly
          />
          {formData.descriptions.map((description, index) => (
            <div key={index} className='w-full flex'>
                 <label>{`Mô tả ${index + 1}:`}</label>
                      <textarea 
                          className="form-control outline-none border rounded-lg p-2 h-[100px] w-full"
                          
                          value={description}
                          onChange={(e) => handleDescriptionChange(index, e.target.value)}
                      />
                    </div>
                ))}
                <div className='flex gap-3'>
                  <button type='button' className=' bg-[#6366f1] text-white px-3 py-2 rounded-lg ' onClick={addDescription}>Thêm nữa</button>
                  {formData.descriptions.length > 1 && (
                    <button type="button" className='border border-[#6366f1] text-[#6366f1] px-3 py-2 rounded-lg' onClick={removeDescription} >Xóa bớt</button>
            )}
            </div>
          {formData.image && (
        <div>
          <label>Ảnh hiện tại:</label>
          <img src={formData.image} alt="current" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
         <input
          id="images"
          className="form-control border rounded-lg p-2 outline-none"
          placeholder="images"
          type="file" onChange={handleImageChange} accept="image/*"
          />
      </div>
      
      
      <button type="submit" className='py-3 w-full  bg-[#6366f1] text-white font-rob mt-4 rounded-lg' >Cập nhật</button>
    </div>
  </form>
  )
}

export default UpdateForm