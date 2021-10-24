import { Component } from "react"

const styles = {
    detallesCarro: {
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: 20,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
        borderRadius: "5px",
        width: "200px",
        right: 60
    },
    ul: {
        padding: "0px",
        marging: "0px"
    },
    producto: {
        listStyleType: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 20px",
        borderBottom: "1px solid #aaa",
    }
}

class DetallesCarro extends Component {
    render(){
        const { carro } = this.props;
        console.log(carro)
        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => 
                        <li style={styles.producto} key={x.name}>
                            <img src={x.img} alt={x.name} width="50" height="32"/>
                            {x.name} <span>{x.cantidad}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro