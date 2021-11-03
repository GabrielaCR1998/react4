import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import {LibreriaContext} from '../Context/LibreriaContext'


const Lista = () => {
  const {wishList, eliminar} = useContext(LibreriaContext);
    return ( 
        <div>
                <h2>Lista de deseos</h2>
                  {
                    wishList.length===0   
                    ? 
                    <p>No tienes libros agregados</p>
                    :
                      <Table>
                      <thead>
                        <tr>
                          <th>Codigo</th>
                          <th>Titulo</th>
                          <th>Idioma</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          wishList.map((c,i)=>{   
                          return(<tr key={i}>
                            <td>{c.codigo}</td>
                            <td>{c.titulo}</td>
                            <td>{c.idioma}</td>
                            <td>{<Button onClick={()=>eliminar(c)}>Eliminar</Button>}</td>
                            </tr>)
                          })
                        }
                      </tbody>
                      </Table>} 
        </div>
     );
}
export default Lista;