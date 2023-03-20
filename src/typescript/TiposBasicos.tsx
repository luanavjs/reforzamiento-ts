
export const TiposBasicos = () => {
  let nombre: string | number = 'mati espina'
  nombre = 123
  const edad = 31
  const estaActivo: boolean = true
  const musica: string[] = ['khruangbin','aphex twin','ice spice']
  return (
    <>
      <h3>Tipos basicos</h3>
      <hr/>
      {nombre}, {edad}, {(estaActivo) ? "activo" : "inactivo"}
      {musica.join(', ')}
    </>
  )
}
