import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const StarRatingSet: React.FC = () => {
    const [rating, setRating] = useState(0);
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

                        />
                        <FaStar className="star"
                            color={RatingValue <= (rating) ? "#ffc107" : "#e4e5e9"}
                            size={25}

                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRatingSet;
