import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import {LibreriaContext} from '../Context/LibreriaContext'

export default function Libros () {
        const {catalogo, agregar} = useContext(LibreriaContext);
        return (
            <div>
                <h2>Libros disponibles</h2>
                  {
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
                        catalogo.map((c,i)=>{
                        return(<tr key={i}>
                          <td>{c.codigo}</td>
                          <td>{c.titulo}</td>
                          <td>{c.idioma}</td>
                          <td>{<Button disabled={c.desactivado} onClick={()=>agregar(c)}>Agregar</Button>}</td>
                          </tr>)
                        })
                      }  
                    </tbody>
                    </Table> 
                  }
            </div>
        )
}