import React from 'react'

export default function FormComponent({onChangeCity}) {
    return (
        <div className="option-container">
                <form>
                    <h2>Select City</h2>
                    <select id="city" onChange={onChangeCity}>
                        <option value="">Select City</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option valu="Mysore">Mysore</option>
                    </select>
                </form>
            </div>
    )
}
