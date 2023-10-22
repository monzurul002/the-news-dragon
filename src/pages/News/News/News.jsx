import { Button, Card } from "react-bootstrap";
import { BsFillCaretLeftSquareFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsights from "../EditorsInsight/EditorInsights";

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, category_id } = news;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <BsFillCaretLeftSquareFill className="text-info me-1" />All news in this category. </Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights></EditorInsights>
        </div>
    );
};

export default News;