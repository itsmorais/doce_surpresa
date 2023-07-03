import Header from '../components/Header'
import Footer from '@/components/Footer'
import FormCatalogo from '@/components/FormCatalogo'
import { useState } from 'react'


export default function Home() {


    const CriarCatalogo = async (novoCatalogo) => {
        let newCatalogo = await fetch("http://localhost:3001/catalogo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo: novoCatalogo })
        })
        let response = await newCatalogo.json();
        setNovoCatalogoCriado(response.id);
    }

    const CriarCesta = async () => {
        const formData = new FormData();
        formData.append("cesta_nome", novaCestaNome);
        formData.append("preco", novaCestaPreco);
        formData.append("foto", cestaImagem);
        formData.append("catalogo_id", catalogoCriado);

        try {
            const response = await fetch(`http://localhost:3001/box/${catalogoCriado}`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setNovaCestaCriado(data.id);
                alert(`Nova cesta criada com sucesso! Código:${data.id}`)
            } else {
                throw new Error("Failed to create cesta");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const AtribuirItem = async () => {
        let newItem = await fetch(`http://localhost:3001/item/${cestaCriada}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ item_nome: novoItem })
        })
        let response = await newItem.json();
        setNovoCatalogoCriado(response.id);
        alert(`Novo item gerado Código:${response.id}`)
    }

    const addNewItemField = () => {
        setItens([...itens, ""]);
    }

    const handleItemChange = (index, value) => {
        const updatedItems = [...itens];
        updatedItems[index] = value;
        setItens(updatedItems);
    }

    return (
        <>
            <Header />
            <h1 style={{ fontSize: '31px', textAlign: 'center' }}>Criar novo Catalogo</h1>
            <InputText onClick={() => CriarCatalogo(novoCatalogo)} value={'Catalogo Nome'} onChange={e => setnovoCatalogo(e.target.value)} ></InputText>
            {catalogoCriado !== 0 && (
                <>
                   
                        <label>Nome da cesta
                            <input
                                type="text"
                                onChange={e => setNovaCestaNome(e.target.value)}
                            /></label>
                        <label> Preço da cesta R$                       <input
                            type="number"
                            onChange={e => setNovaCestaPreco(e.target.value)}
                        /></label>

                        <label>Foto da cesta:
                            <input
                                type="file"
                                name="foto"
                                onChange={e => setCestaImagem(e.target.files[0])}
                            /></label>
                        <button style={{ width: '100px', margin: 'auto' }} onClick={CriarCesta}>Criar Cesta</button>
                  
                </>
            )}
            {cestaCriada !== 0 && (
                <>
                   
                        {itens.map((item, index) => (
                            <input
                                key={index}
                                type='text'
                                placeholder={`Novo item da cesta: ${novaCestaNome}`}
                                value={item}
                                onChange={e => handleItemChange(index, e.target.value)}
                            />
                        ))}
                        <button style={{ width: '100px', margin: 'auto' }} onClick={addNewItemField}>Adicionar item</button>
                        <button style={{ width: '100px', margin: 'auto' }} placeholder='Incluir item(s)' onClick={AtribuirItem}>Incluir Itens</button>
                  
                </>
            )}
            <Footer></Footer>
        </>
    )
}
