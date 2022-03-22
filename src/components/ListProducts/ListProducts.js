import Card from    '../Card/Card';

const ListProducts = () => {
        return(
        <div className="container-cards">
            <Card title={'Carro Doble Accion'} price={10500}/>
            <Card title={'Carro Rueda Rulemanes'} price={12500}/>
            <Card title={'Horquillas Remo Corto'} price={4000}/>
            <Card title={'Horquillas Remo Largo'} price={4200}/>

        </div>
    )
}

export default ListProducts;

