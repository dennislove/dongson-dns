import React, { useState } from 'react'
import { addItemAdmin } from '../../utils/addItemAdmin';

function AdminForm() {

    const [news, setNews] = useState({
        title: "",
        link: "",
        image: ""
      });
      const handleChangeItem = (event, key) => {
        const newItem = event.target.value;
        setNews(prevState => ({
          ...prevState,
          [key]: newItem
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        addItemAdmin(e, news, "News");
       
      };
    
    return(
      <form className=" space-y-6 border-2 p-6 bg-white rounded-lg font-inter" onSubmit={handleSubmit} >
      <div className="rounded-md shadow-sm ">
        <h1 className=' font-bold text-2xl'>Thêm tin tức mới</h1>
        <div className=" flex flex-col gap-3 my-3">
            <input
            type="text"
            id="title"
            className="form-control outline-none border rounded-lg p-2"
            placeholder="Tiêu đề"
            value={news.title}
            onChange={(e) => handleChangeItem(e, 'title')}
            />
            <input
            type="text"
            id="slug"
            className="form-control border rounded-lg p-2 outline-none"
            placeholder="Link"
            value={news.link}
            onChange={(e) => handleChangeItem(e, 'link')}
            />
            <input
            type="text"
            id="slug"
            className="form-control border rounded-lg p-2 outline-none"
            placeholder="Image"
            value={news.image}
            onChange={(e) => handleChangeItem(e, 'image')}
            />
        </div>
        
        
        <button type="submit" className='py-3 w-full  bg-[#6366f1] text-white font-rob mt-4 rounded-lg' >Đăng bài</button>
      </div>
    </form>
    )
}

export default AdminForm
