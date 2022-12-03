import React,{useState} from 'react';
import './slide_show.scss';
import ImageCard from './components/Image_card';

export default function SlideShow() {
    let [photoIndex, setPhotoIndex] = useState(0);

    let data=[
        {id: 1, name: '1'},
        {id: 2, name: '2'},
        {id: 3, name: '3'},
    ];

  return (
    <div className='slide_show_code'>
        <div className="arrow">
            <i className="fa-solid fa-chevron-left" onClick={()=>setPhotoIndex(photoIndex > 0 ? photoIndex - 1 : photoIndex)}></i>
            <i className="fa-solid fa-chevron-right" onClick={()=>setPhotoIndex(photoIndex < (data.length - 1) ? photoIndex + 1 : photoIndex)}></i>
        </div>

        {data.map((item, index)=>{
            return(
                <div key={index}>
                    <ImageCard id={item.id} index={index} clickIndex={photoIndex} name={item.name} />
                </div>
            )
        })}

    </div>
  )
}
