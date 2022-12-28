import React, {useState} from 'react'
import { AiFillCloseCircle} from 'react-icons/ai';
import './addItem.scss'

export default function AddItem() {
    const [title,setTitle] = useState ("")
    const [quantity,setQuantity] = useState ("")
    const [unit,setUnit] = useState ("")
    const [subCatagory,setSubCatagory] = useState ("")
    const [unitPrice,setUnitPrice] = useState ("")
    const [image,setImage] = useState ("")
    const [discription,setDiscription] = useState ("")
    const [radio,setRadio]=useState();
    const [expireDate, setExpireDate] = useState(1)

    const [error,setError] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title.length===0||quantity.length===0||unit.length===0||subCatagory.length===0||unitPrice.length===0||image.length||expireDate.length){
            setError(true)
        }
        if (title&&quantity&&unit&&subCatagory&&unitPrice&&discription&&image) {
            console.log(title,quantity,radio,subCatagory,unitPrice,discription,expireDate,image)
        }
    }

  return (
    <div className='addItem-container'>

        <div className='addItem-card'>

        {/* close button */}
        <div className='close-btn'>
            <AiFillCloseCircle size={30} color='red'/>
        </div>

        {/* Title of the card */}
        <div className='card-title'>
            <h2>Add Items</h2>
        </div>

        {/* Main Table */}
        <div className='table-devision'>
        <form onSubmit={handleSubmit}>
        <table border={0}>
            <tbody>
            <tr>
                <td> 
                    <div className='title'>
                        <p>Title</p>
                        <input type='text' placeholder='Enter Title'
                        onChange={e=>setTitle(e.target.value)}
                        />
                        <br />
                        {error && title.length<=0?
                        <label>The title can't be empty</label>:""}
                    </div>
                </td>
                <td>
                    <div className='unit' onChange={e=>setUnit(e.target.value)}>
                        <p>Unit</p>
                        <label className='radio'><input type="radio" name="radio" value="Kilogram" onChange={e=>setRadio(e.target.value)}/>Kilogram</label>
                        <label className='radio'><input type="radio" name="radio" value="Liter" onChange={e=>setRadio(e.target.value)}/>Liter</label>
                        <label className='radio'><input type="radio" name="radio" value="Pieces" onChange={e=>setRadio(e.target.value)}/>Pieces</label>
                        <br />
                        {error && unit.length<=0?
                        <label>requred</label>:""}
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                <div className='Catagory'>
                        <p>Catagory</p>
                        <select name="catagory" id="catagory" disabled>
                            <option value="select 1">select 1</option>
                            <option value="select 2">select 2</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div className='Sub-Catagory'>
                        <p>Sub Catagory</p>
                        <select name="sub-catagory" id="catagory" onChange={e=>setSubCatagory(e.target.value)}>
                            <option value="Sub 1" >Sub-Catagory 1</option>
                            <option value="Sub 2" >Sub-Catagory 2</option>
                            <option value="Sub 3" >Sub-Catagory 3</option>
                            <option value="Sub 4" >Sub-Catagory 4</option>
                        </select>
                        <br />
                        {error && subCatagory.length<=0?
                        <label>The sub catagory must be select</label> :""}
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='quantity'>
                        <p>Quantity</p>
                        <input type='number' placeholder='Enter Quantity'
                        onChange={e=>setQuantity(e.target.value)}
                        />
                        <br />
                        {error && quantity.length<=0?
                        <label>The quantity can't be empty</label>:""}
                    </div>
                </td>
                <td>
                    <div className='unit-price'>
                        <p>Unit Price</p>
                        <input className='unit-input' type='text' placeholder='Enter unit price'
                        onChange={e=>setUnitPrice(e.target.value)}
                        />
                        <br />
                        {error && unitPrice.length<=0?
                        <label>The unit price cant't be empty</label>:""}
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='add-img'>
                        <p>Add Image</p>
                        <input type="file" multiple accept="image/*"
                        onChange={e=>setImage(e.target.value)}
                        />
                        <br />
                        {error && image.length<=0?
                        <label>The image must be upload</label>:""}
                    </div>
                </td>
                <td>
                    <div className='expire-date'>
                        <p>Expire Date</p>
                        <input type='number' value={expireDate} placeholder='Enter Expire Date' min={1}
                        onChange={e=>setExpireDate(e.target.value)}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='Discription'>
                        <p>Discription</p>
                        <textarea type='text' rows="4" cols="26" placeholder='Enter Your Discription'
                        onChange={e=>setDiscription(e.target.value)}
                        />
                        <br />
                        {error && discription.length<=0?
                        <label>The discription can't be empty</label> :""}
                    </div>
                </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div className='submit'>
                        <input type="submit" value="List Item"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        </form>
        </div>

        </div>

    </div>
  )
}
