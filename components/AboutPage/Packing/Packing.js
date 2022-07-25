import React from 'react'

export default function Packing(props) {
    const {activeTab, title} = props;
    console.log(activeTab, title);
  return (
    <div className={`${activeTab === title ? '' : 'hidden'} min-h-screen w-10/12 mx-auto`}>
        <h1 className='content__title mb-10'>Pack for Success</h1>
        <div className='w-full'>
            <h1 className='content__subtitle mb-2'>Day Hike Packing List</h1>
            <p>Day hiking does not require the same level of preperation as multi-day hiking. However a well packed bag is critical for a successful hike. 
                On single day hikes extra gear is kept to a minimum, which allows more room for water and snacks.  
            </p>
            <div className='my-6 ml-4'>
                <ul className='w-full flex flex-col gap-1 h-64 flex-wrap '>
                    <li className='packing__li'>Sturdy Boots or Sneakers</li>
                    <li className='packing__li'>2 liters of water</li>
                    <li className='packing__li'>Comfortable Clothing</li>
                    <li className='packing__li'>Snack or Lunch</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                </ul>
            </div>
        </div>
        <div className='w-full'>
            <h1 className='content__subtitle mb-2'>Multi-Day Packing List</h1>
            <p>More days means way more gear. When spending nights out in the woods there are a number of extra pieces of gear you will need to bring.  
            </p>
            <div className='my-6 ml-4'>
                <ul className='w-full flex flex-col gap-1 h-64 flex-wrap '>
                    <li className='packing__li'>Sturdy Boots or Sneakers</li>
                    <li className='packing__li'>2 liters of water</li>
                    <li className='packing__li'>Comfortable Clothing</li>
                    <li className='packing__li'>Snack or Lunch</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                    <li className='packing__li'>Sunscreen</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
