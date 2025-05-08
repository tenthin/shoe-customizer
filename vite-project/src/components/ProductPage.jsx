import React from 'react'
import blue from "../assets/blue.jpg"

const ProductPage = () => {
    return (
        <div className='product-page'>
            <div className="product">
                <h2 className=''>H+ Basketball Sneakers</h2>
                <p>Run faster,jump higher.</p>
                <div className="customizer">
                    <div className="product-image">
                        <img src={blue} alt="" />
                    </div>
                    <div className="sectors">
                        <div className="field-group">
                            <label for="Size-option">Size:</label>
                            <select name="sizeOptions" id="size-options">
                                <option>7</option>
                                <option>7.5</option>
                                <option>8</option>
                                <option>8.5</option>
                                <option>9</option>
                                <option>9.5</option>
                                <option>10</option>
                                <option>10.5</option>
                                <option>11</option>
                                <option>11.5</option>
                                <option>12</option>
                                <option>12.5</option>
                            </select>
                        </div>
                        <div className="field-group">
                            <label for="color-options">Color:</label>
                            <select name="colorOptions" id="color-options">
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Brown</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage