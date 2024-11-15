import React, { useState } from 'react'
import { database, storage, ref, set, push, storageRef, uploadBytes, getDownloadURL, serverTimestamp } from '../../App';
import { ToSlug } from './ToSlug';

function FormAddItem() {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [descriptions, setDescriptions] = useState([{ desc: '' }]);
    const [image, setImage] = useState("");

    const handleUploadFile = (event) => {
        // Kiểm tra nếu có file được chọn
        if (event.target.files.length > 0) {
          setImage(event.target.files[0]);
        //   console.log("File has been uploaded:", event.target.files[0]);
        } else {
          setImage(null);
          console.log("No file uploaded.");
        }
      };

      const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setTitle(newTitle);
        setSlug(ToSlug(newTitle));
  };

  const handleDescriptionChange = (index) => (event) => {
    const newDescriptions = descriptions.map((item, idx) => {
        if (idx === index) {
            return { ...item, desc: event.target.value };
        }
        return item;
    });
    setDescriptions(newDescriptions);
};

const handleAddDescription = () => {
  setDescriptions([...descriptions, { desc: '' }]);
};

const handleDeleteDescription = () => {
  if (descriptions.length > 1) {
      setDescriptions(descriptions.slice(0, -1));
  } 
};
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !title) 
    return(
      alert("Hãy điền đủ thông tin.")
    );

    const imageRef = storageRef(storage, `images/du-an/${image.name}`);
    const snapshot = await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(snapshot.ref);

    const newsRef = push(ref(database, 'du-an'));
    set(newsRef, {
      title: title,
      slug: slug,
      descriptions: descriptions.reduce((acc, item, index) => {
        acc[`description${index + 1}`] = item.desc;
        return acc;
    }, {}),
      image: imageUrl,
      createdAt: serverTimestamp()
    //   image: image
    }).then(() => {
        // set(counterRef, nextId);
      alert('Đăng bài thành công!');
      window.location.reload()
    }).catch((error) => {
      alert('Lỗi khi đăng bài:', error);
    });
  };

      
    return(
      <form className=" space-y-6 border-2 p-6 bg-white rounded-lg font-inter" onSubmit={handleSubmit} >
      <div className="rounded-md shadow-sm ">
        <h1 className=' font-bold text-2xl'>Thêm dự án mới</h1>
        <div className=" flex flex-col gap-3 my-3">
            <input
            type="text"
            id="title"
            className="form-control outline-none border rounded-lg p-2"
            placeholder="Tiêu đề"
            value={title}
            onChange={handleTitleChange}
            />
            <input
            type="text"
            id="slug"
            className="form-control border rounded-lg p-2 outline-none"
            placeholder="Slug"
            value={slug}
            readOnly
            />
        {descriptions.map((item, index) => (
                    <textarea
                        key={index}
                        className="form-control outline-none border rounded-lg p-2 h-[100px]"
                        placeholder={`Mô tả ${index + 1}`}
                        value={item.desc}
                        onChange={handleDescriptionChange(index)}
                    />
                ))}
                <div className='flex gap-3'>
                  <button type='button' className=' bg-[#6366f1] text-white px-3 py-2 rounded-lg ' onClick={handleAddDescription}>Thêm nữa</button>
                  {descriptions.length > 1 && (
                    <button type="button" className='border border-[#6366f1] text-[#6366f1] px-3 py-2 rounded-lg' onClick={handleDeleteDescription}>Xóa bớt</button>
                  )}
                </div>
              
        </div>
        
        <div className="custom-file">
        <input type="file"  onChange={handleUploadFile} />
        
      </div>
        <button type="submit" className='py-3 w-full  bg-[#6366f1] text-white font-rob mt-4 rounded-lg' >Đăng bài</button>
      </div>
    </form>
    )
}

export default FormAddItem
