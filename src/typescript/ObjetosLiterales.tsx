
interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    provincia: string;
    codigo_postal: number;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'lulu',
        edad: 25,
        direccion: {
            pais: 'argentina',
            provincia: 'buenos aires',
            codigo_postal: 1708
        }

    }
  return (
    <>
        <h3>Objetos Literales</h3>
        <hr/>
        <code>
            <pre>
                {JSON.stringify(persona,null,2)}
            </pre>
        </code>
    </>
  )
}
