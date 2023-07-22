import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <section className='contactPage'>
      <Header />
      <Navigation />
      <article className="contact">
        <form>
            <div className="contact_form">            
                <div className="contact_form_top">
                    <div className="contact_form_top_left">
                        <div className="contact_form_field">
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" id='name' placeholder='Enter your full name...'/>
                        </div>
                        <div className="contact_form_field">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id='email' placeholder='Enter your Email...'/>
                        </div>
                        <div className="contact_form_field">
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" id='phone' placeholder='Enter your contact...'/>
                        </div>
                    </div>
                    <div className="contact_form_top_right">
                        <div className="contact_form_field">
                            <label htmlFor="apt">Apartment Type:</label>
                            <select id="apt">
                                <option value="#">Select Apartments...</option>
                                <option value="1b,1b">1bed, 1bath</option>
                                <option value="1b,1.5b">1bed, 1.5bath</option>
                                <option value="2b,1b">2bed, 1bath</option>
                                <option value="2b,1.5b">2bed, 1.5bath</option>
                                <option value="2b,2b">2bed, 2bath</option>
                                <option value="3b,1.5b">3bed, 1.5bath</option>
                                <option value="3b,2.5b">3bed, 2.5bath</option>
                                <option value="3b,3b">3bed, 3bath</option>
                            </select>
                        </div>
                        <div className="contact_form_details">
                            <p className="contact_detail_left">
                                <span className="bold">Is room available?</span>
                                <span>Yes</span>
                            </p>
                            <p className="contact_detail_right">
                                <span className="bold">Apartment Rent:</span>
                                <span>$ 1850/month</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact_form_bottom">
                    <div className="contact_form_field">
                        <label htmlFor="msg">Message:</label>
                        <textarea id="msg"></textarea>
                    </div>
                    <div className="cta_buttons">
                        <button>Send</button>
                        <button>Deals</button>
                    </div>
                </div>            
            </div>
        </form>
      </article>
      <CommunityInfo />
      <Footer />
    </section>
  )
}

export default Contact
