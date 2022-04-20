const {Router} = require("express");
const admin = require("firebase-admin");
const router = Router();

admin.initializeApp({
    credential: admin.credential.cert("./credenciales.json"),
});

const db = admin.firestore();
//productos
router.post('api/productos',async(req, res) =>{
    try{
        const {id, nombre, modelo, marca, precio, descripcion} = req.body;
        await db.collection('productos')
         .doc('/'+id+'/')
         .create({
             nombre: nombre,
             modelo: modelo,
             marca: marca,
             precio: precio,
             descripcion: descripcion
         });
         return res.status(200).json();
    }catch (error){
        return res.status(500).send(error); 
    }
});

router.get('api/productos:id',async(req, res) =>{
    try {
        const doc = db.collection('productos');
        const item = await doc.get();
        const response = docs.map((doc) =>({
            id: doc.id,
            nombre: doc.data().nombre,
            modelo: doc.data().modelo,
            marca: doc.data().marca,
            precio: doc.data().precio,
            descripcion: doc.data().descripcion
        }));
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send(error); 
    }
});
router.delete('/api/productos/:id',async(req, res) =>{
    const {id} = req.params;
    try {
        const doc = db.collection('productos').doc(id);
        await doc.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).send(error)  
    }
});

//proveedor
router.post('api/proveedor',async(req, res) =>{
    try{
        const {id, nombre, empresa, correo, telefono} = req.body;
        await db.collection('proveedor')
         .doc('/'+id+'/')
         .create({
             nombre: nombre,
             empresa: empresa,
             correo: correo,
             telefono: telefono
         });
         return res.status(200).json();
    }catch (error){
        return res.status(500).send(error); 
    }
});

router.get('api/proveedor:id',async(req, res) =>{
    try {
        const doc = db.collection('proveedor');
        const item = await doc.get();
        const response = docs.map((doc) =>({
            id: doc.id,
            nombre: doc.data().nombre,
            empresa: doc.data().empresa,
            correo: doc.data().correo,
            telefono: doc.data().telefono
        }));
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send(error); 
    }
});

router.delete('/api/proveedor/:id',async(req, res) =>{
    const {id} = req.params;
    try {
        const doc = db.collection('proveedor').doc(id);
        await doc.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).send(error)  
    }
});
router.post('api/usuario',async(req, res) =>{
    try{
        const {id, nombre, apellidos, correo, password, rol} = req.body;
        await db.collection('usuario')
         .doc('/'+id+'/')
         .create({
             nombre: nombre,
             apellidos: apellidos,
             correo: correo,
             password: password,
            rol: rol
         });
         return res.status(200).json();
    }catch (error){
        return res.status(500).send(error); 
    }
});
router.get('api/usuario:id',async(req, res) =>{
    try {
        const doc = db.collection('usuario');
        const item = await doc.get();
        const response = docs.map((doc) =>({
            id: doc.id,
            nombre: doc.data().nombre,
            apellidos: doc.data().apellidos,
            correo: doc.data().correo,
            passowrd: doc.data().passowrd,
            rol: doc.data().rol
        }));
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send(error); 
    }
});
router.delete('/api/usuario/:id',async(req, res) =>{
    const {id} = req.params;
    try {
        const doc = db.collection('usuario').doc(id);
        await doc.delete();
        return res.status(200).json();
    } catch (error) {
        return res.status(500).send(error)  
    }
});