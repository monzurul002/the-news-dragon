import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBookmark, BsEye, BsFillShareFill, BsFillStarFill } from "react-icons/bs";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
const NewsCard = ({ news }) => {

    const { _id, title, image_url, details, author, total_view, rating } = news;
    return (
        <div className='my-3'>
            <Card className="">
                <Card.Header className='d-flex align-items-center '>

                    <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
                    <div className='ms-3 flex-grow-1 '>
                        <h5>{author.name}</h5>
                        <p> {moment(author.published_date).format("yyyy-M-D")}  </p>
                    </div>

                    <div className=''>
                        <BsBookmark />
                        <BsFillShareFill />
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text className='my-2'>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}..... <Link to={`/news/${_id}`} className='ms-1 text-danger'>Read More</Link>  </>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-center align-items-center">
                    <div className='flex-grow-1'>

                        <Rating

                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            readonly
                            fullSymbol={<BsFillStarFill />}
                        />
                    </div>
                    <div>
                        <BsEye />  <p>{total_view}</p>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;