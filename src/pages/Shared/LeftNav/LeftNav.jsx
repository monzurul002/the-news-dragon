import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])

    return (
        <div>
            <h3>All Categories</h3>
            <div className="ps-4">
                {
                    catagories.map((category) => <p
                        key={category.id}
                    >

                        <Link to={`/category/${category.id}`} className='text-decoration-none text-muted fw-bold'>{category.name}</Link>
                    </p>)
                }

            </div>

        </div>
    );
};

export default LeftNav;