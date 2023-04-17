import React from 'react'
import './Form.css'

const Form = () => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <div>
            <h2 className="form-heading">Submit Form</h2>
            <h4 className="form-text">Get Best Price</h4>
            <div className="form">
                <form action="">
                    <label className='type-of'>What's the occasion?</label>
                    <select id="ddlModels" onChange="EnableDisableTextBox(this)" className="form-control custom-select" name="billing_event_type" required="">
                        <option value selected hidden>Select Type</option>
                        <option value="Virtual">Virtual</option>
                        <option value="Video Shoutout">Video Shoutout</option>
                        <option value="Campus">Campus</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Private Party">Private Party</option>
                        <option value="Concert/Festival">Concert/Festival</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Professional Hiring">Professional Hiring</option>
                        <option value="Inauguration">Inauguration</option>
                        <option value="Photo/Video Shoot">Photo/Video Shoot</option>
                        <option value="Religious">Religious</option>
                        <option value="Charity">Charity</option>
                        <option value="Fashion Show">Fashion Show</option>
                        <option value="Kids Party">kids Party</option>
                        <option value="Exhibition">Exhibition</option>
                    </select>
                    <label className='active'>Event Date</label>
                    <input className="form-control" type="text" name="billing_event_date" id="billing_event_date" placeholder="When.." required value={date} />
                    <label className='address'>Venue Address</label>
                    <input type="text" class="form-control" name="billing_event_venue" id="input-venue" required />
                    <label className='budget'>Budget</label>
                    <input type="number" id="billing_event_budget" name="billing_event_budget" min="12500000" class="form-control" required />
                    <label className='public'>How many people will attend?</label>
                    <input type="number" id="billing_event_gathering_size" name="billing_event_gathering_size" class="form-control" required />
                    <label className="form-name">Full Name</label>
                    <input type="text" class="form-control" id="billing_first_name" name="billing_first_name" required />
                    <label className='email'>Email Address (No Spam!)</label>
                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="billing_email" name="billing_email" class="form-control" required />
                    <label className='number'>Mobile Number</label>
                    <input id="billing_phone" class="form-control" name="billing_phone" type="tel" placeholder="Phone Number" required="" autocomplete="off" />
                    <label className='tell-us'>Tell us more (we love to listen)</label>
                    <textarea id="billing_event_information" name="billing_event_information" class="form-control" row="2" cols="5"></textarea>
                    <select class="form-control custom-select" id='more-opt' name="billing_more_budget" required="">
                        <option value="Yes" selected="" hidden="">Yes</option>
                        <option value="Yes">Yes</option>
                        <option value="No">Don't</option>
                    </select>
                    <p className="more-opt-text">Send more options in my budget</p>
                    <hr className="last-hr" />
                </form>
            </div>
        </div>
    )
}

export default Form
