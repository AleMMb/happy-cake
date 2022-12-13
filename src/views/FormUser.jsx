import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function FormUser() {
  return (
    <Form className='mt-5'>
      <Stack gap={4} className="col-md-8 mx-auto">
      <h1 className='d-flex justify-content-center'> Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className='d-flex justify-content-center'>
        <Button className='w-25' variant="primary" type="submit" style={{backgroundColor:'crimson'}}>Enviar</Button>
      </div>
      </Stack>
    </Form>
  )
}
export default FormUser;
