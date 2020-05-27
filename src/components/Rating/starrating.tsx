import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const StarRating: React.FC = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div>
            {[...Array(5)].map((start, i) => {
                const RatingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={RatingValue}
                            onClick={() => setRating(RatingValue)}
                        />
                        <FaStar className="star"
                            color={RatingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={25}
                            onMouseOver={() => setHover(RatingValue)}
                            onMouseOut={() => setHover(0)}
                        />
                    </label>
                )
            })}
        </div>
    );
}

export default StarRating;
