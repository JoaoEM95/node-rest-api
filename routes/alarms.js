const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).send({
        mensagem:'Testando GET no alarms'
    })

});

router.post('/',(req,res,next) =>{
    res.status(201).send({
        mensagem:'Usando Post'
    })

});

router.patch('/',(req,res,next) =>{
    res.status(201).send({
        mensagem:'Usando Patch'
    })

});

router.get('/:id_alarms',(req,res,next) =>{
    const id = req.params.id_alarms
    if(id === 'especial'){
        res.status(200).send({
            mensagem:'Teste do IF',
            id,
        })
    }else{
        res.status(200).send({
            mensagem:'Passou um ID qualquer'
        })
    }


});

module.exports = router;