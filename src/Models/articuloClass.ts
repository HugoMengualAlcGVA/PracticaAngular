export class ArticuloClass{
        "id": string
        "nombre": string
        "categoria": string
        "descripcion": string
        "unidades": number
        "precio": number

        constructor(
                id: string,
                nombre: string,
                categoria: string,
                descripcion: string,
                unidades: number,
                precio: number
        ){
                this.id = id,
                this.nombre = nombre;
                this.categoria = categoria
                this.descripcion = descripcion;
                this.unidades = unidades;
                this.precio = precio;
        }
}