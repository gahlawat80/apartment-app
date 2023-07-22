import React from 'react'
import './styles/commonFeatures.css'
const CommonFeatures = () => {
  return (
    <section className='commonFeatures'>
      <article className="commonFeatures_left">
        <h1 className='features_title'>Updated apartment interiors to match your style.</h1>
        <p className='features_text'>
            Coming home has never felt better! Choose from our <span>spacious 1 or 2-bedroom apartments</span> for rent near Ellicott City built to your expectation. Our spacious closets and eat-in kitchens will make you feel right at home. <span>Move-in to these Ellicott City apartments today!</span>
        </p>
        <ul className='features_list'>
            <li>Spacious one or two-bedroom apartments</li>
            <li>Individually controlled heating & air conditioning</li>
            <li>Plush carpeting</li>
            <li>Tile & vinyl flooring</li>
            <li>Spacious walk-in closets</li>
            <li>Linen closet</li>
            <li>Double-pane windows with window coverings</li>
            <li>In-unit washer/dryer available</li>
            <li>Laundry facilities</li>
            <li>Dishwasher, garbage disposal, ice maker, microwave, oven, range, refrigerator</li>
            <li>Eat-in Kitchen</li>
            <li>Controlled entry systems</li>
            <li>Secured mailboxes inside buildings</li>
            <li>Corian countertops</li>
            <li>Extra storage</li>
            <li>Individual hot water heater</li>
            <li>Pets welcome. $35 per month per pet. $350 deposit per pet. Breed restrictions apply. Please call the office for more detail.</li>
        </ul>
        <button className='commonFeatures_btn'>View Floor Plans</button>
      </article>
      <article className="commonFeatures_right">
        <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image1" />
        <img src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image2" />
      </article>
    </section>
  )
}

export default CommonFeatures
