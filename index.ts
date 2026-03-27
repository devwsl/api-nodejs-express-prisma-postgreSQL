import { prisma } from "./lib/prisma.js";
import express from 'express'
import cors from 'cors'


const app = express()
const port = 3000

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.post('/cadastrados', async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                nome: req.body.nome as string,
                documento: req.body.documento as string,
                tipo: req.body.tipo as string,
                empresa: req.body.empresa as string,
                carro: req.body.carro as string,
                placa: req.body.placa as string,
                modelo: req.body.modelo as string,
                prisma: req.body.prisma as string,
                bloco: req.body.bloco as string,
                apartamento: req.body.apartamento as string,
                autorizado: req.body.autorizado as string,
                obs: req.body.obs as string,
                foto: req.body.foto,
                dataCadastro: req.body.dataCadastro,
                dataSaida: null
            }
        })
        res.status(201).json(req.body)
    } catch (error) {
        res.status(400).json({ error: "Erro ao cadastrar" })
    }
})

app.put('/cadastrados/:id', async (req, res) => {
    try {
        await prisma.user.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                nome: req.body.nome as string,
                documento: req.body.documento as string,
                tipo: req.body.tipo as string,
                empresa: req.body.empresa as string,
                carro: req.body.carro as string,
                placa: req.body.placa as string,
                modelo: req.body.modelo as string,
                prisma: req.body.prisma as string,
                bloco: req.body.bloco as string,
                apartamento: req.body.apartamento as string,
                autorizado: req.body.autorizado as string,
                obs: req.body.obs as string,
            }
        })
        res.status(201).json(req.body)
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar" })
    }
})

app.get('/cadastrados', async (req, res) => {
    let users = [];

    if (Object.keys(req.query).length > 0) {
        users = await prisma.user.findMany({
            where: {
                nome: req.query.nome as string,
                documento: req.query.documento as string,
                empresa: req.query.empresa as string,
                placa: req.query.placa as string,
                bloco: req.query.bloco as string,
                apartamento: req.query.apartamento as string,
                prisma: req.query.prisma as string,
                obs: req.query.obs as string
            }
        });
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json(users);
})

app.delete('/cadastrados/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
})

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))