import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2> Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore atque optio autem quia ex eum veritatis incidunt, reprehenderit ullam magni laboriosam, officiis rem fugit alias quo accusantium. Sit beatae voluptas consequatur voluptate? Magnam qui voluptate ipsa saepe alias, vel, dolores repellendus neque iure incidunt similique porro. Tempora, porro dolores!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente rerum, laudantium similique nobis esse modi illo impedit mollitia quasi quod iste neque quia voluptates vero eligendi repellat. Saepe perferendis velit porro nostrum minus modi, ab deleniti commodi. Ullam consequuntur fuga deleniti. Quam, architecto qui dolore ducimus debitis placeat sunt.</p>
            <Link to="/register">Back to register.</Link>
        </div>
    );
};

export default Terms;