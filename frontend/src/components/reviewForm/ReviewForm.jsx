import {Form,Button} from 'react-bootstrap';

const ReviewForm = ({handleSumbit,revText,labelText,defaultValue}) => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{fontSize: '2rem'}}>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={"Enter your review here."} style={{fontSize: '2rem',color: 'white',backgroundColor: '#333333'}}/>
        </Form.Group>
        <Button className="mb-5" variant="outline-info" onClick={handleSumbit} style={{fontSize: '1.5rem'}}>Sumbit</Button>
    </Form>
  )
}

export default ReviewForm