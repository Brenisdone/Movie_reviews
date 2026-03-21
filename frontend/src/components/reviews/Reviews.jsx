import { useEffect,useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm.jsx";

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=>{
        getMovieData(movieId);
    },[])

    const addReview = async (e) => {
        e.preventDefault();
        
        const rev= revText.current;
        
        try{
            const response = await api.post("/v1/reviews",{reviewBody:rev.value,imdbId:movieId});
            const updatedReviews = [...reviews,{body:rev.value}];
            console.log(reviews);
            rev.value = "";
            setReviews(updatedReviews); 
        }catch(e){
            console.log(e);
        }
    }

  return (
    <Container>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt=""/>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm  handleSumbit={addReview} revText={revText} labelText="Share your review?"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col><h1>Reviews</h1></Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r)=>{
                        return(
                            <>
                                <Row>
                                    <Col style={{fontSize: '2rem'}}>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews