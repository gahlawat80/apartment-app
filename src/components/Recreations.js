import React from 'react'

const Recreations = () => {
  return (
    <section className='recrations'>
      <article className='recreations_left'>
        <img src="https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image 1" />
        <img src="https://images.pexels.com/photos/5008399/pexels-photo-5008399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image 2" />
      </article>
      <article className='recreations_right'>
        <h1 className='features_title'>Recharge or take charge.</h1>
        <p className='features_text'>MyApartment is conveniently located just minutes to the Baltimore/Washington International Thurgood Marshall Airport, I-695 and I-70, shopping, dining and entertainment venues are just a short drive away. Enjoy the lush landscaping, splash into the swimming pool or bring the kids to burn off some energy at the playground. When you live in these apartments near Baltimore you will enjoy this peaceful and serene residential area and its amazing walkability. You’ll always find something to do, Make MyApartment your new home today!</p>
        <ul className='features_list'>
            <li>Courtyard with grill and picnic area</li>
            <li>Balconies, patios or porches</li>
            <li>Large pool</li>
            <li>Playground</li>
            <li>Outdoor world fit area</li>
            <li>Lush landscaping</li>
            <li>24-hour emergency service</li>
            <li>Online rent pay</li>
        </ul>
        <h1 className='features_title'>Make the most of your home. Move to MyApartment today!</h1>
        <button className='commonFeatures_btn'>View Gallary</button>
      </article>
    </section>
  )
}

export default Recreations
