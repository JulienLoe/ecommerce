import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../features/dataProductsSlice';
import Loading from '../loader/Loading';
import { Link } from 'react-router-dom';

const Grid = ({dataSearch}) => {
    const dispatch = useDispatch();

    const data = useSelector((state) =>state.products.products);

    const dataLoader = useSelector((state =>state.products))

    const {loading} = dataLoader;

    console.log(loading)

    console.log(data)

    //  const [data, setData] = useState([]);

    //   const setData = async () =>{
    //       const result = await axios.get('http://localhost:8080/products');
    //       try{if(result.status === 200){
    //           dispatch(getData(result.data))
    //           console.log(result)
    //       }}
    //       catch
    //           (error){console.log(error)}
    //       }

        //  const postData = async ()=>{
        //     const result = await axios.post('http://localhost:8080', {
        //         name: 'Blouson', description: 'Un blouson au top', price: 79.99, numberInStock: 2, image: './Assets/photo1.jpg',size: 'M'
        //     })
        //     console.log(result)
        //     try{if(result.status===200){
        //         getData();
        //     }
        //  }
        //  catch
        //     (error){console.log(error)}
         
        // }


     
    //    const [result, setResult]= useState([])
    //     const pict = []
    //     console.log(result)
         
        // const pictures = useCallback(()=>{for( let i=1; i<=20; i++){
        //     result.push({name: `./Assets/photo${i}.jpg`})
        //     if(i===20){
        //         const resultCopy= [...result]
        //         console.log(resultCopy)
        //       setResult(resultCopy)}
        //     }},[])
         
     



     useEffect(() =>{
        //    pictures();
              //postData();
            // setData()
            // axios.post('http://localhost:8080/import/products')
            dispatch(getData());
     }

     ,[dispatch])

    return loading ? (<Loading />) : (
        <div className='pageDispatch'>
        <div id='grid'>
            {
             
                // result.map((element,index) =>{
                //     console.log(element.name)
                //     if(index%2===0){
                //     return (<div key={index} className='grid-pict-pair' id={`grid-pict${index}`}><img src={element.name}/></div>)}
                //     if(index%2!==0){
                //         return (<div key={index} className='grid-pict-impair' id={`grid-pict${index}`}><img src={element.name}/></div>)}
                //     }
                    
                //     )

                data
                .filter((value)=>{
                    return value.name.toLowerCase().includes(dataSearch.toLowerCase())
                })
                .map((value,index) =>{
                    return(
                    <div className='grid-pict'><div className='divPict'><div className='divPictInfo'>{value.name}<br></br>{value.price}{' €'}</div></div><Link to={`${value._id}`}><img alt={value.description} key={index} src={value.image}/></Link></div>)
                })
                    
         
         

         }
         
        </div>
        </div>
    );
};

export default Grid;